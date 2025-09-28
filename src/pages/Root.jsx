import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation.jsx'

export default function RootLayout() {
  return (
    <>
      {/* Main Navigation component to be displayed on all pages */}
      <MainNavigation />

      {/* Main container for the app */}
      <main className='game-card p-4'>
        <Outlet />
      </main>
    </>
  )
}
