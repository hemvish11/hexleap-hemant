import Image from 'next/image';
import React from 'react'

interface TicketCardProps {
    image: string,
    teamName: string,
    events: number,
    sportName: string
}

const TicketCard: React.FC<TicketCardProps> = ({ image, teamName, events, sportName }) => {

    return (
        <div className='font-sans mt-8 h-[625px] w-[250px]  '>

            {/*------------------------------TICKET IMAGE STARTS-------------------------*/}

            <div className='flex justify-center items-center font-sans border border-b-0 shadow-lg mt-8 bg-white h-[410px] w-[250px]  '>

                <div className='flex justify-center items-center h-[300px] w-[200px]'>


                    <Image
                        height={300}
                        width={200}

                        src={image}
                        alt='Sacramento-River-Cats'
                        className='shadow-xl'
                    />


                </div>

            </div>

            {/*------------------------------TICKET IMAGE ENDS-------------------------*/}

            <div className='ml-[50px] mr-[50px]'>
                <div className='holes-lower'>
                </div>
            </div>


            <div >
                <div className='left-circle border '></div>
                <div className='left-circle-cover '></div>

                <div className='right-circle border'></div>
                <div className='right-circle-cover '></div>

            </div>



            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Ticket details xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

            <div className='font-sans border border-t-1 shadow-lg -mt-[200px] bg-white h-[215px] w-[250px]  '>

                <div className='mt-10'>

                    <h1 className=' mt-3 mb-3 text-[16px]/[20.57px] font-semibold '>{teamName}</h1>

                </div>


                <div className=' h-[54px] max-w-[218.4px] rounded-sm p-3' style={{ backgroundColor: "#f7f7f8" }} >


                    <div className='flex justify-between items-center h-[31px] w-[167.07px]'>


                        <div className='flex flex-col justify-between w-[70.45px] h-[31px]'>
                            <p className='font-[400] text-[12px]/[14.52px] w-[70.45px] h-[9px] txt-info-light'>Total Events</p>
                            <p className='w-[67.43px] h-[10px] text-[13px]/[16.92px] font-semibold'>{events} Events</p>
                        </div>

                        <div className='flex flex-col justify-between w-[70.45px] h-[31px]'>
                            <p className='font-[400] text-[12px]/[14.52px] w-[70.45px] h-[9px] txt-info-light'>Sport</p>
                            <p className='w-[67.43px] h-[10px] text-[13px]/[16.92px] font-semibold'>{sportName}</p>
                        </div>


                    </div>

                </div>

            </div>

            {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Ticket details xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}


        </div>




    )
}

export default TicketCard;