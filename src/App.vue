<script setup>
import HomepageView from './views/HomepageView.vue'
const fruits = ['kiwi', 'banana', 'tomato']
const fruitsMap = {
  kiwi: 'Super kiwi',
  banana: 'Super banana',
  tomato: 'Super Tomato'
}
</script>

<template>
  <div :key="fruit" v-for="(fruit, index) in fruits">{{ index }}: {{ fruit }}</div>
  <div :key="fruit" v-for="(fruit, key) in fruitsMap">{{ key }}: {{ fruit }}</div>
  <div :key="val" v-for="val in 5">{{ val }}</div>
  <div :key="char" v-for="char in 'helllo'">{{ char }}</div>
  <HomepageView />
</template>
