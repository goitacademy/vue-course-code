<script setup>
import { RouterView, RouterLink } from 'vue-router'
import BaseLayout from '../layouts/BaseLayout.vue'
</script>

<template>
  <BaseLayout>
    <section class="w-full bg-white p-10 rounded-2xl">
      <div class="flex justify-center gap-10 mb-10">
        <router-link to="registration" class="text-gray" exact-active-class="text-primary">
          Створити аккаунт
        </router-link>
        <router-link to="login" class="text-gray" exact-active-class="text-primary">
          Увійти
        </router-link>
      </div>
      <router-view></router-view>
    </section>
  </BaseLayout>
</template>
