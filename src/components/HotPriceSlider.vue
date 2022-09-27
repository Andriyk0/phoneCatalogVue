<script lang="ts">
  import { defineComponent } from 'vue'
  import '../styles/hotPriceSlider.scss'
  import SliderForProducts from './SliderForProducts.vue'
  import { useAllProductsStore } from '../stores/allProducts'

  export default defineComponent({
    data() {
      return {
        storeAllProducts: useAllProductsStore(),
      };
    },

    components: { SliderForProducts }
})
</script>
    
<template>
  <section className="hot_price">
    <p className="hot_price__title">Hot price</p>
    <SliderForProducts :product="storeAllProducts.allProduct.filter(item => item.discount > 0)"/>
  </section>
</template>