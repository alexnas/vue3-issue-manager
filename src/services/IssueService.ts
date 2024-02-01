import type { AxiosResponse } from 'axios'
import $api from '@/api'
import { ISSUE_ENDPOINT } from '@/constants/apiConstants'
import type { IIssue } from '@/types'

export default class UserService {
  static async fetchUsers(): Promise<AxiosResponse<IIssue[]>> {
    return $api.get<IIssue[]>(ISSUE_ENDPOINT)
  }
}
