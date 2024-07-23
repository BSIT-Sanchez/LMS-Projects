import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



const Announcement = () => {
  const [modal, setModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const updateHandle = () => {
    setUpdateModal(!updateModal);
  }

  const handlerModal = () => {
    setModal(!modal)
  }
  const [announcementToDelete, setAnnouncementIdToDelete] = useState('');
  const { currentUser } = useSelector((state) => state.user);
  const [userAnnouncement, setUserAnnouncement] = useState([]);
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageProgress, setImageProgress] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const [showMore, setShowMore] = useState(true);
  console.log(userAnnouncement);

  const handleImage = async () => {
    try {
      if (!file) {
        setImageError('Please select an image!');
        return;
      }

      setImageError(null);
      const storage = getStorage(app);
      const fileName = new Date().getTime() + '-' + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImageProgress(progress.toFixed(0));
        },
        (error) => {
          setImageError('Image upload failed!');
          setImageProgress(null);
          console.error('Upload error:', error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setImageProgress(null);
            setImageError(null);
            setFormData({ ...formData, image: downloadURL });
            setFile(null); // Reset file state to null after successful upload
          } catch (error) {
            setImageError('Failed to get download URL!');
            console.error('Download URL error:', error);
          }
        }
      );
    } catch (error) {
      setImageError('Image upload failed');
      setImageProgress(null);
      console.error('General error:', error);
    }
  };

  

  const handleSubmit = async (e) => {
    

    try{
      const res= await fetch('/api/announcement/addAnnouncement', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if(!res.ok){
        setUploadError(data.message);
        
        
        return
      }
      if(res.ok){
        setUploadError('Added Successfully');
        
      }
      


    }catch(error){
      setUploadError('Something went wrong')

    }

  }

  {/**create a post */}
  useEffect(() => {
    const fetchAnnouncement = async() => {
      try{
        const res= await fetch(`/api/announcement/getSearchAllAnnouncement?userId=${currentUser._id}`)
        const data = await res.json();
        console.log(data)
        if(res.ok){
          setUserAnnouncement(data.announcement) //from controller

        }
      }
      catch(error){
        console.log(error.message)

      }
    }
    if(currentUser.role === "admin"){
      fetchAnnouncement();
    }
  },[currentUser._id])

  const handleShowMore = async() => {
    const startIndex = userAnnouncement.length;
    try{
      const res = await fetch(`/api/announcement/getSearchAllAnnouncement?userId=${currentUser._id}&startIndex=${startIndex}`);
      const data = await res.json();
      if(res.ok){
        setUserAnnouncement((prev) => [...prev, ...data.announcement]);
        if(data.announcement.length < 9 ){
          setShowMore(false)
        }
      }

    }catch(error){
      console.log(error.message)
    }

  }

  const handleDeleteAnnouncement = async () => {
    setModal(false);
    try {
      const res = await fetch(`/api/announcement/deleteAnnouncement/${announcementToDelete}/${currentUser._id}`, {
        method: 'DELETE',
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        setUserAnnouncement((prev) => prev.filter((announcement) => announcement._id !== announcementToDelete));
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  
  
  return (
    <Layout>
      <div>
        <div className='flex justify-center items-center mt-20 md:mt-10'>
          <h1 className="font-[900] text-[30px] text-[#1e293c]">Create An Announcement</h1>
        </div>

        {imageError && <p className='text-red-500 text-center mt-9'>{imageError}</p>}
        {uploadError && <p className='text-blue-500 text-center mt-9'>{uploadError}</p>}

        <form className='' onSubmit={handleSubmit}>
          <div className='flex justify-end items-center pr-12'>
            <input type='submit' value='publish' className='AddAnnouncebutton rounded-[4px] py-2 px-4 text-[15px] text-[#fff] font-[500] cursor-pointer'/>
          </div>
        
          <div className='flex flex-col md:flex-row justify-between items-center border-dotted border-[#1c008b] border mx-3 md:mx-12 p-3 rounded-sm mt-5'> 
            
              <div className='flex flex-col gap-2'>
                <input type="file" accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
                
                <button
                  type="button"
                  className='AddAnnouncebutton rounded-[4px] p-2 text-[15px] text-[#fff] font-[500]'
                  onClick={handleImage}
                  disabled={imageProgress !== null}
                >
                  {imageProgress ? (
                    <div className='w-12 h-12 flex justify-center items-center ml-20'>
                      <CircularProgressbar value={imageProgress} text={`${imageProgress || 0}%`} className='' />
                    </div>
                  ) : (
                    'Upload Image'
                  )}
                </button>
              </div>

              <div className='flex flex-col gap-2  mt-4 md:mt-0'>
                <label className='text-center text-[16px] font-bold'>PostedBy:</label>
                <div className='border p-2 border-[#1c008b] rounded-[4px]'>
                  <input type="text" placeholder='Enter Name Here!!' className='outline-none text-center bg-transparent  font-semibold' onChange={(e) => setFormData({ ...formData, title: e.target.value})}/>
                </div>
                            
              </div>

              
          </div>
        
          
        </form>
        {formData.image && (
          <img src={formData.image} alt="images" className='h-[300px] w-full  object-contain mt-6'/>
        )}
        
        {
          currentUser.role === "admin" && userAnnouncement.length > 0 ? ( 
            <div className="flex mt-20 mx-3 mb-10 border rounded-sm ">
            <div className="bg-[#fff] h-auto w-[100%] shadow-md rounded-xl p-6">
            <div className="flex justify-start items-start">
              <img src="/images/notify.svg" alt="person" />
              <h1 className="pt-1 font-bold text-[#262638] text-[20px] pl-[2px]">Announcements</h1>
            </div>
            <div className="mb-10 -z-40 mt-4">
            <table className="table-auto w-full border-collapse border border-slate-400 p-2 border-spacing-2">
              {
                showMore && (
                  <caption className="caption-bottom cursor-pointer" onClick={handleShowMore}>
                    Show more
                  </caption>
                )
              }
            
              <thead>
                <tr>
                  <th className="border border-slate-400 p-2">Date</th>
                  <th className="border border-slate-400">Images</th>
                  <th className="border border-slate-400">PostBy</th>
                  <th className="border border-slate-400" colSpan="2">Action</th>
                </tr>
              </thead>
              {
                userAnnouncement.map((announcement, index) =>(
                <tbody key={index}>
                  <tr>
                    <td className="border border-slate-300 w-[20%] text-center">
                      { new Date(announcement.updatedAt).toLocaleDateString()}
                    </td>
                    <td className="border border-slate-300 flex justify-center items-center w-full">
                      <img src={announcement.image} alt='images' className=' h-10  w-[50%] object-fill p-1'/>
                    </td>
                    <td className="border border-slate-300 w-[20%] text-center text-nowrap">{announcement.title}</td>
                    <td className="border border-slate-300 text-center w-[20%]">
                      <Link to={`/update-announcement/${announcement._id}`} className="flex justify-center  items-center cursor-pointer">
                        <FaRegEdit className='text-blue-600 bg-none hover:bg-gray-300 p-2 h-8  w-8 rounded-lg' onClick={() => {
                          setUpdateModal(true);
                        }}/>
                      </Link>
                      
                    </td>

                    {/**delete  */}
                    <td className="border border-slate-300 items-center w-[20%]">
                      <div className='flex justify-center items-center cursor-pointer'>
                        <RiDeleteBin6Line className='text-red-600 bg-none hover:bg-gray-300 p-2 h-8  w-8 rounded-lg'onClick={() => {
                          setModal(true);
                          setAnnouncementIdToDelete(announcement._id);
                        }} />
                      </div>
                      {
                        modal && 
                        <div className=" w-full h-[100%] fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 ">
                          <div className="bg-white w-[96%] h-[40%] lg:w-[40%] lg:h-[40%] lg:-mt-16 rounded-md -mt-10 ">
                            <div className="flex justify-end items-center px-4 py-4">
                              
                              <svg
                                width="17"
                                height="13"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="cursor-pointer hover:text-white hover:bg-[#ef1010] w-8 h-8 p-2 rounded-[50%] font-normal transition ease-in-out"
                                onClick={handlerModal}
                              >
                                <path
                                  d="M9.4158 8.00409L15.7158 1.71409C15.9041 1.52579 16.0099 1.27039 16.0099 1.00409C16.0099 0.73779 15.9041 0.482395 15.7158 0.294092C15.5275 0.105788 15.2721 0 15.0058 0C14.7395 0 14.4841 0.105788 14.2958 0.294092L8.0058 6.59409L1.7158 0.294092C1.52749 0.105788 1.2721 2.36434e-07 1.0058 2.38419e-07C0.739497 2.40403e-07 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.00170684 0.73779 0.00170684 1.00409C0.00170684 1.27039 0.107495 1.52579 0.295798 1.71409L6.5958 8.00409L0.295798 14.2941C0.20207 14.3871 0.127676 14.4977 0.0769072 14.6195C0.0261385 14.7414 0 14.8721 0 15.0041C0 15.1361 0.0261385 15.2668 0.0769072 15.3887C0.127676 15.5105 0.20207 15.6211 0.295798 15.7141C0.388761 15.8078 0.499362 15.8822 0.621222 15.933C0.743081 15.9838 0.873786 16.0099 1.0058 16.0099C1.13781 16.0099 1.26852 15.9838 1.39038 15.933C1.51223 15.8822 1.62284 15.8078 1.7158 15.7141L8.0058 9.41409L14.2958 15.7141C14.3888 15.8078 14.4994 15.8822 14.6212 15.933C14.7431 15.9838 14.8738 16.0099 15.0058 16.0099C15.1378 16.0099 15.2685 15.9838 15.3904 15.933C15.5122 15.8822 15.6228 15.8078 15.7158 15.7141C15.8095 15.6211 15.8839 15.5105 15.9347 15.3887C15.9855 15.2668 16.0116 15.1361 16.0116 15.0041C16.0116 14.8721 15.9855 14.7414 15.9347 14.6195C15.8839 14.4977 15.8095 14.3871 15.7158 14.2941L9.4158 8.00409Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </div>

                            <div className='flex flex-col justify-center items-center gap-4'>
                              <svg
                                  height="40px"
                                  width="40px"
                                  version="1.1"
                                  id="Capa_1"
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlnsXlink="http://www.w3.org/1999/xlink"
                                  viewBox="0 0 27.963 27.963"
                                  xmlSpace="preserve"
                                  className="fill-current text-[#97a2b3]" // Adjust the color as needed
                                >
                                  <g>
                                    <g id="c129_exclamation">
                                      <path
                                        d="M13.983,0C6.261,0,0.001,6.259,0.001,13.979c0,7.724,6.26,13.984,13.982,13.984s13.98-6.261,13.98-13.984
                                      C27.963,6.259,21.705,0,13.983,0z M13.983,26.531c-6.933,0-12.55-5.62-12.55-12.553c0-6.93,5.617-12.548,12.55-12.548
                                      c6.931,0,12.549,5.618,12.549,12.548C26.531,20.911,20.913,26.531,13.983,26.531z"
                                      />
                                      <polygon
                                        points="15.579,17.158 16.191,4.579 11.804,4.579 12.414,17.158"
                                      />
                                      <path
                                        d="M13.998,18.546c-1.471,0-2.5,1.029-2.5,2.526c0,1.443,0.999,2.528,2.444,2.528h0.056c1.499,0,2.469-1.085,2.469-2.528
                                      C16.441,19.575,15.468,18.546,13.998,18.546z"
                                      />
                                    </g>
                                    <g id="Capa_1_207_"></g>
                                  </g>
                              </svg>
                              <h1 className='font-semibold'>Are you sure you want to delete this announcement</h1>
                              <div className='flex justify-center items-center gap-8'>
                                <button className='bg-red-700 p-2 rounded-lg font-[600] text-[#fff] cursor-pointer' onClick={handleDeleteAnnouncement}>Yes, I'm sure</button>
                                <buton className='bg-slate-100 p-2 rounded-lg font-[600] border-slate-300 border text-[#000] cursor-pointer' onClick={handlerModal}>No, cancel</buton>
                              </div>
                            </div>

                            
              
                          </div>
                        </div>
                      }
                    </td>
                  </tr>
                </tbody>
                ))
              }
              
            </table>

            </div>
          </div>
            </div>
          ): (<p>You have an announcement yet!</p>)
        }
        
      </div>
    </Layout>
  );
};

export default Announcement;
