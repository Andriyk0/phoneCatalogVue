<script lang="ts">
import type { Product } from '@/types/types';
import { defineComponent } from 'vue'
import '../styles/showProductsOnPage.scss'
    
export default defineComponent({
  props: {
  product: {
    type: Array as () => Product[],
    default: () => [],
    }
  },

  data() {
    return {
      productLength: ['All'] as (string | number)[],
      sortProductCategory: ['All', 'Cheep', 'Expensive', 'New', 'Old'],
      sortValue: 'All',
      itemValue: 'All',
      selectPage: 1,
      showProduct: [] as Product[],
      numberOfPage: [1],
    }
  },
        
  methods: {
    createNumberArr() {
      const arr = [];

      for (let i = 4; i <= this.product.length; i += 4) {
        arr.push(i);
      }

      this.productLength = ['All', ...arr];
    },

    sortProduct(event:string) {
      let rezult;

      if (event === 'Cheep') {
        rezult = [...this.product].sort((a, b) => a.price - b.price);
      } else if (event === 'Expensive') {
        rezult = [...this.product].sort((a, b) => b.price - a.price);
      } else if (event === 'New') {
        rezult = [...this.product].sort((a, b) => a.age - b.age);
      } else if (event === 'Old') {
        rezult = [...this.product].sort((a, b) => b.age - a.age);
      } else if (event === 'All') {
        rezult = [...this.product];
    }
      return rezult;
    },

    showProductOnPage(num: number, item: number | string, sortV: string) {
      const rezult = this.sortProduct(sortV);

      if (rezult && item !== 'All') {
        this.showProduct = rezult
          .splice(num * Number(item) - Number(item), num * Number(item));
        this.numberOfPage = (Array.from({
          length: Math.ceil(this.product.length
          / Number(item)),
        }, (_, i) => i + 1));
        this.selectPage = num;
      } else if (rezult && item === 'All') {
        this.showProduct = rezult
          .splice(num * this.product.length - this.product.length, num * this.product.length);
        this.selectPage = num;
        this.numberOfPage = [1];
      }
    },

    goToTop() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
        });
      }
  },

  beforeUpdate() {
    this.createNumberArr();
  }
})
</script>
    
<template>
  <div class="product__filters">
    <div class="product__sort">
      <label class="product__label" htmlFor="categories">Sort by</label>
      <select
        class="product__select_sort"
        id="categories"
        v-model = "sortValue"
        @click="() => {showProductOnPage(selectPage, itemValue, sortValue)}"
      >
      <option v-for="item in sortProductCategory" :key="item" :value="item">{{item}}</option>
      </select>
    </div>
    <div class="product__sort">
      <label
        class="product__label"
        htmlFor="numbersOfProduct"
      >
        Item on page
      </label>
      <select
        class="product__select_item"
        id="numbersOfProduct"
        v-model="itemValue"
        @click="()=>{showProductOnPage(selectPage,itemValue,sortValue)}"
      >
        <option v-for="item in productLength" :key="item" :value="item">{{item}}</option>
      </select>
    </div>
  </div>
  <div class="cards">
    <div v-for="item in showProduct" class="mySlider__product_box" :key="item.id">
      <div class="mySlider__image_box">
        <RouterLink
          key={item.id}
          to="/product_details"
          @click="goToTop"
        >
          <img
            class="mySlider__image"
            :src="'src/assets/' + item.imageUrl"
            alt=""
          />
        </RouterLink>
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
          class='mySlider__add_button'
          type="button"
        >
          'Add to cart'
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

  <div class="button">
    <button
      type="button"
      className="button__next_button"
    >
      <img src="../assets/images/left.svg" alt="prev" />
    </button>

        <button
          v-for="item in numberOfPage"
          :key="item"
          type="button"
          @click="showProductOnPage(item, itemValue, sortValue)"
          class='button__page'
        >
          {{item}}
        </button>

    <button
      type="button"
      class="button__prev_button"
    >
      <img src="../assets/images/right.svg" alt="next" />
    </button>
  </div>
</template>