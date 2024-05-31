import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// Import components from boost-app1
import { AppBus, TestView } from 'boost-app1';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/app1',
      name: 'test',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => AppBus
    }
  ]
})

export default router
