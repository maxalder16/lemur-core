<script setup lang="ts">
  import { useConfigStore } from '../entities/config/model';
  import { computed } from 'vue';
  import { UIHeading } from '../shared/ui';
  const configStore = useConfigStore();
  const { getPageConfig, formatFields } = configStore;

  const pageFields = computed(() => getPageConfig('home'));
  const fields = computed(() => formatFields(pageFields.value));
</script>

<template>
  <UIHeading size="3xl">Welcome to Lemur Core!</UIHeading>
  <div>{{ fields['title'] }}</div>
  <div>{{ fields['subtitle'] }}</div>
</template>
