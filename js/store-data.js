/* ==========================================================
   SAMIE'S COLLECTION — STORE DETAILS & PRODUCTS
   This is the only file you need to edit to update the site.
   ========================================================== */

const STORE = {
  name: "Samie's Collection",
  tagline: "Timeless pieces for every woman",

  // WhatsApp number: country code + number, no "+", spaces or dashes.
  // Example for Nepal: 9779812345678
  whatsapp: "9779800000000",
  phone: "+977 980-0000000",

  instagram: "https://www.instagram.com/yourhandle",
  tiktok: "https://www.tiktok.com/@yourhandle",
  facebook: "", // leave empty to hide

  address: "Shop No. 00, Street Name, Kathmandu, Nepal",
  mapQuery: "Kathmandu, Nepal", // what to search on Google Maps
  hours: [
    ["Sunday – Friday", "10:00 AM – 7:00 PM"],
    ["Saturday", "11:00 AM – 5:00 PM"],
  ],

  currency: "Rs.",
  deliveryNote: "Delivery available inside Kathmandu Valley. Outside the valley? Message us.",
};

/* ----------------------------------------------------------
   PRODUCTS
   - id:        unique, lowercase, use dashes (used in the link)
   - price:     number only, no commas (null shows "Price on request")
   - oldPrice:  original price if on sale, otherwise null
   - style:     "Modern" or "Traditional"
   - occasion:  "Casual" or "Fancy"
   - category:  e.g. Dresses, Tops, Bottoms, Sets, Kurtas, Sarees, Lehengas
   - images:    photo paths, e.g. ["images/products/floral-dress-1.jpg"]
                leave [] to show an elegant placeholder
   - sizes:     leave [] if sizes are confirmed on WhatsApp
   - isNew:     true shows it under "New Arrivals"
   ---------------------------------------------------------- */

const PRODUCTS = [
  // ---- Traditional · Fancy ----
  {
    id: "beaded-silk-kurtha",
    name: "Beaded Silk Kurtha",
    price: null, oldPrice: null,
    style: "Traditional", occasion: "Fancy", category: "Kurthas",
    sizes: [],
    colors: ["Yellow", "Pink"],
    images: [1, 2, 3, 4, 5, 6, 7].map((n) => `images/products/beaded-silk-kurtha-${n}.jpg`),
    description: "A silk kurtha with delicate hand beadwork on the neckline, paired with a contrasting dupatta. Lovely for festivals, pujas and family functions.",
    isNew: true,
  },
  {
    id: "heavy-beaded-silk-kurtha",
    name: "Heavy Beaded Silk Kurtha",
    price: null, oldPrice: null,
    style: "Traditional", occasion: "Fancy", category: "Kurthas",
    sizes: [],
    colors: ["Ivory"],
    images: [1, 2, 3].map((n) => `images/products/heavy-beaded-silk-kurtha-${n}.jpg`),
    description: "A soft ivory silk kurtha with rich beadwork and embroidery, finished with a matching dupatta. An elegant choice for weddings and special occasions.",
    isNew: true,
  },

  // ---- Traditional · Casual ----
  {
    id: "floral-embroidered-kurtha",
    name: "Floral Embroidered Kurtha",
    price: null, oldPrice: null,
    style: "Traditional", occasion: "Casual", category: "Kurthas",
    sizes: [],
    colors: ["Mustard"],
    images: [1, 2, 3].map((n) => `images/products/floral-embroidered-kurtha-${n}.jpg`),
    description: "A mustard kurtha set with bright floral embroidery. Easy to wear and full of colour, from everyday outings to small gatherings.",
    isNew: true,
  },
  {
    id: "premium-cotton-kurtha",
    name: "Premium Cotton Kurtha",
    price: null, oldPrice: null,
    style: "Traditional", occasion: "Casual", category: "Kurthas",
    sizes: [],
    colors: ["Green", "Pink"],
    images: [1, 2, 3, 4].map((n) => `images/products/premium-cotton-kurtha-${n}.jpg`),
    description: "A premium cotton kurtha set with fine embroidered details. Breathable and comfortable for daily wear.",
    isNew: true,
  },
  {
    id: "mulmul-cotton-cord-set",
    name: "Mulmul Cotton Cord Set",
    price: null, oldPrice: null,
    style: "Traditional", occasion: "Casual", category: "Cord Sets",
    sizes: [],
    colors: ["Sky Blue"],
    images: [1, 2].map((n) => `images/products/mulmul-cotton-cord-set-${n}.jpg`),
    description: "A light, airy mulmul cotton co-ord set with soft embroidery. Perfect for warm days.",
    isNew: true,
  },
  {
    id: "umbrella-cord-set",
    name: "Umbrella Cord Set",
    price: null, oldPrice: null,
    style: "Traditional", occasion: "Casual", category: "Cord Sets",
    sizes: [],
    colors: ["Green"],
    images: [1, 2, 3].map((n) => `images/products/umbrella-cord-set-${n}.jpg`),
    description: "A flared umbrella-cut co-ord set with golden motifs. Flowy, comfortable and easy to style.",
    isNew: true,
  },
  {
    id: "khadi-cord-set",
    name: "Khadi Cord Set",
    price: null, oldPrice: null,
    style: "Traditional", occasion: "Casual", category: "Cord Sets",
    sizes: [],
    colors: ["Off-White"],
    images: [1, 2, 3, 4].map((n) => `images/products/khadi-cord-set-${n}.jpg`),
    description: "An off-white khadi co-ord set with embroidered borders on the sleeves and hem. Simple, classy and comfortable.",
    isNew: true,
  },
  {
    id: "cotton-3-piece-set",
    name: "Cotton 3 Piece Set",
    price: null, oldPrice: null,
    style: "Traditional", occasion: "Casual", category: "3 Piece Sets",
    sizes: [],
    colors: ["Green"],
    images: [1, 2].map((n) => `images/products/cotton-3-piece-set-${n}.jpg`),
    description: "A cotton kurtha, pants and dupatta set with colourful embroidery. A comfortable everyday favourite.",
    isNew: true,
  },
];
