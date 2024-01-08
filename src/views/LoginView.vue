<script setup>
import LoginForm from '../components/Auth/LoginForm/LoginForm.vue'
import { login } from '../api/user'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isLoading = ref(false)
const router = useRouter()

const handleLogin = async (userData) => {
  isLoading.value = true
  try {
    await login(userData)
    router.replace('/map')
  } catch (error) {
    console.error(error)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <LoginForm @submit="handleLogin" :is-loading="isLoading" />
</template>
