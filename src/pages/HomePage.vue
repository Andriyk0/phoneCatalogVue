<script lang="ts">
import { defineComponent } from 'vue'
import '../styles/homePage.scss'
import SliderView from '../components/SliderView.vue'
import HotPriceSlider from '../components/HotPriceSlider.vue'
import ProductByCategory from '../components/ProductByCategory.vue'
import NewMobileSlider from '../components/NewMobileSlider.vue'
    
  export default defineComponent({
    data() {
      return {};
    },

    components: { SliderView, HotPriceSlider, ProductByCategory, NewMobileSlider }
  })
</script>
    
<template>
  <div class="home">
    <SliderView />
    <HotPriceSlider />
    <ProductByCategory />
    <NewMobileSlider />
  </div>
</template>