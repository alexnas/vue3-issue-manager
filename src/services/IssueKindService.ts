import type { AxiosResponse } from 'axios'
import $api from '@/api'
import { ISSUE_KIND_ENDPOINT, PROJECT_ENDPOINT } from '@/constants/apiConstants'
import type { IIssueKind } from '@/types'

export default class IssueKindService {
  static async fetchUsers(projectId: number): Promise<AxiosResponse<IIssueKind[]>> {
    return $api.get<IIssueKind[]>(`${PROJECT_ENDPOINT}/${projectId}${ISSUE_KIND_ENDPOINT}`)
  }
}
