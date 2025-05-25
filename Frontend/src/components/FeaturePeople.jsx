import React from "react";

const peoples = [
  {
    name: "Emily W.",
    title: "Business Analyst Intern",
    image: "/Emily.png",
    quote:
      "“Oyster connected me with an international internship I never thought was possible! The platform made everything so seamless and easy.”",
  },
  {
    name: "Omar A.",
    title: "Product Management Intern",
    image: "/Omar.png",
    quote:
      "“Oyster’s mentorship and events helped me build a network I wouldn’t have found anywhere else. This platform is a game-changer for interns!” ",
  },
  {
    name: "Sarah J.",
    title: "Marketing Intern",
    image: "/Sarah.png",
    quote:
      "“As a non-traditional student, I struggled to find internships that fit my schedule. Oyster helped me discover opportunities that worked for me!”",
  },
  {
    name: "Brad N.",
    title: "Finance Intern",
    image: "/Brad.png",
    quote:
      "“Being able to manage my internship applications and track my progress on one platform kept me organized and motivated.” ",
  },
  {
    name: "Zulikat A.",
    title: "Software Engineering Intern",
    image: "/Zulikat.png",
    quote:
      "“Oyster’s community features gave me insights and advice from other students going through the same journey. I felt supported every step of the way.” ",
  },
];
export default function FeaturePeople() {
  return (
    <div className='h-[847px] py-[100px] font-general-sans bg-custom-bg  flex flex-col justify-center items-center text-[#334155] '>
        <h1 className='font-extrabold text-[68px] text-[#2F68C5] flex justify-center mb-7 '>Real Voices, Real Growth</h1>
        <div className='h-[484.76px] w-[1560px] flex justify-between ml-[5em] mr-[5em]'>
        {peoples.map((people, index) => (
          <div key={index} className="shadow-normal w-[279.38px] h-[484.76px] rounded-xl border bg-white flex-col pt-6 px-6 group hover:shadow-hover hover:bg-[#C6ECEC] transition-shadow hover:ease-out duration-300  ">
            <h2 className='text-3xl font-bold'>{people.name}</h2>
            <p className='text-xs font-normal py-2'>{people.title}</p>

            <div className="w-[201.35px] h-[201.35px] rounded-full border-4 border-transparent group-hover:border-blue-500 overflow-hidden">
              <img
                src={people.image}
                alt={people.text}
                className=" w-full h-full object-cover   "
              />
            </div>

            <p className="w-[239.11px] text-sm font-medium text-left mt-7">
              {people.quote}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
