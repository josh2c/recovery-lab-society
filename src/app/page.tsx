import Link from "next/link";
import { CATEGORIES, PRODUCTS } from "@/data/catalog";
import { SITE } from "@/lib/site";

const priced = PRODUCTS.flatMap((p) => p.variants).filter((v) => v.price !== null);

const STEPS = [
  {
    n: "01",
    title: "Browse the catalog",
    body: "Every compound we carry, with its available strengths, delivery forms and current retail price.",
  },
  {
    n: "02",
    title: "Build your inquiry list",
    body: "Add the items and quantities you want. Your list is saved in your browser as you go.",
  },
  {
    n: "03",
    title: "Send it by email",
    body: "One click writes the email for you, itemised and ready to send. We reply to confirm availability and next steps.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero: two-tone display headline and a right-hand support column, taken
          from the clinical reference, set on the editorial reference's ground. */}
      <section className="mx-auto max-w-[1400px] px-5 pt-14 pb-16 sm:px-8 sm:pt-20 sm:pb-20">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end lg:gap-16">
          <h1 className="display text-[44px] font-semibold sm:text-[64px] lg:text-[76px]">
            Research Compounds
            <span className="mt-1 block font-normal text-ink-soft">
              Catalog &amp; Current Pricing
            </span>
          </h1>

          <div className="lg:pb-4">
            <p className="max-w-md text-[16px] leading-relaxed text-ink-soft sm:text-[17px]">
              The full {SITE.shortName} retail list. Browse everything we carry, build an
              inquiry list, and email it to us — we handle orders directly, not through a
              checkout.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              <Link
                href="/products"
                className="rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-88"
              >
                View all products
              </Link>
              <Link
                href="#how-to-order"
                className="rounded-full border border-ink/30 px-6 py-3 text-[15px] font-medium transition-colors hover:border-ink/70"
              >
                How ordering works
              </Link>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-hairline pt-8 sm:mt-20 sm:grid-cols-4">
          {[
            [PRODUCTS.length, "Products"],
            [priced.length, "Priced options"],
            [CATEGORIES.length, "Categories"],
            [`$${Math.min(...priced.map((v) => v.price!))}`, "Lowest listed price"],
          ].map(([value, label]) => (
            <div key={label as string}>
              <dt className="text-[32px] font-medium tabular-nums tracking-[-0.02em] sm:text-[40px]">
                {value}
              </dt>
              <dd className="mt-1 text-[13px] uppercase tracking-[0.11em] text-ink-faint">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Category rail — the reference's carousel, rebuilt as a scroll-snap strip
          so it works by swipe on touch and by trackpad on desktop without JS. */}
      <section id="categories" className="border-y border-hairline bg-bone-deep py-14 sm:py-16">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="flex items-end justify-between gap-6">
            <h2 className="display text-[30px] font-semibold sm:text-[38px]">Browse by category</h2>
            <Link
              href="/products"
              className="hidden shrink-0 text-[14.5px] underline underline-offset-4 sm:block"
            >
              All products
            </Link>
          </div>

          <ul className="-mx-5 mt-8 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:px-0 [scrollbar-width:thin]">
            {CATEGORIES.map((c) => {
              const n = PRODUCTS.filter((p) => p.categories.includes(c)).length;
              return (
                <li key={c} className="w-[264px] shrink-0 snap-start">
                  <Link
                    href={`/products?category=${encodeURIComponent(c)}`}
                    className="flex h-full flex-col justify-between rounded-card bg-white p-6 ring-1 ring-hairline/60 transition-shadow hover:shadow-[0_8px_28px_rgba(20,20,20,0.08)]"
                  >
                    <span className="text-[20px] leading-snug font-medium tracking-[-0.015em]">
                      {c}
                    </span>
                    <span className="mt-10 text-[13px] text-ink-faint">
                      {n} product{n === 1 ? "" : "s"} →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section id="how-to-order" className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8 sm:py-24">
        <h2 className="display text-[30px] font-semibold sm:text-[38px]">How to order</h2>
        <p className="mt-3 max-w-xl text-[16px] leading-relaxed text-ink-soft">
          There is no checkout on this site. Ordering happens over email, so you always
          talk to a person before anything is arranged.
        </p>

        <ol className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {STEPS.map((s) => (
            <li key={s.n} className="border-t border-ink pt-5">
              <span className="text-[12px] font-semibold tracking-[0.13em] text-ink-faint">
                {s.n}
              </span>
              <h3 className="mt-2.5 text-[19px] font-medium tracking-[-0.015em]">{s.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-wrap items-center gap-3">
          <Link
            href="/products"
            className="rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-88"
          >
            Start browsing
          </Link>
          <a
            href={`mailto:${SITE.orderEmail}`}
            className="rounded-full border border-ink/30 px-6 py-3 text-[15px] font-medium transition-colors hover:border-ink/70"
          >
            Email us a question
          </a>
        </div>
      </section>
    </>
  );
}
