<script setup lang="ts">
import { useModalStore } from '@/stores/modal'
import BaseModal from '@/components/modal/BaseModal.vue'
const modalStore = useModalStore()

const closeModal = () => {
  modalStore.resetModalState()
}
</script>

<template>
  <base-modal @close-modal="closeModal">
    <div
      class="relative my-8 rounded border border-gray-200 bg-gray-50 px-5 py-4 shadow-md md:px-10"
    >
      <h3>Issue Form</h3>
    </div>
  </base-modal>
</template>
