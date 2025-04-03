import { createApp } from 'vue';
import './style.css';
import App from './app/App.vue';
import { router } from './providers';
import { createAuth0 } from '@auth0/auth0-vue';
import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(
  createAuth0({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
      redirect_uri: import.meta.env.VITE_AUTH0_CALLBACK_URL,
    },
  })
);

app.use(router).mount('#app');
