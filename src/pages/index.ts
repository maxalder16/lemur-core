import HomeView from './Index.vue';
import ToolsView from './Tools.vue';
import ProfileView from './user/Profile.vue';

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
    path: '/callback',
    name: 'UserCallback',
    component: ProfileView,
  },
  {
    path: '/user/profile',
    name: 'UserProfile',
    component: ProfileView,
  },
];

export { routes };
