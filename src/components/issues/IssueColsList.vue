<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { onClickOutside } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { useIssueTableColStore } from '@/stores/issueTableCol'
import CustomCheckbox from '@/components/issues/CustomCheckbox.vue'

const issueTableColStore = useIssueTableColStore()
const { currentIssueTableCols } = storeToRefs(issueTableColStore)

const isHiddenMenu = ref(true)
const targetDropDown = ref(null)

onClickOutside(targetDropDown, () => {
  isHiddenMenu.value = true
  issueTableColStore.setCurrentIssueTableCols(currentIssueTableCols.value)
})
</script>

<template>
  <div class="-lg:mb-2 flex w-full items-center justify-between gap-4 lg:ml-8">
    <button
      v-if="isHiddenMenu"
      @click="isHiddenMenu = !isHiddenMenu"
      class="text-md flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-600 p-2 text-center font-medium text-teal-500 hover:bg-gray-600 hover:text-orange-400"
    >
      Fields<Icon class="w-5" :icon="'flowbite:angle-down-solid'" :inline="true" />
    </button>
    <button
      v-if="!isHiddenMenu"
      @click="isHiddenMenu = true"
      class="text-md flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-600 p-2 text-center font-medium text-orange-500 hover:bg-gray-600 hover:text-orange-400"
    >
      Fields<Icon class="w-5" :icon="'material-symbols:close'" :inline="true" />
    </button>
  </div>

  <div class="overflow-y-auto">
    <!-- Dropdown menu -->
    <div
      v-if="!isHiddenMenu"
      ref="targetDropDown"
      id="dropdownMenu"
      class="absolute right-0 z-10 w-full min-w-60 divide-y divide-gray-600 rounded-md bg-gray-700 shadow"
    >
      <form class="p-4">
        <div class="mb-3 flex justify-center text-lg">Select visible columns</div>
        <div class="mx-6 mb-4 border-b-2 border-gray-400"></div>
        <div v-for="col in currentIssueTableCols" :key="`${col.field}`">
          <CustomCheckbox :label="col.title" v-model="col.isVisible" :isDisabled="false" />
        </div>
      </form>
    </div>
  </div>
</template>
