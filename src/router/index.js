import { createRouter, createWebHistory } from 'vue-router';
import App from '../../src/App.vue'; 

const routes = [
  {
    path: '/',
    name: 'Home',
    component: App, // The component to render for the home page
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
