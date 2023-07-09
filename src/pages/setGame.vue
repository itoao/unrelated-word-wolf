<script setup lang="ts">
withHeaderTitle('ゲーム設定')

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
  <v-row class="mt-8">
    <v-col class="text-center">
      <common-btn-link
        text="つぎへ"
        to="/setQuestion"
      />
    </v-col>
  </v-row>
</template>
