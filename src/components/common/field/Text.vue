<script setup lang="ts">
type Props = {
  clearable?: boolean
  disabled?: boolean
  hint?: string
  label?: string
  modelValue: string
  placeholder?: string
  rules?: [(val: string) => true | string]
}

const props = withDefaults(defineProps<Props>(), {
  clearable: false,
  disabled: false,
  hint: '',
  placeholder: '',
  rules: undefined
})

const emit = defineEmits<{(e: 'update:modelValue', value: string): void}>()

const onChange = (event: string) => {
  emit('update:modelValue', event)
}
</script>

<template>
  <v-text-field
    v-bind="props"
    hide-details="auto"
    persistent-hint
    @update:model-value="onChange"
  />
</template>
