<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import { UIButton } from '../../shared/ui';
  import type { User } from '@supabase/supabase-js';
  import { useConfigStore } from '../../entities/config/model';
  import { storeToRefs } from 'pinia';

  const configStore = useConfigStore();
  const { getSupabaseUser } = configStore;
  const { supabaseInst } = storeToRefs(configStore);

  const supabaseUser = ref<User | null>();

  onMounted(async () => {
    const user = await getSupabaseUser();
    supabaseUser.value = user;
  });

  const username = ref();
  const password = ref();

  async function signUp() {
    if (
      username.value.length > 0 &&
      password.value.length > 0 &&
      supabaseInst.value
    ) {
      await supabaseInst.value.auth.signUp({
        email: username.value,
        password: password.value,
      });
    }
  }
</script>

<template>
  <div class="grid grid-cols-[200px_200px_max-content] gap-3">
    <input class="border" placeholder="email" v-model="username" />
    <input class="border" placeholder="password" v-model="password" />
    <UIButton theme="primary" @click="signUp">Sign up</UIButton>
  </div>
</template>
