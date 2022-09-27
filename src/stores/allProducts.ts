import { defineStore } from 'pinia'
import type { Product } from '@/types/types';

export type RootState = {
  allProduct: Product[];
}

export const useAllProductsStore = defineStore({
  id: 'hotProducts',
  state: () => ({
    allProduct: [],
  } as RootState),
  actions: {
    setAllProduct(item:Product[]) {
      this.allProduct = item;
    },
  }
})