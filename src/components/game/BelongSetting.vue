<script setup lang="ts">
withHeaderTitle('ゲーム設定')

const {
  getPlayer
} = usePlayerStore()

const {
  decrementCivil,
  decrementWolf,
  getGame,
  incrementCivil,
  incrementWolf
} = useGameStore()

// 市民数の初期値
const civilCount = computed(() => getGame().civilCount)

// 市民数の初期値
const wolfCount = computed(() => getGame().wolfCount)

const civilCountDisabled = computed(() => {
  // 人狼の数が1だったら、非活性（true）
  if (wolfCount.value === 1) {
    return true
  }

  // 市民の数より、人狼の数のほうが多かったら非活性（true）
  if (wolfCount.value > civilCount.value) {
    return true
  }

  // 市民と人狼の数が同じだったら非活性（true）
  if (wolfCount.value === civilCount.value) {
    return false
  }

  // 人狼より、市民のほうが2以上多かったら活性（false）
  if (civilCount.value - wolfCount.value >= 2) {
    return false
  }

  // 上記の条件に当てはまらない場合はfalse（活性）を返す
  return false
})

const wolfCountDisabled = computed(() => {
  if (civilCount.value - wolfCount.value === 1) {
    return true
  }

  // 市民の数より、人狼の数のほうが多かったらtrue（非活性）を返す
  if (wolfCount.value > civilCount.value) {
    return true
  }

  // 市民と人狼の数が同じだったらfalse（活性）を返す
  if (wolfCount.value === civilCount.value) {
    return false
  }

  // 人狼より、市民のほうが2以上多かったらfalse（活性）を返す
  if (civilCount.value - wolfCount.value === 2) {
    return true
  }

  // 上記の条件に当てはまらない場合はfalse（活性）を返す
  return false
})

/**
 * 市民の数を1増やす代わりに、人狼の数を1減らす
 */
const onCountUpCivil = () => {
  incrementCivil(); decrementWolf()
}

/**
 * 人狼の数を1増やす代わりに、市民の数を1減らす
 */
const onCountUpWolf = () => {
  incrementWolf(); decrementCivil()
}
</script>

<template>
  <v-row class="mt-6">
    <v-col class="text-center">
      <span class="text-primary">{{ getPlayer().length }}</span> 人の 配分 を決める
    </v-col>
  </v-row>
  <v-row class="mt-6">
    <v-col class="text-center">
      市民
      <common-chip
        size="large"
        color="primary"
        :text="`${String(civilCount)}`"
      />
      <common-btn-icon
        icon="mdi-arrow-left-bold"
        icon-size="x-large"
        :disabled="civilCountDisabled"
        @click="onCountUpCivil"
      />
    </v-col>
    <v-col class="text-center">
      <common-btn-icon
        icon-color="secondary"
        icon="mdi-arrow-right-bold"
        icon-size="x-large"
        :disabled="wolfCountDisabled"
        @click="onCountUpWolf"
      />
      <common-chip
        size="large"
        color="secondary"
        :text="`${String(wolfCount)}`"
      />
      ウルフ
    </v-col>
  </v-row>
</template>
