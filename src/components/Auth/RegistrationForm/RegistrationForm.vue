<script setup>
import IInput from '../../IInput/IInput.vue'
</script>

<template>
  <form class="max-w-[500px] w-full bg-white p-10 rounded-2xl">
    <IInput class="mb-4" label="Повне ім’я" />
    <IInput class="mb-4" label="Електронна пошта" />
    <IInput label="Пароль" />
  </form>
</template>
