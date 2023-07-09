<script setup lang="ts">
withHeaderTitle('プレイヤー設定')

const {
  getPlayer,
  removePlayerAll
} = usePlayerStore()
</script>

<template>
  <v-row class="mt-6">
    <v-col class="text-center">
      人数 と なまえ を決める
    </v-col>
  </v-row>
  <player-counter class="mt-8" />

  <player-list />

  <v-row class="mt-8">
    <v-col class="text-center">
      <common-btn-error
        text="リセット"
        @click="removePlayerAll"
      />
    </v-col>
    <v-col class="text-center">
      <common-btn-link
        :disabled="getPlayer().some(player => player.name === '')"
        text="つぎへ"
        to="/setGame"
      />
    </v-col>
  </v-row>
</template>
