<script setup lang="ts">
import SidebarMenu from '@/components/sidebar/SidebarMenu.vue'
</script>

<template>
  <div class="flex w-56 min-w-[theme('spacing[56]')] flex-col bg-gray-600">
    <div class="mx-4 my-4 flex items-center justify-start">
      <div class="flex items-center">
        <span class="mx-2 text-2xl font-semibold text-gray-100">Workspace</span>
        <div>
          <Icon
            icon="bi:person-circle"
            :inline="true"
            class="h-6 w-6 min-w-[theme('spacing[5]')] cursor-text text-3xl text-gray-400"
          />
        </div>
      </div>
    </div>

    <sidebar-menu />
  </div>
</template>

<style scoped></style>
