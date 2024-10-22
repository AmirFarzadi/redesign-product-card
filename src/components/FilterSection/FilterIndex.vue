<template>
    <div id="filterBox" class="container mt-3 mb-3 border p-3 d-flex justify-content-between">
    <div id="rightBox" class="d-flex align-items-center justify-content-start">
      <FilterBrand/>
      <AvailableProduct/>
      <FilterBtn/>
    </div>
    <div id="leftBox" class="d-flex align-items-center">
      <SortProducts />
    </div>
  </div>
</template>


<script setup>
import AvailableProduct from './AvailableProduct.vue';
import FilterBrand from './FilterBrand.vue';
import SortProducts from './SortProducts.vue';
import FilterBtn from './FilterBtn.vue'

</script>