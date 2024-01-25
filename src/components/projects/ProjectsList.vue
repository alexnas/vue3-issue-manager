<script setup lang="ts">
import ProjectCard from '@/components/projects/ProjectCard.vue'
import projects from '@/data/dummyProjects'
</script>

<template>
  <div class="container mt-8 flex flex-wrap justify-center gap-8">
    <div v-for="project in projects" :key="project.id">
      <project-card :project="project" />
    </div>
  </div>
</template>
