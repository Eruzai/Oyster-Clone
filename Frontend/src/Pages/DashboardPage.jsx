import { WeeklyCalendar, FullDateTime } from "../components/WeeklyCalender";
import { useNavigate } from "react-router-dom";

const DashboardPage = ({currentUser}) => {
  const navigate = useNavigate();


  return (
    <div className="flex  w-[100%] py-4 px-4 flex-col font-general-sans bg-[#FEF7F7]">
      <div className="w-[100%]  border-b border-b-[#888888] mb-5 ">
        <h1 className=" flex font-bold text-blue-500 text-[32px] gap-2">
          Welcome 
          <span className="text-[#334155] font-bold">
             {currentUser.name} !!!!
          </span>
        </h1>
        <p className="float-left font-medium text- text-[#888888]">
          What goal do you want to conquer in your internship journey today?
        </p>
        <p className="float-right font-normal text-xl text-[#234E94]">
          <FullDateTime/>
        </p>
      </div>
      {/* bottom boxes */}
      <div className="flex w-[100%]  gap-6">
          {/* left boxes  */} 
        <div className="  flex flex-wrap gap-4 w-[1168.38px] h-[1218.3px] ">
        
         {/* resume box */}
          <div className="flex  border-2 border-[#D8E6FD]  rounded-xl px-5 pt-4 pb-6 gap-6 mr-2">          
            <p className="font-semibold text-[32px] text-[#3B82F6]  leading-9 ">
              Ready to showcase <br /> your skills and start <br /> your career?
            </p>
            <button
              className=" mt-14 rounded-lg  bg-[#3B82F6] px-4 py-2 border-1 border-[#3B82F6] text-sm font-semibold text-white transform transition-transform duration-200 hover:scale-105 hover:shadow-md"
              onClick={() => navigate("/ResumeBuilder")}
            >
              Let’s Build Your Resume
            </button>
          </div>
          {/* profile strength box */}
          <div
            className=" bg-[#629BF8] rounded-xl px-5 pt-5 pb-6 transform transition-transform duration-200 hover:scale-105 hover:shadow-md cursor-pointer"
            onClick={() => navigate("/profile")}
          >
            <img
              src="/dashboardImages/profilestatus.png"
              alt=" progress name"
              className="w-[534.19px] h-[44px] mb-8"
            />
            <img
              src="/dashboardImages/profilestrengthbar.png"
              alt="progress bar"
              className="w-[534.19px] h-[5px]"
            />
          </div>
          {/* application box */}
          <div className=" flex-col w-[1168.38px] h-[244.43px] border-2 border-[#D8E6FD] p-5 bg-white rounded-xl ">
            <p className=" float-left font-semibold text-lg text-[#3B82F6] ">
              Application Response Stats
            </p>
            <button className=" px-3 py-1  border border-[#3B82F6] rounded-xl text-[#3B82F6] text-sm float-right mb-4  transform transition-transform duration-200 hover:scale-105 hover:shadow-md cursor-pointer">
              Download Report
            </button>
            <div className="flex justify-between w-[1128.38px] h-[163.43px] ">
              <img
                src="/dashboardImages/card.png"
                alt="Card"
                className=" rounded-xl "
              />
              <img
                src="/dashboardImages/card (1).png"
                alt="Card 1"
                className=" rounded-xl "
              />
              <img
                src="/dashboardImages/card (2).png"
                alt="Card 2"
                className=" rounded-xl "
              />
              <img
                src="/dashboardImages/card (3).png"
                alt="Card 3"
                className=" rounded-xl "
              />
            </div>
          </div>
           {/* Vacancies */}
          <div className=" flex-col w-[100%]  border-2 border-[#D8E6FD] p-5 bg-white rounded-xl">
            <p className=" float-left font-semibold text-lg text-[#3B82F6] ">
              Featured Vacancies
            </p>
            <button className=" px-3 py-1 border border-[#3B82F6] rounded-xl text-[#3B82F6] text-sm float-right mb-4  transform transition-transform duration-200 hover:scale-105 hover:shadow-md cursor-pointer">
              See More
            </button>
            <div className="flex w-[100%] justify-between ">
              <img
                src="/dashboardImages/Job.png"
                alt="Job"
                className=" rounded-xl transform transition-transform duration-200 hover:scale-105 hover:shadow-md cursor-pointer"
              />
              <img
                src="/dashboardImages/Job (1).png"
                alt="Job 1"
                className=" rounded-xl transform transition-transform duration-200 hover:scale-105 hover:shadow-md cursor-pointer"
              />
              <img
                src="/dashboardImages/Job (2).png"
                alt="Job 2"
                className=" rounded-xl transform transition-transform duration-200 hover:scale-105 hover:shadow-md cursor-pointer"
              />
            </div>
          </div>
           {/* Mentors */}
          <div className="flex-col w-[100%]  border-2 border-[#D8E6FD] p-5 bg-white rounded-xl ">
            <p className=" float-left font-semibold text-lg text-[#3B82F6] ">
              Top Rated Mentors
            </p>
            <button className=" px-3 py-1 border border-[#3B82F6] rounded-xl text-[#3B82F6] text-sm float-right mb-4  transform transition-transform duration-200 hover:scale-105 hover:shadow-md cursor-pointer">
              See More
            </button>
            <div className=" flex w-[100%] justify-between ">
              <div className="border border-[#BBBBBB] rounded-lg p-3 ">
                <img
                  src="/dashboardImages/Manny.png"
                  alt="Manny"
                  className=" rounded-xl "
                />
                <button
                  className=" mt-5 rounded-lg  bg-[#3B82F6] w-full px-5 py-2 border-1 border-[#3B82F6] text-sm font-semibold text-white transform transition-transform duration-200 hover:scale-105 hover:shadow-md"
                  onClick={() => navigate("/ResumeBuilder")}
                >
                  View Mentor
                </button>
              </div>
              <div className="border border-[#BBBBBB] rounded-lg p-3 ">
                <img
                  src="/dashboardImages/Kristina.png"
                  alt="Manny"
                  className=" rounded-xl "
                />
                <button
                  className=" mt-5 rounded-lg  bg-[#3B82F6] w-full px-5 py-2 border-1 border-[#3B82F6] text-sm font-semibold text-white transform transition-transform duration-200 hover:scale-105 hover:shadow-md"
                  onClick={() => navigate("/ResumeBuilder")}
                >
                  View Mentor
                </button>
              </div>
              <div className="border border-[#BBBBBB] rounded-lg p-3">
                <img
                  src="/dashboardImages/Smith.png"
                  alt="Manny"
                  className=" rounded-xl "
                />
                <button
                  className="mt-5 rounded-lg  bg-[#3B82F6] w-full px-5 py-2 border-1 border-[#3B82F6] text-sm font-semibold text-white transform transition-transform duration-200 hover:scale-105 hover:shadow-md"
                  onClick={() => navigate("/ResumeBuilder")}
                >
                  View Mentor
                </button>
              </div>
              <div className="border border-[#BBBBBB] rounded-lg p-3 ">
                <img
                  src="/dashboardImages/George.png"
                  alt="Manny"
                  className=" rounded-xl "
                />
                <button
                  className="mt-5 rounded-lg  bg-[#3B82F6] w-full px-5 py-2 border-1 border-[#3B82F6] text-sm font-semibold text-white transform transition-transform duration-200 hover:scale-105 hover:shadow-md"
                  onClick={() => navigate("/ResumeBuilder")}
                >
                  View Mentor
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="border-2 rounded-xl p-1 border-[#D8E6FD] bg-white text-[0.7em]">
            <WeeklyCalendar />
          </div>
          <div className="flex flex-col gap-2 border-2 rounded-xl p-5 border-[#D8E6FD] bg-white ">
            <img src="/dashboardImages/ScheduleTop.png" alt="ScheduleTop" />
            <img src="/dashboardImages/ScheduleBottom.png" alt="ScheduleBottom" />
          </div>
          <div className="flex flex-col gap-2 border-2 rounded-xl p-5 border-[#D8E6FD] bg-white ">
            <img src="/dashboardImages/CommunityTop.png" alt="ScheduleTop" />
            <img src="/dashboardImages/CommunityBottom.png" alt="ScheduleBottom" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardPage;

// Welcome {currentUser.name}
