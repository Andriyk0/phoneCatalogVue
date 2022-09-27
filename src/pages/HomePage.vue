<script lang="ts">
  import { defineComponent } from 'vue'
  import '../styles/homePage.scss'
  import SliderView from '../components/SliderView.vue'
import HotPriceSlider from '../components/HotPriceSlider.vue'
import ProductByCategory from '../components/ProductByCategory.vue'
    
  export default defineComponent({
    data() {
        return {};
    },
    methods: {},
    components: { SliderView, HotPriceSlider, ProductByCategory }
  })
</script>
    
<template>
  <div class="home">
    <SliderView />
    <HotPriceSlider />
    <ProductByCategory />
  </div>
</template>