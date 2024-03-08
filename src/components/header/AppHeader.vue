<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { useUserSettings } from '@/stores/userSettings'
import NavBar from '@/components/header/NavBar.vue'
import DarkModeButton from '@/components/shared/DarkModeButton.vue'
import BoardSwitcher from '@/board/components/BoardSwitcher.vue'

const userSettingsStore = useUserSettings()
const { isSidebarHidden } = storeToRefs(userSettingsStore)
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
      <board-switcher />
    </div>

    <div class="flex">
      <nav class="flex gap-6">
        <NavBar />
      </nav>
      <div class="-mt-1 ml-6"><DarkModeButton /></div>
    </div>
  </header>
</template>

<style scoped></style>
