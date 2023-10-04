import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex justify-between px-4 h-16 bg-[#FFFFFF]'>
      <a href="/" className='flex items-center gap-1'>
        <img src="/logo.png" alt="OpenRice" className='w-8 h-8' />
        <h1 className='text-2xl font-bold'>OpenRice</h1>
      </a>
      <div className='flex items-center gap-4'>
        <a href="/sign-up" className='text-lg font-bold'>Sign Up</a>
        <a href="/login" className='text-lg font-bold'>Login</a>
      </div>
    </div>
  )
}

export default Header