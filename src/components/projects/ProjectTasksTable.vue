<script setup lang="ts">
import type { PropType } from 'vue'
import type { IProject } from '@/types'

defineProps({
  project: {
    type: Object as PropType<IProject>,
    default: () => ({})
  }
})
</script>

<template>
  <pre>{{ project }}</pre>
</template>

<style scoped></style>
