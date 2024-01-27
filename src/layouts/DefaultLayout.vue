<script setup lang="ts">
import AppHeader from '@/components/header/AppHeader.vue'
import AppFooter from '@/components/footer/AppFooter.vue'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
</script>

<template>
  <div class="font-roboto flex h-screen flex-col bg-gray-200 dark:bg-gray-500">
    <AppHeader />

    <main class="flex flex-1 overflow-hidden">
      <AppSidebar />
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
