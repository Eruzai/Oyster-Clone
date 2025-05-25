import { IoLocationOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { PiSliders } from "react-icons/pi";
import { BiTargetLock } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

const JobSearchForm = ({handleSubmit, showJobTypeFilters, toggleJobTypeFilters, showSalaryFilters, toggleSalaryFilters, showLanguageFilters, toggleLanguageFilters, showExperienceFilters, toggleExperienceFilters, showRemoteWorkFilters, toggleRemoteWorkFilters, isSideBarOpen, openSideBar, closeSideBar, loading, jobType, location, jobTitle, isRemote, region, experienceLevel, language, minSalary, currency, publishedSince, publishedUntil, setJobType, setLocation, setJobTitle, setIsRemote, setRegion, setExperienceLevel, setLanguage, setMinSalary, setCurrency, setPublishedSince, setPublishedUntil }) => {
  return (
    <>
    <form onSubmit={handleSubmit} className="bg-[#ffffff] rounded-[8px] border-[2px] w-[95%] mt-[2em]">
      <div className="flex items-center">
        <div className="flex items-center w-[50%]">
          <label htmlFor="jobTitle"><IoSearchOutline className='text-[#3B82F6] text-[25px] m-[10px]'/></label>
          <input
            className="w-full"
            type="text"
            id="jobTitle"
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Search by: Job title, Position, Keyword..."
          />
        </div>

        <div className="flex items-center w-[50%] justify-between">
          <div className="flex items-center w-[65%]">
            <label htmlFor="location"><IoLocationOutline className='text-[#3B82F6] text-[25px] m-[10px]'/></label>
            <input
              className="w-full"
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter location name"
            />
          </div>

          <div className="flex items-center">
            <BiTargetLock className='text-[#767F8C] text-[25px] m-[10px]'/>
            <button onClick={() => openSideBar()} className="rounded-[8px] p-[8px] flex items-center bg-[#F1F2F4] text-[#334155] m-1.5 hover:scale-110 transition-transform duration-300" type="button"><PiSliders className="m-[5px]"/>Filter</button>
            <button className="rounded-[8px] p-[8px] bg-[#3B82F6] text-[#ffffff] m-1.5 w-[7em] hover:scale-110 transition-transform duration-300" type="submit" disabled={loading}>{loading ? 'Loading...' : 'Find Jobs'}</button>
          </div>
        </div>

        <input
          type="hidden"
          id="region"
          name="region"
          value={region}
        />
        {/* <select
          className="form-box"
          id="region"
          name="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}>
          <option value="">Any Region</option>
          <option value="5">North America</option>
          <option value="6">South America</option>
          <option value="3">Europe</option>
          <option value="1">Africa</option>
          <option value="2">Asia/Pacific</option>
          <option value="4">Middle East</option>
        </select> */}
    
        <input
          type="hidden"
          id="language"
          name="language"
          value={language}
        />
  
        <input
          type="hidden"
          id="experienceLevel"
          name="experienceLevel"
          value={experienceLevel}
        />
    
        <input
          type="hidden"
          id="minSalary"
          name="minSalary"
          value={minSalary}
          onChange={(e) => setMinSalary(e.target.value)}
          placeholder="Enter minimum salary"
        />

        <input
          type="hidden"
          id="currency"
          name="currency"
          value={currency}
        />
        {/* <select
          className="form-box"
          id="currency"
          name="currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}>
          <option value="">Any Currency</option>
          <option value="AUD">AUD (Australian Dollar)</option>
          <option value="THB">THB (Baht)</option>
          <option value="BRL">BRL (Brazilian Real)</option>
          <option value="BGN">BGN (Bulgarian Lev)</option>
          <option value="CAD">CAD (Canadian Dollar)</option>
          <option value="CLP">CLP (Chilean peso)</option>
          <option value="COP">COP (Colombian Peso)</option>
          <option value="CZK">CZK (Czech Koruna)</option>
          <option value="DKK">DKK (Danish Krone)</option>
          <option value="EUR">EUR (Euro)</option>
          <option value="HUF">HUF (Forint)</option>
          <option value="HKD">HKD (Hong Kong Dollar)</option>
          <option value="INR">INR (Indian Rupee)</option>
          <option value="MXN">MXN (Mexican peso)</option>
          <option value="ILS">ILS (New Israeli Sheqel)</option>
          <option value="TWD">TWD (New Taiwan Dollar)</option>
          <option value="NZD">NZD (New Zealand Dollar)</option>
          <option value="NOK">NOK (Norwegian Krone)</option>
          <option value="PHP">PHP (Philippine Peso)</option>
          <option value="GBP">GBP (Pound Sterling)</option>
          <option value="ZAR">ZAR (Rand)</option>
          <option value="RON">RON (Romanian Leu)</option>
          <option value="IDR">IDR (Rupiah)</option>
          <option value="SGD">SGD (Singapore Dollar)</option>
          <option value="KRW">KRW (South Korean Won)</option>
          <option value="LKR">LKR (Sri Lankan Rupee)</option>
          <option value="SEK">SEK (Swedish Krona)</option>
          <option value="CHF">CHF (Swiss Franc)</option>
          <option value="TRY">TRY (Turkish Lira)</option>
          <option value="USD">USD (US Dollar)</option>
          <option value="JPY">JPY (Yen)</option>
          <option value="PLN">PLN (Zloty)</option>
        </select> */}
  
        <input
          type="hidden"
          id="remote"
          name="remote"
          value={isRemote}
        />
    
        <input
          type="hidden"
          id="displaySinceDate"
          name="displaySinceDate"
          value={publishedSince}
        />
    
        <input
          type="hidden"
          id="displayUntilDate"
          name="displayUntilDate"
          value={publishedUntil}
        />
      </div>
      <div className="border"></div>
      <div className="flex items-center justify-end">
        {language && (<button onClick={() => toggleSalaryFilters()} className="flex items-center border-[2px] border-[#BBBBBB] rounded-full justify-center text-[#334155] p-[0.5em] m-[0.5em]" type="button">Language{showSalaryFilters ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}</button>)}
        {minSalary && (<button onClick={() => toggleSalaryFilters()} className="flex items-center border-[2px] border-[#BBBBBB] rounded-full justify-center text-[#334155] p-[0.5em] m-[0.5em]" type="button">Minimum Salary{showSalaryFilters ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}</button>)}
        {experienceLevel && (<button onClick={() => toggleSalaryFilters()} className="flex items-center border-[2px] border-[#BBBBBB] rounded-full justify-center text-[#334155] p-[0.5em] m-[0.5em]" type="button">Experience Level{showSalaryFilters ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}</button>)}
        {isRemote && (<button onClick={() => toggleSalaryFilters()} className="flex items-center border-[2px] border-[#BBBBBB] rounded-full justify-center text-[#334155] p-[0.5em] m-[0.5em]" type="button">Remote Work{showSalaryFilters ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}</button>)}
        <div className="border border-[#334155] h-[30px]"></div>
        <button onClick={() => {setCurrency(''); setExperienceLevel(''); setIsRemote(false); setLanguage(''); setMinSalary(''); closeSideBar()}} className=" p-[1.2em] pr-[2em] pl-[2em]" type="button">Reset</button>
      </div>
    </form>

    {isSideBarOpen && (
      <div className="flex overflow-auto justify-center fixed right-0 top-0 h-full w-[25%] bg-[#ffffff]">
        <div className="mt-[2em] w-[90%]">
          <button onClick={() => closeSideBar()} className="flex items-center text-[#334155] mb-[1em]" type="button"><IoIosArrowBack />Filter</button>
          <button onClick={() => toggleJobTypeFilters()} className="flex items-center justify-between w-full text-[#334155]" type="button">Job Type<IoIosArrowForward /></button>
          {showJobTypeFilters && (
            <div>
              <p className="flex items-center w-full text-[#BBBBBB]"><FaRegCircle className="mr-[1em]"/>Any job type</p>
              <p className="flex items-center w-full text-[#BBBBBB]"><FaRegCircle className="mr-[1em]"/>Full time</p>
              <p className="flex items-center w-full text-[#BBBBBB]"><FaRegCircle className="mr-[1em]"/>Part time</p>
              <p className="flex items-center w-full text-[#BBBBBB]"><FaRegCircle className="mr-[1em]"/>Temporary</p>
              <p className="flex items-center w-full text-[#334155]"><FaRegDotCircle className="mr-[1em]"/>Internship</p>
              <p className="flex items-center w-full text-[#BBBBBB]"><FaRegCircle className="mr-[1em]"/>Freelance</p>
              <p className="flex items-center w-full text-[#BBBBBB]"><FaRegCircle className="mr-[1em]"/>Contract</p>
              {/* <button onClick={() => setJobType('')} className="flex items-center w-full text-[#334155]" type="button">{jobType == '' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Any job type</button>
              <button onClick={() => setJobType('1')} className="flex items-center w-full text-[#334155]" type="button">{jobType == '1' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Full time</button>
              <button onClick={() => setJobType('2')} className="flex items-center w-full text-[#334155]" type="button">{jobType == '2' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Part time</button>
              <button onClick={() => setJobType('3')} className="flex items-center w-full text-[#334155]" type="button">{jobType == '3' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Temporary</button>
              <button onClick={() => setJobType('4')} className="flex items-center w-full text-[#334155]" type="button">{jobType == '4' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Internship</button>
              <button onClick={() => setJobType('5')} className="flex items-center w-full text-[#334155]" type="button">{jobType == '5' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Freelance</button>
              <button onClick={() => setJobType('6')} className="flex items-center w-full text-[#334155]" type="button">{jobType == '6' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Contract</button> */}
            </div>
          )}
          <div className="border mt-[1em] mb-[1em]"></div>
          <button onClick={() => toggleLanguageFilters()} className="flex items-center justify-between w-full text-[#334155]" type="button">Language{showLanguageFilters ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}</button>
          {showLanguageFilters && (
            <div>
              <button onClick={() => setLanguage('')} className="flex items-center w-full text-[#334155]" type="button">{language == '' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Any language</button>
              <button onClick={() => setLanguage('en')} className="flex items-center w-full text-[#334155]" type="button">{language == 'en' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}English</button>
              <button onClick={() => setLanguage('de')} className="flex items-center w-full text-[#334155]" type="button">{language == 'de' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}German</button>
              <button onClick={() => setLanguage('fr')} className="flex items-center w-full text-[#334155]" type="button">{language == 'fr' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}French</button>
              <button onClick={() => setLanguage('es')} className="flex items-center w-full text-[#334155]" type="button">{language == 'es' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Spanish</button>
              <button onClick={() => setLanguage('pt')} className="flex items-center w-full text-[#334155]" type="button">{language == 'pt' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Portuguese</button>
              <button onClick={() => setLanguage('nl')} className="flex items-center w-full text-[#334155]" type="button">{language == 'nl' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Dutch</button>
              <button onClick={() => setLanguage('it')} className="flex items-center w-full text-[#334155]" type="button">{language == 'it' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Italian</button>
              <button onClick={() => setLanguage('pl')} className="flex items-center w-full text-[#334155]" type="button">{language == 'pl' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Polish</button>
              <button onClick={() => setLanguage('sv')} className="flex items-center w-full text-[#334155]" type="button">{language == 'sv' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Swedish</button>
              <button onClick={() => setLanguage('ja')} className="flex items-center w-full text-[#334155]" type="button">{language == 'ja' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Japanese</button>
              <button onClick={() => setLanguage('hu')} className="flex items-center w-full text-[#334155]" type="button">{language == 'hu' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Hungarian</button>
              <button onClick={() => setLanguage('ko')} className="flex items-center w-full text-[#334155]" type="button">{language == 'ko' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Korean</button>
            </div>
          )}
          <div className="border mt-[1em] mb-[1em]"></div>
          <button onClick={() => toggleSalaryFilters()} className="flex items-center justify-between w-full text-[#334155]" type="button">Minimum Salary{showSalaryFilters ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}</button>
          {showSalaryFilters && (
            <div>
              <button onClick={() => setMinSalary('')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Any amount per year</button>
              <button onClick={() => setMinSalary('10000')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '10000' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}10,000+ per year</button>
              <button onClick={() => setMinSalary('20000')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '20000' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}20,000+ per year</button>
              <button onClick={() => setMinSalary('30000')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '30000' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}30,000+ per year</button>
              <button onClick={() => setMinSalary('40000')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '40000' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}40,000+ per year</button>
              <button onClick={() => setMinSalary('50000')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '50000' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}50,000+ per year</button>
              <button onClick={() => setMinSalary('60000')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '60000' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}60,000+ per year</button>
              <button onClick={() => setMinSalary('70000')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '70000' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}70,000+ per year</button>
              <button onClick={() => setMinSalary('80000')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '80000' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}80,000+ per year</button>
              <button onClick={() => setMinSalary('90000')} className="flex items-center w-full text-[#334155]" type="button">{minSalary == '90000' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}90,000+ per year</button>
            </div>
          )}
          <div className="border mt-[1em] mb-[1em]"></div>
          <button onClick={() => toggleExperienceFilters()} className="flex items-center justify-between w-full text-[#334155]" type="button">Experience Level{showExperienceFilters ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}</button>
          {showExperienceFilters && (
            <div>
              <button onClick={() => setExperienceLevel('')} className="flex items-center w-full text-[#334155]" type="button">{experienceLevel == '' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Any Level</button>
              <button onClick={() => setExperienceLevel('EN')} className="flex items-center w-full text-[#334155]" type="button">{experienceLevel == 'EN' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Entry Level</button>
              <button onClick={() => setExperienceLevel('MI')} className="flex items-center w-full text-[#334155]" type="button">{experienceLevel == 'MI' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Mid Level</button>
              <button onClick={() => setExperienceLevel('SE')} className="flex items-center w-full text-[#334155]" type="button">{experienceLevel == 'SE' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Senior Level</button>
              <button onClick={() => setExperienceLevel('EX')} className="flex items-center w-full text-[#334155]" type="button">{experienceLevel == 'EX' ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Executive Level</button>
            </div>
          )}
          <div className="border mt-[1em] mb-[1em]"></div>
          <button onClick={() => toggleRemoteWorkFilters()} className="flex items-center justify-between w-full text-[#334155]" type="button">Remote Work{showRemoteWorkFilters ? (<IoIosArrowDown />) : (<IoIosArrowForward />)}</button>
          {showRemoteWorkFilters && (
            <div>
              <button onClick={() => setIsRemote(false)} className="flex items-center w-full text-[#334155]" type="button">{!isRemote ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}On-site</button>
              <button onClick={() => setIsRemote(true)} className="flex items-center w-full text-[#334155]" type="button">{isRemote ? (<FaRegDotCircle className="mr-[1em]"/>) : (<FaRegCircle className="mr-[1em]"/>)}Remote available</button>
            </div>
          )}
          <div className="border mt-[1em] mb-[1em]"></div>
          <div className="flex justify-between">
            <button onClick={() => {setCurrency(''); setExperienceLevel(''); setIsRemote(false); setLanguage(''); setMinSalary(''); closeSideBar()}} className="flex items-center border rounded-[8px] border-[#3B82F6] text-[#3B82F6] p-[0.25em] pl-[2em] pr-[2em]" type="button">Clear Filters</button>
            <button onClick={() => closeSideBar()} className="flex items-center bg-[#3B82F6] rounded-[8px] text-[#ffffff] p-[0.25em] pl-[2em] pr-[2em]" type="button">Apply</button>
          </div>
          <div className="p-[100px]"></div>
        </div>
      </div>
    )}
    </>
  )
};

export default JobSearchForm;