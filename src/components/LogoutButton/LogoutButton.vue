<script setup>
import { logout } from '../../api/user'
import LogoutIcon from './LogoutIcon.vue'
import { useMutation } from '../../composables/useMutation'
import { useRouter } from 'vue-router'
import { authService } from '../../api/authService'

const router = useRouter()

const { mutation: logoutUser, isLoading } = useMutation({
  mutationFn: () => logout(),
  onSuccess: () => {
    authService.clearToken()
    router.replace('/auth/login')
  }
})
</script>

<template>
  <button class="flex gap-2 items-center px-6 text-black" @click="logoutUser">
    <span v-if="isLoading">Loading...</span>
    <span v-else>Вихід</span>
    <LogoutIcon />
  </button>
</template>
