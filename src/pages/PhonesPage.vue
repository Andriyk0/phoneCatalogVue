<script lang="ts">
import { defineComponent } from 'vue'
import '../styles/phonesPage.scss'
import { useAllProductsStore } from '../stores/allProducts'
import { usePathStore } from '../stores/path'
import ShowProductOnPage from '../components/ShowProductOnPage.vue'
    
export default defineComponent({
    data() {
        return {
          storePhones: useAllProductsStore(),
          storePath: usePathStore()
        };
    },
    components: { ShowProductOnPage }
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
      <p class="phones__path">Phone</p>
    </div>
    <p class="phones__title">Mobile Phones</p>
    <p class="phones__numberOfPhones">{{`${storePhones.phones.length} models`}}</p>
    <ShowProductOnPage :product="storePhones.phones" />
  </div>
</template>