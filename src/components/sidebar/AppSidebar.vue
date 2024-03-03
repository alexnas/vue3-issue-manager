<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { useUserSettings } from '@/stores/userSettings'
import SidebarMenu from '@/components/sidebar/SidebarMenu.vue'

const userSettingsStore = useUserSettings()
const { isSidebarHidden } = storeToRefs(userSettingsStore)
</script>

<template>
  <div
    class="flex w-56 min-w-[theme('spacing[56]')] flex-col bg-gray-600"
    :class="[isSidebarHidden ? 'mx-0 w-0 min-w-0 bg-gray-600' : '']"
  >
    <div class="mx-4 my-4 flex items-center justify-start">
      <div class="flex items-center gap-4">
        <span v-if="!isSidebarHidden" class="mx-2 text-2xl font-semibold text-gray-100"
          >Workspace</span
        >
        <button
          @click="isSidebarHidden = !isSidebarHidden"
          :class="[
            isSidebarHidden
              ? 'border-0  hover:bg-gray-500 hover:shadow-inner hover:shadow-gray-200'
              : ''
          ]"
          class="cursor-pointer rounded-lg p-2 text-center text-xl font-medium text-teal-500 hover:bg-gray-500 hover:text-orange-400"
        >
          <Icon
            v-if="!isSidebarHidden"
            icon="ant-design:left-outlined"
            :inline="true"
            class="h-6 w-6"
          />
        </button>
      </div>
    </div>
    <div v-if="!isSidebarHidden">
      <sidebar-menu />
    </div>
  </div>
</template>

<style scoped></style>
