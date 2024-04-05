<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { onClickOutside } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { useIssuePriorityStore } from '@/stores/issuePriority'
import { useIssueKindStore } from '@/stores/issueKind'
import { useBoardStore } from '@/board/stores/board'
import BoardFilterInput from '@/board/components/BoardFilterInput.vue'
import MenuToggleButton from '@/board/components/MenuToggleButton.vue'
import CustomCheckbox from '@/components/issues/CustomCheckbox.vue'
import { initDueItems, type IDueItem } from '@/board/constants/boardInitials'

const boardStore = useBoardStore()
const { filterStr, filterSetup } = storeToRefs(boardStore)
const issuePriorityStore = useIssuePriorityStore()
const { issuePriorities } = storeToRefs(issuePriorityStore)
const issueKindStore = useIssueKindStore()
const { issueKinds } = storeToRefs(issueKindStore)

const isHiddenModal = ref(true)
const isHiddenDueDateMenu = ref(true)
const isHiddenPriorityMenu = ref(false)
const isHiddenKindMenu = ref(false)
const dueItems = ref<IDueItem[]>([...initDueItems])
const targetDropDown = ref(null)

onClickOutside(targetDropDown, () => {
  isHiddenModal.value = true
})

const toggleDueDateMenu = () => {
  isHiddenDueDateMenu.value = !isHiddenDueDateMenu.value
}

const togglePriorityMenu = () => {
  isHiddenPriorityMenu.value = !isHiddenPriorityMenu.value
}

const toggleKindMenu = () => {
  isHiddenKindMenu.value = !isHiddenKindMenu.value
}
const cancelFilterSetup = () => {
  filterSetup.value = { prioritiesChecked: [], kindsChecked: [] }
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
            <BoardFilterInput v-model="filterStr" />
          </div>

          <div class="mx-6 border-b-2 border-gray-400/50"></div>

          <div class="text-base">
            <div class="flex items-center justify-between text-base">
              <div class="flex w-full items-center justify-between">
                <div class="font-semibold">Due date</div>
                <div class="flex items-center gap-3 font-light text-teal-400">
                  <MenuToggleButton
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
              <button @click="cancelFilterSetup">
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
                <MenuToggleButton
                  @click="togglePriorityMenu"
                  :isHiddenItem="isHiddenPriorityMenu"
                />
              </div>
            </div>

            <div v-if="!isHiddenPriorityMenu" class="ml-3 mt-2 grid">
              <div v-for="priority in issuePriorities" :key="priority.id">
                <CustomCheckbox
                  :label="priority.label"
                  :value="priority"
                  v-model="filterSetup.prioritiesChecked"
                />
              </div>
            </div>
          </div>

          <div class="mx-6 border-b-2 border-gray-400/50"></div>

          <div>
            <div class="flex items-center justify-between text-base">
              <button @click="cancelFilterSetup">
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
                <MenuToggleButton @click="toggleKindMenu" :isHiddenItem="isHiddenKindMenu" />
              </div>
            </div>

            <div v-if="!isHiddenKindMenu" class="ml-3 mt-2 grid">
              <div v-for="kind in issueKinds" :key="kind.id">
                <CustomCheckbox
                  :label="kind.label"
                  :value="kind"
                  v-model="filterSetup.kindsChecked"
                />
              </div>
            </div>
          </div>

          <div class="mx-6 border-b-2 border-gray-400/50"></div>
        </div>
      </div>
    </div>
  </div>
</template>
