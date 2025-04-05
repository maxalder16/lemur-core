<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import { Header } from '../widgets/navigation';

  import { useConfigStore } from '../entities/config/model';

  const configStore = useConfigStore();
  const { initContent } = configStore;

  const configLoading = ref(true);

  onMounted(async () => {
    await initContent();
    configLoading.value = false;
  });

  const loading = computed(() => configLoading.value);
</script>

<template>
  <Header />
  <div class="p-10">
    <div v-if="loading">Loading...</div>
    <RouterView v-else />
  </div>
</template>
