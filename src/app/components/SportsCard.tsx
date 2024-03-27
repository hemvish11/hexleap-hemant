import Image from 'next/image';
import React from 'react'

interface SportsCardProps {
  image: string,
  teamName: string,
  events: number,
  sportName: string
}

const SportsCard: React.FC<SportsCardProps> = ({ image, teamName, events, sportName }) => {

  return (

    <div className='dark:bg-[#3B3E47] border dark:border-[#3B3E47] font-sans  shadow-md mt-8 bg-white h-[501px] w-[238.53px]  '>

      <div className='m-3'>


        {/*-------------------Sports card Image----------------*/}


        <Image
          height={385.31}
          width={218.4}
          src={image}
          alt='Sacramento-River-Cats'
          style={{ clipPath: "inset(0 0 0 1px)" }}
        />

        <div>

          <h1 className=' mt-3 mb-3 text-[16px]/[20.57px] font-semibold dark:text-white '>{teamName}</h1>

        </div>


        {/* --------------------------sports card description (starts)-------------------------------------------- */}
        <div className=' h-[54px] max-w-[218.4px] rounded-sm p-3 bg-[#f7f7f8] dark:bg-[#292b32]'>


          <div className='flex justify-between items-center h-[31px] w-[167.07px]'>


            <div className='flex flex-col justify-between w-[70.45px] h-[31px]'>
              <p className='font-[400] text-[12px]/[14.52px] w-[70.45px] h-[9px] text-[#525965] dark:text-[#dfdfdf] ' >Total Events</p>
              <p className='w-[67.43px] h-[10px] text-[13px]/[16.92px] font-semibold dark:text-white'>{events} Events</p>
            </div>

            <div className='flex flex-col justify-between w-[70.45px] h-[31px]'>
              <p className='font-[400] text-[12px]/[14.52px] w-[70.45px] h-[9px] text-[#525965] dark:text-[#dfdfdf]'>Sport</p>
              <p className='w-[67.43px] h-[10px] text-[13px]/[16.92px] font-semibold dark:text-white'>{sportName}</p>
            </div>


          </div>



        </div>
        {/* --------------------------sports card description (ends)-------------------------------------------- */}





      </div>
    </div>



  )
}

export default SportsCard;