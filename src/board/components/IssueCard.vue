<script setup lang="ts">
import { type PropType } from 'vue'
import type { IIssue } from '@/types'

defineProps({
  issue: Object as PropType<IIssue>
})
</script>

<template>
  <div class="w-full border-2 border-gray-400 p-2 text-gray-500">
    {{ issue?.rankId }} / {{ issue?.id }}
    {{ issue?.title }}
    {{ issue?.description }}
  </div>
</template>

<style scoped></style>
