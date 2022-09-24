import { defineStore } from 'pinia'
import type { Product } from '@/types/types';

export type RootState = {
  hotProducts: Product[];
}

export const useHotProductsStore = defineStore({
  id: 'hotProducts',
  state: () => ({
    hotProducts: [],
  } as RootState),
  actions: {
    setHotProducts(item:Product[]) {
      this.hotProducts = item.filter(item => item.discount > 0);
    }
  }
})