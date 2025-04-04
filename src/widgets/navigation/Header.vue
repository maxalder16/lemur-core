<script setup lang="ts">
  import { useAdminStore } from '../../entities/admin/model';
  import UserNav from './UserNav.vue';
  import { storeToRefs } from 'pinia';

  const adminStore = useAdminStore();
  const { state } = storeToRefs(adminStore);
</script>

<template>
  <div class="flex items-center bg-secondary p-5">
    <div class="flex flex-1 items-center gap-8 px-5">
      {{ state }}
      <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'Tools' }">Tools</RouterLink>
    </div>
    <UserNav />
  </div>
</template>
