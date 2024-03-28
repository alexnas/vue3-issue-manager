<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineProps({
  isHiddenItem: {
    type: Boolean,
    default: true
  }
})

defineEmits(['click'])
</script>

<template>
  <button
    v-if="isHiddenItem"
    @click="$emit('click')"
    class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-800 p-2 text-center text-xl font-medium text-teal-500 hover:bg-gray-100 hover:text-orange-400 dark:hover:bg-gray-600"
  >
    <Icon class="w-5" :icon="'la:angle-down-solid'" :inline="true" />
  </button>
  <button
    v-if="!isHiddenItem"
    @click="$emit('click')"
    class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-600 p-2 text-center text-xl font-medium text-orange-500 hover:bg-gray-100 hover:text-orange-400 dark:hover:bg-gray-600"
  >
    <Icon class="w-5" :icon="'la:angle-up-solid'" :inline="true" />
  </button>
</template>
