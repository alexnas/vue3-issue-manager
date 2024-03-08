import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserSettings = defineStore('userSettings', () => {
  const isBoardView = ref(true)
  const isSidebarHidden = ref(false)

  return { isBoardView, isSidebarHidden }
})
