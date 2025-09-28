import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GameContext } from '../context/GameContext.jsx'

export default function StartPage() {
  const { setPlayerName, setBoardSize, resetGame, setGameStarted } = useContext(GameContext)
  const [nameInput, setNameInput] = useState('')
  const [error, setError] = useState('')
  const [sizeOption, setSizeOption] = useState('2x2')
  const navigate = useNavigate()

  const startGame = () => {
    if (!nameInput) {
      setError('Please enter your name before starting!')
      return
    }
    setError('')
    resetGame()
    setPlayerName(nameInput)
    const [rows, cols] = sizeOption.split('x').map(Number)
    setBoardSize({ rows, cols })
    setGameStarted(true)
    navigate('/game')
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='w-full min-w-[500px] max-w-lg rounded-2xl bg-white p-8 text-left shadow-lg'>
        <h1 className='mb-12 text-3xl font-bold sm:text-5xl'>Memory Game</h1>
        {/* Player name field */}
        <div className='form-element mb-8'>
          <label htmlFor='playerName' className='font-xl mb-2 block w-full font-bold'>
            Player Name
          </label>
          <input
            id='playerName'
            className='w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 placeholder-gray-400 transition duration-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400'
            placeholder='Enter your name'
            value={nameInput}
            onChange={(e) => {
              if (error) setError('')
              setNameInput(e.target.value)
            }}
          />
          {error && <p className='mb-2 text-sm text-red-500'>{error}</p>}
        </div>
        {/* board size field */}
        <div className='form-element mb-8'>
          <label htmlFor='boardSize' className='font-xl mb-2 block w-full font-bold'>
            Board size
          </label>
          <select
            id='boardSize'
            className='w-full rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 text-gray-700 placeholder-gray-400 transition duration-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400'
            value={sizeOption}
            onChange={(e) => setSizeOption(e.target.value)}>
            <option value='2x2'>2x2</option>
            <option value='4x4'>4x4</option>
            <option value='4x5'>4x5</option>
            <option value='6x6'>6x6</option>
          </select>
        </div>
        {/* start game button */}
        <div className='mt-4'>
          <button
            onClick={startGame}
            disabled={!nameInput.trim()}
            className={`rounded-2xl px-8 py-3 font-semibold text-white shadow-lg ${
              !nameInput.trim()
                ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                : 'transform bg-blue-500 transition duration-200 hover:-translate-y-1 hover:bg-blue-900'
            }`}>
            Start Game
          </button>
        </div>
      </div>
    </div>
  )
}
