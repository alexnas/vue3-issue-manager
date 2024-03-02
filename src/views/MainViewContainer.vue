<script setup lang="ts">
defineProps({
  pageTitle: {
    type: String,
    default: ' Table View'
  }
})
</script>

<template>
  <div
    class="relative mx-auto my-6 flex flex-col overflow-y-auto px-2 dark:text-gray-200 sm:px-6 lg:px-8"
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
