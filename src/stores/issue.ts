import { computed, ref } from 'vue'
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
  const preEditedIssue = ref<IIssue>({ ...initIssue })
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)
  const filterStr = ref<string>('')

  const filteredIssues = computed(() => {
    const filtered = issues.value.filter((item) => {
      if (filterStr.value.trim() === '') return true
      const isFound =
        item.title.toLowerCase().indexOf(filterStr.value.toLowerCase()) >= 0 ||
        item.summary.toLowerCase().indexOf(filterStr.value.toLowerCase()) >= 0 ||
        (item.description &&
          item.description.toLowerCase().indexOf(filterStr.value.toLowerCase()) >= 0)

      return isFound
    })
    return filtered
  })

  const setCurrentIssue = (issue: IIssue) => {
    currentIssue.value = { ...issue }
    return currentIssue.value
  }

  const resetCurrentIssue = () => {
    preEditedIssue.value = { ...initIssue }
    currentIssue.value = { ...initIssue }
    return currentIssue.value
  }

  const cancelPreEditedIssue = () => {
    preEditedIssue.value = { ...initIssue }
  }

  const resetPreEditedIssue = () => {
    currentIssue.value = { ...preEditedIssue.value }
  }

  const setPreEditedIssue = (issue: IIssue) => {
    preEditedIssue.value = { ...issue }
    return preEditedIssue.value
  }

  const getIssues = async () => {
    const projectId = getCurrentProjectId()

    try {
      loading.value = true
      const { data } = await IssueService.fetchIssuesService(projectId)
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

  const getOneIssueById = async (id: number) => {
    const projectId = getCurrentProjectId()

    try {
      loading.value = true
      const { data } = await IssueService.fetchOneIssueService(projectId, id)
      if (data) {
        currentIssue.value = data
      }
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

  const createIssue = async (issueItem: IIssue) => {
    const projectId = getCurrentProjectId()
    const idx = issues.value.findIndex((item) => item.title === issueItem.title)
    if (idx >= 0) {
      console.log(`Error: There is already such user instance with title=${issueItem.title}`)
      throw Error(`There is already such user instance with email=${issueItem.title}`)
    }
    const params = { ...issueItem }

    try {
      loading.value = true
      const { data } = await IssueService.createIssueService(projectId, params)
      if (data) {
        issues.value.push(data)
      }
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

  const updateIssue = async (issueItem: IIssue) => {
    const id = issueItem.id
    const idx = issues.value.findIndex((item) => item.id === id)
    if (idx === -1) {
      console.log(`Error: There is no such issue instance with id=${id}`)
      throw Error(`There is no such issue instance with id=${id}`)
    }

    const projectId = getCurrentProjectId()
    const params = { ...issueItem }

    try {
      loading.value = true
      const { data } = await IssueService.updateIssueService(projectId, id, params)
      if (data) {
        issues.value[idx] = data
      }
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

  const deleteIssue = async (issueItem: IIssue) => {
    const projectId = getCurrentProjectId()
    const issueId = issueItem.id

    try {
      loading.value = true
      const { data } = await IssueService.deleteIssueService(projectId, issueId)
      issues.value = issues.value.filter((item) => +item.id !== +data)
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

  return {
    issues,
    currentIssue,
    preEditedIssue,
    loading,
    error,
    filterStr,
    filteredIssues,
    getIssues,
    createIssue,
    getOneIssueById,
    updateIssue,
    deleteIssue,
    setCurrentIssue,
    resetCurrentIssue,
    cancelPreEditedIssue,
    resetPreEditedIssue,
    setPreEditedIssue
  }
})
