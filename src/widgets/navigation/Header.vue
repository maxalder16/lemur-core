<script setup lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  function handleLogin(signup?: boolean) {
    loginWithRedirect({
      appState: {
        target: '/',
      },
      authorizationParams: signup
        ? {
            screen_hint: 'signup',
          }
        : undefined,
    });
  }

  function handleLogout() {
    logout({
      logoutParams: {
        returnTo: window.location.origin,
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
      v-if="!isAuthenticated"
    >
      Login
    </div>
    <div
      class="cursor-pointer rounded-sm bg-blue p-3 text-white"
      @click="handleLogin(true)"
      v-if="!isAuthenticated"
    >
      Sign up
    </div>
    <div
      class="cursor-pointer rounded-sm bg-blue p-3 text-white"
      @click="handleLogout()"
      v-if="isAuthenticated"
    >
      Log out
    </div>
  </div>
</template>
