import { createClient } from '@supabase/supabase-js';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ContentRow } from '../lib';

export default defineStore('Config', () => {
  const config = ref<ContentRow[]>([]);

  async function initSupabase() {
    const supabaseUrl = 'https://knlboedsxlwmmddmjwig.supabase.co';
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);
    return supabase;
  }

  async function initContent() {
    const supabase = await initSupabase();

    const { data } = await supabase.from('Content').select('*');
    config.value = data as ContentRow[];
  }

  function getPageConfig(page: string) {
    const fetchPage = config.value.find(item => item.page === page);

    if (fetchPage?.content) {
      return fetchPage.content;
    }
  }

  return {
    initContent,
    getPageConfig,
    config,
  };
});
