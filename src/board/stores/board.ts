import { computed, ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import type { IIssue, IIssueStatus } from '@/types'
import { useIssueStore } from '@/stores/issue'
import { useIssueStatusStore } from '@/stores/issueStatus'
import { makeSortedByProperty } from '@/tools/sortingTools'
import { getItemById } from '@/tools/getById'
import { INITIAL_STATUS_ID } from '@/board/constants/boardConstants'

export interface IColumn {
  id: number
  issueStatus: IIssueStatus
  columnIssues: IIssue[]
}

export const useBoardStore = defineStore('board', () => {
  const issueStore = useIssueStore()
  const { filteredIssues, currentIssue, preEditedIssue } = storeToRefs(issueStore)

  const sortedIssues = computed(() => {
    const sorted = [...filteredIssues.value]
    sorted.sort(makeSortedByProperty('rankId', 'asc'))
    return sorted
  })

  const issueStatusStore = useIssueStatusStore()
  const { issueStatuses } = storeToRefs(issueStatusStore)

  const currentBoardColumns = ref<IColumn[]>([])

  const getBoardIssuesByStatusId = (status: IIssueStatus) => {
    const columnIssues = sortedIssues.value.filter(
      (item: IIssue) => item.issueStatusId && +item.issueStatusId === status.id
    )
    return { id: status.id, issueStatus: status, columnIssues }
  }

  const getBoardColumsByStatus = () => {
    const columns = issueStatuses.value.map((item) => {
      return getBoardIssuesByStatusId(item)
    })
    currentBoardColumns.value = columns
    return columns
  }

  const maxColumnItemOrder = (currentStatusId: number) => {
    const newCol = getItemById(currentBoardColumns.value, currentStatusId)
    const lastIssueOrder =
      !!newCol && newCol.columnIssues.length > 0
        ? newCol.columnIssues[newCol.columnIssues.length - 1].rankId
        : 0
    return lastIssueOrder
  }

  const createItemOrder = () => {
    const currentStatusId = currentIssue.value.issueStatusId
      ? currentIssue.value.issueStatusId
      : INITIAL_STATUS_ID
    const maxColOrder = currentStatusId ? maxColumnItemOrder(currentStatusId) : 0
    currentIssue.value.rankId = maxColOrder + 100

    return currentIssue.value.rankId
  }

  const updateItemOrder = () => {
    const prevStatusId = preEditedIssue.value.issueStatusId
    let currentStatusId = currentIssue.value.issueStatusId
    const prevOrder = preEditedIssue.value.rankId

    if (!prevStatusId && !currentStatusId) {
      currentStatusId = INITIAL_STATUS_ID
    } else {
      currentStatusId = currentStatusId ? currentStatusId : prevStatusId
    }

    if (!currentStatusId) return
    const maxNewColOrder = maxColumnItemOrder(currentStatusId)
    if (currentStatusId === prevStatusId) {
      currentIssue.value.rankId = prevOrder ? prevOrder : maxNewColOrder + 100
    } else {
      currentIssue.value.rankId = maxNewColOrder + 100
    }

    return currentIssue.value.rankId
  }

  return {
    currentBoardColumns,
    getBoardIssuesByStatusId,
    getBoardColumsByStatus,
    maxColumnItemOrder,
    createItemOrder,
    updateItemOrder
  }
})
