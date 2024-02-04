<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import type { ISideMenuItem } from '@/types'
import { useProjectStore } from '@/stores/project'
import SidebarLinkItem from '@/components/sidebar/SidebarLinkItem.vue'
import SidebarProjectItem from '@/components/sidebar/SidebarProjectItem.vue'
import { activeMenuItem, inactiveMenuItem } from '@/assets/styles/twClasses'
import { getProjectById } from '@/tools/getProjectById'

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)
const isHiddenMenu = ref(true)

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

const openDropDownMenu = () => {
  isHiddenMenu.value = !isHiddenMenu.value
}

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
    <button
      @click="openDropDownMenu()"
      class="cursor-pointer rounded-lg border-2 border-gray-500 p-2 text-center text-xl font-medium text-teal-500 hover:bg-gray-500 hover:text-orange-400"
    >
      <Icon class="w-5" :icon="'flowbite:angle-down-solid'" :inline="true" />
    </button>
  </div>

  <div class="overflow-y-auto">
    <!-- Dropdown menu -->
    <div
      v-if="!isHiddenMenu"
      id="dropdownInformation"
      class="z-10 w-full divide-y divide-gray-600 rounded-lg bg-gray-700 shadow"
    >
      <nav class="mt-2" v-for="project in projects" :key="`${project.id}`">
        <sidebar-project-item :project="project" @select-project="handleSelectProject" />
      </nav>
    </div>

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
