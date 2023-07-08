<script setup lang="ts">
withHeader('ゲーム設定')

const {
  getPlayer
} = usePlayerStore()
</script>

<template>
  <v-row class="mt-6">
    <v-col class="text-center">
      全員で{{ getPlayer().length }}人
    </v-col>
  </v-row>
</template>
