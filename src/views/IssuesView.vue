<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/project'
import ProjectViewContainer from '@/views/ProjectViewContainer.vue'
import IssuesTable from '@/components/issues/IssuesTable.vue'

const projectStore = useProjectStore()
const { currentProject } = storeToRefs(projectStore)
</script>

<template>
  <project-view-container :pageTitle="`${currentProject?.title || 'Project is not selected'}`">
    <issues-table />
  </project-view-container>
</template>
