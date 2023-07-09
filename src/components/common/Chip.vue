<script setup lang="ts">
defineProps<{
  size?: string,
  color?: string,
  text: string
}>()
</script>

<template>
  <v-chip
    :size="size"
    :color="color"
  >
    {{ text }}
  </v-chip>
</template>
