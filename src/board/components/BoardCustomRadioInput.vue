<script setup lang="ts">
import type { PropType } from 'vue'
import { Icon } from '@iconify/vue'
import type { IIssuePriority } from '@/types'

defineProps({
  value: { type: Object as PropType<IIssuePriority | null> },
  item: { type: Object }
})
</script>

<template>
  <div class="inline-flex items-center gap-4">
    <label
      class="relative flex cursor-pointer items-center rounded-full p-2"
      htmlFor="ripple-on"
      data-ripple-dark="true"
    >
      <input
        type="radio"
        :value="value"
        :checked="value == item"
        @change="$emit('update:modelValue', item)"
        class="before:content[''] before:bg-blue-gray-500 peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-gray-300 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:opacity-0 before:transition-opacity checked:border-teal-600 checked:bg-teal-600 checked:before:bg-gray-900 hover:before:opacity-10 dark:border"
      />
      <span
        class="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100"
      >
        <Icon class="h-5 w-5" :icon="'mdi:tick'" :inline="true" />
      </span>
    </label>
    <label class="cursor-pointer select-none font-light" htmlFor="ripple-on">
      <span>{{ item?.label }}</span>
    </label>
  </div>
</template>
