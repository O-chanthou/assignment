<template>
  <div class="home">

    <div class="btn-container">
      <button
        v-for="(tab, i) in tabs"
        :key="tab.name"
        :class="{ active: activeTab.name === tab.name }"
        class="btn"
        @click="activeTab = tabs[i]"
      >{{$t(`home.${tab.name}`)}}</button>
    </div>

    <keep-alive>
      <component :is="activeTab.comp"></component>
    </keep-alive>
    
  </div>
</template>

<script setup>
import CartoonFavsList from "@/components/cartoon/CartoonFavsList.vue";
import AllCartoon from "@/components/cartoon/AllCartoon.vue";
import { shallowRef } from "vue";

const tabs = [
  { name: "all-cartoon", comp: AllCartoon },
  { name: "favorite", comp: CartoonFavsList },
];

const activeTab = shallowRef(tabs[0]);
</script>

<style scoped>
.btn-container button.active {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background: #499f45;
  color: azure;
  font-weight: 700;
}
</style>
