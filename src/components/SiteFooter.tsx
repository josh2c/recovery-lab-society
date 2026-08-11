import Link from "next/link";
import { DISCLAIMER, SITE } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-hairline bg-ink text-white">
      <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="text-[15px] font-semibold uppercase tracking-[0.14em]">{SITE.name}</p>
            <p className="mt-3 max-w-sm text-[14.5px] leading-relaxed text-white/60">
              Orders are arranged by email. Send us your inquiry list and we will confirm
              availability, pricing and next steps.
            </p>
            <a
              href={`mailto:${SITE.orderEmail}`}
              className="mt-5 inline-block rounded-full bg-accent-bright px-5 py-2.5 text-[14px] font-semibold text-ink"
            >
              {SITE.orderEmail}
            </a>
          </div>

          <nav>
            <p className="text-[12px] font-semibold uppercase tracking-[0.13em] text-white/45">
              Catalog
            </p>
            <ul className="mt-4 space-y-2.5 text-[14.5px] text-white/75">
              <li><Link href="/products" className="hover:text-white">All products</Link></li>
              <li><Link href="/#categories" className="hover:text-white">Categories</Link></li>
              <li><Link href="/#how-to-order" className="hover:text-white">How to order</Link></li>
            </ul>
          </nav>

          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.13em] text-white/45">
              Pricing
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-white/60">
              Prices shown are the current retail list and may change. Confirm final pricing
              and availability by email before ordering.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/12 pt-6">
          <p className="max-w-3xl text-[12.5px] leading-relaxed text-white/45">{DISCLAIMER}</p>
          <p className="mt-4 text-[12.5px] text-white/35">
            © {new Date().getFullYear()} {SITE.name}. No products are sold or shipped through
            this website.
          </p>
        </div>
      </div>
    </footer>
  );
}
