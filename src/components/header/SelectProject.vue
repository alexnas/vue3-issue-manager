<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { onClickOutside } from '@vueuse/core'
import { Icon } from '@iconify/vue'
import { useIssueTableColStore } from '@/stores/issueTableCol'
import { useProjectStore } from '@/stores/project'
import { getProjectById } from '@/tools/getProjectById'
import SelectProjectItem from '@/components/header/SelectProjectItem.vue'

const route = useRoute()

const projectStore = useProjectStore()
const { projects, currentProject } = storeToRefs(projectStore)

const issueTableColStore = useIssueTableColStore()
const { currentIssueTableCols } = storeToRefs(issueTableColStore)

const isHiddenMenu = ref(true)
const targetDropDown = ref(null)

const handleSelectProject = (id: number | null) => {
  if (id) {
    const selectedProject = getProjectById(projects.value, id)
    selectedProject && projectStore.setCurrentProject(selectedProject)
  }
}

onClickOutside(targetDropDown, () => {
  isHiddenMenu.value = true
  issueTableColStore.setCurrentIssueTableCols(currentIssueTableCols.value)
})

const titleActiveClass = computed(() => {
  const re = /projects\/\d\/issues/
  return route.path.match(re) ? 'text-orange-400' : ''
})
</script>

<template>
  <div class="-lg:mb-2 flex w-full items-center justify-start gap-3 lg:ml-8">
    <router-link
      @click="handleSelectProject(currentProject && +currentProject.id)"
      :to="`/projects/${currentProject?.id}/issues`"
    >
      <div
        class="max-w-40 truncate text-xl font-normal text-gray-300 lg:max-w-96"
        :class="titleActiveClass"
      >
        {{ currentProject?.title }}
      </div>
    </router-link>

    <button
      v-if="isHiddenMenu"
      @click="isHiddenMenu = !isHiddenMenu"
      class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-800 p-2 text-center text-xl font-medium text-teal-500 hover:bg-gray-100 hover:text-orange-400 dark:hover:bg-gray-600"
    >
      <Icon class="w-5" :icon="'la:angle-down-solid'" :inline="true" />
    </button>
    <button
      v-if="!isHiddenMenu"
      @click="isHiddenMenu = true"
      class="flex cursor-pointer items-center gap-2 rounded-lg border-2 border-gray-600 p-2 text-center text-xl font-medium text-orange-500 hover:bg-gray-100 hover:text-orange-400 dark:hover:bg-gray-600"
    >
      <Icon class="w-5" :icon="'la:angle-up-solid'" :inline="true" />
    </button>
  </div>

  <div class="overflow-y-auto">
    <!-- Dropdown menu -->
    <div
      v-if="!isHiddenMenu"
      ref="targetDropDown"
      id="dropdownMenu"
      class="absolute -right-2 z-10 mt-2 w-full min-w-60 divide-y divide-gray-600 rounded-md border-2 border-gray-300 bg-gray-50 shadow dark:bg-gray-700"
    >
      <nav class="mt-2" v-for="project in projects" :key="`${project.id}`">
        <select-project-item :project="project" @select-project="handleSelectProject" />
      </nav>
    </div>
  </div>
</template>
