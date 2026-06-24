// CURSOR
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX;
  my = e.clientY;
});

function animateCursor() {
  cursor.style.left = mx + 'px';
  cursor.style.top = my + 'px';
  rx += (mx - rx) * 0.15;
  ry += (my - ry) * 0.15;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a,button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(2)';
    ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
  });
});

// MENU
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  const h = document.getElementById('hamburger');
  const o = document.getElementById('menuOverlay');
  m.classList.toggle('open');
  h.classList.toggle('active');
  o.classList.toggle('visible');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}

function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('active');
  document.getElementById('menuOverlay').classList.remove('visible');
  document.body.style.overflow = '';
}

function toggleSubmenu(id, parentId, e) {
  e.preventDefault();
  const sub = document.getElementById(id);
  const parent = document.getElementById(parentId);
  const isOpen = parent.classList.contains('open');
  document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) parent.classList.add('open');
}

// SEARCH
function toggleSearch() {
  const o = document.getElementById('searchOverlay');
  o.classList.toggle('open');
  if (o.classList.contains('open')) {
    document.getElementById('searchInput').focus();
  } else {
    document.getElementById('searchInput').value = '';
    filterProducts('');
  }
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const o = document.getElementById('searchOverlay');
    if (o && o.classList.contains('open')) {
      o.classList.remove('open');
      document.getElementById('searchInput').value = '';
      filterProducts('');
    }
  }
});

const searchInput = document.getElementById('searchInput');

// Add suggestions container if missing
let suggestionsBox = document.getElementById('searchSuggestions');
if (searchInput && !suggestionsBox) {
  suggestionsBox = document.createElement('div');
  suggestionsBox.id = 'searchSuggestions';
  suggestionsBox.style.cssText = `
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    max-height: 50vh;
    overflow-y: auto;
    background: var(--panel);
    border: 1px solid var(--border);
    border-top: none;
    display: none;
    z-index: 2001;
  `;
  searchInput.parentElement.appendChild(suggestionsBox);
}

function normalizeStr(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    filterProducts(e.target.value);
  });
}

function filterProducts(rawQuery) {
  const query = normalizeStr(rawQuery).trim();
  const products = document.querySelectorAll('.product-card');
  const section = document.getElementById('productos');
  const suggestionsBox = document.getElementById('searchSuggestions');

  if (query !== '' && section && document.getElementById('searchOverlay').classList.contains('open')) {
    section.scrollIntoView({ behavior: 'smooth' });
  }

  let hasSuggestions = false;
  let suggestionsHTML = '';

  products.forEach(card => {
    const nameEl = card.querySelector('.product-name');
    const categoryEl = card.querySelector('.product-category');

    const nameText = nameEl ? nameEl.textContent : '';
    const normName = normalizeStr(nameText);
    const categoryText = categoryEl ? categoryEl.textContent : '';
    const normCategory = normalizeStr(categoryText);

    if (query === '') {
      card.style.display = 'block';
    } else {
      if (normName.includes(query) || normCategory.includes(query)) {
        card.style.display = 'block';
        hasSuggestions = true;

        const priceEl = card.querySelector('.product-price');
        const priceText = priceEl ? priceEl.textContent.trim().replace(/\s+/g, ' ') : '';

        suggestionsHTML += `
          <div class="suggestion-item" style="padding: 1rem 1.5rem; border-bottom: 1px solid var(--border); cursor: none; display: flex; justify-content: space-between; align-items: center; transition: background 0.2s;" onmouseenter="this.style.background='var(--dark)'" onmouseleave="this.style.background='transparent'" onclick="document.getElementById('searchOverlay').classList.remove('open'); document.getElementById('searchInput').value=''; filterProducts(''); setTimeout(()=> { const p = Array.from(document.querySelectorAll('.product-name')).find(n => n.textContent === '${nameText.replace(/'/g, "\\'")}'); if(p) p.scrollIntoView({behavior:'smooth', block:'center'}); }, 100);">
            <div style="display: flex; flex-direction: column;">
              <span style="font-family: var(--font-ui); font-size: 0.7rem; color: var(--accent); letter-spacing: 2px; text-transform: uppercase;">${categoryText}</span>
              <span style="font-family: var(--font-display); font-size: 1.2rem; color: var(--white); letter-spacing: 1px;">${nameText}</span>
            </div>
            <span style="font-family: var(--font-ui); color: var(--gray); font-size: 1rem;">${priceText}</span>
          </div>
        `;
      } else {
        card.style.display = 'none';
      }
    }
  });

  if (suggestionsBox) {
    if (query !== '' && hasSuggestions) {
      suggestionsBox.innerHTML = suggestionsHTML;
      suggestionsBox.style.display = 'block';
    } else if (query !== '' && !hasSuggestions) {
      suggestionsBox.innerHTML = `<div style="padding: 1.5rem; color: var(--gray); font-family: var(--font-ui); letter-spacing: 1px;">NO SE ENCONTRARON RESULTADOS</div>`;
      suggestionsBox.style.display = 'block';
    } else {
      suggestionsBox.style.display = 'none';
    }

    // Attach custom cursor events to suggestion items
    const suggestionItems = suggestionsBox.querySelectorAll('.suggestion-item');
    suggestionItems.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (window.cursor && window.ring) {
          window.cursor.style.transform = 'translate(-50%,-50%) scale(2)';
          window.ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
        }
      });
      el.addEventListener('mouseleave', () => {
        if (window.cursor && window.ring) {
          window.cursor.style.transform = 'translate(-50%,-50%) scale(1)';
          window.ring.style.transform = 'translate(-50%,-50%) scale(1)';
        }
      });
    });
  }
}

// CART
let cartItems = 0;
let cartTotal = 0;
let cartList = [];

function saveCart() {
  localStorage.setItem('ironforge_cart', JSON.stringify({
    items: cartItems,
    total: cartTotal,
    list: cartList
  }));
}

function loadCart() {
  const saved = localStorage.getItem('ironforge_cart');
  if (saved) {
    try {
      const data = JSON.parse(saved);
      cartItems = data.items || 0;
      cartTotal = data.total || 0;
      cartList = data.list || [];
      document.getElementById('cartCount').textContent = cartItems;
      updateCartSidebar();
    } catch (e) {
      console.error('Error parsing cart data', e);
    }
  }
}

// Load cart on page load
document.addEventListener('DOMContentLoaded', loadCart);

function getPriceForProduct(name) {
  const buttons = document.querySelectorAll('button');
  for (let i = 0; i < buttons.length; i++) {
    const onclick = buttons[i].getAttribute('onclick');
    if (onclick && onclick.includes(`addToCart('${name}')`)) {
      const card = buttons[i].closest('.product-card');
      if (card) {
        const priceEl = card.querySelector('.product-price');
        if (priceEl) {
          const clone = priceEl.cloneNode(true);
          const oldPrice = clone.querySelector('.old-price');
          if (oldPrice) oldPrice.remove();
          const currency = clone.querySelector('.currency');
          if (currency) currency.remove();

          const priceStr = clone.textContent.replace(/[^0-9]/g, '');
          return parseInt(priceStr, 10) || 0;
        }
      }
    }
  }
  return 0;
}

function toggleCart() {
  const c = document.getElementById('cartSidebar');
  const o = document.getElementById('cartOverlay');
  c.classList.toggle('open');
  o.classList.toggle('visible');
  document.body.style.overflow = c.classList.contains('open') ? 'hidden' : '';
}

function addToCart(name, priceArg) {
  const price = priceArg || getPriceForProduct(name);
  cartItems++;
  cartTotal += price;

  let existingItem = cartList.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    cartList.push({ name, price, quantity: 1 });
  }

  document.getElementById('cartCount').textContent = cartItems;
  if (!priceArg) showToast('🛒 ' + name + ' agregado');

  saveCart();
  updateCartSidebar();
}

function removeFromCart(index) {
  const item = cartList[index];
  if (item) {
    cartTotal -= (item.price * item.quantity);
    cartItems -= item.quantity;
    cartList.splice(index, 1);

    document.getElementById('cartCount').textContent = cartItems;
    saveCart();
    updateCartSidebar();
  }
}

function removeUnitFromCart(index) {
  const item = cartList[index];
  if (item) {
    item.quantity--;
    cartTotal -= item.price;
    cartItems--;
    if (item.quantity === 0) {
      cartList.splice(index, 1);
    }

    document.getElementById('cartCount').textContent = cartItems;
    saveCart();
    updateCartSidebar();
  }
}

function addUnitToCart(index) {
  const item = cartList[index];
  if (item) {
    addToCart(item.name, item.price);
  }
}

function updateCartSidebar() {
  const c = document.getElementById('cartSidebar');
  if (!c) return;

  let html = `
  <div class="cart-header">
    <h3>CARRITO</h3>
    <button class="cart-close" onclick="toggleCart()">✕</button>
  </div>`;

  if (cartItems === 0) {
    html += `
    <div class="cart-empty">
      <div class="cart-empty-icon">🛒</div>
      <p>TU CARRITO ESTÁ VACÍO</p>
    </div>`;
  } else {
    html += `<div class="cart-items" style="padding: 1.5rem; overflow-y: auto; flex: 1;">`;
    cartList.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      html += `
        <div class="cart-item" style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border);">
          <div style="flex: 1; padding-right: 1rem;">
            <div style="font-family: var(--font-ui); font-size: 1rem; letter-spacing: 1px; color: var(--white);">${item.name}</div>
            <div style="font-family: var(--font-ui); font-size: 0.85rem; color: var(--gray); margin-top: 0.3rem; display: flex; align-items: center; gap: 0.5rem;">
              <span style="color: var(--white); font-weight: 500;">${item.quantity} un</span> 
              <span>x $${item.price.toLocaleString('en-US')}</span>
            </div>
            <div style="display: flex; gap: 0.5rem; margin-top: 0.4rem;">
              <button onclick="addUnitToCart(${index})" style="background: #e8ff00; color: black; font-size: 0.65rem; letter-spacing: 1px; cursor: pointer; text-decoration: underline; font-family: var(--font-ui); transition: opacity 0.2s; padding: 0;" onmouseenter="this.style.opacity='0.7'" onmouseleave="this.style.opacity='1'">+1 UNIDAD</button>
              <button onclick="removeUnitFromCart(${index})" style="background: #e8ff00; color: black; font-size: 0.65rem; letter-spacing: 1px; cursor: pointer; text-decoration: underline; font-family: var(--font-ui); transition: opacity 0.2s; padding: 0;" onmouseenter="this.style.opacity='0.7'" onmouseleave="this.style.opacity='1'">-1 UNIDAD</button>
            </div>
          </div>
          <div style="text-align: right; display: flex; flex-direction: column; align-items: flex-end;">
            <div style="font-family: var(--font-display); font-size: 1.2rem; color: var(--accent); margin-bottom: 0.4rem;">
              $${itemTotal.toLocaleString('en-US')}
            </div>
            <button class="delete-btn" onclick="removeFromCart(${index})" style="background: #e8ff00; color: black; font-size: 0.75rem; letter-spacing: 1px; cursor: pointer; text-decoration: underline; font-family: var(--font-ui); transition: opacity 0.2s;" onmouseenter="this.style.opacity='0.7'" onmouseleave="this.style.opacity='1'">ELIMINAR T. (X)</button>
          </div>
        </div>
      `;
    });
    html += `</div>
    <div class="cart-footer" style="padding: 1.5rem; border-top: 1px solid var(--border); background: var(--dark);">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 1.5rem;">
        <span style="font-family: var(--font-ui); font-size: 1.1rem; letter-spacing: 2px;">TOTAL (${cartItems})</span>
        <span style="font-family: var(--font-display); font-size: 1.8rem; color: var(--accent);">$${cartTotal.toLocaleString('en-US')}</span>
      </div>
      <button class="btn-primary" id="checkoutBtn" style="width: 100%; justify-content: center; font-size: 1rem; cursor: none;">COMPRAR AHORA</button>
    </div>`;
  }

  c.innerHTML = html;

  // Asociar handler de checkout al botón COMPRAR AHORA
  const buyBtn = c.querySelector('#checkoutBtn');
  if (buyBtn) {
    buyBtn.style.cursor = 'none';
    buyBtn.addEventListener('click', checkout);
  }

  // Re-attach hover events for new buttons inside cart to cursor logic
  const newBtns = c.querySelectorAll('button');
  newBtns.forEach(el => {
    el.addEventListener('mouseenter', () => {
      if (window.cursor && window.ring) {
        window.cursor.style.transform = 'translate(-50%,-50%) scale(2)';
        window.ring.style.transform = 'translate(-50%,-50%) scale(1.5)';
      }
    });
    el.addEventListener('mouseleave', () => {
      if (window.cursor && window.ring) {
        window.cursor.style.transform = 'translate(-50%,-50%) scale(1)';
        window.ring.style.transform = 'translate(-50%,-50%) scale(1)';
      }
    });
  });
}

// TOAST
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2800);
}

// REVEAL ON SCROLL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach((e, i) => {
    if (e.isIntersecting) {
      setTimeout(() => e.target.classList.add('visible'), i * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

reveals.forEach(r => observer.observe(r));

// ============================================================
// AUTH SYSTEM — IRONFORGE
// ============================================================

// Detectar ruta base de la API (relativa a la posición actual del HTML)
(function detectApiBase() {
  const path = window.location.pathname;
  // Si estamos en /admin/ o /api/, retroceder un nivel
  window.API_BASE = path.includes('/admin/') ? '../api' : 'api';
})();

let currentUser = null;   // { id, nombre, email } o null

// ─── Verificar sesión al cargar ───────────────────────────
async function checkAuth() {
  try {
    const res = await fetch(API_BASE + '/me.php', { credentials: 'include' });
    const data = await res.json();
    if (data.loggedIn) {
      currentUser = data.user;
      updateAuthUI(true);
    } else {
      currentUser = null;
      updateAuthUI(false);
    }
  } catch (e) {
    // Si el servidor PHP no está disponible (archivo abierto directo) ignorar
    currentUser = null;
  }
}

document.addEventListener('DOMContentLoaded', checkAuth);

// ─── Actualizar UI según estado de sesión ─────────────────
function updateAuthUI(loggedIn) {
  const dot  = document.getElementById('authUserDot');
  const btn  = document.getElementById('authNavBtn');
  if (!dot || !btn) return;

  if (loggedIn && currentUser) {
    dot.style.display = 'block';
    btn.title = currentUser.nombre;
    // Actualizar popover
    const nameEl  = document.getElementById('userPopoverName');
    const emailEl = document.getElementById('userPopoverEmail');
    if (nameEl)  nameEl.textContent  = currentUser.nombre.toUpperCase();
    if (emailEl) emailEl.textContent = currentUser.email;
  } else {
    dot.style.display = 'none';
    btn.title = 'Mi Cuenta';
  }
  // Actualizar botón carrito si existe
  updateCheckoutButton();
}

// ─── Botón de cuenta en navbar ────────────────────────────
function handleAuthNavClick() {
  if (currentUser) {
    toggleUserPopover();
  } else {
    openAuthModal('login');
  }
}

// ─── Popover de usuario logueado ──────────────────────────
let popoverOpen = false;
function toggleUserPopover() {
  const popover = document.getElementById('userPopover');
  if (!popover) return;
  popoverOpen = !popoverOpen;
  popover.classList.toggle('open', popoverOpen);
}

document.addEventListener('click', (e) => {
  const popover = document.getElementById('userPopover');
  const authBtn = document.getElementById('authNavBtn');
  if (popover && !popover.contains(e.target) && authBtn && !authBtn.contains(e.target)) {
    popover.classList.remove('open');
    popoverOpen = false;
  }
});

// ─── Abrir / Cerrar Auth Modal ────────────────────────────
function openAuthModal(tab = 'login') {
  const overlay = document.getElementById('authOverlay');
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  switchAuthTab(tab);
  // Limpiar mensajes y campos
  clearAuthMessages();
  setTimeout(() => {
    const id = tab === 'login' ? 'loginEmail' : 'regNombre';
    const el = document.getElementById(id);
    if (el) el.focus();
  }, 100);
}

function closeAuthModal() {
  const overlay = document.getElementById('authOverlay');
  if (!overlay) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  clearAuthMessages();
}

function handleAuthOverlayClick(e) {
  if (e.target === document.getElementById('authOverlay')) closeAuthModal();
}

function clearAuthMessages() {
  ['loginMsg', 'registerMsg'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = ''; el.className = 'auth-msg'; }
  });
}

// ─── Cambiar tab ──────────────────────────────────────────
function switchAuthTab(tab) {
  const tabs  = { login: 'tabLogin',     register: 'tabRegister' };
  const panes = { login: 'paneLogin',    register: 'paneRegister' };
  Object.keys(tabs).forEach(k => {
    const t = document.getElementById(tabs[k]);
    const p = document.getElementById(panes[k]);
    if (t) t.classList.toggle('active', k === tab);
    if (p) p.style.display = k === tab ? 'block' : 'none';
  });
}

// ─── Login ────────────────────────────────────────────────
async function submitLogin() {
  const email    = (document.getElementById('loginEmail')?.value    || '').trim();
  const password =  document.getElementById('loginPassword')?.value || '';
  const msgEl    = document.getElementById('loginMsg');
  const btn      = document.getElementById('loginSubmit');

  if (!email || !password) {
    showAuthMsg(msgEl, 'Completa todos los campos.', 'error'); return;
  }

  btn.disabled = true;
  btn.textContent = 'VERIFICANDO...';

  try {
    const res  = await fetch(API_BASE + '/login.php', {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (data.success) {
      currentUser = data.user;
      updateAuthUI(true);
      showAuthMsg(msgEl, '¡Bienvenido, ' + data.user.nombre + '!', 'success');
      setTimeout(() => {
        closeAuthModal();
        // Si había un checkout pendiente, procederlo
        if (window._pendingCheckout) {
          window._pendingCheckout = false;
          checkout();
        }
      }, 900);
    } else {
      showAuthMsg(msgEl, data.message || 'Error al iniciar sesión.', 'error');
    }
  } catch(e) {
    showAuthMsg(msgEl, 'No se pudo conectar al servidor. ¿Está XAMPP activo?', 'error');
  }

  btn.disabled = false;
  btn.textContent = 'ENTRAR →';
}

// ─── Register ─────────────────────────────────────────────
async function submitRegister() {
  const nombre   = (document.getElementById('regNombre')?.value    || '').trim();
  const email    = (document.getElementById('regEmail')?.value     || '').trim();
  const password =  document.getElementById('regPassword')?.value  || '';
  const msgEl    = document.getElementById('registerMsg');
  const btn      = document.getElementById('registerSubmit');

  if (!nombre || !email || !password) {
    showAuthMsg(msgEl, 'Completa todos los campos.', 'error'); return;
  }
  if (password.length < 6) {
    showAuthMsg(msgEl, 'La contraseña debe tener mínimo 6 caracteres.', 'error'); return;
  }

  btn.disabled = true;
  btn.textContent = 'CREANDO CUENTA...';

  try {
    const res  = await fetch(API_BASE + '/register.php', {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre, email, password })
    });
    const data = await res.json();

    if (data.success) {
      currentUser = data.user;
      updateAuthUI(true);
      showAuthMsg(msgEl, '¡Cuenta creada! Bienvenido, ' + data.user.nombre + '.', 'success');
      setTimeout(() => {
        closeAuthModal();
        if (window._pendingCheckout) {
          window._pendingCheckout = false;
          checkout();
        }
      }, 900);
    } else {
      showAuthMsg(msgEl, data.message || 'Error al crear cuenta.', 'error');
    }
  } catch(e) {
    showAuthMsg(msgEl, 'No se pudo conectar al servidor. ¿Está XAMPP activo?', 'error');
  }

  btn.disabled = false;
  btn.textContent = 'CREAR CUENTA →';
}

// ─── Logout ───────────────────────────────────────────────
async function doLogout() {
  try {
    await fetch(API_BASE + '/logout.php', { method: 'POST', credentials: 'include' });
  } catch(e) {}
  // Recargar la página para reflejar el cierre de sesión visualmente
  window.location.reload();
}

// ─── Helper mensaje ───────────────────────────────────────
function showAuthMsg(el, msg, type) {
  if (!el) return;
  el.textContent = msg;
  el.className   = 'auth-msg ' + type;
}

// ─── CHECKOUT CON AUTH ────────────────────────────────────
function updateCheckoutButton() {
  // Buscar el botón "COMPRAR AHORA" dentro del carrito y reasignar su handler
  const sidebar = document.getElementById('cartSidebar');
  if (!sidebar) return;
  // Se inyecta vía updateCartSidebar(); aquí solo dejamos la función disponible
}

async function checkout() {
  if (cartItems === 0) { showToast('Tu carrito está vacío'); return; }

  // Verificar autenticación
  if (!currentUser) {
    window._pendingCheckout = true;
    openAuthModal('login');
    return;
  }

  // Llamar API
  try {
    const res  = await fetch(API_BASE + '/checkout.php', {
      method: 'POST', credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items: cartList, total: cartTotal })
    });
    const data = await res.json();

    if (data.success) {
      // Limpiar carrito
      cartItems = 0;
      cartTotal = 0;
      cartList  = [];
      saveCart();
      document.getElementById('cartCount').textContent = '0';
      updateCartSidebar();
      // Cerrar sidebar del carrito
      const c = document.getElementById('cartSidebar');
      const o = document.getElementById('cartOverlay');
      if (c) c.classList.remove('open');
      if (o) o.classList.remove('visible');
      document.body.style.overflow = '';
      // Mostrar modal de éxito
      showOrderSuccess('#' + data.order_id);
    } else if (data.requiresAuth) {
      window._pendingCheckout = true;
      openAuthModal('login');
    } else {
      showToast('⚠ ' + (data.message || 'Error al procesar pedido'));
    }
  } catch(e) {
    showToast('⚠ No se pudo conectar al servidor');
  }
}

function showOrderSuccess(orderId) {
  const overlay = document.getElementById('orderSuccessOverlay');
  const msgEl   = document.getElementById('orderSuccessMsg');
  if (msgEl) msgEl.textContent = 'Pedido ' + orderId + ' registrado exitosamente. Te contactaremos pronto.';
  if (overlay) overlay.style.display = 'flex';
  setTimeout(() => { if (overlay) overlay.classList.add('open'); }, 10);
}

function closeOrderSuccess() {
  const overlay = document.getElementById('orderSuccessOverlay');
  if (overlay) { overlay.classList.remove('open'); overlay.style.display = 'none'; }
}

// El handler de checkout ya está integrado dentro de updateCartSidebar().

// Presionar Enter en campos de auth
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const overlay = document.getElementById('authOverlay');
    if (!overlay || !overlay.classList.contains('open')) return;
    const loginPane = document.getElementById('paneLogin');
    if (loginPane && loginPane.style.display !== 'none') submitLogin();
    else submitRegister();
  }
});