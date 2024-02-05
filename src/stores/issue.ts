import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IIssue } from '@/types'
import IssueService from '@/services/IssueService'

const initIssue: IIssue = {
  id: -1,
  title: '',
  summary: '',
  status: 'ToDo',
  type: 'Task',
  priority: 'Normal',
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

  const getIssues = async () => {
    const data = localStorage.getItem('currentProject')
    const currentProject = data ? JSON.parse(data) : null
    const queryParams = { projectId: currentProject.id }
    try {
      loading.value = true
      const { data } = await IssueService.fetchUsers(queryParams)
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

  return { issues, currentIssue, loading, error, getIssues }
})
