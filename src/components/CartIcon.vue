<template>
  <div class="cart-icon-wrapper">
    <router-link to="/cart" class="cart-icon-button" aria-label="Open cart">
      <svg width="23" height="20" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
          fill="currentColor"
          fill-rule="nonzero"
        />
      </svg>
      <span v-if="totalItems > 0" class="cart-badge">{{ totalItems }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'
import { storeToRefs } from 'pinia'

// Define component name to fix ESLint multi-word warning
defineOptions({
  name: 'CartIconButton',
})

const cartStore = useCartStore()
const { totalItems } = storeToRefs(cartStore)
</script>

<style scoped>
.cart-icon-wrapper {
  position: relative;
}

.cart-icon-button {
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 8px;
  color: white;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cart-icon-button:hover {
  color: #d87d4a;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  background: #d87d4a;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>
