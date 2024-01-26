<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { activeNavMenuItem, inactiveNavMenuItem } from '@/assets/styles/twClasses'
import { reactive } from 'vue'
import type { INavbarMenuItem } from '@/types'

let navbarMenu: INavbarMenuItem[] = reactive([
  {
    name: 'Home',
    label: 'Home',
    path: '/'
  },
  {
    name: 'About',
    label: 'About',
    path: '/about'
  }
])
</script>

<template>
  <div v-for="item in navbarMenu" :key="`${item.name}`" class="sm:ml-6 sm:block">
    <router-link
      class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700"
      :class="[$route.name === item.name ? activeNavMenuItem : inactiveNavMenuItem]"
      aria-current="page"
      :to="item.path"
      >{{ item.label }}</router-link
    >
  </div>
</template>

<style scoped></style>
