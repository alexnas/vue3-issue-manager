<script setup lang="ts">
defineProps({
  pageTitle: {
    type: String,
    default: ' Table View'
  }
})
</script>

<template>
  <div class="relative mx-auto my-6 flex flex-col overflow-y-auto px-2 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-semibold text-gray-700">{{ pageTitle }}</h1>
      </div>
    </div>

    <slot />
  </div>
</template>

<style scoped></style>
