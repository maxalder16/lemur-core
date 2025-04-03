<script setup lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';
  import { UIButton } from '~/shared/ui';

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
        returnTo: window.location.origin,
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
      <img :src="user.picture" class="mr-4 size-[50px] rounded-full" />
    </RouterLink>
    <UIButton theme="primary" @click="handleLogout()" v-if="isAuthenticated">
      Log out
    </UIButton>
  </div>
</template>
