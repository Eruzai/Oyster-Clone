import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Designer from "../assets/png/designer.png"
import Officer from "../assets/png/officer.png"
import PersonA from "../assets/png/personA.png"
import PersonB from "../assets/png/personB.png"
import PersonC from "../assets/png/personC.png"
import PersonD from "../assets/png/personD.png"

import Circle from "../assets/svg/circle.svg"
import Polygon from "../assets/svg/polygon.svg"
import Twin from "../assets/svg/twin.svg"
import Clock from "../assets/svg/clock.svg"
import Book from "../assets/svg/book.svg"
import { IoIosLink } from 'react-icons/io';
 

export default function ResourcePage() {
  const [progress, setProgress] = useState(19)
  const [progressB, setProgressB] = useState(52)
  const [progressC, setProgressC] = useState(78)
  const [currentDate, setCurrentDate] = useState(new Date());


  const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();

  const handlePrevious = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 7)));
  };

  const handleNext = () => {
    setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 7)));
  };

  const getDates = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1); // Start on Monday
    return Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
  };

  const people = [ PersonA, PersonB, PersonC, PersonD] 
  
  return (
    <div className='py-[32px] px-[30px]'>
      <div className='gap-5 flex items-start'>
        <div className='flex flex-col gap-5'>
          <div className='flex items-center gap-2 w-full h-auto py-3 bg-[#fff] border border-[#D8E6FD] rounded-lg'>
            <div className='flex w-8/12 gap-3 flex-col px-[28px] '>
              <div className='flex flex-col gap-1'>
                <p className='font-semibold text-[26px] text-[#3B82F6] font-general-sans'>Product Design Foundations:</p> 
                <p className='text-[#3B82F6] font-general-sans '>From Student to Professional</p>
              </div>
              <button
                className='w-[140px] bg-[#3B82F6] rounded-xl h-[38px]'
                type='button'
              >
                <p className='text-base font-semibold text-[#FFFFFF] font-general-sans'>Start Course</p>
              </button>
            </div>
            <img src={Designer} alt='Designer' className='w-4/12 h-auto' />
          </div>

          <div className='flex bg-[#fff] w-full rounded-lg border p-5 flex-col border-[#D8E6FD] gap-3'>
            <p className='text-lg font-general-sans text-[#3B82F6] font-semibold'>Your Progress</p>
            <div className='flex items-center gap-5'>
              <div className='flex flex-col h-auto py-[23px] px-3 gap-[18px] bg-[#C6ECEC] rounded-xl'>
                <div className='bg-[#334155] flex items-center justify-center rounded-full w-[35px] h-[35px] p-1'>
                  <img src={Circle} alt='Circle' className='w-[32px] h-[32px]' />
                </div>
                <p className='font-general-sans text-base font-semibold text-[#334155]'>Beginner’s Design Mastery</p>
                <div className='w-full h-2 bg-[#94A3B8] rounded-full overflow-hidden'>
                  <div className='h-full bg-[#334155] rounded-full' style={{ width: `${progress}%` }}></div>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='font-medium font-general-sans text-[#334155] font-medium'>Your progress</p>
                  <p className='font-medium font-general-sans text-[#334155] font-medium'>{progress}%</p>
                </div>
              </div>
              <div className='flex flex-col h-auto py-[23px] px-5 gap-[18px] bg-[#F4B8FA] rounded-xl'>
                <div className='bg-[#334155] flex items-center justify-center rounded-full w-[35px] h-[35px] p-1'>
                  <img src={Polygon} alt='Polygon' className='w-[32px] h-[32px]' />
                </div>
                <p className='font-general-sans text-base font-semibold text-[#334155]'>Design Essential’s Course</p>
                <div className='w-full h-2 bg-[#94A3B8] rounded-full overflow-hidden'>
                  <div className='h-full bg-[#334155] rounded-full' style={{ width: `${progressB}%` }}></div>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='font-medium font-general-sans text-[#334155] font-medium'>Your progress</p>
                  <p className='font-medium font-general-sans text-[#334155] font-medium'>{progressB}%</p>
                </div>
              </div>
              <div className='flex flex-col py-[23px] h-auto px-5 gap-[18px] bg-[#FDF4AB] rounded-xl'>
                <div className='bg-[#334155] flex items-center justify-center rounded-full w-[35px] h-[35px] p-1'>
                  <img src={Twin} alt='Twin' className='w-[32px] h-[32px]' />
                </div>
                <p className='font-general-sans text-base font-semibold text-[#334155]'>Novice to Pro UX Designer</p>
                <div className='w-full h-2 bg-[#94A3B8] rounded-full overflow-hidden'>
                  <div className='h-full bg-[#334155] rounded-full' style={{ width: `${progressC}%` }}></div>
                </div>
                <div className='flex items-center justify-between'>
                  <p className='font-medium font-general-sans text-[#334155] font-medium'>Your progress</p>
                  <p className='font-medium font-general-sans text-[#334155] font-medium'>{progressC}%</p>
                </div>
              </div>

            </div>
          </div>

          <div className='flex items-center gap-2 w-full h-auto py-3 bg-gradient-to-r from-[#E7FFEB] to-[#fff] border border-[#D8E6FD] rounded-lg'>
            <div className='flex w-8/12 gap-3 flex-col px-[28px] '>
              <div className='flex flex-col gap-1'>
                <p className='font-semibold text-[26px] text-[#3B82F6] font-general-sans'>
                  Mastering Product Design Interviews: 
                </p> 
                <p className='text-[#3B82F6] font-general-sans '>A Complete Preparation Guide</p>
              </div>
              <button
                className='w-[140px] bg-[#3B82F6] rounded-xl h-[38px]'
                type='button'
              >
                <p className='text-base font-semibold text-[#FFFFFF] font-general-sans'>Read Blog</p>
              </button>
            </div>
            <img src={Officer} alt='Officer' className='w-4/12 h-auto' />
          </div>
        </div>

        <div className='flex flex-col gap-5 w-1/3'>

          {/* Calendar Component Here */}
          <div className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm bg-white ">
            <div className="flex items-center justify-between w-full mb-4">
              <button onClick={handlePrevious} className="p-2 rounded-full hover:bg-gray-100 w-[36px] border-[#EBEBEB] border flex items-center justify-center items-center">
                <FaChevronLeft className="text-gray-500" />
              </button>
              <h2 className="text-lg font-semibold text-gray-700">
                {currentMonth} {currentYear}
              </h2>
              <button onClick={handleNext} className="p-2 rounded-full hover:bg-gray-100 w-[36px] border-[#EBEBEB] border flex items-center justify-center items-center">
                <FaChevronRight className="text-gray-500" />
              </button>
            </div>
            <div className="grid grid-cols-7 gap-3 w-full">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-gray-500 font-medium">{day}</div>
              ))}
              {getDates().map((date) => {
                const isToday = date.toDateString() === new Date().toDateString();
                return (
                  <div
                    key={date}
                    className={`flex flex-col items-center py-2 rounded-lg ${
                      isToday ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-700'
                    }`}
                  >
                    <span className="text-sm">{date.getDate().toString().padStart(2, '0')}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className='border border-[#D8E6FD] rounded-lg bg-[#fff] gap-3 flex flex-col h-auto p-5'>
            <p className='text-[#3B82F6] font-general-sans text-lg font-semibold'>Upcoming Courses</p>

            <div className='bg-[#D7F9DE] rounded-lg py-5 px-6 flex flex-col gap-4'>
              <div className='flex items-center justify-between'>
                <div className='w-[209px] '>
                  <p className='font-semibold text-lg leading-[22px] text-[#334155]'>Agile Product Design:</p>
                  <p className='text-[#334155] leading-[22px] text-sm font-medium'>Iterative Processes for Product Success</p>
                  
                </div>
                <div className='w-[100px] hidden'>
                  <p className='text-[#334155] font-semibold font-general-sans text-base'>CAD $44.<span className='text-xs'>99</span> </p>
                </div>
              </div>

              <p className='text-xs text-[#334155] font-general-sans'>
                Master the agile methodology within product design, emphasizing iterative design, collaboration, and adaptability. 
                This course is perfect for designers who want to work effectively in agile environments and respond to evolving 
                user needs.
              </p>

              <div className='flex items-center gap-6'>
                <div className='flex items-center gap-1'>
                  <img src={Clock} alt='Clock' className='w-5 h-5' />
                  <p className='text-[#334155] font-semibold text-sm font-general-sans'>12 weeks</p>
                </div>

                <div className='flex items-center gap-1'>
                  <img src={Book} alt='Book' className='w-5 h-5' />
                  <p className='text-[#334155] font-semibold text-sm font-general-sans'>14 lessons</p>
                </div>
              </div>

              <div className='flex items-center mt-4 justify-between border border-b-0 border-l-0 border-r-0 border-dashed border-[#334155] pt-2'>
                <div className='flex items-center gap-1 '>
                  <div className='flex items-center -space-x-2'>
                    {people?.slice(0, 4).map((p, index) => (
                        <div key={index} className='w-8 h-8 rounded-full overflow-hidden'>
                            <img src={p} alt='person' style={{borderRadius: "50%"}} className='w-full h-full object-cover'/>
                        </div>
                    ))}
                  </div>
                  <p className='text-[#334155] font-medium font-general-sans text-sm'>10 people</p>
                </div>

                <button className='bg-[#3B82F6] p-2 w-[152px] flex items-center rounded-lg justify-center'>
                  <p className='text-[#fff] text-sm font-semibold'>Secure Your Spot</p>
                </button>
              </div>
            </div>
          </div>
          
          <div className='border border-[#D8E6FD] rounded-lg bg-[#fff] gap-3 flex flex-col h-auto p-5'>
            <p className='text-[#3B82F6] font-general-sans text-lg font-semibold'>Top articles in your industry</p>

            <div className='flex flex-col gap-2.5'>
              <div className='bg-[#FFE2E2] w-full gap-1 flex flex-col rounded-lg py-2 px-2.5'>
                <p className='font-general-sans text-[#234E94] text-sm font-semibold'>10 Inspiring Product Design  By Chinenye Chekwube</p>
                <div className='flex items-center gap-1'>
                  <IoIosLink className="text-[#334155] w-5 h-5" />
                  <div className='w-[103px] bg-[#3B82F6] p-1 flex items-center justify-center rounded'>
                    <p className='text-[#fff] font-semibold text-xs font-general-sans'>CareerFoundry</p>
                  </div>
                </div>
              </div>

              <div className='bg-[#FFE2E2] w-full gap-1 flex flex-col rounded-lg py-2 px-2.5'>
                <p className='font-general-sans text-[#234E94] text-sm font-semibold'>How to ace your product designer interviews</p>
                <div className='flex items-center gap-1'>
                  <IoIosLink className="text-[#334155] w-5 h-5" />
                  <div className='w-[60px] bg-[#3B82F6] p-1 flex items-center justify-center rounded'>
                    <p className='text-[#fff] font-semibold text-xs font-general-sans'>Oyster</p>
                  </div>
                </div>
              </div>
              
              <div className='bg-[#FFE2E2] w-full gap-1 flex flex-col rounded-lg py-2 px-2.5'>
                <p className='font-general-sans text-[#234E94] text-sm font-semibold'>How to Build a Professional Portfolio Using Framer</p>
                <div className='flex items-center gap-1'>
                  <IoIosLink className="text-[#334155] w-5 h-5" />
                  <div className='w-[90px] bg-[#3B82F6] p-1 flex items-center justify-center rounded'>
                    <p className='text-[#fff] font-semibold text-xs font-general-sans'>Framer Blog</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
