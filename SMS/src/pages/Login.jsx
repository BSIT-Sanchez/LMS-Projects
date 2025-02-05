import { useState } from "react"
import { Link,  useNavigate} from "react-router-dom";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { signInStart, signInSuccess, signInFailure } from "../redux/user/userSlice";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {loading, error: errorMessage} = useSelector(state => state.user);
  const [showPassword,setShowPassword] = useState(false)
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value.trim()});
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
          navigate("/Dashboard");
        
      }
    }catch(error){
      dispatch(signInFailure(error.message));
    }
  }

  const Handler = () => {
    setShowPassword(!showPassword)
  }
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 w-full h-screen  items-center ">
      <div className="bg-[#fff] h-full flex xs:justify-center lg:justify-end items-center ">
        <div className="h-[30rem] lg:w-[28rem] xs:w-full mx-12 lg:mx-0">
          <img src="/images/logo.svg" alt='logo' className="w-[146px] h-[130px]"/>
          <h1 className="text-[#1E293C] text-[30px] font-[800] tracking-tighter pt-8 pb-5">Sign<span className="pl-[3px] text-[#1E293C] text-[30px] font-[800] tracking-tighter">in</span></h1>

          <form className="w-full" onSubmit={handleSubmit}>
            <label className="text-[#363a42] font-[500] text-[13px] pb-1 pt-4">Username *</label>
            <div className="flex p-2 w-full lg:w-[80%]  border focus-within:border-[#5046E5] shadow-inner  text-[#363a42] placeholder-[#363a42]  rounded-md gap-3 pl-4 mb-4 custom-inner-shadow focus-within:bg-[#e8f0fd]">
              <img src="/images/person.svg" alt="person"/>
              <input type="text" placeholder="Username" className="outline-none w-[82%] lg:w-[85%] p-[4px] focus-within:bg-[#e8f0fd] placeholder-transparent" id="username" onChange={handleChange}/>
            </div>

            <label className="text-[#363a42] font-[500] text-[13px] pb-1 pt-4">Password *</label>
            <div className="flex p-2 border focus-within:border-[#5046E5] shadow-inner text-[#363a42] placeholder-[#363a42]  rounded-md gap-3 xs:w-full lg:w-[80%] pl-4 relative custom-inner-shadow focus-within:bg-[#e8f0fd]">
            <img src="/images/key.svg" alt="key"/>
            <input type={showPassword ? "text" : "password"}  placeholder="Password"  className="outline-none w-[82%] lg:w-[85%] p-[4px] focus-within:bg-[#e8f0fd] placeholder-transparent" id="password" onChange={handleChange}/>
                {
                  showPassword ? (
                    <IoEye className="absolute top-2 right-0 text-[#98A2B1] w-[33px] h-[33px] cursor-pointer hover:bg-slate-200 rounded-[50%] p-2" onClick={Handler}/>
                  ) : (
                    <IoEyeOff className="absolute top-2 right-0  w-[33px] h-[33px] cursor-pointer hover:bg-slate-200 rounded-[50%] p-2 text-[#1c008b]" onClick={Handler}/>
                  )
                }
            </div>
            <input type="submit" value="Sign in" className="bg-[#5046E5] rounded-2xl mt-9 p-[0.6rem] text-[#fff] font-medium cursor-pointer w-full lg:w-[80%]"/>
          </form>

        </div>

      </div>
      <div className=" hidden lg:block h-full bg-[url('/images/bgcover.jpg')] bg-center bg-cover object-cover">
        <div className="flex justify-end items-center pt-3 pr-3">
          <img src="/images/dotbg.svg" alt="bgdot" className=""/>
        </div>
        <div className="h-[20rem] w-[27rem] mt-[4rem]">
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-[#fff] text-[45px] font-[600] pl-[5rem]  mt-[4rem] leading-[2.9rem]">Student Management System</h1>
            <Link to="#" className="pl-[7rem] pt-6 text-[#fff] text-[14 px] font-semibold">Student admission click here</Link>
          </div>
        </div>

      </div>
    </div>
  )
}
export default Login