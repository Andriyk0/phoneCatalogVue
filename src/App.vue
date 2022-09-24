<script lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from './components/HeaderView.vue'
import FooterView from './components/FooterView.vue'
import { defineComponent } from 'vue';
import type { Product } from './types/types';
import { getAllProductInfo, getData } from './api/api';
import { useHotProductsStore } from './stores/hotProducts'

export default defineComponent({
  components: {
    RouterView,
    HeaderView,
    FooterView
  },

  data() {
    return {
      storeHotProducts: useHotProductsStore(),
    }
  },

  methods: {
    async loadAllProduckInfoFromServer(productArr:Product[]) {
    const allProductInfo = await Promise.all(productArr.map(async item => {
      const response = await getAllProductInfo(item.id);
      const newProduct = {
        ...item,
        ...response,
        count: 1,
      };

      return newProduct;
      }));

      this.storeHotProducts.setHotProducts(allProductInfo)
    },
  },

  mounted() {
    const getDataFromServer = async () => {
      try {
        const response = await getData();

        await this.loadAllProduckInfoFromServer(response);
      } catch (error) {
        alert('Error try again');
      }
    };

    getDataFromServer();
  }

})

</script>

<template>
  <HeaderView />
  <RouterView />
  <FooterView />
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
