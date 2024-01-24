<script setup lang="ts">
import { activeMenuItem, inactiveMenuItem } from '@/assets/styles/twClasses'
import { Icon } from '@iconify/vue'

defineProps({
  item: {
    type: Object,
    default: () => ({})
  }
})
</script>

<template>
  <router-link
    class="ml-1 flex items-center whitespace-nowrap border-l-4 px-4 py-1"
    :class="[$route.name === item.name ? activeMenuItem : inactiveMenuItem]"
    :to="item.path"
  >
    <Icon
      class="w-6 min-w-[theme('spacing[5]')] text-3xl hover:text-orange-400"
      :icon="item.icon || 'tdesign:dart-board'"
      :inline="true"
    />
    <span class="mx-4">{{ item.label }}</span>
  </router-link>
</template>

<style scoped></style>
