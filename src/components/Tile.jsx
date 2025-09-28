import React from 'react'
import growyLogo from '/growy_logo.svg'

export default function Tile({ tile, onClick }) {
  return (
    <div className='flex aspect-square cursor-pointer items-center justify-center rounded-lg bg-white shadow transition hover:shadow-md'>
      {/* tiles in the game board */}
      <div className='perspective tile-wrapper m-1 h-full w-full cursor-pointer' onClick={onClick}>
        <div
          className={`tile-inner relative h-full w-full transform transition-transform duration-500 ${
            tile.isFlipped || tile.isMatched ? 'rotate-y-180' : 'flipped'
          }`}>
          {/* Front Side of tile */}
          <div className='backface-hidden tile-front absolute flex h-full w-full items-center justify-center rounded border bg-white'>
            <img src={tile.image} alt='tile' className='h-full w-full object-contain' />
          </div>

          {/* Back Side of tile */}
          <div className='backface-hidden rotate-y-180 tile-back absolute flex h-full w-full items-center justify-center rounded border bg-gray-300'>
            <img src={growyLogo} alt='back' className='h-full w-full object-contain' />
          </div>
        </div>
      </div>
    </div>
  )
}
