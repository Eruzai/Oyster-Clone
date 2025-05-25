import React from "react";

const jobs = [
  {
    image:
      "/vecteezy_computer-vector-background-with-circuit_ [Converted].png",
    text: "Engineering",
  },
  { image: "/moneysymbol.png", text: "Finance" },
  { image: "/health.png", text: "Doctor" },
  { image: "/computer.png", text: "Content Writer" },
  { image: "/computer.png", text: "Human Resources" },
  { image: "/computer.png", text: "Market Research" },
  { image: "/computer.png", text: "Software" },
  { image: "/computer.png", text: "Design" },
];

export default function FeatureJobs() {
  // fake job postings
  const imageCount = 8;

  return (
    <div className="flex-col py-16 px-44  bg-custom-bg bg-cover bg-center font-general-sans">
      <h2 className="text-center text-blue-500 font-extrabold text-6xl ">
        Jobs Of The Day
      </h2>
      <p className="text-center text-3xl pt-2">
        Search and connect with the right company quicker
      </p>

      {/* Job List */}
      <div className=" flex justify-between pt-6 ">
        {jobs.map((job, index) => (
          <div key={index} className="border border-[#DDDDDD]  bg-white flex items-center rounded-lg px-3  ">
            <img src={job.image} alt={job.text} className="pr-2  " />
            <p className="text-base text-blue-600 font-general-sans font-semibold pt-1">{job.text}</p>
          </div>
        ))}
      </div>

      {/* Repeating Images */}
      <div className="  h-[720px] grid grid-cols-4 gap-11  mt-10 ">
        {[...Array(imageCount)].map((_, index) => (
          <div key={index} className="flex-col drop-shadow-lg  bg-white border border-[#BBBBBB] rounded-lg p-4 hover:border-blue-500  ">
            <img src='/Frame 1000006227.png' alt={`Image ${index + 1}`} className="w-full h-auto  " />
            <img src="/Frame 1000006228.png" alt="" className="pt-7" />
          </div>
        ))}
      </div>
    </div>
  );
}
