import React, { createContext, useState } from 'react'

export const GameContext = createContext({
  playerName: '',
  setPlayerName: () => {},
  tiles: '',
  setTiles: () => {},
  seconds: '',
  setSeconds: () => {},
  boardSize: '',
  setBoardSize: () => {},
  resetGame: () => {},
  generateTiles: () => {},
  moves: '',
  setMoves: () => {},
  gameStarted: '',
  setGameStarted: () => {}
})

export default function GameContextProvider({ children }) {
  const [playerName, setPlayerName] = useState('')
  const [tiles, setTiles] = useState([])
  const [seconds, setSeconds] = useState(0)
  const [boardSize, setBoardSize] = useState({ rows: 2, cols: 2 })
  const [moves, setMoves] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)

  const resetGame = () => {
    setTiles([])
    setSeconds(0)
    setPlayerName('')
    setBoardSize({ rows: 2, cols: 2 })
    setMoves(0)
  }

  const generateTiles = (images) => {
    const totalTiles = boardSize.rows * boardSize.cols
    const numPairs = totalTiles / 2
    const selectedImages = images.slice(0, numPairs)

    const doubled = [...selectedImages, ...selectedImages].map((img, i) => ({
      id: i,
      image: img,
      isFlipped: false,
      isMatched: false
    }))

    return doubled.sort(() => Math.random() - 0.5)
  }

  const gameCtxValue = {
    playerName,
    setPlayerName,
    tiles,
    setTiles,
    seconds,
    setSeconds,
    boardSize,
    setBoardSize,
    resetGame,
    generateTiles,
    moves,
    setMoves,
    gameStarted,
    setGameStarted
  }
  return <GameContext.Provider value={gameCtxValue}>{children}</GameContext.Provider>
}
