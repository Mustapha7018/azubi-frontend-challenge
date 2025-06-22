<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <p class="logo-text">audiophile</p>
          </router-link>
        </div>

        <nav class="nav" :class="{ 'nav-open': isMenuOpen }">
          <ul class="nav-list">
            <li><router-link to="/" @click="closeMenu">Home</router-link></li>
            <li><router-link to="/headphones" @click="closeMenu">Headphones</router-link></li>
            <li><router-link to="/speakers" @click="closeMenu">Speakers</router-link></li>
            <li><router-link to="/earphones" @click="closeMenu">Earphones</router-link></li>
          </ul>
        </nav>

        <div class="header-actions">
          <button class="cart-button" @click="toggleCart" aria-label="Open cart">
            <img src="@/assets/shared/desktop/icon-cart.svg" alt="Cart" />
            <span v-if="totalItems > 0" class="cart-badge">{{ totalItems }}</span>
          </button>

          <button
            class="menu-toggle"
            @click="toggleMenu"
            :class="{ 'menu-open': isMenuOpen }"
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>
    <hr class="header-divider" />
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const isMenuOpen = ref(false)

const { totalItems, toggleCart } = cartStore

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.header {
  background: var(--vt-c-black-soft);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-divider {
  border: 0;
  border-top: 1px solid #313131;
  margin: 0 auto;
  max-width: 1150px;
  padding: 0 24px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.header-content {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  height: 75px;
}

.logo {
  grid-column: 1;
  justify-self: start;
}
.nav {
  grid-column: 2;
}
.header-actions {
  grid-column: 3;
  justify-self: end;
}

.logo p {
  color: var(--color-white);
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 25px;
  text-transform: lowercase;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 34px;
}

.nav-list a {
  text-decoration: none;
  color: var(--vt-c-white);
  font-weight: normal;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.nav-list a:hover,
.nav-list a.router-link-active {
  color: #d87d4a;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 16px;
}

.cart-button {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 8px;
}

.cart-button img {
  width: 23px;
  height: 20px;
  color: var(--color-white);
}

.cart-badge {
  position: absolute;
  top: 0;
  right: 0;
  background: #d87d4a;
  color: var(--color-white);
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  gap: 4px;
}

.menu-toggle span {
  width: 20px;
  height: 2px;
  background: var(--color-white);
  transition: all 0.3s ease;
}

.menu-toggle.menu-open span:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle.menu-open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle.menu-open span:nth-child(3) {
  transform: rotate(-45deg) translate(7px, -6px);
}

@media (max-width: 768px) {
  .header-content {
    grid-template-columns: auto 1fr auto;
    gap: 16px;
  }
  .nav {
    position: fixed;
    top: 75px;
    left: 0;
    right: 0;
    background: var(--vt-c-black-soft);
    transform: translateY(-200%);
    transition: transform 0.3s ease;
    border-bottom: 1px solid #313131;
    z-index: 99;
    padding: 32px 24px;
    border-radius: 0 0 8px 8px;
  }

  .nav.nav-open {
    transform: translateY(0);
  }

  .nav-list {
    flex-direction: column;
    padding: 0;
    gap: 16px;
  }

  .nav-list a {
    font-size: .8rem;
    line-height: 25px;
    color: var(--vt-c-white);
  }

  .menu-toggle {
    display: flex;
    z-index: 100;
  }

  .logo {
    justify-self: center;
  }

  .header-actions {
    justify-self: end;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }
}
</style>
