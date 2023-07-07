<script setup lang="ts">
interface RadioItem {
  label: string
  value: string
}

type Props = {
  modelValue?: string
  title: string
  radioItems: RadioItem[]
}

type Emits = {
  (e: 'update:modelValue', value: string): void
}

defineProps<Props>()

const emits = defineEmits<Emits>()

const onChange = (value: string) => emits('update:modelValue', value)
</script>

<template>
  <div>
    <p>
      {{ title }}
    </p>
    <v-row>
      <v-radio-group
        :model-value="modelValue"
        inline
        @update:model-value="onChange"
      >
        <v-col
          v-for="item in radioItems"
          :key="item.value"
        >
          <v-radio
            :label="item.label"
            :value="item.value"
          />
        </v-col>
      </v-radio-group>
    </v-row>
  </div>
</template>
