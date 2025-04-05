<script setup lang="ts">
  import type { HomepageContent } from '../entities/config/lib';
  import { useConfigStore } from '../entities/config/model';
  import { computed } from 'vue';

  const configStore = useConfigStore();
  const { getPageConfig } = configStore;

  const pageContent = computed(() => getPageConfig('home') as HomepageContent);
</script>

<template>
  <div class="text-[50px] font-bold">Homepage</div>
  <div>{{ pageContent.title }}</div>
  <div>{{ pageContent.subtitle }}</div>
</template>
