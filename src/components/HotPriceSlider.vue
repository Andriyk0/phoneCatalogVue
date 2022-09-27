<script lang="ts">
  import { defineComponent } from 'vue'
  import '../styles/hotPriceSlider.scss'
  import SliderForProducts from './SliderForProducts.vue'
  import { useHotProductsStore } from '../stores/hotProducts'

  export default defineComponent({
    data() {
      return {
        storeHotProducts: useHotProductsStore(),
      };
    },

    components: { SliderForProducts }
})
</script>
    
<template>
  <section className="hot_price">
    <p className="hot_price__title">Hot price</p>
    <SliderForProducts :product="storeHotProducts.hotProducts"/>
  </section>
</template>