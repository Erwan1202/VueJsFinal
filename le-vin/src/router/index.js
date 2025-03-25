import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import CartView from '@/views/CartView.vue';
import ProductView from '@/views/ProductView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/login', name: 'Login', component: LoginView },
  { path: '/cart', name: 'Cart', component: CartView},
  { path: '/product/:id', name: 'Product', component: ProductView}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
