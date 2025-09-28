import React from 'react'
import Error from '../components/Error.jsx'
import MainNavigation from '../components/MainNavigation.jsx'

export default function ErrorPage() {
  return (
    <>
      {/* main navigation */}
      <MainNavigation />
      {/* Error message */}
      <Error title='Oops! Page not found' message='The page you’re looking for doesn’t exist or has been moved.' />
    </>
  )
}
