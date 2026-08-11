/**
 * Single place for the business details the catalog itself does not supply.
 *
 * ORDER_EMAIL is a placeholder. The workbook contained no contact address and
 * none was provided, so it has NOT been invented -- swap it for the real inbox
 * before this site goes anywhere near a customer. Everything in the inquiry
 * flow reads from this constant, so one edit here updates the whole site.
 */
export const SITE = {
  name: "The Recovery Lab Society",
  shortName: "Recovery Lab Society",

  /** TODO(owner): replace with the real inquiry inbox before launch. */
  orderEmail: "orders@example.com",

  /** Set to true once orderEmail is real; surfaces a build-time reminder banner. */
  orderEmailConfirmed: false,
} as const;

/**
 * Rendered verbatim in the footer and on the inquiry drawer.
 *
 * TODO(owner): this is a PLACEHOLDER using the research-use-only framing that is
 * standard for a catalog of this composition. It is a legal position, not a
 * design choice -- have counsel confirm or replace the wording. No intended-use
 * framing was supplied with the price list.
 */
export const DISCLAIMER =
  "All products are sold for laboratory research use only. They are not drugs, foods, cosmetics, or supplements, and may not be misbranded, misused, or mislabeled as such. Nothing on this site is medical advice.";
