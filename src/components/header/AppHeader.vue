<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { useUserSettings } from '@/stores/userSettings'
import DarkModeButton from '@/components/shared/DarkModeButton.vue'
import BoardSwitcher from '@/board/components/BoardSwitcher.vue'
import { useProjectStore } from '@/stores/project'
import { onMounted } from 'vue'
import SelectProject from '@/components/header/SelectProject.vue'

const projectStore = useProjectStore()
const { projects, currentProject } = storeToRefs(projectStore)

const userSettingsStore = useUserSettings()
const { isSidebarHidden } = storeToRefs(userSettingsStore)

onMounted(async () => {
  const data = localStorage.getItem('currentProject')
  const currentProject = data ? JSON.parse(data) : null
  projectStore.setCurrentProject(currentProject)
  await projectStore.getProjects()
})
</script>

<template>
  <header class="flex items-center justify-between bg-gray-800 p-4">
    <div class="flex gap-6">
      <button
        v-if="isSidebarHidden"
        @click="isSidebarHidden = !isSidebarHidden"
        class="cursor-pointer rounded-sm p-2 text-center text-xl font-medium text-teal-500 hover:bg-gray-500 hover:text-orange-400"
        :class="[
          isSidebarHidden
            ? 'border-1 -my-4 -ml-4 border-gray-700 bg-gray-700 hover:bg-gray-500 hover:shadow-inner hover:shadow-gray-200'
            : ''
        ]"
      >
        <Icon
          v-if="isSidebarHidden"
          icon="line-md:close-to-menu-alt-transition"
          :inline="true"
          class="h-9 w-9"
        />
      </button>

      <img alt="Vue logo" src="@/assets/logo.svg" width="30" height="30" />

      <div class="flex items-center">
        <div class="relative right-0 mr-1 p-1">
          <SelectProject />
        </div>
      </div>
    </div>

    <div class="flex items-center">
      <board-switcher />
      <div class="-mt-1 ml-6">
        <DarkModeButton />
      </div>
    </div>
  </header>
</template>

<style scoped></style>
