<script setup lang="ts">
  import { UIButton } from '../../shared/ui';
</script>

<template>
  <div class="flex items-center gap-2">
    <RouterLink :to="{ name: 'UserLogin' }">
      <UIButton theme="primary">Login</UIButton>
    </RouterLink>
    <RouterLink :to="{ name: 'UserRegister' }">
      <UIButton theme="primary">Sign Up</UIButton>
    </RouterLink>
  </div>
</template>
