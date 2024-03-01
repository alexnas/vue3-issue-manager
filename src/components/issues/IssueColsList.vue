<script setup lang="ts">
import { ref, type PropType } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { type IIssueTableCol } from '@/types'
import CustomCheckbox from '@/components/issues/CustomCheckbox.vue'

const props = defineProps({
  issueTableCols: Object as PropType<IIssueTableCol[]>
})

const isHiddenMenu = ref(true)
const targetDropDown = ref(null)

onClickOutside(targetDropDown, () => {
  isHiddenMenu.value = true
  console.log('onClickOutside', props.issueTableCols)
})
</script>

<template>
  <div class="flex w-full items-center justify-between gap-4">
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
        <div class="mb-4 flex justify-center text-lg">Select visible columns</div>
        <div v-for="col in props.issueTableCols" :key="`${col.field}`">
          <CustomCheckbox :label="col.title" v-model="col.isVisible" :isDisabled="false" />
        </div>
      </form>
    </div>
  </div>
</template>
