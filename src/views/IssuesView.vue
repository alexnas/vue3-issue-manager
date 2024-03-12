<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/project'
import { useUserSettings } from '@/stores/userSettings'
import IssuesTableView from '@/components/issues/IssuesTable.vue'
import ProjectViewContainer from '@/views/ProjectViewContainer.vue'
import BoardView from '@/board/views/BoardView.vue'

const userSettingsStore = useUserSettings()
const { isBoardView } = storeToRefs(userSettingsStore)

const projectStore = useProjectStore()
const { currentProject } = storeToRefs(projectStore)
</script>

<template>
  <project-view-container :pageTitle="`${currentProject?.title || 'Project is not selected'}`">
    <div v-if="isBoardView">
      <board-view />
    </div>
    <div v-else>
      <issues-table-view />
    </div>
  </project-view-container>
</template>
