<script setup>
import RegistrationForm from '../components/Auth/RegistrationForm/RegistrationForm.vue'
import { registerUser } from '../api/user'
import { useRouter } from 'vue-router'

const router = useRouter()

const handleRegisterUser = async (userData) => {
  try {
    await registerUser(userData)
    router.replace('/map')
  } catch (error) {
    console.error(error)
  }
}
</script>

<template>
  <RegistrationForm @submit="handleRegisterUser" />
</template>
