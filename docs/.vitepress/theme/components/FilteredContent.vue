<script setup lang="ts">
import { computed } from 'vue'
import { useFilter } from '../../useFilter'

const props = defineProps<{
  scenario: string | string[]
}>()

const { selectedFilter } = useFilter()

const isVisible = computed(() => {
  if (Array.isArray(props.scenario)) {
    return props.scenario.includes(selectedFilter.value.id) || selectedFilter.value.id === 'all'
  }
  return props.scenario === selectedFilter.value.id || selectedFilter.value.id === 'all'
})
</script>

<template>
  <div v-if="isVisible">
    <slot />
  </div>
</template>

