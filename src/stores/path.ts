import { defineStore } from 'pinia'

export const usePathStore = defineStore({
  id: 'path',
  state: () => ({
    path: '',
  }),
  actions: {
    setPath(path:string) {
      this.path = path;
    }
  }
})
