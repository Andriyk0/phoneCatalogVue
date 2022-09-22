<script lang="ts">
import { defineComponent } from 'vue'
import '../styles/header.scss'

  export default defineComponent({
    data() {
      return {
        pathArray: ['home', 'phones', 'tablets', 'acsessories'],
        path: 'home',
      }
    },
    
    methods: {
      changeFavImage():string {
        return this.path === 'liked_product' ? '/src/assets/images/heart.png' : '/src/assets/images/Vector(Stroke).svg'
      },

      linkIsActive(linkPath:string):string {
        return this.path === linkPath ? 'navbar__is-active navbar__link-active navbar__link' : 'navbar__link'
      }
    },
  })
</script>

<template>
  <header class="navbar" id="header">
     <nav>
      <RouterLink to="/home" class="navbar__logo">
        <img src="../assets/images/LOGO.svg" alt="logoImg" />
      </RouterLink>
      <RouterLink 
        v-for="path in pathArray" 
        :key="path" 
        :to="path" 
        :class="linkIsActive(path)"
      >
        {{ path }}
      </RouterLink>
     </nav>
     <nav>
      <RouterLink 
        to="liked_product" 
        :class="linkIsActive('liked_product')"
        class="navbar__liked"
      >
        <img
            :src="changeFavImage()"
            alt="heart"
          />
      </RouterLink>
      <RouterLink 
        to="checkout" 
        :class="linkIsActive('checkout')"
        class="navbar__checkout"
      >
        <img src="../assets/images/Shoppingbag(Cart).svg" alt="checkout" />
      </RouterLink>
     </nav>
  </header>
</template>