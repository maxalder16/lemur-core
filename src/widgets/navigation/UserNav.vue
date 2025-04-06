<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useUserStore } from '../../entities/user';
  import { UIButton } from '../../shared/ui';
  import { supabaseConnector } from '../../connectors/supabaseConnector';
  import { useRouter } from 'vue-router';

  const userStore = useUserStore();
  const { fetchUser } = userStore;
  const { user } = storeToRefs(userStore);

  const router = useRouter();

  async function signOut() {
    await supabaseConnector.signOut();
    await fetchUser();
    router.push({ name: 'Home' });
  }
</script>

<template>
  <div class="flex items-center gap-2">
    <RouterLink :to="{ name: 'UserLogin' }" v-if="!user">
      <UIButton theme="primary">Login</UIButton>
    </RouterLink>
    <RouterLink :to="{ name: 'UserRegister' }" v-if="!user">
      <UIButton theme="primary">Sign Up</UIButton>
    </RouterLink>
    <div v-if="user" class="pr-5 text-sm">
      {{ user.email }}
    </div>
    <UIButton theme="primary" @click="signOut" v-if="user">Sign Out</UIButton>
  </div>
</template>
