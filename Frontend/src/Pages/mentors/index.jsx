import React, { useState } from 'react'
import { CiLocationOn, CiSearch } from "react-icons/ci";
import { PiSlidersBold } from 'react-icons/pi';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import Clark from "../../assets/png/clark.png";
import Chi from "../../assets/png/chi.png"
import Manny from "../../assets/png/manny.png"
import George from "../../assets/png/george.png"
import Kristina from "../../assets/png/kristina.png"

import Suitcase from "../../assets/svg/suitcase.svg"
import Star from "../../assets/svg/star.svg"
import { useNavigate } from 'react-router-dom';

const Mentors = () => {
  const [search, setSearch] = useState("")
  const [searchCountry, setSearchCountry] = useState("")
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);

  const navigate = useNavigate()

  const data = [
    {
      id: 1,
      faceCard: Clark,
      name: "Clark Kent",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
    {
      id: 2,
      faceCard: Chi,
      name: "Chinenye Chekwube",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
    {
      id: 3,
      faceCard: Manny,
      name: "Manny Temu",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
    {
      id: 4,
      faceCard: Kristina,
      name: "Kristina Lenbery",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
    {
      id: 5,
      faceCard: George,
      name: "George Weah",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
    {
      id: 6,
      faceCard: Clark,
      name: "Bruce Wayne",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
    {
      id: 7,
      faceCard: Chi,
      name: "Amanda Wallace",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
    {
      id: 8,
      faceCard: Manny,
      name: "John Carter",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
    {
      id: 9,
      faceCard: Kristina,
      name: "Ana Anatovic",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
    {
      id: 10,
      faceCard: George,
      name: "Pascal Lebouf",
      role: "Senior Product Designer at Tabby",
      designation: "New Mentor",
      exp: 7,
      averageAttendance: 67
    },
  ]

  const filteredMentor = data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()) || "")

  return (
    <div className='flex flex-col gap-6 overflow-x-hidden'>
        <div className='bg-[#fff] border-[#E4E5E8] border rounded-lg flex flex-col w-12/12 h-auto'>
          <div className='flex items-center border p-3 border-t-0 border-l-0 border-r-0'>
            <div className='w-5/12 flex items-center gap-1 '>
              <CiSearch className='w-5 h-5 text-[#3B82F6]'/>
              <input 
                className='bg-transparent outline-none w-[401px] border-none'
                placeholder='Search by: Name, Company, Role...'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className='bg-[#EBEBEB] h-[40px] w-[1px] mx-2'></div>
            <div className='w-4/12 flex items-center gap-1 '>
              <CiLocationOn className='w-5 h-5 text-[#3B82F6]'/>
              <input 
                className='bg-transparent outline-none w-[401px] border-none'
                placeholder='Country'
                value={searchCountry}
                onChange={(e) => setSearchCountry(e.target.value)}
              />
            </div>
            <div className='flex items-center pr-4 gap-3'>
              <button
                className='w-[131px] p-2.5 bg-[#F1F2F4] rounded-xl flex items-center h-auto justify-center gap-2'
                onClick={() => setIsFilterModalOpen(true)}
              >
                <PiSlidersBold className='w-5 h-5 text-[#334155]' />
                <p className='font-semibold text-[#334155] text-base font-general-sans'>Filters</p>
              </button>
              <button
                className='w-[114px] p-2.5 bg-[#3B82F6] rounded-xl flex items-center h-auto justify-center gap-2'
              >
                <p className='font-semibold text-[#fff] text-base font-general-sans'>Search</p>
              </button>
            </div>
          </div>
          <div className='flex items-center p-3 gap-2'>
            <div className='w-auto bg-[#3B82F6] p-2 rounded-[100px]'>
              <p className='text-[#fff] whitespace-nowrap font-general-sans font-normal font-semibold'>Available ASAP</p>
            </div>
            <div className='w-auto bg-[#3B82F6] p-2 rounded-[100px]'>
              <p className='text-[#fff] font-general-sans whitespace-nowrap font-normal font-semibold'>Recommended</p>
            </div>
            <div className='w-auto bg-[#fff] border border-[#BBBBBB] p-2 rounded-[100px]'>
              <p className='text-[#334155] font-general-sans whitespace-nowrap font-normal font-semibold'>Content Writing</p>
            </div>
            <div className='w-auto bg-[#fff] border border-[#BBBBBB] p-2 rounded-[100px]'>
              <p className='text-[#334155] font-general-sans whitespace-nowrap font-normal font-semibold'>Data Science</p>
            </div>
            <div className='w-auto bg-[#fff] border border-[#BBBBBB] p-2 rounded-[100px]'>
              <p className='text-[#334155] font-general-sans whitespace-nowrap font-normal font-semibold'>Design</p>
            </div>
            <div className='w-auto bg-[#fff] border border-[#BBBBBB] p-2 rounded-[100px]'>
              <p className='text-[#334155] font-general-sans whitespace-nowrap font-normal font-semibold'>Engineering</p>
            </div>
            <div className='w-auto bg-[#fff] border border-[#BBBBBB] p-2 rounded-[100px]'>
              <p className='text-[#334155] font-general-sans whitespace-nowrap font-normal font-semibold'>Marketing</p>
            </div>
            <div className='w-auto bg-[#fff] border border-[#BBBBBB] p-2 rounded-[100px]'>
              <p className='text-[#334155] font-general-sans whitespace-nowrap font-normal font-semibold'>No/Low Code</p>
            </div>
            <div className='w-auto bg-[#fff] border border-[#BBBBBB] p-2 rounded-[100px]'>
              <p className='text-[#334155] font-general-sans whitespace-nowrap font-normal font-semibold'>Product Research</p>
            </div>
            <div className='w-auto bg-[#fff] border border-[#BBBBBB] p-2 rounded-[100px]'>
              <p className='text-[#334155] font-general-sans whitespace-nowrap font-normal font-semibold'>Sales/BD</p>
            </div>
            <div className='w-auto bg-[#fff] border border-[#000] border-r-0 border-t-0 border-b-0 p-2 '>
              <p className='text-[#334155] font-general-sans font-normal font-semibold'>Reset</p>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-5  gap-6'> {/* flex flex-wrap w-[250px]*/}
          {
            filteredMentor?.map((item) => (
              <div key={item?.id} className='w-auto bg-[#fff] max-h-auto p-[14px] flex flex-col gap-2.5 rounded-lg border border-[#BBBBBB]'>
                <img src={item.faceCard} alt='face card' className='w-full ' /> 
                <p className='font-general-sans text-lg text-[#334155] font-semibold'>{item.name}</p>

                <div className='flex flex-col gap-1.5'>
                  <div className='flex items-center gap-1'>
                    <img src={Suitcase} alt='Suitcase' className='w-5 h-5' />
                    <p className='text-[#334155] font-general-sans text-sm font-medium'>{item.role}</p>
                  </div>
                  <div className='flex items-center gap-1'>
                    <img src={Star} alt='Star' className='w-5 h-5' />
                    <p className='text-[#334155] font-general-sans text-sm'>{item.designation}</p>
                  </div>
                </div>

                <div className='bg-[#F9FAFB] flex items-center justify-between gap-10 px-4 py-2 rounded-lg'>
                  <div className='flex flex-col gap-1.5'>
                    <p className='font-general-sans text-[#334155]  text-[10px]'>Experience</p>
                    <p className='font-general-sans text-[#334155] font-semibold'>{`${item.exp} years`}</p>
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <p className='font-general-sans text-[#334155] whitespace-nowrap text-[10px]'>Avg. Attendance</p>
                    <p className='font-general-sans text-[#334155] font-semibold'>{`${item.averageAttendance} %`}</p>
                  </div>
                </div>

                <button
                  type='button'
                  className='w-full rounded-lg flex items-center bg-[#3B82F6] justify-center h-[44px]'
                  onClick={() => {navigate("/view-mentor"), window.scrollTo(0, 0)}}
                >
                  <p className='text-base font-general-sans font-semibold text-[#fff]'>View Mentor</p>
                </button>

              </div>
            ))
          }
        </div>
        {isFilterModalOpen && (
          <div className="fixed inset-0 bg-[#FAFAFA] bg-opacity-30 flex justify-end">
            <div className="bg-[#FAFAFA] w-[338px] mt-24 h-full shadow-lg">
              <div className="p-4 flex gap-2.5 items-center border-b">
                <button
                  className="text-gray-500 text-lg"
                  onClick={() => setIsFilterModalOpen(false)} 
                >
                  <IoIosArrowBack className="w-5 h-5"  />
                </button>
                <h2 className="text-xl font-bold">Filter</h2>
              </div>
              <div className="p-4">
                <ul>
                  <li className="py-5 border-b flex items-center justify-between">
                    <p className='text-[#334155] text-lg font-general-sans'>Country</p>
                    <IoIosArrowForward className="w-4 h-4"  />
                  </li>
                  <li className="py-5 border-b flex items-center justify-between">
                    <p className='text-[#334155] text-lg font-general-sans'>Language</p>
                    <IoIosArrowForward className="w-4 h-4"  />
                  </li>
                  <li className="py-5 border-b flex items-center justify-between">
                    <p className='text-[#334155] text-lg font-general-sans'>Industry</p>
                    <IoIosArrowForward className="w-4 h-4"  />
                  </li>
                  <li className="py-5 border-b flex items-center justify-between">
                    <p className='text-[#334155] text-lg font-general-sans'>Gender</p>
                    <IoIosArrowForward className="w-4 h-4"  />
                  </li>
                </ul>
              </div>
              <div className="p-4 flex justify-between">
                <button
                  className="p-2 flex items-center justify-center border border-[#3B82F6] w-[144px] h-auto text-base font-semibold rounded-lg text-[#3B82F6]"
                  onClick={() => setIsFilterModalOpen(false)}
                >
                  Cancel
                </button>
                <button className="p-2 bg-[#3B82F6] text-[#fff] w-[144px] h-auto text-base font-semibold rounded-lg">
                  Apply
                </button>
              </div>
            </div>
          </div>
        )}
    </div>
  )
}

export default Mentors