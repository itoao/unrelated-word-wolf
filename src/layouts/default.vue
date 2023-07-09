<script setup lang="ts">
const {
  title
} = useHeaderTitle()

const router = useRouter()

const onRouterBack = () => {
  router.back()
}

// 現在のパスがルートだったら戻るボタンを非表示にするためのフラグ
const isRoute = computed(() => {
  if (router.currentRoute.value.path === '/') {
    return true
  }

  return false
})
</script>

<template>
  <v-app>
    <v-app-bar>
      <common-btn-icon
        v-if="!isRoute"
        icon="mdi-step-backward"
        icon-size="x-large"
        @click="onRouterBack"
       />

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
