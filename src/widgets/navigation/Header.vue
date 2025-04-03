<script setup lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';

  const { loginWithRedirect } = useAuth0();

  function handleLogin() {
    loginWithRedirect({
      appState: {
        target: '/',
      },
    });
  }
</script>

<template>
  <div class="flex items-center gap-8 pb-3">
    <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
    <RouterLink :to="{ name: 'Tools' }">Tools</RouterLink>
    <div
      class="cursor-pointer rounded-sm bg-blue p-3 text-white"
      @click="handleLogin()"
    >
      Login
    </div>
  </div>
</template>
