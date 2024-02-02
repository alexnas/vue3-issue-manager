<script setup lang="ts">
import { onMounted, type PropType } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import type { IProject } from '@/types'
import { useProjectStore } from '@/stores/project'
import { activeMenuItem, inactiveMenuItem } from '@/assets/styles/twClasses'
import { getProjecById } from '@/tools/getProjectById'

const route = useRoute()
const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)

defineProps({
  project: {
    type: Object as PropType<IProject>,
    default: () => ({})
  }
})

const handleProject = (id: number) => {
  const selectedProject = getProjecById(projects.value, id)
  selectedProject && projectStore.setCurrentProject(selectedProject)
}

onMounted(() => {
  handleProject(+route.params.id)
})
</script>

<template>
  <router-link
    @click="handleProject(+project.id)"
    class="ml-1 flex items-center whitespace-nowrap border-l-4 px-4 py-1"
    :class="[+$route.path.split('/').slice(-1) === +project.id ? activeMenuItem : inactiveMenuItem]"
    :to="`/issues/project/${project.id}`"
  >
    <Icon
      class="w-6 min-w-[theme('spacing[5]')] text-3xl hover:text-orange-400"
      :icon="'bi:app'"
      :inline="true"
    />
    <span class="mx-4">{{ project.title }}</span>
  </router-link>
</template>

<style scoped></style>
