/**
 * 引数にfalsy valueが渡された時にエラーをスローする。
 * strictlyをtrueにすると、nullまたはundefinedのときのみエラースローにする。
 */
export function nonNull <T> (val: T, {
  message = undefined as string | undefined,
  strictly = false
} = {}): NonNullable<T> {
  const isValid = strictly
    ? val !== null && val !== undefined
    : typeof val === 'boolean'
      ? true
      : typeof val === 'number'
        ? !isNaN(val) // 0はOK
        : !!val // 空文字はNGにする

  if (!isValid) {
    if (message) {
      throw new MessageOverridesError(message)
    } else {
      throw new TypeError('必要な情報が不足しています')
    }
  }

  return val as NonNullable<T>
}

/**
 * エラーメッセージを上書きしたいときにthrowするエラー
 */
class MessageOverridesError extends Error {}
