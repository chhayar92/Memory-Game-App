import React from 'react'
import { Link } from 'react-router-dom'
import growyLogo from '/growy_logo.svg'

export default function MainNavigation() {
  return (
    <nav className='fixed start-0 top-0 z-20 w-full border-b border-blue-300 bg-blue-200 dark:bg-blue-300'>
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
        <Link to='/' className='flex items-center space-x-3 rtl:space-x-reverse'>
          <img src={growyLogo} className='h-12' alt='Growy Logo' />
          <span className='self-center whitespace-nowrap text-3xl font-semibold text-[#2a2c74] dark:text-[#2a2c74]'>Growy</span>
        </Link>
      </div>
    </nav>
  )
}
