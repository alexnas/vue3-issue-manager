<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useIssueStore } from '@/stores/issue'
import { useModalStore } from '@/stores/modal'
import IssueForm from '@/components/issues/IssueForm.vue'
import AddNewButton from '@/components/shared/AddNewButton.vue'
import FilterInput from '@/components/shared/FilterInput.vue'

const modalStore = useModalStore()
const issueStore = useIssueStore()
const { issues, filterStr, filteredIssues } = storeToRefs(issueStore)

const handleAddNewClick = () => {
  issueStore.resetCurrentIssue()
  modalStore.openNewItemModal()
}
</script>

<template>
  <div
    class="mb-6 mt-0 flex h-12 max-h-12 w-full items-center justify-between text-gray-600 dark:text-gray-200"
  >
    <div class="pl-2">
      <div>Totally: {{ issues.length }}</div>
      <div>Filtered: {{ filteredIssues.length }}</div>
    </div>

    <div class="flex justify-end gap-3 pl-2">
      <div class="text-md flex items-center">Filter</div>
      <FilterInput v-model="filterStr" />
      <AddNewButton @openAddNew="handleAddNewClick()" />
    </div>
  </div>

  <!-- Issue Modal Form -->
  <issue-form />
</template>
