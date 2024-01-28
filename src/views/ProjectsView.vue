<script setup lang="ts">
import ProjectsList from '@/components/projects/ProjectsList.vue'
import MainViewContainer from '@/views/MainViewContainer.vue'

const pageTitle = 'Projects List'
</script>

<template>
  <main-view-container :pageTitle="pageTitle">
    <projects-list />
  </main-view-container>
</template>
