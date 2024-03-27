'use client';
import React, { useEffect, useState } from 'react'
import SportsCard from './SportsCard';
import SportsData from "@/data/sports-data.json"
import AdvertisementCard from './AdvertisementCard';
import { Button } from '@mui/material';

interface SportDetails {
  id: number,
  image: string,
  teamName: string,
  events: number,
  sportName: string
}

function Sports() {
  const allSportsData = SportsData.sportsData;
  const [themeMode, setThemeMode] = useState("light");


  const handleThemeMode = () => {
    if (themeMode === "light") {
      setThemeMode("dark");
    } else {
      setThemeMode("light");
    }
  }

  // if themeMode is changed to mark mode then add
  //  dark class
  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

  }, [themeMode]);

  return (
    <div className='p-4 font-poppins mt-[2%]'>
      <div className='flex justify-center md:justify-start md:ml-12'>

        <span className='text-[26px] leading-9 font-[700] decoration-[#738FFF]
         dark:text-white underline underline-thickness-2 underline-offset-[12px]' >
          Sports
        </span>

        <div className='flex justify-end items-center md:w-full'>
          <Button onClick={handleThemeMode} >{themeMode === "dark" ? "Light" : "Dark"}</Button>
        </div>

      </div>

      <div className='flex justify-center items-center flex-wrap gap-3'>

        {allSportsData.map((sportCard: SportDetails) =>
          <SportsCard
            key={sportCard.id}
            image={sportCard.image}
            teamName={sportCard.teamName}
            events={sportCard.events}
            sportName={sportCard.sportName}
          />
        )}

        <AdvertisementCard />


      </div>

      <div className='flex items-center justify-center mt-10'>
        <button className='bg-[#2c9cf0] hover:bg-blue-700 hover:scale-110 hover:transition-all text-white py-3 px-7 rounded-[3px] text-sm'>See More</button>
      </div>


    </div>
  )
}

export default Sports