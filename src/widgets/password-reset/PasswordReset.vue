<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { isValidEmail } from '../../shared/helpers';
  import { supabaseConnector } from '../../connectors/supabaseConnector';
  import { UIButton, UIInput } from '../../shared/ui';

  const passwordEmailSent = ref(false);
  const formLoading = ref(false);
  const checkErrors = ref(false);

  const emailAddress = ref<string>('');

  // email validation
  const emailValid = computed(() => isValidEmail(emailAddress.value));
  const emailError = 'Please enter a valid email address';

  async function resetPassword() {
    if (emailValid.value) {
      formLoading.value = true;
      await supabaseConnector.resetPassword(emailAddress.value);
      passwordEmailSent.value = true;
      emailAddress.value = '';
      formLoading.value = false;
    } else {
      checkErrors.value = true;
    }
  }
</script>

<template>
  <div
    class="grid gap-3"
    :class="formLoading ? 'pointer-events-none opacity-40' : ''"
  >
    <UIInput
      v-model="emailAddress"
      label="Email address"
      :error="!emailValid && checkErrors"
      :error-message="emailError"
    />
    <UIButton theme="primary" @click="resetPassword">Reset</UIButton>
    <div v-if="passwordEmailSent" class="text-sm">
      Please check your email for next steps on how to reset your password.
    </div>
  </div>
</template>
