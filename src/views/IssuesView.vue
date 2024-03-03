<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/project'
import { useUserSettings } from '@/stores/userSettings'
import IssuesTable from '@/components/issues/IssuesTable.vue'
import ProjectViewContainer from '@/views/ProjectViewContainer.vue'
import KanbanBoard from '@/kanban/KanbanBoard.vue'

const userSettingsStore = useUserSettings()
const { isKanbanView } = storeToRefs(userSettingsStore)

const projectStore = useProjectStore()
const { currentProject } = storeToRefs(projectStore)
</script>

<template>
  <project-view-container :pageTitle="`${currentProject?.title || 'Project is not selected'}`">
    <div v-if="isKanbanView">
      <kanban-board />
    </div>
    <div v-else>
      <issues-table />
    </div>
  </project-view-container>
</template>
