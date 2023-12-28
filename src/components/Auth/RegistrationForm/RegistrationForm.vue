<script setup>
import IButton from '../../IButton/IButton.vue'
import IInput from '../../IInput/IInput.vue'
</script>

<template>
  <form class="max-w-[500px] w-full bg-white p-10 rounded-2xl">
    <IInput class="mb-4" label="Повне ім’я" />
    <IInput class="mb-4" label="Електронна пошта" placeholder="email@gmail.com" />
    <IInput label="Пароль" type="password" @input="(e) => console.log(e.target.value)" />
    <IButton class="mt-10 w-full" variant="gradient">Створити аккаунт</IButton>
  </form>
</template>
