<script setup lang="ts">
import { type PropType } from 'vue'
import { Icon } from '@iconify/vue'
import type { IIssue } from '@/types'
import { useIssueStore } from '@/stores/issue'
import { useModalStore } from '@/stores/modal'

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

    <div>{{ issue?.rankId }} / {{ issue?.id }}</div>
    <div class="font-semibold">{{ issue?.summary }}</div>
    <div>{{ issue?.description }}</div>
  </div>
</template>

<style scoped></style>
