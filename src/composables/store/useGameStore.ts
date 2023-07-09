type GameInfo = {
  civilCount: number
  wolfCount: number
}

/**
 * プレイヤー人数に応じて、市民数・人狼数それぞれの初期値を求める関数
 */
const initializeCounts = (playerCount: number) => {
  let wolfCount, civilCount;

  if (playerCount < 3 || playerCount > 12) {
    throw new Error('Invalid player count. The number of players must be between 3 and 12.');
  }

  if (playerCount === 3) {
    wolfCount = 1;
    civilCount = 2;
  } else if (playerCount % 2 === 0) {
    wolfCount = Math.floor(playerCount / 4);
    civilCount = playerCount - wolfCount;
  } else {
    wolfCount = Math.floor(playerCount / 3);
    civilCount = playerCount - wolfCount;
  }

  return { wolfCount, civilCount };
}

/**
 * グローバルなストアキー
 */
const gameStoreKey = Symbol.for('gameStoreKey') as SymbolWithDescription

export const useGameStore = defineStore(gameStoreKey.description, () => {
  const {
    getPlayer
  } = usePlayerStore()

  // ゲームステートの初期値
  const game = ref<GameInfo>({
    civilCount: initializeCounts(getPlayer().length).civilCount,
    wolfCount: initializeCounts(getPlayer().length).wolfCount
  })

  return {
    decrementCivil,
    decrementWolf,
    getGame,
    incrementCivil,
    incrementWolf
  }

  // getters
  function getGame () {
    return game.value
  }

  // setters
  function incrementCivil () {
    game.value.civilCount++
  }

  function decrementCivil () {
    game.value.civilCount--
  }

  function incrementWolf () {
    game.value.wolfCount++
  }

  function decrementWolf () {
    game.value.wolfCount--
  }
})
