<script setup lang="ts">
const {
  title
} = useHeader()
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        {{ title }}
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
