<script setup lang="ts">
const time = ref(3)

const onCountDown = () => {
  time.value--
  withPlayingTime(time.value)
}

const onCountUp = () => {
  time.value++
  withPlayingTime(time.value)
}
</script>

<template>
  <v-row class="mt-6">
    <v-col class="text-center">
      話し合いの時間を決める
    </v-col>
  </v-row>
  <v-row>
    <v-col class="text-center">
      <common-btn-icon
        icon="mdi-arrow-left-bold"
        icon-size="x-large"
        :disabled="time === 1"
        @click="onCountDown"
      />
    </v-col>
    <v-col class="text-center">
      <common-chip
        size="x-large"
        color="primary"
        :text="`${String(time)} 分`"
      />
    </v-col>
    <v-col class="text-center">
      <common-btn-icon
        icon="mdi-arrow-right-bold"
        icon-size="x-large"
        :disabled="time === 60"
        @click="onCountUp"
      />
    </v-col>
  </v-row>
</template>
