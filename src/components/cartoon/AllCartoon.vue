<template>
  <div class="all-cartoon">
    <div class="grid-container">
      <CartoonsList v-for="cartoon in cartoons" :cartoon="cartoon" />
    </div>
  </div>
</template>

<script setup>
import CartoonsList from "./CartoonsList.vue";
import { useCartoonStore } from "@/shared/stores/CartoonStore";
import { storeToRefs } from "pinia";

const cartoonStore = useCartoonStore();
const { cartoons } = storeToRefs(cartoonStore);
cartoonStore.fetchCartoons();
</script>
