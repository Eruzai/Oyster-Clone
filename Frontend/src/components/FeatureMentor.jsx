import React from "react";
import { HiMiniArrowRightCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

export default function FeatureMentor() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center px-44 py-24 font-general-sans bg-custom-bg items-center">
      <div className=" flex w-[1560px] border-[0.3em] bg-white border-blue-500 rounded-2xl ">
        <div className=" flex-col pt-20 p-10 ">
          <h1 className="font-extrabold leading-[1.2em] w-[7.2em] text-[4.25em]  text-blue-500">
            Get Mentored, <br /> Get Ahead,
          </h1>
          <p className="pb-20 pl-2 text-4xl font-bold text-LandingPagetextColor">
            with <span className="text-blue-500">Oyster.</span>{" "}
          </p>
          <button
            className="flex justify-center items-center text-[#2F68C5] font-semibold text-2xl py-2 px-4 border-2 border-transparent hover:border-[#2F68C5] rounded-lg gap-x-2"
            onClick={() => navigate("/login")}
          >
            Find Your Guide. <HiMiniArrowRightCircle />
          </button>
        </div>
        <img
          src="/ThreePeople.jpg"
          alt=""
          className=" h-full rounded-l-xl pl-36  pr-2"
        />
      </div>
    </div>
  );
}
