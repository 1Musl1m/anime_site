<template>
  <AppHeader />
  <div>
    <RouterView/>
  </div>
  <AppFooter />
</template>

<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import { RouterView } from 'vue-router';
</script>