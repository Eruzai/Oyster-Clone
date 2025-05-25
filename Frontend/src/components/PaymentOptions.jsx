import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function PaymentOptions() {
  const items = [
    { text: "Lorem ipsum dolor sit", approved: true },
    { text: "amet consectetur adipisicing elit.", approved: true },
    { text: "Autem odio odit quae blanditiis harum,", approved: false }, // Red X
    {
      text: "mollitia dolores inventore dolore facilis maxime delectus",
      approved: false,
    }, //Red X
    {
      text: "officia, perspiciatis eaque similique soluta ex.",
      approved: false,
    }, // Red X
  ];

  const itemsPremium = [
    { text: "Lorem ipsum dolor sit" },
    { text: "amet consectetur adipisicing elit." },
    { text: "Autem odio odit quae blanditiis harum," },
    { text: "mollitia dolores inventore dolore facilis maxime delectus" },
    { text: "officia, perspiciatis eaque similique soluta ex." },
  ];

  return (
    <div className="w-full py-[10rem] px-4">
      <div className="max-w-[1240px] mx-auto  sm:flex-wrap lg:flex justify-around">
        <div className="shadow-xl sm:w-[100%] lg:w-[40%] border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#e0e2e6]">
          <h2 className="text-3xl font-bold text-center py-8">Free</h2>
          <ul className="text-left text-2xl flex flex-col list-outside ">
            {items.map((item, index) => (
              <li key={index} className="flex items-center py-2">
                {item.approved ? (
                  <AiOutlineCheck className="text-[#3B82F6] mr-2 text-3xl" />
                ) : (
                  <AiOutlineClose className="text-red-500 mr-2 text-3xl" />
                )}
                {item.text}
              </li>
            ))}
          </ul>
        </div>
        <div className="shadow-xl sm:w-[100%] lg:w-[40%] border flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-[#112240] text-white">
          <h2 className="text-3xl font-bold text-center py-8">Premium</h2>
          <ul className="text-left text-2xl flex flex-col list-outside ">
            {items.map((item, index) => (
              <li key={index} className="flex items-center py-2">
                <AiOutlineCheck className="text-[#3B82F6] mr-2 text-3xl" />
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
