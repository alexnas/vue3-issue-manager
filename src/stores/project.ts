import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IProject } from '@/types'
import ProjectService from '@/services/ProjectService'

export const useProjectStore = defineStore('project', () => {
  const projects = ref<IProject[]>([])

  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getProjects = async () => {
    try {
      loading.value = true
      const { data } = await ProjectService.fetchProjects()
      projects.value = data
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
    await getProjects()
  })

  return {
    projects,
    loading,
    error,
    getProjects
  }
})
