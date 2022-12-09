import { defineStore } from "pinia";
import type { Cartoon } from "../utils/Cartoon.interface";
import {
  collection,
  getDocs,
  addDoc,
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../services/Firebase/firebase-config";
import type { async } from "@firebase/util";

const cartoons: Cartoon[] = [];

export const useCartoonStore = defineStore("useCartoonStore", {
  state: () => ({
    cartoons: cartoons,
    cartoonDetail: {},
    loaded: "",
    updateMsg: "",
    isDelete: false,
    isLoading: false,
  }),

  getters: {
    getFavorite(): Cartoon[] {
      console.log("start get fav");
      return this.cartoons.filter((c) => c.isFav);
    },
  },

  actions: {
    //////////// this function read, write, update, delete, favorite using with json server

    async fetchCartoons(id?: number | string) {
      this.isLoading = true;
      if (id == null || id == undefined) {
        /// fetch cartoon lists
        const res = await fetch("http://localhost:3000/cartoons");
        const data = await res.json();
        this.cartoons = data;
        this.isLoading = false;
        return (this.loaded = "loaded");
      } else {
        /// fetch cartoon details
        const res = await fetch("http://localhost:3000/cartoons/" + id);
        const data = await res.json();

        this.cartoonDetail = data;
        this.isLoading = false;
        return (this.loaded = "loaded");
      }
    },

    async createCartoon(cartoon: any) {
      this.isLoading = true;

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
          isFav: cartoon.isFav,
        }),
      };

      const response = await fetch(
        "http://localhost:3000/cartoons",
        requestOptions
      );

      if (response.ok) {
        const data = await response.json();

        this.cartoons = data;
        this.isLoading = false;

        return "success";
      } else {
        this.isLoading = false;

        return "fail";
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
          this.isDelete = true;
        } else {
          console.log("failed");
          this.isDelete = false;
        }
      });
      return this.isDelete;
    },

    async updateCartoon(id: number | string, cartoon: any) {
      console.log("start update data ......");

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
          isFav: cartoon.isFav,
        }),
      };

      const response = await fetch(
        "http://localhost:3000/cartoons/" + id,
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        this.cartoonDetail = data;
        return (this.updateMsg = "success");
      } else {
        return (this.updateMsg = "fail");
      }
    },

    async toggleFavorite(id: number | string, isFav: boolean) {
      const requestOptions = {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ isFav: (isFav = !isFav) }),
      };

      const response = await fetch(
        "http://localhost:3000/cartoons/" + id,
        requestOptions
      );
      if (response.ok) {
        const data = await response.json();
        this.cartoonDetail = data;
        return (this.updateMsg = "success");
      } else {
        return (this.updateMsg = "fail");
      }
    },

    ///////////////////////////////////////////////////////////////////////////////////////

    //////////// this function read, write, update, delete, favorite using with firebase firestore database and some function in services/Firebase/
    async fetchCartoonsFB(id?: number | string) {
      this.isLoading = true;

      if (id == "" || id == null || id == undefined) {
        const tmpCartoon: Cartoon[] = [];

        const querySnapshot = await getDocs(collection(db, "cartoons"));

        querySnapshot.forEach((doc) => {
          const tmp: Cartoon = {
            id: doc.id,
            title: doc.data().title,
            year: doc.data().year,
            rating: doc.data().rating,
            runtime_in_minutes: doc.data().runtime_in_minutes,
            isFav: doc.data().isFav,
            image: doc.data().image,
            genre: doc.data().genre,
            episodes: doc.data().episodes,
            creator: doc.data().creator,
          };

          tmpCartoon.push(tmp);
        });

        this.cartoons = tmpCartoon;

        this.isLoading = false;

        return (this.loaded = "loaded");
      } else {
        try {
          const docRef = doc(db, "cartoons", `${id}`);

          const docSnap = await getDoc(docRef);

          this.cartoonDetail = docSnap.data() as object;

          this.isLoading = false;

          return (this.loaded = "loaded");
        } catch (error) {
          console.log(error);

          this.isLoading = false;
        }
      }
    },

    async updateCartoonFB(id: number | string, cartoon: any) {
      console.log("start .....");

      return new Promise((resolve, reject) => {
        const docRef = doc(db, "cartoons", `${id}`);

        const data = {
          title: cartoon.title,
          year: cartoon.year,
          creator: cartoon.creator,
          rating: cartoon.rating,
          genre: cartoon.genre,
          runtime_in_minutes: cartoon.runtime,
          episodes: cartoon.episode,
          image: cartoon.image,
          isFav: cartoon.isFav,
        };

        console.log("start ..........");
        updateDoc(docRef, data)
          .then(async (res) => {
            const docSnap = await getDoc(docRef);
            this.cartoonDetail = docSnap.data() as object;

            this.updateMsg = "success";
            console.log("start ...............");
            resolve(res);
          })
          .catch((err) => {
            this.updateMsg = "fail";
            reject(err);
          });
      });
    },

    async deleteCartoonFB(id: number | string) {
      console.log('start delete...');
     return new Promise((resolve, reject) => {
  
      const docRef = doc(db, "cartoons", `${id}`);
      console.log('start delete......');
      deleteDoc(docRef)
        .then(async (res) => {
          console.log("Document has been deleted successfully.");
          this.isDelete = true
          resolve(res);
        })
        .catch((error) => {
          console.log(error);
          this.isDelete = false;
          reject(error);
        });
        console.log('start delete...//');
        console.log('this.isDelete:: '+this.isDelete);
        
       this.isDelete

       this.cartoons = this.cartoons.filter((cartoon) => {
        return cartoon.id !== id;
      });
    })
    },
//// Good evening bong.
/// I have friend that want to apply  with 
    async toggleFavoriteFB(id: number | string, isFav: boolean) {
      return new Promise((resolve, reject) => {
        const docRef = doc(db, "cartoons", `${id}`);

        const data = {
          isFav: (isFav = !isFav),
        };

        updateDoc(docRef, data)
          .then(async (res) => {
            const docSnap = await getDoc(docRef);
            this.cartoonDetail = docSnap.data() as object;

            this.updateMsg = "success";
            resolve(res);
          })
          .catch((err) => {
            this.updateMsg = "fail";
            reject(err);
          });
      });
    },

    ///////////////////////////////////////////////////////////////////////////////////////
  },
});
