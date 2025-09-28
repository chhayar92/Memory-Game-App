import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { GameContext } from '../context/GameContext.jsx'

export default function ProtectedRoute({ children }) {
  const { playerName, gameStarted } = useContext(GameContext)

  // If no playerName or game not started, bounce to home
  if (!playerName || !gameStarted) {
    return <Navigate to='/' replace />
  }

  return children
}
