<script setup lang="ts">
import { Icon } from '@iconify/vue'
import NavBar from '@/components/header/NavBar.vue'
</script>

<template>
  <nav class="bg-gray-800">
    <div class="mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div
            class="flex flex-shrink-0 items-center rounded-md px-3 py-2 text-sm text-yellow-400 hover:text-amber-500"
          >
            <Icon
              class="mr-2"
              icon="ant-design:copyright-outlined"
              :inline="true"
              alt="Copyright"
            />
            2023
          </div>
          <div class="flex space-x-1">
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
