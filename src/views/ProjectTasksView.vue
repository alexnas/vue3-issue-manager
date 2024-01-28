<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/project'
import ProjectViewContainer from '@/views/ProjectViewContainer.vue'
import ProjectTasksTable from '@/components/projects/ProjectTasksTable.vue'

const projectStore = useProjectStore()
const { projects } = storeToRefs(projectStore)

const route = useRoute()

let projectSelected = computed(() => {
  return projecById(Number(route.params.id))
})

const projecById = (id: number) => {
  const foundProject = projects?.value.find((project) => +project.id === +id)
  return foundProject || null
}
</script>

<template>
  <project-view-container :pageTitle="`${projectSelected?.title || 'Project is not found'}`">
    <project-tasks-table v-if="projectSelected" :project="projectSelected" />
  </project-view-container>
</template>
