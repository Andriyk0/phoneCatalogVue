<script lang="ts">
    import { defineComponent } from 'vue'
    import '../styles/newMobileSlider.scss'
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
    <section class="new_phones">
      <p class="new_phones__title">Brand new models</p>
      <SliderForProducts :product="storeAllProducts.allProduct.filter(item => item.age < 9)"/>
    </section>
  </template>