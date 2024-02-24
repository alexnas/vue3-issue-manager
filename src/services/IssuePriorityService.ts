import type { AxiosResponse } from 'axios'
import $api from '@/api'
import { ISSUE_PRIORITY_ENDPOINT, PROJECT_ENDPOINT } from '@/constants/apiConstants'
import type { IIssuePriority } from '@/types'

export default class IssuePriorityService {
  static async fetchUsers(projectId: number): Promise<AxiosResponse<IIssuePriority[]>> {
    return $api.get<IIssuePriority[]>(`${PROJECT_ENDPOINT}/${projectId}${ISSUE_PRIORITY_ENDPOINT}`)
  }
}
