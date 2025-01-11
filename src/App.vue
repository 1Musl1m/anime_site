<template>
  <AppHeader />
  <div class="px-20 md:p-16 sm:px-6 sm:py-0">
    <RouterView/>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router';
</script>