import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IIssuePriority } from '@/types'
import IssuePriorityService from '@/services/IssuePriorityService'
import { getCurrentProjectId } from '@/tools/getProjectById'

export const useIssuePriorityStore = defineStore('issuePriority', () => {
  const issuePriorities = ref<IIssuePriority[]>([])
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getIssuePriorities = async () => {
    const currentProjectId = getCurrentProjectId()
    try {
      loading.value = true
      const { data } = await IssuePriorityService.fetchUsers(currentProjectId)
      issuePriorities.value = data
      console.log('issuePriorities.value>>>>>>>>', issuePriorities.value)
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
    await getIssuePriorities()
  })

  return { issuePriorities, getIssuePriorities }
})
