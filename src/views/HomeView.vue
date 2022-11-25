<template>
  <div class="home">
    <!-- button filter -->
    <!-- <div class="filter">
        <button >All Employees</button>
        <button >Marked Employees</button>
        <button >Add Employee</button>
    </div> -->

    <!-- Cartoons list -->
    <div class="grid-container">
      <CartoonsList v-for="cartoon in cartoons" :cartoon="cartoon" />
    </div>
  </div>
</template>

<script lang="ts">
import { storeToRefs } from "pinia";
import CartoonsList from "@/components/cartoon/CartoonsList.vue";
import { useCartoonStore } from "../stores/CartoonStore";
import { provide } from "vue";

export default {
  components: { CartoonsList },

  setup() {
    const cartoonStore = useCartoonStore();

    const { cartoons } = storeToRefs(cartoonStore);

    cartoonStore.fetchCartoons();

    // onMounted(() => {
    //   cartoonStore.fetchCartoons()
    // });

    provide("cartoon", 'Ben10');

    return { cartoons };
  },
};
</script>
