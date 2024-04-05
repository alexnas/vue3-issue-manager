<script setup lang="ts">
import { onMounted, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/project'
import { useIssueStore } from '@/stores/issue'
import { useIssueStatusStore } from '@/stores/issueStatus'
import { useBoardStore } from '@/board/stores/board'
import BoardColumns from '@/board/components/BoardColumns.vue'
import BoardActionsPanel from '@/board/components/BoardActionsPanel.vue'

const issueStatusStore = useIssueStatusStore()
const issueStore = useIssueStore()
const projectStore = useProjectStore()
const { currentProject } = storeToRefs(projectStore)
const boardStore = useBoardStore()

watchEffect(() => {
  boardStore.getBoardColumsByStatus()
})

onMounted(async () => {
  await watchEffect(async () => {
    currentProject.value?.id
    await issueStore.getIssues()
    await issueStatusStore.getIssueStatuses()
  })
})
</script>

<template>
  <board-actions-panel />
  <board-columns />
</template>

<style scoped></style>
