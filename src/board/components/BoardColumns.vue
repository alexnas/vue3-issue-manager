<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { VueDraggable } from 'vue-draggable-plus'
import type { SortableEvent } from 'sortablejs'
import type { IIssue } from '@/types'
import { useIssueStore } from '@/stores/issue'
import { useBoardStore } from '@/board/stores/board'
import IssueCard from '@/board/components/IssueCard.vue'

const issueStore = useIssueStore()

const boardStore = useBoardStore()
let { currentBoardColumns } = storeToRefs(boardStore)

const onSaveDraggedData = async (newIndex: number, issuesList: IIssue[], issueStatusId: number) => {
  const listLength = issuesList ? issuesList.length : null
  let newItemOrder

  if (typeof newIndex == 'undefined' || !issuesList || !listLength || listLength == 0) return

  if (listLength == 1) {
    if (newIndex == 0) {
      newItemOrder = 100
    }
  } else if (listLength > 1) {
    if (newIndex == 0) {
      newItemOrder = Math.round(issuesList[1].rankId / 2)
    } else if (newIndex == listLength - 1) {
      newItemOrder = issuesList[listLength - 2].rankId + 100
    } else {
      newItemOrder =
        issuesList[newIndex - 1].rankId +
        Math.round((issuesList[newIndex + 1].rankId - issuesList[newIndex - 1].rankId) / 2)
    }
  }

  if (issuesList && issuesList[newIndex] && issueStatusId && newItemOrder) {
    const currentIssue: IIssue = {
      ...issuesList[newIndex],
      issueStatusId,
      rankId: newItemOrder
    }
    await issueStore.updateIssue(currentIssue)
  }
}

const onUpdate = (event: SortableEvent, issuesList: IIssue[], issueStatusId: number) => {
  const { newIndex } = event
  if (typeof newIndex == 'undefined') return
  onSaveDraggedData(newIndex, issuesList, issueStatusId)
}

const onAdd = (event: SortableEvent, issuesList: IIssue[], issueStatusId: number) => {
  const { newIndex } = event
  if (typeof newIndex == 'undefined') return
  onSaveDraggedData(newIndex, issuesList, issueStatusId)
}

const bulletColors = (index: number) => {
  const color = ['#49C4E5', '#8471F2', '#67E2AE']
  if (color[index]) {
    return color[index]
  } else {
    let rand = Math.random()
    rand = Math.floor(rand * 360) + 1
    const randomColor = `hsl(${rand}, 80%, 70%)`
    return randomColor
  }
}
</script>

<template>
  <div v-if="currentBoardColumns && currentBoardColumns.length > 0" class="flex gap-6">
    <div v-for="(column, columnIndex) in currentBoardColumns" :key="column.issueStatus.id">
      <div
        class="flex min-w-60 max-w-60 flex-col gap-2 rounded border border-gray-800 text-gray-300"
      >
        <div class="flex items-center gap-3 p-4">
          <div
            class="h-4 w-4 rounded-full"
            :style="{ backgroundColor: bulletColors(columnIndex) }"
          ></div>
          <h2 class="text-sm font-bold uppercase">
            {{ column.issueStatus.label }} ( {{ column.columnIssues.length }} )
          </h2>
        </div>

        <div class="rounded-md border border-gray-400/50 bg-green-100 text-gray-600">
          <div class="h-full">
            <VueDraggable
              ref="el"
              class="m-auto flex min-h-80 flex-col gap-4 overflow-auto rounded bg-gray-500/15 p-4"
              v-model="column.columnIssues"
              :animation="300"
              ghostClass="ghost"
              group="columnIssues"
              :disabled="false"
              @update="
                (event: SortableEvent) =>
                  onUpdate(event, column.columnIssues, column.issueStatus.id)
              "
              @add="
                (event: SortableEvent) => onAdd(event, column.columnIssues, column.issueStatus.id)
              "
            >
              <div
                v-for="item in column.columnIssues"
                :key="item.id"
                class="h-30 cursor-move rounded bg-gray-500/5"
              >
                <IssueCard :issue="item" />
              </div>
            </VueDraggable>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center pt-6 text-4xl text-amber-500">
    No issues - kanban board is empty
  </div>
</template>

<style scoped></style>
