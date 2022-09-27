<script lang="ts">
import { defineComponent } from 'vue'
import '../styles/likedProductPage.scss'
import { usePathStore } from '../stores/path'
import { useLikedProductStore } from '@/stores/likedProduct'
import type { Product } from '@/types/types'
    
export default defineComponent({
  data() {
    return {
      storePath: usePathStore(),
      storeLikedProduct: useLikedProductStore(),
      showLikedProduct: [] as Product[],
    }
  },
        
  methods: {
    goToTop() {
      window.scrollTo({
      top: 0,
      behavior: 'smooth',
      });
    },

    includeProd(products:Product[], favProd:Product) {
      return products.some((item:Product) => item.id === favProd.id);
    },

    isLiked(products:Product[], liked:Product) {
      if(this.includeProd(products, liked)) {
        return '/src/assets/images/heart.png'
      } else {
        return '/src/assets/images/Vector(Stroke).svg'
      }
    }
  },
})
</script>
    
<template>
  <div class="phones">
    <div class="phones__path_container">
      <RouterLink
        to="/"
        class="prodByCategories__link"
        @click="storePath.setPath('home')"
      >
        <img class="phones__home_img" src="../assets/images/Home.svg" alt="" />
      </RouterLink>
      <img class="phones__right_img" src="../assets/images/right.svg" alt="" />
      <p class="phones__path">Favourites</p>
    </div>
    <p class="phones__title">Favourites</p>
    <p class="phones__numberOfPhones">{{`${storeLikedProduct.likedProduct.length} items`}}</p>
    <div class="cards">
      <div v-for="item in showLikedProduct" class="mySlider__product_box" :key="item.id">
        <div class="mySlider__image_box">
          <RouterLink
            :key="item.id"
            to="/product_details"
            @click="goToTop"
          >
            <img
              class="mySlider__image"
              :src="'/srs/assets/' + item.imageUrl"
              alt=""
            />
          </RouterLink>
        </div>
        <p class="mySlider__name">{{item.name}}</p>
        <div class="mySlider__price_box">
          <p class="mySlider__discount_price">{{`$${item.price - ((item.price * item.discount) / 100)}`}}</p>
          <p class="mySlider__price">{{`$${item.price}`}}</p>
        </div>
        <div class="mySlider__screen_box">
          <p class="mySlider__screen_title">Screen</p>
          <p class="mySlider__screen_info">{{item.screen}}</p>
        </div>
        <div class="mySlider__capasity_box">
          <p class="mySlider__capasity_title">Capasity</p>
          <p class="mySlider__capasity_info">{{item.capacity}}</p>
        </div>
        <div class="mySlider__ram_box">
          <p class="mySlider__ram_title">RAM</p>
          <p class="mySlider__ram_info">{{item.ram}}</p>
        </div>
        <div class="mySlider__button_box">
          <button
            class='mySlider__add_button'
            type="button"
          >
            'Add to cart'
          </button>
          <button
            class="mySlider__like_button"
            type="button"
            @click="!includeProd(storeLikedProduct.likedProduct, item) 
              ? storeLikedProduct.setLikedProduct(item) 
              : storeLikedProduct.deleteLikedProduct(item)"
          >
            <img :src="isLiked(storeLikedProduct.likedProduct, item)" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>