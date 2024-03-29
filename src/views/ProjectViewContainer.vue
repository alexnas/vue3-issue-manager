<script setup lang="ts">
defineProps({
  pageTitle: {
    type: String,
    default: 'Table View'
  }
})
</script>

<template>
  <div
    class="relative m-2 mx-auto flex flex-col overflow-y-auto px-2 py-4 dark:text-gray-200 sm:px-6 lg:px-8"
  >
    <slot />
  </div>
</template>

<style scoped></style>
