<script setup lang="ts">
  import { ref } from 'vue';

  type Props = {
    message: string;
  };

  defineProps<Props>();

  const count = ref(0);
</script>

<template>
  <div class="font-bold text-blue underline">{{ message }} - {{ count }}</div>
</template>
