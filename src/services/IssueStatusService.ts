import type { AxiosResponse } from 'axios'
import $api from '@/api'
import { ISSUE_STATUS_ENDPOINT, PROJECT_ENDPOINT } from '@/constants/apiConstants'
import type { IIssueStatus } from '@/types'

export default class IssueStatusService {
  static async fetchUsers(projectId: number): Promise<AxiosResponse<IIssueStatus[]>> {
    return $api.get<IIssueStatus[]>(`${PROJECT_ENDPOINT}/${projectId}${ISSUE_STATUS_ENDPOINT}`)
  }
}
