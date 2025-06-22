<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Cart from './components/Cart.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header />
    <Cart />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
}

/* Additional focus removal for router-links and any other Vue components */
.router-link-active:focus,
.router-link-exact-active:focus,
a:focus {
  outline: none !important;
}

/* Remove mobile tap highlight */
* {
  -webkit-tap-highlight-color: transparent;
}
</style>
