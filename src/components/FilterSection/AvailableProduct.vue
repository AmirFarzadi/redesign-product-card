<template>
  <div class="form-check form-switch me-3">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
      v-model="filterByAvailability"
      @change="$emit('updateAvailabilityFilter',filterByAvailability)"
    />
    <label class="form-check-label text-muted" for="flexSwitchCheckDefault">
      فقط کالاهای موجود
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";
const filterByAvailability = ref(false);
</script>

<style>
</style>