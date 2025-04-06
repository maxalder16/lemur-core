<script setup lang="ts">
  import { computed } from 'vue';

  type Props = {
    theme: 'primary' | 'secondary';
  };

  const props = defineProps<Props>();

  const theme = computed(() => {
    switch (props.theme) {
      case 'primary':
      default:
        return 'bg-primary hover:bg-primary-400 text-white';
      case 'secondary':
        return 'bg-secondary hover:bg-secondary-400 text-white';
    }
  });
</script>

<template>
  <div>
    <div
      class="inline-flex cursor-pointer rounded-sm px-3.5 py-2.5 font-bold transition-all"
      :class="theme"
    >
      <slot />
    </div>
  </div>
</template>
