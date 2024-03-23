import type { IIssueTableCol } from '@/types'

export const initBoardSortingFields: IIssueTableCol[] = [
  { field: 'rankId', title: 'Custom', position: 1, isVisible: true },
  { field: 'id', title: 'ID', position: 1, isVisible: false },
  { field: 'isActive', title: 'Is Active', position: 1, isVisible: true },
  { field: 'title', title: 'Title', position: 1, isVisible: true },
  { field: 'summary', title: 'Summary', position: 1, isVisible: true },
  { field: 'issueStatusId', title: 'StatusId', position: 1, isVisible: false },
  { field: 'issueKindId', title: 'KindId', position: 1, isVisible: true },
  { field: 'issuePriorityId', title: 'PriorityId', position: 1, isVisible: true },
  { field: 'tags', title: 'Tags', position: 1, isVisible: false },
  { field: 'estimate', title: 'Estimate', position: 1, isVisible: false },
  { field: 'assigneeId', title: 'Assignee', position: 1, isVisible: true },
  { field: 'projectId', title: 'Project', position: 1, isVisible: false },
  { field: 'creatorId', title: 'Creator', position: 1, isVisible: true },
  { field: 'color', title: 'Color', position: 1, isVisible: true },
  { field: 'className', title: 'ClassName', position: 1, isVisible: false },
  { field: 'description', title: 'Description', position: 1, isVisible: false },
  { field: 'deadline', title: 'Deadline', position: 1, isVisible: true },
  { field: 'createdAt', title: 'CreatedAt', position: 1, isVisible: true },
  { field: 'updatedAt', title: 'UpdatedAt', position: 1, isVisible: true }
]
