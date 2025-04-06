import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ContentRow } from '../lib';
import { supabaseConnector } from '../../../connectors/supabaseConnector';

export default defineStore('Config', () => {
  const config = ref<ContentRow[]>([]);

  async function initContent() {
    const supabase = supabaseConnector.getInstance();
    if (!supabase) return;

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
