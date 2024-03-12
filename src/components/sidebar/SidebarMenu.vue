<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { onClickOutside } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import type { ISideMenuItem } from '@/types'
import { useProjectStore } from '@/stores/project'
import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem.vue'
import { activeMenuItem, inactiveMenuItem } from '@/assets/styles/twClasses'
import { getProjectById } from '@/tools/getProjectById'

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)
const isHiddenMenu = ref(true)
const targetDropDown = ref(null)

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

onClickOutside(targetDropDown, () => {
  isHiddenMenu.value = true
})

const handleSelectProject = (id: number) => {
  const selectedProject = getProjectById(projects.value, id)
  selectedProject && projectStore.setCurrentProject(selectedProject)
}

onMounted(async () => {
  const data = localStorage.getItem('currentProject')
  const currentProject = data ? JSON.parse(data) : null
  projectStore.setCurrentProject(currentProject)
  await projectStore.getProjects()
})
</script>

<template>
  <div class="flex items-center justify-between gap-4 pr-4">
    <router-link
      class="ml-1 flex w-full items-center whitespace-nowrap px-4 py-1"
      :class="[$route.name === 'Projects' ? activeMenuItem : inactiveMenuItem]"
      to="/projects"
    >
      <div class="flex w-full justify-between">
        <div class="flex items-center justify-start">
          <Icon
            class="w-6 min-w-[theme('spacing[5]')] text-3xl hover:text-orange-400"
            :icon="'fluent-mdl2:boards'"
            :inline="true"
          />
          <span class="mx-4">Projects</span>
        </div>
      </div>
    </router-link>
  </div>

  <div class="overflow-y-auto">
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
