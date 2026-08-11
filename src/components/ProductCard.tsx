"use client";

import type { Product } from "@/data/catalog";
import { formatPrice, fromPrice } from "@/lib/format";

/**
 * The reference cards lean on product photography, which was not supplied with
 * this catalog. Rather than fake imagery, the card leads with the strength range
 * as a typographic block — the thing a buyer here is actually scanning for.
 */
export default function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (p: Product) => void;
}) {
  const low = fromPrice(product);
  const multi = product.variants.length > 1;
  // Show at most three strengths on the face of the card; the rest live in the
  // detail dialog so cards stay a uniform height across the grid.
  const shown = product.variants.slice(0, 3);
  const extra = product.variants.length - shown.length;

  return (
    <article className="group flex w-full flex-col rounded-card bg-white p-5 ring-1 ring-hairline/60 transition-shadow hover:shadow-[0_8px_28px_rgba(20,20,20,0.08)] sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-ink-faint">
        {product.categories[0]}
      </p>

      <h3 className="mt-2.5 text-[20px] leading-tight font-medium tracking-[-0.015em] sm:text-[22px]">
        {product.name}
      </h3>

      {/* A single-option product states its price once, in the footer. Only a
          real variant set earns the strength/price breakdown list. */}
      {multi && (
        <ul className="mt-4 space-y-1.5 border-t border-hairline/70 pt-4">
          {shown.map((v) => (
            <li key={v.id} className="flex items-baseline justify-between gap-3 text-[14px]">
              <span className="text-ink-soft">
                {[v.size, v.form, v.count].filter(Boolean).join(" · ") || v.label}
                {v.line && (
                  <span className="ml-1.5 text-[11px] font-semibold uppercase tracking-wide text-accent">
                    US
                  </span>
                )}
              </span>
              <span className="shrink-0 font-medium tabular-nums">
                {v.price === null ? (
                  <span className="text-ink-faint">On request</span>
                ) : (
                  formatPrice(v.price)
                )}
              </span>
            </li>
          ))}
          {extra > 0 && <li className="pt-0.5 text-[13px] text-ink-faint">+{extra} more</li>}
        </ul>
      )}

      <div className="mt-auto flex items-center justify-between gap-3 border-t border-hairline/70 pt-5">
        {multi ? (
          <p className="text-[13px] text-ink-faint">
            {product.variants.length} options
            {low !== null && <> · from {formatPrice(low)}</>}
          </p>
        ) : (
          <p className="text-[19px] font-medium tabular-nums">
            {product.variants[0].price === null ? (
              <span className="text-[14px] font-normal text-ink-faint">Price on request</span>
            ) : (
              formatPrice(product.variants[0].price)
            )}
          </p>
        )}
        <button
          type="button"
          onClick={() => onOpen(product)}
          className="flex items-center gap-1.5 rounded-full border border-ink/80 px-4 py-2 text-[13.5px] font-medium transition-colors group-hover:bg-ink group-hover:text-white"
        >
          View
          <svg width="13" height="10" viewBox="0 0 13 10" aria-hidden="true">
            <path
              d="M0 5h11M7.5 1.5L11 5l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </article>
  );
}
