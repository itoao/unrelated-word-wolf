const headerKey: InjectionKey<string> = Symbol()

const title = ref('ワードとウルフ')

export function withHeaderTitle (newTitle: string) {
  title.value = newTitle

  provide(headerKey, newTitle)
}

export function useHeaderTitle () {
  inject(headerKey)

  return {
    title
  }
}
