import React from 'react'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { IoStar } from "react-icons/io5";
import { RxLightningBolt } from "react-icons/rx";

const Overview = () => {
  return (
    <div className='flex items-start gap-[60px] w-full'>
        <div className='flex flex-col gap-[28px] w-7/12'>
            <div className='flex flex-col gap-5'>
                <p className='text-[#334155] text-base font-general-sans'>
                    I am a Product & Design Expert with over 11 years of experience across global product companies like 
                    Google, Waze, HP, Wix, Designit, and Amdocs. 🌟
                </p>
                <p className='text-[#334155] text-base font-general-sans'>
                    Dedicated to guiding and empowering design professionals in their journey of career in product design, 
                    I offer comprehensive mentoring on innovative methodologies, best design practices, 
                    and the invaluable human-centered approach. 🎨💡
                </p>
                <p className='text-[#334155] text-base font-general-sans'>
                    With a focus on fostering creativity and excellence, 
                    I am committed to nurturing the career development and personal growth of individuals 
                    within the design industry. 🚀🌱
                </p>
                <p className='text-[#334155] text-base font-general-sans'>
                    Through personalized guidance and support, I strive to inspire and uplift professionals, 
                    equipping them with the knowledge, skills, and confidence to thrive in the ever-evolving 
                    landscape of product and design. 📈💪
                </p>
                <p className='text-[#334155] text-base font-general-sans'>
                    Want to work with us? You're in good company!
                </p>

                <div className='flex items-cneter gap-5'>
                    <div className='w-[40px] h-[40px] bg-[#E7F0FA] cursor-pointer flex items-center rounded-lg justify-center '>
                        <FaLinkedin className='w-5 h-5 text-[#3B82F6]' />
                    </div>
                    <div className='w-[40px] h-[40px] bg-[#3B82F6] cursor-pointer flex items-center rounded-lg justify-center '>
                        <FaFacebook className='w-5 h-5 text-[#fff]' />
                    </div>
                    <div className='w-[40px] h-[40px] bg-[#E7F0FA] cursor-pointer flex items-center rounded-lg justify-center '>
                        <FaTwitter className='w-5 h-5 text-[#3B82F6]' />
                    </div>
                </div>

            </div>

            <div className='flex flex-col gap-[15px]'>
                <p className='font-general-sans text-[#334155] text-[20px] font-semibold'>Background</p>
                <div className='border border-[#EBEBEB] gap-[23px] rounded-xl w-full h-auto flex p-5 flex-col'>
                    <div className='flex items-center justify-between'>
                        <p className='font-general-sans text-[#334155] font-medium text-base'>Expertise</p>
                        <div className='flex items-center gap-2.5'>
                            <div className='bg-[#D8E6FD] flex items-center cursor-pointer p-2 w-[87px] rounded-lg justify-center'>
                                <p className='font-semibold text-[#3B82F6] text-sm font-general-sans'>Design</p>
                            </div>
                            <div className='bg-[#FFE2E2] flex items-center cursor-pointer p-2 w-[95px] rounded-lg justify-center'>
                                <p className='font-semibold text-[#FF6262] text-sm font-general-sans'>Product</p>
                            </div>

                        </div>
                    </div>

                    <hr />

                    <div className='flex items-center justify-between'>
                        <p className='font-general-sans text-[#334155] font-medium text-base'>Disciplines</p>
                        <div className='flex items-center gap-2.5'>
                            <div className='bg-[#EBEBEB] flex items-center cursor-pointer p-2 w-[110px] rounded-lg justify-center'>
                                <p className='font-semibold text-[#334155] text-sm font-general-sans'>UX Design</p>
                            </div>
                            <div className='bg-[#EBEBEB] flex items-center cursor-pointer p-2 w-[144px] rounded-lg justify-center'>
                                <p className='font-semibold text-[#334155] text-sm font-general-sans'>Product Design</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className='flex items-center justify-between'>
                        <p className='font-general-sans text-[#334155] font-medium text-base'>Fluent in</p>
                        <div className='flex items-center gap-2.5'>
                            <div className='bg-[#EBEBEB] flex items-center cursor-pointer p-2 w-[89px] rounded-lg justify-center'>
                                <p className='font-semibold text-[#334155] text-sm font-general-sans'>English</p>
                            </div>
                            <div className='bg-[#EBEBEB] flex items-center cursor-pointer p-2 w-[94px] rounded-lg justify-center'>
                                <p className='font-semibold text-[#334155] text-sm font-general-sans'>Spanish</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col gap-[15px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <p className='font-general-sans text-[#334155] text-[20px] font-semibold'>Experience</p>
                        <div className='bg-[#FFE2E2] flex items-center justify-center w-[20px] h-[26px]'>
                            <p className='text-[#FC5353] text-[20px] font-general-sans font-semibold'>5</p>
                        </div>
                    </div>
                    <div className='border border-[#3B82F6] rounded-[8px] w-[70px] p-1 flex items-center justify-center'>
                        <p className='font-general-sans text-[#3B82F6] text-xs font-semibold'>View All</p>
                    </div>
                </div>

                <div className='border border-[#EBEBEB] gap-[23px] rounded-xl w-full h-auto flex p-5 flex-col'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <p className='font-general-sans text-[#334155] font-medium text-base'>Lead Product Designer</p>
                            <p className='font-general-sans text-[#888888] font-medium text-xs'>Google</p>
                        </div>
                        <div className='bg-[#D8E6FD] flex items-center cursor-pointer p-2 w-[178px] rounded-lg justify-center'>
                            <p className='font-semibold text-[#234E94] text-sm font-general-sans'>FEB, 2018 - PRESENT</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[15px]'>
                <div className='flex items-center gap-1'>
                    <p className='font-general-sans text-[#334155] text-[20px] font-semibold'>Experience</p>
                    <div className='bg-[#FFE2E2] flex items-center justify-center w-[20px] h-[26px]'>
                        <p className='text-[#FC5353] text-[20px] font-general-sans font-semibold'>3</p>
                    </div>
                </div>
                <div className='border border-[#EBEBEB] gap-[23px] rounded-xl w-full h-auto flex p-5 flex-col'>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <p className='font-general-sans text-[#334155] font-medium text-base'>User Experience Design</p>
                            <div className='flex items-center gap-1'>
                                <p className='font-general-sans text-[#888888] font-medium text-xs'>Master’s Degree</p>
                                <div className='h-[10px] w-[1px] bg-[#888888]'></div>
                                <p className='font-general-sans text-[#888888] font-medium text-xs'>Lancaster University </p>
                            </div>
                        </div>
                        <div className='border border-[#888888] bg-[#F9FAFB] flex items-center cursor-pointer p-2 w-[116px] rounded-lg justify-center'>
                            <p className='font-semibold text-[#334155] text-sm font-general-sans'>2020 - 2022</p>
                        </div>
                    </div>

                    <hr />

                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <p className='font-general-sans text-[#334155] font-medium text-base'>Graphic Design</p>
                            <div className='flex items-center gap-1'>
                                <p className='font-general-sans text-[#888888] font-medium text-xs'>Bachelor’s Degree</p>
                                <div className='h-[10px] w-[1px] bg-[#888888]'></div>
                                <p className='font-general-sans text-[#888888] font-medium text-xs'>University of Nottingham </p>

                            </div>
                        </div>
                        <div className='border border-[#888888] bg-[#F9FAFB] flex items-center cursor-pointer p-2 w-[116px] rounded-lg justify-center'>
                            <p className='font-semibold text-[#334155] text-sm font-general-sans'>2026 - 2020</p>
                        </div>
                    </div>

                    <hr />

                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <p className='font-general-sans text-[#334155] font-medium text-base'>High School Diploma</p>
                            <div className='flex items-center gap-1'>
                                <p className='font-general-sans text-[#888888] font-medium text-xs'>High School Diploma</p>
                            </div>
                        </div>
                        <div className='border border-[#888888] bg-[#F9FAFB] flex items-center cursor-pointer p-2 w-[116px] rounded-lg justify-center'>
                            <p className='font-semibold text-[#334155] text-sm font-general-sans'>2026 - 2020</p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='flex flex-col gap-[15px]'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <p className='font-general-sans text-[#334155] text-[20px] font-semibold'>Achievement</p>
                        <div className='bg-[#FFE2E2] flex items-center justify-center w-8 h-[26px]'>
                            <p className='text-[#FC5353] text-[20px] font-general-sans font-semibold'>10</p>
                        </div>
                    </div>
                    <div className='border border-[#3B82F6] rounded-[8px] w-[70px] p-1 flex items-center justify-center'>
                        <p className='font-general-sans text-[#3B82F6] text-xs font-semibold'>View All</p>
                    </div>
                </div>

                <div className='border border-[#EBEBEB] gap-[23px] rounded-xl w-full h-auto flex p-5 flex-col'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[50px] h-[50px] flex items-center justify-center bg-[#FDF4AB]'>
                                <IoStar className='w-9 h-9 text-[#FFBB00]' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='font-general-sans text-[#334155] text-base font-medium '>3000 Mentorship Minutes</p>
                                <p className='font-general-sans text-[#629BF8] font-semibold text-xs '>See Credentials</p>
                            </div>
                        </div>
                        <div className='border border-[#888888] bg-[#F9FAFB] flex items-center cursor-pointer p-2 w-[116px] rounded-lg justify-center'>
                            <p className='font-semibold text-[#334155] text-sm font-general-sans'>01 FEB, 2024</p>
                        </div>
                    </div>

                    <hr />

                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <div className='w-[50px] h-[50px] flex items-center justify-center bg-[#FDF4AB]'>
                                <IoStar className='w-9 h-9 text-[#FFBB00]' />
                            </div>
                            <div className='flex flex-col gap-1'>
                                <p className='font-general-sans text-[#334155] text-base font-medium '>1000 Mentorship Minutes</p>
                                <p className='font-general-sans text-[#629BF8] font-semibold text-xs '>See Credentials</p>
                            </div>
                        </div>
                        <div className='border border-[#888888] bg-[#F9FAFB] flex items-center cursor-pointer p-2 w-[116px] rounded-lg justify-center'>
                            <p className='font-semibold text-[#334155] text-sm font-general-sans'>01 SEPT, 2024</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
        <div className='w-5/12 flex flex-col gap-[28px]'>
            <div className='w-full border border-[#EBEBEB] rounded-[20px] flex flex-col gap-3 p-5'>
                <div className='flex items-center justify-between'>
                    <p className='font-semibold font-general-sans text-[20px] text-[#334155]'>Achievement</p>
                    <div className='w-[70px] border border-[#3B82F6] flex items-center justify-center p-1 rounded-xl'>
                        <p className='text-[#3B82F6] font-general-sans text-xs font-semibold'>View All</p>
                    </div>
                </div>

                <div className='w-full border py-[23px] px-5 border-[#EBEBEB] rounded-[10px] flex items-center gap-[105px]'>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#334155] font-general-sans font-medium text-base'>3,660 mins</p>
                        <p className='text-xs text-[#629BF8] font-general-sans font-semibold' >Total Mentoring Time</p>
                    </div>

                    <div className='flex flex-col gap-1'>
                        <p className='text-[#334155] font-general-sans font-medium text-base'>118</p>
                        <p className='text-xs text-[#629BF8] font-general-sans font-semibold' >Sessions complete</p>
                    </div>

                </div>

            </div>

            <div className='w-full border border-[#EBEBEB] rounded-[20px] flex flex-col gap-3 p-5'>
                <div className='flex flex-col gap-1'>
                    <p className='font-semibold font-general-sans text-[20px] text-[#334155]'>Available Sessions</p>
                    <p className='font-medium font-general-sans text-sm text-[#888888]'>Book 1:1 sessions from the options based on your needs</p>
                </div>

                <div className='w-full border py-[23px] px-4 border-[#EBEBEB] rounded-[10px] flex flex-col gap-[28px]'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#629BF8] w-[38px] h-[38px] flex items-center rounded-full justify-center'>
                            <RxLightningBolt className='w-5 h-5 text-[#fff]' />
                        </div>
                        <p className='font-semibold text-[#334155] text-[20px] font-general-sans'>Free Package</p>
                    </div>

                    <hr />

                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#334155] font-medium text-sm font-general-sans'>Mentorship Discovery Session</p>
                            <p className='font-general-sans text-[#629BF8] text-xs font-semibold'>15 minutes</p>
                        </div>

                        <div className='bg-[#3B82F6] w-[82px] rounded-[10px] flex items-center justify-center p-2'>
                            <p className='text-[#FFFFFF] font-general-sans font-semibold text-[14px]'>Book</p>
                        </div>

                    </div>


                </div>

                <div className='w-full border py-[23px] px-4 border-[#EBEBEB] rounded-[10px] flex flex-col gap-[28px]'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#FFBB00] w-[38px] h-[38px] flex items-center rounded-full justify-center'>
                            <RxLightningBolt className='w-5 h-5 text-[#fff]' />
                        </div>
                        <p className='font-semibold text-[#334155] text-[20px] font-general-sans'>Advance Package</p>
                    </div>

                    <hr />

                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#334155] font-medium text-sm font-general-sans'>Portfolio / Resume review + Carrer Advice</p>
                            <p className='font-general-sans text-[#629BF8] text-xs font-semibold'>45 minutes, Weekly <span className='text-xs text-[#888888]'>(2 sessions)</span></p>
                        </div>

                        <div className='bg-[#3B82F6] w-[82px] rounded-[10px] flex items-center justify-center p-2'>
                            <p className='text-[#FFFFFF] font-general-sans font-semibold text-[14px]'>Book</p>
                        </div>
                    </div>

                    <p className='text-[#334155] font-semibold text-[18px] font-general-sans'>CAD $120.00</p>

                </div>

                <div className='w-full border py-[23px] px-4 border-[#EBEBEB] rounded-[10px] flex flex-col gap-[28px]'>
                    <div className='flex items-center gap-2'>
                        <div className='bg-[#FFBB00] w-[38px] h-[38px] flex items-center rounded-full justify-center'>
                            <RxLightningBolt className='w-5 h-5 text-[#fff]' />
                        </div>
                        <p className='font-semibold text-[#334155] text-[20px] font-general-sans'>Advance Package</p>
                    </div>

                    <hr />

                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[#334155] font-medium text-sm font-general-sans'>Conquer Case Study Presentations</p>
                            <p className='font-general-sans text-[#629BF8] text-xs font-semibold'>45 minutes, Weekly <span className='text-xs text-[#888888]'>(3 sessions)</span></p>
                        </div>

                        <div className='bg-[#3B82F6] w-[82px] rounded-[10px] flex items-center justify-center p-2'>
                            <p className='text-[#FFFFFF] font-general-sans font-semibold text-[14px]'>Book</p>
                        </div>
                    </div>

                    <p className='text-[#334155] font-semibold text-[18px] font-general-sans'>CAD $120.00</p>

                </div>

            </div>

        </div>
    </div>
  )
}

export default Overview