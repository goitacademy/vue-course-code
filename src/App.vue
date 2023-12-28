<script setup>
import { ref } from 'vue'
import LoginForm from './components/Auth/LoginForm/LoginForm.vue'
import RegistrationForm from './components/Auth/RegistrationForm/RegistrationForm.vue'
import IModal from './components/IModal/IModal.vue'

const isOpen = ref(true)
const closeModal = () => {
  isOpen.value = false
}
const openModal = () => {
  isOpen.value = true
}

// import HomepageView from './views/HomepageView.vue'
// import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>

<template>
  <!-- <HomepageView /> -->
  <!-- <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces />
  </div> -->
  <button @click="openModal">Click me</button>
  <RegistrationForm @submit="console.log" />
  <LoginForm @submit="console.log" />
  <IModal v-if="isOpen" @close="closeModal"> Hello modal </IModal>
</template>
