import type { Product } from '@/types/types';
import { defineStore } from 'pinia'

export type RootState = {
  likedProduct: Product[];
}

export const useLikedProductStore = defineStore({
  id: 'liked_product',
  state: () => ({
    likedProduct: [],
  } as RootState),
  actions: {
    setLikedProduct(product:Product) {
      this.likedProduct.push(product);
    },

    deleteLikedProduct(product:Product) {
      this.likedProduct = this.likedProduct.filter(item => item.id !== product.id)
    }
  }
})