import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IIssueKind } from '@/types'
import IssueKindService from '@/services/IssueKindService'
import { getCurrentProjectId } from '@/tools/getProjectById'

export const useIssueKindStore = defineStore('issueKind', () => {
  const issueKinds = ref<IIssueKind[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getIssueKinds = async () => {
    const currentProjectId = getCurrentProjectId()
    try {
      loading.value = true
      const { data } = await IssueKindService.fetchUsers(currentProjectId)
      issueKinds.value = data
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
    await getIssueKinds()
  })

  return { issueKinds, getIssueKinds }
})
