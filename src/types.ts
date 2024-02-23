interface INavbarMenuItem {
  name: string
  label: string
  path: string
}

interface ISideMenuItem {
  name: string
  label: string
  path: string
  icon: string
}

interface IProject {
  id: number
  title: string
  description: string
  description_markup: 'PLAIN' | 'MARKDOWN' | 'ASCIIDOC'
  isActive: boolean
  createdAt: string
  updatedAt: string
}

interface IUser {
  id: number
  name: string
  email: string
  password: string
  roleId: number
  isActive: boolean
  createdAt: string
  updatedAt: string
}

type IUserKeys = keyof IUser

interface IUserTableCol {
  field: IUserKeys
  title: string
}

interface IAuthResponse {
  token: string
  user: IUser
}

interface IIssueTableCol {
  field: IIssueKeys
  title: string
  position: number
  isVisible: boolean
}

type IIssueKeys = keyof IIssue

interface IIssue {
  id: number // 29004
  title: string // 'Issue - 29004',
  summary: string // Example: 'Fix cannot open user’s default database SQL error.',
  issueStatusId: number | null // issueStatusId == one of issueStatuses for given project
  issueTypeId: number | null // issueStatusId == one of issueStatuses for given project
  issuePriorityId: number | null // issueStatusId == one of issueStatuses for given project
  tags: string // Example: 'Database,Sql2008',
  estimate: number // estimated time of job (hours) === 4 (in Hours)
  assigneeId: number | null // Example: 'Janet Leverling', finally == assigneeId: number == userId (null when created and is 'ToDo')
  rankId: number // 1 == current order in the column
  projectId: number // ProjectId :ForeignKey == Number (id)
  creatorId: number // Example: 'Boss Eduard', ==> finally == creatorId: number == userId
  color?: string // '#02897B'
  className?: string // Example: 'e-bug, e-critical, e-janet-leverling'
  description?: string // Example: 'Any ... additional information to clarify the issue'
  deadline: string // Date of deadlane
  isActive: boolean // issue is marked as active
  createdAt: string // Date of creation
  updatedAt: string // Date of update
}

interface IIssueStatus {
  id: number
  name: string
  label: string
  createdAt: string
  updatedAt: string
}

export type {
  INavbarMenuItem,
  ISideMenuItem,
  IProject,
  IUser,
  IAuthResponse,
  IUserKeys,
  IUserTableCol,
  IIssueTableCol,
  IIssueKeys,
  IIssue,
  IIssueStatus
}
