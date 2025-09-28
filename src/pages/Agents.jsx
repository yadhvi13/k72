import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

const Agents = () => {

  //use ref hook - to select element through reference

  gsap.registerPlugin(ScrollTrigger)

  const imageDivref = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
    "/images/img9.jpg",
    "/images/img10.jpg",
    "/images/img11.jpg",
    "/images/img12.jpg",
    "/images/img13.jpg",
    "/images/img14.jpg"

  ]

  //gsap code
  useGSAP(function () {
    gsap.to(imageDivref.current, {
      scrollTrigger: {
        trigger: imageDivref.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: function (elem) {
          // console.log(Math.round(elem.progress * imageArray.length));
          let imageIndex;
          if(elem.progress < 1){
            imageIndex = Math.round(elem.progress * imageArray.length);
          }
          else{
            imageIndex = imageArray.length-1;
          }

          imageRef.current.src = imageArray[imageIndex];
          
        }
      }
    })

  })


  return (
    <div>
      <div className='section1 relative py-1'>
        <div ref={imageDivref} className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-96 left-[30vw] bg-red-900'>
          <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/images/teamMembers/HugoJoseph_480x640.jpg?w=480&h=640&fit=crop&s=f152025b8a59b062d1e7978b5d6544c3" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[60vh]'>
            <h1 className='text-[19vw] text-black text-center uppercase leading-[16vw]'>SEVEN7Y <br />
              TWO</h1>
          </div>

          <div className='pl-[50%] mt-16'>
            <p className='text-5xl text-black left-[20vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>

      <div className='section2 h-screen'></div>
    </div>

  )
}

export default Agents
