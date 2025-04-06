<script setup lang="ts">
  import { useConfigStore } from '../entities/config/model';
  import { computed } from 'vue';
  import { useUserStore } from '../entities/user';
  import { storeToRefs } from 'pinia';

  const configStore = useConfigStore();
  const { getPageConfig, formatFields } = configStore;

  const pageFields = computed(() => getPageConfig('home'));
  const fields = computed(() => formatFields(pageFields.value));

  const userStore = useUserStore();
  const { user } = storeToRefs(userStore);
</script>

<template>
  <div class="text-[50px] font-bold">Homepage</div>
  <div>{{ fields['title'] }}</div>
  <div>{{ fields['subtitle'] }}</div>
  {{ user }}!!!
</template>
