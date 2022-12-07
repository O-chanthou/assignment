<template>
    <div class="favorite">
        <!-- <button @click="">{{$t('home.favorite')}}</button> -->
        <button>All Cartoon</button>
    </div>
    <!-- <div class="grid-container">
      <CartoonsList v-for="cartoon in cartoons" :cartoon="cartoon" />
    </div> -->
</template>

<script setup>
import { useCartoonStore } from '@/shared/stores/CartoonStore';
import { storeToRefs } from 'pinia';
import CartoonsList from "@/components/cartoon/CartoonsList.vue";

const cartoonStore = useCartoonStore();
const { cartoons } = storeToRefs(cartoonStore);
cartoonStore.fetchCartoons();
</script>