import HomeView from './Index.vue';
import LoginView from './Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/user/login',
    name: 'UserLogin',
    component: LoginView,
  },
];

export { routes };
