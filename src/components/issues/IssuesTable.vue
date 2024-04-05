<script setup lang="ts">
import { computed, onMounted, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import type { IIssue, IIssueKeys } from '@/types'
import { useUserStore } from '@/stores/user'
import { useProjectStore } from '@/stores/project'
import { useIssueStore } from '@/stores/issue'
import { useModalStore } from '@/stores/modal'
import { useIssueStatusStore } from '@/stores/issueStatus'
import { useIssueKindStore } from '@/stores/issueKind'
import { useIssuePriorityStore } from '@/stores/issuePriority'
import { useIssueTableColStore } from '@/stores/issueTableCol'
import { formatDateTime, formatDate } from '@/tools/formatDate'
import { getItemById } from '@/tools/getById'
import IssueForm from '@/components/issues/IssueForm.vue'
import TableActionsPanel from '@/components/issues/TableActionsPanel.vue'
import { arrowUpIcon, arrowDownIcon } from '@/constants/icons'

const issueTableColStore = useIssueTableColStore()
const { currentIssueTableCols, visibleIssueCols } = storeToRefs(issueTableColStore)
const modalStore = useModalStore()
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const projectStore = useProjectStore()
const { projects, currentProject } = storeToRefs(projectStore)
const issueStore = useIssueStore()
const { issues, sortProperty, sortOrder, sortedIssues } = storeToRefs(issueStore)
const issueStatusStore = useIssueStatusStore()
const { issueStatuses } = storeToRefs(issueStatusStore)
const issueKindStore = useIssueKindStore()
const { issueKinds } = storeToRefs(issueKindStore)
const issuePriorityStore = useIssuePriorityStore()
const { issuePriorities } = storeToRefs(issuePriorityStore)

const sortIcon = computed(() => {
  return sortOrder.value === 'asc' ? arrowUpIcon : arrowDownIcon
})

const handleSort = (property: IIssueKeys) => {
  if (sortProperty.value === property) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortProperty.value = property
    sortOrder.value = 'asc'
  }
}

const handleViewClick = (issue: IIssue) => {
  issueStore.setCurrentIssue(issue)
  issueStore.setPreEditedIssue(issue)
  modalStore.openViewItemModal()
}

const handleEditClick = (issue: IIssue) => {
  issueStore.setCurrentIssue(issue)
  issueStore.setPreEditedIssue(issue)
  modalStore.openEditItemModal()
}

const handleDeleteClick = async (issue: IIssue) => {
  const { id, title } = issue
  const confirmed = confirm(`Are you sure to delete all data for the issue #${id} "${title}"?`)
  if (confirmed) {
    await issueStore.deleteIssue(issue)
  }
  modalStore.resetModalState()
}

const isColHidden = (field: IIssueKeys): boolean => {
  return !visibleIssueCols.value.includes(field)
}

onMounted(async () => {
  await watchEffect(async () => {
    currentProject.value?.id
    await issueStore.getIssues()
  })
})
</script>

<template>
  <TableActionsPanel />

  <div
    v-if="currentProject && issues.length >= 0"
    class="relative overflow-x-auto shadow-md sm:rounded-lg"
  >
    <table class="w-full text-left text-sm text-gray-500 dark:text-gray-300 rtl:text-right">
      <thead
        class="sticky top-0 bg-teal-100 text-xs uppercase text-gray-700 dark:bg-teal-700 dark:text-gray-100"
      >
        <tr>
          <th scope="col" class="px-4 py-3">Action</th>
          <th scope="col" class="px-4 py-3">#</th>
          <th
            v-for="{ field, title, isVisible } in currentIssueTableCols"
            :key="field"
            scope="col"
            :hidden="!isVisible"
            class="cursor-pointer whitespace-nowrap px-4 py-3 hover:rounded-md hover:bg-teal-200 dark:hover:bg-teal-800"
            @click="handleSort(field)"
          >
            {{ title }}
            <span class="" v-if="sortProperty === field">{{ sortIcon }}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(issue, idx) in sortedIssues"
          :key="issue.id"
          class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
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
          <td class="px-4 py-3">{{ idx + 1 }}</td>
          <td :hidden="isColHidden('id')" class="px-4 py-3">{{ issue.id }}</td>
          <td :hidden="isColHidden('isActive')" class="px-4 py-3">
            <Icon v-if="issue.isActive" icon="mdi:tick" class="text-3xl text-green-400" />
            <Icon v-else icon="mdi:cancel" class="text-3xl text-red-300" />
          </td>
          <td :hidden="isColHidden('title')" class="px-4 py-3">{{ issue.title }}</td>
          <td :hidden="isColHidden('summary')" class="px-4 py-3">{{ issue.summary }}</td>
          <td :hidden="isColHidden('issueStatusId')" class="px-4 py-3">
            {{ issue.issueStatusId && getItemById(issueStatuses, issue.issueStatusId)?.name }}
          </td>
          <td :hidden="isColHidden('issueKindId')" class="px-4 py-3">
            {{ issue.issueKindId && getItemById(issueKinds, issue.issueKindId)?.name }}
          </td>
          <td :hidden="isColHidden('issuePriorityId')" class="px-4 py-3">
            {{ issue.issuePriorityId && getItemById(issuePriorities, issue.issuePriorityId)?.name }}
          </td>
          <td :hidden="isColHidden('tags')" class="px-4 py-3">{{ issue.tags }}</td>
          <td :hidden="isColHidden('estimate')" class="px-4 py-3">{{ issue.estimate }}</td>
          <td :hidden="isColHidden('assigneeId')" class="px-4 py-3">
            {{ issue.assigneeId && getItemById(users, issue.assigneeId)?.name }}
          </td>
          <td :hidden="isColHidden('rankId')" class="px-4 py-3">{{ issue.rankId }}</td>
          <td :hidden="isColHidden('projectId')" class="px-4 py-3">
            {{ issue.projectId && getItemById(projects, issue.projectId)?.title }}
          </td>
          <td :hidden="isColHidden('creatorId')" class="px-4 py-3">
            {{ issue.creatorId && getItemById(users, issue.creatorId)?.name }}
          </td>
          <td :hidden="isColHidden('color')" class="px-4 py-3">{{ issue.color }}</td>
          <td :hidden="isColHidden('className')" class="px-4 py-3">{{ issue.className }}</td>
          <td :hidden="isColHidden('description')" class="px-4 py-3">{{ issue.description }}</td>
          <td :hidden="isColHidden('deadline')" class="px-4 py-3">
            {{ formatDate(issue.deadline) }}
          </td>
          <td :hidden="isColHidden('createdAt')" class="px-4 py-3">
            {{ formatDateTime(issue.createdAt) }}
          </td>
          <td :hidden="isColHidden('updatedAt')" class="px-4 py-3">
            {{ formatDateTime(issue.updatedAt) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>Sorry, no entries</div>

  <!-- Issue Modal Form -->
  <issue-form />
</template>
