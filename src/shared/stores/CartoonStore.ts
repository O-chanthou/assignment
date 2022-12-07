import { defineStore } from "pinia";
import type { Cartoon } from "../utils/Cartoon.interface"

const cartoons: Cartoon[] = [];

export const useCartoonStore = defineStore("useCartoonStore", {
  state: () => ({
    cartoons: cartoons,
    cartoonDetail: {},
    loaded: '',
    updateMsg: '',
    isDelete: false
  }),

  getters: {
    getFavorite(): Cartoon[] {
      console.log('start get fav');
      // return 'sdaflkasjfklhskdf'
      return this.cartoons.filter((c) => c.isFav)
    }
  },
  
  actions: {
    async fetchCartoons(id?: number | string) {
      if (id == null || id == undefined) {
    
        /// fetch cartoon lists
        const res = await fetch("http://localhost:3000/cartoons");
        // const res = await fetch("https://api.sampleapis.com/cartoons/cartoons2D/");
        const data = await res.json();
        this.cartoons = data;
        return this.loaded = 'loaded'
      } else {
        
        /// fetch cartoon details
        const res = await fetch("http://localhost:3000/cartoons/" + id);
        // const res = await fetch("https://api.sampleapis.com/cartoons/cartoons2D/");
        const data = await res.json();

        this.cartoonDetail = data;
        return this.loaded = 'loaded'
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
          isFav: cartoon.isFav
        }),
      };

      const response = await fetch(
        "http://localhost:3000/cartoons",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();
        this.cartoons = data
       return 'success'
      } else {
       return 'fail'
      }
    },

    async deleteCartoon(id: number | string) {
      this.cartoons = this.cartoons.filter((cartoon) => {
        return cartoon.id !== id;
      });

      await fetch("http://localhost:3000/cartoons/" + id, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          console.log("deleted");
          this.isDelete = true
        } else {
          console.log('failed');
          this.isDelete = false
        }
      })
      return this.isDelete
    },

    async updateCartoon(id: number | string, cartoon: any) {
      console.log('start update data ......');
    
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: cartoon.title,
          year: cartoon.year,
          creator: cartoon.creator,
          rating: cartoon.rating,
          genre: cartoon.genre,
          runtime_in_minutes: cartoon.runtime,
          episodes: cartoon.episode,
          image: cartoon.image,
          isFav: cartoon.isFav
        }),
      };
    
      const response = await fetch(
        "http://localhost:3000/cartoons/"+id,
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        this.cartoonDetail = data
       return this.updateMsg = 'success'
      } else {
       return this.updateMsg = 'fail'
      }
      
    },

    async toggleFavorite(id: number | string, isFav: boolean) {
      console.log('start favorite cartoon ......');
  
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isFav: isFav = !isFav }),
      };
    
      const response = await fetch(
        "http://localhost:3000/cartoons/"+id,
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        this.cartoonDetail = data
       return this.updateMsg = 'success'
      } else {
       return this.updateMsg = 'fail'
      }
      
    } 
  },
});
