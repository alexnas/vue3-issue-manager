<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/project'
import { useIssueStore } from '@/stores/issue'
import { useBoardStore } from '@/board/stores/board'
import BoardColumns from '@/board/components/BoardColumns.vue'
import BoardActionsPanel from '@/board/components/BoardActionsPanel.vue'

const projectStore = useProjectStore()
const { currentProject } = storeToRefs(projectStore)

const issueStore = useIssueStore()

const boardStore = useBoardStore()
const { currentBoardColumns } = storeToRefs(boardStore)

watchEffect(() => {
  currentProject.value?.id
  issueStore.getIssues()
})
watchEffect(() => {
  currentProject.value?.id
  boardStore.getBoardColumsByStatus()
})

onMounted(async () => {
  //INIT STORAGE
  watchEffect(() => {
    currentBoardColumns.value
    localStorage.setItem('currentBoard', JSON.stringify(currentBoardColumns.value))
  })

  const storageData = localStorage.getItem('currentBoard')
  if (storageData === null) {
    currentBoardColumns.value = []
  } else {
    currentBoardColumns.value = JSON.parse(storageData)
  }
})
</script>

<template>
  <board-actions-panel />
  <board-columns />
</template>

<style scoped></style>
