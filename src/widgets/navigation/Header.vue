<script setup lang="ts">
  import UserNav from './UserNav.vue';
</script>

<template>
  <div class="flex items-center bg-secondary p-5">
    <div class="flex flex-1 items-center gap-8 px-5">
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'Tools' }">Tools</RouterLink>
    </div>
    <UserNav />
  </div>
</template>
