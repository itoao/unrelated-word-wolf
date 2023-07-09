<script setup lang="ts">
withHeaderTitle('ゲーム設定')
</script>

<template>
  <game-belong-setting />

  <game-time-setting />

  <v-row class="mt-8">
    <v-col class="text-center">
      <common-btn-link
        text="つぎへ"
        to="/setQuestion"
      />
    </v-col>
  </v-row>
</template>
