import AcsessoriesPageVue from '@/pages/AcsessoriesPage.vue'
import CheckoutPageVue from '@/pages/CheckoutPage.vue'
import HomePageVue from '@/pages/HomePage.vue'
import LikedProductPageVue from '@/pages/LikedProductPage.vue'
import PhonesPageVue from '@/pages/PhonesPage.vue'
import TabletsPageVue from '@/pages/TabletsPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePageVue
    },
    {
      path: '/phones',
      name: 'phones',
      component: PhonesPageVue
    },
    {
      path: '/tablets',
      name: 'tablets',
      component: TabletsPageVue
    },
    {
      path: '/acsessories',
      name: 'acsessories',
      component: AcsessoriesPageVue
    },
    {
      path: '/liked_product',
      name: 'liked_product',
      component: LikedProductPageVue
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutPageVue
    }
  ]
})

export default router
