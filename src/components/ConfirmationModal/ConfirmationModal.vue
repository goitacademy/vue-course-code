<script setup>
import IButton from '../IButton/IButton.vue'
import IModal from '../IModal/IModal.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  isOpen: {
    type: Boolean,
    default: false
  },
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <IModal>
    <div class="mb-4 text-lg">{{ title }}</div>
    <div class="flex gap-3 justify-center">
      <IButton>Відхилити</IButton>
      <IButton variant="gradient">Підтвердити </IButton>
    </div>
  </IModal>
</template>
