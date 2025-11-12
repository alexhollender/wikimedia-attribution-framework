<script setup lang="ts">
defineProps<{
  title: string;
  description?: string;
  url: string;
}>();
</script>

<template>
  <a :href="url" class="card">
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
  </a>
</template>

<style scoped>
.card {
  display: block;
  padding: 1.5rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
}

.card-title {
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.card-description {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: 1.5;
}
</style>
