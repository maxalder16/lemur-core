<script setup lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';
  import { UIButton } from '../../shared/ui';

  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

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
        returnTo: import.meta.env.VITE_AUTH0_CALLBACK_URL,
      },
    });
  }
</script>

<template>
  <div class="flex items-center gap-2">
    <UIButton theme="primary" @click="handleLogin()" v-if="!isAuthenticated">
      Login
    </UIButton>
    <UIButton
      theme="primary"
      @click="handleLogin(true)"
      v-if="!isAuthenticated"
    >
      Sign up
    </UIButton>
    <RouterLink
      v-if="isAuthenticated && user?.picture"
      :to="{ name: 'UserProfile' }"
    >
      <UIButton theme="primary"> Profile </UIButton>
    </RouterLink>
    <UIButton theme="primary" @click="handleLogout()" v-if="isAuthenticated">
      Log out
    </UIButton>
  </div>
</template>
