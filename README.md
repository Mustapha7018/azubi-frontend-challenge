# Audiophile E-commerce Frontend

This is a complete, multi-page e-commerce website for "Audiophile," a high-end audio equipment retailer. Built with Vue 3 and TypeScript, it offers a seamless shopping experience from product discovery to checkout.

This project was developed as a solution to a front-end challenge, focusing on creating a responsive, interactive, and state-managed application.

## Core Features

- **Fully Responsive Design**: Optimized for desktop, tablet, and mobile displays.
- **Dynamic Product Pages**: Browse products by category or view detailed product pages with image galleries, features, and recommendations.
- **Reactive Shopping Cart**: A real-time, state-managed cart to add/remove products and update quantities instantly.
- **Persistent State**: The cart's state is saved to `localStorage`, so it persists across sessions.
- **Smooth Navigation**: Page transitions and product page navigation include smooth scrolling for a better user experience.
- **Client-Side Routing**: All navigation is handled on the client-side with Vue Router.

## Tech Stack

- **Vue 3**: The application is built using the Composition API.
- **Vite**: For a fast and modern development experience.
- **TypeScript**: Ensuring type safety across the codebase.
- **Pinia**: For reactive and centralized state management.
- **Vue Router**: For all client-side routing.
- **ESLint & Prettier**: For maintaining high code quality and consistent formatting.

## Project Structure

The project follows a standard Vue 3 structure:

```
src/
├── assets/         # Static assets like images and CSS
├── components/     # Reusable UI components (Header, Footer, Cart)
├── router/         # Routing configuration
├── stores/         # Pinia stores for state management
├── utils/          # Utility functions
├── views/          # Page-level components
└── main.ts         # The main entry point of the application
```

## Getting Started

### Prerequisites

- Node.js (v18 or newer recommended)
- npm, yarn, or pnpm

### Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/azubi-frontend-challenge.git
    cd azubi-frontend-challenge
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5174`.

### Available Scripts

- `npm run dev`: Starts the development server with hot-reloading.
- `npm run build`: Compiles and minifies the application for production.
- `npm run preview`: Serves the production build locally for previewing.
- `npm run lint`: Lints the code using ESLint.
- `npm run format`: Formats the code with Prettier.
- `npm run type-check`: Performs a static type check using TypeScript.
- `npm run clean`: Removes the Vite cache to resolve potential dependency issues.

---

This project aims to demonstrate best practices in modern front-end development with Vue.
