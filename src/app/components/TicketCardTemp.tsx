import Image from 'next/image';
import React from 'react'

interface TicketCardProps {
    image: string,
    teamName: string,
    time: string,
    location: string,
    btnDetails: string
}

const TicketCardTemp: React.FC<TicketCardProps> = ({ image, teamName, time, location, btnDetails}) => {

    return (
        <div className='dark:text-white w-full flex justify-center items-center'>

        <div className= {`bg-[url("/pic.svg")] dark:bg-[url('/dark.svg')] dark-svg bg-cover flex justify-center items-center  font-poppins mt-8 h-[637px] w-[272px]`}>

            <div className='flex flex-col justify-between h-[597.91px] w-[226.1px]'>

                {/*------------------------------TICKET IMAGE STARTS-------------------------*/}


                <div className='flex justify-center items-center h-[401.25px] w-[226.1px]'>

                    <Image
                        height={401.25}
                        width={226.1}
                        src={image}
                        alt='Sacramento-River-Cats'
                        className='shadow-xl'
                    />


                </div>



                {/*------------------------------TICKET IMAGE ENDS-------------------------*/}


                {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Ticket details starts xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

                <div className='flex flex-col'>
                    <div className='flex flex-col items-center text-center gap-2'>
                        <h1 className='font-semibold text-lg'>{teamName}</h1>
                        <p className='text-sm'>{time}</p>
                        <p className='txt-info-light text-sm opacity-95 dark:text-[#dfdfdf]'>{location}</p>
                    </div>
                    <div className='mt-3'>
                        <button className='bg-[#1d1d1f] hover:bg-black dark:bg-black dark:hover:bg-[#1d1d1f] hover:scale-105 hover:transition-all text-white text-sm w-full p-2'>{btnDetails}</button>
                    </div>
                </div>

                {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Ticket details ends xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}


            </div>
        </div>
        </div>

    )
}

export default TicketCardTemp