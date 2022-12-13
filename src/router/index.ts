import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/home'
    },
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/manage-cartoon",
      name: "manage",
      component: () => import("@/views/ManageCartoonView.vue"),
    },
    {
      path: "/manage-cartoon/add-cartoon",
      name: "add",
      component: () => import("@/views/AddCartoonView.vue"),
    },
    {
      path: "/manage-cartoon/update-delete-cartoon",
      name: "update-delete",
      component: () => import("../components/cartoon/manage-cartoon/delete-update-cartoon/AllCartoonForUpdateDelete.vue"),
    },
    {
      path: "/manage-cartoon/update-delete-cartoon/update/:id/:title",
      name: "update",
      component: () => import("@/components/cartoon/manage-cartoon/delete-update-cartoon/UpdateCartoon.vue"),
      props: true,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: "/cartoons/:id/:title",
      name: "details",
      component: () => import("../components/cartoon/CartoonDetails.vue"),
      props: true,
    },
    {
      path: "/:pathMatch(.*)",
      name: "not-found",
      component: () => import("../components/PageNotFound.vue"),
    },
  ],
});

export default router;
