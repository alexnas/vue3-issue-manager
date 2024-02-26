import type { AxiosResponse } from 'axios'
import $api from '@/api'
import { ISSUE_ENDPOINT, PROJECT_ENDPOINT } from '@/constants/apiConstants'
import type { IIssue } from '@/types'

export default class IssueService {
  static async fetchIssuesService(projectId: number): Promise<AxiosResponse<IIssue[]>> {
    return $api.get<IIssue[]>(`${PROJECT_ENDPOINT}/${projectId}${ISSUE_ENDPOINT}`)
  }

  static async fetchOneIssueService(
    projectId: number,
    issueId: number
  ): Promise<AxiosResponse<IIssue>> {
    return $api.get<IIssue>(`${PROJECT_ENDPOINT}/${projectId}${ISSUE_ENDPOINT}/${issueId}`)
  }

  static async createIssueService(
    projectId: number,
    params: IIssue
  ): Promise<AxiosResponse<IIssue>> {
    return $api.post<IIssue>(`${PROJECT_ENDPOINT}/${projectId}${ISSUE_ENDPOINT}`, params)
  }

  static async updateIssueService(
    projectId: number,
    issueId: number,
    params: IIssue
  ): Promise<AxiosResponse<IIssue>> {
    return $api.put<IIssue>(`${PROJECT_ENDPOINT}/${projectId}${ISSUE_ENDPOINT}/${issueId}`, params)
  }

  static async deleteIssueService(
    projectId: number,
    issueId: number
  ): Promise<AxiosResponse<number>> {
    return $api.delete<number>(`${PROJECT_ENDPOINT}/${projectId}${ISSUE_ENDPOINT}/${issueId}`)
  }
}
