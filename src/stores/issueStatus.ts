import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IIssueStatus } from '@/types'
import IssueStatusService from '@/services/IssueStatusService'
import { getCurrentProjectId } from '@/tools/getProjectById'

export const useIssueStatusStore = defineStore('issueStatus', () => {
  const issueStatuses = ref<IIssueStatus[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getIssueStatuses = async () => {
    const currentProjectId = getCurrentProjectId()
    try {
      loading.value = true
      const { data } = await IssueStatusService.fetchUsers(currentProjectId)
      issueStatuses.value = data
      console.log('issueStatuses.value>>>>>>>>', issueStatuses.value)
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

  onMounted(async () => {
    await getIssueStatuses()
  })

  return { issueStatuses, getIssueStatuses }
})
