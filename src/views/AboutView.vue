<template>
  <div class="tab-content">
    <h3>page about</h3>
    <button
      v-for="(tab, i) in tabs"
      :key="tab.name"
      :class="{ active: currentTab.name === tab.name }"
      @click="currentTab = tabs[i]"
    >
      {{ tab.name }}
    </button>

   <keep-alive>
    <component :is="currentTab.comp" />
   </keep-alive>

  </div>
</template>

<script setup>
import TabA from "@/components/about/TabA.vue";
import TabB from "@/components/about/TabB.vue";
import TabC from "@/components/about/TabC.vue";
import { shallowRef } from "vue";

const tabs = [
  { name: "TabA", comp: TabA },
  { name: "TabB", comp: TabB },
  { name: "TabC", comp: TabC },
];
const currentTab = shallowRef(tabs[0]);
</script>

<style scoped>
.tab-content {
  margin-top: 30px;
  text-align: center;
}
</style>
