<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { Icon } from '@iconify/vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <button
    class="cursor-pointer rounded-lg border-2 border-gray-700 p-2 text-center text-xl font-medium text-teal-700 hover:bg-gray-600 hover:text-orange-400 dark:border-gray-500 dark:text-teal-500 dark:hover:bg-gray-600 dark:hover:text-orange-400"
    @click="toggleDark()"
  >
    <Icon v-if="isDark" class="w-5" :icon="'heroicons:sun-20-solid'" :inline="true" />
    <Icon v-else class="w-5" :icon="'solar:moon-bold'" :inline="true" />
  </button>
</template>

<style scoped></style>
