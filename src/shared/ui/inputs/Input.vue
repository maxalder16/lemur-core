<script setup lang="ts">
  const inputValue = defineModel<string>();

  type Props = {
    label?: string;
    placeholder?: string;
  };

  defineProps<Props>();
</script>

<template>
  <div class="relative rounded-sm border p-3">
    <div class="absolute top-0 left-2.5 -translate-y-1/2 bg-white px-1 text-xs">
      {{ label }}
    </div>
    <input
      class="w-full outline-none"
      :placeholder="placeholder"
      v-model="inputValue"
    />
  </div>
</template>
