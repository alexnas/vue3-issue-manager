import $api from '@/api'
import type { AxiosResponse } from 'axios'
import type { IProject } from '@/types'
import { PROJECT_ENDPOINT } from '@/constants/apiConstants'

export default class ProjectService {
  static async fetchProjects(): Promise<AxiosResponse<IProject[]>> {
    return $api.get<IProject[]>(PROJECT_ENDPOINT)
  }
  static async fetchOneProjectById(id: number): Promise<AxiosResponse<IProject>> {
    return $api.get<IProject>(`${PROJECT_ENDPOINT}/${id}`)
  }
}
