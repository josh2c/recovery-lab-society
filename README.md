# The Recovery Lab Society — catalog site

**Live:** https://josh2c.github.io/recovery-lab-society/

Static catalog site. Customers browse products and pricing, build an inquiry
list, and email it to the seller. **There is no checkout, cart purchase, payment
processing, or online transaction flow anywhere in this codebase**, by design.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

## Deployment

Pushing to `master` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages. The Pages source must be set to
**GitHub Actions** (not "Deploy from a branch") or Pages serves this README
through Jekyll instead of the app.

Because the site is served from `/recovery-lab-society` rather than a domain
root, the workflow passes `BASE_PATH` into the build so assets and links are
prefixed. Moving to a custom domain at the root means dropping that env var
from the workflow — nothing else changes.

## Before launch — required

1. **Set the inquiry email.** `src/lib/site.ts` → `orderEmail`. It is currently
   the placeholder `orders@example.com`. A yellow banner appears sitewide until
   you also set `orderEmailConfirmed: true`.
2. **Have the disclaimer reviewed.** `src/lib/site.ts` → `DISCLAIMER` uses
   research-use-only wording as a placeholder. No intended-use framing was
   supplied with the price list; this is a legal position, so confirm or replace it.

## Catalog data

`src/data/catalog.ts` is **generated** — do not edit it by hand. It is the
workbook reshaped, and nothing in it is invented.

```bash
npm run catalog -- "/path/to/Recovery Lab Society Retail List.xlsx"
```

The script prints a warning for every gap it finds (missing price, missing
category) so data problems surface instead of being silently filled in.

### How rows become products

The workbook lists 125 rows; the site shows 83 products. Rows are grouped by base
compound so `Retatrutide 10mg/20mg/30mg/50mg/100mg` reads as one product with
five options rather than five separate cards.

Grouping rules, all in `scripts/build-catalog.mjs`:

- A base compound with **only one row** keeps its workbook label verbatim as the
  product name. Stripping strength from a one-off blend like
  `Burn Blend — 15mg Reta / 5mg Tirz` mangles it, and there is no grouping to gain.
- Grouping ignores punctuation, so `MT-2` and `MT2` resolve to one product.
- **Nasal Sprays** is a delivery form, not a therapeutic category. Every row in
  that section restates an item filed elsewhere, so it folds into the variant's
  `form` instead of becoming a filter.
- **USA Made / 1776RX** stays a browsable category (it carries products found
  nowhere else) *and* tags its variants with a `line` badge, because several
  restate a compound at a different price.
- Variants carry a unique `id`. Labels are **not** unique — the workbook lists
  `Tesamorelin 10mg` and `MOTS-C 10mg` twice, at two prices. Anything keyed on
  label alone would conflate them, including the inquiry list.

## Known gaps in the source data

12 rows have no price and render as "Price on request":

- MK-677 12.5mg (60ct and 100ct)
- Glutathione Premix 20ml, Energy Lipo 20ml
- MT2 10mg (nasal), BPC-157 10mg (nasal)
- Vilon, Vesugen
- Generic HGH Kit 100iu, 150iu
- Copper Serum — Polypeptide Blend, Reta 18mg Mixed

Other items flagged for the owner:

- **`GHK-Cu (Tabs)` is filed under SARMs** in the workbook. It is a copper
  peptide, not a SARM. Left as-is rather than silently recategorized.
- **`Dream Catcher 5mg`** appears only under Nasal Sprays, so it has no
  therapeutic category and lands in "Uncategorized".
- **`Apitode 10mg`** may be a typo. Left verbatim.
- **`Cockbombs 50ct`** and **`Fuck Cancer Blend`** are the workbook's names.
  They render as written — decide whether they should appear on a public site.
- No descriptions, images, specifications, or documentation were supplied for
  any product. The product dialog says so explicitly rather than inventing copy.

## Architecture

```
scripts/build-catalog.mjs   workbook -> src/data/catalog.ts (generated)
src/lib/site.ts             business constants + disclaimer
src/lib/inquiry.tsx         inquiry list state, localStorage, mailto builder
src/lib/format.ts           price/terms formatting, search haystack
src/components/             nav, footer, cards, dialog, drawer, catalog browser
src/app/                    / (landing) and /products (catalog)
```

The inquiry list persists to `localStorage` under `rls.inquiry.v1` and is never
transmitted anywhere. "Email this inquiry" opens a prefilled `mailto:`; a
"Copy as text" fallback is promoted automatically when a list grows past the
~2 KB point where mail clients start truncating `mailto:` URLs.
