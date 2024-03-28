<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { onClickOutside } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import type { IIssueKind, IIssuePriority } from '@/types'
import { useIssueStore } from '@/stores/issue'
import { useIssuePriorityStore } from '@/stores/issuePriority'
import { useIssueKindStore } from '@/stores/issueKind'
import BoardFilterInput from '@/board/components/BoardFilterInput.vue'
import BoardCustomRadioInput from '@/board/components/BoardCustomRadioInput.vue'
import MenuToggleButton from '@/board/components/MenuToggleButton.vue'
import CustomCheckbox from '@/components/issues/CustomCheckbox.vue'
import { initDueItems, type IDueItem } from '@/board/constants/boardInitials'

const issueStore = useIssueStore()
const { filterStr } = storeToRefs(issueStore)
const issuePriorityStore = useIssuePriorityStore()
const { issuePriorities } = storeToRefs(issuePriorityStore)
const issueKindStore = useIssueKindStore()
const { issueKinds } = storeToRefs(issueKindStore)

const isHiddenModal = ref(true)
const targetDropDown = ref(null)

const isHiddenDueDateMenu = ref(true)
const isHiddenPriorityMenu = ref(true)
const isHiddenKindMenu = ref(true)

const dueItems = ref<IDueItem[]>([...initDueItems])
const prioritySelected = ref<IIssuePriority | null>(null)
const kindSelected = ref<IIssueKind | null>(null)

onClickOutside(targetDropDown, () => {
  isHiddenModal.value = true
})

const toggleDueDateMenu = () => {
  isHiddenDueDateMenu.value = !isHiddenDueDateMenu.value
}

const togglePriorityMenu = () => {
  isHiddenPriorityMenu.value = !isHiddenPriorityMenu.value
}
const selectPriority = (item: IIssuePriority) => {
  prioritySelected.value = item
}
const cancelPriorityFilter = () => {
  prioritySelected.value = null
}

const toggleKindMenu = () => {
  isHiddenKindMenu.value = !isHiddenKindMenu.value
}
const selectKind = (item: IIssueKind) => {
  kindSelected.value = item
}
const cancelKindFilter = () => {
  kindSelected.value = null
}
</script>

<template>
  <div class="-lg:mb-2 flex w-full items-center justify-between gap-4 lg:ml-8">
    <div class="flex gap-2">
      <button
        v-if="isHiddenModal"
        @click="isHiddenModal = !isHiddenModal"
        class="text-md flex cursor-pointer items-center gap-2 text-nowrap rounded-lg border-2 border-gray-600 p-2 text-center font-medium text-teal-500 hover:bg-gray-100 hover:text-orange-400 dark:bg-gray-600/50 dark:hover:bg-gray-600"
      >
        <Icon class="w-5" :icon="'ion:filter'" :inline="true" />
        Filters
      </button>
      <button
        v-if="!isHiddenModal"
        @click="true"
        class="text-md flex cursor-pointer items-center gap-2 text-nowrap rounded-lg border-2 border-gray-600 bg-gray-600 p-2 text-center font-medium text-teal-500 hover:bg-gray-100 hover:text-orange-400 dark:hover:bg-gray-600/50"
      >
        <Icon class="w-5" :icon="'ion:filter'" :inline="true" />
        Filters
      </button>
    </div>
  </div>

  <div class="overflow-y-auto">
    <!-- Dropdown menu -->
    <div
      v-if="!isHiddenModal"
      ref="targetDropDown"
      id="dropdownMenu"
      class="absolute -left-48 top-14 z-10 w-full min-w-80 divide-y divide-gray-600 rounded-md border-2 border-gray-300 bg-gray-50 shadow dark:bg-gray-700"
    >
      <div class="p-4">
        <div class="mb-6 grid gap-y-6">
          <div class="flex justify-center text-base font-semibold">Select filter</div>
          <div class="mx-6 border-b-2 border-gray-400/50"></div>
          <div class="flex items-center gap-2">
            <Icon class="w-5 text-2xl text-gray-400" :icon="'octicon:search-16'" :inline="true" />
            <board-filter-input v-model="filterStr" />
          </div>

          <div class="mx-6 border-b-2 border-gray-400/50"></div>

          <div class="text-base">
            <div class="flex items-center justify-between text-base">
              <div class="flex w-full items-center justify-between">
                <div class="font-semibold">Due date</div>
                <div class="flex items-center gap-3 font-light text-teal-400">
                  <menu-toggle-button
                    @click="toggleDueDateMenu"
                    :isHiddenItem="isHiddenDueDateMenu"
                  />
                </div>
              </div>
            </div>

            <div v-if="!isHiddenDueDateMenu" class="ml-3 mt-2 grid">
              <div class="flex items-center gap-3" v-for="dueItem in dueItems" :key="dueItem.id">
                <CustomCheckbox
                  :label="dueItem.label"
                  v-model="dueItem.isChecked"
                  :icon="dueItem.icon"
                  :isDisabled="dueItem.isDisabled"
                />
              </div>
            </div>
          </div>

          <div class="mx-6 border-b-2 border-gray-400/50"></div>

          <div>
            <div class="flex items-center justify-between text-base">
              <button @click="cancelPriorityFilter">
                <span>
                  <Icon
                    class="w-6 min-w-[theme('spacing[5]')] text-3xl hover:text-orange-400"
                    :icon="'solar:minus-square-outline'"
                    :inline="true"
                  />
                </span>
              </button>

              <div class="flex w-full items-center justify-between pl-4">
                <div class="font-semibold">Priority</div>
                <div class="flex items-center gap-3 font-light text-teal-400">
                  {{ prioritySelected?.label ? prioritySelected?.label : 'Not selected' }}

                  <menu-toggle-button
                    @click="togglePriorityMenu"
                    :isHiddenItem="isHiddenPriorityMenu"
                  />
                </div>
              </div>
            </div>
            <div v-if="!isHiddenPriorityMenu" class="ml-3 mt-2 grid">
              <div v-for="(priority, index) in issuePriorities" :key="priority.id">
                <board-custom-radio-input
                  :value="prioritySelected"
                  :item="issuePriorities[index]"
                  @update:modelValue="selectPriority"
                />
              </div>
            </div>
          </div>

          <div class="mx-6 border-b-2 border-gray-400/50"></div>

          <div>
            <div class="flex items-center justify-between text-base">
              <button @click="cancelKindFilter">
                <span>
                  <Icon
                    class="w-6 min-w-[theme('spacing[5]')] text-3xl hover:text-orange-400"
                    :icon="'solar:minus-square-outline'"
                    :inline="true"
                  />
                </span>
              </button>

              <div class="flex w-full items-center justify-between pl-4">
                <div class="font-semibold">Issue kind</div>
                <div class="flex items-center gap-3 font-light text-teal-400">
                  {{ kindSelected?.label ? kindSelected?.label : 'Not selected' }}

                  <menu-toggle-button @click="toggleKindMenu" :isHiddenItem="isHiddenKindMenu" />
                </div>
              </div>
            </div>

            <div v-if="!isHiddenKindMenu" class="ml-3 mt-2 grid">
              <div v-for="(kind, index) in issueKinds" :key="kind.id">
                <board-custom-radio-input
                  :value="kindSelected"
                  :item="issueKinds[index]"
                  @update:modelValue="selectKind"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
