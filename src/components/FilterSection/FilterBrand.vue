<template>
  <div class="dropdown me-3">
    <a
      class="text-primary btn border-0 dropdown-toggle"
      id="brand-dropdown"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      برندها
    </a>

    <ul class="dropdown-menu">
      <li class="my-1" v-for="(brand, index) in data.brands" :key="index">
        <div class="form-check ms-2">
          <input
            class="form-check-input"
            type="checkbox"
            :value="brand.name"
            @change="updateSelectedBrands"
          />
          <label class="form-check-label">
            {{ brand.name }}
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import data from "../../data.json";
import { useBrandsStore } from "@/stores/brandsStore";
const store = useBrandsStore();


function updateSelectedBrands(e) {
  const productBrand = e.target.value;
  store.setBrand({ brand: productBrand, checked: e.target.checked });
}
// import { inject } from 'vue';
// const data = inject("data")
// const selectedBrands = inject('selectedBrands');  // Inject here

// const updateSelectedBrands = (brandName, isChecked) => {
//   if (isChecked) {
//     if (!selectedBrands.value.includes(brandName)) {
//       selectedBrands.value.push(brandName);
//     }
//   } else {
//     selectedBrands.value = selectedBrands.value.filter(brand => brand !== brandName);
//   }
// };
</script>

<style>
</style>