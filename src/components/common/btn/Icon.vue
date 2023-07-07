<script setup lang="ts">
type Props = {
  disabled: boolean
  icon: `mdi-${string}`
  iconColor?: string
  iconSize?: string | number
  color?: string
  width?: number
}

withDefaults(defineProps<Props>(), {
  color: 'slate200',
  iconColor: 'primary',
  iconSize: undefined,
  width: undefined
})

const emits = defineEmits<{(e: 'click'): void}>()

const onClick = () => emits('click')
</script>

<template>
  <v-btn
    icon
    variant="text"
    class="bg-white"
    :width="width"
    :height="width"
    :color="color"
    :disabled="disabled"
    @click="onClick"
  >
    <v-icon
      :icon="icon"
      :size="iconSize"
      :color="iconColor"
    />
  </v-btn>
</template>
