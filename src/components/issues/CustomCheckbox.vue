<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps({
  modelValue: { type: [Array, Boolean] },
  value: { type: [Boolean, Object] },
  label: { type: String },
  isDisabled: { type: Boolean }
})
const emit = defineEmits(['update:modelValue'])
const model = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <div class="inline-flex items-center">
    <label
      class="relative flex cursor-pointer items-center rounded-full p-3"
      htmlFor="ripple-on"
      data-ripple-dark="true"
    >
      <input
        id="ripple-on"
        type="checkbox"
        v-model="model"
        :disabled="isDisabled"
        :value="value"
        class="before:content[''] border-blue-gray-200 before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-teal-600 checked:bg-teal-600 checked:before:bg-gray-900 hover:before:opacity-10"
      />
      <span
        class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
      >
        <Icon class="h-5 w-5" :icon="'mdi:tick'" :inline="true" />
      </span>
    </label>
    <label class="cursor-pointer select-none font-light" htmlFor="ripple-on">
      {{ label }}
    </label>
  </div>
</template>
