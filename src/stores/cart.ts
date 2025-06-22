import { defineStore } from 'pinia'
import { ref, computed, watch, nextTick } from 'vue'
import { resolveImageUrl } from '@/utils/imageUtils'

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

  // Simple notification function
  const showNotification = (message: string, type: 'success' | 'info' = 'success') => {
    const notification = document.createElement('div')
    notification.textContent = message
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${type === 'success' ? '#4ade80' : '#60a5fa'};
      color: white;
      padding: 12px 16px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 9999;
      font-size: 14px;
      max-width: 300px;
      transition: opacity 0.3s ease;
    `

    document.body.appendChild(notification)

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = '0'
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }, 3000)
  }

  // Load cart from localStorage on initialization
  const loadCart = () => {
    try {
      const savedCart = localStorage.getItem('audiophile-cart')
      if (savedCart) {
        items.value = JSON.parse(savedCart)
      }
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error)
      items.value = []
    }
  }

  // Save cart to localStorage
  const saveCart = () => {
    try {
      localStorage.setItem('audiophile-cart', JSON.stringify(items.value))
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error)
    }
  }

  loadCart()

  watch(
    items,
    () => {
      saveCart()
    },
    { deep: true, immediate: true, flush: 'post' },
  )

  const addToCart = async (product: Partial<CartItem>) => {
    const existingItem = items.value.find((item) => item.id === product.id)
    const quantity = product.quantity || 1

    if (existingItem) {
      const updatedItems = items.value.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
      )
      items.value = [...updatedItems]
      showNotification(`Added ${quantity} more ${product.name} to cart`)
    } else {
      const imageUrl = product.image ? resolveImageUrl(product.image) : ''

      const newItem = {
        id: product.id!,
        slug: product.slug!,
        name: product.name!,
        price: product.price!,
        image: imageUrl,
        quantity: quantity,
      }

      items.value = [...items.value, newItem]
      showNotification(`${product.name} added to cart`)
    }

    await nextTick()
  }

  const removeFromCart = (productId: number) => {
    const itemToRemove = items.value.find((item) => item.id === productId)
    items.value = items.value.filter((item) => item.id !== productId)

    if (itemToRemove) {
      showNotification(`${itemToRemove.name} removed from cart`, 'info')
    }
  }

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId)
      return
    }

    items.value = items.value.map((item) => (item.id === productId ? { ...item, quantity } : item))
  }

  const clearCart = () => {
    items.value = []
    showNotification('Cart cleared')
  }

  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  const closeCart = () => {
    isCartOpen.value = false
  }

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
