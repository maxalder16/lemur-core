import HomeView from './Index.vue';
import ToolsView from './Tools.vue';
import UserLoginView from './user/Login.vue';
import UserRegisterView from './user/Register.vue';
import UserPassword from './user/PasswordReset.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/tools',
    name: 'Tools',
    component: ToolsView,
  },
  {
    path: '/user/login',
    name: 'UserLogin',
    component: UserLoginView,
  },
  {
    path: '/user/register',
    name: 'UserRegister',
    component: UserRegisterView,
  },
  ,
  {
    path: '/user/password',
    name: 'UserPassword',
    component: UserPassword,
  },
];

export { routes };
