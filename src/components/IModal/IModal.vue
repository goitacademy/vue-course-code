<script setup>
import { onMounted, onUnmounted, ref, Teleport } from 'vue'
import CrossIcon from '../icons/CrossIcon.vue'
import InputImage from '../InputImage/InputImage.vue'

const emit = defineEmits(['close'])
const imageUrlBase64 = ref('')

onMounted(() => {
  document.body.style.overflow = 'hidden'
})

onUnmounted(() => {
  document.body.style.overflow = 'initial'
})
</script>

<template>
  <component :is="Teleport" to="body">
    <div
      class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)]"
      @click.self="emit('close')"
    >
      <div class="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10">
        <button>
          <CrossIcon class="absolute right-3 top-3 w-6 h-6" @click="emit('close')" />
        </button>
        <img v-if="imageUrlBase64" :src="imageUrlBase64" alt="" />
        <InputImage @uploaded="(base64) => (imageUrlBase64 = base64)" />
        <slot></slot>
      </div>
    </div>
  </component>
</template>
