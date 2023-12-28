<script setup>
import IButton from '../../IButton/IButton.vue'
import IInput from '../../IInput/IInput.vue'

const emit = defineEmits(['submit'])
</script>

<template>
  <form
    @submit.prevent="emit('submit', { name: 'NAme' })"
    class="max-w-[500px] w-full bg-white p-10 rounded-2xl"
  >
    <IInput class="mb-4" label="Повне ім’я" />
    <IInput class="mb-4" label="Електронна пошта" placeholder="email@gmail.com" />
    <IInput label="Пароль" type="password" />
    <IButton class="mt-10 w-full" variant="gradient" type="submit">Створити аккаунт</IButton>
  </form>
</template>
