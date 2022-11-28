import { defineStore } from "pinia";

export const useCartoonStore = defineStore("useCartoonStore", {
  state: () => ({
    cartoons: [],
    cartoonDetail: {}
  }),
  getters: {},
  actions: {
    async fetchCartoons(id?: number | string) {
      console.log('fetch data ======>>>> ' + id);
      
     if (id == null || id == undefined) {
      /// fetch cartoon lists
      const res = await fetch("http://localhost:3000/cartoons");
      // const res = await fetch("https://api.sampleapis.com/cartoons/cartoons2D/");
      const data = await res.json();

      this.cartoons = data;
     } else {
      /// fetch cartoon details
      const res = await fetch("http://localhost:3000/cartoons/" + id);
      // const res = await fetch("https://api.sampleapis.com/cartoons/cartoons2D/");
      const data = await res.json();

      this.cartoonDetail = data;
      
     }
    },
  },
});
