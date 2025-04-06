<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { supabaseConnector } from '../../connectors/supabaseConnector';
  import { UIButton, UIInput } from '../../shared/ui';
  import { isValidEmail } from '../../shared/helpers';
  import { useRouter } from 'vue-router';

  type Props = {
    register?: boolean;
  };

  const props = defineProps<Props>();

  const router = useRouter();

  const emailAddress = ref<string>('');
  const password = ref<string>('');

  // email validation
  const emailValid = computed(() => isValidEmail(emailAddress.value));
  const emailError = 'Please enter a valid email address';

  // password validation
  const MIN_PASSWORD_LENGTH = 8;
  const passwordValid = computed(
    () => !props.register || password.value.length >= MIN_PASSWORD_LENGTH
  );
  const passwordError = `Password must be at least ${MIN_PASSWORD_LENGTH} characters`;

  // button valid guard
  const formValid = computed(() => emailValid.value && passwordValid.value);
  const checkErrors = ref(false);

  // for storing response from supabase
  const formErrorMessage = ref();

  async function submit() {
    if (formValid.value) {
      if (props.register) {
        // register using the form fields
        formErrorMessage.value = await supabaseConnector.signUp(
          emailAddress.value,
          password.value
        );

        // if no errors, signed up, so redirect home
        if (!formErrorMessage.value) {
          router.push({ name: 'Home' });
        }
      } else {
        formErrorMessage.value = await supabaseConnector.signIn(
          emailAddress.value,
          password.value
        );
      }
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
    <div v-if="formErrorMessage" class="text-sm text-red-500">
      {{ formErrorMessage }}
    </div>
    <UIButton theme="primary" @click="submit">
      {{ register ? 'Sign up' : 'Sign in' }}
    </UIButton>
  </div>
</template>
