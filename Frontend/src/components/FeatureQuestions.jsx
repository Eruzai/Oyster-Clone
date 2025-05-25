import React, { useState } from "react";
import { HiMiniArrowRightCircle, HiMiniArrowDownCircle } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function FeatureQuestions() {
  const [openIndex, setOpenIndex] = useState(null);

  const questions = [
    {
      id: 1,
      question: "What is Oyster?",
      answer:
        "Oyster is a career-launching platform redefining internship searches through a centralized job feed and personalized guidance. We bridge the gap between education and the job market, empowering students of all backgrounds to confidently enter the workforce. Here, the world is truly your oyster",
    },
    {
      id: 2,
      question: "What if I don't hear back from employers?",
      answer:
        "If you don't receive a response within a few weeks, consider following up or applying to additional opportunities. ",
    },
    {
      id: 3,
      question: "How do I track my application status?",
      answer:
        "After applying, you can usually track your application status through your account dashboard or follow up directly with the employer.",
    },
    {
      id: 4,
      question: "What should I include in my internship application?",
      answer:
        "Include a well-crafted resume, cover letter, and any relevant portfolio work if applicable.",
    },
    {
      id: 5,
      question: "What events are available for internship seekers?",
      answer:
        "We offer webinars, career fairs, and networking sessions with industry professionals.",
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const navigate = useNavigate();

  return (
    <div className="px-44 py-24 font-general-sans items-center">
      <div className=" px-28 py-28  text-white bg-[#2F68C5] rounded-2xl flex justify-around items-center">
        <div className="flex flex-col gap-y-3 w-[45%]">
          <h1 className="font-semibold text-6xl">
            Frequently Asked <br /> Questions
          </h1>
          <p className="mb-10 mt-4 text-lg font-medium">
            Discover answers to frequently asked question to help you navigate the internship process with ease.
          </p>
          <button
            className="flex items-center px-2 text-white font-semibold text-lg  border-2 border-transparent hover:border-white rounded-lg gap-x-2"
            onClick={() => navigate("/login")}
          >
            Contact Us <HiMiniArrowRightCircle className="w-6 h-6" />
          </button>
        </div>
        <div className="w-[47%] rounded-2xl bg-white text-LandingPagetextColor">
          <div className="max-w-xl mx-auto my-auto gap-x-3 ">
            {questions.map((item, index) => (
              <div key={item.id} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAnswer(index)}
                  className="flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none"
                >
                  <span>{item.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiMiniArrowDownCircle className="w-7 h-7" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="p-4  overflow-hidden"
                    >
                      {item.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
