<template>
  <div v-if="product" class="product-page">
    <div class="container">
      <!-- Back Button -->
      <div class="back-button">
        <button @click="$router.go(-1)" class="back-link">Go Back</button>
      </div>

      <div class="product-details">
        <div class="product-image">
          <picture>
            <source :srcset="getImageUrl(product.image.mobile)" media="(max-width: 767px)" />
            <source :srcset="getImageUrl(product.image.tablet)" media="(max-width: 1024px)" />
            <img :src="getImageUrl(product.image.desktop)" :alt="product.name" class="image" />
          </picture>
        </div>

        <div class="product-info">
          <div v-if="product.new" class="new-badge">New Product</div>
          <h1 class="product-name">{{ product.name }}</h1>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price">${{ product.price.toLocaleString() }}</p>

          <div class="add-to-cart">
            <div class="quantity-controls">
              <button
                class="quantity-btn"
                @click="decreaseQuantity"
                :disabled="quantity <= 1"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span class="quantity">{{ quantity }}</span>
              <button class="quantity-btn" @click="increaseQuantity" aria-label="Increase quantity">
                +
              </button>
            </div>

            <button class="add-to-cart-btn" @click="addToCart">
              <span class="btn-text">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

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

      <div class="product-gallery">
        <div class="gallery-grid">
          <div class="gallery-image first">
            <picture>
              <source
                :srcset="getImageUrl(product.gallery.first.mobile)"
                media="(max-width: 767px)"
              />
              <source
                :srcset="getImageUrl(product.gallery.first.tablet)"
                media="(max-width: 1024px)"
              />
              <img
                :src="getImageUrl(product.gallery.first.desktop)"
                :alt="`${product.name} gallery image 1`"
                class="image"
              />
            </picture>
          </div>
          <div class="gallery-image second">
            <picture>
              <source
                :srcset="getImageUrl(product.gallery.second.mobile)"
                media="(max-width: 767px)"
              />
              <source
                :srcset="getImageUrl(product.gallery.second.tablet)"
                media="(max-width: 1024px)"
              />
              <img
                :src="getImageUrl(product.gallery.second.desktop)"
                :alt="`${product.name} gallery image 2`"
                class="image"
              />
            </picture>
          </div>
          <div class="gallery-image third">
            <picture>
              <source
                :srcset="getImageUrl(product.gallery.third.mobile)"
                media="(max-width: 767px)"
              />
              <source
                :srcset="getImageUrl(product.gallery.third.tablet)"
                media="(max-width: 1024px)"
              />
              <img
                :src="getImageUrl(product.gallery.third.desktop)"
                :alt="`${product.name} gallery image 3`"
                class="image"
              />
            </picture>
          </div>
        </div>
      </div>

      <div class="you-may-also-like">
        <h2 class="section-title">You May Also Like</h2>
        <div class="related-products">
          <div v-for="related in product.others" :key="related.slug" class="related-product">
            <div class="related-image-container">
              <picture>
                <source :srcset="getImageUrl(related.image.mobile)" media="(max-width: 767px)" />
                <source :srcset="getImageUrl(related.image.tablet)" media="(max-width: 1024px)" />
                <img
                  :src="getImageUrl(related.image.desktop)"
                  :alt="related.name"
                  class="related-image"
                />
              </picture>
            </div>
            <h3 class="related-name">{{ related.name }}</h3>
            <router-link :to="`/product/${related.slug}`" class="related-link">
              See Product
            </router-link>
          </div>
        </div>
      </div>

      <section class="categories-section">
        <div class="category-grid">
          <div class="category-card headphones">
            <img
              src="@/assets/shared/desktop/image-category-thumbnail-headphones.png"
              alt="Headphones"
              class="category-image"
            />
            <h3 class="category-name">Headphones</h3>
            <router-link to="/headphones" class="category-link">
              Shop
              <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow" />
            </router-link>
          </div>

          <div class="category-card speakers">
            <img
              src="@/assets/shared/desktop/image-category-thumbnail-speakers.png"
              alt="Speakers"
              class="category-image"
            />
            <h3 class="category-name">Speakers</h3>
            <router-link to="/speakers" class="category-link">
              Shop
              <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow" />
            </router-link>
          </div>

          <div class="category-card earphones">
            <img
              src="@/assets/shared/desktop/image-category-thumbnail-earphones.png"
              alt="Earphones"
              class="category-image"
            />
            <h3 class="category-name">Earphones</h3>
            <router-link to="/earphones" class="category-link">
              Shop
              <img src="@/assets/shared/desktop/icon-arrow-right.svg" alt="Arrow" />
            </router-link>
          </div>
        </div>
      </section>

      <section class="about-section">
        <div class="about-content">
          <div class="about-text">
            <h2 class="about-title">
              Bringing you the <span class="highlight">best</span> audio gear
            </h2>
            <p class="about-description">
              Located at the heart of New York City, Audiophile is the premier store for high end
              headphones, earphones, speakers, and audio accessories. We have a large showroom and
              luxury demonstration rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic people who make
              Audiophile the best place to buy your portable audio equipment.
            </p>
          </div>
          <div class="about-image">
            <img src="@/assets/shared/desktop/image-best-gear.jpg" alt="Best gear" class="image" />
          </div>
        </div>
      </section>
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
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { useCartStore } from '@/stores/cart'
import { resolveImageUrl } from '@/utils/imageUtils'

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
    // Create the cart item
    const cartItem = {
      id: product.value.id,
      slug: product.value.slug,
      name: product.value.name,
      price: product.value.price,
      image: product.value.image.desktop,
      quantity: quantity.value,
    }

    // Add the item to cart with the current quantity
    cartStore.addToCart(cartItem)

    // Reset quantity
    quantity.value = 1
  }
}

// Use the imported resolveImageUrl as getImageUrl
const getImageUrl = resolveImageUrl

onMounted(() => {
  // Scroll to top when component mounts
  window.scrollTo(0, 0)
})

watch(
  () => route.params.slug,
  () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  },
)
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

/* Updated Product Details Styles */
.product-details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 120px;
}

.product-image {
  border-radius: 8px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.product-image img:hover {
  transform: scale(1.03);
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 445px;
}

.new-badge {
  color: #d87d4a;
  font-size: 14px;
  letter-spacing: 10px;
  text-transform: uppercase;
}

.product-name {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1.5px;
  line-height: 1.1;
  text-transform: uppercase;
  margin: 0;
}

.product-description {
  color: #7d7d7d;
  line-height: 1.6;
}

.product-price {
  font-size: 24px;
  font-weight: 700;
  margin: 8px 0 0;
}

.add-to-cart {
  display: flex;
  gap: 16px;
  margin-top: 16px;
}

.quantity-controls {
  display: flex;
  align-items: center;
  background: #f1f1f1;
  height: 48px;
}

.quantity-btn {
  width: 40px;
  height: 100%;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  transition: all 0.2s ease;
}

.quantity-btn:hover:not(:disabled) {
  background: #d3d3d3;
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

.add-to-cart-btn {
  flex: 1;
  padding: 16px 32px;
  background: #d87d4a;
  color: white;
  border: none;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-to-cart-btn:hover {
  background: #fbaf85;
}

/* Features Section */
.product-features {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 125px;
  margin-bottom: 120px;
}

.section-title {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: 1.15px;
  text-transform: uppercase;
  margin: 0 0 32px;
}

.features-text {
  color: #7d7d7d;
  line-height: 1.6;
  white-space: pre-line;
}

.included-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.included-list li {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 8px;
}

.included-list .quantity {
  color: #d87d4a;
  font-weight: 700;
}

.included-list .item {
  color: #7d7d7d;
}

/* Gallery */
.product-gallery {
  margin-bottom: 120px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: 40% 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 32px;
  height: 592px;
}

.gallery-image {
  overflow: hidden;
  border-radius: 8px;
  height: 100%;
}

.gallery-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.gallery-image img:hover {
  transform: scale(1.05);
}

.first {
  grid-row: 1;
  grid-column: 1;
}

.second {
  grid-row: 2;
  grid-column: 1;
}

.third {
  grid-row: 1 / span 2;
  grid-column: 2;
}

/* Related Products */
.you-may-also-like {
  margin-bottom: 120px;
}

.you-may-also-like .section-title {
  text-align: center;
  margin-bottom: 64px;
}

.related-products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.related-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.related-image-container {
  width: 100%;
  height: 318px;
  background-color: #f1f1f1;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.related-image {
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.related-image:hover {
  transform: scale(1.1);
}

.related-name {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  margin: 0 0 32px;
}

.related-link {
  display: inline-block;
  padding: 15px 30px;
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
  background: #fbaf85;
}

/* Categories Section */
.categories-section {
  margin-bottom: 120px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #f1f1f1;
  padding: 88px 24px 22px;
  position: relative;
  height: 200px;
  border-radius: 8px;
}

.category-image {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 160px;
  height: auto;
}

.category-name {
  margin: 2rem 0 1rem;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}

.category-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #7d7d7d;
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  transition: color 0.3s ease;
}

.category-link:hover {
  color: #d87d4a;
}

.category-link img {
  width: 8px;
  height: 12px;
}

/* About Section */
.about-section {
  margin-top: 80px;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}

.about-text {
  padding-right: 20px;
}

.about-title {
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: 32px;
  line-height: 1.1;
}

.highlight {
  color: #d87d4a;
}

.about-description {
  color: #7d7d7d;
  line-height: 1.6;
}

.about-image {
  border-radius: 8px;
  overflow: hidden;
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* Notification styles */
.notification {
  position: fixed;
  top: 90px;
  right: 20px;
  background-color: #fff;
  border-left: 5px solid #d87d4a;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  padding: 16px;
  z-index: 1000;
  transform: translateX(110%);
  transition: transform 0.3s ease;
  max-width: 300px;
}

.notification.show {
  transform: translateX(0);
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.notification-icon {
  background-color: #d87d4a;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  flex-shrink: 0;
}

.notification-text {
  font-size: 14px;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .product-details,
  .product-features {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .product-info {
    max-width: 100%;
  }

  .gallery-grid {
    height: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  .first,
  .second,
  .third {
    grid-column: auto;
    grid-row: auto;
  }

  .you-may-also-like .section-title {
    margin-bottom: 40px;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-text {
    text-align: center;
    padding-right: 0;
  }
}

@media (max-width: 768px) {
  .related-products {
    grid-template-columns: 1fr;
    gap: 56px;
  }

  .related-image-container {
    height: 240px;
  }

  .category-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .product-name {
    font-size: 28px;
  }

  .section-title {
    font-size: 24px;
  }

  .about-title {
    font-size: 28px;
  }

  .product-details,
  .product-features,
  .product-gallery,
  .you-may-also-like,
  .categories-section {
    margin-bottom: 80px;
  }
}

@media (max-width: 480px) {
  .add-to-cart {
    flex-direction: row;
    gap: 8px;
  }

  .quantity-controls {
    width: auto;
    flex-shrink: 0;
  }

  .add-to-cart-btn {
    flex-grow: 1;
  }

  .container {
    padding: 0 16px;
  }

  .back-button {
    margin-bottom: 24px;
  }
}
</style>
