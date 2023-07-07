<script setup lang="ts">
import { MAX_PLAYER_COUNT, MIN_PLAYER_COUNT } from '~/const'
const {
  addPlayer,
  getPlayer,
  popPlayer
} = usePlayerStore()

const onCountDown = () => {
  if (getPlayer().length === MIN_PLAYER_COUNT) {
    return
  }

  popPlayer()
}


const onCountUp = () => {
  if (getPlayer().length === MAX_PLAYER_COUNT) {
    return
  }

  addPlayer({
    id: '', // todo: idはストアで作りたい
    name: '',
    theme: ''
  })
}
</script>

<template>
  <v-row>
    <v-col class="text-center">
      <common-btn-icon
        icon="mdi-arrow-left-bold"
        icon-size="x-large"
        :disabled="getPlayer().length === MIN_PLAYER_COUNT"
        @click="onCountDown"
      />
    </v-col>
    <v-col class="text-center">
      <v-chip
        size="x-large"
        color="primary"
      >
        {{ getPlayer().length }}
      </v-chip>
    </v-col>
    <v-col class="text-center">
      <common-btn-icon
        icon="mdi-arrow-right-bold"
        icon-size="x-large"
        :disabled="getPlayer().length === MAX_PLAYER_COUNT"
        @click="onCountUp"
      />
    </v-col>
  </v-row>
</template>
