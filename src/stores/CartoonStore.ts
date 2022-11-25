import { defineStore } from "pinia";

export const useCartoonStore = defineStore("useCartoonStore", {
  state: () => ({
    cartoons: [],
  }),
  getters: {},
  actions: {
    async fetchCartoons () {
        console.log('start fetch....');

        const res = await fetch("http://localhost:3000/cartoons");
        // const res = await fetch("https://api.sampleapis.com/cartoons/cartoons2D/");
        const data = await res.json()
  
        this.cartoons = data;
        console.log('fetch completed....');
        },
  },
});
