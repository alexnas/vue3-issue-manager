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
    class="w-full rounded border border-gray-400 bg-gray-100 p-1 text-gray-600 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-600"
    placeholder="Enter a keyword..."
  />
</template>
