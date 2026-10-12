/* Shared site logic: header, footer, product cards, page setup. */

const formatPrice = (n) => `${STORE.currency} ${n.toLocaleString("en-IN")}`;
const waLink = (text) =>
  `https://wa.me/${STORE.whatsapp}` + (text ? `?text=${encodeURIComponent(text)}` : "");
const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

/* ---------- Icons ---------- */
const ICONS = {
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5"/><path d="M14 3c.4 2.6 2.4 4.6 5 5"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z"/><path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 .8c-1-.5-2.2-1.7-2.7-2.7l.8-1-1-2z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h-2.5A3.5 3.5 0 0 0 9 6.5V10H6.5v3.5H9V21h3.5v-7.5H15l.5-3.5h-3V7a1 1 0 0 1 1-1H15z"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
};

/* ---------- Image placeholders ---------- */
const TONES = [
  ["#F1E6DC", "#E2CFC0"],
  ["#EFE7E3", "#DCC8C2"],
  ["#EDE8E0", "#D8CEBF"],
  ["#F3E9E6", "#E4CDC8"],
  ["#ECE6DD", "#D6CABB"],
];

function toneFor(id) {
  let h = 0;
  for (const c of id) h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return TONES[h % TONES.length];
}

const DRESS_SVG =
  '<svg viewBox="0 0 100 140" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round" stroke-linecap="round">' +
  '<path d="M50 20c0-4 2-7 5-7s5 2.5 5 5-2 4-5 5"/>' +
  '<path d="M50 23L18 40h64L50 23"/>' +
  '<path d="M39 40c1 6 3 10 3 14l-2 10L24 128h52L60 64l-2-10c0-4 2-8 3-14"/>' +
  '<path d="M40 64h20"/></svg>';

function placeholderHTML(id, label) {
  const [a, b] = toneFor(id);
  return `<div class="ph" style="--ph-a:${a};--ph-b:${b}">${DRESS_SVG}${label ? `<span>${esc(label)}</span>` : ""}</div>`;
}

/* Shows the photo if it exists, otherwise the placeholder underneath. */
function imageHTML(src, id, label, alt) {
  const img = src
    ? `<img src="${esc(src)}" alt="${esc(alt || label || "")}" loading="lazy" onerror="this.remove()">`
    : "";
  return `<div class="img-frame">${placeholderHTML(id, label)}${img}</div>`;
}

/* ---------- Product card ---------- */
function productCard(p) {
  const badges =
    (p.isNew ? '<span class="badge">New</span>' : "") +
    (p.oldPrice ? '<span class="badge badge-sale">Sale</span>' : "");
  return `
    <a class="card" href="product.html?id=${encodeURIComponent(p.id)}">
      <div class="card-img">
        ${imageHTML(p.images[0], p.id, "", p.name)}
        <div class="badges">${badges}</div>
      </div>
      <div class="card-body">
        <p class="eyebrow">${esc(p.style)} · ${esc(p.occasion)}</p>
        <h3>${esc(p.name)}</h3>
        <p class="price">${formatPrice(p.price)}${p.oldPrice ? ` <s>${formatPrice(p.oldPrice)}</s>` : ""}</p>
      </div>
    </a>`;
}

/* ---------- Header & footer ---------- */
function socialLinks() {
  const links = [
    ["instagram", STORE.instagram, "Instagram"],
    ["tiktok", STORE.tiktok, "TikTok"],
    ["whatsapp", waLink(), "WhatsApp"],
    ["facebook", STORE.facebook, "Facebook"],
  ].filter(([, url]) => url);
  return links
    .map(([icon, url, label]) => `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${label}">${ICONS[icon]}</a>`)
    .join("");
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const page = document.body.dataset.page;
  const nav = [
    ["home", "index.html", "Home"],
    ["shop", "shop.html", "Shop"],
    ["about", "about.html", "Our Story"],
    ["contact", "contact.html", "Visit Us"],
  ];
  el.className = "site-header";
  el.innerHTML = `
    <div class="announce">Order easily on WhatsApp · Visit our new store in Kathmandu</div>
    <div class="container header-inner">
      <a class="logo" href="index.html" aria-label="${esc(STORE.name)} home">
        <img src="images/logo.png" alt="${esc(STORE.name)}" onload="this.parentElement.classList.add('has-img')" onerror="this.remove()">
        <span class="logo-text">Samie's <em>Collection</em></span>
      </a>
      <nav class="nav" id="nav">
        ${nav.map(([key, href, label]) => `<a href="${href}" class="${key === page ? "active" : ""}">${label}</a>`).join("")}
      </nav>
      <div class="header-social">${socialLinks()}</div>
      <button class="menu-btn" id="menu-btn" aria-label="Open menu">${ICONS.menu}</button>
    </div>`;
  document.getElementById("menu-btn").addEventListener("click", () => {
    document.getElementById("nav").classList.toggle("open");
  });
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.className = "site-footer";
  el.innerHTML = `
    <div class="container footer-grid">
      <div>
        <p class="logo-text footer-logo">Samie's <em>Collection</em></p>
        <p class="muted">${esc(STORE.tagline)}. Modern and traditional wear for women, casual to celebration.</p>
        <div class="social">${socialLinks()}</div>
      </div>
      <div>
        <h4>Shop</h4>
        <a href="shop.html?style=Modern">Modern</a>
        <a href="shop.html?style=Traditional">Traditional</a>
        <a href="shop.html?occasion=Casual">Casual</a>
        <a href="shop.html?occasion=Fancy">Fancy &amp; Festive</a>
      </div>
      <div>
        <h4>Visit</h4>
        <p class="muted">${esc(STORE.address)}</p>
        ${STORE.hours.map(([d, t]) => `<p class="muted">${esc(d)}: ${esc(t)}</p>`).join("")}
      </div>
      <div>
        <h4>Contact</h4>
        <a href="${waLink()}" target="_blank" rel="noopener">WhatsApp</a>
        <a href="tel:${esc(STORE.phone.replace(/[^\d+]/g, ""))}">${esc(STORE.phone)}</a>
        <a href="contact.html">Find the store</a>
      </div>
    </div>
    <div class="container footer-bottom">© ${new Date().getFullYear()} ${esc(STORE.name)}</div>`;

  const fab = document.createElement("a");
  fab.className = "wa-fab";
  fab.href = waLink(`Hi ${STORE.name}! I have a question.`);
  fab.target = "_blank";
  fab.rel = "noopener";
  fab.setAttribute("aria-label", "Chat on WhatsApp");
  fab.innerHTML = ICONS.whatsapp;
  document.body.appendChild(fab);
}

/* ---------- Home ---------- */
function initHome() {
  const grid = document.getElementById("new-arrivals");
  if (grid) grid.innerHTML = PRODUCTS.filter((p) => p.isNew).slice(0, 8).map(productCard).join("");

  document.querySelectorAll("[data-ph]").forEach((el) => {
    el.innerHTML = imageHTML(el.dataset.src, el.dataset.ph, el.dataset.label || "");
  });
  document.querySelectorAll("[data-social]").forEach((el) => (el.innerHTML = socialLinks()));
}

/* ---------- Shop ---------- */
function initShop() {
  const params = new URLSearchParams(location.search);
  const state = {
    style: params.get("style") || "All",
    occasion: params.get("occasion") || "All",
    category: params.get("category") || "All",
    sort: params.get("sort") || "featured",
  };

  const categories = ["All", ...new Set(PRODUCTS.map((p) => p.category))];
  const catSelect = document.getElementById("f-category");
  catSelect.innerHTML = categories.map((c) => `<option>${esc(c)}</option>`).join("");

  function syncControls() {
    document.querySelectorAll(".chips").forEach((group) => {
      group.querySelectorAll("button").forEach((b) => {
        b.classList.toggle("active", b.dataset.value === state[group.dataset.filter]);
      });
    });
    catSelect.value = state.category;
    document.getElementById("f-sort").value = state.sort;
  }

  function render() {
    let list = PRODUCTS.filter(
      (p) =>
        (state.style === "All" || p.style === state.style) &&
        (state.occasion === "All" || p.occasion === state.occasion) &&
        (state.category === "All" || p.category === state.category)
    );
    if (state.sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (state.sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    if (state.sort === "new") list = [...list].sort((a, b) => b.isNew - a.isNew);

    document.getElementById("shop-grid").innerHTML = list.length
      ? list.map(productCard).join("")
      : `<p class="empty">No pieces match these filters yet. <a href="${waLink("Hi! I'm looking for something specific:")}" target="_blank" rel="noopener">Ask us on WhatsApp</a>. We may have it in store.</p>`;
    document.getElementById("shop-count").textContent = `${list.length} piece${list.length === 1 ? "" : "s"}`;

    const title = [state.style, state.occasion].filter((v) => v !== "All").join(" · ");
    document.getElementById("shop-title").textContent = title || "All Collections";

    const qs = new URLSearchParams();
    for (const [k, v] of Object.entries(state)) if (v !== "All" && v !== "featured") qs.set(k, v);
    history.replaceState(null, "", qs.toString() ? `?${qs}` : location.pathname);
    syncControls();
  }

  document.querySelectorAll(".chips button").forEach((b) =>
    b.addEventListener("click", () => {
      state[b.parentElement.dataset.filter] = b.dataset.value;
      render();
    })
  );
  catSelect.addEventListener("change", (e) => { state.category = e.target.value; render(); });
  document.getElementById("f-sort").addEventListener("change", (e) => { state.sort = e.target.value; render(); });

  render();
}

/* ---------- Product ---------- */
function initProduct() {
  const id = new URLSearchParams(location.search).get("id");
  const p = PRODUCTS.find((x) => x.id === id);
  const root = document.getElementById("product");

  if (!p) {
    root.innerHTML = `<div class="empty"><h2>Sorry, we couldn't find that piece.</h2><p><a class="btn" href="shop.html">Back to the shop</a></p></div>`;
    return;
  }
  document.title = `${p.name} | ${STORE.name}`;

  const images = p.images.length ? p.images : [null];
  const sel = { size: p.sizes.length === 1 ? p.sizes[0] : null, color: p.colors.length === 1 ? p.colors[0] : null };

  const options = (key, label, values) => `
    <div class="option">
      <p class="option-label">${label}: <span id="${key}-chosen">${sel[key] ? esc(sel[key]) : "Select"}</span></p>
      <div class="pills" data-option="${key}">
        ${values.map((v) => `<button type="button" class="${sel[key] === v ? "active" : ""}" data-value="${esc(v)}">${esc(v)}</button>`).join("")}
      </div>
    </div>`;

  root.innerHTML = `
    <nav class="crumbs"><a href="shop.html">Shop</a> / <a href="shop.html?style=${esc(p.style)}">${esc(p.style)}</a> / ${esc(p.name)}</nav>
    <div class="product-layout">
      <div class="gallery">
        <div class="gallery-main" id="gallery-main">${imageHTML(images[0], p.id, "", p.name)}</div>
        ${images.length > 1 ? `<div class="thumbs">${images.map((src, i) => `<button type="button" data-i="${i}" class="${i === 0 ? "active" : ""}">${imageHTML(src, p.id, "", p.name)}</button>`).join("")}</div>` : ""}
      </div>
      <div class="product-info">
        <p class="eyebrow">${esc(p.style)} · ${esc(p.occasion)} · ${esc(p.category)}</p>
        <h1>${esc(p.name)}</h1>
        <p class="price price-lg">${formatPrice(p.price)}${p.oldPrice ? ` <s>${formatPrice(p.oldPrice)}</s>` : ""}</p>
        <p class="description">${esc(p.description)}</p>
        ${options("size", "Size", p.sizes)}
        ${options("color", "Colour", p.colors)}
        <p class="form-hint" id="order-hint" hidden>Please choose a size and colour first.</p>
        <a class="btn btn-wa" id="order-btn" href="#" target="_blank" rel="noopener">${ICONS.whatsapp} Order on WhatsApp</a>
        <a class="btn btn-outline" href="${esc(STORE.instagram)}" target="_blank" rel="noopener">${ICONS.instagram} Message us on Instagram</a>
        <ul class="perks">
          <li>${esc(STORE.deliveryNote)}</li>
          <li>Try it on in our store. See the <a href="contact.html">address &amp; hours</a>.</li>
          <li>Questions about fit? We'll send extra photos and measurements on WhatsApp.</li>
        </ul>
      </div>
    </div>`;

  // Gallery thumbs
  root.querySelectorAll(".thumbs button").forEach((b) =>
    b.addEventListener("click", () => {
      root.querySelectorAll(".thumbs button").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      document.getElementById("gallery-main").innerHTML = imageHTML(images[b.dataset.i], p.id, "", p.name);
    })
  );

  // Size / colour pills
  root.querySelectorAll(".pills button").forEach((b) =>
    b.addEventListener("click", () => {
      const key = b.parentElement.dataset.option;
      sel[key] = b.dataset.value;
      b.parentElement.querySelectorAll("button").forEach((x) => x.classList.toggle("active", x === b));
      document.getElementById(`${key}-chosen`).textContent = sel[key];
      if (sel.size && sel.color) document.getElementById("order-hint").hidden = true;
    })
  );

  // WhatsApp order
  document.getElementById("order-btn").addEventListener("click", (e) => {
    if (!sel.size || !sel.color) {
      e.preventDefault();
      document.getElementById("order-hint").hidden = false;
      return;
    }
    const link = location.protocol.startsWith("http") ? `\n${location.href}` : "";
    const msg =
      `Hi ${STORE.name}! I'd like to order:\n\n` +
      `• ${p.name}\n• Size: ${sel.size}\n• Colour: ${sel.color}\n• Price: ${formatPrice(p.price)}${link}`;
    e.currentTarget.href = waLink(msg);
  });

  // Related
  const related = PRODUCTS.filter((x) => x.id !== p.id && (x.style === p.style || x.category === p.category)).slice(0, 4);
  document.getElementById("related").innerHTML = related.map(productCard).join("");
}

/* ---------- Contact ---------- */
function initContact() {
  document.getElementById("c-address").textContent = STORE.address;
  document.getElementById("c-hours").innerHTML = STORE.hours
    .map(([d, t]) => `<div class="hours-row"><span>${esc(d)}</span><span>${esc(t)}</span></div>`)
    .join("");
  document.getElementById("c-phone").innerHTML = `<a href="tel:${esc(STORE.phone.replace(/[^\d+]/g, ""))}">${esc(STORE.phone)}</a>`;
  document.getElementById("c-wa").href = waLink(`Hi ${STORE.name}! I'd like to visit the store.`);
  document.getElementById("c-directions").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(STORE.mapQuery)}`;
  document.getElementById("c-map").src = `https://www.google.com/maps?q=${encodeURIComponent(STORE.mapQuery)}&output=embed`;
  document.querySelectorAll("[data-social]").forEach((el) => (el.innerHTML = socialLinks()));
}

/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  const page = document.body.dataset.page;
  if (page === "home") initHome();
  if (page === "shop") initShop();
  if (page === "product") initProduct();
  if (page === "contact") initContact();
  if (page === "about") document.querySelectorAll("[data-ph]").forEach((el) => {
    el.innerHTML = imageHTML(el.dataset.src, el.dataset.ph, el.dataset.label || "");
  });
});
