<script setup lang="ts">
import { useRoute } from 'vue-router'
import ProjectViewContainer from '@/views/ProjectViewContainer.vue'
import ProjectTable from '@/components/projects/ProjectTable.vue'
import projects from '@/data/dummyProjects'

const route = useRoute()
const getTitle = () => {
  return projects.filter((project) => project.id === route.params.id)[0].title
}
</script>

<template>
  <project-view-container :pageTitle="`${getTitle()}`">
    <project-table />
  </project-view-container>
</template>
