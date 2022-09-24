<script lang="ts">
  import { defineComponent } from 'vue'
  import '../styles/carousel.scss'
  import CarouselItem from './CarouselItem.vue'

  interface Props {
    id:number,
    img: string,
  }
    
  export default defineComponent({
    components: {
      CarouselItem
    },

    props: {
      carousel_data: {
        type: Array as () => Props[],
        default: () => []
      }
    },

    data() {
      return {
        currentSlide: 0,
      }
    },
        
    methods: {
      prevSlide() {
        if(this.currentSlide === 0) {
          this.currentSlide = this.carousel_data.length - 1
        } else {
          this.currentSlide--
        }
      },

      nextSlide() {
        if(this.currentSlide >= this.carousel_data.length - 1) {
          this.currentSlide = 0
        } else {
          this.currentSlide++
        }
      }
    },

    mounted() {       
      setInterval(() => {
        this.nextSlide()
      }, 2000)
    }
  })

</script>
    
<template>
  <div class="carousel">
    <button
      type="button"
      className="carousel__button_left"
      @click="prevSlide"
    >
      <img src="../assets/images/left.svg" alt="" />
    </button>
    <div class="carousel__box">
      <div class="carousel__item_list" :style="{'margin-left': '-' + (100 * currentSlide) + '%'}">
        <CarouselItem
          v-for="item in carousel_data"
          :key="item.id"
          :item_data="item"
          class="carousel__item"
        />
      </div>
    </div>
    <button
        className="carousel__button_right"
        type="button"
        @click="nextSlide"
      >
        <img src="../assets/images/right.svg" alt="" />
      </button>
  </div>
</template>