import React from 'react'
import Sam from "../../assets/png/sam.png"

const Reviews = () => {

    const data = [
        {
            id: 1,
            img: Sam,
            name: "Samuel Odogwu",
            role: "Junior UI Designer",
            position: "Mentee",
            date: "October 22, 2023",
            comment: `Chinenye has been incredibly helpful from the start and patient, 
                      especially when I had to reschedule several times due to my busy schedule. 
                      Her approach is straightforward, and her instructions have always been clear. 
                      The directness and clarity with which she communicates her ideas have been invaluable to me. 
                      I’ve taken five sessions so far and have already booked a few more, fully confident in the process!`,
            cheer: "Thank you, Chinenye for being so helpful and kind.",
            tags: ["Technically Competent", "Amazing Problem Solver", "Amazing Communicator", "Very Motivational"]
        },
        {
            id: 2,
            img: Sam,
            name: "Samuel Odogwu",
            role: "Junior UI Designer",
            position: "Mentee",
            date: "October 22, 2023",
            comment: `Chinenye has been incredibly helpful from the start and patient, 
                      especially when I had to reschedule several times due to my busy schedule. 
                      Her approach is straightforward, and her instructions have always been clear. 
                      The directness and clarity with which she communicates her ideas have been invaluable to me. 
                      I’ve taken five sessions so far and have already booked a few more, fully confident in the process!`,
            cheer: "Thank you, Chinenye for being so helpful and kind.",
            tags: ["Technically Competent", "Amazing Problem Solver", "Amazing Communicator", "Very Motivational"]
        },
        {
            id: 3,
            img: Sam,
            name: "Samuel Odogwu",
            role: "Junior UI Designer",
            position: "Mentee",
            date: "October 22, 2023",
            comment: `Chinenye has been incredibly helpful from the start and patient, 
                      especially when I had to reschedule several times due to my busy schedule. 
                      Her approach is straightforward, and her instructions have always been clear. 
                      The directness and clarity with which she communicates her ideas have been invaluable to me. 
                      I’ve taken five sessions so far and have already booked a few more, fully confident in the process!`,
            cheer: "Thank you, Chinenye for being so helpful and kind.",
            tags: ["Technically Competent", "Amazing Problem Solver", "Amazing Communicator", "Very Motivational"]
        },
        {
            id: 4,
            img: Sam,
            name: "Samuel Odogwu",
            role: "Junior UI Designer",
            position: "Mentee",
            date: "October 22, 2023",
            comment: `Chinenye has been incredibly helpful from the start and patient, 
                      especially when I had to reschedule several times due to my busy schedule. 
                      Her approach is straightforward, and her instructions have always been clear. 
                      The directness and clarity with which she communicates her ideas have been invaluable to me. 
                      I’ve taken five sessions so far and have already booked a few more, fully confident in the process!`,
            cheer: "Thank you, Chinenye for being so helpful and kind.",
            tags: ["Technically Competent", "Amazing Problem Solver", "Amazing Communicator", "Very Motivational"]
        },
    ]

  return (
    <div className='mt-[32px] w-full'>
        <div className='flex w-7/12 flex-col gap-[28px]'>
        {
            data.map((item) => (
                <div className='w-full gap-5 flex-col flex border border-r-0 border-l-0 border-t-0 border-[#EBEBEB] pb-8' key={item.id}>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center gap-1.5'>
                            <img src={item.img} alt='User' className='w-[42px] h-[42px] rounded-full' />
                            <div className='flex flex-col gap-1'>
                                <p>{item.name}</p>
                                <div className='flex items-center gap-1'>
                                    <p className='font-general-sans text-[#888888] font-medium text-xs'>{item.role}</p>
                                    <div className='h-[10px] w-[1px] bg-[#3B82F6]'></div>
                                    <p className='font-general-sans text-[#888888] font-medium text-xs'>{item.position}</p>
                                </div>
                            </div>
                        </div>
                        <p className='font-general-sans font-medium text-[#888888] text-xs'>{item.date}</p>
                    </div>
                    <p className='font-general-sans text-[#334155] text-base font-normal'>{item.comment}</p>
                    <p className='font-general-sans text-[#334155] text-base font-normal'>{item.cheer}</p>

                    <div className='flex items-center gap-4 '>
                        {item.tags.map((i, index) => (
                            <div className='bg-[#D8E6FD] w-[210px] p-1.5 h-[36px] rounded flex items-center justify-center' key={index}>
                                <p className='text-[#234E94] text-xs font-semibold whitespace-nowrap font-general-sans'>{i}</p>
                            </div>
                        ))}
                    </div>



                </div>
            ))
        }

        </div>
    </div>
  )
}

export default Reviews