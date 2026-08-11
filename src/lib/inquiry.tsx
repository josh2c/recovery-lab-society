"use client";

/**
 * The inquiry list: a saved selection of catalog items a customer assembles
 * before emailing the seller.
 *
 * This is deliberately NOT a cart. It computes no order total, holds no payment
 * state, and terminates in a mailto: -- the transaction happens over email,
 * off-site. Persistence is localStorage only; nothing is transmitted anywhere.
 */

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product, Variant } from "@/data/catalog";
import { SITE } from "./site";
import { formatPrice, variantTerms } from "./format";

export type InquiryItem = {
  /** `${product.slug}::${variant.id}` -- stable across reloads. */
  id: string;
  productName: string;
  variantLabel: string;
  terms: string;
  /** Product line, when the workbook distinguished one. Part of the identity:
   *  two variants can share a label and differ only by this. */
  line: string | null;
  price: number | null;
  qty: number;
};

const STORAGE_KEY = "rls.inquiry.v1";

export const itemId = (p: Product, v: Variant) => `${p.slug}::${v.id}`;

type InquiryContext = {
  items: InquiryItem[];
  /** Hydration guard: false during the first client render. */
  ready: boolean;
  count: number;
  has: (id: string) => boolean;
  add: (product: Product, variant: Variant) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  /** Drawer visibility lives here so the nav button and the drawer stay in sync. */
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Ctx = createContext<InquiryContext | null>(null);

export function InquiryProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  // Load once on mount rather than lazily in useState: the server render has no
  // localStorage, and seeding state from it directly would desync hydration.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed as InquiryItem[]);
      }
    } catch {
      // Corrupt or unavailable storage (private mode, quota) -- start empty.
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Non-fatal: the list still works for this session.
    }
  }, [items, ready]);

  const add = useCallback((product: Product, variant: Variant) => {
    const id = itemId(product, variant);
    setItems((prev) => {
      const found = prev.find((i) => i.id === id);
      if (found) return prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i));
      return [
        ...prev,
        {
          id,
          productName: product.name,
          variantLabel: variant.label,
          terms: variantTerms(variant),
          line: variant.line,
          price: variant.price,
          qty: 1,
        },
      ];
    });
  }, []);

  const remove = useCallback(
    (id: string) => setItems((prev) => prev.filter((i) => i.id !== id)),
    [],
  );

  const setQty = useCallback((id: string, qty: number) => {
    const next = Math.max(1, Math.min(99, Math.floor(qty) || 1));
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty: next } : i)));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<InquiryContext>(
    () => ({
      items,
      ready,
      count: items.reduce((n, i) => n + i.qty, 0),
      has: (id) => items.some((i) => i.id === id),
      add,
      remove,
      setQty,
      clear,
      open,
      setOpen,
    }),
    [items, ready, add, remove, setQty, clear, open],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useInquiry() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useInquiry must be used inside <InquiryProvider>");
  return ctx;
}

/**
 * Builds the plain-text body the customer sends.
 *
 * Prices are echoed back as listed so the seller can spot a stale page, but no
 * order total is computed -- final pricing is the seller's to state.
 */
export function buildInquiryBody(items: InquiryItem[]): string {
  const lines = [
    "Hi,",
    "",
    "I'd like to inquire about the following:",
    "",
    ...items.map((i) => {
      const price = i.price === null ? "price on request" : `${formatPrice(i.price)} listed`;
      // The line is appended because two catalog entries can share a label and
      // be told apart only by it -- without this the seller gets an ambiguous row.
      const name = i.line ? `${i.variantLabel} [${i.line}]` : i.variantLabel;
      return `  - ${name}  x${i.qty}  (${price})`;
    }),
    "",
    "Questions / notes:",
    "",
    "",
    "Thanks,",
    "",
  ];
  return lines.join("\n");
}

export function buildMailto(items: InquiryItem[]): string {
  const subject = `Product inquiry - ${items.length} item${items.length === 1 ? "" : "s"}`;
  const body = buildInquiryBody(items);
  return `mailto:${SITE.orderEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** mailto: URLs get truncated by some clients past roughly 2 KB. */
export const MAILTO_SAFE_LIMIT = 1900;
