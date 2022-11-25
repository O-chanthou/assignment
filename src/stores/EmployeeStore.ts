import { defineStore } from "pinia";

export const useEmployeeStore = defineStore('employeeStore', {
    state: () => ({
        employees: [],
        isLoading: false
    }),

    getters: {
      // favs() {
      //   return this.employees.filter(t => t.isFav)
      // }
    },

    actions: {
     async fetchEmployees () {
      console.log('start fetch....');
      this.isLoading = true;
      
      const res = await fetch("http://localhost:3000/cartoons");
      const data = await res.json()

      this.employees = data;
      this.isLoading = false;
      console.log('fetch completed....');
      },
    } 
})