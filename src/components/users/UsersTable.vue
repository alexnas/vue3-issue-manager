<script setup lang="ts">
import type { PropType } from 'vue'
import type { IUser, IUserKeys, IUserTableCol } from '@/types.ts'
import AddNewButton from '@/components/shared/AddNewButton.vue'

defineProps({
  users: {
    type: Array as PropType<IUser[]>,
    default: () => []
  }
})

const tableCols: IUserTableCol[] = [
  { field: 'id', title: 'ID' },
  { field: 'isActive', title: 'ON' },
  { field: 'name', title: 'NAME' },
  { field: 'email', title: 'EMAIL' },
  { field: 'roleId', title: 'ROLE' },
  { field: 'createdAt', title: 'CREATED' },
  { field: 'updatedAt', title: 'UPDATED' }
]

const handleSort = (field: IUserKeys) => {
  alert(`Handle sort, ${field}`)
}

const handleAddNewClick = () => {
  alert('Add New User')
}

const handleViewClick = (user: IUser) => {
  alert(`View User name, ${user.name}`)
}

const handleEditClick = (user: IUser) => {
  alert(`Update User name, ${user.name}`)
}

const handleDeleteClick = async (user: IUser) => {
  alert(`Delete User name, ${user.name}`)
}
</script>

<template>
  <div class="mb-2 flex h-12 max-h-12 w-auto items-center justify-end gap-8">
    <div class="flex gap-2 text-gray-600">
      Filter <input class="w-full max-w-72" type="text" placeholder="Filter" />
    </div>
    <AddNewButton @openAddNew="handleAddNewClick()" />
  </div>

  <div v-if="users.length > 0" class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full bg-gray-50 text-left text-base text-gray-500">
      <thead class="sticky top-0 bg-gray-100 text-sm uppercase text-gray-700">
        <tr>
          <th scope="col" class="px-4 py-3">#</th>
          <th
            v-for="({ field, title }, ids) in tableCols"
            :key="ids"
            scope="col"
            class="cursor-pointer whitespace-nowrap rounded-lg px-4 py-3 hover:bg-teal-100"
            @click="handleSort(field)"
          >
            {{ title }}
          </th>
          <th scope="col" class="px-4 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, idx) in users" :key="user.id" class="border-b bg-white hover:bg-gray-100">
          <td class="px-4 py-3">{{ idx + 1 }}</td>
          <td class="px-4 py-3">{{ user.id }}</td>
          <td class="px-4 py-3">
            <Icon v-if="user.isActive" icon="mdi:tick" class="text-3xl text-green-400" />
            <Icon v-else icon="mdi:cancel" class="text-3xl text-red-300" />
          </td>
          <td class="px-4 py-3">{{ user.name }}</td>
          <td class="px-4 py-3">{{ user.email }}</td>
          <td class="px-4 py-3">{{ 'useItemNameById(user.roleId, roles)' }}</td>
          <td class="px-4 py-3">{{ 'formatDateTime(user.createdAt)' }}</td>
          <td class="px-4 py-3">{{ 'formatDateTime(user.updatedAt)' }}</td>
          <td class="flex px-4 py-3">
            <button
              @click.stop="handleViewClick(user)"
              type="button"
              class="mr-4 font-medium text-green-400 hover:text-green-600 hover:underline"
            >
              VIEW
            </button>
            <button
              @click.stop="handleEditClick(user)"
              type="button"
              class="mr-4 font-medium text-blue-300 hover:text-blue-600 hover:underline"
            >
              EDIT
            </button>
            <button
              @click.stop="handleDeleteClick(user)"
              type="button"
              class="font-medium text-rose-300 hover:text-rose-600 hover:underline"
            >
              DEL
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <div v-else>Sorry, no entries</div>
</template>

<style scoped></style>
