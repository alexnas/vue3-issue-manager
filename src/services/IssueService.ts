import type { AxiosResponse } from 'axios'
import $api from '@/api'
import { ISSUE_ENDPOINT } from '@/constants/apiConstants'
import type { IIssue } from '@/types'

export default class UserService {
  static async fetchUsers(queryParams: { projectId: number }): Promise<AxiosResponse<IIssue[]>> {
    return $api.get<IIssue[]>(ISSUE_ENDPOINT, { params: queryParams })
  }
}
