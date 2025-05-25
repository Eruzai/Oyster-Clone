import React from "react";
import { NavLink } from "react-router-dom";
import { PiHouseLine } from "react-icons/pi";
import { PiBriefcaseLight } from "react-icons/pi";
import { IoSaveOutline } from "react-icons/io5";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { PiStudent } from "react-icons/pi";
import { PiBuildingApartment } from "react-icons/pi";
import { FaRegFileAlt } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { RxExit } from "react-icons/rx";

const NavSideBar = ({ currentUser, handleLogout }) => {
  return (
    <div>
      <div className="w-[278px]"></div>
      <div className="fixed flex flex-col items-center bg-custom-gradient h-screen">
        <NavLink to={currentUser ? "/dashboard" : "/"} className="w-full pt-[25px] pb-[1.5em] p-[40px]">
          <img src="/oyster logo.png" alt="Oyster" className="w-[200px] h-[65px]" />
        </NavLink>
        <div className="flex w-full h-full">
          <div className="flex flex-col justify-between items-center w-full">
            <div className="flex flex-col items-start w-[80%] pt-[2em]">
              <NavLink to="/dashboard" className="flex items-center p-[1em] w-full rounded-[8px] hover:bg-[#629BF8] hover:text-[#ffffff]">
                <PiHouseLine className="text-[1.5em] mr-[0.5em]"/>Dashboard
              </NavLink>
              <NavLink to="/search" className="flex items-center p-[1em] w-full rounded-[8px] hover:bg-[#629BF8] hover:text-[#ffffff]">
                <PiBriefcaseLight className="text-[1.5em] mr-[0.5em]"/>Job Listings
              </NavLink>
              <NavLink to="/saved" className="flex items-center p-[1em] w-full rounded-[8px] hover:bg-[#629BF8] hover:text-[#ffffff]">
                <IoSaveOutline className="text-[1.5em] mr-[0.5em]"/>My Jobs
              </NavLink>
              <NavLink to="/profile" className="flex items-center p-[1em] w-full rounded-[8px] hover:bg-[#629BF8] hover:text-[#ffffff]">
                <HiOutlineUserGroup className="text-[1.5em] mr-[0.5em]"/>Community
              </NavLink>
              <NavLink to="/my-mentor" className="flex items-center p-[1em] w-full rounded-[8px] hover:bg-[#629BF8] hover:text-[#ffffff]">
                <PiStudent className="text-[1.5em] mr-[0.5em]"/>My Mentor
              </NavLink>
              <NavLink to="/resources/build-resume" className="flex items-center p-[1em] w-full rounded-[8px] hover:bg-[#629BF8] hover:text-[#ffffff]">
                <PiBuildingApartment className="text-[1.5em] mr-[0.5em]"/>Resume Builder
              </NavLink>
              <NavLink to="/resources" className="flex items-center p-[1em] w-full rounded-[8px] hover:bg-[#629BF8] hover:text-[#ffffff]">
                <FaRegFileAlt className="text-[1.5em] mr-[0.5em]"/>Resources
              </NavLink>
            </div>
            <div className="flex flex-col items-center w-full">
              <NavLink to="/logout" replace onClick={(e) => {e.preventDefault(); window.location.href = "/logout";}} className="flex items-center p-[1em] mb-[2em] w-[80%] rounded-[8px] hover:bg-[#629BF8] hover:text-[#ffffff]">
                  <RxExit className="text-[1.5em] mr-[0.5em]"/>Logout
              </NavLink>
              <button className="flex items-center bg-[#ffffff] rounded-full w-[80%] p-[8px] mb-[3em]">
                <CgProfile className="text-[4em] mr-[10px]"/>
                <div className="flex flex-col items-start">
                  <p className="font-semibold">{currentUser.name}</p>
                  <p className="text-[#888888] text-[0.8em]">Software Engineer</p>
                </div>
              </button>
            </div>
          </div>
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
};

export default NavSideBar;
