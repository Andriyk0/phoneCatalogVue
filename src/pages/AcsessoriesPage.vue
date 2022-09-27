<script lang="ts">
import { defineComponent } from 'vue'
import '../styles/acsessoriesPage.scss'
import { useAllProductsStore } from '../stores/allProducts'
import { usePathStore } from '../stores/path'
import ShowProductOnPage from '../components/ShowProductOnPage.vue'
    
export default defineComponent({
    data() {
        return {
            storeAcsessories: useAllProductsStore(),
            storePath: usePathStore(),
        };
    },

    components: { ShowProductOnPage }
})
</script>
    
<template>
  <div class="ascessories">
    <div class="ascessories__path_container">
      <RouterLink
        to="/"
        class="prodByCategories__link"
        @click="storePath.setPath('home')"
      >
        <img
          class="ascessories__home_img"
          src="../assets/images/Home.svg"
          alt=""
        />
      </RouterLink>
      <img
        class="ascessories__right_img"
        src="../assets/images/right.svg"
        alt=""
      />
      <p class="ascessories__path">Phone</p>
    </div>
    <p class="ascessories__title">Mobile ascessories</p>
    <p class="ascessories__numberOfascessories">{{`${storeAcsessories.acsessories.length} models`}}</p>
    <ShowProductOnPage :product="storeAcsessories.acsessories"/>
  </div>
</template>