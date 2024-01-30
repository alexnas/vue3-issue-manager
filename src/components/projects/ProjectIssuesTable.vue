<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { formatDateTime } from '@/tools/formatDate'
import AddNewButton from '@/components/shared/AddNewButton.vue'

import issues from '@/data/dummyKanbanData'

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
  status: string // 'InProgress' = ['To Do', 'In Progress', 'Returned', 'Review', 'Testing', 'Done']
  summary: string // 'Fix cannot open user’s default database SQL error.',
  type: string // 'Bug' = ['Task', 'Bag', 'Feature', 'Improvement', 'Other']
  priority: string // 'Critical' = ['Unimportant', 'Low', 'Normal', 'High', 'Critical', 'UltraCritical']
  tags: string // 'Database,Sql2008',
  estimate: number // estimated time of job (hours) === 4 (in Hours)
  assignee: string // 'Janet Leverling', finally == assigneeId: number == userId
  rankid: number // 1 == текущий порядковый номер в колонке
  projectId: number //:ForeignKey == Number (id)
  creator: string // 'Boss Eduard', ==> finally == creatorId: number == userId
  color?: string // '#02897B'
  className?: string // 'e-bug, e-critical, e-janet-leverling'
  description?: string // 'Any ... additional information to clarify the issue'
  deadline: string // Date of deadlane
  isActive: boolean // issue is marked as active
  createdAt: string // Date of creation
  updatedAt: string // Date of update
}

const issueTableCols: IIssueTableCol[] = [
  { field: 'id', title: 'ID', position: 1, isVisible: true },
  { field: 'isActive', title: 'ON', position: 1, isVisible: true },
  { field: 'title', title: 'TITLE', position: 1, isVisible: true },
  { field: 'status', title: 'status', position: 1, isVisible: true },
  { field: 'summary', title: 'summary', position: 1, isVisible: true },
  { field: 'type', title: 'type', position: 1, isVisible: true },
  { field: 'priority', title: 'priority', position: 1, isVisible: true },
  { field: 'tags', title: 'tags', position: 1, isVisible: true },
  { field: 'estimate', title: 'estimate', position: 1, isVisible: true },
  { field: 'assignee', title: 'assignee', position: 1, isVisible: true },
  { field: 'rankid', title: 'rankid', position: 1, isVisible: true },
  { field: 'projectId', title: 'projectId', position: 1, isVisible: true },
  { field: 'creator', title: 'creator', position: 1, isVisible: true },
  { field: 'color', title: 'color', position: 1, isVisible: true },
  { field: 'className', title: 'className', position: 1, isVisible: true },
  { field: 'description', title: 'description', position: 1, isVisible: true },
  { field: 'deadline', title: 'deadline', position: 1, isVisible: true },
  { field: 'createdAt', title: 'CREATED', position: 1, isVisible: true },
  { field: 'updatedAt', title: 'UPDATED', position: 1, isVisible: true }
]

const handleSort = (field: IIssueKeys) => {
  alert(`Handle sort, ${field}`)
}

const handleAddNewClick = () => {
  alert('Add New Issue')
}

const handleViewClick = (issue: IIssue) => {
  alert(`View Issue title, ${issue.title}`)
}

const handleEditClick = (issue: IIssue) => {
  alert(`Update Issue title, ${issue.title}`)
}

const handleDeleteClick = async (issue: IIssue) => {
  alert(`Delete Issue title, ${issue.title}`)
}
</script>

<template>
  <div class="pl-2">Totally: {{ issues.length }} issues.</div>

  <div
    class="mb-2 mt-0 flex h-12 max-h-12 w-auto items-center justify-end gap-8 text-gray-600 dark:text-gray-200 lg:-mt-6"
  >
    <div class="flex gap-3 pl-2">
      <div class="text-md flex items-center">Filter</div>
      <input
        class="w-full max-w-72 rounded-sm border-2 border-gray-400 bg-gray-300 p-1 text-gray-600 dark:bg-gray-300"
        type="text"
        placeholder="Filter"
      />
    </div>
    <AddNewButton @openAddNew="handleAddNewClick()" />
  </div>

  <div v-if="issues.length >= 0" class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-sm text-gray-500 dark:text-gray-300 rtl:text-right">
      <thead
        class="sticky top-0 bg-teal-100 text-xs uppercase text-gray-700 dark:bg-teal-700 dark:text-gray-100"
      >
        <tr>
          <th scope="col" class="px-4 py-3">#</th>
          <th
            v-for="{ field, title } in issueTableCols"
            :key="field"
            scope="col"
            class="cursor-pointer whitespace-nowrap px-4 py-3 hover:rounded-md hover:bg-teal-200 dark:hover:bg-teal-800"
            @click="handleSort(field)"
          >
            {{ title }}
          </th>
          <th scope="col" class="px-4 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(issue, idx) in issues"
          :key="issue.id"
          class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
          <td class="px-4 py-3">{{ idx + 1 }}</td>
          <td class="px-4 py-3">{{ issue.id }}</td>
          <td class="px-4 py-3">
            <Icon v-if="issue.isActive" icon="mdi:tick" class="text-3xl text-green-400" />
            <Icon v-else icon="mdi:cancel" class="text-3xl text-red-300" />
          </td>
          <td class="px-4 py-3">{{ issue.title }}</td>
          <td class="px-4 py-3">{{ issue.status }}</td>
          <td class="px-4 py-3">{{ issue.summary }}</td>
          <td class="px-4 py-3">{{ issue.type }}</td>
          <td class="px-4 py-3">{{ issue.priority }}</td>
          <td class="px-4 py-3">{{ issue.tags }}</td>
          <td class="px-4 py-3">{{ issue.estimate }}</td>
          <td class="px-4 py-3">{{ issue.assignee }}</td>
          <td class="px-4 py-3">{{ issue.rankid }}</td>
          <td class="px-4 py-3">{{ issue.projectId }}</td>
          <td class="px-4 py-3">{{ issue.creator }}</td>
          <td class="px-4 py-3">{{ issue.color }}</td>
          <td class="px-4 py-3">{{ issue.className }}</td>
          <td class="px-4 py-3">{{ issue.description }}</td>
          <td class="px-4 py-3">{{ issue.deadline }}</td>
          <td class="px-4 py-3">{{ formatDateTime(issue.createdAt) }}</td>
          <td class="px-4 py-3">{{ formatDateTime(issue.updatedAt) }}</td>
          <td class="flex px-4 py-3">
            <button
              @click.stop="handleViewClick(issue)"
              type="button"
              class="mr-4 font-medium text-green-400 hover:text-green-600 hover:underline"
            >
              VIEW
            </button>
            <button
              @click.stop="handleEditClick(issue)"
              type="button"
              class="mr-4 font-medium text-blue-300 hover:text-blue-600 hover:underline"
            >
              EDIT
            </button>
            <button
              @click.stop="handleDeleteClick(issue)"
              type="button"
              class="font-medium text-rose-300 hover:text-rose-600 hover:underline"
            >
              DEL
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>Sorry, no entries</div>
</template>

<style scoped></style>
data/dummyKanbanData
