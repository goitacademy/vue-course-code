<script setup>
import HomepageView from './views/HomepageView.vue'
import FavoritePlaces from './components/FavoritePlaces/FavoritePlaces.vue'
</script>

<template>
  <!-- <HomepageView /> -->
  <div class="bg-white h-screen w-[400px]">
    <FavoritePlaces>
      <div>THis is super slot</div>
      <template v-slot:label>This is label</template>
      <template #list>This is list</template>
    </FavoritePlaces>
  </div>
</template>
