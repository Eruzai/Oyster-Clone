import React from "react";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function FeatureResume() {
  const navigate = useNavigate();
  return (
    <div className='flex py-24 justify-center  bg-dashboardBGColour items-center'>
      <div className='pr-20 w-[1560px] leading-[5em] border-[0.3em] border-blue-500 rounded-2xl flex'>
        <div className="flex w-[30%] p-4 rounded-l-xl bg-[#FFE2E2]">
        <img src="public/Recording 2024-11-07 at 17.29.13.gif" alt="resume" className=' static p-5  rounded-g ' />
      </div>
      <div className='flex-col pl-20 pt-20'>
        <h1 className='font-bold text-[4.25em] text-[#3B82F6]'>Land the job. <br /> We'll handle the Resume.</h1>
        <p className='text-xl py-7 text-dashboardtextColor '>Create your standout resume effortlessly with our intuitive builder that <br /> offers customizable templates and step-by-step guidance.</p>
        <button className='flex justify-center items-center py-2 px-4 text-[#2F68C5] font-semibold text-2xl  border-2 border-transparent 
        hover:border-[#2F68C5] rounded-lg gap-x-2' 
        onClick={() => navigate('/login')}>
          Create My Resume <HiMiniArrowRightCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
