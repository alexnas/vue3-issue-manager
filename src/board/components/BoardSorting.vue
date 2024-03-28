<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { onClickOutside } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import type { IIssueTableCol } from '@/types'
import { useBoardStore } from '@/board/stores/board'
import BoardSortItem from '@/board/components/BoardSortItem.vue'

const boardStore = useBoardStore()
const { visibleBoardSortingFields, sortProperty, sortOrder, currentBoardSortItem } =
  storeToRefs(boardStore)

const isHiddenModal = ref(true)
const targetDropDown = ref(null)
const sortButtonTitle = ref<string>(currentBoardSortItem.value.title)

onClickOutside(targetDropDown, () => {
  isHiddenModal.value = true
})

const handleSelectSortItem = (sortItem: IIssueTableCol) => {
  sortProperty.value = sortItem.field
  sortButtonTitle.value = sortItem.title
  currentBoardSortItem.value = sortItem
}
const hangleChangeSortDirection = () => {
  sortOrder.value = sortOrder.value == 'asc' ? 'desc' : 'asc'
}
</script>

<template>
  <div class="-lg:mb-2 flex w-full items-center justify-between gap-4 lg:ml-8">
    <div
      class="text-md flex items-center gap-2 text-nowrap rounded-lg border-2 border-gray-600 p-2 text-center font-medium text-teal-500 hover:bg-gray-100 hover:text-orange-400"
      :class="`${isHiddenModal ? 'dark:bg-gray-600/50 dark:hover:bg-gray-600' : 'bg-gray-600 dark:hover:bg-gray-600/50'}`"
    >
      <div
        @click="hangleChangeSortDirection"
        class="w-5 cursor-pointer text-2xl text-gray-300 hover:text-green-400"
      >
        <Icon v-if="sortOrder == 'asc'" :icon="'ion:caret-down'" :inline="true" />
        <Icon v-if="sortOrder == 'desc'" :icon="'ion:caret-up'" :inline="true" />
      </div>

      <button
        v-if="isHiddenModal"
        @click="isHiddenModal = !isHiddenModal"
        class="flex cursor-pointer items-center gap-2"
      >
        {{ sortButtonTitle }}
        <Icon class="w-5" :icon="'flowbite:angle-down-solid'" :inline="true" />
      </button>
      <button v-if="!isHiddenModal" @click="true" class="flex cursor-pointer items-center gap-2">
        {{ sortButtonTitle }}
        <Icon class="w-5" :icon="'material-symbols:close'" :inline="true" />
      </button>
    </div>
  </div>

  <div class="overflow-y-auto">
    <!-- Dropdown menu -->
    <div
      v-if="!isHiddenModal"
      ref="targetDropDown"
      id="dropdownMenu"
      class="absolute -left-2 top-14 z-10 w-full min-w-60 divide-y divide-gray-600 rounded-md border-2 border-gray-300 bg-gray-50 shadow dark:bg-gray-700"
    >
      <div class="p-4">
        <div class="mb-3 flex justify-center text-base">
          <div v-if="visibleBoardSortingFields.length > 0">Select sorting field</div>
          <div v-else>Sorting fields not available</div>
        </div>
        <form v-if="visibleBoardSortingFields.length > 0">
          <div class="mx-6 mb-4 border-b-2 border-gray-400"></div>
          <div>
            <div v-for="(sortItem, idx) in visibleBoardSortingFields" :key="idx">
              <div v-if="sortItem">
                <board-sort-item :sortItem="sortItem" @select-sort-item="handleSelectSortItem" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
