<script setup lang="ts">
defineProps<{
  modelValue: string
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="w-full max-w-72 rounded-sm border-2 border-gray-400 bg-gray-300 p-1 text-gray-600 dark:bg-gray-300"
    placeholder="Search pattern"
  />
</template>
