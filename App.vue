<template>
  <div class="app">
    <div class="topbar">Envío gratis en pedidos superiores a 50€ · Entrega en 3-5 días</div>

    <header class="site-header">
      <div class="site-header__inner">
        <router-link to="/" class="brand">
          <span class="brand__mark">馬</span>
          <span class="brand__text">
            <strong>MARJA</strong>
            <small>Figuras &amp; coleccionables</small>
          </span>
        </router-link>

        <button
          class="menu-toggle"
          @click="menuAbierto = !menuAbierto"
          :aria-expanded="menuAbierto"
          aria-label="Abrir menú"
        >
          <span></span><span></span><span></span>
        </button>

        <nav class="nav" :class="{ 'nav--abierto': menuAbierto }">
          <router-link to="/" class="nav__link" @click="menuAbierto = false">
            Catálogo
          </router-link>
          <router-link to="/acerca-de" class="nav__link" @click="menuAbierto = false">
            Acerca de
          </router-link>
          <button class="nav__cart" type="button" title="Carrito">
            🛒<span class="nav__cart-badge">0</span>
          </button>
        </nav>
      </div>
    </header>

    <main class="site-main">
      <router-view />
    </main>

    <footer class="site-footer">
      <div class="site-footer__grid">
        <div>
          <h3 class="brand__footer">MARJA</h3>
          <p>Figuras de colección con acabados de calidad, para quienes se toman en serio su estantería.</p>
        </div>
        <div>
          <h4>Ayuda</h4>
          <ul>
            <li>Envíos y plazos</li>
            <li>Devoluciones</li>
            <li>Preguntas frecuentes</li>
          </ul>
        </div>
        <div>
          <h4>Tienda</h4>
          <ul>
            <li><router-link to="/">Catálogo</router-link></li>
            <li><router-link to="/acerca-de">Acerca de</router-link></li>
          </ul>
        </div>
      </div>
      <p class="site-footer__legal">© 2026 Marja. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const menuAbierto = ref(false)
</script>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.topbar {
  background: #111827;
  color: #f3f4f6;
  text-align: center;
  font-size: 0.78rem;
  padding: 0.4rem 1rem;
  letter-spacing: 0.2px;
}

.site-header {
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
}

.site-header__inner {
  max-width: 1150px;
  margin: 0 auto;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  color: #111827;
}

.brand__mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(135deg, #ef4444, #f59e0b);
  color: #fff;
  font-size: 1.1rem;
  font-weight: 700;
}

.brand__text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand__text strong {
  font-size: 1.15rem;
  letter-spacing: 1px;
}

.brand__text small {
  font-size: 0.7rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 1.1rem;
}

.nav__link {
  color: #374151;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.92rem;
  padding: 0.4rem 0.2rem;
  border-bottom: 2px solid transparent;
  transition: border-color 0.15s ease, color 0.15s ease;
}

.nav__link:hover,
.nav__link.router-link-exact-active {
  color: #b91c1c;
  border-color: #b91c1c;
}

.nav__cart {
  position: relative;
  background: none;
  border: none;
  font-size: 1.15rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
}

.nav__cart-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background: #b91c1c;
  color: #fff;
  font-size: 0.6rem;
  font-weight: 700;
  border-radius: 999px;
  padding: 1px 5px;
  line-height: 1.3;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
}

.menu-toggle span {
  width: 24px;
  height: 2px;
  background: #111827;
  display: block;
}

.site-main {
  flex: 1;
  max-width: 1150px;
  margin: 0 auto;
  padding: 1.75rem 1.25rem 3rem;
  width: 100%;
  box-sizing: border-box;
}

.site-footer {
  background: #111827;
  color: #d1d5db;
  padding: 2.25rem 1.25rem 1.25rem;
}

.site-footer__grid {
  max-width: 1150px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 2rem;
}

.site-footer h3.brand__footer {
  color: #fff;
  letter-spacing: 1px;
  margin: 0 0 0.5rem;
}

.site-footer h4 {
  color: #fff;
  font-size: 0.9rem;
  margin: 0 0 0.6rem;
}

.site-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.85rem;
}

.site-footer a {
  color: #d1d5db;
  text-decoration: none;
}

.site-footer a:hover {
  color: #fff;
}

.site-footer__legal {
  max-width: 1150px;
  margin: 1.75rem auto 0;
  padding-top: 1rem;
  border-top: 1px solid #374151;
  font-size: 0.78rem;
  color: #9ca3af;
}

/* --- Responsive --- */
@media (max-width: 640px) {
  .menu-toggle {
    display: flex;
  }

  .nav {
    display: none;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: 0.4rem;
    padding-top: 0.5rem;
  }

  .nav--abierto {
    display: flex;
  }

  .site-footer__grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>
