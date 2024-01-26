<script setup lang="ts">
import { reactive } from 'vue'
import { Icon } from '@iconify/vue'
import type { ISideMenuItem } from '@/types'
import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem.vue'
import { activeMenuItem, inactiveMenuItem } from '@/assets/styles/twClasses'

import projects from '@/data/dummyProjects'

let projectsMenu = reactive(
  projects.map((project) => {
    const item = {
      name: project.title,
      label: project.title,
      path: `/project/${project.id}`,
      icon: 'bi:app'
    }
    return item
  })
)

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
  },
  {
    name: 'Users',
    label: 'Users',
    path: '/users',
    icon: 'ph:users'
  }
])
</script>

<template>
  <div class="overflow-y-auto">
    <router-link
      class="ml-1 flex items-center whitespace-nowrap px-4 py-1"
      :class="[$route.name === 'Projects' ? activeMenuItem : inactiveMenuItem]"
      to="/projects"
    >
      <div class="flex w-full justify-between">
        <span class="mx-4">Boards</span>
        <Icon
          class="w-6 min-w-[theme('spacing[5]')] text-3xl hover:text-orange-400"
          :icon="'fluent-mdl2:boards'"
          :inline="true"
        />
      </div>
    </router-link>

    <nav class="mt-2" v-for="item in projectsMenu" :key="`${item.name} `">
      <sidebar-link-item :item="item" />
    </nav>

    <div class="mx-6 my-6 border-b-2 border-gray-400"></div>

    <div className="mx-4 my-4 flex items-center justify-start">
      <div className="flex items-center">
        <span className="mx-2 text-md font-medium text-gray-300">General</span>
      </div>
    </div>

    <nav class="mt-2" v-for="item in generalMenu" :key="`${item.name}`">
      <sidebar-link-item :item="item" />
    </nav>
  </div>
</template>
