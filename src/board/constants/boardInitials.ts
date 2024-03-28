import type { IIssueTableCol } from '@/types'

interface IDueItem {
  id: number
  label: string
  isChecked: boolean
  icon: string
  isDisabled: boolean
}

const initBoardSortingFields: IIssueTableCol[] = [
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

const initDueItems: IDueItem[] = [
  {
    id: 1,
    label: 'No dates',
    isChecked: false,
    icon: 'solar:calendar-line-duotone',
    isDisabled: false
  },
  {
    id: 2,
    label: 'Overdue',
    isChecked: false,
    icon: 'mdi:clock-outline',
    isDisabled: false
  },
  {
    id: 3,
    label: 'Due in the next day',
    isChecked: false,
    icon: 'mdi:clock-outline',
    isDisabled: false
  },
  {
    id: 4,
    label: 'Due in the next week',
    isChecked: false,
    icon: 'mdi:clock-outline',
    isDisabled: false
  },
  {
    id: 5,
    label: 'Due in the next month',
    isChecked: false,
    icon: 'mdi:clock-outline',
    isDisabled: false
  },
  {
    id: 6,
    label: 'Marked as complete',
    isChecked: false,
    icon: '',
    isDisabled: false
  },
  {
    id: 7,
    label: 'Not marked as complete',
    isChecked: false,
    icon: '',
    isDisabled: false
  }
]

export { initBoardSortingFields, initDueItems, type IDueItem }
