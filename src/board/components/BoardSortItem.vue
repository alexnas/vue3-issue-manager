<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import type { IIssueTableCol } from '@/types'
import { useBoardStore } from '@/board/stores/board'
import { activeMenuItem, inactiveMenuItem } from '@/assets/styles/twClasses'

const boardStore = useBoardStore()
const { sortProperty } = storeToRefs(boardStore)

const props = defineProps({
  sortItem: {
    type: Object as PropType<IIssueTableCol>,
    default: () => ({})
  }
})

const emit = defineEmits<{
  (e: 'selectSortItem', sortItem: IIssueTableCol): void
}>()

const menuActiveClass = computed(() => {
  return props.sortItem.field === sortProperty.value ? activeMenuItem : inactiveMenuItem
})

const handleSort = () => {
  emit('selectSortItem', props.sortItem)
}
</script>

<template>
  <button
    @click.prevent="handleSort()"
    class="ml-1 flex items-center whitespace-nowrap border-l-4 px-4 py-1"
    :class="[menuActiveClass]"
  >
    <Icon
      class="w-6 min-w-[theme('spacing[5]')] text-3xl hover:text-orange-400"
      :icon="'bi:app'"
      :inline="true"
    />
    <span class="mx-4 max-w-40 truncate">{{ sortItem.title }}</span>
  </button>
</template>

<style scoped></style>
