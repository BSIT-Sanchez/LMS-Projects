// Sidebar.js
import React, { useEffect, useState } from 'react';
import { IoMdArrowDropup } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { MdMenu } from "react-icons/md";
import { LuMenu } from "react-icons/lu";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { AiOutlineFullscreen } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";

const Layout = ({children}) => {
  
  const [isOpen, setIsOpen] = useState(true);
  const [mobileBar, setMobileBar] = useState(false);
  const [mobileMenu, setmobileMenu] = useState(false)
  const [userlists, setUserLists] = useState(false);

  const handlerUser = () => {
    setUserLists(!userlists)
  }

  const mobileMenuToggle = () => {
    setmobileMenu(!mobileMenu);
  }

  const MobileSibeBar = () => {
    setMobileBar(!mobileBar);
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if(localStorage.getItem('theme') === null){
      localStorage.setItem('theme', 'light');
    }
  },[]);

  useEffect(()=> {
    const html = document.querySelector('html');
    if(localStorage.getItem('theme') === 'dark'){
      html.classList.add('dark');
      setTheme('dark');
    }else{
      html.classList.remove('dark');
      setTheme('light');
    }
  },[theme])

  const handleThemeSwitch = () => {
    if(localStorage.getItem('theme') === 'light'){
      setTheme('dark');
      localStorage.setItem('theme','dark');
    }else{
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }

    }

    const [isHovered, setIsHovered] = useState(false);

      const handleMouseEnter = () => {
        setIsHovered(!isHovered);
      };

      
  const [profile, setProfile] = useState(false);

  const Handler = () => {
    setProfile(!profile)
  }
  
  const subhover = 'flex justify-start items-center mt-[.5rem] gap-4 p-2 dark:hover:bg-[#0314AA] rounded-md hover:bg-gray-100 hover:bg-opacity-[.12] px-5';
  const mainHover = ({isActive}) => (isActive ? 'flex justify-start items-center mt-[.5rem] gap-4 p-2 dark:hover:bg-[#0314AA] rounded-md bg-gray-100 bg-opacity-[.12] px-5 dark:bg-[#050b3b]' : subhover);
  
  return (
    <div className="fixed  bg-bgColor h-screen w-full dark:bg-darkBg">
      {/**Sidebar */}
      <div
        className={`hidden lg:block fixed top-0 left-0 h-[100%] bg-[#1E3B8B]  text-white transition-transform duration-300 ease-in-out transform z-40 ${
          isOpen ? 'translate-x-0 ' : '-translate-x-[103%]'
        } w-[22%] overflow-y-scroll sidebar`}
      >
        <div className="flex flex-col gap-1 w-full">
          <div className='flex justify-between items-center w-full mt-6 px-4'>
            <div>
              <img src="/images/logo.svg" alt='logo' className='cursor-pointer'/>
            </div>

            <div className='flex justify-end items-center gap-2'>
              <div className='relative w-[35px] h-[35px] text-[#93A3BC] font-semibold cursor-pointer hover:bg-slate-300 rounded-[50%] hover:bg-opacity-[.03] p-[7px]'>
              <FaRegBell className='w-[21px] h-[21px] font-semibold cursor-pointer'/>
              </div>
              <div className='relative w-[35px] h-[35px] text-[#93A3BC] font-semibold cursor-pointer hover:bg-slate-300 rounded-[50%] hover:bg-opacity-[.03] p-[7px]'>
                <img src="/images/profile-icon.svg" alt='profile-icon' className='w-[21px] h-[21px] font-semibold cursor-pointer'/>
                <div className='h-[8px] w-[8px] rounded-full bg-[#22C65E] absolute bottom-[5px] right-[6px]'/>
              </div>
            </div>
          </div>

          {/**circle name */}
          <div className='flex flex-col justify-center items-center mt-10 border-b-[.01px] border-[#6b7280] w-full'>
            <div className='bg-[#324154] w-[100px] h-[100px] rounded-[50%] flex justify-center items-center shadow-sm'>
              <h1 className='font-bold text-[40px] text-[#fff]'>LS</h1>
            </div>
            <div className='mt-6 mb-10'>
              <h1 className='font-[400] text-[15px] text-[#fff]'>Lando Abastillas Sanchez</h1>
              <p className='font-[500] text-[12px] text-[#9ca3af] text-center'>21012075@bcp.edu.ph</p>
            </div>
          </div>
          
          {/**Lists Menu */}
          <div className='flex flex-col w-[93%] mx-2 mt-3 mb-2'>
            <div className=' '>
              <h1 className='text-[#818ce7] text-[14px] font-[600]'>ADMIN DASHBOARD</h1>
              <h2 className='text-[#9ca3af] text-[12px] font-[500]'>SMS Account Fundamentals</h2>
            </div>
            <NavLink to="/Dashboard" className={mainHover}>
              <div>
              <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-[25px] h-[25px]"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
          />
              </svg>
              </div>
              <div>
                <h1 className='font-[500]'>Dashboard</h1>
              </div>             
            </NavLink>

            <NavLink to="" className={subhover} onClick={handlerUser}>
              <div>
                <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-[25px] h-[25px]"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
          />
                </svg>
              </div>
              <div className='flex justify-between items-center w-full'>
                <h1 className='font-[500] '>Users</h1>
                {
                  userlists ?  <IoIosArrowForward /> : <IoIosArrowDown />
                }
              </div>
              
            </NavLink>
            { userlists && 
              <div className='mt-2'>
                <Link to='#' className='flex flex-row justify-between items-center gap-4 text-[#9ca3af] hover:text-[#fff] bg-none hover:bg-gray-100 w-[100%] p-2 rounded-md px-5 hover:bg-opacity-[.12] cursor-pointer'>                                    
                  <h1 className='text-[13px] font-[600] pl-[2.4rem]'>View All Users</h1>
                </Link> 
                <Link to='/Users/adminInfomation' className='flex flex-row justify-between items-center gap-4 text-[#9ca3af] hover:text-[#fff] bg-none hover:bg-gray-100 w-[100%] p-2 rounded-md px-5 hover:bg-opacity-[.12] cursor-pointer'>                                    
                  <h1 className='text-[13px] font-[600] pl-[2.4rem]'>User Information</h1>
                </Link> 
              </div>
            }
          

            <NavLink to="/Programs" className={mainHover}>
              <div>
                <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-[25px] h-[25px]"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
                </svg>
              </div>
              <div>
                <h1 className='font-[500]'>Programs</h1>
              </div>
            
            </NavLink>

            <NavLink to="/Announcement" className={mainHover}>
              <div>
                <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-[25px] h-[25px]"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
          />
                </svg>
              </div>
              <div>
                <h1 className='font-[500]'>Announcement</h1>
              </div>
            
            </NavLink>
          </div>
        
        </div>
      </div>
      
      {/**Main Content */}
      <div className={`xs:w-[96%] xs:mx-[2%] ${isOpen ? ' lg:w-[78%] lg:ml-[19rem]  h-[100%] custom-scrollbar  ' : ' lg:w-full h-[100%] custom-scrollbar '} overflow-auto `} >

        {/**Header */}

        <div className={`hidden lg:block bg-bgHeader  box-shadow border-b-[1px] border-[#e1e0e4] dark:border-darkHeader border-solid  ${isOpen ? 'left-[19rem] ' : 'left-2 right-8 top-2'}`}>
          <div className="flex p-3 justify-between items-center">
            {/**menulist */}

            <div className='flex justify-start items-center'>
              {/**menuIcon */}
              <MdMenu className="text-[#6B737E] cursor-pointer hover:bg-slate-200 h-[35px] w-[35px] p-[5px] rounded-[50%]" onClick={toggleSidebar}/> 
              
            </div>
              
            <div  className="flex justify-evenly items-center gap-4 pr-[1rem]">
              <p>11:17:32 PM</p>
              <AiOutlineFullscreen className="text-[#6B737E] cursor-pointer hover:bg-slate-200 h-[35px] w-[35px] p-[5px] rounded-[50%]"/>
              <IoSearch className="text-[#6B737E] cursor-pointer hover:bg-slate-200 h-[35px] w-[35px] p-[5px] rounded-[50%]"/>
              
            </div>
            




          </div>
        </div>

        {/**Mobile Header */}
        <div className='lg:hidden flex justify-between items-center bg-[#fff] p-2 w-[96%] mx-[2%] rounded-[7px] mt-2 fixed box-shadow '>
          <div className=''>
            {
              mobileBar ? <button onClick={MobileSibeBar} className='p-[.60rem] bg-[#e6e8f7] text-[#0314AA] rounded-lg dark:bg-[#1c008b] dark:text-[#fff]'>
                <svg   
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M10.25 6.75L4.75 12L10.25 17.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M19.25 12H5"
                  ></path>
                </svg>
              </button>
              : <button onClick={MobileSibeBar} className='bg-[#e1e0e4] p-[.60rem] hover:bg-[#e6e8f7] hover:text-[#0314AA] rounded-lg dark:hover:bg-[#0314AA]  dark:text-[#fff] dark:bg-[#3c4155]'>
              <svg
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="text-current"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4.75 7.75H19.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4.75 14.75H19.25"
                  ></path>
              </svg>
              
              </button>
            }
            {/**Mobile Sidebar */}
            {
              <div className={`absolute top-[58px] left-0 w-[100%] h-[90vh] bg-[#1c008b] rounded-[7px] ransition-transform duration-300 transform z-50 ${
                  mobileBar ? 'translate-x-0 ' : '-translate-x-[103%]'
              }`}>
                {/**List menu */}
                <div className="flex flex-col gap-1">
                  <div className='flex justify-center items-center w-full mt-6'>
                          <img src='/images/logo.svg' alt="logo" className='w-[200px] h-[124px]'/>
                  </div>

                  <div className='flex flex-col w-[93%] mx-2 mt-[2rem] text-[#fff]'>
                          <NavLink to="/Home" className={mainHover}>
                            <div>
                              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className='text-[#b3b9e6]'>
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className='text-[#b3b9e6]'
                                d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
                              ></path>
                              <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                className='text-[#b3b9e6]'
                                d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
                              ></path>
                              </svg>
                            </div>
                            <div>
                              <h1 className='font-semibold -ml-1'>Site home</h1>
                            </div>             
                          </NavLink>

                          <NavLink to="/BcpSubjects" className={mainHover}>
                            <div>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512"
                                className="fill-current text-[#b3b9e6]"
                              >
                                <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z"></path>
                              </svg>
                            </div>
                            <div>
                              <h1 className='font-semibold '>BCP Subjects</h1>
                            </div>
                            
                          </NavLink>

                          <NavLink to="/MyCourses" className={mainHover}>
                            <div>
                              <svg
                              width="20"
                              height="20"
                              fill="none"
                              viewBox="0 0 24 24"
                              className="stroke-current text-[#b3b9e6]"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M19.25 5.75C19.25 5.19772 18.8023 4.75 18.25
                                4.75H14C12.8954 4.75 12 5.64543 12 6.75V19.25L12.8284
                                18.4216C13.5786 17.6714 14.596 17.25 15.6569
                                17.25H18.25C18.8023 17.25 19.25 16.8023 19.25
                                16.25V5.75Z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M4.75 5.75C4.75 5.19772 5.19772 4.75 5.75
                                4.75H10C11.1046 4.75 12 5.64543 12 6.75V19.25L11.1716
                                18.4216C10.4214 17.6714 9.40401 17.25 8.34315
                                17.25H5.75C5.19772 17.25 4.75 16.8023 4.75
                                16.25V5.75Z"
                              ></path>
                              </svg>
                            </div>
                            <div>
                              <h1 className='font-semibold -ml-1'>My courses</h1>
                            </div>
                          
                          </NavLink>
                  </div>
                      
                </div>
              </div>
            }

            {/**End Mobile sidebar */}
            
          </div>

          <div>
            <img src='/images/logo.svg' alt="logo" className='w-[56px] h-[35px]'/>
          </div>

          <div>
            <button onClick={mobileMenuToggle} className='p-[.60rem] bg-[#e6e8f7]  rounded-lg dark:bg-[#3c4155] dark:text-[#fff]'>
              <LuMenu/>
            </button>
          </div>
          
          {/**Mobile menu */}
          { mobileMenu &&
            <div className='absolute top-0 left-0 right-0 bg-[#fcfcfc] rounded-[7px] h-[18rem] w-full box-shadow dark:bg-darkHeader'>
              <div className='flex justify-end items-center gap-2 mt-2 mr-2'>

                {/**Theme */}
                <div className='relative'>
                {
                theme === 'light' ? <button className='text-[#F4A614] bg-[#FDF6EA] p-[.60rem]  rounded-lg hover:bg-[#121420] hover:text-[#fff]' onClick={handleThemeSwitch}  
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseEnter}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.2256 2.00253C9.59172 1.94346 6.93894 2.9189 4.92893 4.92891C1.02369 8.83415 1.02369 15.1658 4.92893 19.071C8.83418 22.9763 15.1658 22.9763 19.0711 19.071C21.0811 17.061 22.0565 14.4082 21.9975 11.7743C21.9796 10.9772 21.8669 10.1818 21.6595 9.40643C21.0933 9.9488 20.5078 10.4276 19.9163 10.8425C18.5649 11.7906 17.1826 12.4053 15.9301 12.6837C14.0241 13.1072 12.7156 12.7156 12 12C11.2844 11.2844 10.8928 9.97588 11.3163 8.0699C11.5947 6.81738 12.2094 5.43511 13.1575 4.08368C13.5724 3.49221 14.0512 2.90664 14.5935 2.34046C13.8182 2.13305 13.0228 2.02041 12.2256 2.00253ZM17.6569 17.6568C18.9081 16.4056 19.6582 14.8431 19.9072 13.2186C16.3611 15.2643 12.638 15.4664 10.5858 13.4142C8.53361 11.362 8.73568 7.63895 10.7814 4.09281C9.1569 4.34184 7.59434 5.09193 6.34315 6.34313C3.21895 9.46732 3.21895 14.5326 6.34315 17.6568C9.46734 20.781 14.5327 20.781 17.6569 17.6568Z"
                    fill="currentColor"
                  ></path>
                </svg>
                </button> :
                <button className='text-[#F4A614] bg-[#4a350d] p-[.60rem]  rounded-lg' onClick={handleThemeSwitch}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseEnter}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11 0H13V4.06189C12.6724 4.02104 12.3387 4 12 4C11.6613 4 11.3276 4.02104 11 4.06189V0ZM7.0943 5.68018L4.22173 2.80761L2.80752 4.22183L5.6801 7.09441C6.09071 6.56618 6.56608 6.0908 7.0943 5.68018ZM4.06189 11H0V13H4.06189C4.02104 12.6724 4 12.3387 4 12C4 11.6613 4.02104 11.3276 4.06189 11ZM5.6801 16.9056L2.80751 19.7782L4.22173 21.1924L7.0943 18.3198C6.56608 17.9092 6.09071 17.4338 5.6801 16.9056ZM11 19.9381V24H13V19.9381C12.6724 19.979 12.3387 20 12 20C11.6613 20 11.3276 19.979 11 19.9381ZM16.9056 18.3199L19.7781 21.1924L21.1923 19.7782L18.3198 16.9057C17.9092 17.4339 17.4338 17.9093 16.9056 18.3199ZM19.9381 13H24V11H19.9381C19.979 11.3276 20 11.6613 20 12C20 12.3387 19.979 12.6724 19.9381 13ZM18.3198 7.0943L21.1923 4.22183L19.7781 2.80762L16.9056 5.6801C17.4338 6.09071 17.9092 6.56608 18.3198 7.0943Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              }
                
                {isHovered ? <div>
                  <p className=' absolute top-6 left-0 z-50'>
                    <IoMdArrowDropup className='text-[30px] text-darkHeader dark:text-[#fff]' />
                  </p>
                  <p className='absolute -left-8 top-10 text-[14px] bg-darkHeader p-2 whitespace-nowrap rounded-lg text-[#fff] dark:bg-[#fff]  dark:text-darkHeader z-50'>Dark Mode</p>
                </div> : ''}
                </div>


                {/**Profile */}
                  <div className='border bg-white p-4 h-[22px] w-[20px] flex justify-center items-center rounded-md  cursor-pointer relative'>
                    
                  

                    {
                    profile && <div className='absolute top-[2.5rem] -left-[16rem] z-10 bg-[#fff] dark:bg-darkBg shadow-xl h-[13.5rem]  w-[18rem] rounded-lg border-[.01px] outline-none dark:border-gray-800 dark:text-[#fff]'>
                    <div>
                      <div className='flex flex-col justify-center items-start border-b-[.01px] p-4 pb-4 dark:border-b-gray-800'>
                      
                        <div className='flex justify-center bg-[#efeff0] rounded-md items-center text-[11px] gap-2 pl-2 mt-1 dark:bg-[#21263b]'>
                          <div className='w-[.6rem] h-[.6rem] rounded-[50%] border-[#000] border bg-[#fff]'/>
                          {currentUser ? (<p className='pr-4'>{currentUser.username}</p>) : null}
                        </div>
                      </div>

                      <Link to='/Profile' className='flex flex-col justify-center items-start border-b-[.01px] px-4 dark:border-b-gray-800 cursor-pointer py-1 '>
                        <h1 className='text-[15px] font-semibold hover:bg-gray-200 w-full  rounded-[8px] py-1 px-2 dark:hover:bg-slate-600'>Profile</h1>
                      </Link>
                      <div className='flex flex-col justify-center items-start border-b-[.01px] px-4 dark:border-b-gray-800 cursor-pointer py-1 '>
                        <h1 className='text-[15px] font-semibold hover:bg-gray-200 w-full  rounded-[8px] py-1 px-2 dark:hover:bg-slate-600'>Preferences</h1>
                      </div>
                      <div className='flex flex-col justify-center items-start border-b-[.01px] px-4 dark:border-b-gray-800 cursor-pointer py-1 rounded-b-lg'>
                        <h1 className='text-[15px] font-semibold hover:bg-gray-200 w-full  rounded-[8px] py-1 px-2 dark:hover:bg-slate-600 '>Log out</h1>
                      </div>
                    </div>
                    </div>
                  }
                  </div>
                  

            
                {/**toggle button */}
                <div>
                  <button onClick={mobileMenuToggle} className='bg-[#e1e0e4] p-[.60rem] hover:bg-[#e6e8f7] hover:text-[#0314AA] rounded-lg dark:hover:bg-[#0314AA]  dark:text-[#fff] dark:bg-[#3c4155]'>
                  <svg
                    width="18"
                    height="18"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.25 6.75L6.75 17.25"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6.75 6.75L17.25 17.25"
                    ></path>
                  </svg>
                
                  </button>
                </div>
                

              </div>

              {/**Menu lists */}
              <ul className='flex flex-col justify-start items-start gap-2 font-[500] w-[96%] mx-[2%] cursor-pointer text-[14px] mt-4 px-3'>
                <a href='https://www.bcp.edu.ph/' target="_blank" rel="noopener noreferrer" className='hover:bg-[#e6e8f7] hover:text-[#0314AA] rounded-lg px-3 py-2 dark:hover:bg-[#12151f] dark:text-[#ebedf7] w-full'>BCP Website</a>
                <a href='https://bcp-sms.elearningcommons.com/' target="_blank" rel="noopener noreferrer" className='hover:bg-[#e6e8f7] hover:text-[#0314AA] rounded-lg px-3 py-2 dark:hover:bg-[#12151f] dark:text-[#ebedf7] w-full'>BCP LMS</a>
                <a href='https://elearningcommons.com/libraries/' target="_blank" rel="noopener noreferrer" className='hover:bg-[#e6e8f7] hover:text-[#0314AA] rounded-lg px-3 py-2 dark:hover:bg-[#12151f] dark:text-[#ebedf7] w-full'>Libraries</a>
                <a href='' target="_blank" rel="noopener noreferrer" className='hover:bg-[#e6e8f7] hover:text-[#0314AA] rounded-lg px-3 py-2 dark:hover:bg-[#12151f] dark:text-[#ebedf7] w-full'>Courses</a>
                <a href='https://elearningcommons.com/terms-conditions-and-policies/' target="_blank" rel="noopener noreferrer" className='hover:bg-[#e6e8f7] hover:text-[#0314AA] rounded-lg px-3 py-2 dark:hover:bg-[#12151f] dark:text-[#ebedf7] w-full'>Privacy Policy</a>
              </ul>

            </div>
          }
        
        </div>


        {/**content */}
        <div className={` ${isOpen ? 'lg:mr-16 lg:ml-1 ' : 'lg:mr-5 lg:ml-3 '}` } >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;