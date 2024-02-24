<script setup lang="ts">
import MainViewContainer from '@/views/MainViewContainer.vue'
const pageTitle = 'Ooops - there is no such page...'
</script>

<template>
  <main-view-container :pageTitle="pageTitle">
    <div class="container">
      <div class="mr-10 mt-5 text-right">
        <router-link :to="{ path: '/' }" replace>Back to Home</router-link>
      </div>
    </div>
  </main-view-container>
</template>
