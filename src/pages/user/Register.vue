<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { supabaseConnector } from '../../connectors/supabaseConnector';
  import { UIButton, UIInput } from '../../shared/ui';
  import { isValidEmail } from '../../shared/helpers';

  const emailAddress = ref<string>('');
  const password = ref<string>('');

  const emailValid = computed(() => isValidEmail(emailAddress.value));
  const emailError = 'Please enter a valid email address';

  const MIN_PASSWORD_LENGTH = 8;
  const passwordValid = computed(
    () => password.value.length >= MIN_PASSWORD_LENGTH
  );
  const passwordError = `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;

  const formValid = computed(() => emailValid.value && passwordValid.value);

  const checkErrors = ref(false);

  async function signUp() {
    if (formValid.value) {
      supabaseConnector.signUp(emailAddress.value, password.value);
    } else {
      checkErrors.value = true;
    }
  }
</script>

<template>
  <div class="grid gap-3 pt-20">
    <UIInput
      v-model="emailAddress"
      label="Email address"
      :error="!emailValid && checkErrors"
      :error-message="emailError"
    />
    <UIInput
      v-model="password"
      label="Password"
      :error="!passwordValid && checkErrors"
      :error-message="passwordError"
    />
    <UIButton theme="primary" @click="signUp">Sign up</UIButton>
  </div>
</template>
