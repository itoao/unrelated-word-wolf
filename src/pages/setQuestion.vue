<script setup lang="ts">
withHeaderTitle('お題')

const {
  getGame
} = useGameStore()

const {
  time
} = usePlayingTime()
</script>

<template>
  <v-row class="mt-6">
    <v-col class="text-center">
      市民: {{ getGame().civilCount }} 人
    </v-col>
    <v-col class="text-center">
      人狼: {{ getGame().wolfCount }} 人
    </v-col>
  </v-row>

  <v-row class="mt-6">
    <v-col class="text-center">
      話し合い時間: {{ time }} 分
    </v-col>
  </v-row>
</template>
