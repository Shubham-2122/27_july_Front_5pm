import React from 'react'

function Color() {
  return (
    <div>
      <h1 className='text-5xl bg-orange-400'>Hello</h1>
      <h1 className='text-5xl bg-orange-200'>Hello</h1>
      <h1 className='text-5xl bg-lime-400'>Hello</h1>
      <h1 className='text-5xl bg-sky-300' >Hello</h1>
      <h1 className='text-5xl bg-linear-to-r from-red-400 to-green-400'>Hello</h1>
      <h1 className='text-5xl bg-linear-to-l from-red-400 to-green-400'>Hello</h1>
      <h1 className='text-5xl bg-linear-to-r from-red-400 via-blue-300 to-green-400'>Hello</h1>
    </div>
  )
}

export default Color
