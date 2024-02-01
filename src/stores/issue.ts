import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IIssue } from '@/types'
import IssueService from '@/services/IssueService'

export const useIssueStore = defineStore('issue', () => {
  const issues = ref<IIssue[]>([])

  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getIssues = async () => {
    try {
      loading.value = true
      const { data } = await IssueService.fetchUsers()
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

  onMounted(async () => {
    await getIssues()
  })

  return { issues, loading, error, getIssues }
})
