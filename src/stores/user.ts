import { onMounted, ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { IUser } from '@/types'
import UserService from '@/services/UserService'

export const useUserStore = defineStore('user', () => {
  const users = ref<IUser[]>([])

  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const getUsers = async () => {
    try {
      loading.value = true
      const { data } = await UserService.fetchUsers()
      users.value = data
      loading.value = false
      error.value = null
    } catch (err: any) {
      loading.value = false
      if (axios.isAxiosError(error)) {
        error.value = err.message
        console.log('Error', err.message)
      } else {
        error.value = 'Unexpected error encountered'
        console.log('Error', err)
      }
    }
  }

  onMounted(async () => {
    await getUsers()
  })

  return {
    users,
    loading,
    error,
    getUsers
  }
})
