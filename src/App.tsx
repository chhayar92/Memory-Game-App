import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import StartPage from './pages/Start'
import GamePage from './pages/Game'
import EndPage from './pages/End'
import ErrorPage from './pages/Error'
import GameContextProvider from './context/GameContext'
import RootLayout from './pages/Root'
import ProtectedRoute from './pages/ProtectedRoute'

function App() {
  // Router variable with urls used in app
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <StartPage />
        },
        {
          path: '/game',
          element: (
            <ProtectedRoute>
              <GamePage />
            </ProtectedRoute>
          )
        },
        {
          path: '/end',
          element: (
            <ProtectedRoute>
              <EndPage />
            </ProtectedRoute>
          )
        }
      ]
    }
  ])

  return (
    <GameContextProvider>
      <RouterProvider router={router} />
    </GameContextProvider>
  )
}

export default App
