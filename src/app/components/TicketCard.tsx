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
        <div className='font-sans mt-8 h-[625px] w-[230px] shadow-xl  '>


            <div className='flex flex-col  font-sans border border-b-0 shadow-lg bg-white'>

                {/*------------------------------TICKET IMAGE STARTS-------------------------*/}

                <div className='flex justify-center items-center bg-white h-[390px]  '>

                    <div className='flex justify-center items-center'>


                        <Image
                            height={360}
                            width={200}

                            src={image}
                            alt='Sacramento-River-Cats'
                            className='shadow-xl'
                        />


                    </div>


                </div>

                {/*------------------------------TICKET IMAGE ENDS-------------------------*/}

                {/* <hr /> */}
                <p className='dash ml-[35px] mr-[35px] flex justify-center items-center'>-----------</p>


                {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Ticket details xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}

                <div className='h-[215px] w-[250px]'>
                    <div className='m-5'>

                        <h1 className=' mt-3 mb-3 text-[16px]/[20.57px] font-semibold '>{teamName}</h1>

                    </div>

                    <div className=' h-[54px] max-w-[218.4px] rounded-sm p-3' style={{ backgroundColor: "#f7f7f8" }} >


                        <div className='flex justify-between items-center h-[31px] w-[167.07px]'>


                            <div className='flex flex-col justify-between w-[70.45px] h-[31px]'>
                                <p className='font-[400] text-[12px]/[14.52px] w-[70.45px] h-[9px]' style={{ color: "#525965" }}>Total Events</p>
                                <p className='w-[67.43px] h-[10px] text-[13px]/[16.92px] font-semibold'>{events} Events</p>
                            </div>

                            <div className='flex flex-col justify-between w-[70.45px] h-[31px]'>
                                <p className='font-[400] text-[12px]/[14.52px] w-[70.45px] h-[9px] ' style={{ color: "#525965" }}>Sport</p>
                                <p className='w-[67.43px] h-[10px] text-[13px]/[16.92px] font-semibold'>{sportName}</p>
                            </div>


                        </div>

                    </div>
                </div>

                {/* xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx Ticket details xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx */}


            </div>



            <div >
                <div className='left-circle  '></div>
                {/* <div className='left-circle-cover '></div> */}

                <div className='right-circle border'></div>
                {/* <div className='right-circle-cover '></div> */}
            </div>







        </div>




    )
}

export default TicketCard;