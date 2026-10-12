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
   - price:     number only, no commas
   - oldPrice:  original price if on sale, otherwise null
   - style:     "Modern" or "Traditional"
   - occasion:  "Casual" or "Fancy"
   - category:  e.g. Dresses, Tops, Bottoms, Sets, Kurtas, Sarees, Lehengas
   - images:    photo paths, e.g. ["images/products/floral-dress-1.jpg"]
                leave [] to show an elegant placeholder
   - isNew:     true shows it under "New Arrivals"
   ---------------------------------------------------------- */

const PRODUCTS = [
  // ---- Modern · Casual ----
  {
    id: "floral-midi-dress",
    name: "Floral Midi Dress",
    price: 3200, oldPrice: null,
    style: "Modern", occasion: "Casual", category: "Dresses",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Blush", "Ivory"],
    images: [],
    description: "A breezy midi dress in a soft floral print with a flattering wrap waist. Perfect for brunch, day outings and everything in between.",
    isNew: true,
  },
  {
    id: "ribbed-knit-top",
    name: "Ribbed Knit Top",
    price: 1450, oldPrice: null,
    style: "Modern", occasion: "Casual", category: "Tops",
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Black", "Mocha"],
    images: [],
    description: "A fitted ribbed top in stretchy, soft-touch fabric. An everyday essential that pairs with jeans, skirts or trousers.",
    isNew: false,
  },
  {
    id: "wide-leg-linen-trousers",
    name: "Wide-Leg Linen Trousers",
    price: 2400, oldPrice: 2900,
    style: "Modern", occasion: "Casual", category: "Bottoms",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Sand", "White"],
    images: [],
    description: "High-waisted, relaxed linen trousers that keep you cool and look effortlessly put-together.",
    isNew: false,
  },

  // ---- Modern · Fancy ----
  {
    id: "satin-slip-dress",
    name: "Satin Slip Dress",
    price: 4500, oldPrice: null,
    style: "Modern", occasion: "Fancy", category: "Dresses",
    sizes: ["S", "M", "L"],
    colors: ["Champagne", "Emerald", "Black"],
    images: [],
    description: "A luxurious satin slip dress with a cowl neckline and delicate straps. Made for evenings and celebrations.",
    isNew: true,
  },
  {
    id: "pleated-coord-set",
    name: "Pleated Co-ord Set",
    price: 5200, oldPrice: null,
    style: "Modern", occasion: "Fancy", category: "Sets",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Dusty Rose", "Lilac"],
    images: [],
    description: "A matching blouse and pleated skirt set. Elegant on its own, and each piece styles beautifully separately too.",
    isNew: true,
  },
  {
    id: "embellished-party-gown",
    name: "Embellished Party Gown",
    price: 8900, oldPrice: 10500,
    style: "Modern", occasion: "Fancy", category: "Dresses",
    sizes: ["S", "M", "L"],
    colors: ["Midnight Blue", "Wine"],
    images: [],
    description: "A floor-length gown with subtle hand embellishment along the bodice. A showstopper for receptions and parties.",
    isNew: false,
  },

  // ---- Traditional · Casual ----
  {
    id: "cotton-kurta-set",
    name: "Cotton Kurta Set",
    price: 2800, oldPrice: null,
    style: "Traditional", occasion: "Casual", category: "Kurtas",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Mint", "Peach", "White"],
    images: [],
    description: "A breathable cotton kurta with matching pants and dupatta. Comfortable for daily wear, office and casual gatherings.",
    isNew: true,
  },
  {
    id: "printed-kurti",
    name: "Printed Kurti",
    price: 1650, oldPrice: null,
    style: "Traditional", occasion: "Casual", category: "Kurtas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Indigo", "Mustard"],
    images: [],
    description: "A straight-cut kurti with a classic block print. Wear it with leggings, palazzos or jeans.",
    isNew: false,
  },
  {
    id: "everyday-georgette-saree",
    name: "Everyday Georgette Saree",
    price: 3500, oldPrice: null,
    style: "Traditional", occasion: "Casual", category: "Sarees",
    sizes: ["Free Size"],
    colors: ["Teal", "Rose Pink"],
    images: [],
    description: "A lightweight georgette saree that drapes beautifully and is easy to carry all day. Comes with an unstitched blouse piece.",
    isNew: false,
  },

  // ---- Traditional · Fancy ----
  {
    id: "banarasi-silk-saree",
    name: "Banarasi Silk Saree",
    price: 12500, oldPrice: null,
    style: "Traditional", occasion: "Fancy", category: "Sarees",
    sizes: ["Free Size"],
    colors: ["Maroon", "Royal Green"],
    images: [],
    description: "A rich silk saree with intricate zari weaving. A timeless choice for weddings, Dashain, Tihar and special occasions.",
    isNew: true,
  },
  {
    id: "embroidered-lehenga",
    name: "Embroidered Lehenga",
    price: 18000, oldPrice: 21000,
    style: "Traditional", occasion: "Fancy", category: "Lehengas",
    sizes: ["S", "M", "L"],
    colors: ["Blush Pink", "Red"],
    images: [],
    description: "A flared lehenga with delicate thread and sequin embroidery, paired with a matching blouse and net dupatta.",
    isNew: false,
  },
  {
    id: "anarkali-suit",
    name: "Anarkali Suit",
    price: 6800, oldPrice: null,
    style: "Traditional", occasion: "Fancy", category: "Kurtas",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Ivory Gold", "Navy"],
    images: [],
    description: "A graceful floor-length Anarkali with a flowing silhouette and embroidered yoke. Elegant for festivals and family functions.",
    isNew: false,
  },
];
