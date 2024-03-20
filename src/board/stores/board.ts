import { computed, ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import { useIssueStore } from '@/stores/issue'
import { useIssueStatusStore } from '@/stores/issueStatus'
import type { IIssue, IIssueStatus } from '@/types'
import { makeSortedByProperty } from '@/tools/sortingTools'

export interface IColumn {
  id: number
  issueStatus: IIssueStatus
  columnIssues: IIssue[]
}

export const useBoardStore = defineStore('board', () => {
  const issueStore = useIssueStore()
  const { issues } = storeToRefs(issueStore)

  const sortedIssues = computed(() => {
    const sorted = [...issues.value]
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

  return {
    currentBoardColumns,
    getBoardIssuesByStatusId,
    getBoardColumsByStatus
  }
})
