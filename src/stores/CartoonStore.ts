import { defineStore } from "pinia";

export const useCartoonStore = defineStore("useCartoonStore", {
  state: () => ({
    cartoons: [],
    cartoonDetail: {},
  }),
  getters: {},
  actions: {
    async fetchCartoons(id?: number | string) {
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

    async createCartoon(cartoon: any) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: cartoon.title,
          year: cartoon.year,
          creator: cartoon.creator,
          rating: cartoon.rating,
          genre: cartoon.genre,
          runtime_in_minutes: cartoon.runtime_in_minutes,
          episodes: cartoon.episodes,
          image: cartoon.image,
          id: cartoon.id,
        }),
      };

      const response = await fetch("http://localhost:3000/cartoons",requestOptions)
      console.log(response);
      const data = await response.json();
      console.log(data);
    },

   async deleteCartoon(id: number|string) {
    await fetch("http://localhost:3000/cartoons/" + id, {
      method: 'DELETE'
    })
   }
  },
});
