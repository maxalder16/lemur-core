import HomeView from './Index.vue';
import ToolsView from './Tools.vue';
import CallbackView from './Callback.vue';

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
  ,
  {
    path: '/callback',
    name: 'Callback',
    component: CallbackView,
  },
];

export { routes };
