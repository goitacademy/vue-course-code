<script setup>
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap class="w-full h-full"></MapboxMap>
    </div>
  </main>
</template>
