import React, { useState } from 'react';
import axios from "axios";
import JobSearchForm from './SearchForm';
import { useAuthStore } from '../store/authStore';
import { FaRegBookmark } from "react-icons/fa6";
import { BsBookmarkCheck } from "react-icons/bs";
import { BsBookmarkX } from "react-icons/bs";
import { IoHourglassOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { MdOutlineBackspace } from "react-icons/md";
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
import { FaCheckCircle } from "react-icons/fa";

const FetchInternships = () => {
  const [location, setLocation] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [isRemote, setIsRemote] = useState(false);
  const [region, setRegion] = useState('');
  const [experienceLevel, setExperienceLevel] = useState('');
  const [language, setLanguage] = useState('');
  const [jobType, setJobType] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [currency, setCurrency] = useState('');
  const [publishedSince, setPublishedSince] = useState('');
  const [publishedUntil, setPublishedUntil] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saveState, setSaveState] = useState({});
  const [error, setError] = useState(null);
  const [confirmApplyModal, setConfirmApplyModal] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [detailsData, setDetailsData] = useState(null);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [showJobTypeFilters, setShowJobTypeFilters] = useState(false);
  const [showSalaryFilters, setShowSalaryFilters] = useState(false);
  const [showLanguageFilters, setShowLanguageFilters] = useState(false);
  const [showExperienceFilters, setShowExperienceFilters] = useState(false);
  const [showRemoteWorkFilters, setShowRemoteWorkFilters] = useState(false);
  const { user } = useAuthStore();

  const toggleJobTypeFilters = () => {
    setShowJobTypeFilters(!showJobTypeFilters);
  };

  const toggleSalaryFilters = () => {
    setShowSalaryFilters(!showSalaryFilters);
  };

  const toggleLanguageFilters = () => {
    setShowLanguageFilters(!showLanguageFilters);
  };

  const toggleExperienceFilters = () => {
    setShowExperienceFilters(!showExperienceFilters);
  };

  const toggleRemoteWorkFilters = () => {
    setShowRemoteWorkFilters(!showRemoteWorkFilters);
  };

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openDetails = (content, index) => {
    setDetailsData({content, index});
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

  const sendQuery = async (searchParams) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3000/api/search', searchParams, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });
    
      const result = response.data;
    
      setData(result);

      const savedStates = {}
      
      result.results.forEach((_, index) => {
        savedStates[index] = <FaRegBookmark />;
      });

      setSaveState(savedStates);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = {
      location: location,
      title: jobTitle,
      region_id: region,
      has_remote: isRemote,
      experience_level: experienceLevel,
      language: language,
      min_salary: minSalary,
      salary_currency: currency,
      published_since: publishedSince,
      published_until: publishedUntil
    };
    sendQuery(searchParams);
  };

  const sendJobToBackend = async (job, index) => {
    try {
      setSaveState((saveState) => ({...saveState, [index]: <IoHourglassOutline />}));
      const response = await axios.post('http://localhost:3000/api/save', {job, user}, {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        }
      });

      setSaveState((saveState) => ({...saveState, [index]: <BsBookmarkCheck />}));
    } catch (err) {
      if (err.response) {
        console.error("Error saving job:", err.response.data.message);
      } else {
        console.error("No response:", err.message);
      }
      setSaveState((saveState) => ({...saveState, [index]: <BsBookmarkX />}));
    };
  };

  return (
    <div className="flex flex-col items-center w-full h-[800px]">
      {isSideBarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
          onClick={() => closeSideBar()}
        ></div>
      )}

      {confirmApplyModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50"
        ></div>
      )}

      {!isDetailsOpen && (
      <JobSearchForm
        handleSubmit={handleSubmit}
        isSideBarOpen={isSideBarOpen}
        showJobTypeFilters={showJobTypeFilters}
        toggleJobTypeFilters={toggleJobTypeFilters}
        showSalaryFilters={showSalaryFilters}
        toggleSalaryFilters={toggleSalaryFilters}
        showLanguageFilters={showLanguageFilters}
        toggleLanguageFilters={toggleLanguageFilters}
        showExperienceFilters={showExperienceFilters}
        toggleExperienceFilters={toggleExperienceFilters}
        showRemoteWorkFilters={showRemoteWorkFilters}
        toggleRemoteWorkFilters={toggleRemoteWorkFilters}
        openSideBar={openSideBar}
        closeSideBar={closeSideBar}
        loading={loading}
        jobType={jobType}
        location={location}
        jobTitle={jobTitle}
        isRemote={isRemote}
        region={region}
        experienceLevel={experienceLevel}
        language={language}
        minSalary={minSalary}
        currency={currency}
        publishedSince={publishedSince}
        publishedUntil={publishedUntil}
        setJobType={setJobType}
        setLocation={setLocation}
        setJobTitle={setJobTitle}
        setIsRemote={setIsRemote}
        setRegion={setRegion}
        setExperienceLevel={setExperienceLevel}
        setLanguage={setLanguage}
        setMinSalary={setMinSalary}
        setCurrency={setCurrency}
        setPublishedSince={setPublishedSince}
        setPublishedUntil={setPublishedUntil}
      />
      )}

      {error && <p>Error: {error}</p>}
      {!isDetailsOpen && data && data.results.length > 0 ? (
        <div className="flex flex-col items-center overflow-auto mt-[1em]">
          <div className="search-results">{data.results.map((result, index) => (
            <div key={index} onClick={() => openDetails(result, index)} className="flex flex-col justify-center bg-[#ffffff] color-[#18191C] border-[2px] rounded-[8px] shadow-lg w-[31%] ml-5 mt-5 p-5 hover:scale-105 transition-transform duration-300">
              <h2>{result.title}</h2>
              <div className="flex items-center">
                {result.types.map((type) => (
                  <p className="pl-[4px] pr-[4px] rounded-[4px] bg-[#E7F6EA] text-[#0BA02C] m-[3px]">{type.name}</p>
                ))}
                <p className="pl-[8px] text-[#767F8C]">{result.salary_min ? (<p>Salary: {result.salary_min}{result.salary_max ? (` - ${result.salary_max}`) : <></>} {result.salary_currency}</p>) : (<p>No Salary Information</p>)}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className='flex items-center'>
                  <img src={result.company.logo} alt="logo" className="m-2 w-[60px] h-[60px] rounded-[8px]"/>
                  <div className="flex flex-col">
                    <a href={result.company.website_url} target="_blank" rel="noopener noreferrer" className="text-[14px] hover:text-[#3B82F6]">{result.company.name}</a>
                    <p className="flex text-[#767F8C]"><IoLocationOutline className='text-[#767F8C] w-[20px] h-[20px]' />{result.location}</p>
                  </div>
                </div>
                <button onClick={(event) => {event.stopPropagation(); sendJobToBackend(result, index)}} className="border-[2px] rounded-full text-[#3B82F6] text-[1.5em] p-[0.5em] hover:text-[#ffffff] hover:bg-[#3B82F6]">{saveState[index]}</button>
              </div>
            </div>
          ))}</div>
        </div>
      ) : (
        <></>
      )}

      {confirmApplyModal && (
        <div className="flex flex-col items-center fixed top-80 bg-[#ffffff] rounded-[8px] p-[2em]">
          <FaCheckCircle className="text-[#54CD75] text-[4em]"/>
          <p className="mt-[1em]">Application Confirmation</p>
          <p className="text-[#888888]">Please confirm that you applied for this</p>
          <div>
            <button onClick={() => closeConfirmApplyModal()} className="p-[0.5em] pl-[3em] pr-[3em] m-[1em] rounded-[4px] text-[#3B82F6] bg-[#ffffff] border-[2px] border-[#3B82F6]">No</button>
            <button onClick={() => closeConfirmApplyModal()} className="p-[0.5em] pl-[3em] pr-[3em] m-[1em] rounded-[4px] text-[#ffffff] bg-[#3B82F6] border-[2px] border-[#3B82F6]">Yes</button>
          </div>
        </div>
      )}

      {isDetailsOpen && (
        <div className="bg-[#ffffff] text-[#334155] w-[95%] mt-[2em]">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-between w-[95%]">
              <div className='flex items-center'>
                <button onClick={closeDetails} className=""><MdOutlineBackspace className="text-[#888888] text-[40px] hover:text-red-500"/></button>
                <img src={detailsData.content.company.logo} alt="logo" className="m-2 w-[120px] h-[120px] rounded-[8px]"/>
                <div className="flex flex-col">
                  <h2>{detailsData.content.title}</h2>
                  <div className="flex items-center">
                    <a href={detailsData.content.company.website_url} target="_blank" rel="noopener noreferrer" className="text-[#888888] text-[14px] hover:text-[#3B82F6]">at {detailsData.content.company.name}</a>
                    {detailsData.content.types.map((type) => (
                      <p className="ml-[8px] pl-[8px] pr-[8px] rounded-[4px] bg-[#10B981] text-[#ffffff]">{type.name}</p>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button onClick={() => sendJobToBackend(detailsData.content, detailsData.index)} className="bg-[#D8E6FD] rounded-[4px] text-[#3B82F6] text-[1.5em] p-[0.65em]">{saveState[detailsData.index]}</button>
                <div onClick={() => openConfirmApplyModal()}>
                  <a href={detailsData.content.application_url} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#3B82F6] rounded-[4px] text-[#ffffff] ml-[1em] p-[1em] pl-[3em] pr-[3em]">Apply Now<FaArrowRight className="ml-[1em]"/></a>
                </div>
              </div>
            </div>
            <div className="flex w-[95%]">
              <div className="w-[65%]">
                <p className="mb-[1em]">Job Description</p>
                {/* use Dompurify for inner html */}
                <div dangerouslySetInnerHTML={{__html: detailsData.content.description}} className="w-[95%] mb-10"/>
              </div>
              <div className="flex flex-col items-center w-[35%]">
                <div className="flex items-center justify-center border-[2px] rounded-[8px] w-full">
                  <div className="flex items-center w-[90%] mt-[1em] mb-[1em]">
                    <div className="flex flex-col items-center w-[50%]">
                      {detailsData.content.salary_currency ? (<p>Salary ({detailsData.content.salary_currency})</p>) : <></>}
                      {detailsData.content.salary_min ? (<p className="text-[#3B82F6]">{detailsData.content.salary_min}{detailsData.content.salary_max ? (` - ${detailsData.content.salary_max}`) : <></>}</p>) : (<p>No Salary Information</p>)}
                      {detailsData.content.salary_min ? (<p className="text-[#888888]">Yearly Salary</p>) : <></>}
                    </div>
                    <div className="border h-[70px]"></div>
                    <div className="flex flex-col items-center w-[50%] pl-[1em] pr-[1em]">
                      <p><CiMap className="text-[#3B82F6] text-[2em]"/></p>
                      <p>Job Location</p>
                      <p className="text-[#888888]">{detailsData.content.location}</p>
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
                        <p>{detailsData.content.published}</p>
                      </div>
                      <div className="w-[33%]">
                        <CiStopwatch className="text-[#3B82F6] text-[2em]"/>
                        <p className="text-[#888888]">JOB EXPIRE IN:</p>
                        <p>1 month</p>
                      </div>
                      <div className="w-[33%]">
                        <GoStack className="text-[#3B82F6] text-[2em]"/>
                        <p className="text-[#888888]">JOB LEVEL:</p>
                        <p>{detailsData.content.experience_level}</p>
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
    </div>
  );
};

export default FetchInternships;