import React from 'react'

const FullScreennav = () => {
    return (
        <div id='fullscreennav' className='text-white h-screen py-40 w-full absolute bg-amber-300'>
            <div className=''>
                <div className='relative bg-[#d3fd50] border-t-1 border-white'>
                    <h1 className='font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>Work</h1>
                    <div className='absolute flex text-black top-0 bg-[#d3fd50]'>
                        <div className='moveX flex items-center'>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>See Everything</h2>
                            <img className='h-30 w-96 shrink-0 object-cover rounded-full' src="https://i.pinimg.com/736x/5d/54/35/5d5435096531b1296136ee924b199359.jpg" alt="" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>See Everything</h2>
                            <img className='h-30 w-96 shrink-0 object-cover rounded-full' src="https://i.pinimg.com/736x/69/1e/1c/691e1c70f2c00e2647725d760f450b89.jpg" alt="" />
                        </div>
                        <div className='moveX flex items-center'>
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>See Everything</h2>
                            <img className='h-36 w-96 shrink-0 object-cover rounded-full' src="/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&amp;h=290&amp;s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                            <h2 className='whitespace-nowrap font-[font2] text-[8vw] text-center leading-[0.8] pt-10 uppercase'>See Everything</h2>
                            <img className='h-36 w-96 shrink-0 object-cover rounded-full' src="/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&amp;h=290&amp;s=c3eae0b44f029a1f39a666ffa3c2ca99" alt="" />
                        </div>
                    </div>
                </div>
              
               
            </div>
        </div>
    )
}

export default FullScreennav
