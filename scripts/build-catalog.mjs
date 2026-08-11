// Regenerates src/data/catalog.ts from the source price list workbook.
//   node scripts/build-catalog.mjs "/path/to/Recovery Lab Society Retail List.xlsx"
//
// The workbook is the single source of truth. Nothing here invents a product,
// a price, a description, or a claim -- it only reshapes rows into a browsable
// structure (base compound -> variants) and flags gaps for a human to fill.

import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = process.argv[2];
if (!SRC) {
  console.error("usage: node scripts/build-catalog.mjs <workbook.xlsx>");
  process.exit(1);
}

// --- 1. read the sheet -------------------------------------------------------
// Minimal xlsx reader: the workbook uses inline strings and a single sheet, so
// we unzip it with the system `unzip` and pull cell values straight out of XML
// rather than taking on a spreadsheet dependency.
const xml = execFileSync("unzip", ["-p", resolve(SRC), "xl/worksheets/sheet1.xml"], {
  encoding: "utf8",
  maxBuffer: 1 << 26,
});

const rows = [];
for (const rowXml of xml.split(/<row\b/).slice(1)) {
  const cells = {};
  for (const m of rowXml.matchAll(/<c r="([A-Z]+)\d+"[^>]*>([\s\S]*?)<\/c>/g)) {
    const [, col, body] = m;
    const inline = [...body.matchAll(/<t[^>]*>([\s\S]*?)<\/t>/g)].map((x) => x[1]).join("");
    const num = body.match(/<v>([\s\S]*?)<\/v>/);
    const raw = inline || (num ? num[1] : "");
    cells[col] = decode(raw).trim();
  }
  rows.push(cells);
}

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)));
}

// --- 2. classify rows --------------------------------------------------------
// Section headers in the sheet are rows with a label and no price. Products with
// a missing price look identical, so headers are matched against an explicit
// list taken from the workbook -- guessing would silently drop real products.
const SECTIONS = new Set([
  "Weight Loss & Metabolism",
  "Recovery, Healing & Performance",
  "Sexual Health",
  "Wellness, Longevity & Nootropics",
  "Growth Hormone & Muscle Optimization",
  "SARMs",
  "Injectable & Liquid Blends",
  "Nasal Sprays",
  "Bioregulators",
  "HGH",
  "USA Made / 1776RX",
]);

// "Nasal Sprays" is a delivery form, not a therapeutic category -- every row in
// it restates an item that already appears under a therapeutic heading, so it
// folds into the variant's `form` rather than becoming its own filter.
const FORM_SECTIONS = { "Nasal Sprays": "Nasal" };
// "USA Made / 1776RX" IS browsable as its own line (it carries products that
// appear nowhere else), so it stays a category -- but its rows also get a `line`
// badge, because several restate a compound at a different price point.
const LINE_SECTIONS = { "USA Made / 1776RX": "USA Made / 1776RX" };

const records = [];
let section = null;
for (const r of rows) {
  const name = r.A;
  if (!name) continue;
  if (name.startsWith("The Recovery Lab Society") || name === "Product") continue;
  if (SECTIONS.has(name)) {
    section = name;
    continue;
  }
  records.push({ name, priceRaw: r.B, section });
}

// --- 3. split a row label into base compound + size + form + count -----------
const FORM_TOKENS = [
  [/\(\s*nasal\s*\)/i, "Nasal"],
  [/\(\s*injectable\s*\)/i, "Injectable"],
  [/\(\s*tabs?\s*\)/i, "Tablet"],
  [/\bpremix\b/i, "Premix"],
  [/\bmixed\b/i, "Mixed"],
];

function parseLabel(name) {
  let base = name;
  let form = null;

  for (const [re, label] of FORM_TOKENS) {
    if (re.test(base)) {
      form = label;
      base = base.replace(re, " ");
    }
  }

  // Count, e.g. "60ct", "50ct", "4-pack".
  let count = null;
  base = base.replace(/\b(\d+)\s*ct\b/i, (_, n) => ((count = `${n} ct`), " "));
  base = base.replace(/\b(\d+)-pack\b/i, (_, n) => ((count = `${n}-pack`), " "));

  // Strength: handles "10mg", "500mcg", "10mg/ml", "5mg+5mg", "10/10/50",
  // "120iu", "20ml", "10mg/10mg".
  let size = null;
  const strength =
    base.match(/\b\d+(?:\.\d+)?\s*(?:mg|mcg|iu|ml|g)(?:\s*\/\s*\d*\s*(?:mg|mcg|ml|iu))*(?:\s*\+\s*\d+(?:\.\d+)?\s*(?:mg|mcg))*/i) ||
    base.match(/\b\d+(?:\/\d+)+\b/);
  if (strength) {
    size = strength[0].replace(/\s+/g, "");
    base = base.replace(strength[0], " ");
  }

  base = base.replace(/\s{2,}/g, " ").replace(/[\s—-]+$/, "").replace(/^[\s—-]+/, "").trim();
  return { base, size, form, count };
}

// --- 4. group into products --------------------------------------------------
const slug = (s) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
// Grouping ignores punctuation entirely so the sheet's inconsistent hyphenation
// ("MT-2" vs "MT2") resolves to one product instead of two.
const groupKey = (s) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

const warnings = [];

// Pass 1: parse every row and tally how many rows share each base compound.
const parsed = records.map((rec) => {
  const bits = parseLabel(rec.name);
  return { ...rec, ...bits, key: groupKey(bits.base) };
});
const tally = new Map();
for (const p of parsed) tally.set(p.key, (tally.get(p.key) ?? 0) + 1);

// Pass 2: build products.
//
// Stripping strength out of a label is only safe when it actually buys grouping.
// Multi-compound one-offs ("Burn Blend - 15mg Reta / 5mg Tirz") come back from
// parseLabel mangled, because only the first strength token matches. So a base
// that owns exactly one row keeps its workbook label verbatim as the product
// name; only bases with real siblings get collapsed into a variant set.
const products = new Map();

for (const rec of parsed) {
  const grouped = tally.get(rec.key) > 1;
  const displayName = grouped ? rec.base : rec.name;
  const key = grouped ? rec.key : groupKey(rec.name);

  const sectionForm = FORM_SECTIONS[rec.section];
  const line = LINE_SECTIONS[rec.section] ?? null;
  // Rows from the nasal facet section attach to whichever product they match and
  // contribute no category of their own.
  const category = sectionForm ? null : rec.section;

  const price = rec.priceRaw === "" ? null : Number(rec.priceRaw);
  if (rec.priceRaw === "") warnings.push(`missing price: "${rec.name}" (${rec.section})`);
  else if (!Number.isFinite(price)) warnings.push(`unparseable price: "${rec.name}" = ${rec.priceRaw}`);

  if (!products.has(key)) {
    products.set(key, { slug: slug(displayName), name: displayName, categories: [], variants: [] });
  }
  const p = products.get(key);
  if (category && !p.categories.includes(category)) p.categories.push(category);

  p.variants.push({
    label: rec.name,
    // An ungrouped product already states its strength in its own name; repeating
    // it on the single variant row just reads as a stutter.
    size: grouped ? rec.size ?? null : null,
    form: rec.form ?? sectionForm ?? null,
    count: grouped ? rec.count ?? null : null,
    line,
    price: Number.isFinite(price) ? price : null,
  });
}

// Collapse variants that the sheet lists twice with identical terms (the nasal
// section restating a row that already exists under a therapeutic heading).
for (const p of products.values()) {
  const seen = new Map();
  for (const v of p.variants) {
    const k = [v.size, v.form, v.count, v.line, v.price].join("|");
    if (seen.has(k)) continue;
    seen.set(k, v);
  }
  p.variants = [...seen.values()].sort((a, b) => {
    if (a.price === null) return 1;
    if (b.price === null) return -1;
    return a.price - b.price;
  });

  // Stable unique id per variant. The label alone is NOT unique -- the workbook
  // lists e.g. "Tesamorelin 10mg" under both the standard and 1776RX headings at
  // different prices. Anything keyed on label alone (React keys, and more
  // importantly the inquiry list) would silently conflate the two.
  const used = new Set();
  for (const v of p.variants) {
    let id = slug([v.label, v.line].filter(Boolean).join(" "));
    if (used.has(id)) {
      let n = 2;
      while (used.has(`${id}-${n}`)) n++;
      id = `${id}-${n}`;
    }
    used.add(id);
    v.id = id;
  }
}

// A product with no category appeared only in the nasal facet section, meaning
// the workbook never filed it under a therapeutic heading.
for (const p of products.values()) {
  if (p.categories.length === 0) {
    p.categories.push("Uncategorized");
    warnings.push(`no therapeutic category: "${p.name}" -- appears only in the Nasal Sprays section`);
  }
}

const CATEGORY_ORDER = [
  "Weight Loss & Metabolism",
  "Recovery, Healing & Performance",
  "Growth Hormone & Muscle Optimization",
  "Sexual Health",
  "Wellness, Longevity & Nootropics",
  "Bioregulators",
  "Injectable & Liquid Blends",
  "SARMs",
  "HGH",
  "USA Made / 1776RX",
  "Uncategorized",
];

const list = [...products.values()].sort((a, b) => {
  const ca = CATEGORY_ORDER.indexOf(a.categories[0]);
  const cb = CATEGORY_ORDER.indexOf(b.categories[0]);
  return ca !== cb ? ca - cb : a.name.localeCompare(b.name);
});

// --- 5. emit -----------------------------------------------------------------
const out = `// GENERATED FILE -- do not edit by hand.
// Source: "${SRC.split("/").pop()}"
// Regenerate: node scripts/build-catalog.mjs "<workbook.xlsx>"
//
// Every name, strength and price below comes verbatim from the workbook.
// A null price means the workbook left that cell blank.

export type Variant = {
  /** Unique within its product. Labels alone are not unique -- see build script. */
  id: string;
  /** The row label exactly as written in the workbook. */
  label: string;
  size: string | null;
  form: string | null;
  count: string | null;
  /** Non-null when the workbook listed this under a distinct product line. */
  line: string | null;
  /** USD. null means the workbook did not supply a price. */
  price: number | null;
};

export type Product = {
  slug: string;
  name: string;
  categories: string[];
  variants: Variant[];
};

export const CATEGORIES = ${JSON.stringify(CATEGORY_ORDER.filter((c) => list.some((p) => p.categories.includes(c))), null, 2)} as const;

export const PRODUCTS: Product[] = ${JSON.stringify(list, null, 2)};
`;

writeFileSync(resolve(__dirname, "../src/data/catalog.ts"), out);

console.log(`rows: ${records.length}  products: ${list.length}  categories: ${CATEGORY_ORDER.length}`);
console.log(`\n${warnings.length} warnings:`);
for (const w of warnings) console.log("  - " + w);
