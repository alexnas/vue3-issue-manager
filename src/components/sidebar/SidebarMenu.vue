<script setup lang="ts">
import { reactive } from 'vue'
import type { ISideMenuItem } from '@/types'
import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem.vue'

let boardsMenu: ISideMenuItem[] = reactive([
  {
    name: 'Board1',
    label: 'Board1',
    path: '/board1',
    icon: 'bi:app'
  },
  {
    name: 'Board2',
    label: 'Board2',
    path: '/board2',
    icon: 'bi:app'
  },
  {
    name: 'CreateBoard',
    label: 'Create New Board',
    path: '/create-board',
    icon: 'dashicons:plus-alt'
  }
])

let generalMenu: ISideMenuItem[] = reactive([
  {
    name: 'Settings',
    label: 'Settings',
    path: '/settings',
    icon: 'material-symbols-light:settings-outline'
  },
  {
    name: 'Home',
    label: 'Home',
    path: '/',
    icon: 'tabler:home'
  },
  {
    name: 'About',
    label: 'About',
    path: '/about',
    icon: 'mdi:about-circle-outline'
  }
])
</script>

<template>
  <div class="overflow-y-auto">
    <div className="mx-4 my-4 flex items-center justify-start">
      <div className="flex items-center">
        <span className="mx-2 text-md font-medium text-gray-300">Boards in work</span>
      </div>
    </div>

    <nav class="mt-2" v-for="item in boardsMenu" :key="`${item.name} `">
      <SidebarLinkItem :item="item" />
    </nav>

    <div class="mx-6 my-6 border-b-2 border-gray-400"></div>

    <div className="mx-4 my-4 flex items-center justify-start">
      <div className="flex items-center">
        <span className="mx-2 text-md font-medium text-gray-300">General</span>
      </div>
    </div>

    <nav class="mt-2" v-for="item in generalMenu" :key="`${item.name}`">
      <SidebarLinkItem :item="item" />
    </nav>
  </div>
</template>
