import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IIssue } from '@/types'
import IssueService from '@/services/IssueService'
import { getCurrentProjectId } from '@/tools/getProjectById'

const initIssue: IIssue = {
  id: -1,
  title: '',
  summary: '',
  issueStatusId: null,
  issueKindId: null,
  issuePriorityId: null,
  tags: '',
  estimate: 4,
  assigneeId: null,
  rankId: 1,
  projectId: -1,
  creatorId: -1,
  color: '',
  className: '',
  description: '',
  deadline: '',
  isActive: true,
  createdAt: '',
  updatedAt: ''
}

export const useIssueStore = defineStore('issue', () => {
  const issues = ref<IIssue[]>([])
  const currentIssue = ref<IIssue>({ ...initIssue })

  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const setCurrentIssue = (issue: IIssue) => {
    currentIssue.value = { ...issue }
    return currentIssue.value
  }

  const cancelCurrentIssue = () => {
    currentIssue.value = { ...initIssue }
    return currentIssue.value
  }

  const getIssues = async () => {
    const currentProjectId = getCurrentProjectId()
    try {
      loading.value = true
      const { data } = await IssueService.fetchUsers(currentProjectId)
      issues.value = data
      loading.value = false
      error.value = null
    } catch (err: any) {
      loading.value = false
      if (axios.isAxiosError(error)) {
        error.value = err.message
        console.log('Error', err.message)
      } else {
        error.value = 'Unexpected error encountered'
        console.log('Error', err)
      }
    }
  }

  return { issues, currentIssue, loading, error, getIssues, setCurrentIssue, cancelCurrentIssue }
})
