<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import TableViewContainer from '@/views/TableViewContainer.vue'
import UsersTable from '@/components/users/UsersTable.vue'

const userStore = useUserStore()
const { users } = storeToRefs(userStore)

const pageTitle = 'Users List'
</script>

<template>
  <table-view-container :pageTitle="pageTitle">
    <users-table :users="users" />
  </table-view-container>
</template>
