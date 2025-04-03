<script setup lang="ts">
  import { useAuth0 } from '@auth0/auth0-vue';
  const { user } = useAuth0();
</script>

<template>
  <h3 class="mb-5 text-2xl font-bold">Your profile:</h3>
  <pre class="rounded-sm border border-[#c5c5c5] bg-[#f0f0f0] p-5 text-sm">{{
    user
  }}</pre>
</template>
