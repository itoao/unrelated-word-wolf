const playingTimeKey: InjectionKey<number> = Symbol()

const time = ref(3)

export function useProvidePlayingTime() {
  const withPlayingTime = (newTime: number) => {
    time.value = newTime
  }

  provide(playingTimeKey, time.value)

  return {
    withPlayingTime
  }
}

export function usePlayingTime () {
  const injectedTime = inject<Ref<number>>(playingTimeKey, time)

  return {
    time: nonNull(injectedTime)
  }
}
