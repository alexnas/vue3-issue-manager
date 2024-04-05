import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { IIssueTableCol } from '@/types'

export const initialIssueTableCols: IIssueTableCol[] = [
  { field: 'id', title: 'ID', position: 1, isVisible: true },
  { field: 'isActive', title: 'ON', position: 1, isVisible: true },
  { field: 'title', title: 'TITLE', position: 1, isVisible: true },
  { field: 'summary', title: 'summary', position: 1, isVisible: true },
  { field: 'issueStatusId', title: 'status', position: 1, isVisible: true },
  { field: 'issueKindId', title: 'kind', position: 1, isVisible: true },
  { field: 'issuePriorityId', title: 'priority', position: 1, isVisible: true },
  { field: 'tags', title: 'tags', position: 1, isVisible: true },
  { field: 'estimate', title: 'estimate', position: 1, isVisible: true },
  { field: 'assigneeId', title: 'assignee', position: 1, isVisible: true },
  { field: 'rankId', title: 'order', position: 1, isVisible: true },
  { field: 'projectId', title: 'project', position: 1, isVisible: true },
  { field: 'creatorId', title: 'creator', position: 1, isVisible: true },
  { field: 'color', title: 'color', position: 1, isVisible: true },
  { field: 'className', title: 'className', position: 1, isVisible: true },
  { field: 'description', title: 'description', position: 1, isVisible: true },
  { field: 'deadline', title: 'deadline', position: 1, isVisible: true },
  { field: 'createdAt', title: 'CREATED', position: 1, isVisible: true },
  { field: 'updatedAt', title: 'UPDATED', position: 1, isVisible: true }
]

export const useIssueTableColStore = defineStore('issueTableCol', () => {
  const currentIssueTableCols = ref<IIssueTableCol[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const visibleIssueCols = computed(() => {
    return currentIssueTableCols.value
      .map((item) => {
        if (item && item.isVisible) {
          return item.field
        }
        return null
      })
      .filter((item) => item)
  })

  const initialiseIssueTableCols = (currentProjectId: number) => {
    const storageData = localStorage.getItem('project_#' + currentProjectId + '_issueTableCols')
    if (!(storageData && JSON.parse(storageData) && JSON.parse(storageData).length > 0)) {
      localStorage.setItem(
        'project_#' + currentProjectId + '_issueTableCols',
        JSON.stringify(initialIssueTableCols)
      )
      currentIssueTableCols.value = [...initialIssueTableCols]
    } else {
      currentIssueTableCols.value = [...JSON.parse(storageData)]
    }
  }

  const setIssueTableCols = (issueTableCols: IIssueTableCol[], currentProjectId: number) => {
    localStorage.setItem(
      'project_#' + currentProjectId + '_issueTableCols',
      JSON.stringify([...issueTableCols])
    )
  }

  return {
    currentIssueTableCols,
    visibleIssueCols,
    loading,
    error,
    initialiseIssueTableCols,
    setIssueTableCols
  }
})
