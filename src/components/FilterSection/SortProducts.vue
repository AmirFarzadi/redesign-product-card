<template>
  <i class="bi bi-sort-down me-2 fs-5"></i>
  <select v-model="selectedSort" @change="$emit('updateSort',selectedSort)" class="form-select-sm" aria-label="Default select example">
    <option value="" disabled >مرتب سازی</option>
    <option value="newest">جدیدترین</option>
    <option value="oldest">قدیمی ترین</option>
    <option value="mostExpensive">گرانترین</option>
    <option value="cheapest">ارزانترین</option>
    <option value="Bestselling">پرفروش ترین</option>
  </select>
</template>

<script setup>
import { ref } from 'vue';
const selectedSort = ref('')
</script>

<style>
</style>