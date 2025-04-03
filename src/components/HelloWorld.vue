<script setup lang="ts">
  import { ref } from 'vue'

  type Props = {
    message: string;
  }

  defineProps<Props>()

  const count = ref(0)
</script>

<template>
  <h1 class="font-bold">{{ message }}</h1>
</template>
