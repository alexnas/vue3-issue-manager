<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useIssueStore } from '@/stores/issue'
import { useModalStore } from '@/stores/modal'
import IssueForm from '@/components/issues/IssueForm.vue'
import AddNewButton from '@/components/shared/AddNewButton.vue'
import BoardSorting from '@/board/components/BoardSorting.vue'
import BoardFiltering from '@/board/components/BoardFiltering.vue'

const modalStore = useModalStore()
const issueStore = useIssueStore()
const { issues, filteredIssues } = storeToRefs(issueStore)

const handleAddNewClick = () => {
  issueStore.resetCurrentIssue()
  modalStore.openNewItemModal()
}
</script>

<template>
  <div
    class="mb-6 mt-0 flex h-12 max-h-12 w-full items-center justify-between text-gray-600 dark:text-gray-200"
  >
    <div class="mr-12 text-nowrap pl-2">
      <div>Totally: {{ issues.length }}</div>
      <div>Filtered: {{ filteredIssues.length }}</div>
    </div>

    <div class="flex justify-end gap-3 pl-2">
      <div class="relative right-0 mr-1 p-1">
        <BoardSorting />
      </div>
      <div class="relative right-0 mr-1 p-1">
        <BoardFiltering />
      </div>

      <AddNewButton @openAddNew="handleAddNewClick()" />
    </div>
  </div>

  <!-- Issue Modal Form -->
  <issue-form />
</template>
