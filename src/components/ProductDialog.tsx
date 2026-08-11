"use client";

import { useEffect, useRef } from "react";
import type { Product } from "@/data/catalog";
import { formatPrice } from "@/lib/format";
import { itemId, useInquiry } from "@/lib/inquiry";
import { SITE } from "@/lib/site";

/**
 * Product detail.
 *
 * A dialog rather than a route: the workbook supplies only name, strength, form
 * and price, so 83 dedicated pages would each be a near-empty shell. This keeps
 * the customer in the grid while they assemble a list, which is the actual task.
 */
export default function ProductDialog({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const { add, has } = useInquiry();

  // Drive the native <dialog> from the `product` prop so Escape, focus trapping
  // and the top layer come from the platform instead of being reimplemented.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (product && !el.open) el.showModal();
    if (!product && el.open) el.close();
  }, [product]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };
    el.addEventListener("cancel", onCancel);
    return () => el.removeEventListener("cancel", onCancel);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      onClick={(e) => {
        // Backdrop clicks land on the dialog element itself.
        if (e.target === ref.current) onClose();
      }}
      className="m-auto w-[min(100vw-2rem,620px)] rounded-card bg-white p-0 text-ink backdrop:bg-ink/45 backdrop:backdrop-blur-[2px]"
    >
      {product && (
        <div className="max-h-[85dvh] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-ink-faint">
                {product.categories.join(" · ")}
              </p>
              <h2 className="mt-2 text-[26px] leading-tight font-medium tracking-[-0.02em] sm:text-[30px]">
                {product.name}
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline transition-colors hover:bg-bone"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <h3 className="mt-7 text-[12px] font-semibold uppercase tracking-[0.13em] text-ink-faint">
            Available options
          </h3>

          <ul className="mt-3 divide-y divide-hairline/70 border-y border-hairline/70">
            {product.variants.map((v) => {
              const added = has(itemId(product, v));
              return (
                <li key={v.id} className="flex items-center justify-between gap-4 py-3.5">
                  <div className="min-w-0">
                    <p className="text-[15px] font-medium">
                      {[v.size, v.form, v.count].filter(Boolean).join(" · ") || product.name}
                    </p>
                    {v.line && (
                      <p className="mt-0.5 text-[12.5px] text-accent">{v.line}</p>
                    )}
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="text-[15px] font-medium tabular-nums">
                      {v.price === null ? (
                        <span className="text-[13.5px] text-ink-faint">Price on request</span>
                      ) : (
                        formatPrice(v.price)
                      )}
                    </span>
                    <button
                      type="button"
                      onClick={() => add(product, v)}
                      className={`rounded-full px-3.5 py-1.5 text-[13px] font-semibold transition-colors ${
                        added
                          ? "bg-accent text-white"
                          : "border border-ink/80 hover:bg-ink hover:text-white"
                      }`}
                    >
                      {added ? "Added ✓" : "Add"}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>

          {/*
            Explicit rather than silent: the price list carried no descriptions,
            specifications or documentation, and none have been written here.
          */}
          <p className="mt-5 text-[13px] leading-relaxed text-ink-faint">
            No further product information was supplied for this item. For specifications,
            documentation or availability, email{" "}
            <a href={`mailto:${SITE.orderEmail}`} className="underline underline-offset-2">
              {SITE.orderEmail}
            </a>
            .
          </p>
        </div>
      )}
    </dialog>
  );
}
