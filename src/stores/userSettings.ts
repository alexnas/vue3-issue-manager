import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserSettings = defineStore('userSettings', () => {
  const isKanbanView = ref(true)
  const isSidebarHidden = ref(false)

  return { isKanbanView, isSidebarHidden }
})
