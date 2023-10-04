import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between px-4 h-16'>
      <a href="/" className='flex items-center gap-1'>
        <img src="/logo.png" alt="OpenRice" className='w-8 h-8' />
        <h1 className='text-2xl font-bold'>OpenRice</h1>
      </a>
    </div>
  )
}

export default Header