<script lang="ts">
  import { defineComponent } from 'vue'
  import '../styles/slider.scss'
  import CarouselView from './CarouselView.vue'
    
  export default defineComponent({
    components: {
      CarouselView
    },

    data() {
      return {
        sliderItems: [
          {id:1, img: 'Banner.svg'},
          {id:2, img: '1040896-iphone12.webp'},
          {id:3, img: '165883402851674_P8741695.png'}
        ],
      }
    },
  })
</script>
    
<template>
  <section className="top_slider">
    <CarouselView :carousel_data="sliderItems" />
  </section>
</template>

<style lang="scss">
  .top_slider {
    margin-bottom: 100px; 
  }
</style>