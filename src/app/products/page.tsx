import { Suspense } from "react";
import type { Metadata } from "next";
import CatalogGate from "@/components/CatalogGate";
import { PRODUCTS } from "@/data/catalog";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: `All Products — ${SITE.name}`,
  description: "The full research compound catalog with current retail pricing.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-8 sm:py-16">
      <header className="max-w-2xl">
        <h1 className="display text-[40px] font-semibold sm:text-[56px]">All Products</h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">
          {PRODUCTS.length} compounds with current retail pricing. Add what you need to your
          inquiry list, then send it to us by email — there is no checkout here.
        </p>
      </header>

      <div className="mt-10">
        {/* useSearchParams suspends during prerender, so the browser gets the
            shell immediately and the deep-linked category applies on hydration. */}
        <Suspense fallback={<div className="h-32" />}>
          <CatalogGate />
        </Suspense>
      </div>
    </div>
  );
}
