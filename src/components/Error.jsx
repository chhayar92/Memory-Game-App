import React from 'react'

export default function Error({ title, message }) {
  return (
    <div className='flex w-full max-w-md items-start gap-3 rounded-lg border border-red-200 bg-red-50 px-4 py-8 text-red-700 shadow-sm'>
      <div className='flex flex-col'>
        {title && <h1 className='text-base font-semibold text-red-800'>{title}</h1>}
        <p className='text-sm text-red-700'>{message}</p>
      </div>
    </div>
  )
}
