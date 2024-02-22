<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Icon } from '@iconify/vue'
import { useModalStore } from '@/stores/modal'

defineEmits(['close-modal'])
defineProps({
  modalTitle: {
    type: String,
    default: 'Card Title'
  }
})

const modalStore = useModalStore()
const { isModalActive } = storeToRefs(modalStore)
</script>

<template>
  <Teleport to="body">
    <div
      v-show="isModalActive"
      class="absolute left-0 top-0 flex h-screen w-full justify-center bg-black bg-opacity-60 px-8"
    >
      <div
        v-if="isModalActive"
        class="relative mx-auto mt-32 w-11/12 max-w-screen-md self-start bg-gray-100 p-6 text-teal-700 shadow-md dark:bg-gray-700 dark:text-teal-300 sm:rounded-lg md:w-2/3"
      >
        <h1 class="mb-4 text-2xl">{{ modalTitle }}</h1>
        <button
          class="absolute right-0 top-0 mr-5 mt-4 cursor-pointer rounded text-gray-400 transition duration-150 ease-in-out hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-gray-600 dark:focus:ring-gray-500"
          @click="$emit('close-modal')"
          aria-label="close modal"
          role="button"
        >
          <Icon
            class="h-5 w-5 dark:bg-gray-700 dark:text-gray-300 dark:hover:text-orange-500"
            :icon="'ant-design:close-outlined'"
            :inline="true"
          />
        </button>

        <slot />
      </div>
    </div>
  </Teleport>
</template>
