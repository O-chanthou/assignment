<template>
  <div class="btn-filter">
    <button
      v-for="(btn, i) in btnFilter"
      :key="btn.name"
      @click="
        btn.click(i),
          activeTab == btnFilter[i]
            ? (activeTab = !btnFilter[i])
            : (activeTab = btnFilter[i])
      "
      :class="{ active: activeTab.name === btn.name }"
    >
      {{ $t(`home.${btn.name}`) }}
    </button>
  </div>
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
import { ref, shallowRef } from "vue";

const isTitle = ref(false);
const isYear = ref(false);
const originTitleCartoons = [];
const originYearCartoons = [];

const cartoonStore = useCartoonStore();

const { cartoons } = storeToRefs(cartoonStore);

cartoonStore.fetchCartoons().then((res) => {
  if (res === "loaded") {
    console.log("start fetch data ......");
    cartoons.value.forEach((e) => {
      originTitleCartoons.push(e);
      originYearCartoons.push(e);
    });
  }
});

const filterTitle = () => {
  if (isTitle.value == false) {
    cartoons.value.sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    isTitle.value = !isTitle.value;
  } else {
    cartoons.value = [];
    isTitle.value = !isTitle.value;
    return originTitleCartoons.forEach((e) => cartoons.value.push(e));
  }

  if (isYear.value == true) isYear.value = false
};

const filterYear = () => {
  isTitle.value = !isTitle.value
  if (isYear.value == false) {
    cartoons.value.sort((a, b) => {
      return b.year - a.year;
    });
    isYear.value = !isYear.value;
  } else {
    cartoons.value = [];
    isYear.value = !isYear.value;
    return originYearCartoons.forEach((e) => cartoons.value.push(e));
  }

  if (isTitle.value == true) isTitle.value = false
};

const btnFilter = [
  { name: "filter-by-title", click: filterTitle },
  { name: "filter-by-year", click: filterYear },
];

const activeTab = shallowRef([
  { name: "filter-by-title" },
  { name: "filter-by-year" },
]);
</script>

<style>
.btn-filter {
  padding: 5px;
  margin: 15px 0 0 20px;
}
.btn-filter button {
  padding: 5px;
  margin-right: 10px;
  background: #eee;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
}

.btn-filter button.active {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background: #a8ea58;
  font-weight: 600;
  border: 2px solid;
}
</style>
