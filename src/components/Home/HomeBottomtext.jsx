import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-6'>
      <Link className='text-[6vw] leading-[5vw] uppercase border-3 border-white rounded-full px-10 pt-5 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/projects'>Work</Link>
      <Link className='text-[6vw] leading-[5vw] uppercase border-3 border-white rounded-full px-10 pt-5 hover:border-[#D3FD50] hover:text-[#D3FD50]' to='/agents'>Agencey</Link>
    </div>
  )
}

export default HomeBottomtext
