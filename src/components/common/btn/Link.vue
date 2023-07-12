<script setup lang="ts">
import type { AppRoute } from '~/types/AppRoute'

withDefaults(defineProps<{
  disabled?: boolean,
  loading?: boolean,
  text: string,
  to: AppRoute
}>(), {
  disabled: false
})

const emits = defineEmits<{(e: 'click'): void}>()

const onClick = () => emits('click')
</script>

<template>
  <nuxt-link
    v-if="!disabled"
    :to="to"
  >
    <v-btn
      color="primary"
      :loading="loading"
      @click="onClick"
    >
      {{ text }}
    </v-btn>
  </nuxt-link>

  <!-- disabledがtrueだったときにレンダリングするハリボテ -->
  <template v-else>
    <v-btn
      color="primary"
      disabled
      :loading="loading"
      @click="undefined"
    >
      {{ text }}
    </v-btn>
  </template>
</template>
