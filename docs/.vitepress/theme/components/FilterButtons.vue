<script setup lang="ts">
import { useFilter } from "../../useFilter";

const { allScenarios, selectedFilter, selectFilter } = useFilter();
</script>

<template>
  <div class="filter-buttons">
    <button
      v-for="scenario in allScenarios"
      :key="scenario.id"
      @click="selectFilter(scenario)"
      class="filter-button"
    >
      {{ selectedFilter.id === scenario.id ? "●" : "○" }} {{ scenario.name }}
    </button>
  </div>
</template>

<style scoped>
.filter-buttons {
  display: flex;
  column-gap: 8px;
}
</style>
