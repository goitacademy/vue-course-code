<script setup>
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
import { MapboxMap } from '@studiometa/vue-mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { mapSettings } from './map/settings'

const favoritePlaces = [
  {
    id: 1,
    title: 'New place 1',
    description: 'SUper description 1',
    img: '',
    lngLat: []
  },
  {
    id: 2,
    title: 'New place 2',
    description: 'SUper description 2',
    img: '',
    lngLat: []
  }
]
</script>

<template>
  <main class="flex h-screen">
    <div class="bg-white h-full w-[400px] shrink-0 overflow-auto pb-10">
      <FavoritePlaces :items="favoritePlaces" />
    </div>
    <div class="w-full h-full flex items-center justify-center text-6xl">
      <MapboxMap
        class="w-full h-full"
        :center="[30.523333, 50.450001]"
        :zoom="10"
        :access-token="mapSettings.apiToken"
        :map-style="mapSettings.style"
      ></MapboxMap>
    </div>
  </main>
</template>
