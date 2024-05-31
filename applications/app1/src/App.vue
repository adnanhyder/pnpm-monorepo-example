<script setup lang="ts">
import { onMounted,onUnmounted } from 'vue'
import TestView from './views/TestView.vue'

onMounted(() => {
  console.log(`app1 is now mounted.`)
})

onUnmounted(() => {
  console.log(`app1 is now unmounted.`)
})
</script>

<template>
  <div>
    <TestView />
  </div>
</template>