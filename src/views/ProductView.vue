<template>
  <div v-if="product" class="product-page">
    <div class="container">
      <!-- Back Button -->
      <div class="back-button">
        <router-link to="/" class="back-link"> Go Back </router-link>
      </div>

      <!-- Product Details -->
      <div class="product-details">
        <div class="product-image">
          <img :src="product.image.desktop" :alt="product.name" class="image" />
        </div>

        <div class="product-info">
          <div v-if="product.new" class="new-badge">New Product</div>
          <h1 class="product-name">{{ product.name }}</h1>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">${{ product.price.toLocaleString() }}</p>

          <div class="add-to-cart">
            <div class="quantity-controls">
              <button class="quantity-btn" @click="decreaseQuantity" :disabled="quantity <= 1">
                -
              </button>
              <span class="quantity">{{ quantity }}</span>
              <button class="quantity-btn" @click="increaseQuantity">+</button>
            </div>

            <button class="add-to-cart-btn" @click="addToCart">Add to Cart</button>
          </div>
        </div>
      </div>

      <!-- Product Features -->
      <div class="product-features">
        <div class="features">
          <h2 class="section-title">Features</h2>
          <p class="features-text">{{ product.features }}</p>
        </div>

        <div class="included">
          <h2 class="section-title">In the Box</h2>
          <ul class="included-list">
            <li v-for="item in product.includes" :key="item.item">
              <span class="quantity">{{ item.quantity }}x</span>
              <span class="item">{{ item.item }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Product Gallery -->
      <div class="product-gallery">
        <div class="gallery-grid">
          <div class="gallery-image first">
            <img :src="product.gallery.first.desktop" :alt="product.name" class="image" />
          </div>
          <div class="gallery-image second">
            <img :src="product.gallery.second.desktop" :alt="product.name" class="image" />
          </div>
          <div class="gallery-image third">
            <img :src="product.gallery.third.desktop" :alt="product.name" class="image" />
          </div>
        </div>
      </div>

      <!-- You May Also Like -->
      <div class="you-may-also-like">
        <h2 class="section-title">You May Also Like</h2>
        <div class="related-products">
          <div v-for="related in product.others" :key="related.slug" class="related-product">
            <img :src="related.image.desktop" :alt="related.name" class="related-image" />
            <h3 class="related-name">{{ related.name }}</h3>
            <router-link :to="`/product/${related.slug}`" class="related-link">
              See Product
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <div class="container">
      <h1>Product not found</h1>
      <router-link to="/" class="back-link">Go back to home</router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'

const route = useRoute()
const productStore = useProductStore()
const cartStore = useCartStore()

const quantity = ref(1)

const product = computed(() => {
  const slug = route.params.slug as string
  return productStore.getProductBySlug(slug)
})

const increaseQuantity = () => {
  quantity.value++
}

const decreaseQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const addToCart = () => {
  if (product.value) {
    for (let i = 0; i < quantity.value; i++) {
      cartStore.addToCart({
        id: product.value.id,
        slug: product.value.slug,
        name: product.value.name,
        price: product.value.price,
        image: product.value.image.desktop,
      })
    }
    quantity.value = 1
  }
}
</script>

<style scoped>
.product-page {
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

.product-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  margin-bottom: 120px;
}

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image .image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
}

.new-badge {
  color: #d87d4a;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
}

.product-name {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 0;
  line-height: 1.1;
}

.product-description {
  font-size: 15px;
  line-height: 1.7;
  color: #7d7d7d;
  margin: 0;
}

.product-price {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
}

.add-to-cart {
  display: flex;
  gap: 16px;
  align-items: center;
}

.quantity-controls {
  display: flex;
  align-items: center;
  background: #f1f1f1;
  border-radius: 4px;
}

.quantity-btn {
  width: 48px;
  height: 48px;
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
  width: 48px;
  text-align: center;
  font-weight: 700;
  font-size: 13px;
}

.add-to-cart-btn {
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

.add-to-cart-btn:hover {
  background: #b66d3f;
}

.product-features {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 64px;
  margin-bottom: 120px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.1px;
  text-transform: uppercase;
  margin: 0 0 32px;
}

.features-text {
  font-size: 15px;
  line-height: 1.7;
  color: #7d7d7d;
  margin: 0;
  white-space: pre-line;
}

.included-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.included-list li {
  display: flex;
  gap: 24px;
  align-items: center;
}

.included-list .quantity {
  color: #d87d4a;
  font-weight: 700;
  font-size: 15px;
  min-width: 20px;
}

.included-list .item {
  color: #7d7d7d;
  font-size: 15px;
}

.product-gallery {
  margin-bottom: 120px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
}

.gallery-image.first {
  grid-row: 1 / 3;
}

.gallery-image.second {
  grid-column: 2;
  grid-row: 1;
}

.gallery-image.third {
  grid-column: 2;
  grid-row: 2;
}

.gallery-image .image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

.you-may-also-like {
  text-align: center;
}

.related-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  margin-top: 64px;
}

.related-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.related-image {
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 8px;
}

.related-name {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  margin: 0;
}

.related-link {
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

.related-link:hover {
  background: #b66d3f;
}

.not-found {
  padding: 120px 0;
  text-align: center;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .product-details {
    gap: 48px;
  }

  .product-features {
    gap: 48px;
  }

  .related-products {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .product-page {
    padding: 40px 0 80px;
  }

  .container {
    padding: 0 16px;
  }

  .back-button {
    margin-bottom: 40px;
  }

  .product-details {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 80px;
  }

  .product-name {
    font-size: 28px;
  }

  .product-features {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 80px;
  }

  .section-title {
    font-size: 24px;
  }

  .product-gallery {
    margin-bottom: 80px;
  }

  .gallery-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .gallery-image.first {
    grid-row: auto;
  }

  .gallery-image.second,
  .gallery-image.third {
    grid-column: auto;
    grid-row: auto;
  }

  .related-products {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .product-name {
    font-size: 24px;
  }

  .section-title {
    font-size: 20px;
  }

  .add-to-cart {
    flex-direction: column;
    align-items: stretch;
  }

  .quantity-controls {
    justify-content: center;
  }
}
</style>
