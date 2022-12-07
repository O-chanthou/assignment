<template>
  <div>
    <!-- <button
      class="btn-filter"
      @click="sortYear(isSort)"
      :title="$t('create.year')"
      :class="{ active: isSort }"
    >
      {{ $t("home.filter") }}
    </button> -->
    <div class="grid-container">
      <CartoonsList v-for="cartoon in cartoons" :cartoon="cartoon" />
    </div>
  </div>
</template>

<script setup>
import CartoonsList from "./CartoonsList.vue";
import { useCartoonStore } from "@/shared/stores/CartoonStore";
import { storeToRefs } from "pinia";
import { ref, onMounted } from "vue";

const isFilter = ref(false)

const cartoonStore = useCartoonStore();
const { cartoons } = storeToRefs(cartoonStore);

cartoonStore.fetchCartoons().then(res => {
  if (res === 'loaded') {
   cartoons.value.sort((a, b) => {
    return b.year - a.year
   })
  }
})
</script>

<style>
/* filter*/
.btn-container {
  margin: 20px 0 0 15px;
  text-align: left;
  display: flex;
}
.btn-container button {
  display: inline-block;
  margin-left: 10px;
  background: #fff;
  border: 2px solid #555;
  border-radius: 5px;
  padding: 4px 8px;
  cursor: pointer;
  font-size: 1em;
}
/* .btn-filter:hover {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background: #a8ea58;
} */
.btn-filter.active {
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background: #a8ea58;
}
</style>
