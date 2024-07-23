import React, { useEffect, useState } from 'react';
import Layout from '../../Layout/Layout';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';
import { app } from '../../firebase';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const UpdateAnnouncement = () => {
  const navigate = useNavigate();
  const { announcementId } = useParams();
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});
  const [imageProgress, setImageProgress] = useState(null);
  const [imageError, setImageError] = useState(null);
  const [uploadError, setUploadError] = useState(null);
  const { currentUser } = useSelector((state) => state.user);

  const updateHandle = () => {
    navigate('/Announcement');
  };

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
    e.preventDefault();

    try {
      const res = await fetch(`/api/announcement/updateAnnouncement/${announcementId}/${currentUser._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        setUploadError(data.message);
        return;
      }
      if (res.ok) {
        navigate('/Announcement');
        setUploadError('Update Successfully');
        
      }
    } catch (error) {
      setUploadError('Something went wrong');
    }
  };


  

  return (
    <Layout>
      <div className=" w-full h-[100%] fixed inset-0 bg-black bg-opacity-10 flex items-center justify-center z-50 ">
        <div className="bg-white w-[96%] h-[90%] lg:w-[40%] lg:h-[90%] lg:mt-15 rounded-md -mt-10 ">
          <div className="flex justify-end items-center px-4 py-4">
            <svg
              width="17"
              height="13"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer hover:text-white hover:bg-[#ef1010] w-8 h-8 p-2 rounded-[50%] font-normal transition ease-in-out"
              onClick={updateHandle}
            >
              <path
                d="M9.4158 8.00409L15.7158 1.71409C15.9041 1.52579 16.0099 1.27039 16.0099 1.00409C16.0099 0.73779 15.9041 0.482395 15.7158 0.294092C15.5275 0.105788 15.2721 0 15.0058 0C14.7395 0 14.4841 0.105788 14.2958 0.294092L8.0058 6.59409L1.7158 0.294092C1.52749 0.105788 1.2721 2.36434e-07 1.0058 2.38419e-07C0.739497 2.40403e-07 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.00170684 0.73779 0.00170684 1.00409C0.00170684 1.27039 0.107495 1.52579 0.295798 1.71409L6.5958 8.00409L0.295798 14.2941C0.20207 14.3871 0.127676 14.4977 0.0769072 14.6195C0.0261385 14.7414 0 14.8721 0 15.0041C0 15.1361 0.0261385 15.2668 0.0769072 15.3887C0.127676 15.5105 0.20207 15.6211 0.295798 15.7141C0.388761 15.8078 0.499362 15.8822 0.621222 15.933C0.743081 15.9838 0.873786 16.0099 1.0058 16.0099C1.13781 16.0099 1.26852 15.9838 1.39038 15.933C1.51223 15.8822 1.62284 15.8078 1.7158 15.7141L8.0058 9.41409L14.2958 15.7141C14.3888 15.8078 14.4994 15.8822 14.6212 15.933C14.7431 15.9838 14.8738 16.0099 15.0058 16.0099C15.1378 16.0099 15.2685 15.9838 15.3904 15.933C15.5122 15.8822 15.6228 15.8078 15.7158 15.7141C15.8095 15.6211 15.8839 15.5105 15.9347 15.3887C15.9855 15.2668 16.0116 15.1361 16.0116 15.0041C16.0116 14.8721 15.9855 14.7414 15.9347 14.6195C15.8839 14.4977 15.8095 14.3871 15.7158 14.2941L9.4158 8.00409Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <div className='flex flex-col justify-center items-center gap-4 w-full'>
            <div className='flex justify-center items-center '>
              <h1 className="font-[900] text-[20px] text-[#1e293c]">Update An Announcement</h1>
            </div>

            {imageError && <p className='text-red-500 text-center mt-9'>{imageError}</p>}
            {uploadError && <p className='text-blue-500 text-center mt-9'>{uploadError}</p>}

            <form className='w-full' onSubmit={handleSubmit}>
              <div className='flex justify-end items-center'>
                <input type='submit' value='Update' className='AddAnnouncebutton rounded-[4px] py-2 px-4 text-[15px] text-[#fff] font-[500] cursor-pointer mr-4'/>
              </div>
            
              <div className='flex flex-col md:flex-row justify-between items-center border-dotted border-[#1c008b] border mx-3 p-3 rounded-sm mt-5'> 
                
                  <div className='flex flex-col gap-2'>
                    <input type="file" accept='image/*' onChange={(e) => setFile(e.target.files[0])} />
                    
                    <button
                      type="button"
                      className='AddAnnouncebutton rounded-[4px] p-2 w-[50%] text-[15px] text-[#fff] font-[500]'
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
                    <div className='border p-2 border-[#1c008b] rounded-[4px] w-[100%]'>
                      <input type="text" placeholder='Enter Name Here!!' className='outline-none text-center w-[100%] bg-transparent  font-semibold'id='title' onChange={(e) => setFormData({ ...formData, title: e.target.value})} value={formData.title}/>
                    </div>
                                
                  </div>

                  
              </div>
            
              
            </form>
            {formData.image && (
              <img src={formData.image} alt="images" className='h-[300px] w-full  object-contain mt-6'/>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default UpdateAnnouncement;