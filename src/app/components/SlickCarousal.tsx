"use client";
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ticketsData from "@/data/ticket-data.json"
import TicketCardTemp from './TicketCardTemp';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Example icons, you can use any icons or components you like
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';



interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const CustomPrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div className={className} style={{ ...style, display: 'block', left: '0' }} onClick={onClick}>
            <KeyboardArrowLeftIcon className='text-black text-[50px]' />
        </div>
    );
};


const CustomNextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
    return (
        <div className={className} style={{ ...style, display: 'block', right: '0', zIndex: 1 }} onClick={onClick}>
            <KeyboardArrowRightIcon className='text-black text-[50px] ' />
        </div>
    );
};


interface Ticket {
    id: number,
    image: string,
    teamName: string,
    time: string,
    location: string,
    btnDetails: string
}

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />
};

const SlickCarousal = () => {
    const allTicketsData = ticketsData.ticketsData;

    return (
        <div style={{ margin: '0 auto', width: '60%' }}>

            <Slider {...settings}>
                {allTicketsData.map((ticket: Ticket) => {
                    return (<div>
                        <TicketCardTemp
                            key={ticket.id}
                            image={ticket.image}
                            teamName={ticket.teamName}
                            time={ticket.time}
                            location={ticket.location}
                            btnDetails={ticket.btnDetails}
                        />
                    </div>)
                }
                )}
            </Slider>
        </div>

    );
};

export default SlickCarousal;

