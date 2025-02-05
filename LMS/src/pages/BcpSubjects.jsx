import { Link } from "react-router-dom"
import Layout from "../Layout/Layout"

const BcpSubjects = () => {
  return(
    <Layout>
      <div className="mt-20 dark:text-darkWhite">
        {/**header */}
        <div className="flex justify-start items-center gap-1  px-[4rem]">
         <div className="flex justify-start items-center gap-1">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" className='text-[#6f6c76]'>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className='text-[#6f6c76]'
                  d="M6.75024 19.2502H17.2502C18.3548 19.2502 19.2502 18.3548 19.2502 17.2502V9.75025L12.0002 4.75024L4.75024 9.75025V17.2502C4.75024 18.3548 5.64568 19.2502 6.75024 19.2502Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  className='text-[#6f6c76]'
                  d="M9.74963 15.7493C9.74963 14.6447 10.6451 13.7493 11.7496 13.7493H12.2496C13.3542 13.7493 14.2496 14.6447 14.2496 15.7493V19.2493H9.74963V15.7493Z"
                ></path>
            </svg>
            
            <Link to='/Home'>
              <p className="text-[13px] font-semibold text-[#6f6c76]">Home</p>
            </Link>
            <span className="font-[400] text-[#6f6c76] px-[2px]">-</span>
            <div>
              <p className="text-[13px] font-semibold text-[#6f6c76]">Courses</p>
            </div>
            <span className="font-[400] text-[#6f6c76] px-[2px]">-</span>
            <Link to='/BcpSubjects'>
              <p className="text-[13px] font-semibold text-[#6f6c76]">Search</p>
            </Link>
         </div>
         
        </div>
      </div>

      {/**search here */}
      <div className="px-[4rem] mb-2">
        <p className="font-semibold text-[#6f6c76] text-[14.5px] mt-10">Bestlink College of the Philippines</p>

        <form className="relative z-1">
          <div className="absolute top-2 left-0 pl-1 cursor-pointer">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
              ></path>
            </svg>
          </div>
          <input className="outline-none w-[82%] md:w-[30%] p-[6px] focus-within:bg-[#e8f0fd] border rounded-md px-8" type="text" placeholder="Search courses"/>

        </form>

      </div>


    </Layout>
  )
}
export default BcpSubjects