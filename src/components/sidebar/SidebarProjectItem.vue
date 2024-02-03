<script setup lang="ts">
import type { PropType } from 'vue'
import { Icon } from '@iconify/vue'
import type { IProject } from '@/types'
import { activeMenuItem, inactiveMenuItem } from '@/assets/styles/twClasses'

const props = defineProps({
  project: {
    type: Object as PropType<IProject>,
    default: () => ({})
  }
})

const emit = defineEmits<{
  (e: 'selectProject', id: number): void
}>()

const onSelectProject = () => {
  emit('selectProject', +props.project.id)
}
</script>

<template>
  <router-link
    @click="onSelectProject()"
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
