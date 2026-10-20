# Samie's Collection — Website

To view it, double-click `index.html` to open it in your browser.

## Folder layout

```
index.html      Home page
shop.html       All products with filters
product.html    Single product page (WhatsApp ordering)
about.html      Our Story
contact.html    Address, hours, map
js/store-data.js  ← store details + products (EDIT THIS)
css/style.css     Colours, fonts, layout
images/           Logo and photos
```

## 1. Update store details

Open `js/store-data.js` and change the top section: WhatsApp number, phone,
Instagram, TikTok, address, map search and opening hours.

The WhatsApp number must start with the country code and have no `+` or spaces,
e.g. `9779812345678`.

## 2. Logo files

All logo files are in `images/brand/`. SVG files stay sharp at any size and are
best for printing. PNG files work everywhere.

| File | Use it for |
|---|---|
| `logo-stacked.png` / `.svg` | Main logo: shop sign, bags, tags, posters |
| `logo-horizontal.png` / `.svg` | Wide spaces: website header, banners, letterheads |
| `...-white` versions | On rosewood or dark backgrounds, or over photos |
| `profile-picture.png` | Instagram, TikTok, Facebook, WhatsApp Business profile photo |
| `profile-picture-dark.png` | Alternative rosewood profile photo |
| `favicon.svg`, `favicon-48.png`, `apple-touch-icon.png` | Browser tab and phone home-screen icon (already set up) |

Brand colours (Rosewood & Gold): rosewood `#8E3B4A`, deep cocoa `#3A2328`, ivory `#FCF8F5`,
accents `#F2C9C4` (blush) `#E3A3A0` (rose) `#C98A8E` (mauve) `#C9A46A` (gold) `#E9D3B0` (champagne).
Website colours are set at the top of `css/style.css`.
Fonts: Cormorant Garamond (logo and headings) and Jost (small text). Both are free Google Fonts.

## 3. Add photos

| Photo | Save as |
|---|---|
| Home page big photo | `images/hero.jpg` |
| Collection tiles | `images/collection-modern-casual.jpg`, `collection-modern-fancy.jpg`, `collection-traditional-casual.jpg`, `collection-traditional-fancy.jpg` |
| Store photo | `images/store.jpg` |
| Photo of Samie (About page) | `images/about.jpg` |
| Product photos | `images/products/...` (any name) |

Portrait photos (taller than wide, about 3:4) look best.

## 4. Add a new product

In `js/store-data.js`, copy one product block `{ ... },`, paste it inside the
`PRODUCTS` list, and edit it:

```js
{
  id: "red-silk-saree",            // unique, lowercase, dashes
  name: "Red Silk Saree",
  price: 9500, oldPrice: null,     // oldPrice: put a number to show "Sale"
  style: "Traditional",            // "Modern" or "Traditional"
  occasion: "Fancy",               // "Casual" or "Fancy"
  category: "Sarees",
  sizes: ["Free Size"],
  colors: ["Red", "Maroon"],
  images: ["images/products/red-silk-saree-1.jpg", "images/products/red-silk-saree-2.jpg"],
  description: "Short description here.",
  isNew: true,                     // shows on the home page
},
```

To remove a sold-out item, delete its block.

## 5. Text on pages

The home page, About page text and the announcement bar are plain text in
`index.html`, `about.html` and `js/main.js` (search for "Order easily").
