const headerKey: InjectionKey<string> = Symbol()

const title = ref('ワードウルフ')

export function withHeader (newTitle: string) {
  title.value = newTitle

  provide(headerKey, newTitle)
}

export function useHeader () {
  inject(headerKey)

  return {
    title
  }
}
