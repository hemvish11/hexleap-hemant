import Image from 'next/image';
import React from 'react'

const AdvertisementCard = () => {

  return (

    <div className='font-sans border dark:border-[#3b3e47] shadow-md mt-8 bg-white dark:bg-[#3b3e47] h-[501px] w-[238.53px]  '>

      <div className='m-3 border dark:border-[#3b3e47]  border-[#80b2aa] h-[95%]'
        
      >


        {/*-------------------Advertisement card Image----------------*/}

        <Image
          height={218.4}
          width={218.4}
          src="/images/Advertisement.jpg"
          alt='Advertisement'
        />

        {/* --------------------------Advertisement card description (starts)-------------------------------------------- */}
        <div className=' max-w-[218.4px] rounded-sm p-3 relative  bottom-[20px]'  >

          <div className='flex flex-col justify-between '>
            <h1 className=' mt-3 mb-3 text-[17px]/[24.2px] font-semibold text-[#222d3a] dark:text-white '
           >Advertisement title</h1>

            <p className='font-[400] text-[12.8px]/[19px] text-[#525965] dark:text-[#dfdfdf] '
              >Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed
              do eiusmod tempor incididunt
              ut labore et dolore magna
              aliqua. Lorem ipsum dolor sit
              amet, consectetur adipiscing
              elit, sed do eiusmod tempor
              incididunt ut labore et dolore
              magna aliqua.</p>
          </div>

        </div>
        {/* --------------------------Advertisement card description (ends)-------------------------------------------- */}




      </div>
    </div>

  )
}

export default AdvertisementCard;