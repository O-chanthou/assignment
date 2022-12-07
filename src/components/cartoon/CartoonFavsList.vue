<template>
    <div class="favorite">
        <button @click="getFavoriteCartoon">{{$t('home.favorite')}}</button>
        <div class="grid-container">
      <CartoonsList v-for="cartoon in cartoons" :cartoon="cartoon" />
    </div>
    </div>
</template>

<script setup>
import CartoonsList from "./CartoonsList.vue";
import { useCartoonStore } from '@/shared/stores/CartoonStore';
import { ref } from 'vue';

const cartoons = ref([])

const cartoonStore = useCartoonStore()

const getFavoriteCartoon = () => {
  cartoons.value = cartoonStore.getFavorite
  return cartoons
}

</script>

<style  scoped>

</style>