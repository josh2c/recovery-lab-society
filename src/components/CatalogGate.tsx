"use client";

import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/data/catalog";
import CatalogBrowser from "./CatalogBrowser";

/**
 * Reads the `?category=` deep link the homepage rail produces and hands it to
 * the browser as an initial filter. Split out so the suspense boundary wraps
 * only the search-param read, not the whole catalog.
 */
export default function CatalogGate() {
  const params = useSearchParams();
  const requested = params.get("category");
  // Validate against the real category list — an unknown value falls through to
  // the default rather than rendering an empty grid.
  const initial = CATEGORIES.find((c) => c === requested);

  return <CatalogBrowser key={initial ?? "all"} initialCategory={initial} />;
}
