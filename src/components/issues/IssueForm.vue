<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { Form as VeeForm, Field as VeeField } from 'vee-validate'
import { useModalStore } from '@/stores/modal'
import { useIssueStore } from '@/stores/issue'
import { useIssueStatusStore } from '@/stores/issueStatus'
import { useIssueKindStore } from '@/stores/issueKind'
import { useIssuePriorityStore } from '@/stores/issuePriority'
import { useUserStore } from '@/stores/user'
import { useProjectStore } from '@/stores/project'
import { useBoardStore } from '@/board/stores/board'
import BaseModal from '@/components/modal/BaseModal.vue'
import issueFormSchemaYup from '@/components/issues/issueFormSchemaYup'
import CustomCheckbox from '@/components/issues/CustomCheckbox.vue'
import { formatDateTime } from '@/tools/formatDate'

const modalStore = useModalStore()
const { isNewItem, isViewItem } = storeToRefs(modalStore)
const issueStore = useIssueStore()
const { currentIssue } = storeToRefs(issueStore)
const issueStatusStore = useIssueStatusStore()
const { issueStatuses } = storeToRefs(issueStatusStore)
const issueKindStore = useIssueKindStore()
const { issueKinds } = storeToRefs(issueKindStore)
const issuePriorityStore = useIssuePriorityStore()
const { issuePriorities } = storeToRefs(issuePriorityStore)
const userStore = useUserStore()
const { users } = storeToRefs(userStore)
const projectStore = useProjectStore()
const { currentProject } = storeToRefs(projectStore)
const boardStore = useBoardStore()

const modalTitle = computed(() => {
  return isViewItem.value || !isNewItem.value
    ? `Issue: ${currentIssue.value.title} (id: ${currentIssue.value.id})`
    : 'New Issue'
})

const closeModal = () => {
  issueStore.resetCurrentIssue()
  modalStore.resetModalState()
}

const resetModalForm = () => {
  issueStore.resetPreEditedIssue()
}

const handleEditClick = () => {
  issueStore.setCurrentIssue(currentIssue.value)
  modalStore.openEditItemModal()
}

const handleSubmit = async () => {
  if (isNewItem.value) {
    await issueStore.createIssue(currentIssue.value)
  } else {
    boardStore.updateItemOrder()
    await issueStore.updateIssue(currentIssue.value)
  }

  issueStore.resetCurrentIssue()
  modalStore.resetModalState()
}

watchEffect(() => {
  if (isNewItem.value) {
    const currentProjectId = currentProject.value?.id || 0
    const dateNow = Number(new Date())
    currentIssue.value.title = `TASK-${currentProjectId}-${dateNow}`
  }
})
</script>

<template>
  <base-modal @close-modal="closeModal" :modalTitle="modalTitle">
    <VeeForm :validation-schema="issueFormSchemaYup" v-slot="{ errors, meta }">
      <div v-if="!meta.valid" class="mb-3 flex justify-end text-amber-400">
        Fill all fields and handle SUBMIT button
      </div>

      <div
        class="relative my-8 rounded border border-gray-200 bg-gray-50 px-5 py-4 shadow-md md:px-10"
      >
        <div class="mb-1">
          <label
            for="project"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Project *</label
          >
          <VeeField
            autocomplete="off"
            id="project"
            name="project"
            type="text"
            :value="`${currentProject?.title} (#${currentProject?.id})`"
            disabled
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="Project name"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            &nbsp;{{ errors && errors?.project }}
          </div>
        </div>

        <div class="mb-1">
          <label
            for="title"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Title *</label
          >
          <VeeField
            autocomplete="off"
            id="title"
            name="title"
            type="text"
            v-model="currentIssue.title"
            disabled
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="Issue title"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            &nbsp;{{ errors && errors?.title }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="summary"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Summary *</label
          >
          <VeeField
            autocomplete="off"
            id="summary"
            name="summary"
            type="text"
            v-model="currentIssue.summary"
            :disabled="isViewItem"
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="Issue summary"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.summary }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="tags"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Tags</label
          >
          <VeeField
            autocomplete="off"
            id="tags"
            name="tags"
            type="text"
            v-model="currentIssue.tags"
            :disabled="isViewItem"
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="Tags"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.tags }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="estimate"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Estimate</label
          >
          <VeeField
            autocomplete="off"
            id="estimate"
            name="estimate"
            type="number"
            v-model="currentIssue.estimate"
            :disabled="isViewItem"
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="estimate"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.estimate }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="rankId"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >RankId</label
          >
          <VeeField
            autocomplete="off"
            id="rankId"
            name="rankId"
            type="number"
            v-model="currentIssue.rankId"
            disabled
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="rankId"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.rankId }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="color"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Color</label
          >
          <VeeField
            autocomplete="off"
            id="color"
            name="color"
            type="text"
            v-model="currentIssue.color"
            :disabled="isViewItem"
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="color"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.color }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="className"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >ClassName</label
          >
          <VeeField
            autocomplete="off"
            id="className"
            name="className"
            type="text"
            v-model="currentIssue.className"
            :disabled="isViewItem"
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="className"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.className }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="description"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Description</label
          >
          <VeeField
            id="description"
            name="description"
            as="textarea"
            v-model="currentIssue.description"
            :disabled="isViewItem"
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="Issue description"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.description }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="issueStatusId"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Status *</label
          >
          <VeeField
            id="issueStatusId"
            name="issueStatusId"
            as="select"
            :disabled="isViewItem"
            v-model="currentIssue.issueStatusId"
            class="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 bg-white pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
          >
            <option value="-1" disabled selected>- Select option -</option>
            <option v-for="option in issueStatuses" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </VeeField>
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.issueStatusId }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="issueKindId"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Kind *</label
          >
          <VeeField
            id="issueKindId"
            name="issueKindId"
            as="select"
            :disabled="isViewItem"
            v-model="currentIssue.issueKindId"
            class="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 bg-white pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
          >
            <option value="-1" disabled selected>- Select option -</option>
            <option v-for="option in issueKinds" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </VeeField>
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.issueKindId }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="issuePriorityId"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Priority *</label
          >
          <VeeField
            id="issuePriorityId"
            name="issuePriorityId"
            as="select"
            :disabled="isViewItem"
            v-model="currentIssue.issuePriorityId"
            class="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 bg-white pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
          >
            <option value="-1" disabled selected>- Select option -</option>
            <option v-for="option in issuePriorities" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </VeeField>
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.issuePriorityId }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="creatorId"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Creator *</label
          >
          <VeeField
            id="creatorId"
            name="creatorId"
            as="select"
            :disabled="!isNewItem"
            v-model="currentIssue.creatorId"
            class="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 bg-white pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
          >
            <option value="-1" disabled selected>- Select option -</option>
            <option v-for="option in users" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </VeeField>
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.creatorId }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="assigneeId"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Assignee</label
          >
          <VeeField
            id="assigneeId"
            name="assigneeId"
            as="select"
            :disabled="isViewItem"
            v-model="currentIssue.assigneeId"
            class="mb-5 mt-2 flex h-10 w-full items-center rounded border border-gray-300 bg-white pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
          >
            <option value="-1" selected>- Select option -</option>
            <option v-for="option in users" :value="option.id" :key="option.id">
              {{ option.name }}
            </option>
          </VeeField>
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.assigneeId }}
          </div>
        </div>

        <div class="mb-3">
          <label
            for="deadline"
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >deadline</label
          >
          <VeeField
            autocomplete="off"
            id="deadline"
            name="deadline"
            type="text"
            v-model="currentIssue.deadline"
            :disabled="isViewItem"
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="deadline"
          />
          <div class="flex justify-end px-2 text-xs text-red-600">
            {{ errors && errors?.deadline }}
          </div>
        </div>

        <div v-if="!isNewItem" class="mb-3">
          <label
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Created</label
          >
          <input
            name="createdAt"
            :value="formatDateTime(currentIssue.createdAt)"
            readonly
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="Date of creation"
          />
        </div>

        <div v-if="!isNewItem" class="mb-3">
          <label
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Updated</label
          >
          <input
            name="updatedAt"
            :value="formatDateTime(currentIssue.updatedAt)"
            readonly
            class="mb-1 mt-1 flex h-10 w-full items-center rounded border border-gray-300 pl-3 text-sm font-normal text-gray-600 focus:border focus:border-indigo-700 focus:outline-none"
            placeholder="Date of update"
          />
        </div>

        <div class="mb-3">
          <label
            class="pl-3 text-sm font-bold uppercase leading-tight tracking-normal text-gray-500"
            >Is Active
          </label>
          <div
            class="mb-5 mt-2 rounded border border-gray-300 bg-white pl-3 text-base text-gray-600"
          >
            <CustomCheckbox
              :label="`Check if this issue is to be active`"
              v-model="currentIssue.isActive"
              :isDisabled="isViewItem"
            />
            <div class="flex justify-end px-2 text-xs text-red-600">
              {{ errors && errors?.isActive }}
            </div>
          </div>
        </div>

        <div class="mt-8 flex w-full items-center justify-start">
          <button
            @click.prevent="handleEditClick"
            v-if="isViewItem"
            class="bg-orange-700 px-8 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-700 focus:ring-offset-2 sm:rounded-lg"
            type="button"
          >
            Edit
          </button>
          <button
            v-if="!isViewItem"
            :disabled="!meta.valid"
            class="px-8 py-2 text-sm text-white transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-700 focus:ring-offset-2 enabled:bg-teal-700 enabled:hover:bg-teal-600 disabled:bg-gray-400 sm:rounded-lg"
            type="submit"
            @click.prevent="handleSubmit"
          >
            Submit
          </button>
          <button
            class="ml-3 border bg-gray-100 px-8 py-2 text-sm text-gray-600 transition duration-150 ease-in-out hover:border-gray-400 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:rounded-lg"
            type="reset"
            @click.prevent="closeModal"
          >
            Cancel
          </button>

          <div class="ml-auto">
            <button
              class="ml-3 border bg-gray-500 px-8 py-2 text-sm text-gray-100 transition duration-150 ease-in-out hover:border-gray-400 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 sm:rounded-lg"
              @click.prevent="resetModalForm"
              type="reset"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </VeeForm>
  </base-modal>
</template>
