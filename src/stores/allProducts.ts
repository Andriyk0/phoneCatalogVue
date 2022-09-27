import { defineStore } from 'pinia'
import type { Product } from '@/types/types';

export type RootState = {
  allProduct: Product[];
  phones:Product[];
  tablets: Product[];
  acsessories: Product[];
}

export const useAllProductsStore = defineStore({
  id: 'hotProducts',
  state: () => ({
    allProduct: [],
    phones: [],
    tablets: [],
    acsessories: [],
  } as RootState),

  actions: {
    setAllProduct(item:Product[]) {
      this.allProduct = item;
      this.phones = item.filter(product => product.type === 'phone');
      this.tablets = item.filter(product => product.type === 'tablet');
      this.acsessories = item.filter(product => product.type === 'acsessori');
    },
  }
})