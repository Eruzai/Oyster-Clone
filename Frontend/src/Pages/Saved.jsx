import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuthStore } from "../store/authStore";
import { IoLocationOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineBackspace } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { CiMap } from "react-icons/ci";
import { CiCalendar } from "react-icons/ci";
import { CiStopwatch } from "react-icons/ci";
import { GoStack } from "react-icons/go";
import { PiWalletLight } from "react-icons/pi";
import { PiBriefcaseLight } from "react-icons/pi";
import { RiLink } from "react-icons/ri";
import { IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";

const Saved = () => {
  const { user } = useAuthStore()
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailsData, setDetailsData] = useState(null);
  const [confirmApplyModal, setConfirmApplyModal] = useState(false);
  const [jobTitle, setJobTitle] = useState('');

  const openDetails = (content) => {
    setDetailsData(content);
    setIsDetailsOpen(true);
  };

  const closeDetails = () => {
    setIsDetailsOpen(false);
    setDetailsData(null);
  };

  const openConfirmApplyModal = () => {
    setConfirmApplyModal(true);
  };

  const closeConfirmApplyModal = () => {
    setConfirmApplyModal(false);
  };

  const handleSubmit = () => {

  };

  const sendRequest = async (user) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/savedjobs",
        { user: user },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      
      const result = response.data;

      setData(result);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
    sendRequest(user);
  }, [user]);
    
  const columnContents = (column, data) => {
    return (
      <div>{data.map((result, index) => (
        column == result.saveCategory && (
        <div key={index} onClick={() => openDetails(result)} className="flex flex-col justify-center bg-[#ffffff] color-[#18191C] border-[2px] rounded-[4px] w-full mb-[0.5em] p-[0.5em] hover:border-[#2F68C5]">
          <p className="text-[0.25em]">{result.jobTitle}</p>
          <div className="flex items-center">
            <div>
              {result.jobType.map((type) => (
                <p className="mr-[4px] mt-[4px] pl-[8px] pr-[8px] rounded-[4px] bg-[#E7F6EA] text-[#0BA02C] text-[0.25em]">{type.name}</p>
              ))}
            </div>
            <p className="pl-[8px] text-[#767F8C] text-[0.25em]">{result.salary_min ? (<p>Salary: {result.salary_min}{result.salary_max ? (` - ${result.salary_max}`) : <></>} {result.salary_currency}</p>) : (<p>No Salary Information</p>)}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className='flex items-center'>
              <img src={result.companyLogo} alt="logo" className="m-2 w-[40px] h-[40px] rounded-[8px]"/>
              <div className="flex flex-col">
                <a href={result.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-[0.25em] hover:text-[#3B82F6]">{result.companyName}</a>
                <p className="flex items-center text-[#767F8C] text-[0.5em]"><IoLocationOutline className='text-[#767F8C]' />{result.jobLocation}</p>
              </div>
            </div>
          </div>
        </div>
        )
      ))}</div>
    );
  };

  return (
    <>
    {confirmApplyModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
        ></div>
    )}

    {confirmApplyModal && (
      <div className="fixed top-[calc(25%)] left-[calc(50%-145px)] flex flex-col items-center bg-[#ffffff] rounded-[8px] p-[2em]">
        <FaCheckCircle className="text-[#54CD75] text-[4em]"/>
        <p className="mt-[1em]">Application Confirmation</p>
        <p className="text-[#888888]">Please confirm that you applied for this</p>
        <div>
          <button onClick={() => closeConfirmApplyModal()} className="p-[0.5em] pl-[3em] pr-[3em] m-[1em] rounded-[4px] text-[#3B82F6] bg-[#ffffff] border-[2px] border-[#3B82F6]">No</button>
          <button onClick={() => closeConfirmApplyModal()} className="p-[0.5em] pl-[3em] pr-[3em] m-[1em] rounded-[4px] text-[#ffffff] bg-[#3B82F6] border-[2px] border-[#3B82F6]">Yes</button>
        </div>
      </div>
    )}

    {!isDetailsOpen && (
      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="flex items-center justify-between bg-[#ffffff] rounded-[8px] border-[2px] w-[95%] mb-[1em] mt-[1em]">
          <div className="flex items-center w-full">
            <div className="flex items-center w-full">
              <label htmlFor="jobTitle"><IoSearchOutline className='text-[#3B82F6] text-[25px] ml-[1em]'/></label>
              <input
                className="w-full mr-[1em] ml-[1em]"
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
                placeholder="Search by: Job title"
                />
            </div>
          </div>
          <div className="flex">
            <div className="border"></div>
            <button className="w-[7em] m-[1em] rounded-[8px] p-[8px] bg-[#3B82F6] text-[#ffffff] m-1.5 hover:scale-110 transition-transform duration-300" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Find Job'}</button>
          </div>
        </form>
      </div>
    )}

    {!isDetailsOpen && data && data.length > 0 && (
    <div className="flex items-center justify-center">
      {error && <p>Error: {error}</p>}
      <div className="flex items-center justify-center bg-[#ffffff] w-[95%] h-[700px] p-[2em] border-[2px] rounded-[16px]">
        <div className="flex bg-[#F9FAFB] w-full h-full border-[2px] rounded-[8px]">
          <div className="flex flex-col items-center p-[0.5em] w-[17%]">
            <p className="flex mb-[0.5em] items-center"><MdOutlineRemoveRedEye className="text-[1.5em] text-[#3B82F6] mr-[0.5em]"/>Viewed</p>
            <button className="w-full bg-[#ffffff] border rounded-[4px] mb-[0.5em]">+</button>
            <div className="overflow-auto">
              {columnContents("Viewed", data)}
            </div>
          </div>
          <div className="border"></div>
          <div className="flex flex-col items-center p-[0.5em] w-[17%]">
            <p className="flex mb-[0.5em] items-center"><FaRegBookmark className="text-[1.5em] text-[#3B82F6] mr-[0.5em]"/>Saved</p>
            <button className="w-full bg-[#ffffff] border rounded-[4px] mb-[0.5em]">+</button>
            <div className="overflow-auto">
              {columnContents("Saved", data)}
            </div>
          </div>
          <div className="border"></div>
          <div className="flex flex-col items-center p-[0.5em] w-[17%]">
            <p className="flex mb-[0.5em] items-center"><PiBriefcaseLight className="text-[1.5em] text-[#3B82F6] mr-[0.5em]"/>Applied</p>
            <button className="w-full bg-[#ffffff] border rounded-[4px] mb-[0.5em]">+</button>
            <div className="overflow-auto">
              {columnContents("Applied", data)}
            </div>
          </div>
          <div className="border"></div>
          <div className="flex flex-col items-center p-[0.5em] w-[17%]">
            <p className="flex mb-[0.5em] items-center"><FaRegFileAlt className="text-[1.5em] text-[#888888] mr-[0.5em]"/>Interviews</p>
            <button className="w-full bg-[#ffffff] border rounded-[4px] mb-[0.5em]">+</button>
            <div className="overflow-auto">
              {columnContents("Interviews", data)}
            </div>
          </div>
          <div className="border"></div>
          <div className="flex flex-col items-center p-[0.5em] w-[17%]">
            <p className="flex mb-[0.5em] items-center"><IoMdCheckmark className="text-[1.5em] text-[#10B981] mr-[0.5em]"/>Offered</p>
            <button className="w-full bg-[#ffffff] border rounded-[4px] mb-[0.5em]">+</button>
            <div className="overflow-auto">
              {columnContents("Offered", data)}
            </div>
          </div>
          <div className="border"></div>
          <div className="flex flex-col items-center p-[0.5em] w-[17%]">
            <p className="flex mb-[0.5em] items-center"><FaXmark className="text-[1.5em] text-[#F00D0D] mr-[0.5em]"/>Rejected</p>
            <button className="w-full bg-[#ffffff] border rounded-[4px] mb-[0.5em]">+</button>
            <div className="overflow-auto">
              {columnContents("Rejected", data)}
            </div>
          </div>
        </div>
      </div>
    </div>
    )}

    {isDetailsOpen && data.length > 0 && (
      <div className="bg-[#ffffff] text-[#334155]">
        <div className="flex flex-col items-center">
          <div className="flex items-center justify-between w-[95%]">
            <div className='flex items-center'>
              <button onClick={closeDetails} className=""><MdOutlineBackspace className="text-[#888888] text-[40px] hover:text-red-500"/></button>
              <img src={detailsData.companyLogo} alt="logo" className="m-2 w-[120px] h-[120px] rounded-[8px]"/>
              <div className="flex flex-col">
                <h2>{detailsData.jobTitle}</h2>
                <div className="flex items-center">
                  <a href={detailsData.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-[#888888] text-[14px] hover:text-[#3B82F6]">at {detailsData.companyName}</a>
                  {detailsData.jobType.map((type) => (
                    <p className="ml-[8px] pl-[8px] pr-[8px] rounded-[4px] bg-[#10B981] text-[#ffffff]">{type.name}</p>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div onClick={() => openConfirmApplyModal()}>
                <a href={detailsData.applicationURL} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#3B82F6] rounded-[4px] text-[#ffffff] ml-[1em] p-[1em] pl-[3em] pr-[3em]">Apply Now<FaArrowRight className="ml-[1em]"/></a>
              </div>
            </div>
          </div>
          <div className="flex w-[95%]">
            <div className="w-[65%]">
              <p className="mb-[1em]">Job Description</p>
              {/* use Dompurify for inner html */}
              <div dangerouslySetInnerHTML={{__html: detailsData.description}} className="w-[95%] mb-10"/>
            </div>
            <div className="flex flex-col items-center w-[35%]">
              <div className="flex items-center justify-center border-[2px] rounded-[8px] w-full">
                <div className="flex items-center w-[90%] mt-[1em] mb-[1em]">
                  <div className="flex flex-col items-center w-[50%]">
                    {detailsData.salary_currency ? (<p>Salary ({detailsData.salary_currency})</p>) : <></>}
                    {detailsData.salary_min ? (<p className="text-[#3B82F6]">{detailsData.salary_min}{detailsData.salary_max ? (` - ${detailsData.salary_max}`) : <></>}</p>) : (<p>No Salary Information</p>)}
                    {detailsData.salary_min ? (<p className="text-[#888888]">Yearly Salary</p>) : <></>}
                  </div>
                  <div className="border h-[70px]"></div>
                  <div className="flex flex-col items-center w-[50%] pl-[1em] pr-[1em]">
                    <p><CiMap className="text-[#3B82F6] text-[2em]"/></p>
                    <p>Job Location</p>
                    <p className="text-[#888888]">{detailsData.jobLocation}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center border-[2px] rounded-[8px] w-full mt-[25px]">
                <div className="w-[90%]">
                  <div>
                    <p className="mt-[1em] mb-[1em]">Job Overview</p>
                  </div>
                  <div className="flex w-full mt-[1em] mb-[1em]">
                    <div className="w-[33%]">
                      <CiCalendar className="text-[#3B82F6] text-[2em]"/>
                      <p className="text-[#888888]">JOB POSTED:</p>
                      <p>{detailsData.published}</p>
                    </div>
                    <div className="w-[33%]">
                      <CiStopwatch className="text-[#3B82F6] text-[2em]"/>
                      <p className="text-[#888888]">JOB EXPIRE IN:</p>
                      <p>1 month</p>
                    </div>
                    <div className="w-[33%]">
                      <GoStack className="text-[#3B82F6] text-[2em]"/>
                      <p className="text-[#888888]">JOB LEVEL:</p>
                      <p>{detailsData.experienceLevel}</p>
                    </div>
                  </div>
                  <div className="flex w-full mt-[1em] mb-[1em]">
                    <div className="w-[33%]">
                      <PiWalletLight className="text-[#3B82F6] text-[2em]"/>
                      <p className="text-[#888888]">EXPERIENCE:</p>
                      <p>$2k/month</p>
                    </div>
                    <div className="w-[33%]">
                      <PiBriefcaseLight className="text-[#3B82F6] text-[2em]"/>
                      <p className="text-[#888888]">EDUCATION:</p>
                      <p>Graduation</p>
                    </div>
                  </div>
                  <div className="border"></div>
                  <div className="mt-[1em] mb-[1em]">
                    <p>Share this job:</p>
                    <div className="flex items-center">
                      <p className="hover:text-[#ffffff] hover:bg-[#3B82F6] flex bg-[#D8E6FD] rounded-[4px] text-[#3B82F6] m-[3px] p-[0.5em]"><RiLink className="text-[1.5em] mr-[0.25em]"/>Copy Links</p>
                      <p className="hover:text-[#ffffff] hover:bg-[#3B82F6] bg-[#D8E6FD] rounded-[4px] text-[#3B82F6] m-[3px] p-[0.5em]"><IoLogoLinkedin className="text-[1.5em]"/></p>
                      <p className="hover:text-[#ffffff] hover:bg-[#3B82F6] bg-[#D8E6FD] rounded-[4px] text-[#3B82F6] m-[3px] p-[0.5em]"><FaFacebook className="text-[1.5em]"/></p>
                      <p className="hover:text-[#ffffff] hover:bg-[#3B82F6] bg-[#D8E6FD] rounded-[4px] text-[#3B82F6] m-[3px] p-[0.5em]"><FaTwitter className="text-[1.5em]"/></p>
                      <p className="hover:text-[#ffffff] hover:bg-[#3B82F6] bg-[#D8E6FD] rounded-[4px] text-[#3B82F6] m-[3px] p-[0.5em]"><MdOutlineEmail className="text-[1.5em]"/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

export default Saved;
