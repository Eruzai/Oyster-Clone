import React, { useState, useRef } from 'react'
import { FaRegHeart } from 'react-icons/fa'
import { GoKebabHorizontal } from "react-icons/go";

import Banner from "../../assets/png/banner.png"
import Chi from "../../assets/png/chi.png"
import Suitcase from "../../assets/svg/suitcase.svg"
import Reviews from './Reviews';
import Overview from './Overview';
import { PiFlag } from 'react-icons/pi';

const ViewMentor = () => {
    const [activeTab, setActiveTab] = useState("Overview")
    const [isPanelOpen, setIsPanelOpen] = useState(false);
    const panelRef = useRef(null);

    const handleTabChange = (value) => {
        setActiveTab(value)
    }

  return (
    <div className="w-full bg-[#fff] pb-10">
        <div 
            style={{
                backgroundImage: `url(${Banner})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "245px"
            }}
        >
        </div>
        <div className='flex flex-col px-[39px]'>
            <div className='flex items-center gap-5 relative'>
                <div className='w-[250px] h-auto rounded-lg bg-[#fff] flex items-center relative -top-20 justify-center'>
                    <img src={Chi} alt='Profile-pic' className='w-[240px] h-auto' />
                </div>
                <div className='flex items-center justify-between  relative -top-10 w-full'>
                    <div className='flex flex-col gap-1'>
                        <p className='font-general-sans text-[32px] font-semibold'>Chinenye Chekwube <span className='text-[20px] text-[#10B981] font-medium'>NG</span></p>
                        <div className='flex items-center gap-1'>
                            <img src={Suitcase} alt='Suitcase' className='w-5 h-5' />
                            <p className='text-[#334155] font-general-sans text-sm font-medium'>Lead Product Designer at Google</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='bg-[#E7F0FA] rounded-full cursor-pointer flex items-center justify-center flex-col w-[54px] h-[54px]'>
                            <FaRegHeart className='text-[#2F68C5] w-6 h-6' />
                        </div>
                        <div className='relative'>
                            <div onClick={() => setIsPanelOpen(!isPanelOpen)} className='bg-[#E7F0FA] rounded-full cursor-pointer flex items-center justify-center flex-col w-[54px] h-[54px]'>
                                <GoKebabHorizontal className='text-[#2F68C5] w-6 h-6' />
                            </div>

                            {isPanelOpen && (
                                <div
                                    ref={panelRef}
                                    className='bg-[#F9FAFB] w-[220px] p-2 flex items-center justify-center cursor-pointer border border-[#888888] rounded-lg gap-2 absolute top-14 right-0'
                                >
                                    <PiFlag className="w-4 h-4 text-[#334155]"/>
                                    <p className='font-general-sans text-sm font-normal text-[#000000]'>Report Mentor Profile</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[22px]'>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-6'>
                        <div 
                            onClick={() => handleTabChange("Overview")} 
                            className={`${activeTab === "Overview" ? " border border-l-0 border-r-0 border-t-0 border-b-[#3B82F6]" : ""} w-[79px] cursor-pointer h-[38px]`}
                        >
                            <p className={`${activeTab === "Overview" ? "text-[#3B82F6]" : "text-[#334155]" } font-semibold text-lg font-general-sans`}>Overview</p>
                        </div>
                        <div 
                            onClick={() => handleTabChange("Reviews")} 
                            className={`${activeTab === "Reviews" ? " border border-l-0 border-r-0 border-t-0 border-b-[#3B82F6]" : ""} w-[93px] cursor-pointer h-[38px]`}
                        >
                            <p className={`${activeTab === "Reviews" ? "text-[#3B82F6]" : "text-[#334155]" } whitespace-nowrap font-semibold text-lg font-general-sans`}>Reviews (4)</p>
                        </div>

                    </div>
                    <hr />

                </div>

                {activeTab === "Overview" && <Overview />}
                {activeTab === "Reviews" && <Reviews />}

            </div>
        </div>


    </div>
  )
}

export default ViewMentor