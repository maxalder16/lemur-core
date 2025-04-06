import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { ContentRow, MessageRow } from '../lib';
import { supabaseConnector } from '../../../connectors/supabaseConnector';
import type { AuthError } from '@supabase/supabase-js';

export default defineStore('Config', () => {
  const config = ref<ContentRow[]>([]);
  const messages = ref<MessageRow[]>([]);

  async function initContent() {
    const supabase = supabaseConnector.getInstance();
    if (!supabase) return;

    const { data: contentData } = await supabase.from('Content').select('*');
    config.value = contentData as ContentRow[];

    const { data: messageData } = await supabase.from('Messages').select('*');
    messages.value = messageData as MessageRow[];
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

  function getMessage(code: string) {
    return messages.value.find(item => item.code === code);
  }

  function getMessageFromAuth(error: AuthError) {
    return (
      messages.value.find(item => item.code === error.code)?.value ??
      error.message
    );
  }

  return {
    initContent,
    getPageConfig,
    formatFields,
    getMessage,
    getMessageFromAuth,
    config,
  };
});
