<template>
  <div v-if="isCartOpen" class="cart-overlay" @click="closeCart">
    <div class="cart-modal" @click.stop :key="totalItems">
      <div class="cart-header">
        <h3>Cart ({{ totalItems }})</h3>
        <button class="remove-all" @click="clearCart" v-if="items.length > 0">Remove all</button>
      </div>

      <div v-if="items.length === 0" class="cart-empty">
        <div class="empty-cart-illustration">
          <img src="@/assets/checkout/icon-order-confirmation.svg" alt="Empty cart" />
        </div>
        <p>Your cart is empty</p>
        <p class="browse-suggestion">Browse our collection and discover premium audio gear</p>
        <router-link to="/" class="shop-btn" @click="closeCart">Shop Now</router-link>
      </div>

      <div v-else class="cart-items">
        <div v-for="item in items" :key="item.id" class="cart-item">
          <div class="item-image-container">
            <img :src="getImageUrl(item.image)" :alt="item.name" class="item-image" />
          </div>

          <div class="item-details">
            <h4 class="item-name">{{ shortenProductName(item.name) }}</h4>
            <p class="item-price">${{ item.price.toLocaleString() }}</p>
          </div>

          <div class="quantity-controls">
            <button
              class="quantity-btn"
              @click="updateQuantity(item.id, item.quantity - 1)"
              :disabled="item.quantity <= 1"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span class="quantity">{{ item.quantity }}</span>
            <button
              class="quantity-btn"
              @click="updateQuantity(item.id, item.quantity + 1)"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button @click="removeFromCart(item.id)" class="remove-item-btn" aria-label="Remove item">
            &times;
          </button>
        </div>
      </div>

      <div v-if="items.length > 0" class="cart-footer">
        <div class="cart-subtotal">
          <span>Subtotal</span>
          <span>${{ subtotal.toLocaleString() }}</span>
        </div>
        <div class="cart-shipping">
          <span>Shipping</span>
          <span>${{ shipping.toLocaleString() }}</span>
        </div>
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
import { storeToRefs } from 'pinia'

defineOptions({
  name: 'ShoppingCart',
})

const cartStore = useCartStore()

// Destructure cart store properties, using storeToRefs for reactive state
const { items, isCartOpen, totalItems, subtotal, shipping, total } = storeToRefs(cartStore)
const { updateQuantity, clearCart, closeCart, removeFromCart } = cartStore

// Function to shorten product names in cart
const shortenProductName = (name: string): string => {
  // Keep only the first part of the name, remove any "Mark II" etc.
  const parts = name.split(' ')
  if (parts.length <= 2) return name

  // Extract first two words or up to a certain point
  return parts.slice(0, 2).join(' ')
}

import { resolveImageUrl } from '@/utils/imageUtils'

// Use the imported resolveImageUrl as getImageUrl
const getImageUrl = resolveImageUrl
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
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.cart-modal {
  background: white;
  border-radius: 8px;
  width: 100%;
  max-width: 377px;
  margin-right: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  animation: slideIn 0.3s ease;
}

@keyframes slideIn {
  from {
    transform: translateX(30px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 32px 24px;
  border-bottom: 1px solid #f1f1f1;
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
  transition: color 0.2s ease;
}

.remove-all:hover {
  color: #d87d4a;
}

.cart-empty {
  padding: 32px;
  text-align: center;
  color: #7d7d7d;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.empty-cart-illustration {
  margin-bottom: 16px;
}

.empty-cart-illustration img {
  width: 64px;
  height: 64px;
  opacity: 0.5;
}

.browse-suggestion {
  font-size: 14px;
  margin: 0;
}

.shop-btn {
  display: inline-block;
  padding: 12px 24px;
  background: #d87d4a;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border-radius: 4px;
  margin-top: 8px;
  transition: background-color 0.3s ease;
}

.shop-btn:hover {
  background: #fbaf85;
}

.cart-items {
  padding: 24px 32px;
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
  animation: fadeIn 0.4s ease;
}

.cart-item:last-child {
  margin-bottom: 0;
}

.item-image-container {
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f1f1f1;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.item-image:hover {
  transform: scale(1.1);
}

.item-details {
  flex: 1;
}

.item-name {
  margin: 0 0 4px;
  font-size: 15px;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.item-price {
  margin: 0;
  color: #7d7d7d;
  font-size: 14px;
  font-weight: 600;
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
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
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
  border-top: 1px solid #f1f1f1;
  background-color: #fafafa;
  border-radius: 0 0 8px 8px;
}

.cart-subtotal,
.cart-shipping,
.cart-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.cart-subtotal,
.cart-shipping {
  color: #7d7d7d;
  font-size: 15px;
}

.cart-total {
  margin-top: 16px;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
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
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background: #fbaf85;
}

.remove-item-btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #7d7d7d;
  cursor: pointer;
  padding: 0 8px;
  transition: color 0.2s ease;
}
.remove-item-btn:hover {
  color: #d87d4a;
}

@media (max-width: 768px) {
  .cart-overlay {
    padding-top: 90px;
  }

  .cart-modal {
    margin-right: 16px;
    margin-left: 16px;
    max-width: 450px;
  }
}

@media (max-width: 480px) {
  .cart-modal {
    margin-right: 8px;
    margin-left: 8px;
    max-width: none;
  }

  .cart-header,
  .cart-items,
  .cart-footer {
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
