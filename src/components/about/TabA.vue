<template>
  <transition name="preloader" >
    <Preloader v-if="isLoader"/>
  </transition>
  <div>
    <h1>Tab A</h1>
    <button @click="togglePreload">Toggle</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Preloader from "../modals/Preloader.vue";

const isLoader = ref(false)

const togglePreload = () => {
  isLoader.value = !isLoader.value
  setTimeout(() => (isLoader.value = !isLoader.value), 500);
}
togglePreload()
</script>
