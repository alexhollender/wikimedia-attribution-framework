<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string;
    description?: string | string[];
    url: string;
    variant?: "link" | "default";
  }>(),
  {
    variant: "link",
  }
);
</script>

<template>
  <component
    :is="variant === 'link' ? 'a' : 'div'"
    :href="variant === 'link' ? url : undefined"
    class="card"
  >
    <p class="card-title">{{ title }}</p>
    <div class="card-description">
      <ul v-if="Array.isArray(description)">
        <li v-for="item in description" :key="item">{{ item }}</li>
      </ul>
      <p v-else-if="description">{{ description }}</p>
    </div>
  </component>
</template>

<style lang="less">
@import (reference) "@wikimedia/codex-design-tokens/theme-wikimedia-ui.less";
@import (reference) "@wikimedia/codex/mixins/link.less";
.card {
  display: block;
  padding: @spacing-150;
  border: 1px solid var(--vp-c-divider);
  border-radius: @border-radius-base;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

a.card:hover {
  border-color: var(--vp-c-brand-1);
}

.card-title {
  margin: 0 0 @spacing-50 0;
  font-weight: @font-weight-bold;
}

.vp-doc a p.card-title {
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.card-description {
  margin: 0;
  color: var(--vp-c-text-2);
  line-height: @line-height-medium;
}
</style>
