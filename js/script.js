/* ============================================================
   LUXE & CO. — storefront interactions
   Front-end demonstration: no payments or orders are processed.
   ============================================================ */
'use strict';

const IMG = 'img/';

const PRODUCTS = [
  { id: 'watch-gold', name: 'Classic Gold Wristwatch', category: 'watches', price: 8450, compareAt: 9800, rating: 4.9, reviews: 128, badge: 'best', lines: ['men', 'accessories'], img: 'watch-gold.jpg',
    desc: 'A champagne-gold bracelet watch with a clean cream dial and applied baton markers. Heirloom weight, everyday ease.',
    meta: ['Gold-tone stainless steel, 36 mm case', 'Splash-resistant sapphire-coated crystal', 'Adjustable linked bracelet with fold clasp'] },
  { id: 'watch-silver', name: 'Minimalist Silver Watch', category: 'watches', price: 6200, rating: 4.7, reviews: 86, badge: 'new', lines: ['women', 'accessories'], img: 'watch-silver.jpg',
    desc: 'Two hands, no numerals, nothing extra. A slim silver case on a fine mesh bracelet that disappears under a cuff.',
    meta: ['Polished stainless steel, 34 mm case', 'Milanese mesh bracelet, tool-free adjust', 'Matte off-white dial, quartz movement'] },
  { id: 'watch-rose', name: 'Elegant Rose Gold Watch', category: 'watches', price: 7800, rating: 4.8, reviews: 104, badge: 'best', lines: ['women', 'accessories'], img: 'watch-rose.jpg',
    desc: 'A blush sunray dial in a petite rose-gold case. The quiet piece that finishes every sleeve.',
    meta: ['Rose-gold tone steel, 30 mm case', 'Sunray blush dial, slim baton hands', 'Delicate link bracelet, jewellery clasp'] },
  { id: 'watch-leather', name: 'Modern Leather Watch', category: 'watches', price: 5450, rating: 4.6, reviews: 72, lines: ['men', 'accessories'], img: 'watch-leather.jpg',
    desc: 'Gunmetal case, forest-green dial, dark tan leather that softens with wear. Built for desks and weekends alike.',
    meta: ['Brushed gunmetal steel, 40 mm case', 'Full-grain tan leather strap', 'Forest-green matte dial, date window'] },

  { id: 'shoe-sneakers', name: 'Cozy Everyday Sneakers', category: 'footwear', price: 3950, rating: 4.8, reviews: 212, badge: 'best', lines: ['women', 'men'], img: 'shoe-sneakers.jpg',
    desc: 'Cream and dusty-rose suede on a cushioned sole. The pair you reach for without thinking.',
    meta: ['Suede and nubuck upper, padded collar', 'Cushioned memory-footbed', 'Flexible non-marking rubber outsole'] },
  { id: 'shoe-flats', name: "Elegant Women's Flats", category: 'footwear', price: 3250, rating: 4.7, reviews: 95, badge: 'new', lines: ['women'], img: 'shoe-flats.jpg',
    desc: 'Almond-toe ballet flats in rose leather with a small gold bow. Soft enough for a full day on your feet.',
    meta: ['Supple rose leather upper', 'Gold-tone bow hardware', 'Leather-lined, flexible sole'] },
  { id: 'shoe-leather', name: 'Premium Leather Shoes', category: 'footwear', price: 6800, compareAt: 7600, rating: 4.9, reviews: 143, lines: ['men'], img: 'shoe-leather.jpg',
    desc: 'Clean derby lines in cognac leather with a stacked heel. Polishes up for meetings, ages beautifully after.',
    meta: ['Full-grain cognac leather', 'Blake-stitched stacked leather heel', 'Calfskin lining, cushioned insole'] },
  { id: 'shoe-kids', name: "Comfortable Kids' Shoes", category: 'footwear', price: 1850, rating: 4.8, reviews: 167, badge: 'best', lines: ['kids'], img: 'shoe-kids.jpg',
    desc: 'Forest-green canvas with velcro straps they can manage themselves. Playground-proof, washable, loved.',
    meta: ['Breathable canvas, cream toe cap', 'Easy velcro closure', 'Flexible grip sole, machine washable'] },

  { id: 'glasses-round', name: 'Vintage Round Glasses', category: 'glasses', price: 2450, rating: 4.6, reviews: 58, lines: ['women', 'men', 'accessories'], img: 'glasses-round.jpg',
    desc: 'Thin gold rims and a keyhole bridge, straight from a better decade. Clear lenses, ready for your prescription.',
    meta: ['Gold-tone metal frame, 48 mm lens', 'Keyhole bridge, tortoise temple tips', 'Prescription-ready clear lenses'] },
  { id: 'glasses-black', name: 'Classic Black Sunglasses', category: 'glasses', price: 2950, rating: 4.8, reviews: 176, badge: 'best', lines: ['women', 'men', 'accessories'], img: 'glasses-black.jpg',
    desc: 'The timeless silhouette in glossy black acetate with gradient smoke lenses and gold hinge pins.',
    meta: ['Polished acetate frame', 'UV400 gradient smoke lenses', 'Gold-tone hinge pins, case included'] },
  { id: 'glasses-pink', name: 'Elegant Pink Eyeglasses', category: 'glasses', price: 2650, rating: 4.7, reviews: 64, badge: 'new', lines: ['women', 'accessories'], img: 'glasses-pink.jpg',
    desc: 'Translucent blush cat-eye frames with fine gold temples. A soft statement that still reads quiet.',
    meta: ['Translucent blush acetate', 'Cat-eye silhouette, 52 mm lens', 'Gold-tone core wire temples'] },
  { id: 'glasses-square', name: 'Modern Square Frames', category: 'glasses', price: 2300, rating: 4.5, reviews: 41, lines: ['men', 'accessories'], img: 'glasses-square.jpg',
    desc: 'Matte forest-green acetate with clean geometric lines. Architectural, understated, unmistakably modern.',
    meta: ['Matte forest-green acetate', 'Square silhouette, 54 mm lens', 'Spring hinges, prescription-ready'] },

  { id: 'bag-shoulder', name: 'Elegant Shoulder Bag', category: 'bags', price: 4600, rating: 4.8, reviews: 112, badge: 'new', lines: ['women', 'accessories'], img: 'bag-shoulder.jpg',
    desc: 'Rose pebbled leather with a chain-and-leather strap and a gold turn-lock. Day-to-evening without a change.',
    meta: ['Pebbled rose leather', 'Chain-and-leather shoulder strap', 'Gold turn-lock, suede-lined interior'] },
  { id: 'bag-handbag', name: 'Premium Leather Handbag', category: 'bags', price: 7900, compareAt: 8900, rating: 4.9, reviews: 158, badge: 'best', lines: ['women', 'accessories'], img: 'bag-handbag.jpg',
    desc: 'A structured forest-green calfskin carryall with rolled handles and gold feet. The bag that anchors a wardrobe.',
    meta: ['Smooth forest-green calfskin', 'Rolled top handles, gold feet', 'Interior zip and slip pockets'] },
  { id: 'bag-tote', name: 'Cozy Everyday Tote Bag', category: 'bags', price: 2850, rating: 4.7, reviews: 90, lines: ['women', 'accessories'], img: 'bag-tote.jpg',
    desc: 'Cream canvas with tan leather trim and a blush lining. Room for the laptop, the market, and the extras.',
    meta: ['Heavy cream canvas, leather trim', 'Blush cotton lining, interior pocket', 'Reinforced base, magnetic closure'] },
  { id: 'bag-backpack', name: 'Minimalist Backpack', category: 'bags', price: 3750, rating: 4.6, reviews: 77, lines: ['men', 'accessories'], img: 'bag-backpack.jpg',
    desc: 'Matte charcoal-taupe panels, hidden zips, slim straps. Commuter quiet with room for a 14-inch laptop.',
    meta: ['Matte vegan leather, water-repellent', 'Padded 14" laptop sleeve', 'Hidden zip, luggage pass-through'] },

  { id: 'cloth-sweater', name: 'Oversized Cozy Sweater', category: 'adults', price: 2950, rating: 4.9, reviews: 231, badge: 'best', lines: ['women', 'men'], img: 'cloth-sweater.jpg',
    desc: 'Chunky cable-knit in oatmeal cream with dropped shoulders. The sweater equivalent of a deep breath.',
    meta: ['Soft wool-blend cable knit', 'Oversized fit, dropped shoulders', 'Ribbed cuffs and hem'] },
  { id: 'cloth-dress', name: "Elegant Women's Dress", category: 'adults', price: 4200, rating: 4.8, reviews: 119, badge: 'new', lines: ['women'], img: 'cloth-dress.jpg',
    desc: 'Bias-cut rose silk satin with a soft cowl neck. Moves the way you do, from desk to dinner.',
    meta: ['Silk-satin blend, bias cut', 'Cowl neckline, adjustable straps', 'Midi length, concealed side zip'] },
  { id: 'cloth-shirt', name: 'Casual Premium Shirt', category: 'adults', price: 2400, rating: 4.6, reviews: 83, lines: ['men'], img: 'cloth-shirt.jpg',
    desc: 'Cream linen-cotton with mother-of-pearl buttons. Breathes in humidity, wrinkles gracefully.',
    meta: ['Linen-cotton blend', 'Mother-of-pearl buttons', 'Relaxed collar, single chest pocket'] },
  { id: 'cloth-trousers', name: 'Relaxed Fit Trousers', category: 'adults', price: 2750, rating: 4.7, reviews: 69, lines: ['men', 'women'], img: 'cloth-trousers.jpg',
    desc: 'Forest-green wool blend with a single pleat and a clean taper. Tailoring that never feels like uniform.',
    meta: ['Wool-blend twill, single pleat', 'Relaxed seat, tapered leg', 'Hook-and-bar closure, side pockets'] },

  { id: 'kids-hoodie', name: "Cozy Kids' Hoodie", category: 'kids', price: 1450, rating: 4.8, reviews: 140, badge: 'best', lines: ['kids'], img: 'kids-hoodie.jpg',
    desc: 'Brushed cream fleece with a rose-lined hood. Warmth they will actually keep on.',
    meta: ['Brushed cotton fleece', 'Rose-lined hood, tan cord tips', 'Kangaroo pocket, ribbed cuffs'] },
  { id: 'kids-dress', name: 'Cute Casual Dress', category: 'kids', price: 1650, rating: 4.7, reviews: 88, badge: 'new', lines: ['kids'], img: 'kids-dress.jpg',
    desc: 'Rose cotton with a tiny cream floral, puff sleeves and a twirl-ready skirt. Party-approved, playground-safe.',
    meta: ['Breathable printed cotton', 'Puff sleeves, gathered waist', 'Back button closure, lined skirt'] },
  { id: 'kids-outfit', name: "Kids' Everyday Outfit", category: 'kids', price: 1950, rating: 4.6, reviews: 75, lines: ['kids'], img: 'kids-outfit.jpg',
    desc: 'A forest-green tee and tan joggers that mix with everything. Two pieces, zero morning arguments.',
    meta: ['Cotton jersey tee, french-terry jogger', 'Elastic waist with inner drawcord', 'Cream ribbed cuffs'] },
  { id: 'kids-sets', name: 'Comfortable Matching Sets', category: 'kids', price: 2250, rating: 4.8, reviews: 102, badge: 'new', lines: ['kids'], img: 'kids-sets.jpg',
    desc: 'Coordinated sweatshirt and jogger sets in rose and forest green. Soft seams, easy mornings, hand-me-down quality.',
    meta: ['French-terry cotton set', 'Ribbed cream trim', 'Two colourways: rose and forest'] },
];

const CATEGORY_LABEL = { watches: 'Watches', footwear: 'Footwear', glasses: 'Glasses', bags: 'Bags', adults: 'Adult Clothing', kids: "Kids' Clothing" };
const LINE_LABEL = { women: "Women's Collection", men: "Men's Collection", kids: "Kids' Collection", accessories: 'Accessories Collection' };
const FREE_SHIP_THRESHOLD = 5000;
const SHIP_FEE = 150;

const peso = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', maximumFractionDigits: 0 });
const money = (n) => peso.format(n);
const byId = (id) => PRODUCTS.find((p) => p.id === id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

/* ---------------- state ---------------- */
const state = {
  filter: 'all',
  line: null,
  query: '',
  sort: 'featured',
  cart: load('luxeco-cart', {}),
  wish: load('luxeco-wish', []),
  modalId: null,
  modalQty: 1,
  checkout: false,
};

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch { return fallback; }
}
function save() {
  try {
    localStorage.setItem('luxeco-cart', JSON.stringify(state.cart));
    localStorage.setItem('luxeco-wish', JSON.stringify(state.wish));
  } catch { /* private browsing: keep state in memory */ }
}

/* ---------------- dom ---------------- */
const $ = (sel) => document.querySelector(sel);
const grid = $('#productGrid');
const bestGrid = $('#bestGrid');
const arrCarousel = $('#arrCarousel');
const resultLine = $('#resultLine');
const emptyState = $('#emptyState');
const chipRow = $('#filterChips');
const cartDrawer = $('#cartDrawer');
const wishDrawer = $('#wishlistDrawer');
const modal = $('#productModal');
const searchOverlay = $('#searchOverlay');
const scrim = $('#scrim');
const mobileNav = $('#mobileNav');

/* ---------------- rendering helpers ---------------- */
function starsHTML(rating) {
  const row = '<span class="stars-row">' + '<svg class="icon"><use href="#i-star"/></svg>'.repeat(5) + '</span>';
  return `<span class="stars" role="img" aria-label="Rated ${rating} out of 5">${row}<span class="stars-fill" style="width:${(rating / 5) * 100}%">${row}</span></span>`;
}

function badgeHTML(p) {
  if (p.badge === 'best') return '<span class="badge badge-best">Best Seller</span>';
  if (p.badge === 'new') return '<span class="badge badge-new">New Arrival</span>';
  return '';
}

function cardHTML(p, i) {
  const wished = state.wish.includes(p.id);
  return `
  <article class="product-card" style="animation:card-in .55s ${Math.min(i * 0.05, 0.4)}s var(--ease) both">
    <div class="product-media" data-view="${p.id}">
      <img src="${IMG}${p.img}" alt="${esc(p.name)}" loading="lazy">
      ${badgeHTML(p)}
      <button class="wish-btn ${wished ? 'is-active' : ''}" data-wish="${p.id}" aria-pressed="${wished}" aria-label="${wished ? 'Remove from' : 'Add to'} wishlist: ${esc(p.name)}">
        <svg class="icon"><use href="#i-heart"/></svg>
      </button>
      <button class="quick-view" data-view="${p.id}"><svg class="icon"><use href="#i-eye"/></svg> Quick View</button>
    </div>
    <div class="product-body">
      <p class="product-cat">${CATEGORY_LABEL[p.category]}</p>
      <h3 class="product-name" data-view="${p.id}">${esc(p.name)}</h3>
      <div class="product-rating">${starsHTML(p.rating)}<span class="rating-num">${p.rating.toFixed(1)} (${p.reviews})</span></div>
      <div class="product-foot">
        <p class="product-price">${money(p.price)}${p.compareAt ? `<small>${money(p.compareAt)}</small>` : ''}</p>
        <button class="add-btn" data-add="${p.id}"><svg class="icon"><use href="#i-bag"/></svg> Add to Cart</button>
      </div>
    </div>
  </article>`;
}

function filteredProducts() {
  const q = state.query.trim().toLowerCase();
  let list = PRODUCTS.filter((p) => {
    const inFilter = state.filter === 'all' ? true
      : state.filter === 'best' ? p.badge === 'best'
      : state.filter === 'new' ? p.badge === 'new'
      : p.category === state.filter;
    const inLine = !state.line || p.lines.includes(state.line);
    const inQuery = !q || p.name.toLowerCase().includes(q) || CATEGORY_LABEL[p.category].toLowerCase().includes(q);
    return inFilter && inLine && inQuery;
  });
  const sorters = {
    'price-asc': (a, b) => a.price - b.price,
    'price-desc': (a, b) => b.price - a.price,
    rating: (a, b) => b.rating - a.rating,
    name: (a, b) => a.name.localeCompare(b.name),
  };
  if (sorters[state.sort]) list = list.slice().sort(sorters[state.sort]);
  return list;
}

function renderChips() {
  chipRow.querySelectorAll('[data-chip="line"]').forEach((n) => n.remove());
  if (state.line) {
    const chip = document.createElement('button');
    chip.className = 'chip chip-accent is-active';
    chip.dataset.chip = 'line';
    chip.innerHTML = `${LINE_LABEL[state.line]} &times;`;
    chipRow.prepend(chip);
  }
  chipRow.querySelectorAll('.chip').forEach((c) => {
    const key = c.dataset.chip;
    c.classList.toggle('is-active', key === 'line' ? !!state.line : key === state.filter && !state.line);
  });
}

function renderShop() {
  const list = filteredProducts();
  grid.innerHTML = list.map(cardHTML).join('');
  emptyState.hidden = list.length > 0;
  grid.hidden = list.length === 0;
  const scope = state.line ? LINE_LABEL[state.line]
    : state.filter === 'all' ? 'the whole atelier'
    : state.filter === 'best' ? 'best sellers'
    : state.filter === 'new' ? 'new arrivals'
    : CATEGORY_LABEL[state.filter].toLowerCase();
  resultLine.textContent = `Showing ${list.length} ${list.length === 1 ? 'piece' : 'pieces'} from ${scope}${state.query ? ` matching “${state.query}”` : ''}`;
  renderChips();
}

function renderCurated() {
  const best = PRODUCTS.filter((p) => p.badge === 'best').sort((a, b) => b.rating - a.rating).slice(0, 4);
  bestGrid.innerHTML = best.map(cardHTML).join('');
  arrCarousel.innerHTML = PRODUCTS.filter((p) => p.badge === 'new').map(cardHTML).join('');
  document.querySelectorAll('.collection-thumbs').forEach((wrap) => {
    const line = wrap.dataset.line;
    wrap.innerHTML = PRODUCTS.filter((p) => p.lines.includes(line)).slice(0, 4).map((p) =>
      `<button class="thumb-btn" data-view="${p.id}" data-name="${esc(p.name)}" aria-label="View ${esc(p.name)}"><img src="${IMG}${p.img}" alt="${esc(p.name)}" loading="lazy"></button>`
    ).join('');
  });
}

/* ---------------- cart ---------------- */
const cartEntries = () => Object.entries(state.cart).map(([id, qty]) => ({ product: byId(id), qty })).filter((e) => e.product);
const cartCount = () => Object.values(state.cart).reduce((a, b) => a + b, 0);
const cartSubtotal = () => cartEntries().reduce((sum, e) => sum + e.product.price * e.qty, 0);

function addToCart(id, qty = 1) {
  const p = byId(id);
  if (!p) return;
  state.cart[id] = (state.cart[id] || 0) + qty;
  save();
  syncBadges();
  renderCart();
  toast(`${p.name} added to your bag`, 'success', 'i-bag');
  const btn = grid.querySelector(`[data-add="${id}"]`) || document.querySelector(`[data-add="${id}"]`);
  if (btn) {
    btn.classList.add('is-added');
    const original = btn.innerHTML;
    btn.innerHTML = '<svg class="icon"><use href="#i-check"/></svg> Added';
    setTimeout(() => { btn.classList.remove('is-added'); btn.innerHTML = original; }, 1200);
  }
}

function setQty(id, qty) {
  if (qty <= 0) { removeItem(id); return; }
  state.cart[id] = Math.min(qty, 99);
  save(); syncBadges(); renderCart();
}

function removeItem(id) {
  const p = byId(id);
  delete state.cart[id];
  save(); syncBadges(); renderCart();
  if (p) toast(`${p.name} removed from your bag`, 'info', 'i-trash');
}

function syncBadges() {
  const c = cartCount();
  const cartBadge = $('#cartCount');
  cartBadge.hidden = c === 0;
  cartBadge.textContent = c;
  if (c) { cartBadge.classList.remove('pop'); void cartBadge.offsetWidth; cartBadge.classList.add('pop'); }
  $('#cartDrawerCount').textContent = `(${c})`;
  const w = state.wish.length;
  const wishBadge = $('#wishlistCount');
  wishBadge.hidden = w === 0;
  wishBadge.textContent = w;
  $('#wishDrawerCount').textContent = `(${w})`;
}

function renderCart() {
  const body = $('#cartBody');
  const foot = $('#cartFoot');
  const entries = cartEntries();

  if (state.checkout && entries.length) {
    const sub = cartSubtotal();
    const ship = sub >= FREE_SHIP_THRESHOLD ? 0 : SHIP_FEE;
    body.innerHTML = `
      <div class="checkout-note"><strong>Demonstration checkout</strong>
        This boutique is a front-end demonstration. No payment is taken, no order is placed, and nothing is shipped. Your bag stays saved in this browser.</div>
      ${entries.map((e) => `
        <div class="summary-row"><span>${esc(e.product.name)} &times; ${e.qty}</span><strong>${money(e.product.price * e.qty)}</strong></div>`).join('')}
      <div class="summary-row"><span>Shipping</span><strong>${ship === 0 ? 'Complimentary' : money(ship)}</strong></div>
      <div class="summary-total"><span>Total</span><strong>${money(sub + ship)}</strong></div>`;
    foot.innerHTML = `
      <button class="btn btn-gold btn-block" data-back-bag><svg class="icon"><use href="#i-arrow-l"/></svg> Back to Bag</button>
      <button class="btn btn-line btn-block" style="margin-top:10px" data-close>Continue Browsing</button>`;
    return;
  }

  if (!entries.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg class="icon"><use href="#i-bag"/></svg>
        <h3>Your bag is empty</h3>
        <p>Fill it with something timeless — the atelier is full of pieces worth keeping.</p>
        <button class="btn btn-rose" data-close data-goto-shop>Explore the Catalog</button>
      </div>`;
    foot.innerHTML = '';
    return;
  }

  body.innerHTML = entries.map((e) => `
    <div class="cart-item">
      <img src="${IMG}${e.product.img}" alt="${esc(e.product.name)}">
      <div>
        <p class="cart-item-name">${esc(e.product.name)}</p>
        <p class="cart-item-unit">${money(e.product.price)} each</p>
        <div class="qty-stepper" style="margin-top:8px">
          <button class="icon-btn" data-dec="${e.product.id}" aria-label="Decrease quantity of ${esc(e.product.name)}"><svg class="icon"><use href="#i-minus"/></svg></button>
          <span>${e.qty}</span>
          <button class="icon-btn" data-inc="${e.product.id}" aria-label="Increase quantity of ${esc(e.product.name)}"><svg class="icon"><use href="#i-plus"/></svg></button>
        </div>
      </div>
      <div class="cart-item-right">
        <button class="icon-btn remove-btn" data-remove="${e.product.id}" aria-label="Remove ${esc(e.product.name)}"><svg class="icon"><use href="#i-trash"/></svg></button>
        <p class="cart-item-total">${money(e.product.price * e.qty)}</p>
      </div>
    </div>`).join('');

  const sub = cartSubtotal();
  const ship = sub >= FREE_SHIP_THRESHOLD ? 0 : SHIP_FEE;
  const remaining = Math.max(0, FREE_SHIP_THRESHOLD - sub);
  foot.innerHTML = `
    <div class="ship-progress">
      <p>${remaining > 0 ? `Add <strong>${money(remaining)}</strong> more for complimentary shipping` : '<strong>Complimentary shipping</strong> unlocked — salamat!'}</p>
      <div class="ship-bar"><i style="width:${Math.min(100, (sub / FREE_SHIP_THRESHOLD) * 100)}%"></i></div>
    </div>
    <div class="summary-row"><span>Subtotal</span><strong>${money(sub)}</strong></div>
    <div class="summary-row"><span>Shipping</span><strong>${ship === 0 ? 'Complimentary' : money(ship)}</strong></div>
    <div class="summary-total"><span>Total</span><strong>${money(sub + ship)}</strong></div>
    <button class="btn btn-rose btn-block" data-checkout>Proceed to Checkout <svg class="icon"><use href="#i-arrow-r"/></svg></button>
    <p class="drawer-fine">Front-end demonstration — no payments or orders are processed.</p>`;
}

/* ---------------- wishlist ---------------- */
function toggleWish(id) {
  const p = byId(id);
  if (!p) return;
  const i = state.wish.indexOf(id);
  if (i >= 0) { state.wish.splice(i, 1); toast(`${p.name} removed from wishlist`, 'info', 'i-heart'); }
  else { state.wish.push(id); toast(`${p.name} saved to wishlist`, 'wish', 'i-heart'); }
  save(); syncBadges(); renderWish(); refreshWishButtons();
}

function refreshWishButtons() {
  document.querySelectorAll('[data-wish]').forEach((btn) => {
    const on = state.wish.includes(btn.dataset.wish);
    btn.classList.toggle('is-active', on);
    btn.setAttribute('aria-pressed', on);
  });
  const mw = $('#modalWish');
  if (state.modalId) {
    const on = state.wish.includes(state.modalId);
    mw.classList.toggle('is-active', on);
    mw.setAttribute('aria-label', on ? 'Remove from wishlist' : 'Add to wishlist');
  }
}

function renderWish() {
  const body = $('#wishlistBody');
  if (!state.wish.length) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg class="icon"><use href="#i-heart"/></svg>
        <h3>No saved pieces yet</h3>
        <p>Tap the heart on any piece to keep it here for later.</p>
        <button class="btn btn-rose" data-close data-goto-shop>Browse the Atelier</button>
      </div>`;
    return;
  }
  body.innerHTML = state.wish.map((id) => {
    const p = byId(id);
    if (!p) return '';
    return `
    <div class="wish-item">
      <img src="${IMG}${p.img}" alt="${esc(p.name)}">
      <div>
        <p class="cart-item-name">${esc(p.name)}</p>
        <p class="cart-item-unit">${CATEGORY_LABEL[p.category]} &middot; ${money(p.price)}</p>
        <div class="wish-actions">
          <button class="add-btn" data-move="${p.id}"><svg class="icon"><use href="#i-bag"/></svg> Add to Cart</button>
          <button class="add-btn" data-unwish="${p.id}"><svg class="icon"><use href="#i-close"/></svg> Remove</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

/* ---------------- overlays ---------------- */
let lastFocus = null;

function anyOverlayOpen() {
  return cartDrawer.classList.contains('is-open') || wishDrawer.classList.contains('is-open')
    || modal.classList.contains('is-open') || searchOverlay.classList.contains('is-open');
}

function syncScrim() {
  const open = anyOverlayOpen();
  scrim.hidden = !open;
  requestAnimationFrame(() => scrim.classList.toggle('is-visible', open));
  document.body.classList.toggle('no-scroll', open);
}

function openOverlay(el) {
  lastFocus = document.activeElement;
  closeMobileNav();
  [cartDrawer, wishDrawer, modal, searchOverlay].forEach((o) => { if (o !== el) o.classList.remove('is-open'); });
  el.classList.add('is-open');
  el.setAttribute('aria-hidden', 'false');
  syncScrim();
  const focusable = el.querySelector('input') || el.querySelector('[data-close]');
  if (focusable) setTimeout(() => { if (el.classList.contains('is-open')) focusable.focus({ preventScroll: true }); }, 120);
}

function closeOverlays() {
  const overlays = [cartDrawer, wishDrawer, modal, searchOverlay];
  const active = document.activeElement;
  if (active && overlays.some((o) => o.contains(active))) {
    if (lastFocus && lastFocus !== document.body && document.contains(lastFocus)) lastFocus.focus({ preventScroll: true });
    const still = document.activeElement;
    if (still && overlays.some((o) => o.contains(still))) still.blur();
  }
  overlays.forEach((o) => { o.classList.remove('is-open'); o.setAttribute('aria-hidden', 'true'); });
  state.checkout = false;
  syncScrim();
}

function openCart() { state.checkout = false; renderCart(); openOverlay(cartDrawer); }
function openWish() { renderWish(); openOverlay(wishDrawer); }

function openProduct(id) {
  const p = byId(id);
  if (!p) return;
  state.modalId = id;
  state.modalQty = 1;
  $('#modalImg').src = IMG + p.img;
  $('#modalImg').alt = p.name;
  $('#modalCat').textContent = CATEGORY_LABEL[p.category];
  $('#modalTitle').textContent = p.name;
  $('#modalRating').innerHTML = `${starsHTML(p.rating)}<span class="rating-num">${p.rating.toFixed(1)} · ${p.reviews} reviews</span>`;
  $('#modalPrice').innerHTML = `${money(p.price)}${p.compareAt ? ` <small style="font-size:16px;color:var(--faint);text-decoration:line-through">${money(p.compareAt)}</small>` : ''}`;
  $('#modalDesc').textContent = p.desc;
  $('#modalMeta').innerHTML = p.meta.map((m) => `<li>${esc(m)}</li>`).join('');
  $('#modalQty').textContent = '1';
  const badge = $('#modalBadge');
  badge.hidden = !p.badge;
  badge.className = 'badge ' + (p.badge === 'best' ? 'badge-best' : 'badge-new');
  badge.textContent = p.badge === 'best' ? 'Best Seller' : 'New Arrival';
  refreshWishButtons();
  openOverlay(modal);
}

/* ---------------- search overlay ---------------- */
function renderSearchResults(q) {
  const box = $('#searchResults');
  const hint = $('#searchHint');
  const query = q.trim().toLowerCase();
  if (!query) {
    box.innerHTML = '';
    hint.textContent = `Type to search the atelier — ${PRODUCTS.length} pieces available.`;
    return;
  }
  const hits = PRODUCTS.filter((p) => p.name.toLowerCase().includes(query) || CATEGORY_LABEL[p.category].toLowerCase().includes(query));
  hint.textContent = hits.length ? `${hits.length} ${hits.length === 1 ? 'piece' : 'pieces'} found` : 'No pieces match that search';
  box.innerHTML = hits.slice(0, 8).map((p) => `
    <button class="search-row" data-view="${p.id}">
      <img src="${IMG}${p.img}" alt="">
      <span><span class="search-row-cat">${CATEGORY_LABEL[p.category]}</span><br><span class="search-row-name">${esc(p.name)}</span></span>
      <span class="search-row-price">${money(p.price)}</span>
    </button>`).join('');
}

/* ---------------- toasts ---------------- */
function toast(message, type = 'success', icon = 'i-check') {
  const region = $('#toastRegion');
  while (region.children.length >= 4) region.firstElementChild.remove();
  const el = document.createElement('div');
  el.className = `toast toast-${type}`;
  el.innerHTML = `<svg class="icon"><use href="#${icon}"/></svg><span>${esc(message)}</span>`;
  region.appendChild(el);
  setTimeout(() => {
    el.classList.add('is-leaving');
    setTimeout(() => el.remove(), 400);
  }, 3400);
}

/* ---------------- navigation & filters ---------------- */
function setFilter(filter, { scroll = true } = {}) {
  state.filter = filter;
  state.line = null;
  renderShop();
  if (scroll) $('#shop').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function closeMobileNav() {
  mobileNav.classList.remove('is-open');
  mobileNav.setAttribute('aria-hidden', 'true');
  $('#navToggle').setAttribute('aria-expanded', 'false');
}

/* ---------------- events ---------------- */
document.addEventListener('click', (e) => {
  const t = e.target;

  const wishBtn = t.closest('[data-wish]');
  if (wishBtn) { e.preventDefault(); e.stopPropagation(); toggleWish(wishBtn.dataset.wish); return; }

  const addBtn = t.closest('[data-add]');
  if (addBtn) { addToCart(addBtn.dataset.add); return; }

  const moveBtn = t.closest('[data-move]');
  if (moveBtn) { addToCart(moveBtn.dataset.move); toggleWish(moveBtn.dataset.move); return; }

  const unwish = t.closest('[data-unwish]');
  if (unwish) { toggleWish(unwish.dataset.unwish); return; }

  const inc = t.closest('[data-inc]');
  if (inc) { setQty(inc.dataset.inc, (state.cart[inc.dataset.inc] || 0) + 1); return; }
  const dec = t.closest('[data-dec]');
  if (dec) { setQty(dec.dataset.dec, (state.cart[dec.dataset.dec] || 0) - 1); return; }
  const rem = t.closest('[data-remove]');
  if (rem) { removeItem(rem.dataset.remove); return; }

  if (t.closest('[data-checkout]')) { state.checkout = true; renderCart(); return; }
  if (t.closest('[data-back-bag]')) { state.checkout = false; renderCart(); return; }

  const view = t.closest('[data-view]');
  if (view) { openProduct(view.dataset.view); return; }

  const chip = t.closest('[data-chip]');
  if (chip) {
    if (chip.dataset.chip === 'line') { state.line = null; renderShop(); }
    else setFilter(chip.dataset.chip, { scroll: false });
    return;
  }

  const jump = t.closest('[data-chip-jump]');
  if (jump) { setFilter(jump.dataset.chipJump); return; }

  const catCard = t.closest('.category-card');
  if (catCard) { setFilter(catCard.dataset.filter); return; }

  const lineShop = t.closest('[data-line-shop]');
  if (lineShop) {
    state.line = lineShop.dataset.lineShop;
    state.filter = 'all';
    state.query = '';
    $('#shopSearch').value = '';
    renderShop();
    $('#shop').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const navFilter = t.closest('[data-nav-filter]');
  if (navFilter) {
    e.preventDefault();
    closeMobileNav();
    setFilter(navFilter.dataset.navFilter);
    return;
  }

  if (t.closest('[data-close]')) {
    const gotoShop = t.closest('[data-goto-shop]');
    closeOverlays();
    if (gotoShop) $('#shop').scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const mLink = t.closest('.m-link');
  if (mLink) closeMobileNav();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') { closeOverlays(); closeMobileNav(); }
  const card = e.target.closest && e.target.closest('.category-card');
  if (card && (e.key === 'Enter' || e.key === ' ')) { e.preventDefault(); setFilter(card.dataset.filter); }
});

scrim.addEventListener('click', closeOverlays);

$('#cartToggle').addEventListener('click', openCart);
$('#wishlistToggle').addEventListener('click', openWish);
$('#searchToggle').addEventListener('click', () => { openOverlay(searchOverlay); renderSearchResults($('#overlaySearch').value); });

$('#navToggle').addEventListener('click', () => {
  const open = mobileNav.classList.toggle('is-open');
  mobileNav.setAttribute('aria-hidden', String(!open));
  $('#navToggle').setAttribute('aria-expanded', String(open));
});

$('#shopSearch').addEventListener('input', (e) => { state.query = e.target.value; renderShop(); });
$('#sortSelect').addEventListener('change', (e) => { state.sort = e.target.value; renderShop(); });
$('#clearFilters').addEventListener('click', () => {
  state.query = ''; state.filter = 'all'; state.line = null; state.sort = 'featured';
  $('#shopSearch').value = ''; $('#sortSelect').value = 'featured';
  renderShop();
});

$('#overlaySearch').addEventListener('input', (e) => renderSearchResults(e.target.value));
$('#overlaySearch').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const first = $('#searchResults').querySelector('[data-view]');
    if (first) openProduct(first.dataset.view);
  }
});

$('#modalPlus').addEventListener('click', () => { state.modalQty = Math.min(99, state.modalQty + 1); $('#modalQty').textContent = state.modalQty; });
$('#modalMinus').addEventListener('click', () => { state.modalQty = Math.max(1, state.modalQty - 1); $('#modalQty').textContent = state.modalQty; });
$('#modalAdd').addEventListener('click', () => { if (state.modalId) addToCart(state.modalId, state.modalQty); });
$('#modalWish').addEventListener('click', () => { if (state.modalId) toggleWish(state.modalId); });

$('#arrPrev').addEventListener('click', () => arrCarousel.scrollBy({ left: -340, behavior: 'smooth' }));
$('#arrNext').addEventListener('click', () => arrCarousel.scrollBy({ left: 340, behavior: 'smooth' }));

$('#toTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------------- contact form ---------------- */
const form = $('#contactForm');
const validators = {
  cfName: (v) => v.trim().length >= 2 || 'Please tell us your name (at least 2 characters).',
  cfEmail: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()) || 'Please enter a valid email address.',
  cfMessage: (v) => v.trim().length >= 10 || 'Your message needs at least 10 characters.',
};

function validateField(input) {
  const result = validators[input.id](input.value);
  const field = input.closest('.field');
  const err = field.querySelector('.field-error');
  if (result === true) {
    field.classList.remove('invalid');
    err.textContent = '';
    return true;
  }
  field.classList.add('invalid');
  err.textContent = result;
  return false;
}

Object.keys(validators).forEach((id) => {
  const input = document.getElementById(id);
  input.addEventListener('input', () => { if (input.closest('.field').classList.contains('invalid')) validateField(input); });
  input.addEventListener('blur', () => { if (input.value.trim()) validateField(input); });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputs = Object.keys(validators).map((id) => document.getElementById(id));
  const ok = inputs.map(validateField).every(Boolean);
  const note = $('#formNote');
  if (!ok) {
    note.className = 'form-note';
    note.textContent = 'Please fix the highlighted fields and try again.';
    inputs.find((i) => i.closest('.field').classList.contains('invalid')).focus();
    return;
  }
  const name = $('#cfName').value.trim().split(' ')[0];
  note.className = 'form-note is-success';
  note.textContent = `Salamat, ${name}! Your message passed validation and is ready to send. This is a front-end demonstration, so nothing was delivered — no message left your browser.`;
  toast('Message validated — demo only, nothing was sent', 'success', 'i-check');
  form.reset();
});

/* ---------------- scroll behaviour ---------------- */
const header = $('#siteHeader');
const toTop = $('#toTop');
const navLinks = [...document.querySelectorAll('.main-nav .nav-link')];
const sectionMap = [
  ['home', 'home'], ['categories', 'shop-all'], ['shop', 'shop-all'], ['collections', 'shop-all'],
  ['best-sellers', 'shop-all'], ['new-arrivals', 'shop-all'], ['about', 'about'], ['contact', 'contact'],
];

let ticking = false;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    const y = window.scrollY;
    header.classList.toggle('is-scrolled', y > 10);
    toTop.classList.toggle('is-visible', y > 700);
    let current = 'home';
    for (const [id] of sectionMap) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) current = id;
    }
    navLinks.forEach((link) => {
      const href = link.getAttribute('href').slice(1);
      const filter = link.dataset.navFilter;
      let active = false;
      if (href === 'home') active = current === 'home';
      else if (href === 'about') active = current === 'about';
      else if (href === 'contact') active = current === 'contact';
      else if (href === 'shop') {
        const inShopZone = ['categories', 'shop', 'collections', 'best-sellers', 'new-arrivals'].includes(current);
        active = inShopZone && (filter === 'all' ? state.filter === 'all' && !state.line : state.filter === filter);
        if (inShopZone && state.filter === 'all' && !state.line && filter === 'all') active = true;
      }
      link.classList.toggle('is-active', active);
    });
    ticking = false;
  });
}
window.addEventListener('scroll', onScroll, { passive: true });

/* ---------------- reveal on scroll ---------------- */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); revealObserver.unobserve(entry.target); }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.hero-content .reveal').forEach((el, i) => el.style.setProperty('--d', `${i * 0.12}s`));
document.querySelectorAll('.category-grid .reveal').forEach((el, i) => el.style.setProperty('--d', `${(i % 3) * 0.1}s`));
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

/* card entrance keyframes (injected here so cards animate on every re-render) */
const style = document.createElement('style');
style.textContent = '@keyframes card-in{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}';
document.head.appendChild(style);

/* ---------------- init ---------------- */
renderShop();
renderCurated();
renderCart();
renderWish();
syncBadges();
refreshWishButtons();
onScroll();