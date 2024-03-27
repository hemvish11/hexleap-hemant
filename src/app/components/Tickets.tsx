import React from 'react'
import SlickCarousalFinal1 from './SlickCarousalFInal1'



function Tickets() {

  return (
    <div className='font-poppins py-[5%] px-4 mx-auto  mt-10 mb-10  pt-[5%] pb-[5%] dark:text-white
    bg-gradient-to-b from-[#f9f8ff] via-[#f6f8ff] to-[#f3f9ff]
    dark:bg-gradient-to-b dark:from-[#18282a] dark:via-[#1d212b] dark:to-[#221a2c] max-w-[1280px]'>

      <div className='ml-[10%] mr-[10%]'>

        <h1 className='text-[35px]/[40px]  lg:text-[50px]/[75px] font-extrabold text-center'>Collection Spotlight</h1>

        <p className='text-center text-[14px] lg:mt-2 mt-3'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>

      </div>
      <SlickCarousalFinal1 />

    </div>
  )
}

export default Tickets