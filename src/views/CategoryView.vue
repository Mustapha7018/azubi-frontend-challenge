<template>
  <div class="category-page">
    <div class="container">
      <!-- Category Header -->
      <div class="category-header">
        <h1 class="category-title">{{ categoryName }}</h1>
      </div>

      <!-- Products Grid -->
      <div class="products-grid">
        <ProductCard v-for="product in categoryProducts" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useProductStore } from '@/stores/products'
import ProductCard from '@/components/ProductCard.vue'

const route = useRoute()
const productStore = useProductStore()

const category = computed(() => route.params.category as string)
const categoryProducts = computed(() => productStore.getProductsByCategory(category.value))

const categoryName = computed(() => {
  const categoryMap: Record<string, string> = {
    headphones: 'Headphones',
    speakers: 'Speakers',
    earphones: 'Earphones',
  }
  return categoryMap[category.value] || category.value
})
</script>

<style scoped>
.category-page {
  padding: 64px 0 120px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.category-header {
  text-align: center;
  margin-bottom: 64px;
}

.category-title {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 0;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

@media (max-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .category-page {
    padding: 40px 0 80px;
  }

  .container {
    padding: 0 16px;
  }

  .category-header {
    margin-bottom: 48px;
  }

  .category-title {
    font-size: 28px;
  }

  .products-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}

@media (max-width: 480px) {
  .category-title {
    font-size: 24px;
  }
}
</style>
