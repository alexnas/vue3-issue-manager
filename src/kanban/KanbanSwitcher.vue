<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserSettings } from '@/stores/userSettings'
import { activeNavMenuItem, inactiveNavMenuItem } from '@/assets/styles/twClasses'

const userSettingsStore = useUserSettings()
const { isKanbanView } = storeToRefs(userSettingsStore)
</script>

<template>
  <div class="flex gap-1 text-white">
    <button
      class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
      :class="[isKanbanView ? activeNavMenuItem : inactiveNavMenuItem]"
      @click="isKanbanView = true"
    >
      Kanban
    </button>
    <button
      class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
      :class="[!isKanbanView ? activeNavMenuItem : inactiveNavMenuItem]"
      @click="isKanbanView = false"
    >
      Table
    </button>
  </div>
</template>

<style scoped></style>
