declare global {
  /**
   * descriptionが必ず取得できるSymbol
   */
  type SymbolWithDescription = Symbol & {
    description: string
  }
}

export {
  SymbolWithDescription
}
