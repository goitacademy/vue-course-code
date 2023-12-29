<script setup>
import { reactive } from 'vue'
import IInput from '../../IInput/IInput.vue'
import IButton from '../../IButton/IButton.vue'

const emit = defineEmits(['submit'])
const userData = reactive({
  email: '',
  password: ''
})
</script>

<template>
  <form @submit.prevent="emit('submit', userData)">
    <IInput class="mb-4" label="Електронна пошта" v-model="userData.email" />
    <IInput type="password" label="Пароль" v-model="userData.password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Увійти </IButton>
  </form>
</template>
