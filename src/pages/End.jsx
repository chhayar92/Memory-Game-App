import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameContext } from '../context/GameContext.jsx'
import formattedTime from '../utils/format.js'

export default function EndPage() {
  const { playerName, seconds, moves, resetGame } = useContext(GameContext)
  const navigate = useNavigate()

  const playAgain = () => {
    resetGame()
    navigate('/')
  }

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-4 md:min-w-[500px]'>
      <div className='w-full max-w-md space-y-8 rounded-3xl bg-white p-8 text-center shadow-2xl sm:max-w-lg'>
        {/* Title */}
        <h1 className='mb-8 text-3xl font-extrabold sm:text-5xl'>🎉 Congratulations!</h1>
        <p className='text-lg text-gray-600'>You’ve successfully completed the game.</p>

        {/* Score board for the game */}
        {playerName && (
          <div className='rounded-xl bg-gray-50 p-4 shadow-inner'>
            <p className='text-sm text-gray-500'>Player</p>
            <p className='break-words text-xl font-semibold text-blue-600'>{playerName}</p>
          </div>
        )}
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
          <div className='rounded-xl bg-gray-50 p-4 shadow-inner'>
            <p className='text-sm text-gray-500'>Time</p>
            <p className='text-xl font-semibold text-blue-600'>{formattedTime(seconds)} min</p>
          </div>
          <div className='rounded-xl bg-gray-50 p-4 shadow-inner'>
            <p className='text-sm text-gray-500'>Moves</p>
            <p className='text-xl font-semibold text-blue-600'>{moves}</p>
          </div>
        </div>
        
        {/* Play Again Button */}
        <button
          className='transform rounded-2xl bg-blue-500 px-8 py-3 font-semibold text-white shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-blue-900'
          onClick={playAgain}>
          Play Again
        </button>
      </div>
    </div>
  )
}
