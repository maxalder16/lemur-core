import { defineStore } from 'pinia';
import { ref } from 'vue';
import { supabaseConnector } from '../../../connectors/supabaseConnector';
import type { User } from '@supabase/supabase-js';

export default defineStore('User', () => {
  const user = ref<User | null>();

  async function fetchUser() {
    user.value = await supabaseConnector.getUser();
  }

  return {
    user,
    fetchUser,
  };
});
