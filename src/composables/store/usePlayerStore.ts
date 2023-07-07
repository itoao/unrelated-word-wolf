type PlayerInfo = {
  id: string
  name: string
  theme: string // そのプレイヤー与えられたお題
}

/**
 * グローバルなストアキー
 */
const playerStoreKey = Symbol.for('playerStoreKey') as SymbolWithDescription

export const usePlayerStore = defineStore(playerStoreKey.description, () => {
  const players = ref<PlayerInfo[]>([
    {
      id: '',
      name: 'ひしゃく',
      theme: ''
    },
    {
      id: '',
      name: 'からすき',
      theme: ''
    },
    {
      id: '',
      name: 'かかし',
      theme: ''
    }
  ])

  return {
    addPlayer,
    getPlayer,
    popPlayer,
    removePlayer
  }

  //getters
  function getPlayer () {
    return players.value
  }

  //setters
  function addPlayer (item: PlayerInfo){
    players.value.push({...item, id: 'fafaf'})
  }

  /**
   * 単純に最後尾のプレイヤーを消す処理
   */
  function popPlayer () {
    players.value.pop()
  }

  /**
   * インデックスで指定したプレイヤーを消す処理
   */
  function removePlayer (start: number) {
    players.value.splice(start, 1)
  }
})
