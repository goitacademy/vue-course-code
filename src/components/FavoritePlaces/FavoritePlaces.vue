<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'

const props = defineProps({
  items: {
    required: true,
    type: Array
  }
})
</script>

<template>
  <div class="px-6">
    <div class="text-gray mb-4">Додані маркери</div>

    <slot name="label"></slot>
    <slot name="list">
      <FavoritePlace
        v-for="place in props.items"
        :key="place.id"
        :title="place.title"
        :description="place.description"
        :img="place.img"
      />
    </slot>

    <slot></slot>
    <IButton class="w-full mt-10" variant="gradient">Додати маркер</IButton>
  </div>
</template>
