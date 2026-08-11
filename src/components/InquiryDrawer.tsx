"use client";

import { useEffect, useState } from "react";
import {
  buildInquiryBody,
  buildMailto,
  MAILTO_SAFE_LIMIT,
  useInquiry,
} from "@/lib/inquiry";
import { formatPrice } from "@/lib/format";
import { DISCLAIMER, SITE } from "@/lib/site";

/**
 * Review-and-send panel for the inquiry list.
 *
 * The send action is a mailto: — it opens the customer's own mail client with
 * the selection pre-written, so the seller receives a normal email they can
 * reply to. No order is submitted and no total is calculated anywhere here.
 */
export default function InquiryDrawer() {
  const { items, open, setOpen, remove, setQty, clear, count } = useInquiry();
  const [copied, setCopied] = useState(false);

  // Lock background scroll while the panel is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const mailto = buildMailto(items);
  // Long lists overflow what some mail clients accept in a mailto: URL, so the
  // copy-and-paste path is promoted instead of silently sending a truncated one.
  const tooLongForMailto = mailto.length > MAILTO_SAFE_LIMIT;

  async function copyBody() {
    try {
      await navigator.clipboard.writeText(buildInquiryBody(items));
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Inquiry list">
      <button
        type="button"
        aria-label="Close inquiry list"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-ink/45 backdrop-blur-[2px]"
      />

      <aside className="relative flex h-full w-full flex-col bg-bone sm:w-[440px] sm:border-l sm:border-hairline">
        <header className="flex items-center justify-between gap-4 border-b border-hairline px-5 py-4 sm:px-6">
          <div>
            <h2 className="text-[19px] font-medium tracking-[-0.015em]">Inquiry List</h2>
            <p className="mt-0.5 text-[13px] text-ink-soft">
              {count} item{count === 1 ? "" : "s"} selected
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-hairline bg-white"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-8 text-center">
            <p className="text-[16px] font-medium">Your inquiry list is empty.</p>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-soft">
              Add products from the catalog, then send the whole list to us in one email.
            </p>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-hairline overflow-y-auto px-5 sm:px-6">
              {items.map((i) => (
                <li key={i.id} className="py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="text-[15px] font-medium leading-snug">{i.productName}</p>
                      <p className="mt-0.5 text-[13px] text-ink-soft">{i.terms}</p>
                      {/* Without this two same-strength entries look identical here. */}
                      {i.line && <p className="mt-0.5 text-[12.5px] text-accent">{i.line}</p>}
                    </div>
                    <span className="shrink-0 text-[14px] font-medium tabular-nums">
                      {i.price === null ? (
                        <span className="text-[12.5px] text-ink-faint">On request</span>
                      ) : (
                        formatPrice(i.price)
                      )}
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex items-center rounded-full border border-hairline bg-white">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${i.productName}`}
                        onClick={() => setQty(i.id, i.qty - 1)}
                        className="grid h-8 w-8 place-items-center text-[16px] leading-none disabled:opacity-35"
                        disabled={i.qty <= 1}
                      >
                        −
                      </button>
                      <span className="w-7 text-center text-[14px] font-medium tabular-nums">{i.qty}</span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${i.productName}`}
                        onClick={() => setQty(i.id, i.qty + 1)}
                        className="grid h-8 w-8 place-items-center text-[16px] leading-none"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => remove(i.id)}
                      className="text-[13px] text-ink-faint underline underline-offset-2 hover:text-ink"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <footer className="border-t border-hairline bg-white px-5 py-5 sm:px-6">
              {tooLongForMailto && (
                <p className="mb-3 rounded-lg bg-bone-deep px-3 py-2.5 text-[12.5px] leading-relaxed text-ink-soft">
                  This list is long enough that some email apps will cut it short. Copy it
                  instead and paste it into a new message.
                </p>
              )}

              <div className="flex flex-col gap-2.5">
                <a
                  href={mailto}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3.5 text-[15px] font-semibold text-white transition-opacity hover:opacity-88"
                >
                  Email this inquiry
                  <svg width="14" height="11" viewBox="0 0 14 11" aria-hidden="true">
                    <path
                      d="M0 5.5h12M8.5 2L12 5.5 8.5 9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

                <div className="flex gap-2.5">
                  <button
                    type="button"
                    onClick={copyBody}
                    className="flex-1 rounded-full border border-ink/25 px-4 py-2.5 text-[13.5px] font-medium transition-colors hover:border-ink/60"
                  >
                    {copied ? "Copied ✓" : "Copy as text"}
                  </button>
                  <button
                    type="button"
                    onClick={clear}
                    className="rounded-full border border-ink/25 px-4 py-2.5 text-[13.5px] font-medium text-ink-soft transition-colors hover:border-ink/60"
                  >
                    Clear
                  </button>
                </div>
              </div>

              <p className="mt-3.5 text-center text-[12px] text-ink-faint">
                Opens your email app addressed to {SITE.orderEmail}. No payment is taken here.
              </p>
              <p className="mt-2 text-[11.5px] leading-relaxed text-ink-faint">{DISCLAIMER}</p>
            </footer>
          </>
        )}
      </aside>
    </div>
  );
}
