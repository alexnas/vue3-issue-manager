<script setup lang="ts">
import NavBar from '@/components/header/NavBar.vue'
import DarkModeButton from '@/components/shared/DarkModeButton.vue'
</script>

<template>
  <header class="flex items-center justify-between bg-gray-800 p-4">
    <img alt="Vue logo" src="@/assets/logo.svg" width="30" height="30" />

    <div class="flex">
      <nav class="flex gap-6">
        <NavBar />
      </nav>
      <div class="-mt-1 ml-6"><DarkModeButton /></div>
    </div>
  </header>
</template>

<style scoped></style>
