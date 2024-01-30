<script setup lang="ts">
import type { PropType } from 'vue'
import { Icon } from '@iconify/vue'
import type { IUser, IUserKeys, IUserTableCol } from '@/types.ts'
import AddNewButton from '@/components/shared/AddNewButton.vue'
import { formatDateTime } from '@/tools/formatDate'

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
  <div class="pl-2">Totally: {{ users.length }} users.</div>

  <div
    class="mb-2 mt-0 flex h-12 max-h-12 w-auto items-center justify-end gap-8 text-gray-600 dark:text-gray-200 lg:-mt-6"
  >
    <div class="flex gap-3 pl-2">
      <div class="text-md flex items-center">Filter</div>
      <input
        class="w-full max-w-72 rounded-sm border-2 border-gray-400 bg-gray-300 p-1 text-gray-600 dark:bg-gray-300"
        type="text"
        placeholder="Filter"
      />
    </div>
    <AddNewButton @openAddNew="handleAddNewClick()" />
  </div>

  <div v-if="users.length > 0" class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-left text-sm text-gray-500 dark:text-gray-300 rtl:text-right">
      <thead
        class="sticky top-0 bg-teal-100 text-xs uppercase text-gray-700 dark:bg-teal-700 dark:text-gray-100"
      >
        <tr>
          <th scope="col" class="px-4 py-3">#</th>
          <th
            v-for="({ field, title }, ids) in tableCols"
            :key="ids"
            scope="col"
            class="cursor-pointer whitespace-nowrap px-4 py-3 hover:rounded-md hover:bg-teal-200 dark:hover:bg-teal-800"
            @click="handleSort(field)"
          >
            {{ title }}
          </th>
          <th scope="col" class="px-4 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(user, idx) in users"
          :key="user.id"
          class="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-800 even:dark:bg-gray-700"
        >
          <td class="px-4 py-3">{{ idx + 1 }}</td>
          <td class="px-4 py-3">{{ user.id }}</td>
          <td class="px-4 py-3">
            <Icon v-if="user.isActive" icon="mdi:tick" class="text-3xl text-green-400" />
            <Icon v-else icon="mdi:cancel" class="text-3xl text-red-300" />
          </td>
          <td class="px-4 py-3">{{ user.name }}</td>
          <td class="px-4 py-3">{{ user.email }}</td>
          <td class="px-4 py-3">{{ user.roleId }}</td>
          <!-- <td class="px-4 py-3">{{ 'useItemNameById(user.roleId, roles)' }}</td> -->
          <td class="px-4 py-3">{{ formatDateTime(user.createdAt) }}</td>
          <td class="px-4 py-3">{{ formatDateTime(user.updatedAt) }}</td>
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
