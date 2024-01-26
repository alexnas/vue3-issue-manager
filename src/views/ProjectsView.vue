<script setup lang="ts">
import ProjectsList from '@/components/projects/ProjectsList.vue'
import ProjectsViewContainer from '@/views/ProjectsViewContainer.vue'

const pageTitle = 'Projects List'
</script>

<template>
  <projects-view-container :pageTitle="pageTitle">
    <projects-list />
  </projects-view-container>
</template>
