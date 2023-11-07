<script setup>
import IButton from './components/IButton/IButton.vue'

const classes = {
  'bg-black': true,
  'btn-red': true
}
</script>

<template>
  <span class="btn m-5 block bg-slate-400">Hello span</span>
  <div>Hello Vue <IButton :class="classes"></IButton></div>
</template>

<style scoped>
.btn {
  color: green;
}

.btn-red {
  color: red;
}

.bg-black {
  background: #000;
}
</style>
