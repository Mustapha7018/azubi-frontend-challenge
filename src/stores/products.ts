import { defineStore } from 'pinia'
import { ref } from 'vue'
import productsData from '@/assets/data.json'

export interface Product {
  id: number
  slug: string
  name: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
  category: string
  categoryImage: {
    mobile: string
    tablet: string
    desktop: string
  }
  new: boolean
  price: number
  description: string
  features: string
  includes: Array<{
    quantity: number
    item: string
  }>
  gallery: {
    first: {
      mobile: string
      tablet: string
      desktop: string
    }
    second: {
      mobile: string
      tablet: string
      desktop: string
    }
    third: {
      mobile: string
      tablet: string
      desktop: string
    }
  }
  others: Array<{
    slug: string
    name: string
    image: {
      mobile: string
      tablet: string
      desktop: string
    }
  }>
}

export const useProductStore = defineStore('products', () => {
  const products = ref<Product[]>(productsData)

  const getProductBySlug = (slug: string) => {
    return products.value.find((product) => product.slug === slug)
  }

  const getProductsByCategory = (category: string) => {
    return products.value.filter((product) => product.category === category)
  }

  const getNewProducts = () => {
    return products.value.filter((product) => product.new)
  }

  return {
    products,
    getProductBySlug,
    getProductsByCategory,
    getNewProducts,
  }
})
