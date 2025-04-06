<script setup lang="ts">
  import { UIHeading } from '../../shared/ui';
  import { LoginForm } from '../../widgets/login';
</script>

<template>
  <UIHeading size="2xl">Sign up</UIHeading>
  <LoginForm :register="true" />
</template>
