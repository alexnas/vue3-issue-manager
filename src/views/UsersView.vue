<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import MainViewContainer from '@/views/MainViewContainer.vue'
import UsersTable from '@/components/users/UsersTable.vue'

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const pageTitle = 'Users List'
</script>

<template>
  <main-view-container :pageTitle="pageTitle">
    <users-table :users="users" />
  </main-view-container>
</template>
