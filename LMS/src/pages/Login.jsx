import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";


const Login = () => {
  const {currentUser} = useSelector(state => state.user)
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim()});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!formData.username || !formData.password){
      return dispatch(signInFailure('Invalid login, please try again'));
    }
    try{
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if(data.success === false){
        dispatch(signInFailure(data.message));
      }
      if(res.ok){
        dispatch(signInSuccess(data));
        navigate('/Home');
      }
    }catch(error){
      dispatch(signInFailure(error.message));
    }
  }

  const [showPassword,setShowPassword] = useState(false)
  const [modal, setModal] = useState(false)

  const handlerModal = () => {
    setModal(!modal)
  }

  const Handler = () => {
    setShowPassword(!showPassword)
  }
  return(
    <div className="bgImage h-screen w-full flex justify-center items-center fixed left-0 top-0 overflow-hidden overflow-y-scroll shadow-2xl">
      <div className={errorMessage ? 'bg-[#ffffff] h-[120%] w-[28rem] mb-[2rem] rounded-lg px-10' : 'bg-[#ffffff] h-[110%] w-[28rem] mb-[2rem] rounded-lg px-10'}>
        <div className="mt-[6.5rem] flex justify-center  items-center">
          <img src="/images/logo.svg" alt="logo" className="h-[100px]"/>
        </div>
        {
          errorMessage && 
          <div className="bg-[#fdeded] text-[#855856] rounded-md w-full p-3 mt-5">
          <p className="font-[600] text-[15px] ">{errorMessage}</p>
        </div>
        }
        
        
        <form className="mt-5 mb-8" onSubmit={handleSubmit}>
          <div className="flex p-2 border focus-within:border-[#d2d6db] shadow-inner text-[#363a42] placeholder-[#363a42]  rounded-md gap-3 w-full pl-4 relative custom-inner-shadow focus-within:bg-[#e8f0fd]placeholder-transparent mb-4">
              <img src="/images/person.svg" alt="person"/>
              <input type="text" placeholder="Username" className=" outline-none w-[85%] p-[4px] placeholder-transparent" id="username" onChange={handleChange} defaultValue={currentUser.username}/>
          </div>

          <div className="flex p-2 border focus-within:border-[#d2d6db] shadow-inner text-[#363a42] placeholder-[#363a42]  rounded-md gap-3 w-full pl-4 relative custom-inner-shadow focus-within:bg-[#e8f0fd]">
            <img src="/images/key.svg" alt="key"/>
            <input type={showPassword ? "text" : "password"}  placeholder="Password"  className="outline-none w-[85%] p-[4px] focus-within:bg-[#e8f0fd] placeholder-transparent" id="password" onChange={handleChange} />
                {
                  showPassword ? (
                    <IoEye className="absolute top-2 right-0 text-[#98A2B1] w-[33px] h-[33px] cursor-pointer hover:bg-slate-200 rounded-[50%] p-2" onClick={Handler}/>
                  ) : (
                    <IoEyeOff className="absolute top-2 right-0  w-[33px] h-[33px] cursor-pointer hover:bg-slate-200 rounded-[50%] p-2 text-[#1c008b]" onClick={Handler}/>
                  )
                }
          </div>

          <p className="text-center text-[#9da5b2] font-[500] text-[17px] pt-1">Forgotten your username or password?</p>

          <input type="submit" value="Log in" className="w-full p-4 loginbutton mt-4 rounded-md text-[#fff] cursor-pointer font-semibold "/>
        </form>
        <ol className="list-decimal list-inside space-y-1 bg-[#e8f0fd] py-6 px-2 rounded-md">
          <p className="text-[#020c66] text-[13px] font-bold pl-2">INSTRUCTIONS</p>
          <li className="text-[#020c66] text-[13px] font-[400] pl-10 whitespace-pre">BCP SMS and LMS are using same username <br/>    and password.</li>
          <li className="text-[#020c66] text-[13px] font-[400] pl-10 whitespace-pre">Visit Ascendens Asia office at BCP  MV <br/>    Campus or Bulacan Campus if you are having <br/>    hard times logging in to your account.</li>
        </ol>
      </div>

      <div className="fixed bottom-[1.5rem] right-[2.5rem] bg-[#020633] p-1 text-[#fff] font-medium text-[14px] flex justify-start items-center  rounded-[.5rem] px-3 gap-1 cursor-pointer" onClick={handlerModal} >
        <svg
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    className="text-current"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 13V15"
    ></path>
    <circle
      cx="12"
      cy="9"
      r="1"
      fill="currentColor"
    ></circle>
    <circle
      cx="12"
      cy="12"
      r="7.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    ></circle>
        </svg>
        <p>Cookies notice</p>
      </div>
      
      {/**Modal */}
      {
        modal && 
        <div className=" w-full h-[100%] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="bg-white w-[33rem] h-[80%] -mt-16 rounded-md ">
            <div className="flex justify-between items-center px-4 py-4">
              <h1 className="font-bold text-[15px]">Cookies must be enabled in your browser</h1>
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

            <div className="border-y-[1px] w-[33rem] px-4 py-4">
              <p className="pb-5">Two cookies are used on this site:</p>
              <p className="pb-5">The essential one is the session cookie, usually called MoodleSession. You must allow this cookie in your browser to provide continuity and to remain logged in when browsing the site. When you log out or close the browser, this cookie is destroyed (in your browser and on the server).</p>
              <p>The other cookie is purely for convenience, usually called MOODLEID or similar. It just remembers your username in the browser. This means that when you return to this site, the username field on the login page is already filled in for you. It is safe to refuse this cookie - you will just have to retype your username each time you log in.</p>
            </div>
            <div className="flex justify-end items-center">
              <button className="loginbutton w-[4rem] h-[3rem] rounded-[10px] text-[#fff] my-4  mr-4" onClick={handlerModal}>OK</button>
            </div>

          </div>
        </div>
      }
      
    </div>
  )
}
export default Login