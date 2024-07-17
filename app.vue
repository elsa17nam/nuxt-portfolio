<!-- <template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template> -->
<template>
  <NuxtLayout />
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const darkModeIcon = document.getElementById('darkMode-icon')
  const body = document.body

  darkModeIcon.addEventListener('click', () => {
    body.classList.toggle('dark-mode')
    darkModeIcon.classList.toggle('bx-sun')
  })
})
</script>
