import { createRouter, createWebHistory } from 'vue-router'

const GreetingPage = () => import('../views/GreetingView.vue')
const Homepage = () => import('../views/HomepageView.vue')
const AuthPage = () => import('../views/AuthView.vue')
const LoginPage = () => import('../views/LoginView.vue')
const RegistrationPage = () => import('../views/RegistrationView.vue')

const routes = [
  { path: '/', component: GreetingPage },
  { path: '/map', component: Homepage },
  {
    path: '/auth',
    component: AuthPage,
    redirect: '/auth/login',
    children: [
      { path: 'login', component: LoginPage },
      { path: 'registration', component: RegistrationPage }
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
