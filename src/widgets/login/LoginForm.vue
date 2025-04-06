<script setup lang="ts">
  import { computed, ref } from 'vue';
  import { supabaseConnector } from '../../connectors/supabaseConnector';
  import { UIButton, UIInput } from '../../shared/ui';
  import { isValidEmail } from '../../shared/helpers';
  import { useRouter } from 'vue-router';
  import { useUserStore } from '../../entities/user';
  import { AuthError } from '@supabase/supabase-js';
  import { useConfigStore } from '../../entities/config/model';

  type Props = {
    register?: boolean;
  };

  const props = defineProps<Props>();

  const userStore = useUserStore();
  const { fetchUser } = userStore;

  const configStore = useConfigStore();
  const { getMessageFromAuth } = configStore;

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
  const formErrorMessage = ref<AuthError | null>();

  const signUpComplete = ref(false);

  async function submit() {
    if (formValid.value) {
      if (props.register) {
        // register using the form fields
        formErrorMessage.value = await supabaseConnector.signUp(
          emailAddress.value,
          password.value
        );

        // show email verification message
        signUpComplete.value = true;
      } else {
        // log in using the form fields
        formErrorMessage.value = await supabaseConnector.signIn(
          emailAddress.value,
          password.value
        );

        // if no errors, update user, redirect home
        if (!formErrorMessage.value) {
          await fetchUser();
          router.push({ name: 'Home' });
        }
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
      {{ getMessageFromAuth(formErrorMessage) }}
    </div>
    <div v-if="signUpComplete" class="text-sm">
      Thank you for registering, please validate your email address to log in.
    </div>
    <UIButton theme="primary" @click="submit">
      {{ register ? 'Sign up' : 'Sign in' }}
    </UIButton>
  </div>
</template>
