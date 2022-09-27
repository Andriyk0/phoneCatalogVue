<script lang="ts">
import type { Product } from '@/types/types';
import { defineComponent } from 'vue'
import '../styles/sliderForProducts.scss'
      
export default defineComponent({
  props: {
    product: {
      type: Array as () => Product[],
      default: () => [],
    }
  },
  
  data() {
    return {
      sliderCount: 4,
      showCard: [] as Product[],
    }
  },
  
  methods: {
    next() {
      if (this.sliderCount < this.product.length) {
        this.showCard = [...this.product].splice(this.sliderCount, 4);
        this.sliderCount += 4;
      }
    },

    prev() {
      if (this.sliderCount > 4) {
        this.showCard = [...this.product].splice(this.sliderCount - 8, 4);
        this.sliderCount -= 4;
      }
    },
  },

  beforeUpdate() {
    if (this.showCard.length === 0) {
      this.showCard = [...this.product].splice(0, 4)
    }
  }
})
</script>
      
<template>
  <button
    type="button"
    @click="next"
    class="mySlider__next_button"
  >
    <img src="../assets/images/right.svg" alt="" />
  </button>
  <button
    type="button"
    @click="prev"
    class="mySlider__prev_button"
  >
    <img src="../assets/images/left.svg" alt="" />
  </button>
  <div className="mySlider">
    <div v-for="item in showCard" :key="item.id" class="mySlider__product_box">
      <div class="mySlider__image_box">
          <img
            class="mySlider__image"
            :src="'src/assets/'+ item.imageUrl"
            alt=""
          />
      </div>
      <p class="mySlider__name">{{item.name}}</p>
      <div class="mySlider__price_box">
        <p class="mySlider__discount_price">{{`$${item.price - ((item.price * item.discount) / 100)}`}}</p>
        <p class="mySlider__price">{{`$${item.price}`}}</p>
      </div>
      <div class="mySlider__screen_box">
        <p class="mySlider__screen_title">Screen</p>
        <p class="mySlider__screen_info">{{item.screen}}</p>
      </div>
      <div class="mySlider__capasity_box">
        <p class="mySlider__capasity_title">Capasity</p>
        <p class="mySlider__capasity_info">{{item.capacity}}</p>
      </div>
      <div class="mySlider__ram_box">
        <p class="mySlider__ram_title">RAM</p>
        <p class="mySlider__ram_info">{{item.ram}}</p>
      </div>
      <div class="mySlider__button_box">
        <button
          class="mySlider__add_button"
          type="button"
        >
          Add to cart
        </button>
        <button
          class="mySlider__like_button"
          type="button"
        >
          <img src="../assets/images/Vector(Stroke).svg" alt="" />
        </button>
      </div>
    </div>
  </div>
</template>