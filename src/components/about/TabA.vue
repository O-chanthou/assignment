<template>
  <div>
    <h1>Tab A</h1>
    <p v-for="a in arr1">{{a.year}}</p>
    <button @click="sort">sort</button>
    <p>{{arr2}}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const arr2 = ref([])
const arr1 = [
  {
    title: "test00000",
    year: 10,
  },
  {
    title: "test00011111",
    year: 30,
  },
  {
    title: "testtttt",
    year: 20,
  },
];

const sort = () => {
  arr1.sort((a, b) => {
    return b.year- a.year;
  });

  arr1.forEach((e) => {
    console.log(`${e.year}`);
    return  arr2.value.push(e.year)
  });
};
</script>
