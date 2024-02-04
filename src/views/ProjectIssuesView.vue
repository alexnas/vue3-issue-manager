<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/project'
import ProjectViewContainer from '@/views/ProjectViewContainer.vue'
import ProjectIssuesTable from '@/components/issues/ProjectIssuesTable.vue'

const projectStore = useProjectStore()
const { currentProject } = storeToRefs(projectStore)
</script>

<template>
  <project-view-container :pageTitle="`${currentProject?.title || 'Project is not selected'}`">
    <project-issues-table />
  </project-view-container>
</template>
