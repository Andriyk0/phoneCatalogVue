<script lang="ts">
import { defineComponent } from 'vue'
import '../styles/tabletsPage.scss'
import { useAllProductsStore } from '../stores/allProducts'
import { usePathStore } from '../stores/path'
import ShowProductOnPage from '../components/ShowProductOnPage.vue'
    
export default defineComponent({
    data() {
        return {
            storeTablets: useAllProductsStore(),
            storePath: usePathStore(),
        };
    },
    methods: {},
    components: { ShowProductOnPage }
})
</script>
    
<template>
  <div class="tablets">
    <div class="tablets__path_container">
      <RouterLink
        to="/"
        class="prodByCategories__link"
        @click="storePath.setPath('home')"
      >
        <img class="tablets__home_img" src="../assets/images/Home.svg" alt="" />
      </RouterLink>
      <img class="tablets__right_img" src="../assets/images/right.svg" alt="" />
      <p class="tablets__path">Tablets</p>
    </div>
    <p class="tablets__title">Tablets</p>
    <p class="tablets__numberOftablets">{{`${storeTablets.tablets.length} models`}}</p>
    <ShowProductOnPage :product="storeTablets.tablets"/>
  </div>
</template>