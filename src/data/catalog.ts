// GENERATED FILE -- do not edit by hand.
// Source: "Recovery Lab Society Retail List.xlsx"
// Regenerate: node scripts/build-catalog.mjs "<workbook.xlsx>"
//
// Every name, strength and price below comes verbatim from the workbook.
// A null price means the workbook left that cell blank.

export type Variant = {
  /** Unique within its product. Labels alone are not unique -- see build script. */
  id: string;
  /** The row label exactly as written in the workbook. */
  label: string;
  size: string | null;
  form: string | null;
  count: string | null;
  /** Non-null when the workbook listed this under a distinct product line. */
  line: string | null;
  /** USD. null means the workbook did not supply a price. */
  price: number | null;
};

export type Product = {
  slug: string;
  name: string;
  categories: string[];
  variants: Variant[];
};

export const CATEGORIES = [
  "Weight Loss & Metabolism",
  "Recovery, Healing & Performance",
  "Growth Hormone & Muscle Optimization",
  "Sexual Health",
  "Wellness, Longevity & Nootropics",
  "Bioregulators",
  "Injectable & Liquid Blends",
  "SARMs",
  "HGH",
  "USA Made / 1776RX",
  "Uncategorized"
] as const;

export const PRODUCTS: Product[] = [
  {
    "slug": "5-amino-1mq-50mg-tabs",
    "name": "5-Amino-1MQ 50mg (Tabs)",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "5-Amino-1MQ 50mg (Tabs)",
        "size": null,
        "form": "Tablet",
        "count": null,
        "line": null,
        "price": 175,
        "id": "5-amino-1mq-50mg-tabs"
      }
    ]
  },
  {
    "slug": "aod-9604-5mg",
    "name": "AOD-9604 5mg",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "AOD-9604 5mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 75,
        "id": "aod-9604-5mg"
      }
    ]
  },
  {
    "slug": "apitode-10mg",
    "name": "Apitode 10mg",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "Apitode 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 100,
        "id": "apitode-10mg"
      }
    ]
  },
  {
    "slug": "cagrilintide-10mg",
    "name": "Cagrilintide 10mg",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "Cagrilintide 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 150,
        "id": "cagrilintide-10mg"
      }
    ]
  },
  {
    "slug": "l-carnitine-600mg",
    "name": "L-Carnitine 600mg",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "L-Carnitine 600mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 75,
        "id": "l-carnitine-600mg"
      }
    ]
  },
  {
    "slug": "retatrutide",
    "name": "Retatrutide",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "Retatrutide 10mg",
        "size": "10mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 125,
        "id": "retatrutide-10mg"
      },
      {
        "label": "Retatrutide 20mg",
        "size": "20mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 200,
        "id": "retatrutide-20mg"
      },
      {
        "label": "Retatrutide 30mg",
        "size": "30mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 250,
        "id": "retatrutide-30mg"
      },
      {
        "label": "Retatrutide 50mg",
        "size": "50mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 250,
        "id": "retatrutide-50mg"
      },
      {
        "label": "Retatrutide 100mg",
        "size": "100mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 500,
        "id": "retatrutide-100mg"
      }
    ]
  },
  {
    "slug": "semaglutide-10mg",
    "name": "Semaglutide 10mg",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "Semaglutide 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 150,
        "id": "semaglutide-10mg"
      }
    ]
  },
  {
    "slug": "sluu-pp",
    "name": "SLUU-PP",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "SLUU-PP 5mg",
        "size": "5mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 140,
        "id": "sluu-pp-5mg"
      },
      {
        "label": "SLUU-PP 500mcg (Tabs)",
        "size": "500mcg",
        "form": "Tablet",
        "count": null,
        "line": null,
        "price": 180,
        "id": "sluu-pp-500mcg-tabs"
      },
      {
        "label": "SLUU-PP 1mg (Tabs)",
        "size": "1mg",
        "form": "Tablet",
        "count": null,
        "line": null,
        "price": 220,
        "id": "sluu-pp-1mg-tabs"
      }
    ]
  },
  {
    "slug": "tesofensine-500mcg",
    "name": "Tesofensine 500mcg",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "Tesofensine 500mcg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 110,
        "id": "tesofensine-500mcg"
      }
    ]
  },
  {
    "slug": "tirzepatide",
    "name": "Tirzepatide",
    "categories": [
      "Weight Loss & Metabolism"
    ],
    "variants": [
      {
        "label": "Tirzepatide 10mg",
        "size": "10mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 150,
        "id": "tirzepatide-10mg"
      },
      {
        "label": "Tirzepatide 500mcg 60ct",
        "size": "500mcg",
        "form": null,
        "count": "60 ct",
        "line": null,
        "price": 150,
        "id": "tirzepatide-500mcg-60ct"
      },
      {
        "label": "Tirzepatide 20mg",
        "size": "20mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 200,
        "id": "tirzepatide-20mg"
      },
      {
        "label": "Tirzepatide 30mg",
        "size": "30mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 300,
        "id": "tirzepatide-30mg"
      }
    ]
  },
  {
    "slug": "bpc-157",
    "name": "BPC-157",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "BPC-157 10mg (Injectable)",
        "size": "10mg",
        "form": "Injectable",
        "count": null,
        "line": null,
        "price": 60,
        "id": "bpc-157-10mg-injectable"
      },
      {
        "label": "BPC-157 5mg (Nasal)",
        "size": "5mg",
        "form": "Nasal",
        "count": null,
        "line": null,
        "price": 80,
        "id": "bpc-157-5mg-nasal"
      },
      {
        "label": "BPC-157 20mg (Injectable)",
        "size": "20mg",
        "form": "Injectable",
        "count": null,
        "line": null,
        "price": 100,
        "id": "bpc-157-20mg-injectable"
      },
      {
        "label": "BPC-157 10mg",
        "size": "10mg",
        "form": "Nasal",
        "count": null,
        "line": null,
        "price": null,
        "id": "bpc-157-10mg"
      }
    ]
  },
  {
    "slug": "bpc-tb-blend",
    "name": "BPC/TB Blend",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "BPC/TB Blend 5mg+5mg",
        "size": "5mg+5mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 100,
        "id": "bpc-tb-blend-5mg-5mg"
      },
      {
        "label": "BPC/TB Blend 10mg+10mg",
        "size": "10mg+10mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 150,
        "id": "bpc-tb-blend-10mg-10mg"
      },
      {
        "label": "BPC/TB Blend 20mg+20mg",
        "size": "20mg+20mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 200,
        "id": "bpc-tb-blend-20mg-20mg"
      }
    ]
  },
  {
    "slug": "enclomiphene",
    "name": "Enclomiphene",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "Enclomiphene 12.5mg (Tabs)",
        "size": "12.5mg",
        "form": "Tablet",
        "count": null,
        "line": null,
        "price": 150,
        "id": "enclomiphene-12-5mg-tabs"
      },
      {
        "label": "Enclomiphene 25mg 70ct (Tabs)",
        "size": "25mg",
        "form": "Tablet",
        "count": "70 ct",
        "line": null,
        "price": 220,
        "id": "enclomiphene-25mg-70ct-tabs"
      }
    ]
  },
  {
    "slug": "ghk-cu",
    "name": "GHK-Cu",
    "categories": [
      "Recovery, Healing & Performance",
      "SARMs"
    ],
    "variants": [
      {
        "label": "GHK-Cu 50mg",
        "size": "50mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 50,
        "id": "ghk-cu-50mg"
      },
      {
        "label": "GHK-Cu 100mg",
        "size": "100mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "ghk-cu-100mg"
      },
      {
        "label": "GHK-Cu 200mg",
        "size": "200mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 100,
        "id": "ghk-cu-200mg"
      },
      {
        "label": "GHK-Cu 2mg 60ct (Tabs)",
        "size": "2mg",
        "form": "Tablet",
        "count": "60 ct",
        "line": null,
        "price": 100,
        "id": "ghk-cu-2mg-60ct-tabs"
      },
      {
        "label": "GHK-Cu (Tabs)",
        "size": null,
        "form": "Tablet",
        "count": null,
        "line": null,
        "price": 100,
        "id": "ghk-cu-tabs"
      }
    ]
  },
  {
    "slug": "ipamorelin-10mg",
    "name": "Ipamorelin 10mg",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "Ipamorelin 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 50,
        "id": "ipamorelin-10mg"
      }
    ]
  },
  {
    "slug": "klow-kpv-bpc-tb-ghk",
    "name": "KLOW (KPV+BPC+TB+GHK)",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "KLOW (KPV+BPC+TB+GHK)",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 125,
        "id": "klow-kpv-bpc-tb-ghk"
      }
    ]
  },
  {
    "slug": "ll37-10mg",
    "name": "LL37 10mg",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "LL37 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 55,
        "id": "ll37-10mg"
      }
    ]
  },
  {
    "slug": "mt-1-10mg",
    "name": "MT-1 10mg",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "MT-1 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 50,
        "id": "mt-1-10mg"
      }
    ]
  },
  {
    "slug": "mt-2",
    "name": "MT-2",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "MT-2 20mg",
        "size": "20mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 45,
        "id": "mt-2-20mg"
      },
      {
        "label": "MT2 10mg",
        "size": "10mg",
        "form": "Nasal",
        "count": null,
        "line": null,
        "price": null,
        "id": "mt2-10mg"
      }
    ]
  },
  {
    "slug": "peg-mgf-2mg",
    "name": "Peg MGF 2mg",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "Peg MGF 2mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 60,
        "id": "peg-mgf-2mg"
      }
    ]
  },
  {
    "slug": "ss-31",
    "name": "SS-31",
    "categories": [
      "Recovery, Healing & Performance",
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "SS-31 50mg",
        "size": "50mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 150,
        "id": "ss-31-50mg"
      },
      {
        "label": "SS-31 25mg Premix",
        "size": "25mg",
        "form": "Premix",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 250,
        "id": "ss-31-25mg-premix-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "tb-500-10mg",
    "name": "TB-500 10mg",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "TB-500 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 60,
        "id": "tb-500-10mg"
      }
    ]
  },
  {
    "slug": "thymosin-alpha",
    "name": "Thymosin Alpha",
    "categories": [
      "Recovery, Healing & Performance"
    ],
    "variants": [
      {
        "label": "Thymosin Alpha 10mg",
        "size": "10mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 65,
        "id": "thymosin-alpha-10mg"
      },
      {
        "label": "Thymosin Alpha 5mg",
        "size": "5mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 75,
        "id": "thymosin-alpha-5mg"
      }
    ]
  },
  {
    "slug": "cjc-1295-ipamorelin-5mg-5mg",
    "name": "CJC-1295/Ipamorelin 5mg+5mg",
    "categories": [
      "Growth Hormone & Muscle Optimization"
    ],
    "variants": [
      {
        "label": "CJC-1295/Ipamorelin 5mg+5mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 75,
        "id": "cjc-1295-ipamorelin-5mg-5mg"
      }
    ]
  },
  {
    "slug": "follistatin-344",
    "name": "Follistatin 344",
    "categories": [
      "Growth Hormone & Muscle Optimization"
    ],
    "variants": [
      {
        "label": "Follistatin 344 1mg",
        "size": "1mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 175,
        "id": "follistatin-344-1mg"
      },
      {
        "label": "Follistatin 344 4-pack",
        "size": null,
        "form": null,
        "count": "4-pack",
        "line": null,
        "price": 600,
        "id": "follistatin-344-4-pack"
      }
    ]
  },
  {
    "slug": "sermorelin",
    "name": "Sermorelin",
    "categories": [
      "Growth Hormone & Muscle Optimization"
    ],
    "variants": [
      {
        "label": "Sermorelin 5mg",
        "size": "5mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "sermorelin-5mg"
      },
      {
        "label": "Sermorelin 10mg",
        "size": "10mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 130,
        "id": "sermorelin-10mg"
      }
    ]
  },
  {
    "slug": "tesamorelin",
    "name": "Tesamorelin",
    "categories": [
      "Growth Hormone & Muscle Optimization",
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Tesamorelin 10mg",
        "size": "10mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 100,
        "id": "tesamorelin-10mg"
      },
      {
        "label": "Tesamorelin 10mg",
        "size": "10mg",
        "form": null,
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 110,
        "id": "tesamorelin-10mg-usa-made-1776rx"
      },
      {
        "label": "Tesamorelin 20mg",
        "size": "20mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 140,
        "id": "tesamorelin-20mg"
      }
    ]
  },
  {
    "slug": "cialis-20mg-50ct",
    "name": "Cialis 20mg 50ct",
    "categories": [
      "Sexual Health"
    ],
    "variants": [
      {
        "label": "Cialis 20mg 50ct",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 120,
        "id": "cialis-20mg-50ct"
      }
    ]
  },
  {
    "slug": "cockbombs-50ct",
    "name": "Cockbombs 50ct",
    "categories": [
      "Sexual Health"
    ],
    "variants": [
      {
        "label": "Cockbombs 50ct",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 100,
        "id": "cockbombs-50ct"
      }
    ]
  },
  {
    "slug": "kisspeptin-8mg",
    "name": "Kisspeptin 8mg",
    "categories": [
      "Sexual Health"
    ],
    "variants": [
      {
        "label": "Kisspeptin 8mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 60,
        "id": "kisspeptin-8mg"
      }
    ]
  },
  {
    "slug": "pt-141",
    "name": "PT-141",
    "categories": [
      "Sexual Health"
    ],
    "variants": [
      {
        "label": "PT-141 10mg (Injectable)",
        "size": "10mg",
        "form": "Injectable",
        "count": null,
        "line": null,
        "price": 57,
        "id": "pt-141-10mg-injectable"
      },
      {
        "label": "PT-141 10mg (Nasal)",
        "size": "10mg",
        "form": "Nasal",
        "count": null,
        "line": null,
        "price": 90,
        "id": "pt-141-10mg-nasal"
      }
    ]
  },
  {
    "slug": "tada-premix-30ml",
    "name": "TADA Premix 30ml",
    "categories": [
      "Sexual Health"
    ],
    "variants": [
      {
        "label": "TADA Premix 30ml",
        "size": null,
        "form": "Premix",
        "count": null,
        "line": null,
        "price": 80,
        "id": "tada-premix-30ml"
      }
    ]
  },
  {
    "slug": "xxl-pump-premix-20ml",
    "name": "XXL Pump Premix 20ml",
    "categories": [
      "Sexual Health"
    ],
    "variants": [
      {
        "label": "XXL Pump Premix 20ml",
        "size": null,
        "form": "Premix",
        "count": null,
        "line": null,
        "price": 120,
        "id": "xxl-pump-premix-20ml"
      }
    ]
  },
  {
    "slug": "dsip-10mg",
    "name": "DSIP 10mg",
    "categories": [
      "Wellness, Longevity & Nootropics"
    ],
    "variants": [
      {
        "label": "DSIP 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 45,
        "id": "dsip-10mg"
      }
    ]
  },
  {
    "slug": "epitalon-10mg",
    "name": "Epitalon 10mg",
    "categories": [
      "Wellness, Longevity & Nootropics"
    ],
    "variants": [
      {
        "label": "Epitalon 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 55,
        "id": "epitalon-10mg"
      }
    ]
  },
  {
    "slug": "fox04-dri-10mg",
    "name": "FOX04-DRI 10mg",
    "categories": [
      "Wellness, Longevity & Nootropics"
    ],
    "variants": [
      {
        "label": "FOX04-DRI 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 150,
        "id": "fox04-dri-10mg"
      }
    ]
  },
  {
    "slug": "igf-1-lr3-1mg",
    "name": "IGF-1 LR3 1mg",
    "categories": [
      "Wellness, Longevity & Nootropics"
    ],
    "variants": [
      {
        "label": "IGF-1 LR3 1mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 110,
        "id": "igf-1-lr3-1mg"
      }
    ]
  },
  {
    "slug": "mots-c",
    "name": "MOTS-C",
    "categories": [
      "Wellness, Longevity & Nootropics",
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "MOTS-C 10mg",
        "size": "10mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 65,
        "id": "mots-c-10mg"
      },
      {
        "label": "MOTS-C 10mg",
        "size": "10mg",
        "form": null,
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 85,
        "id": "mots-c-10mg-usa-made-1776rx"
      },
      {
        "label": "MOTS-C 40mg",
        "size": "40mg",
        "form": null,
        "count": null,
        "line": null,
        "price": 130,
        "id": "mots-c-40mg"
      }
    ]
  },
  {
    "slug": "nad",
    "name": "NAD+",
    "categories": [
      "Wellness, Longevity & Nootropics",
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "NAD+ 1000mg (Nasal)",
        "size": "1000mg",
        "form": "Nasal",
        "count": null,
        "line": null,
        "price": 120,
        "id": "nad-1000mg-nasal"
      },
      {
        "label": "NAD+ 1000mg (Injectable)",
        "size": "1000mg",
        "form": "Injectable",
        "count": null,
        "line": null,
        "price": 125,
        "id": "nad-1000mg-injectable"
      },
      {
        "label": "NAD+ 1000mg",
        "size": "1000mg",
        "form": null,
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 195,
        "id": "nad-1000mg-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "ru-58841-50mg",
    "name": "RU-58841 50mg",
    "categories": [
      "Wellness, Longevity & Nootropics"
    ],
    "variants": [
      {
        "label": "RU-58841 50mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 65,
        "id": "ru-58841-50mg"
      }
    ]
  },
  {
    "slug": "selank",
    "name": "Selank",
    "categories": [
      "Wellness, Longevity & Nootropics"
    ],
    "variants": [
      {
        "label": "Selank 10mg (Injectable)",
        "size": "10mg",
        "form": "Injectable",
        "count": null,
        "line": null,
        "price": 60,
        "id": "selank-10mg-injectable"
      },
      {
        "label": "Selank 5mg (Nasal)",
        "size": "5mg",
        "form": "Nasal",
        "count": null,
        "line": null,
        "price": 80,
        "id": "selank-5mg-nasal"
      }
    ]
  },
  {
    "slug": "semax",
    "name": "Semax",
    "categories": [
      "Wellness, Longevity & Nootropics"
    ],
    "variants": [
      {
        "label": "Semax 10mg (Injectable)",
        "size": "10mg",
        "form": "Injectable",
        "count": null,
        "line": null,
        "price": 60,
        "id": "semax-10mg-injectable"
      },
      {
        "label": "Semax 5mg (Nasal)",
        "size": "5mg",
        "form": "Nasal",
        "count": null,
        "line": null,
        "price": 80,
        "id": "semax-5mg-nasal"
      }
    ]
  },
  {
    "slug": "semax-selank-blend-10mg",
    "name": "Semax/Selank Blend 10mg",
    "categories": [
      "Wellness, Longevity & Nootropics"
    ],
    "variants": [
      {
        "label": "Semax/Selank Blend 10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 65,
        "id": "semax-selank-blend-10mg"
      }
    ]
  },
  {
    "slug": "bronchogen",
    "name": "Bronchogen",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Bronchogen",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "bronchogen"
      }
    ]
  },
  {
    "slug": "cartalax",
    "name": "Cartalax",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Cartalax",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "cartalax"
      }
    ]
  },
  {
    "slug": "chonluten",
    "name": "Chonluten",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Chonluten",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "chonluten"
      }
    ]
  },
  {
    "slug": "cortagen",
    "name": "Cortagen",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Cortagen",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "cortagen"
      }
    ]
  },
  {
    "slug": "crystagen",
    "name": "Crystagen",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Crystagen",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "crystagen"
      }
    ]
  },
  {
    "slug": "livagen",
    "name": "Livagen",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Livagen",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "livagen"
      }
    ]
  },
  {
    "slug": "ovagen",
    "name": "Ovagen",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Ovagen",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "ovagen"
      }
    ]
  },
  {
    "slug": "pancragen",
    "name": "Pancragen",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Pancragen",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "pancragen"
      }
    ]
  },
  {
    "slug": "pinealon",
    "name": "Pinealon",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Pinealon",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "pinealon"
      }
    ]
  },
  {
    "slug": "prostamax",
    "name": "Prostamax",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Prostamax",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "prostamax"
      }
    ]
  },
  {
    "slug": "testagen",
    "name": "Testagen",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Testagen",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 80,
        "id": "testagen"
      }
    ]
  },
  {
    "slug": "vesugen",
    "name": "Vesugen",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Vesugen",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": null,
        "id": "vesugen"
      }
    ]
  },
  {
    "slug": "vilon",
    "name": "Vilon",
    "categories": [
      "Bioregulators"
    ],
    "variants": [
      {
        "label": "Vilon",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": null,
        "id": "vilon"
      }
    ]
  },
  {
    "slug": "energy-lipo-20ml",
    "name": "Energy Lipo 20ml",
    "categories": [
      "Injectable & Liquid Blends"
    ],
    "variants": [
      {
        "label": "Energy Lipo 20ml",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": null,
        "id": "energy-lipo-20ml"
      }
    ]
  },
  {
    "slug": "glutathione",
    "name": "Glutathione",
    "categories": [
      "Injectable & Liquid Blends",
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Glutathione 6000mg Premix",
        "size": "6000mg",
        "form": "Premix",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 300,
        "id": "glutathione-6000mg-premix-usa-made-1776rx"
      },
      {
        "label": "Glutathione Premix 20ml",
        "size": "20ml",
        "form": "Premix",
        "count": null,
        "line": null,
        "price": null,
        "id": "glutathione-premix-20ml"
      }
    ]
  },
  {
    "slug": "methylene-blue-10mg-ml",
    "name": "Methylene Blue 10mg/ml",
    "categories": [
      "Injectable & Liquid Blends"
    ],
    "variants": [
      {
        "label": "Methylene Blue 10mg/ml",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 120,
        "id": "methylene-blue-10mg-ml"
      }
    ]
  },
  {
    "slug": "mic-blend-20ml",
    "name": "MIC Blend 20ml",
    "categories": [
      "Injectable & Liquid Blends"
    ],
    "variants": [
      {
        "label": "MIC Blend 20ml",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 85,
        "id": "mic-blend-20ml"
      }
    ]
  },
  {
    "slug": "tri-immune-boost-20ml",
    "name": "Tri Immune Boost 20ml",
    "categories": [
      "Injectable & Liquid Blends"
    ],
    "variants": [
      {
        "label": "Tri Immune Boost 20ml",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 120,
        "id": "tri-immune-boost-20ml"
      }
    ]
  },
  {
    "slug": "cardarine-25mg-60ct-tabs",
    "name": "Cardarine 25mg 60ct (Tabs)",
    "categories": [
      "SARMs"
    ],
    "variants": [
      {
        "label": "Cardarine 25mg 60ct (Tabs)",
        "size": null,
        "form": "Tablet",
        "count": null,
        "line": null,
        "price": 180,
        "id": "cardarine-25mg-60ct-tabs"
      }
    ]
  },
  {
    "slug": "lgd-4033-10mg-ml",
    "name": "LGD-4033 10mg/ml",
    "categories": [
      "SARMs"
    ],
    "variants": [
      {
        "label": "LGD-4033 10mg/ml",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 100,
        "id": "lgd-4033-10mg-ml"
      }
    ]
  },
  {
    "slug": "mk-677",
    "name": "MK-677",
    "categories": [
      "SARMs"
    ],
    "variants": [
      {
        "label": "MK-677 12.5mg 60ct",
        "size": "12.5mg",
        "form": null,
        "count": "60 ct",
        "line": null,
        "price": null,
        "id": "mk-677-12-5mg-60ct"
      },
      {
        "label": "MK-677 12.5mg 100ct",
        "size": "12.5mg",
        "form": null,
        "count": "100 ct",
        "line": null,
        "price": null,
        "id": "mk-677-12-5mg-100ct"
      }
    ]
  },
  {
    "slug": "ostarine-20mg-ml",
    "name": "Ostarine 20mg/ml",
    "categories": [
      "SARMs"
    ],
    "variants": [
      {
        "label": "Ostarine 20mg/ml",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 105,
        "id": "ostarine-20mg-ml"
      }
    ]
  },
  {
    "slug": "rad-140",
    "name": "RAD-140",
    "categories": [
      "SARMs"
    ],
    "variants": [
      {
        "label": "RAD-140 20mg/ml",
        "size": "20mg/ml",
        "form": null,
        "count": null,
        "line": null,
        "price": 110,
        "id": "rad-140-20mg-ml"
      },
      {
        "label": "RAD-140 10mg 60ct (Tabs)",
        "size": "10mg",
        "form": "Tablet",
        "count": "60 ct",
        "line": null,
        "price": 180,
        "id": "rad-140-10mg-60ct-tabs"
      }
    ]
  },
  {
    "slug": "generic-hgh-kit",
    "name": "Generic HGH Kit",
    "categories": [
      "HGH"
    ],
    "variants": [
      {
        "label": "Generic HGH Kit 200iu",
        "size": "200iu",
        "form": null,
        "count": null,
        "line": null,
        "price": 500,
        "id": "generic-hgh-kit-200iu"
      },
      {
        "label": "Generic HGH Kit 100iu",
        "size": "100iu",
        "form": null,
        "count": null,
        "line": null,
        "price": null,
        "id": "generic-hgh-kit-100iu"
      },
      {
        "label": "Generic HGH Kit 150iu",
        "size": "150iu",
        "form": null,
        "count": null,
        "line": null,
        "price": null,
        "id": "generic-hgh-kit-150iu"
      }
    ]
  },
  {
    "slug": "serostim-rx-hgh-120iu",
    "name": "Serostim (Rx HGH) 120iu",
    "categories": [
      "HGH"
    ],
    "variants": [
      {
        "label": "Serostim (Rx HGH) 120iu",
        "size": null,
        "form": null,
        "count": null,
        "line": null,
        "price": 1800,
        "id": "serostim-rx-hgh-120iu"
      }
    ]
  },
  {
    "slug": "burn-blend-15mg-reta-5mg-tirz-mixed",
    "name": "Burn Blend — 15mg Reta / 5mg Tirz Mixed",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Burn Blend — 15mg Reta / 5mg Tirz Mixed",
        "size": null,
        "form": "Mixed",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 200,
        "id": "burn-blend-15mg-reta-5mg-tirz-mixed-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "cjc-ipamorelin-10mg-10mg-mixed",
    "name": "CJC / Ipamorelin 10mg/10mg Mixed",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "CJC / Ipamorelin 10mg/10mg Mixed",
        "size": null,
        "form": "Mixed",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 175,
        "id": "cjc-ipamorelin-10mg-10mg-mixed-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "copper-serum-polypeptide-blend",
    "name": "Copper Serum — Polypeptide Blend",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Copper Serum — Polypeptide Blend",
        "size": null,
        "form": null,
        "count": null,
        "line": "USA Made / 1776RX",
        "price": null,
        "id": "copper-serum-polypeptide-blend-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "dihexa-8mg-mixed",
    "name": "Dihexa 8mg Mixed",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Dihexa 8mg Mixed",
        "size": null,
        "form": "Mixed",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 175,
        "id": "dihexa-8mg-mixed-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "fuck-cancer-blend",
    "name": "Fuck Cancer Blend",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Fuck Cancer Blend",
        "size": null,
        "form": null,
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 195,
        "id": "fuck-cancer-blend-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "glow-10-10-50-premix",
    "name": "Glow 10/10/50 Premix",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Glow 10/10/50 Premix",
        "size": null,
        "form": "Premix",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 195,
        "id": "glow-10-10-50-premix-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "klow-10-10-10-50",
    "name": "KLOW 10/10/10/50",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "KLOW 10/10/10/50",
        "size": null,
        "form": null,
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 225,
        "id": "klow-10-10-10-50-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "reta",
    "name": "Reta",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Reta 30mg Mixed",
        "size": "30mg",
        "form": "Mixed",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 500,
        "id": "reta-30mg-mixed-usa-made-1776rx"
      },
      {
        "label": "Reta 18mg Mixed",
        "size": "18mg",
        "form": "Mixed",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": null,
        "id": "reta-18mg-mixed-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "sluu-pp-1mg-x-5-amino-50mg-30ct",
    "name": "SLUU-PP 1mg x 5-Amino 50mg 30ct",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "SLUU-PP 1mg x 5-Amino 50mg 30ct",
        "size": null,
        "form": null,
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 150,
        "id": "sluu-pp-1mg-x-5-amino-50mg-30ct-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "tesa-peg-mgf-ghrp-ipa-mixed",
    "name": "Tesa / Peg MGF / GHRP / Ipa Mixed",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Tesa / Peg MGF / GHRP / Ipa Mixed",
        "size": null,
        "form": "Mixed",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 175,
        "id": "tesa-peg-mgf-ghrp-ipa-mixed-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "tesa-5mg-ipa-5mg-mixed",
    "name": "Tesa 5mg / Ipa 5mg Mixed",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Tesa 5mg / Ipa 5mg Mixed",
        "size": null,
        "form": "Mixed",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 125,
        "id": "tesa-5mg-ipa-5mg-mixed-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "testosterone",
    "name": "Testosterone",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Testosterone",
        "size": null,
        "form": null,
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 125,
        "id": "testosterone-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "tirz-10mg-mixed",
    "name": "Tirz 10mg Mixed",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Tirz 10mg Mixed",
        "size": null,
        "form": "Mixed",
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 200,
        "id": "tirz-10mg-mixed-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "wolverine-10mg-10mg",
    "name": "Wolverine 10mg/10mg",
    "categories": [
      "USA Made / 1776RX"
    ],
    "variants": [
      {
        "label": "Wolverine 10mg/10mg",
        "size": null,
        "form": null,
        "count": null,
        "line": "USA Made / 1776RX",
        "price": 180,
        "id": "wolverine-10mg-10mg-usa-made-1776rx"
      }
    ]
  },
  {
    "slug": "dream-catcher-5mg",
    "name": "Dream Catcher 5mg",
    "categories": [
      "Uncategorized"
    ],
    "variants": [
      {
        "label": "Dream Catcher 5mg",
        "size": null,
        "form": "Nasal",
        "count": null,
        "line": null,
        "price": 100,
        "id": "dream-catcher-5mg"
      }
    ]
  }
];
