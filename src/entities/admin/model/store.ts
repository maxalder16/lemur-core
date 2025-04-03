import { defineStore } from 'pinia';
import { ref } from 'vue';

export default defineStore('Admin', () => {
  const state = ref('123');

  return {
    state,
  };
});
