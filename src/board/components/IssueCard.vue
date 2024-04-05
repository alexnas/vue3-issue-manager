<script setup lang="ts">
import { type PropType } from 'vue'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import type { IIssue } from '@/types'
import { useIssueStore } from '@/stores/issue'
import { useModalStore } from '@/stores/modal'
import { useUserStore } from '@/stores/user'
import { useIssuePriorityStore } from '@/stores/issuePriority'
import { getItemById } from '@/tools/getById'

const issuePriorityStore = useIssuePriorityStore()
const { issuePriorities } = storeToRefs(issuePriorityStore)
const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const modalStore = useModalStore()
const issueStore = useIssueStore()

const props = defineProps({
  issue: Object as PropType<IIssue>
})

const handleEditClick = () => {
  if (!props.issue) return
  issueStore.setCurrentIssue(props.issue)
  issueStore.setPreEditedIssue(props.issue)
  modalStore.openEditItemModal()
}
</script>

<template>
  <div
    @dblclick="handleEditClick()"
    class="w-full border-2 border-gray-400 p-2 text-sm text-gray-500"
  >
    <div class="relative flex justify-between">
      <div class="uppercase">{{ issue?.title }}</div>
      <div>
        <button class="absolute -right-2 -top-2" @click.stop="handleEditClick()" type="button">
          <Icon
            class="text-xl text-teal-600/50 hover:text-orange-600/50"
            icon="fa:edit"
            :inline="true"
          />
        </button>
      </div>
    </div>

    <div class="flex items-center justify-between">
      <div>{{ issue?.deadline }}</div>
      <div class="bg-amber-200/50 p-1 uppercase">
        {{ issue?.issuePriorityId && getItemById(issuePriorities, issue.issuePriorityId)?.name }}
      </div>
    </div>

    <div class="rounded border-2 border-gray-400/50 p-1 font-semibold">{{ issue?.summary }}</div>
    <div class="flex justify-between">
      <div>Assignee: {{ issue?.assigneeId && getItemById(users, issue.assigneeId)?.name }}</div>
    </div>
  </div>
</template>

<style scoped></style>
