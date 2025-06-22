# Audiophile E-commerce Website

A fully functional multi-page e-commerce website built with Vue 3, TypeScript, and Pinia for state management.

## Features

### Core Functionality

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Product Browsing**: View products by category (Headphones, Speakers, Earphones)
- **Product Details**: Comprehensive product pages with features, gallery, and related products
- **Shopping Cart**: Add/remove products, update quantities, persistent cart state
- **Checkout Process**: Complete checkout form with validation
- **Order Confirmation**: Success modal with order summary

### User Experience

- **Hover States**: Interactive elements with smooth hover animations
- **Form Validation**: Real-time validation with error messages
- **Cart Persistence**: Cart state saved to localStorage
- **Responsive Images**: Optimized images for different screen sizes
- **Accessibility**: Proper focus states and semantic HTML

### Technical Features

- **Vue 3 Composition API**: Modern Vue development
- **TypeScript**: Type-safe development
- **Pinia State Management**: Reactive state management
- **Vue Router**: Client-side routing
- **CSS Grid & Flexbox**: Modern layout techniques
- **Mobile-First Design**: Responsive design approach

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Header.vue      # Navigation header
│   ├── Cart.vue        # Shopping cart modal
│   ├── Footer.vue      # Site footer
│   └── ProductCard.vue # Product display card
├── views/              # Page components
│   ├── HomeView.vue    # Homepage
│   ├── CategoryView.vue # Category pages
│   ├── ProductView.vue # Product detail pages
│   └── CheckoutView.vue # Checkout page
├── stores/             # Pinia stores
│   ├── cart.ts         # Cart state management
│   └── products.ts     # Product data management
├── router/             # Vue Router configuration
├── assets/             # Static assets
│   ├── data.json       # Product data
│   └── images/         # Product images
└── main.ts             # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd azubi-frontend-challenge
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run type-check` - Run TypeScript type checking
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Features in Detail

### Shopping Cart

- Add products to cart from product pages
- Update quantities in cart modal
- Remove individual items or clear entire cart
- Cart state persists across page refreshes
- Real-time total calculation including:
  - Product subtotal
  - Fixed shipping cost ($50)
  - VAT (20% of product total)

### Checkout Process

- Multi-step form with billing, shipping, and payment sections
- Form validation for all required fields
- Support for e-Money and Cash on Delivery payment methods
- Order summary with itemized totals
- Order confirmation modal upon successful checkout

### Product Pages

- Detailed product information
- Product gallery with multiple images
- Feature descriptions and included items
- Related products recommendations
- Add to cart functionality with quantity selection

### Responsive Design

- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Optimized images for different screen sizes
- Touch-friendly interface elements

## Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Pinia** - State management
- **Vue Router** - Client-side routing
- **Vite** - Build tool and dev server
- **CSS3** - Styling with Grid and Flexbox

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.
