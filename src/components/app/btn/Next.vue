<script setup lang="ts">
import type { AppRoute } from '~/types/AppRoute'

defineProps<{
  disabled: boolean
  to: AppRoute
}>()

</script>

<template>
  <v-col class="text-center">
    <common-btn-link
      :disabled="disabled"
      text="つぎへ"
      :to="to"
    />
  </v-col>
</template>
