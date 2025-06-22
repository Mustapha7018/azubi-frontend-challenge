<template>
  <div class="checkout-page">
    <div class="container">
      <div class="back-button">
        <router-link to="/" class="back-link"> Go Back </router-link>
      </div>

      <div class="checkout-content">
        <div class="checkout-form">
          <h1 class="checkout-title">Checkout</h1>

          <form @submit.prevent="handleSubmit" class="form">
            <!-- Billing Details -->
            <div class="form-section">
              <h2 class="section-title">Billing Details</h2>
              <div class="form-row">
                <div class="form-group">
                  <label for="name" class="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    v-model="form.name"
                    :class="{ error: errors.name }"
                    placeholder="Alexei Ward"
                  />
                  <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
                </div>
                <div class="form-group">
                  <label for="email" class="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    v-model="form.email"
                    :class="{ error: errors.email }"
                    placeholder="alexei@mail.com"
                  />
                  <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
                </div>
              </div>
              <div class="form-group">
                <label for="phone" class="form-label">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  :class="{ error: errors.phone }"
                  placeholder="+1 202-555-0136"
                />
                <span v-if="errors.phone" class="error-message">{{ errors.phone }}</span>
              </div>
            </div>

            <!-- Shipping Info -->
            <div class="form-section">
              <h2 class="section-title">Shipping Info</h2>
              <div class="form-group">
                <label for="address" class="form-label">Address</label>
                <input
                  type="text"
                  id="address"
                  v-model="form.address"
                  :class="{ error: errors.address }"
                  placeholder="1137 Williams Avenue"
                />
                <span v-if="errors.address" class="error-message">{{ errors.address }}</span>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label for="zip" class="form-label">ZIP Code</label>
                  <input
                    type="text"
                    id="zip"
                    v-model="form.zip"
                    :class="{ error: errors.zip }"
                    placeholder="10001"
                  />
                  <span v-if="errors.zip" class="error-message">{{ errors.zip }}</span>
                </div>
                <div class="form-group">
                  <label for="city" class="form-label">City</label>
                  <input
                    type="text"
                    id="city"
                    v-model="form.city"
                    :class="{ error: errors.city }"
                    placeholder="New York"
                  />
                  <span v-if="errors.city" class="error-message">{{ errors.city }}</span>
                </div>
              </div>
              <div class="form-group">
                <label for="country" class="form-label">Country</label>
                <input
                  type="text"
                  id="country"
                  v-model="form.country"
                  :class="{ error: errors.country }"
                  placeholder="United States"
                />
                <span v-if="errors.country" class="error-message">{{ errors.country }}</span>
              </div>
            </div>

            <!-- Payment Details -->
            <div class="form-section">
              <h2 class="section-title">Payment Details</h2>
              <div class="form-row">
                <div class="form-group">
                  <label for="payment" class="form-label">Payment Method</label>
                  <div class="payment-options">
                    <label class="payment-option">
                      <input type="radio" name="payment" value="e-money" v-model="form.payment" />
                      <span class="radio-custom"></span>
                      e-Money
                    </label>
                    <label class="payment-option">
                      <input type="radio" name="payment" value="cash" v-model="form.payment" />
                      <span class="radio-custom"></span>
                      Cash on Delivery
                    </label>
                  </div>
                  <span v-if="errors.payment" class="error-message">{{ errors.payment }}</span>
                </div>
              </div>

              <div v-if="form.payment === 'e-money'" class="form-row">
                <div class="form-group">
                  <label for="eMoneyNumber" class="form-label">e-Money Number</label>
                  <input
                    type="text"
                    id="eMoneyNumber"
                    v-model="form.eMoneyNumber"
                    :class="{ error: errors.eMoneyNumber }"
                    placeholder="238521993"
                  />
                  <span v-if="errors.eMoneyNumber" class="error-message">{{
                    errors.eMoneyNumber
                  }}</span>
                </div>
                <div class="form-group">
                  <label for="eMoneyPin" class="form-label">e-Money PIN</label>
                  <input
                    type="text"
                    id="eMoneyPin"
                    v-model="form.eMoneyPin"
                    :class="{ error: errors.eMoneyPin }"
                    placeholder="6891"
                  />
                  <span v-if="errors.eMoneyPin" class="error-message">{{ errors.eMoneyPin }}</span>
                </div>
              </div>
            </div>
          </form>
        </div>

        <!-- Order Summary -->
        <div class="order-summary">
          <h2 class="summary-title">Summary</h2>

          <div v-if="items.length === 0" class="empty-cart">
            <p>Your cart is empty</p>
            <router-link to="/" class="continue-shopping"> Continue Shopping </router-link>
          </div>

          <div v-else>
            <div class="cart-items">
              <div v-for="item in items" :key="item.id" class="cart-item">
                <img :src="item.image" :alt="item.name" class="item-image" />
                <div class="item-details">
                  <h3 class="item-name">{{ item.name }}</h3>
                  <p class="item-price">${{ item.price.toLocaleString() }}</p>
                </div>
                <div class="item-quantity">
                  <span>x{{ item.quantity }}</span>
                </div>
              </div>
            </div>

            <div class="summary-totals">
              <div class="summary-row">
                <span>Total</span>
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
                <span>Grand Total</span>
                <span>${{ total.toLocaleString() }}</span>
              </div>
            </div>

            <button
              type="submit"
              class="checkout-btn"
              @click="handleSubmit"
              :disabled="items.length === 0"
            >
              Continue & Pay
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Order Confirmation Modal -->
    <div v-if="showConfirmation" class="confirmation-overlay" @click="closeConfirmation">
      <div class="confirmation-modal" @click.stop>
        <div class="confirmation-content">
          <img
            src="@/assets/checkout/icon-order-confirmation.svg"
            alt="Success"
            class="success-icon"
          />
          <h2 class="confirmation-title">Thank you for your order</h2>
          <p class="confirmation-message">You will receive an email confirmation shortly.</p>

          <div class="order-details">
            <div class="order-summary-compact">
              <div class="order-items">
                <div v-for="item in items" :key="item.id" class="order-item">
                  <img :src="item.image" :alt="item.name" class="item-image" />
                  <div class="item-info">
                    <h4 class="item-name">{{ item.name }}</h4>
                    <p class="item-price">${{ item.price.toLocaleString() }}</p>
                  </div>
                  <span class="item-quantity">x{{ item.quantity }}</span>
                </div>
              </div>

              <div class="order-total">
                <span>Grand Total</span>
                <span>${{ total.toLocaleString() }}</span>
              </div>
            </div>
          </div>

          <router-link to="/" class="back-home-btn" @click="closeConfirmation">
            Back to Home
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useCartStore } from '@/stores/cart'

const cartStore = useCartStore()
const showConfirmation = ref(false)

const { items, subtotal, shipping, vat, total, clearCart } = cartStore

const form = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  zip: '',
  city: '',
  country: '',
  payment: '',
  eMoneyNumber: '',
  eMoneyPin: '',
})

const errors = reactive({
  name: '',
  email: '',
  phone: '',
  address: '',
  zip: '',
  city: '',
  country: '',
  payment: '',
  eMoneyNumber: '',
  eMoneyPin: '',
})

const validateForm = () => {
  let isValid = true

  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key as keyof typeof errors] = ''
  })

  // Required fields
  if (!form.name.trim()) {
    errors.name = 'Name is required'
    isValid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    isValid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
    isValid = false
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required'
    isValid = false
  }

  if (!form.address.trim()) {
    errors.address = 'Address is required'
    isValid = false
  }

  if (!form.zip.trim()) {
    errors.zip = 'ZIP code is required'
    isValid = false
  }

  if (!form.city.trim()) {
    errors.city = 'City is required'
    isValid = false
  }

  if (!form.country.trim()) {
    errors.country = 'Country is required'
    isValid = false
  }

  if (!form.payment) {
    errors.payment = 'Please select a payment method'
    isValid = false
  }

  if (form.payment === 'e-money') {
    if (!form.eMoneyNumber.trim()) {
      errors.eMoneyNumber = 'e-Money number is required'
      isValid = false
    }

    if (!form.eMoneyPin.trim()) {
      errors.eMoneyPin = 'e-Money PIN is required'
      isValid = false
    }
  }

  return isValid
}

const handleSubmit = () => {
  if (validateForm()) {
    showConfirmation.value = true
    clearCart()
  }
}

const closeConfirmation = () => {
  showConfirmation.value = false
}
</script>

<style scoped>
.checkout-page {
  padding: 64px 0 120px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.back-button {
  margin-bottom: 56px;
}

.back-link {
  color: #7d7d7d;
  text-decoration: none;
  font-size: 15px;
  transition: color 0.3s ease;
}

.back-link:hover {
  color: #d87d4a;
}

.checkout-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 64px;
}

.checkout-title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  margin: 0 0 48px;
}

.form-section {
  margin-bottom: 48px;
}

.section-title {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.9px;
  text-transform: uppercase;
  color: #d87d4a;
  margin: 0 0 24px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-label {
  font-size: 12px;
  font-weight: 700;
  color: var(--color-text);
}

.form-group input {
  padding: 18px 24px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 700;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #d87d4a;
}

.form-group input.error {
  border-color: #cd2c2e;
}

.error-message {
  color: #cd2c2e;
  font-size: 12px;
  font-weight: 500;
}

.payment-options {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.payment-option {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 18px 24px;
  border: 1px solid #cfcfcf;
  border-radius: 8px;
  cursor: pointer;
  transition: border-color 0.3s ease;
}

.payment-option:hover {
  border-color: #d87d4a;
}

.payment-option input[type='radio'] {
  display: none;
}

.radio-custom {
  width: 20px;
  height: 20px;
  border: 1px solid #cfcfcf;
  border-radius: 50%;
  position: relative;
  transition: border-color 0.3s ease;
}

.payment-option input[type='radio']:checked + .radio-custom {
  border-color: #d87d4a;
}

.payment-option input[type='radio']:checked + .radio-custom::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 10px;
  height: 10px;
  background: #d87d4a;
  border-radius: 50%;
}

/* Order Summary */
.order-summary {
  background: #f1f1f1;
  border-radius: 8px;
  padding: 32px;
  height: fit-content;
}

.summary-title {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 0 0 32px;
}

.empty-cart {
  text-align: center;
  color: #7d7d7d;
}

.continue-shopping {
  display: inline-block;
  margin-top: 16px;
  padding: 15px 32px;
  background: #d87d4a;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.continue-shopping:hover {
  background: #b66d3f;
}

.cart-items {
  margin-bottom: 32px;
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

.item-quantity {
  font-size: 15px;
  font-weight: 700;
  color: #7d7d7d;
}

.summary-totals {
  margin-bottom: 32px;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  font-size: 15px;
}

.summary-row.total {
  margin-top: 24px;
  padding-top: 24px;
  border-top: 1px solid #cfcfcf;
  font-size: 18px;
  font-weight: 700;
  color: #d87d4a;
}

.checkout-btn {
  width: 100%;
  padding: 15px 32px;
  background: #d87d4a;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.checkout-btn:hover:not(:disabled) {
  background: #b66d3f;
}

.checkout-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Confirmation Modal */
.confirmation-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
}

.confirmation-modal {
  background: white;
  border-radius: 8px;
  max-width: 540px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
}

.confirmation-content {
  padding: 48px;
  text-align: center;
}

.success-icon {
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
}

.confirmation-title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  margin: 0 0 16px;
}

.confirmation-message {
  color: #7d7d7d;
  margin: 0 0 32px;
}

.order-details {
  background: #f1f1f1;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
}

.order-items {
  margin-bottom: 24px;
}

.order-item {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

.order-item:last-child {
  margin-bottom: 0;
}

.order-item .item-image {
  width: 50px;
  height: 50px;
}

.order-item .item-name {
  font-size: 15px;
  margin: 0 0 4px;
}

.order-item .item-price {
  font-size: 14px;
  margin: 0;
}

.order-item .item-quantity {
  margin-left: auto;
  font-size: 15px;
  font-weight: 700;
  color: #7d7d7d;
}

.order-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  border-top: 1px solid #cfcfcf;
  font-size: 18px;
  font-weight: 700;
  color: #d87d4a;
}

.back-home-btn {
  display: inline-block;
  padding: 15px 32px;
  background: #d87d4a;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
}

.back-home-btn:hover {
  background: #b66d3f;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .checkout-content {
    gap: 48px;
  }
}

@media (max-width: 768px) {
  .checkout-page {
    padding: 40px 0 80px;
  }

  .container {
    padding: 0 16px;
  }

  .back-button {
    margin-bottom: 40px;
  }

  .checkout-content {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .checkout-title {
    font-size: 28px;
    margin-bottom: 32px;
  }

  .form-row {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .confirmation-content {
    padding: 32px 24px;
  }

  .confirmation-title {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .checkout-title {
    font-size: 24px;
  }

  .order-summary {
    padding: 24px;
  }

  .confirmation-content {
    padding: 24px 16px;
  }
}
</style>
