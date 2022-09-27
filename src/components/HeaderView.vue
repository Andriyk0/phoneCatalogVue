<script lang="ts">
import { defineComponent } from 'vue'
import '../styles/header.scss'
import { usePathStore } from '../stores/path';
import { useLikedProductStore } from '@/stores/likedProduct';
  
  export default defineComponent({
    data() {
      return {
        pathArray: ['home', 'phones', 'tablets', 'acsessories'],
        storePath: usePathStore(),
        storeLikedProduct: useLikedProductStore(),
      }
    },
    
    methods: {
      changeFavImage():string {
        return this.storePath.path === 'liked_product' ? '/src/assets/images/heart.png' : '/src/assets/images/Vector(Stroke).svg'
      },

      linkIsActive(linkPath:string):string {
        return this.storePath.path === linkPath ? 'navbar__is-active navbar__link-active navbar__link' : 'navbar__link'
      }
    },
  })
</script>

<template>
  <header class="navbar" id="header">
     <nav>
      <RouterLink to="/" class="navbar__logo" @click="storePath.setPath('/')">
        <img src="../assets/images/LOGO.svg" alt="logoImg" />
      </RouterLink>
      <RouterLink 
        v-for="path in pathArray" 
        :key="path" 
        :to="path" 
        :class="linkIsActive(path)"
        @click="storePath.setPath(path)"
      >
        {{ path }}
      </RouterLink>
     </nav>
     <nav>
      <RouterLink 
        to="liked_product" 
        :class="linkIsActive('liked_product')"
        class="navbar__liked"
        @click="storePath.setPath('liked_product')"
      >
        <img
          :src="changeFavImage()"
          alt="heart"
        />
        <div v-if="storeLikedProduct.likedProduct.length > 0 && storePath.path !== 'liked_product'" class="numberOfFavorite">{{storeLikedProduct.likedProduct.length}}</div>
      </RouterLink>
      <RouterLink 
        to="checkout" 
        :class="linkIsActive('checkout')"
        class="navbar__checkout"
        @click="storePath.setPath('checkout')"
      >
        <img src="../assets/images/Shoppingbag(Cart).svg" alt="checkout" />
      </RouterLink>
     </nav>
  </header>
</template>