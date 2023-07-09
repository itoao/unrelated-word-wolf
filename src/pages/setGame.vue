<script setup lang="ts">
withHeaderTitle('ゲーム設定')
</script>

<template>
  <game-belong-setting />

  <game-time-setting />

  <v-row class="mt-8">
    <app-btn-next to="/setQuestion" />
  </v-row>
</template>
