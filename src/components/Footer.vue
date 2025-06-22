<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-top">
          <div class="logo">
            <h2 class="logo-text">audiophile</h2>
          </div>

          <nav class="footer-nav">
            <ul class="footer-nav-list">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/headphones">Headphones</router-link></li>
              <li><router-link to="/speakers">Speakers</router-link></li>
              <li><router-link to="/earphones">Earphones</router-link></li>
            </ul>
          </nav>
        </div>

        <div class="footer-bottom">
          <p class="footer-description">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of
            music lovers and sound specialists who are devoted to helping you get the most out of
            personal audio. Come and visit our demo facility - we're open 7 days a week.
          </p>

          <div class="footer-info">
            <p class="copyright">Copyright 2024. All Rights Reserved</p>

            <div class="social-links">
              <a href="#" aria-label="Facebook">
                <img src="@/assets/shared/desktop/icon-facebook.svg" alt="Facebook" />
              </a>
              <a href="#" aria-label="Twitter">
                <img src="@/assets/shared/desktop/icon-twitter.svg" alt="Twitter" />
              </a>
              <a href="#" aria-label="Instagram">
                <img src="@/assets/shared/desktop/icon-instagram.svg" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineOptions({
  name: 'AppFooter',
})
</script>

<style scoped>
.footer {
  background: #101010;
  color: white;
  padding: 75px 0 48px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 36px;
  border-bottom: 1px solid #4c4c4c;
}

.logo-text {
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin: 0;
  text-transform: lowercase;
  letter-spacing: 1px;
}

.footer-nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 34px;
}

.footer-nav-list a {
  text-decoration: none;
  color: white;
  font-weight: normal;
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: color 0.3s ease;
}

.footer-nav-list a:hover {
  color: #d87d4a;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 48px;
}

.footer-description {
  max-width: 540px;
  margin: 0;
  color: #ffffff;
  opacity: 0.5;
  line-height: 1.7;
}

.footer-info {
  display: flex;
  flex-direction: column;
  gap: 48px;
  align-items: flex-end;
}

.copyright {
  margin: 0;
  color: #ffffff;
  opacity: 0.5;
  font-weight: 700;
}

.social-links {
  display: flex;
  gap: 16px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  transition: opacity 0.3s ease;
}

.social-links a:hover {
  opacity: 0.7;
}

.social-links img {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 46px;
  }

  .footer-top {
    flex-direction: column;
    gap: 32px;
    align-items: flex-start;
    text-align: left;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 32px;
    text-align: left;
  }

  .footer-nav-list li {
    font-size: 12px;
  }

  .footer-info {
    align-items: flex-start;
    text-align: left;
    gap: 32px;
    width: 100%;
  }
}

@media (max-width: 480px) {
  .container {
    padding: 0 16px;
  }

  .footer-nav-list {
    flex-direction: column;
    gap: 16px;
  }

  .footer-nav-list a {
    font-size: 15px;
    font-weight: normal;
    line-height: 20px;
  }
}
</style>
