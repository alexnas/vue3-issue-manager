<script setup lang="ts">
import type { PropType } from 'vue'
import type { IProject } from '@/types'
import CardWrapper from '@/components/projects/CardWrapper.vue'

defineProps({
  project: {
    type: Object as PropType<IProject>,
    default: () => ({})
  }
})
</script>

<template>
  <card-wrapper :title="project.title">
    <div class="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8">
      <h3 class="text-center text-lg font-semibold text-gray-900">
        {{ project.title }}
      </h3>

      <div class="my-4 flex justify-start">
        <div class="font-medium text-teal-600">Description:</div>
        <div class="ml-4">{{ project.description }}</div>
      </div>

      <div class="space-y-0.5 text-left font-medium">
        <div class="flex">
          <div class="font-medium text-teal-600">Markup:</div>
          <p class="ml-4">{{ project.description_markup }}</p>
        </div>
      </div>
    </div>
  </card-wrapper>
</template>

<style scoped></style>
