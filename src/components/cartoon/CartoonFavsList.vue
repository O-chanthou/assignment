<template>
    <div class="favorite">
        <button @click="getFavoriteCartoon">{{$t('home.favorite')}}</button>
    </div>
</template>

<script setup>
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