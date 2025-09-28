import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import StartPage from './Start'
import { GameContext } from '../context/GameContext'
import { vi } from 'vitest'

// Mock useNavigate from react-router-dom
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate: () => vi.fn()
  }
})

describe('StartPage Component', () => {
  const mockSetPlayerName = vi.fn()
  const mockSetBoardSize = vi.fn()
  const mockResetGame = vi.fn()
  const mockSetGameStarted = vi.fn()

  const renderStartPage = () =>
    render(
      <GameContext.Provider
        value={{
          setPlayerName: mockSetPlayerName,
          setBoardSize: mockSetBoardSize,
          resetGame: mockResetGame,
          setGameStarted: mockSetGameStarted
        }}>
        <MemoryRouter>
          <StartPage />
        </MemoryRouter>
      </GameContext.Provider>
    )

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('Renders input, select, and start button', () => {
    renderStartPage()
    expect(screen.getByPlaceholderText(/enter your name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/board size/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /start game/i })).toBeInTheDocument()
  })

  it('Start button is disabled when name is empty', () => {
    renderStartPage()
    const startBtn = screen.getByRole('button', { name: /start game/i })
    expect(startBtn).toBeDisabled()
  })

  it('Calls context functions when valid name is entered', () => {
    renderStartPage()
    const input = screen.getByPlaceholderText(/enter your name/i)
    fireEvent.change(input, { target: { value: 'Test Player' } })

    const startBtn = screen.getByRole('button', { name: /start game/i })
    expect(startBtn).not.toBeDisabled()

    fireEvent.click(startBtn)

    expect(mockResetGame).toHaveBeenCalled()
    expect(mockSetPlayerName).toHaveBeenCalledWith('Test Player')
    expect(mockSetBoardSize).toHaveBeenCalledWith({ rows: 2, cols: 2 })
    expect(mockSetGameStarted).toHaveBeenCalledWith(true)
  })

  it('Start button becomes enabled after entering name', () => {
    renderStartPage()
    const input = screen.getByPlaceholderText(/enter your name/i)
    const startBtn = screen.getByRole('button', { name: /start game/i })

    fireEvent.change(input, { target: { value: 'Test' } })
    expect(startBtn).not.toBeDisabled()
  })
})
