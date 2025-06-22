<template>
  <div class="cart-page">
    <div class="container">
      <!-- Back Button -->
      <div class="back-button">
        <button @click="$router.go(-1)" class="back-link">Go Back</button>
      </div>

      <h1 class="cart-title">Shopping Cart</h1>

      <div v-if="items.length === 0" class="cart-empty">
        <div class="empty-cart-illustration">
          <img src="@/assets/checkout/icon-order-confirmation.svg" alt="Empty cart" />
        </div>
        <h2>Your cart is empty</h2>
        <p class="empty-cart-message">Browse our collection and discover premium audio gear</p>
        <router-link to="/" class="shop-btn">Continue Shopping</router-link>
      </div>

      <div v-else class="cart-content">
        <div class="cart-items-section">
          <div v-for="item in items" :key="item.id" class="cart-item">
            <div class="item-image-container">
              <img :src="getImageUrl(item.image)" :alt="item.name" class="item-image" />
            </div>

            <div class="item-details">
              <h3 class="item-name">{{ item.name }}</h3>
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

            <button @click="removeItem(item.id)" class="remove-btn" aria-label="Remove item">
              <span class="remove-icon">×</span>
            </button>
          </div>

          <button class="clear-cart-btn" @click="clearCart" v-if="items.length > 0">
            Remove all items
          </button>
        </div>

        <div class="cart-summary">
          <h2 class="summary-title">Summary</h2>

          <div class="summary-row">
            <span>Subtotal</span>
            <span>${{ subtotal.toLocaleString() }}</span>
          </div>

          <div class="summary-row">
            <span>Shipping</span>
            <span>${{ shipping.toLocaleString() }}</span>
          </div>

          <div class="summary-row">
            <span>VAT (20% Included)</span>
            <span>${{ vat.toLocaleString() }}</span>
          </div>

          <div class="summary-row total">
            <span>Total</span>
            <span>${{ total.toLocaleString() }}</span>
          </div>

          <router-link to="/checkout" class="checkout-btn"> Proceed to Checkout </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()

const {
  items,
  subtotal,
  shipping,
  vat,
  total,
  updateQuantity,
  removeFromCart: removeItem,
  clearCart,
} = cartStore

import { resolveImageUrl } from '@/utils/imageUtils'

// ResolveImageUrl as getImageUrl
const getImageUrl = resolveImageUrl
</script>

<style scoped>
.cart-page {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.back-button {
  margin-bottom: 32px;
}

.back-link {
  background: none;
  border: none;
  color: #7d7d7d;
  font-size: 15px;
  cursor: pointer;
  padding: 0;
  transition: color 0.3s ease;
  text-decoration: underline;
}

.back-link:hover {
  color: #d87d4a;
}

.cart-title {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 48px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.cart-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 0;
}

.empty-cart-illustration {
  margin-bottom: 32px;
}

.empty-cart-illustration img {
  width: 80px;
  height: 80px;
}

.empty-cart-message {
  color: #7d7d7d;
  margin-bottom: 32px;
  max-width: 400px;
  font-size: 16px;
  line-height: 1.6;
}

.shop-btn {
  display: inline-block;
  padding: 15px 30px;
  background: #d87d4a;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 13px;
  transition: background-color 0.3s ease;
}

.shop-btn:hover {
  background: #fbaf85;
}

.cart-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
}

.cart-items-section {
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 24px;
  padding-bottom: 24px;
  margin-bottom: 24px;
  border-bottom: 1px solid #f1f1f1;
}

.cart-item:last-of-type {
  margin-bottom: 32px;
}

.item-image-container {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;
  background-color: #f1f1f1;
}

.item-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.item-details {
  flex: 1;
}

.item-name {
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: 700;
}

.item-price {
  margin: 0;
  color: #7d7d7d;
  font-weight: 600;
}

.quantity-controls {
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 4px;
  margin-right: 16px;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  color: #000;
  transition: all 0.2s ease;
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

.remove-btn {
  background: none;
  border: none;
  color: #7d7d7d;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s ease;
}

.remove-btn:hover {
  color: #d87d4a;
}

.remove-icon {
  font-size: 20px;
  font-weight: bold;
}

.clear-cart-btn {
  background: none;
  border: none;
  color: #7d7d7d;
  text-decoration: underline;
  cursor: pointer;
  font-size: 15px;
  transition: color 0.2s ease;
  text-align: right;
  width: 100%;
  padding: 8px 0;
}

.clear-cart-btn:hover {
  color: #d87d4a;
}

.cart-summary {
  background: #fff;
  border-radius: 8px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  align-self: start;
}

.summary-title {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 24px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.summary-row.total {
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid #f1f1f1;
  font-weight: 700;
  font-size: 18px;
  text-transform: uppercase;
}

.checkout-btn {
  display: block;
  width: 100%;
  padding: 15px;
  background: #d87d4a;
  color: white;
  text-decoration: none;
  text-align: center;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  margin-top: 32px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover {
  background: #fbaf85;
}

@media (max-width: 768px) {
  .cart-content {
    grid-template-columns: 1fr;
  }

  .cart-title {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .cart-page {
    padding: 40px 0;
  }

  .cart-items-section,
  .cart-summary {
    padding: 24px 16px;
  }

  .cart-item {
    flex-wrap: wrap;
    gap: 16px;
  }

  .item-details {
    flex: 0 0 calc(100% - 140px);
  }

  .quantity-controls {
    margin-right: 0;
    margin-left: auto;
  }

  .remove-btn {
    margin-left: auto;
  }
}
</style>
