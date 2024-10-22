import { defineStore } from "pinia";

export const useBrandsStore = defineStore("brands", {
  state: () => ({
    selectedBrands: [],
  }),
  actions: {
    setBrand({ brand, checked }) {
        if(checked && !this.selectedBrands.includes(brand)){
            this.selectedBrands.push(brand)
        }else if(!checked){
            this.selectedBrands = this.selectedBrands.filter(item => item != brand)
        }
        console.log(this.selectedBrands);
    },
},
});
