<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserSettings } from '@/stores/userSettings'

const userSettingsStore = useUserSettings()
const { isKanbanView } = storeToRefs(userSettingsStore)
</script>

<template>
  <div class="flex gap-2 text-white">
    <button @click="isKanbanView = true">Kanban</button>
    <button @click="isKanbanView = false">Table</button>
  </div>
</template>

<style scoped></style>
