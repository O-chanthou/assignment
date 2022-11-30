import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CartoonDetails from '@/components/cartoon/CartoonDetails.vue'
import CreateCartoonView from '@/views/AddCartoonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/add-cartoon',
      name: 'add',
      component: CreateCartoonView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/cartoons/:id/:title',
      name: 'details',
      component: CartoonDetails,
      props: true
    }
  ]
})

export default router
