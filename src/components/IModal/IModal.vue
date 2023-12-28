<script setup>
import CrossIcon from '../icons/CrossIcon.vue'
</script>

<template>
  <div class="flex w-full h-full fixed top-0 left-0 overflow-auto bg-[rgba(0,0,0,0.3)]">
    <div class="relative bg-white min-w-[350px] m-auto text-black rounded-2xl p-10">
      <button>
        <CrossIcon class="absolute right-3 top-3 w-6 h-6" />
      </button>
    </div>
  </div>
</template>
