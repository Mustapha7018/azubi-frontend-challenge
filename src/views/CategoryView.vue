<template>
  <div class="category-page">
    <!-- Category Banner -->
    <div class="category-banner">
      <h1 class="category-title">{{ categoryName }}</h1>
    </div>

    <div class="container">
      <!-- Products List -->
      <div class="products-list">
        <div
          v-for="(product, index) in categoryProducts"
          :key="product.id"
          class="product-item"
          :class="{ reverse: index % 2 !== 0 }"
        >
          <div class="product-image">
            <picture>
              <source
                :srcset="getImageUrl(product.categoryImage.mobile)"
                media="(max-width: 768px)"
              />
              <source
                :srcset="getImageUrl(product.categoryImage.tablet)"
                media="(max-width: 1024px)"
              />
              <img
                :src="getImageUrl(product.categoryImage.desktop)"
                :alt="product.name"
                class="image"
              />
            </picture>
          </div>
          <div class="product-content">
            <div v-if="product.new" class="new-product">New Product</div>
            <h2 class="product-name">{{ product.name }}</h2>
            <p class="product-description">{{ product.description }}</p>
            <router-link :to="`/product/${product.slug}`" class="see-product-btn">
              See Product
            </router-link>
          </div>
        </div>
      </div>

      <!-- Category Navigation Section -->
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

      <!-- About Section -->
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
</template>

<script setup lang="ts">
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import { resolveImageUrl } from '@/utils/imageUtils'

const route = useRoute()
const productStore = useProductStore()

// Get category from route
const category = computed(() => route.path.split('/')[1])

// Get products by category
const categoryProducts = computed(() => productStore.getProductsByCategory(category.value))

// Get category name
const categoryName = computed(() => {
  const categoryMap: Record<string, string> = {
    headphones: 'Headphones',
    speakers: 'Speakers',
    earphones: 'Earphones',
  }
  return categoryMap[category.value] || category.value
})

// Use the imported resolveImageUrl as getImageUrl
const getImageUrl = resolveImageUrl

onMounted(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
})

watch(
  () => route.params.category,
  () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
)
</script>

<style scoped>
.category-page {
  padding-bottom: 120px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Category Banner */
.category-banner {
  background-color: var(--vt-c-black-soft);
  color: white;
  text-align: center;
  padding: 108px 0;
  margin-bottom: 64px;
}

.category-title {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 0;
}

/* Products List */
.products-list {
  display: flex;
  flex-direction: column;
  gap: 120px;
  margin-bottom: 120px;
}

.product-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  align-items: center;
}

.product-item.reverse {
  direction: rtl;
}

.product-item.reverse .product-content {
  direction: ltr;
}

.product-image {
  border-radius: 8px;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-image img:hover {
  transform: scale(1.05);
}

.product-content {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 445px;
}

.new-product {
  font-size: 14px;
  letter-spacing: 10px;
  text-transform: uppercase;
  color: #d87d4a;
}

.product-name {
  font-size: 40px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin: 0;
  line-height: 1.1;
}

.product-description {
  color: #7d7d7d;
  line-height: 1.6;
  margin: 0;
}

.see-product-btn {
  display: inline-block;
  padding: 15px 30px;
  background: #d87d4a;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 13px;
  width: fit-content;
  transition: background-color 0.3s ease;
}

.see-product-btn:hover {
  background-color: #fbaf85;
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

/* Responsive Styles */
@media (max-width: 1024px) {
  .product-item {
    grid-template-columns: 1fr;
    gap: 52px;
  }

  .product-item.reverse {
    direction: ltr;
  }

  .product-content {
    text-align: center;
    align-items: center;
    max-width: 573px;
    margin: 0 auto;
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
  .category-banner {
    padding: 80px 0;
    margin-bottom: 40px;
  }

  .category-title {
    font-size: 28px;
  }

  .products-list {
    gap: 80px;
    margin-bottom: 80px;
  }

  .product-name {
    font-size: 28px;
  }

  .category-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .about-title {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .category-title {
    font-size: 24px;
  }

  .product-name {
    font-size: 24px;
  }
}
</style>
