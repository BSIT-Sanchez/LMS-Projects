import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { useSelector } from "react-redux";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [userAnnouncement, setUserAnnouncement] = useState([]);
  const [arrow, setArrow] = useState(false);
  const [showMore, setShowMore] = useState(true);
  const [pages, setPages] = useState(10); // default to 10 pages

  const handleArrow = () => {
    setArrow(!arrow);
  };

  const handleShowMore = async (numPages) => {
    const startIndex = userAnnouncement.length;
    try {
      const res = await fetch(`/api/announcement/getSearchAllAnnouncement?userId=${currentUser._id}&startIndex=${startIndex}&limit=${numPages}`);
      const data = await res.json();
      if (res.ok) {
        setUserAnnouncement((prev) => [...prev, ...data.announcement]);
        if (data.announcement.length < numPages) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const res = await fetch(`/api/announcement/getSearchAllAnnouncement?userId=${currentUser._id}&limit=${pages}`);
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setUserAnnouncement(data.announcement); //from controller
          if (data.announcement.length < pages) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentUser.role === "admin") {
      fetchAnnouncement();
    }
  }, [currentUser._id, pages]);

 

  const perpage = [
    {
      title: "10",
      value: 10,
    },
    {
      title: "20 ",
      value: 20,
    },
    {
      title: "30",
      value: 30,
    },
  ];
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    const formattedDate = date.toLocaleDateString(undefined, optionsDate);
    const formattedTime = date.toLocaleTimeString(undefined, optionsTime);
    return `Date Posted: ${formattedDate} ${formattedTime}`;
  };

  const handlePageChange = (e) => {
    const selectedPages = parseInt(e.target.value, 10);
    setPages(selectedPages);
    handleShowMore(selectedPages);
  };
  return(
    <Layout>
      {currentUser.role === "admin" && userAnnouncement.length > 0 ? (
        <div className="mt-20 md:mt-[4.5rem] px-3">
          <div className="flex mx-3 mb-10 border dark:border-darkBg rounded-sm">
            <div className="bg-[#fff] dark:bg-darkBg h-auto w-[100%] shadow-md rounded-xl p-6">
              <div className="flex justify-start items-start">
                <img src="/images/notify.svg" alt="person" />
                <h1 className="pt-1 font-bold text-[#262638] text-[20px] pl-[2px] dark:text-[#fff]">Announcements</h1>
              </div>
              <div className="mb-10 -z-40">
                {arrow ? (
                  <div className="border-b-[1px] pb-4 pl-10 py-2 cursor-pointer" onClick={handleArrow}>
                    <FaArrowDown className="text-[#6B737E]" />
                  </div>
                ) : (
                  <div className="border-b-[1px] pb-4 pl-10 py-2 cursor-pointer" onClick={handleArrow}>
                    <FaArrowUp className="text-[#6B737E]" />
                  </div>
                )}
                <div className={arrow ? "flex flex-col-reverse" : "flex flex-col"}>
                  {userAnnouncement.map((announcement, index) => (
                    <div className="flex flex-col" key={index}>
                      <div className="w-[90%] grow-0 justify-center items-center mt-4 ml-[5%]">
                        <img src={announcement.image} alt="images" className="w-full rounded-md" />
                        <p className="mt-4 text-[#6d7884] font-[600]">Posted By: {announcement.title}</p>
                        <p className="text-[#6d7884] font-[600] border-b-[1px] pb-4">{formatDateTime(announcement.updatedAt)}</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex p-2 justify-start items-center gap-4">
                    <div className="text-[#6B737E]">
                    Items per page:
                    </div>

                    <select
                      className=" border-[1px] p-[6px] focus-within:border-[#5046E5] outline-none"
                      onChange={handlePageChange}
                      value={pages}
                    >
                      
                      {perpage.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.title}
                        </option>
                      ))}
                    </select>

                    <div className="text-[#6B737E]">
                    1 – 9 of 9
                    </div>

                    <div>
                      <svg
                          viewBox="0 0 24 24"
                          className="w-[25px] h-[25px] fill-current text-[#97a2b3]"
                          focusable="false"
                        >
                          <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                      </svg>
                    </div>

                    <div>
                      <svg viewBox="0 0 24 24" focusable="false" className="w-[25px] h-[25px] fill-current text-[#97a2b3]">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                      </svg>
                    </div>

                    <div>
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="w-[25px] h-[25px] fill-current text-[#97a2b3]"
                      >
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                      </svg>
                    </div>

                    <div>
                      <svg viewBox="0 0 24 24" focusable="false" className="w-[25px] h-[25px] fill-current text-[#97a2b3]">
                        <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                      </svg>
                    </div>


                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>You have an announcement yet!</p>
      )}
    
    </Layout>
  )
}
export default Home