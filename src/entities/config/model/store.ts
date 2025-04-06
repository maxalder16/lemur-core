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
    const contentFields = config.value.filter(
      item => item.page === page
    ) as ContentRow[];

    return contentFields ?? [];
  }

  function formatFields(rows: ContentRow[]) {
    return rows.reduce<{ [key: string]: string }>((acc, { name, value }) => {
      acc[name] = value;
      return acc;
    }, {});
  }

  return {
    initContent,
    getPageConfig,
    formatFields,
    config,
  };
});
