"use client";
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ticketsData from "@/data/ticket-data.json"
import TicketCardTemp from './TicketCardTemp';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



interface Ticket {
    id: number,
    image: string,
    teamName: string,
    time: string,
    location: string,
    btnDetails: string
}

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
        {
            breakpoint: 1176, // Breakpoint for screens smaller than or equal to 1024px
            settings: {
                slidesToShow: 2, // Display 2 more cards at a time
                centerPadding: '40px', // Adjust the padding as needed
            },
        },
        {
            breakpoint: 790, // Breakpoint for screens smaller than or equal to 768px
            settings: {
                slidesToShow: 1, // Display 1 more card at a time
                centerPadding: '20px', // Adjust the padding as needed
            },
        },
    ],
};

const SlickCarousalFinal1 = () => {
    const allTicketsData = ticketsData.ticketsData;
    const slideRef = useRef<any>(null);

    const handlePrevClick = () => {
        slideRef.current.slickPrev();
    }
    const handleNextClick = () => {
        slideRef.current.slickNext();
    }

    const items = allTicketsData.map((ticket: Ticket) => {
        return (
            <div className='sm:w-full flex justify-center items-center' key={ticket.id}>

                <TicketCardTemp
                    key={ticket.id}
                    image={ticket.image}
                    teamName={ticket.teamName}
                    time={ticket.time}
                    location={ticket.location}
                    btnDetails={ticket.btnDetails}
                />
            </div>

        )
    })


    return (
        <div className='flex justify-center items-center'>
            {/* --------------left arrow---------- */}

            <div onClick={handlePrevClick} className='border-2 pt-[6px] pb-[6px] border-[#2C9CF0]
             hover:border-blue-600 text-[#2C9CF0] hover:text-blue-600 hover:scale-110 mr-[5%]'>
                <KeyboardArrowLeftIcon className='text-[25px] lg:text-[35px]' />
            </div>


            <div style={{ width: "75%" }}>
                <Slider  {...settings} ref={slideRef}>
                    {items}
                </Slider>
            </div>

            {/* --------------right arrow---------- */}
            <div onClick={handleNextClick} className='border-2 pt-[6px] pb-[6px] border-[#2C9CF0] text-[#2C9CF0] 
             hover:border-blue-600 hover:text-blue-600 hover:scale-110 ml-[5%]'>
                <KeyboardArrowRightIcon className='text-[25px] lg:text-[35px] ' />
            </div>


        </div>

    );
};

export default SlickCarousalFinal1;

