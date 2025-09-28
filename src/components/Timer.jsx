import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext.jsx'
import formattedTime from '../utils/format.js'

export default function Timer() {
  const { seconds } = useContext(GameContext)

  return (
    <h4 className='text-lg font-semibold text-gray-700 sm:text-xl'>
      Time: <span className='text-blue-600'>{formattedTime(seconds)}</span>
    </h4>
  )
}
