<script setup lang="ts">
  import { ref } from 'vue';
  import { supabaseConnector } from '../../connectors/supabaseConnector';
  import { UIButton } from '../../shared/ui';

  const username = ref();
  const password = ref();

  async function signUp() {
    supabaseConnector.signUp(username.value, password.value);
  }
</script>

<template>
  <div class="grid grid-cols-[200px_200px_max-content] gap-3">
    <input class="border" placeholder="email" v-model="username" />
    <input class="border" placeholder="password" v-model="password" />
    <UIButton theme="primary" @click="signUp">Sign up</UIButton>
  </div>
</template>
