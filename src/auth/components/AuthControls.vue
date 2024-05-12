<script setup lang="ts">
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { useAuthStore } from '@/auth/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
const { isAuth, loggedUser } = storeToRefs(authStore)

const handleAuthUser = () => {
  if (!isAuth.value) {
    router.replace({ name: 'Auth' })
  }
  if (isAuth.value) {
    if (confirm('Are you sure to logout?')) {
      authStore.logout()
      isAuth.value = false
      router.replace({ name: 'Home' })
    }
  }
}
</script>

<template>
  <div class="ml-6 sm:ml-16">
    <!-- User on/off -->
    <div class="flex justify-center text-base text-teal-400">
      {{ isAuth ? loggedUser.name : 'Guest' }}
    </div>

    <div class="flex justify-end space-x-4">
      <button @click.prevent="handleAuthUser" class="uppercase text-gray-400 hover:text-gray-100">
        {{ isAuth ? 'Logout' : 'Login' }}
      </button>

      <div class="relative ml-3 mr-2 text-gray-400">
        <button
          type="button"
          class="rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <Icon
            v-if="isAuth"
            icon="bi:person-circle"
            :inline="true"
            class="h-6 w-6 min-w-[theme('spacing[5]')] cursor-text text-3xl text-gray-400"
          />
          <Icon
            v-else
            icon="ant-design:login-outlined"
            :inline="true"
            class="h-6 w-6 min-w-[theme('spacing[5]')] cursor-text text-3xl text-teal-400"
          />
        </button>
      </div>
    </div>
  </div>
</template>
