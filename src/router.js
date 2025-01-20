import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue'; 
import Login from './components/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home, 
  },
  {
    path: '/form1',
    name: 'Form1',
    component: Home, 
  },
  {
    path: '/form2',
    name: 'Form2',
    component: Home, 
  },
  {
    path: '/login',
    name: 'Login',
    component: Login, 
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: Login, 
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
