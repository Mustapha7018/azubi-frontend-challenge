import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface CartItem {
  id: number
  slug: string
  name: string
  price: number
  image: string
  quantity: number
}

export const useCartStore = defineStore('cart', () => {
  const items = ref<CartItem[]>([])
  const isCartOpen = ref(false)

  // Load cart from localStorage on initialization
  const loadCart = () => {
    const savedCart = localStorage.getItem('audiophile-cart')
    if (savedCart) {
      items.value = JSON.parse(savedCart)
    }
  }

  // Save cart to localStorage
  const saveCart = () => {
    localStorage.setItem('audiophile-cart', JSON.stringify(items.value))
  }

  // Initialize cart
  loadCart()

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    const existingItem = items.value.find((item) => item.id === product.id)

    if (existingItem) {
      existingItem.quantity += 1
    } else {
      items.value.push({ ...product, quantity: 1 })
    }

    saveCart()
  }

  const removeFromCart = (productId: number) => {
    items.value = items.value.filter((item) => item.id !== productId)
    saveCart()
  }

  const updateQuantity = (productId: number, quantity: number) => {
    const item = items.value.find((item) => item.id === productId)
    if (item) {
      if (quantity <= 0) {
        removeFromCart(productId)
      } else {
        item.quantity = quantity
        saveCart()
      }
    }
  }

  const clearCart = () => {
    items.value = []
    saveCart()
  }

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  const closeCart = () => {
    isCartOpen.value = false
  }

  // Computed properties
  const totalItems = computed(() => {
    return items.value.reduce((total, item) => total + item.quantity, 0)
  })

  const subtotal = computed(() => {
    return items.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })

  const shipping = computed(() => {
    return items.value.length > 0 ? 50 : 0
  })

  const vat = computed(() => {
    return subtotal.value * 0.2
  })

  const total = computed(() => {
    return subtotal.value + shipping.value + vat.value
  })

  return {
    items,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    toggleCart,
    closeCart,
    totalItems,
    subtotal,
    shipping,
    vat,
    total,
  }
})
