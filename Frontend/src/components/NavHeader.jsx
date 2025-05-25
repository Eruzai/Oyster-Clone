import React from "react";
import { useLocation } from 'react-router-dom';
import { RiMailLine } from "react-icons/ri";
import { RiMailUnreadLine } from "react-icons/ri";
import { VscBell } from "react-icons/vsc";
import { VscBellDot } from "react-icons/vsc";



const NavHeader = () => {
  const location = useLocation();

  let message;
  switch (location.pathname) {
    case '/search':
      message = "Job Listings";
      break;
    case '/profile':
      message = "Profile";
      break;
    case '/dashboard':
      message = "Dashboard";
      break;
    case '/saved':
      message = "My Jobs";
      break;
    case '/my-mentor':
      message = "My Mentor";
      break;
    case '/view-mentor':
      message = "View Mentor";
      break;
    case '/community':
      message = "Community";
      break;
    case '/resources/build-resume':
      message = "Resume Builder";
      break;
    case '/resources':
      message = "Resources";
      break;
    default:
      message = "Welcome to Oyster!";
      break;
  };

  return (
    <div>
      <div className="w-full flex items-center justify-between bg-[#f9fafb]">
        <p className="text-[2em] font-semibold font-general-sans m-[1em]">{message}</p>
        <div>
          <button className="border bg-[#ffffff] rounded-full text-[#3B82F6] text-[2em] p-[0.25em] m-[0.25em]"><RiMailLine /></button>
          <button className="border bg-[#ffffff] rounded-full text-[#3B82F6] text-[2em] p-[0.25em] m-[0.25em] mr-[2em]"><VscBell /></button>
        </div>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default NavHeader;