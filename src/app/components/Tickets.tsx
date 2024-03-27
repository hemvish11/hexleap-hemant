import React from 'react'
import TicketCard from './TicketCard'
import TicketCardTemp from './TicketCardTemp'
import ticketsData from "@/data/ticket-data.json"
import SlickCarousalFinal1 from './SlickCarousalFInal1'

interface Ticket {
  id: number,
  image: string,
  teamName: string,
  time: string,
  location: string,
  btnDetails: string
}

function Tickets() {
  const allTicketsData = ticketsData.ticketsData;

  return (
    <div className='font-poppins py-[5%] px-4 mx-auto  mt-10 mb-10  pt-[5%] pb-[5%] dark:text-white
    bg-gradient-to-b from-[#f9f8ff] via-[#f6f8ff] to-[#f3f9ff]
    dark:bg-gradient-to-b dark:from-[#18282a] dark:via-[#1d212b] dark:to-[#221a2c] max-w-[1280px]'>
      <div className='ml-[10%] mr-[10%]'>
        <h1 className='text-[50px] font-extrabold text-center'>Collection Spotlight</h1>
        <p className='text-center text-[14px] mt-2'>Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!</p>
      </div>
      <SlickCarousalFinal1 />

    </div>
  )
}

export default Tickets