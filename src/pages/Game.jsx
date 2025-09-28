import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameContext } from '../context/GameContext.jsx'
import Timer from '../components/Timer.jsx'
import Board from '../components/Board.jsx'

// JSON of images
const IMAGES = [
  '/plant01.jpg',
  '/plant02.jpg',
  '/plant03.jpg',
  '/plant04.jpg',
  '/plant05.jpg',
  '/plant06.jpg',
  '/plant07.jpg',
  '/plant08.jpg',
  '/plant09.jpg',
  '/plant10.jpg',
  '/plant11.jpg',
  '/plant12.jpg',
  '/plant13.jpg',
  '/plant14.jpg',
  '/plant15.jpg',
  '/plant16.jpg',
  '/plant17.jpg',
  '/plant18.jpg'
]

export default function GamePage() {
  const { playerName, tiles, setTiles, seconds, setSeconds, boardSize, generateTiles } = useContext(GameContext)
  const navigate = useNavigate()

  useEffect(() => {
    if (tiles.length === 0) {
      const newTiles = generateTiles(IMAGES)
      setTiles(newTiles)
    }
  }, [tiles, setTiles, generateTiles])

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(timer)
  }, [setSeconds])

  function handleEndGame() {
    navigate('/end')
  }

  return (
    <div className='game-box flex min-h-screen items-center justify-center px-4'>
      <div className='w-full max-w-full space-y-6 rounded-2xl bg-white p-6 shadow-xl md:min-w-[500px]'>
        {/* Header row */}
        <div className='sm:items-top flex flex-col gap-3 sm:flex-row sm:justify-between'>
          <div className='w-full md:w-2/3'>
            <h3 className='break-words text-left text-lg font-bold sm:text-xl md:text-left'>
              Player: <span className='text-blue-600'>{playerName}</span>
            </h3>
          </div>
          {/* To display time elapsed */}
          <div className='flex w-full justify-start md:w-1/3 md:justify-end'>
            <Timer />
          </div>
        </div>

        {/* Board */}
        <Board rows={boardSize.rows} cols={boardSize.cols} onEndGame={handleEndGame} />
      </div>
    </div>
  )
}
