<script setup lang="ts">
import { computed, type PropType } from 'vue'
import { Icon } from '@iconify/vue'
import type { IProject } from '@/types'
import { activeMenuItem, inactiveMenuItem } from '@/assets/styles/twClasses'
import { useRoute } from 'vue-router'

const route = useRoute()

const props = defineProps({
  project: {
    type: Object as PropType<IProject>,
    default: () => ({})
  }
})

const emit = defineEmits<{
  (e: 'selectProject', id: number): void
}>()

const menuActiveClass = computed(() => {
  return +route.params.projectId === +props.project.id ? activeMenuItem : inactiveMenuItem
})

const onSelectProject = () => {
  emit('selectProject', +props.project.id)
}
</script>

<template>
  <router-link
    @click="onSelectProject()"
    class="ml-1 flex items-center whitespace-nowrap border-l-4 px-4 py-1"
    :class="[menuActiveClass]"
    :to="`/projects/${project.id}/issues`"
  >
    <Icon
      class="w-6 min-w-[theme('spacing[5]')] text-3xl hover:text-orange-400"
      :icon="'bi:app'"
      :inline="true"
    />
    <span class="mx-4 max-w-40 truncate">{{ project.title }}</span>
  </router-link>
</template>

<style scoped></style>
