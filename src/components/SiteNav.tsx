"use client";

import Link from "next/link";
import { useState } from "react";
import { useInquiry } from "@/lib/inquiry";
import { SITE } from "@/lib/site";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Catalog" },
  { href: "/#categories", label: "Categories" },
  { href: "/#how-to-order", label: "How to Order" },
];

/**
 * Deep ink bar borrowed from the clinical reference: full-bleed, sticky, with a
 * single high-contrast CTA pinned right. On mobile it collapses to a disclosure
 * panel rather than an overlay, which keeps the inquiry count always visible.
 */
export default function SiteNav() {
  const { count, setOpen, ready } = useInquiry();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-ink text-white">
      <nav className="mx-auto flex max-w-[1400px] items-center gap-4 px-5 py-3.5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setMenuOpen(false)}
        >
          <Mark />
          <span className="text-[15px] font-semibold tracking-[0.14em] uppercase leading-none">
            Recovery Lab
          </span>
        </Link>

        <ul className="ml-6 hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-[14.5px] font-medium text-white/75 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex items-center gap-2 rounded-full bg-accent-bright px-4 py-2 text-[14px] font-semibold text-ink transition-opacity hover:opacity-85 sm:px-5 sm:py-2.5"
          >
            <span className="hidden sm:inline">Inquiry List</span>
            <span className="sm:hidden">Inquiry</span>
            {/* Suppressed until hydrated: the count comes from localStorage. */}
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-ink px-1.5 text-[11.5px] font-bold text-accent-bright tabular-nums">
              {ready ? count : 0}
            </span>
          </button>

          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full border border-white/25 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
              <path
                d={menuOpen ? "M2 2l12 8M14 2L2 10" : "M0 1h16M0 6h16M0 11h16"}
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <ul className="border-t border-white/12 px-5 pb-4 lg:hidden">
          {LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-white/10 py-3.5 text-[15px] font-medium text-white/85"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {!SITE.orderEmailConfirmed && (
        <div className="bg-accent-bright px-5 py-1.5 text-center text-[12px] font-semibold text-ink">
          Setup: the inquiry address is still the placeholder{" "}
          <code className="font-mono">{SITE.orderEmail}</code> — set it in{" "}
          <code className="font-mono">src/lib/site.ts</code>.
        </div>
      )}
    </header>
  );
}

/** Simple geometric wordmark stand-in — no reference branding is reproduced. */
function Mark() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M12 4v16M4.5 8.5h15M4.5 15.5h15" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
