import React, { useContext, useEffect, useState } from 'react'
import { GameContext } from '../context/GameContext.jsx'
import Tile from './Tile'

export default function Board({ rows, cols, onEndGame }) {
  const { tiles, setTiles, moves, setMoves } = useContext(GameContext)
  const [selected, setSelected] = useState([])

  const handleClick = (tile) => {
    if (tile.isFlipped || tile.isMatched || selected.length === 2) return
    setTiles(tiles.map((t) => (t.id === tile.id ? { ...t, isFlipped: true } : t)))
    setSelected([...selected, { ...tile, isFlipped: true }])
    setMoves(moves + 1)
  }

  // logic to compare 2 images after selection
  useEffect(() => {
    if (selected.length === 2) {
      const [first, second] = selected
      if (first.image === second.image) {
        setTiles((prev) => prev.map((t) => (t.image === first.image ? { ...t, isMatched: true } : t)))
      } else {
        setTimeout(() => {
          setTiles((prev) => prev.map((t) => (t.id === first.id || t.id === second.id ? { ...t, isFlipped: false } : t)))
        }, 1000)
      }
      setSelected([])
    }
  }, [selected, setTiles])

  useEffect(() => {
    if (tiles.length > 0 && tiles.every((t) => t.isMatched)) {
      setTimeout(() => onEndGame(), 1500)
    }
  }, [tiles, onEndGame])

  return (
    <>
      {/* Display number of moves made */}
      <div className='text-lg font-semibold text-gray-700 sm:text-xl'>
        Moves: <span className='text-blue-600'>{moves}</span>
      </div>
      <div
        className='mt-4 gap-2'
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${cols}, minmax(clamp(100px, 10vw, 100px), 1fr))`
        }}>
        {tiles.map((tile, index) => (
          <Tile key={index} tile={tile} onClick={() => handleClick(tile)} />
        ))}
      </div>
    </>
  )
}
