<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/project'
import ProjectCard from '@/components/projects/ProjectCard.vue'

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)
</script>

<template>
  <div class="container mt-8 flex flex-wrap justify-center gap-8">
    <div v-for="project in projects" :key="project.id">
      <project-card :project="project" />
    </div>
  </div>
</template>
