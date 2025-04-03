import HomeView from './Index.vue';
import ToolsView from './Tools.vue';

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
];

export { routes };
