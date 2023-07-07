<script setup lang="ts">
import { MIN_PLAYER_COUNT, MAX_PLAYER_COUNT } from '~/const'
const {
  addPlayer,
  getPlayer,
  removePlayer
} = usePlayerStore()

const playerName = ref('')
</script>

<template>
  <v-list>
    <template  v-for="(item, index) in getPlayer()" :key="item.id">
      <v-list-item>
        <v-list-item-action start>
          <common-btn-icon
            :disabled="getPlayer().length === MIN_PLAYER_COUNT"
            icon="mdi-delete"
            icon-color="error"
            @click="removePlayer(index)"
          />
          <common-field-text
            v-model="item.name"
            clearable
            placeholder="プレイヤーのなまえ"
          />
        </v-list-item-action>
      </v-list-item>

      <v-divider
        v-if="index + 1 < getPlayer().length"
        :key="`divider-${index}`"
      >
      </v-divider>
    </template>
  </v-list>
</template>
