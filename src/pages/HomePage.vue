<script lang="ts">
  import { defineComponent } from 'vue'
  import '../styles/homePage.scss'
  import SliderView from '../components/SliderView.vue'
import HotPriceSlider from '../components/HotPriceSlider.vue'
    
  export default defineComponent({
    data() {
        return {};
    },
    methods: {},
    components: { SliderView, HotPriceSlider }
  })
</script>
    
<template>
  <div class="home">
    <SliderView />
    <HotPriceSlider />
  </div>
</template>