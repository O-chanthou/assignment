<template>
  <div class="home">
    <!-- Cartoons list -->
    <div class="grid-container">
      <CartoonsList v-for="cartoon in cartoons" :cartoon="cartoon" />
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import CartoonsList from "@/components/cartoon/CartoonsList.vue";
import { useCartoonStore } from "../stores/CartoonStore";
import { ref, provide, onMounted } from "vue";

const cartoonStore = useCartoonStore();

const { cartoons } = storeToRefs(cartoonStore);

cartoonStore.fetchCartoons();

</script>
