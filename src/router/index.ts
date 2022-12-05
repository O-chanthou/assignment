import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import CartoonDetails from '@/components/cartoon/CartoonDetails.vue'
import CreateCartoonView from '@/views/AddCartoonView.vue'
import ManageCartoonView from '@/views/ManageCartoonView.vue'
import AllCartoonForUpdateDelete from '@/components/cartoon/manage-cartoon/delete-update-cartoon/AllCartoonForUpdateDelete.vue'
import UpdateCartoon from '@/components/cartoon/manage-cartoon/add-cartoon/UpdateCartoon.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/manage-cartoon',
      name: 'manage',
      component: ManageCartoonView
    },
    {
      path: '/manage-cartoon/add-cartoon',
      name: 'add',
      component: CreateCartoonView
    },
    {
      path: '/manage-cartoon/update-delete-cartoon',
      name: 'update-delete',
      component: AllCartoonForUpdateDelete
    },
    {
      path: '/manage-cartoon/update-delete-cartoon/update/:id/:title',
      name: 'update',
      component: UpdateCartoon,
      props: true
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
