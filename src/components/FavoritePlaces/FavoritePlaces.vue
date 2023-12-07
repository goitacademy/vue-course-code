<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>
    <FavoritePlace v-for="n in 4" :key="n" />
    <IButton class="w-full mt-10">Додати маркер</IButton>
  </div>
</template>
