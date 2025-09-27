import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
      <Link className='text-[6vw] leading-[7vw] uppercase border-5 border-white rounded-full px-10 pt-5'>Work</Link>
      <Link className='text-[6vw] leading-[7vw] uppercase border-5 border-white rounded-full px-10 pt-5'>Agencey</Link>
    </div>
  )
}

export default HomeBottomtext
