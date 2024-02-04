import type { IProject } from '@/types'

export const getProjectById = (projects: IProject[], id?: number) => {
  const foundProject = projects?.find((project) => Number(project.id) === Number(id))
  return foundProject || null
}
