<template>
  <div class="product-card">
    <div class="product-image">
      <img :src="product.image.desktop" :alt="product.name" class="image" />
    </div>

    <div class="product-content">
      <div v-if="product.new" class="new-badge">New Product</div>
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      <router-link :to="`/product/${product.slug}`" class="see-product-btn">
        See Product
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/stores/products'

interface Props {
  product: Product
}

defineProps<Props>()
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #f1f1f1;
  border-radius: 8px;
  padding: 88px 24px 22px;
  position: relative;
  height: 100%;
}

.product-image {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 200px;
  height: 200px;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
}

.new-badge {
  color: #d87d4a;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
}

.product-name {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1.7px;
  text-transform: uppercase;
  line-height: 1.2;
}

.product-description {
  margin: 0;
  color: #7d7d7d;
  line-height: 1.6;
  max-width: 350px;
}

.see-product-btn {
  display: inline-block;
  padding: 15px 32px;
  background: #d87d4a;
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: auto;
}

.see-product-btn:hover {
  background: #b66d3f;
}

@media (max-width: 768px) {
  .product-card {
    padding: 88px 24px 22px;
  }

  .product-image {
    max-width: 180px;
    height: 180px;
  }

  .product-name {
    font-size: 24px;
  }
}

@media (max-width: 480px) {
  .product-card {
    padding: 88px 24px 22px;
  }

  .product-image {
    max-width: 160px;
    height: 160px;
  }

  .product-name {
    font-size: 24px;
  }
}
</style>
