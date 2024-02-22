import type { AxiosResponse } from 'axios'
import $api from '@/api'
import { ISSUE_ENDPOINT, PROJECT_ENDPOINT } from '@/constants/apiConstants'
import type { IIssue } from '@/types'

export default class IssueService {
  static async fetchUsers(projectId: number): Promise<AxiosResponse<IIssue[]>> {
    return $api.get<IIssue[]>(`${PROJECT_ENDPOINT}/${projectId}${ISSUE_ENDPOINT}`)
  }
}
