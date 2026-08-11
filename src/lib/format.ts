import type { Product, Variant } from "@/data/catalog";

/** Prices in the workbook are whole USD; no cents are shown. */
export function formatPrice(price: number | null): string {
  if (price === null) return "Price on request";
  return `$${price.toLocaleString("en-US")}`;
}

/**
 * The human-readable terms of a variant -- strength, delivery form, pack count,
 * product line -- assembled only from fields the workbook actually supplied.
 */
export function variantTerms(v: Variant): string {
  const parts = [v.size, v.form, v.count].filter(Boolean);
  return parts.length ? parts.join(" · ") : v.label;
}

/** Lowest listed price across a product's variants, ignoring unpriced ones. */
export function fromPrice(p: Product): number | null {
  const priced = p.variants.map((v) => v.price).filter((n): n is number => n !== null);
  return priced.length ? Math.min(...priced) : null;
}

/**
 * Match tokens for a product. Includes every variant label so a search for
 * "nasal" or "500mcg" finds the product that carries it.
 */
export function searchHaystack(p: Product): string {
  return [p.name, ...p.categories, ...p.variants.map((v) => v.label)].join(" ").toLowerCase();
}
