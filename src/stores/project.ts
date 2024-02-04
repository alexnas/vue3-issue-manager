import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IProject } from '@/types'
import ProjectService from '@/services/ProjectService'

export const useProjectStore = defineStore('project', () => {
  const projects = ref<IProject[]>([])
  const currentProject = ref<IProject | null>(null)

  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const setCurrentProject = (project: IProject) => {
    currentProject.value = { ...project }
    localStorage.setItem('currentProject', JSON.stringify({ ...project }))
    return currentProject.value
  }

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

  const getProjectById = async (id: number) => {
    try {
      loading.value = true
      const { data } = await ProjectService.fetchOneProjectById(id)
      currentProject.value = data
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
    projects,
    currentProject,
    loading,
    error,
    getProjects,
    getProjectById,
    setCurrentProject
  }
})
