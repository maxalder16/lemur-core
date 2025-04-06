<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue';
  import { Header } from '../widgets/navigation';

  import { useConfigStore } from '../entities/config/model';
  import { supabaseConnector } from '../connectors/supabaseConnector';
  import { useUserStore } from '../entities/user';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const configStore = useConfigStore();
  const { initContent } = configStore;

  const userStore = useUserStore();
  const { fetchUser } = userStore;

  const configLoading = ref(true);

  onMounted(async () => {
    supabaseConnector.getInstance();
    await initContent();
    await fetchUser();
    configLoading.value = false;
  });

  router.beforeEach(to => {
    if (!to.name) router.push({ name: 'Home' });
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
