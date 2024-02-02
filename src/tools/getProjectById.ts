import type { IProject } from '@/types'

export const getProjecById = (projects: IProject[], id: number) => {
  const foundProject = projects?.find((project) => +project.id === +id)
  return foundProject || null
}
