<template>
  <div v-if="isCartOpen" class="cart-overlay" @click="closeCart">
    <div class="cart-modal" @click.stop>
      <div class="cart-header">
        <h3>Cart ({{ totalItems }})</h3>
        <button class="remove-all" @click="clearCart" v-if="items.length > 0">Remove all</button>
      </div>

      <div v-if="items.length === 0" class="cart-empty">
        <p>Your cart is empty</p>
      </div>

      <div v-else class="cart-items">
        <div v-for="item in items" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name" class="item-image" />

          <div class="item-details">
            <h4 class="item-name">{{ item.name }}</h4>
            <p class="item-price">${{ item.price.toLocaleString() }}</p>
          </div>

          <div class="quantity-controls">
            <button
              class="quantity-btn"
              @click="updateQuantity(item.id, item.quantity - 1)"
              :disabled="item.quantity <= 1"
            >
              -
            </button>
            <span class="quantity">{{ item.quantity }}</span>
            <button class="quantity-btn" @click="updateQuantity(item.id, item.quantity + 1)">
              +
            </button>
          </div>
        </div>
      </div>

      <div v-if="items.length > 0" class="cart-footer">
        <div class="cart-total">
          <span>Total</span>
          <span>${{ total.toLocaleString() }}</span>
        </div>
        <router-link to="/checkout" class="checkout-btn" @click="closeCart"> Checkout </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const { items, isCartOpen, totalItems, total, updateQuantity, clearCart, closeCart } = cartStore
</script>

<style scoped>
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  padding-top: 90px;
}

.cart-modal {
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 377px;
  margin-right: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  max-height: calc(100vh - 120px);
  overflow-y: auto;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 24px;
  border-bottom: 1px solid var(--color-border);
}

.cart-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.3px;
}

.remove-all {
  background: none;
  border: none;
  color: #7d7d7d;
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
  transition: color 0.3s ease;
}

.remove-all:hover {
  color: #d87d4a;
}

.cart-empty {
  padding: 32px;
  text-align: center;
  color: #7d7d7d;
}

.cart-items {
  padding: 24px 32px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.cart-item:last-child {
  margin-bottom: 0;
}

.item-image {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.item-name {
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 700;
}

.item-price {
  margin: 0;
  color: #7d7d7d;
  font-size: 14px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 4px;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text);
  transition: background-color 0.3s ease;
}

.quantity-btn:hover:not(:disabled) {
  background: #d87d4a;
  color: white;
}

.quantity-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.quantity {
  width: 32px;
  text-align: center;
  font-weight: 700;
  font-size: 13px;
}

.cart-footer {
  padding: 24px 32px 32px;
  border-top: 1px solid var(--color-border);
}

.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
}

.checkout-btn {
  display: block;
  width: 100%;
  padding: 15px 32px;
  background: #d87d4a;
  color: white;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background: #b66d3f;
}

@media (max-width: 768px) {
  .cart-overlay {
    padding-top: 90px;
  }

  .cart-modal {
    margin-right: 16px;
    margin-left: 16px;
    max-width: none;
  }
}

@media (max-width: 480px) {
  .cart-modal {
    margin-right: 8px;
    margin-left: 8px;
  }

  .cart-header,
  .cart-items,
  .cart-footer {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
