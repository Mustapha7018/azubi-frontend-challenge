<script setup lang="ts"></script>

<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <span class="new-product">New Product</span>
            <h1 class="hero-title">XX99 Mark II Headphones</h1>
            <p class="hero-description">
              Experience natural, lifelike audio and exceptional build quality made for the
              passionate music enthusiast.
            </p>
            <router-link to="/product/xx99-mark-two-headphones" class="cta-button">
              See Product
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Category Navigation -->
    <section class="categories">
      <div class="container">
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
      </div>
    </section>

    <!-- Featured Products -->
    <section class="featured-products">
      <div class="container">
        <div class="product-showcase">
          <div class="product-hero">
            <div class="product-image">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcset="@/assets/home/mobile/image-speaker-zx9.png"
                />
                <source
                  media="(max-width: 1024px)"
                  srcset="@/assets/home/tablet/image-speaker-zx9.png"
                />
                <img
                  src="@/assets/home/desktop/image-speaker-zx9.png"
                  alt="ZX9 Speaker"
                  class="image"
                />
              </picture>
            </div>
            <div class="product-content">
              <h2 class="product-title">ZX9 Speaker</h2>
              <p class="product-description">
                Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
                sound.
              </p>
              <router-link to="/product/zx9-speaker" class="product-button">
                See Product
              </router-link>
            </div>
          </div>

          <!-- ZX7 Speaker Section: background image, content left -->
          <div class="zx7-section">
            <div class="zx7-content">
              <h2 class="zx7-title">ZX7 Speaker</h2>
              <router-link to="/product/zx7-speaker" class="product-button outline">
                See Product
              </router-link>
            </div>
          </div>

          <!-- YX1 Earphones Section -->
          <div class="yx1-section">
            <div class="yx1-image">
              <picture>
                <source
                  media="(max-width: 768px)"
                  srcset="@/assets/home/mobile/image-earphones-yx1.jpg"
                />
                <source
                  media="(max-width: 1024px)"
                  srcset="@/assets/home/tablet/image-earphones-yx1.jpg"
                />
                <img
                  src="@/assets/home/desktop/image-earphones-yx1.jpg"
                  alt="YX1 Earphones"
                  class="image"
                />
              </picture>
            </div>
            <div class="yx1-content yx1-bg">
              <h2 class="yx1-title">YX1 Earphones</h2>
              <router-link to="/product/yx1-earphones" class="product-button outline">
                See Product
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
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
      </div>
    </section>
  </div>
</template>

<style scoped>
.home {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

/* Hero Section */
.hero {
  background: url('@/assets/home/desktop/image-hero.jpg') no-repeat;
  background-position: center center;
  background-size: cover;
  color: white;
  padding: 120px 0;
  height: 75vh;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.new-product {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 10px;
  text-transform: uppercase;
  opacity: 0.8;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0;
}

.hero-description {
  font-size: 15px;
  line-height: 1.7;
  opacity: 0.8;
  margin: 0;
  max-width: 350px;
}

.cta-button {
  display: inline-block;
  padding: 15px 32px;
  background: var(--color-primary);
  color: white;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: fit-content;
}

.cta-button:hover {
  background: #4c4c4c;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image .image {
  max-width: 100%;
  height: auto;
}

/* Categories Section */
.categories {
  padding: 120px 0;
  margin-top: 20px;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #f1f1f1;
  padding: 88px 24px 22px;
  position: relative;
  height: 120%;
}

.category-image {
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 200px;
  height: 200px;
  object-fit: contain;
}

.category-name {
  margin: 2rem 1rem;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1.3px;
  text-transform: uppercase;
}

.category-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #7d7d7d;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.category-link:hover {
  color: var(--color-primary);
}

/* Featured Products */
.featured-products {
  padding: 120px 0;
}

.product-showcase {
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.product-hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
  background: var(--color-primary);
  padding: 150px 80px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.product-hero:first-child {
  background: var(--color-primary) url('@/assets/home/desktop/pattern-circles.svg') no-repeat;
  background-position: -200px -50px;
  align-items: flex-start;
}

.product-hero:first-child .product-image {
  position: absolute;
  bottom: -20px;
  left: 0;
  width: 50%;
  text-align: center;
}

.product-hero:first-child .product-image .image {
  max-width: 80%;
}

.product-hero:first-child .product-content {
  padding-top: 64px;
  position: relative;
  z-index: 1;
  grid-column: 2 / 3;
}

.product-hero.reverse {
  grid-template-columns: 1fr 1fr;
  align-items: center;
}

.product-hero.reverse .product-content {
  order: -1;
}

.product-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-image .image {
  max-width: 100%;
  height: auto;
}

.product-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.product-title {
  color: var(--color-white);
  font-size: 3.5rem;
  width: 50%;
  font-weight: 700;
  letter-spacing: 1.2px;
  line-height: 1.1;
  text-transform: uppercase;
  margin: 0;
}

.product-description {
  font-size: 15px;
  line-height: 1.7;
  color: var(--color-white);
  margin: 0;
}

.product-button {
  display: inline-block;
  padding: 15px 32px;
  background: var(--color-black);
  color: var(--color-white);
  text-decoration: none;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1px;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: fit-content;
}

.product-button:hover {
  background: var(--color-primary-hover);
}

.product-button.outline {
  background: transparent;
  color: var(--color-black);
  border: 1px solid var(--vt-c-black-mute);
}

.product-button.outline:hover {
  background: var(--color-black);
  color: var(--color-white);
}

/* About Section */
.about {
  padding: 120px 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.about-title {
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin: 0 0 32px;
  line-height: 1.1;
}

.highlight {
  color: var(--color-primary);
}

.about-description {
  font-size: 15px;
  line-height: 1.7;
  color: #7d7d7d;
  margin: 0;
}

.about-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image .image {
  max-width: 100%;
  min-height: 300px;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero {
    background-image: url('@/assets/home/tablet/image-header.jpg');
    height: 640px;
    background-position: center;
  }

  .categories,
  .featured-products,
  .about {
    padding: 70px 0;
  }
  .hero-content,
  .product-hero,
  .about-content {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  .about-content {
    text-align: left;
  }

  .about-image {
    width: 100%;
  }

  .about-image .image {
    width: 100%;
    object-fit: cover;
  }

  .hero-content {
    justify-items: center;
    text-align: center;
  }

  .hero-text {
    align-items: center;
  }

  .hero-title {
    font-size: 40px;
  }

  .product-title,
  .about-title {
    font-size: 32px;
  }

  .product-hero:first-child {
    background-position: center -150px;
  }

  .product-hero:first-child .product-image {
    position: static;
    width: 100%;
    margin-bottom: 32px;
  }

  .product-hero:first-child .product-content {
    padding-top: 0;
    text-align: left;
    padding-left: 10px;
    grid-column: auto;
  }

  .zx7-section {
    background-image: url('@/assets/home/tablet/image-speaker-zx7.jpg');
    min-height: 250px;
    padding: 0;
  }
  .zx7-content {
    padding: 40px 24px;
  }
  .yx1-section {
    gap: 30px;
  }
  .yx1-content {
    padding: 0;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }

  .hero {
    padding: 60px 0;
    background-image: url('@/assets/home/mobile/image-header.jpg');
    height: 550px;
  }

  .hero-content {
    justify-items: center;
    text-align: center;
  }

  .hero-text {
    align-items: center;
  }

  .hero-title {
    font-size: 36px;
  }

  .featured-products h2 {
    font-size: 1.5rem;
  }
  .categories,
  .featured-products,
  .about {
    padding: 60px 0;
  }

  .product-showcase {
    gap: 40px;
  }

  .category-grid {
    grid-template-columns: 1fr;
    gap: 100px;
  }

  .category-card {
    padding: 50px 24px 30px;
  }

  .category-image {
    width: 180px;
    height: 180px;
    top: -60px;
  }

  .product-hero {
    padding: 32px 24px;
    gap: 32px;
  }

  .product-hero.reverse .product-content {
    order: 0;
  }

  .product-content {
    gap: 24px;
    padding: 0;
  }

  .product-title,
  .about-title {
    font-size: 28px;
  }

  .product-hero:first-child {
    background-position: center -120px;
  }

  .product-hero:first-child .product-image .image {
    max-width: 50%;
  }

  .product-hero:first-child .product-content {
    padding-top: 0;
    text-align: left;
  }

  /* ZX7 Speaker for mobile */
  .zx7-section {
    background: url('@/assets/home/mobile/image-speaker-zx7.jpg') no-repeat;
    background-size: cover;
    background-position: left center;
    min-height: 200px;
    border-radius: 8px;
  }

  .zx7-content {
    padding: 32px 24px;
  }

  /* YX1 Earphones for mobile */
  .yx1-section {
    display: block !important;
    grid-template-columns: unset;
  }

  .yx1-image {
    width: 100%;
    margin-bottom: 24px;
  }

  .yx1-content {
    width: 100%;
    padding: 0;
  }

  .yx1-bg {
    width: 100%;
    padding: 32px 24px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }

  .product-title,
  .about-title {
    font-size: 24px;
  }

  .categories,
  .featured-products,
  .about {
    padding: 50px 0;
  }

  .product-showcase {
    gap: 30px;
  }

  .product-hero {
    padding: 32px 24px;
  }
}

.zx7-section {
  display: flex;
  align-items: center;
  background: url('@/assets/home/desktop/image-speaker-zx7.jpg');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 200px;
  border-radius: 8px;
  margin: 0;
}
.zx7-content {
  margin-left: 0;
  padding: 0 24px;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.zx7-title {
  color: var(--color-black);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.yx1-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
  margin: 0;
}
.yx1-image {
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
}
.yx1-image .image {
  width: 100%;
  display: block;
  height: 100%;
  object-fit: cover;
}
.yx1-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0 24px;
  height: 100%;
  box-sizing: border-box;
}
.yx1-title {
  color: var(--color-black);
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 24px;
  text-transform: uppercase;
}

.yx1-bg {
  background: #f1f1f1;
  border-radius: 8px;
  padding: 48px 24px;
}
</style>
