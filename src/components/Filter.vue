<template>
  <div>
    <button
      class="btn-filter"
      @click="sortYear(isSort)"
      :title="$t('create.year')"
      :class="{ active: isSort }"
    >
      {{ $t("home.filter") }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
  cartoons: Array,
});
const isSort = ref(false);

const sortYear = (value) => {
  if (value == false) {
    props.cartoons.sort((a, b) => {
      return b.year - a.year;
    });
    isSort.value = true;
  } else {
    props.cartoons.sort((a, b) => {
      return a.year - b.year;
    });
    isSort.value = false;
  }
};
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
