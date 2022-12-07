<template>
  <div class="home">
    <div class="btn-container">
      <AllCartoon />
      <CartoonFavsList />
      <Filter :cartoons="cartoons" />
    </div>
    <div class="grid-container">
      <CartoonsList v-for="cartoon in cartoons" :cartoon="cartoon" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import CartoonsList from "@/components/cartoon/CartoonsList.vue";
import { useCartoonStore } from "@/shared/stores/CartoonStore";
import Filter from "@/components/Filter.vue";
import CartoonFavsList from "@/components/cartoon/CartoonFavsList.vue";
import AllCartoon from "@/components/cartoon/AllCartoon.vue";

const cartoonStore = useCartoonStore();
const { cartoons } = storeToRefs(cartoonStore);
cartoonStore.fetchCartoons();
</script>

<style scoped>
</style>
