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
    <div class="flex items-center justify-between">
      <div class="w-full">
        <h1 class="pl-2 text-3xl font-semibold text-gray-700 dark:text-gray-200">
          {{ pageTitle }}
        </h1>
      </div>
    </div>

    <slot />
  </div>
</template>

<style scoped></style>
