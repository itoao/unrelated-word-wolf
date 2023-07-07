<script setup lang="ts">
const {
  title
} = useHeaderTitle()
</script>

<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-title>
        <div class="font-weight-bold">
          {{ title }}
        </div>
      </v-app-bar-title>
    </v-app-bar>

    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>
