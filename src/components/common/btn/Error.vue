<script setup lang="ts">
defineProps<{
  disabled?: boolean,
  loading?: boolean,
  text: string
}>()

const emits = defineEmits<{(e: 'click'): void}>()

const onClick = () => emits('click')
</script>

<template>
  <v-btn
    color="error"
    :disabled="disabled"
    :loading="loading"
    @click="onClick"
  >
    {{ text }}
  </v-btn>
</template>
