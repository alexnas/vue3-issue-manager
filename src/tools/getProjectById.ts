import type { IProject } from '@/types'

export const getProjectById = (projects: IProject[], id?: number) => {
  const foundProject = projects?.find((project) => Number(project.id) === Number(id))
  return foundProject || null
}

export const getCurrentProjectId = () => {
  const data = localStorage.getItem('currentProject')
  const currentProject = data ? JSON.parse(data) : null
  return Number(currentProject.id)
}
