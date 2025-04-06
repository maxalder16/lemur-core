import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ContentRow } from '../lib';

export default defineStore('Config', () => {
  const config = ref<ContentRow[]>([]);

  const supabaseInst = ref<SupabaseClient<any, 'public', any>>();

  async function initSupabase() {
    const supabaseUrl = 'https://knlboedsxlwmmddmjwig.supabase.co';
    const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

    supabaseInst.value = createClient(supabaseUrl, supabaseKey);
  }

  async function initContent() {
    initSupabase();
    if (!supabaseInst.value) return;

    const { data } = await supabaseInst.value.from('Content').select('*');
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

  async function getSupabaseUser() {
    if (!supabaseInst.value) return;

    const {
      data: { user },
    } = await supabaseInst.value.auth.getUser();

    return user;
  }

  return {
    supabaseInst,
    getSupabaseUser,
    initContent,
    getPageConfig,
    formatFields,
    config,
  };
});
