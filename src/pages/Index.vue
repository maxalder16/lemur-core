<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useConfigStore } from '../entities/config/model';

  const configStore = useConfigStore();
  const { config } = storeToRefs(configStore);
</script>

<template>
  <div class="text-[50px] font-bold">Homepage</div>
  <div>{{ config }}</div>
</template>
