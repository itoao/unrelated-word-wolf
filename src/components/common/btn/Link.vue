<script setup lang="ts">
import type { AppRoute } from '~/types/AppRoute'

defineProps<{
  disabled?: boolean,
  loading?: boolean,
  text: string,
  to: AppRoute
}>()

const emits = defineEmits<{(e: 'click'): void}>()

const onClick = () => emits('click')
</script>

<template>
  <nuxt-link :to="to">
    <v-btn
      color="primary"
      :disabled="disabled"
      :loading="loading"
      @click="onClick"
    >
      {{ text }}
    </v-btn>
  </nuxt-link>
</template>
