<script lang="ts">
  import { defineComponent } from 'vue'
  import '../styles/footer.scss'

  export default defineComponent({
    data() {
      return {
      }
    },
    
    methods: {
      goToTop() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
      }
    }, 
  })
</script>
    
<template>
  <footer class="footer">
    <RouterLink to="/" class="footer__logo">
      <img src="../assets/images/LOGO.svg" alt="" />
    </RouterLink>
    <div>
      <a
        class="footer__link"
        href="https://github.com/Andriyk0"
      >
        GITHUB
      </a>
      <a class="footer__link" href="/">CONTACTS</a>
      <a class="footer__link" href="/">RIGTHS</a>
    </div>
    <div class="footer__back-to-top">
      <p>Back to top</p>
      <button
        class="footer__top-link"
        @click="goToTop"
        type="button"
      >
        <img src="../assets/images/top.svg" alt="back to top" />
      </button>
    </div>
  </footer>
</template>