<script setup lang="ts">
  import { computed } from 'vue';

  type Props = {
    size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  };

  const props = defineProps<Props>();

  const theme = computed(() => {
    switch (props.size) {
      case 'sm':
        return 'text-sm';
      case 'md':
        return 'text-md';
      case 'lg':
        return 'text-lg';
      case 'xl':
        return 'text-xl';
      case '2xl':
        return 'text-2xl';
      case '3xl':
        return 'text-3xl';
    }
  });
</script>

<template>
  <div :class="theme" class="pb-4 font-bold"><slot /></div>
</template>
