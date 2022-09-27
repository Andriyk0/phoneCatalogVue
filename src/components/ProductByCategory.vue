<script lang="ts">
import { defineComponent } from 'vue'
import '../styles/productByCategory.scss'
import { usePathStore } from '../stores/path';
import { useAllProductsStore } from '@/stores/allProducts';
    
export default defineComponent({
  data() {
    return {
      storePath: usePathStore(),
      storeAllProducts: useAllProductsStore(),
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
  <div class="prodByCategories">
    <p class="prodByCategories__title">Shop by category</p>
    <div class="prodByCategories__container">
      <RouterLink
        to="phones"
        class="prodByCategories__link"
        @click="() => {storePath.setPath('phones'), goToTop}"
      >
        <div class="prodByCategories__mobile_box">
          <img
            src="../assets/images/image6.svg"
            class="prodByCategories__image"
            alt=""
          />
        </div>
        <p class="prodByCategories__image_title">Mobile phones</p>
        <p class="prodByCategories__number_of_products">{{storeAllProducts.phones.length}} models</p>
      </RouterLink>
      <RouterLink
        to="tablets"
        class="prodByCategories__link"
        @click="() => {storePath.setPath('tablets'), goToTop}"
      >
        <div class="prodByCategories__tablet_box">
          <img
            src="../assets/images/image5.svg"
            class="prodByCategories__image"
            alt=""
          />
        </div>
        <p class="prodByCategories__image_title">Tablets</p>
        <p class="prodByCategories__number_of_products">{{storeAllProducts.tablets.length}} models</p>
      </RouterLink>
      <RouterLink
        to="acsessories"
        class="prodByCategories__link"
        @click="() => {storePath.setPath('acsessories'), goToTop}"
      >
        <div class="prodByCategories__accesories_box">
          <img
            src="../assets/images/image7.svg"
            class="prodByCategories__image"
            alt=""
          />
        </div>
        <p class="prodByCategories__image_title">Acsessories</p>
        <p class="prodByCategories__number_of_products">{{storeAllProducts.acsessories.length}} models</p>
      </RouterLink>
    </div>
  </div>
</template>