<script setup lang="ts">
import NavBar from '@/components/header/NavBar.vue'
</script>

<template>
  <header class="flex items-center justify-between bg-gray-800 p-4">
    <img alt="Vue logo" src="@/assets/logo.svg" width="30" height="30" />

    <nav class="flex gap-8 p-0">
      <NavBar />
    </nav>
  </header>
</template>

<style scoped></style>
