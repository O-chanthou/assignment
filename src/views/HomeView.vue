<template>
  <div class="home">
    <div class="btn-container">
      <button
        v-for="(tab, i) in tabs"
        :key="tab.name"
        :class="{ active: activeTab.name === tab.name }"
        @click="activeTab = tabs[i]"
      >{{$t(`home.${tab.name}`)}}</button>
    </div>

    <keep-alive>
      <component :is="activeTab.comp"></component>
    </keep-alive>

    
  </div>
</template>

<script setup>
import Filter from "@/components/cartoon/Filter.vue";
import CartoonFavsList from "@/components/cartoon/CartoonFavsList.vue";
import AllCartoon from "@/components/cartoon/AllCartoon.vue";
import { shallowRef } from "vue";

const tabs = [
  { name: "all-cartoon", comp: AllCartoon },
  { name: "favorite", comp: CartoonFavsList },
  { name: "filter", comp: Filter },
];

const activeTab = shallowRef(tabs[0]);
</script>

<style scoped></style>
