<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/project'
import { useUserSettings } from '@/stores/userSettings'
import { useIssueTableColStore } from '@/stores/issueTableCol'
import { useBoardStore } from '@/board/stores/board'
import IssuesTableView from '@/components/issues/IssuesTable.vue'
import ProjectViewContainer from '@/views/ProjectViewContainer.vue'
import BoardView from '@/board/views/BoardView.vue'

const boardStore = useBoardStore()
const issueTableColStore = useIssueTableColStore()
const userSettingsStore = useUserSettings()
const { isBoardView } = storeToRefs(userSettingsStore)
const projectStore = useProjectStore()
const { currentProject } = storeToRefs(projectStore)

onMounted(() => {
  if (currentProject.value) {
    issueTableColStore.initialiseIssueTableCols(currentProject.value?.id)
    boardStore.initialiseBoardCols(currentProject.value?.id)
  }
})
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
