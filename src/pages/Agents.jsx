import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

const Agents = () => {

  //use ref hook - to select element through reference

  gsap.registerPlugin(ScrollTrigger)

  const imageDivref = useRef(null)

  //gsap code
  useGSAP(function(){
    gsap.to(imageDivref.current,{
      scrollTrigger:{
         trigger: imageDivref.current,
         markers: true,
         start: 'top 36%',
         end: 'top -100%',
         pin: true,
         scrub: true
      }
    })
  })


  return (
    <div>
      <div className='section1'>
        <div ref={imageDivref} className='h-80 w-60 absolute top-65 left-112 overflow-hidden'>
          <img className='h-full w-full object-cover rounded-xl' src="https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[60vh]'>
            <h1 className='text-[19vw] text-center uppercase leading-[16vw]'>SEVEN7Y <br />
              TWO</h1>
          </div>

          <div className='pl-[50%] mt-16'>
            <p className='text-6xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>

      <div className='section2 h-screen'></div>
    </div>

  )
}

export default Agents
