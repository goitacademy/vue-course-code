<script setup>
import FavoritePlace from '../FavoritePlace/FavoritePlace.vue'
import IButton from '../IButton/IButton.vue'
import { ref } from 'vue'
import IInput from '../IInput/IInput.vue'

const buttonVariant = ref('gradient')

const changeButtonVariant = () => {
  buttonVariant.value = buttonVariant.value === 'gradient' ? 'outlined' : 'gradient'
}
</script>

<template>
  <div
    class="px-6"
    @click.self.once="() => console.log('click1')"
    @keydown.alt.enter="() => console.log('alt pressed')"
  >
    <div class="text-gray mb-4" @click.stop="() => console.log('click2')">Додані маркери</div>
    <div class="py-5">
      <IInput label="Some label" />
      <a href="/" class="text-black" @click.prevent="() => console.log('prevented')">CLick me</a>
    </div>
    <slot name="label"></slot>
    <slot name="list">
      <FavoritePlace v-for="n in 4" :key="n" />
    </slot>

    <slot></slot>
    <IButton class="w-full mt-10" :variant="buttonVariant" @click="changeButtonVariant"
      >Додати маркер</IButton
    >
  </div>
</template>
