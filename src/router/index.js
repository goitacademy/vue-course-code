import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('../views/GreetingView.vue')
const Homepage = () => import('../views/HomepageView.vue')
const AuthPage = () => import('../views/AuthView.vue')

const routes = [
  { path: '/', component: GreetingPage },
  { path: '/map', component: Homepage },
  { path: '/auth', component: AuthPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
