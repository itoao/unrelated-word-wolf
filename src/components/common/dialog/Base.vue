<script setup lang="ts">
type Props = {
  modelValue: boolean
  title: string
}

const props = defineProps<Props>()
</script>

<template>
  <v-dialog
    v-bind="props"
    max-width="800px"
    persistent
    scroll-strategy="none"
  >
    <v-card
      class="pa-4"
    >
      <v-card-title
        class="text-center"
      >
        {{ title }}
      </v-card-title>

      <slot />

      <v-card-actions
        class="pa-0 mx-auto"
      >
        <slot name="footer" />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
