<script setup lang="ts">
  import { Header } from '~/widgets/navigation';
</script>

<template>
  <Header />
  <div class="p-10">
    <RouterView />
  </div>
</template>
