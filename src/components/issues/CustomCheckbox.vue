<script setup lang="ts">
import { computed } from 'vue'
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
  <div class="my-2 flex items-center">
    <input
      type="checkbox"
      v-model="model"
      :value="value"
      :disabled="isDisabled"
      class="mr-4 h-5 w-5"
    />
    <span>{{ label }}</span>
  </div>
</template>
