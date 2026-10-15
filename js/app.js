// ============================================================
// LÓGICA DE LA APLICACIÓN — no requiere cambios por cliente.
// Depende de que CONFIG (config.js) esté cargado antes que este archivo.
// ============================================================

// ── ESTADO ──────────────────────────────────────────────────
const cart = {};
let activeCategory = CONFIG.categorias[0].tabId || CONFIG.categorias[0].id;

// ── FORMATO DE PRECIO ────────────────────────────────────────
const fmt = n => '$' + n.toLocaleString('es-CO');

// ── INIT ─────────────────────────────────────────────────────
function init() {
  document.getElementById('restoName').textContent = CONFIG.nombre;
  document.getElementById('restoTagline').textContent = CONFIG.tagline;
  document.getElementById('modalSubtitle').textContent = CONFIG.nombre;
  document.getElementById('logoImg').src = CONFIG.logo;
  document.getElementById('logoImg').alt = CONFIG.nombre;
  initMenuDropdown();
  renderCategories();
  renderMenu(activeCategory);
  renderCartPanel();
  actualizarEstadoNegocio();
  initSplashScreen();
}

// ── INIT BIENVENIDA ───────────────────────────────────────────────
function initSplashScreen(){
  const splashScreen = document.getElementById('splashScreen');
  setTimeout(() =>{
    splashScreen.classList.add('oculto')
  }, 1500);
}

// ── HORARIO DE ATENCIÓN ─────────────────────────────────────────────────────
function actualizarEstadoNegocio() {
  const dias = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
  const ahora = new Date();
  const horarioHoy = CONFIG.horarioSemana[dias[ahora.getDay()]];

  const contenedor = document.getElementById('statusDot');
  const texto = document.getElementById('statusText');
  if (!contenedor || !texto) return;

  if (!horarioHoy) {
    texto.textContent = 'Cerrado';
    contenedor.classList.add('cerrado');
    return;
  }

  const minutosAhora = ahora.getHours() * 60 + ahora.getMinutes();
  const [horaAbre, minAbre] = horarioHoy.abre.split(':').map(Number);
  const [horaCierra, minCierra] = horarioHoy.cierra.split(':').map(Number);
  const estaAbierto = minutosAhora >= (horaAbre * 60 + minAbre) && minutosAhora < (horaCierra * 60 + minCierra);

  texto.textContent = estaAbierto ? 'Abierto' : 'Cerrado';
  contenedor.classList.toggle('cerrado', !estaAbierto);
}

// ── CATEGORÍAS ───────────────────────────────────────────────
function renderCategories() {
  const nav = document.getElementById('catNav');
  const menu = document.getElementById('menuDropdown');
  const tabsYaCreados = new Set();
  CONFIG.categorias.forEach(cat => {
    // tabId agrupa varias categorías bajo una sola pestaña.
    // Si una categoría no define tabId, usa su propio id (comportamiento normal, sin cambios).
    const tabId = cat.tabId || cat.id;
    if (tabsYaCreados.has(tabId)) return; // ya existe una pestaña para este grupo, no crear otra
    tabsYaCreados.add(tabId);
    const tabNombre = cat.tabNombre || cat.nombre;
    const btn = document.createElement('button');
    btn.dataset.tabid = tabId;
    btn.className = 'cat-btn' + (tabId === activeCategory ? ' active' : '');
    const iconoHtml = cat.icono ? `<img src="${cat.icono}" alt="">` : '';
    btn.innerHTML = `${iconoHtml}${tabNombre}`;
    btn.onclick = () => { activeCategory = tabId; setActiveTab(btn); renderMenu(tabId); };
    nav.appendChild(btn);
    const item = document.createElement('button');
    item.innerHTML = `${tabNombre}${iconoHtml}`;
    menu.appendChild(item);
    item.onclick = () => { btn.click(); menu.classList.remove('open'); };
  });
}

function initMenuDropdown() {
  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('menuDropdown');
  btn.onclick = () => { menu.classList.toggle('open'); };
  document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
    }
  });
}


function setActiveTab(btn) {
  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function scrollCats(direction) {
  const nav = document.getElementById('catNav');
  nav.scrollBy({ left: direction * 150, behavior: 'smooth' });
}

// ── MENÚ ─────────────────────────────────────────────────────
function renderMenu(catId) {
  const container = document.getElementById('menuSections');
  container.innerHTML = '';
  const cats = CONFIG.categorias.filter(c => (c.tabId || c.id) === catId);
  cats.forEach(cat => {
    const prods = CONFIG.productos.filter(p => p.cat === cat.id);
    if (!prods.length) return;
    const section = document.createElement('div');
    section.className = 'menu-section';
    section.innerHTML = `<div class="section-title">${cat.nombre}</div>`
      + (cat.nota ? `<div class="section-note">${cat.nota}</div>` : '');
    prods.forEach(p => section.appendChild(productCard(p)));
    container.appendChild(section);
  });
}

//------TARJETA VISUAL PRODUCTO--------------
function mostrarProductoAmpliado(id){
const producto = CONFIG.productos.find(p => p.id == id);
document.getElementById("productModalName").textContent = producto.nombre;
document.getElementById("productModalDesc").textContent = producto.desc;
document.getElementById("productModalImg").innerHTML = producto.imagen
  ? `<img src="${producto.imagen}" alt="${producto.nombre}">`
  : producto.emoji;
document.getElementById("productModalPrice").textContent = fmt(producto.precio);
document.getElementById('productOverlay').classList.add('open');
}

function cerrarProductoAmpliado(){
  document.getElementById('productOverlay').classList.remove('open');
}

function obtenerInfoCarrito(llave){
  const p = CONFIG.productos.find(p => p.id == llave);
  return {nombre: p.nombre, precio: p.precio, emoji: p.emoji};
}

//------TARJETA DE PRODUCTO --------------
function productCard(p) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.id = `card-${p.id}`;
  const contenidoImagen = p.imagen ? `<img src="${p.imagen}" alt="${p.nombre}">` : p.emoji;
  card.innerHTML = `
    <div class="product-img">${contenidoImagen}</div>
    <div class="product-info">
      <div class="product-name">${p.nombre}</div>
      <div class="product-desc">${p.desc}</div>
      <div class="product-footer">
        <div class="product-price"><span class="currency">$</span>${p.precio.toLocaleString('es-CO')}</div>
        <div id="ctrl-${p.id}">${addBtn(p.id)}</div>
      </div>
    </div>`;
  card.onclick = () => mostrarProductoAmpliado(p.id);
  return card;
}

function addBtn(id) {
  return `<button class="add-btn" onclick="event.stopPropagation(); addToCart(${id})">+</button>`;
}

function qtyCtrl(id) {
  const qty = cart[id] || 0;
  return `<div class="qty-control">
    <button class="qty-btn minus" onclick="event.stopPropagation(); removeFromCart(${id})">−</button>
    <span class="qty-num">${qty}</span>
    <button class="qty-btn plus" onclick="event.stopPropagation(); addToCart(${id})">+</button>
  </div>`;
}

// ── CARRITO ──────────────────────────────────────────────────
function addToCart(id) {
  cart[id] = (cart[id] || 0) + 1;
  updateCtrl(id);
  updateFab();
  renderCartPanel();
}

function removeFromCart(id) {
  if (!cart[id]) return;
  cart[id]--;
  if (cart[id] === 0) delete cart[id];
  updateCtrl(id);
  updateFab();
  renderCartPanel();
  if (document.getElementById('overlay').classList.contains('open')) renderModal();
}

function updateCtrl(id) {
  const ctrl = document.getElementById(`ctrl-${id}`);
  if (!ctrl) return;
  ctrl.innerHTML = cart[id] ? qtyCtrl(id) : addBtn(id);
}

function cartTotal() {
  return Object.entries(cart).reduce((sum, [id, qty]) => {
    const info = obtenerInfoCarrito(id);
    return sum + info.precio * qty;
  }, 0);
}

function cartItemCount() {
  return Object.values(cart).reduce((s, v) => s + v, 0);
}

function updateFab() {
  const fab = document.getElementById('cartFab');
  const count = cartItemCount();
  if (count > 0) {
    fab.classList.add('visible');
    document.getElementById('cartCount').textContent = count;
    document.getElementById('cartTotalFab').textContent = fmt(cartTotal());
  } else {
    fab.classList.remove('visible');
  }
}

// ── MODAL ────────────────────────────────────────────────────
function openCart() {
  document.getElementById('overlay').classList.add('open');
  renderModal();
}

function closeCart() {
  document.getElementById('overlay').classList.remove('open');
}

function renderCartInto(itemsEl, totalEl) {
  const entries = Object.entries(cart);

  if (!entries.length) {
    itemsEl.innerHTML = `<div class="empty-cart"><div class="empty-icon">🛒</div><div class="empty-text">Tu pedido está vacío</div></div>`;
    totalEl.textContent = fmt(0);
    return;
  }

  itemsEl.innerHTML = entries.map(([id, qty]) => {
    const info = obtenerInfoCarrito(id);
    return `<div class="cart-item">
      <span style="font-size:20px">${info.emoji}</span>
      <div class="cart-item-name">${info.nombre}</div>
      <span class="cart-item-qty">x${qty}</span>
      <span class="cart-item-price">${fmt(info.precio * qty)}</span>
      <button class="remove-btn" onclick="removeFromCart('${id}')" title="Quitar">✕</button>
    </div>`;
  }).join('');

  totalEl.textContent = fmt(cartTotal());
}

function renderModal() {
  renderCartInto(document.getElementById('modalItems'), document.getElementById('modalTotal'));
}

function renderCartPanel() {
  const itemsEl = document.getElementById('cartPanelItems');
  const totalEl = document.getElementById('cartPanelTotal');
  if (!itemsEl || !totalEl) return;
  renderCartInto(itemsEl, totalEl);
}

// ── ENVIAR PEDIDO POR WHATSAPP ────────────────────────────────
function sendOrder() {
  const entries = Object.entries(cart);
  if (!entries.length) return;

  const lines = entries.map(([id, qty]) => {
    const info = obtenerInfoCarrito(id);
    return `• ${qty}x ${info.nombre} — ${fmt(info.precio * qty)}`;
  });

  const total = cartTotal();
  const msg = [
    `¡Hola *${CONFIG.nombre}*!👋 Me gustaria ordenar el siguiente pedido:`,
    ``,
    ...lines,
    ``,
    `*Total: ${fmt(total)}*`,
    ``,
    `¿Me confirmas por favor disponibilidad y tiempo aproximado de entrega? 😊`
  ].join('\n');

  const url = `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

init();
