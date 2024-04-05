import { computed, ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'
import type {
  IIssue,
  IIssueKeys,
  IIssueKind,
  IIssuePriority,
  IIssueStatus,
  IIssueTableCol
} from '@/types'
import { useIssueStore } from '@/stores/issue'
import { useIssueStatusStore } from '@/stores/issueStatus'
import { makeSortedByProperty } from '@/tools/sortingTools'
import { getItemById } from '@/tools/getById'
import { INITIAL_STATUS_ID } from '@/board/constants/boardConstants'
import { initBoardSortingFields } from '@/board/constants/boardInitials'

export interface IColumn {
  id: number
  issueStatus: IIssueStatus
  columnIssues: IIssue[]
}
export interface IFilterSetup {
  prioritiesChecked: IIssuePriority[]
  kindsChecked: IIssueKind[]
}

export const useBoardStore = defineStore('board', () => {
  const issueStore = useIssueStore()
  const { issues, currentIssue, preEditedIssue } = storeToRefs(issueStore)
  const issueStatusStore = useIssueStatusStore()
  const { issueStatuses } = storeToRefs(issueStatusStore)

  const sortProperty = ref<IIssueKeys>('rankId')
  const sortOrder = ref<'asc' | 'desc'>('asc')
  const currentBoardSortingFields = ref<IIssueTableCol[]>([...initBoardSortingFields])
  const currentBoardSortItem = ref<IIssueTableCol>({ ...initBoardSortingFields[0] })
  const currentBoardColumns = ref<IColumn[]>([])
  const filterStr = ref<string>('')
  const filterSetup = ref<IFilterSetup>({ prioritiesChecked: [], kindsChecked: [] })

  const filteredIssues = computed(() => {
    const filtered = issues.value.filter((issue: IIssue) => {
      // FIlter By Keyword
      const foundByKeyword =
        issue.title.toLowerCase().indexOf(filterStr.value.trim().toLowerCase()) >= 0 ||
        issue.summary.toLowerCase().indexOf(filterStr.value.trim().toLowerCase()) >= 0 ||
        (issue.description &&
          issue.description.toLowerCase().indexOf(filterStr.value.trim().toLowerCase()) >= 0)
      // FIlter By Priority
      const foundByPriority =
        filterSetup.value.prioritiesChecked.length == 0 ||
        filterSetup.value.prioritiesChecked.filter((item) => issue.issuePriorityId === item.id)
          .length > 0
      // FIlter By Kind
      const foundByKind =
        filterSetup.value.kindsChecked.length == 0 ||
        filterSetup.value.kindsChecked.filter((item) => issue.issueKindId === item.id).length > 0

      return foundByKeyword && foundByPriority && foundByKind
    })

    return filtered
  })

  const visibleBoardSortingFields = computed(() => {
    const res = currentBoardSortingFields.value
      .map((item) => {
        if (item && item.isVisible) {
          return item
        }
        return null
      })
      .filter((item) => item)
    return res ? res : []
  })

  const sortedIssues = computed(() => {
    const sorted = [...filteredIssues.value]
    sorted.sort(makeSortedByProperty(sortProperty.value, sortOrder.value))
    return sorted
  })

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

  const initialiseBoardCols = (currentProjectId: number) => {
    const storageData = localStorage.getItem('project_#' + currentProjectId + '_currentBoard')
    if (!(storageData && JSON.parse(storageData) && JSON.parse(storageData).length > 0)) {
      currentBoardColumns.value = []
    } else {
      currentBoardColumns.value = JSON.parse(storageData)
    }
  }

  const setIssueBoardCols = (currentProjectId: number) => {
    localStorage.setItem(
      'project_#' + currentProjectId + '_currentBoard',
      JSON.stringify(currentBoardColumns.value)
    )
  }

  return {
    currentBoardColumns,
    currentBoardSortingFields,
    currentBoardSortItem,
    visibleBoardSortingFields,
    sortProperty,
    sortOrder,
    filterStr,
    filterSetup,
    sortedIssues,
    filteredIssues,
    getBoardIssuesByStatusId,
    getBoardColumsByStatus,
    maxColumnItemOrder,
    createItemOrder,
    updateItemOrder,
    initialiseBoardCols,
    setIssueBoardCols
  }
})
