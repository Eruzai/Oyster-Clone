import React from "react";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function FeatureConnect() {
  const navigate = useNavigate();
  return (
    <div className=" px-44 py-24 font-general-sans bg-white items-center">
      <div className=" pr-7 leading-[5em] border-[0.3em] border-blue-500 rounded-2xl flex">
        <div className=" flex px-4 py-4 ">
          <img src="/TwoFemales.png" alt="" className=" rounded-l-lg" />

          <div className=" relative bg-[url('/IphoneImage.png')] w-[18.26em] h-[35.58em] bg-cover bg-center ">
            <img
              src="/Recording 2024-10-27 at 21.27.37.gif"
              alt="animated gif"
              className="w-[14.93em] h-[412.29px] mt-24 ml-[25px] border-b-2 border-black"
            />

            <img
              src="/Textinput.png"
              alt="text input"
              className="absolute h-[27.48px] w-[14.7em] bg-white mt-[-30px]  ml-[27px] "
            />
          </div>
        </div>
        <div className="flex-col  pl-9 pt-20">
          <h1 className="font-bold text-[60px] leading-[70px] text-blue-500">
            Join Events. <br /> Build Connections.
          </h1>
          <p className="text-xl py-7 font-normal w-[618.78px] text-LandingPagetextColor ">
            Job hunting is more fun when you do it with friends. <br /> <br />{" "}
            With <span className="font-bold">Oyster</span> , you can share
            leads, keep each other motivated, and celebrate wins together along
            the way.
          </p>
          <button
            className="flex justify-center items-center text-[#2F68C5] font-semibold text-2xl  py-2 px-4  border-2 border-transparent hover:border-blue-700 rounded-lg gap-x-2 mt-24"
            onClick={() => navigate("/login")}
          >
            Connect and Collaborate <HiMiniArrowRightCircle />
          </button>
        </div>
      </div>
    </div>
  );
}
