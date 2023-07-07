<script setup lang="ts">
import type { AppRoute } from '~/types/AppRoute'

defineProps<{
  disabled?: boolean,
  loading?: boolean,
  text: string,
  to: AppRoute
}>()
</script>

<template>
  <nuxt-link :to="to">
    <v-btn
      color="primary"
      :disabled="disabled"
      :loading="loading"
    >
      {{ text }}
    </v-btn>
  </nuxt-link>
</template>
