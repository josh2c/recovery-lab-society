"use client";

import { useDeferredValue, useMemo, useState } from "react";
import { CATEGORIES, PRODUCTS, type Product } from "@/data/catalog";
import { searchHaystack } from "@/lib/format";
import ProductCard from "./ProductCard";
import ProductDialog from "./ProductDialog";

const ALL = "All Products";

/**
 * The catalog surface: pill filters over a card grid, matching the editorial
 * reference. 83 products across 11 categories is past the point where a flat
 * list works, so search runs alongside the pills rather than replacing them.
 */
export default function CatalogBrowser({ initialCategory }: { initialCategory?: string }) {
  const [category, setCategory] = useState<string>(initialCategory ?? ALL);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Product | null>(null);

  // Keeps typing responsive while the grid re-filters.
  const deferredQuery = useDeferredValue(query);

  const counts = useMemo(() => {
    const map = new Map<string, number>([[ALL, PRODUCTS.length]]);
    for (const c of CATEGORIES) {
      map.set(c, PRODUCTS.filter((p) => p.categories.includes(c)).length);
    }
    return map;
  }, []);

  const results = useMemo(() => {
    const q = deferredQuery.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      if (category !== ALL && !p.categories.includes(category)) return false;
      if (!q) return true;
      // Every space-separated term must match, so "bpc nasal" narrows properly.
      const hay = searchHaystack(p);
      return q.split(/\s+/).every((term) => hay.includes(term));
    });
  }, [category, deferredQuery]);

  return (
    <>
      <div className="flex flex-col gap-5">
        {/* Search sits above the pills so it reads as the broader control. */}
        <div className="relative max-w-md">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-faint"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            aria-hidden="true"
          >
            <circle cx="6.5" cy="6.5" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
            <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name, strength or form…"
            aria-label="Search the catalog"
            className="w-full rounded-full border border-hairline bg-white py-3 pl-11 pr-4 text-[15px] outline-none placeholder:text-ink-faint focus:border-ink/50"
          />
        </div>

        {/* Horizontally scrollable on narrow screens rather than wrapping to
            four ragged rows, which is what the reference does at mobile width. */}
        <div className="-mx-5 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <ul className="flex w-max gap-2 sm:w-auto sm:flex-wrap">
            {[ALL, ...CATEGORIES].map((c) => {
              const active = c === category;
              return (
                <li key={c}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => setCategory(c)}
                    className={`whitespace-nowrap rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors ${
                      active
                        ? "border-ink bg-ink text-white"
                        : "border-hairline bg-transparent hover:border-ink/45"
                    }`}
                  >
                    {c}
                    <span className={`ml-1.5 tabular-nums ${active ? "text-white/55" : "text-ink-faint"}`}>
                      {counts.get(c) ?? 0}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <p aria-live="polite" className="mt-7 text-[13.5px] text-ink-soft">
        {results.length} {results.length === 1 ? "product" : "products"}
        {category !== ALL && <> in {category}</>}
        {query.trim() && <> matching “{query.trim()}”</>}
      </p>

      {results.length === 0 ? (
        <div className="mt-8 rounded-card border border-dashed border-hairline py-16 text-center">
          <p className="text-[16px] font-medium">No products match that search.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory(ALL);
            }}
            className="mt-3 text-[14px] underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {results.map((p) => (
            <li key={p.slug} className="flex">
              <ProductCard product={p} onOpen={setOpen} />
            </li>
          ))}
        </ul>
      )}

      <ProductDialog product={open} onClose={() => setOpen(null)} />
    </>
  );
}
