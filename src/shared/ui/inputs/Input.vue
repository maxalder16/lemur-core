<script setup lang="ts">
  import { computed } from 'vue';

  const inputValue = defineModel<string>();

  type Props = {
    label?: string;
    placeholder?: string;
    error?: boolean;
    errorMessage?: string;
  };

  const props = defineProps<Props>();

  const showError = computed(() => props.error && props.errorMessage);
</script>

<template>
  <div class="pt-1">
    <div
      class="relative rounded-sm border p-3"
      :class="error ? 'border-red-500' : 'border-black-50'"
    >
      <div
        class="absolute top-0 left-2.5 -translate-y-1/2 bg-white px-1 text-xs"
        :class="error ? 'text-red-500' : 'text-black'"
        v-if="label"
      >
        {{ label }}
      </div>
      <input
        class="w-full outline-none"
        :placeholder="placeholder"
        v-model="inputValue"
      />
    </div>
    <div class="pt-1 text-xs text-red-500" v-if="showError">
      {{ errorMessage }}
    </div>
  </div>
</template>
