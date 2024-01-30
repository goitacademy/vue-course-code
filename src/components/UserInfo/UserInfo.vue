<script setup>
import { onMounted } from 'vue'
import UserIcon from './UserIcon.vue'
import { useMutation } from '../../composables/useMutation'
import { getUserInfo } from '../../api/user'

const {
  data: userInfo,
  mutation: getUser,
  isLoading
} = useMutation({
  mutationFn: () => getUserInfo()
})

onMounted(() => {
  getUser()
})
</script>

<template>
  <div
    class="flex sticky top-0 items-center text-black gap-3 bg-[#ffe6dc] border-solid border-b-2 border-primary rounded-bl-2xl rounded-br-2xl px-6 py-4 mb-10"
  >
    <div class="w-10 h-10 flex items-center justify-center rounded-full color-primary bg-primary">
      <UserIcon class="text-white" />
    </div>
    <span v-if="isLoading">Loading...</span>
    <span v-if="userInfo">{{ userInfo.data.name }}</span>
  </div>
</template>
