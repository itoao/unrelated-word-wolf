<script setup lang="ts">
import LogoImage from 'assets/uww.png'

withHeader('ワードとウルフ')
</script>

<template>
  <v-row class="mt-8">
    <v-col class="text-center">
      <v-img class="mt-8 mb-8" :src="LogoImage" />
      <common-btn-link
        text="はじめる"
        to="/setPlayers"
      />
    </v-col>
  </v-row>
</template>
