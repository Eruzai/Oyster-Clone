import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-[100%]  flex cursor-pointer bg-dashboardBGColour font-general-sans justify-between">
      <div className="font-general-sans flex flex-col pl-24  w-[55%]">
        <h1 className=" mt-28 text-8xl text-blue-500 leading-[1.1em] ">
          <span className="font-extrabold">Transforming</span> <br /> internship
          search <br />
          experience.
        </h1>
        <p className="text-[28px]  text-LandingPagetextColor font-semibold pt-20">
          Join Millions on the Leading Platform for Internships
        </p>

        <div className="flex items-center pt-7">
          <input
            type="email"
            placeholder="Please enter your email address"
            className="placeholder-blue-300 border rounded-l-lg p-2  w-[24em] h-[2.5em] border-blue-500 text-2xl"
          />
          <button
            className=" flex bg-blue-500 border border-blue-500 text-white text-2xl px-5 py-[.55em]  rounded-r-lg"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>
      </div>
      <div className=" w-[50%]  ">
        <img
          src="/public/Group 3032.jpg"
          alt="image of students"
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
