const playingTimeKey: InjectionKey<number> = Symbol()

const time = ref(3)

export function withPlayingTime (newTime: number) {
  time.value = newTime

  provide(playingTimeKey, newTime)
}

export function usePlayingTime () {
  inject(playingTimeKey)

  return {
    time
  }
}
