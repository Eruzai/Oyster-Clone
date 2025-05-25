import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu, AiOutlineDown } from "react-icons/ai";


const Nav = ({ currentUser, handleLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center  font-general-sans text-xl  py-2 px-20">
      <NavLink to="/" className="w-full ">
        <img src="/oyster logo.png" alt="Oyster" className=" h-16" />
      </NavLink>

      {/* Desktop Nav */}
      <ul className="hidden md:flex text-black font-semibold">
        <>
          <li className="mt-2 rounded-lg flex items-center justify-center h-14 w-32">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "underline text-textColor hover:text-blue-500" :  "text-LandingPagetextColor hover:text-blue-500"
              }
            >
              About Us
            </NavLink>
          </li>
          <li className="mt-2 mr-5 flex items-center justify-center h-14 w-32">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "underline text-textColor hover:text-blue-500" :  "text-LandingPagetextColor hover:text-blue-500"
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li className="border border-blue-500 mt-2 rounded-lg flex items-center justify-center h-14 w-32">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "underline text-blue-500" : "text-blue-500"
              }
            >
              Login
            </NavLink>
          </li>
          <li className="text-white border border-blue-500 bg-blue-500 m-2 rounded-lg flex items-center justify-center h-14 w-32">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "underline text-white" : "text-white"
              }
            >
              Sign Up
            </NavLink>
          </li>
        </>
      </ul>

      {/* Mobile Menu Toggle */}
      {/* <div onClick={toggleNavbar} className="block md:hidden">
        {isOpen ? (
          <AiOutlineClose size={20} aria-label="Close menu" />
        ) : (
          <AiOutlineMenu size={20} aria-label="Open menu" />
        )}
      </div> */}

      {/* Mobile Menu */}
      {/* <div
        className={
          isOpen
            ? "fixed left-0 top-0 w-[60%] h-full border-r bg-gray-500 border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%] top-0 w-[60%] h-full border-r bg-gray-500 border-r-gray-900 ease-in-out duration-500"
        }
      >
        <h1 className="w-full text-3xl font-bold">InternConnects</h1> */}
        {/* <ul className="p-4">
          {currentUser ? (
            <>
              <li className="p-4 border-b border-gray-600">
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-white hover:text-[#3B82F6]"
                      : "text-white hover:text-[#3B82F6]"
                  }
                  onClick={toggleNavbar}
                >
                  Profile
                </NavLink>
              </li>
              <li className="p-4 border-b border-gray-600">
                <NavLink
                  to="/search"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-white hover:text-[#3B82F6]"
                      : "text-white hover:text-[#3B82F6]"
                  }
                  onClick={toggleNavbar}
                >
                  Search
                </NavLink>
              </li>
              <li className="p-4 border-b border-gray-600">
                <NavLink
                  to="/saved"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-white hover:text-[#3B82F6]"
                      : "text-white hover:text-[#3B82F6]"
                  }
                  onClick={toggleNavbar}
                >
                  Saved
                </NavLink>
              </li>
              <li className="p-4 border-b border-gray-600">
                <button
                  onClick={() => {
                    handleLogout();
                    toggleNavbar();
                  }}
                  className="text-white hover:text-[#3B82F6]"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="p-4 border-b border-gray-600">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-white hover:text-[#3B82F6]"
                      : "text-white hover:text-[#3B82F6]"
                  }
                  onClick={toggleNavbar}
                >
                  Login
                </NavLink>
              </li>
              <li className="p-4 border-b border-gray-600">
                <NavLink
                  to="/signup"
                  className={({ isActive }) =>
                    isActive
                      ? "underline text-white hover:text-[#3B82F6]"
                      : "text-white hover:text-[#3B82F6]"
                  }
                  onClick={toggleNavbar}
                >
                  Sign Up
                </NavLink>
              </li>
            </>
          )}
        </ul> */}
      {/* </div> */}
    </div>
  );
};

export default Nav;
