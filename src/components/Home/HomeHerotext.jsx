import React from 'react'
import Video from './Video'

const HomeHerotext = () => {
  return (
    <div className='font-[font2] pt-5 text-center'>
      <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[10vw]'>The spark for</div>
      <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[10vw]'>all <div className='h-[8vw] rounded-full overflow-hidden'><Video /></div> things</div>
      <div className='text-[9.5vw] flex items-center justify-center uppercase leading-[10vw]'>creative</div>
    </div>
  )
}

export default HomeHerotext
