import React, { useEffect, useState } from 'react'
import {BiUserCircle} from 'react-icons/bi'
import {BiLock} from 'react-icons/bi'
import Navbar from '../Components/Navbar';
import axios from 'axios';
import useAuth from '../hooks/UseAuth';
import { useLocation, useNavigate } from 'react-router-dom';

function Login() {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [userDetails, setUserDetails] = useState("");
  const [err, setErr] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Enter your login credentials");
  const endpoint = "http://localhost:8000/users/auth/";
  const normal_notification = "text-base text-custom-brown font-medium";
  const error_notification = "text-base text-red-700 font-medium";

  const handleChange = (e) => {
    setErr(false);
    setUserDetails({
      ...userDetails, [e.target.name] : e.target.value
    })
  }

  const submitHandler = async (e) =>{
    e.preventDefault();
    console.log(userDetails);
    try {
      const response = await axios.post(endpoint, JSON.stringify(userDetails),
      {
        headers: {'Content-Type': 'application/json'},
        withCredentials: false //Prevents from sending cookies 
      });
      console.log(response);
      const token = response?.data?.token;
      const role = response?.data?.role;
      const user_id = response?.data?.user_id;
      setAuth({userDetails, user_id, role ,token});
      // console.log(role, token);
      if(response.status === 200){
        localStorage.setItem("userLoginStatus", true);
      }
      navigate('/');

    } catch (error) {
      setErr(true);
      console.log(error)
      if (!error?.response){
        setErrorMessage("No server response");
      }else if (error.response?.status === 400){
        setErrorMessage("Incorrect Username or Password");
      }else{
        setErrorMessage("Login Failed");
      }
    }
  }
  // const userLoginStatus = localStorage.getItem("userLoginStatus");
  // if (userLoginStatus === "true"){
  //   window.location = '/'
  // }

  useEffect(() => {
    setErrorMessage("Enter your login credentials")
  }, [userDetails])

  return (
    <div className='h-screen bg-[#dedede] w-full flex items-center justify-center md:justify-between relative'>
      <Navbar />
      <div className='h-full w-full lg:w-7/12 lg:pt-12 flex items-center justify-center'>
        <div className='flex flex-col gap-4 justify-center h-[410px] w-11/12 sm:w-8/12 lg:w-9/12  bg-[#111820] shadow-custom p-10 rounded-md'>
            <div>
              <h1 className='text-4xl text-white font-medium mb-3'>Login</h1>
              <h3 className={err ? error_notification : normal_notification}>{errorMessage}</h3>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
              <div className='group relative flex flex-row items-center rounded-md px-4 border-2 border-custom-brown hover:border-custom-green'>
                <BiUserCircle className='mr-2 text-2xl text-custom-brown group-hover:text-custom-green'/>
                <input className='w-full text-base py-4 text-white border-none bg-transparent autofill:bg-[#111820] outline-none caret-white' type="email" placeholder='Email' required name="username" id="username" autoComplete='off' onChange={handleChange}/>
              </div>
              <div className='group relative flex flex-row items-center rounded-md px-4 border-2 border-custom-brown hover:border-custom-green'>
                <BiLock className='mr-2.5 text-2xl text-custom-brown group-hover:text-custom-green'/>
                <input className='w-full text-base py-4 text-white caret-white border-none bg-transparent outline-none care' type="password" placeholder='Password' required id="password" name="password" onChange={handleChange}/>
              </div>
              <div>
                <div className='group cursor-pointer w-fit'>
                  <input className='text-4xl checked:bg-custom-green accent-custom-green' id='checkbox' type='checkbox'/>
                  <label className='ml-2.5 text-custom-brown cursor-pointer font-medium group-hover:text-custom-green' htmlFor='checkbox'>Remember me</label>
                </div>
                <button className='bg-custom-green w-full mt-4 text-lg text-bold text-white py-2.5 rounded-md hover:bg-custom-brown'>LOGIN</button>
              </div>
            </form>
        </div>
      </div>
      <div className='hidden h-full bg-login-image bg-cover bg-no-repeat bg-top lg:flex lg:w-[500px] lg:justify-center lg:items-end'>
        <div className='w-full px-5 flex flex-col text-right py-3'>
          <p className='text-white text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-green to-white'><span className='text-2xl font-sans font-extrabold'>&ldquo;</span>Learning at your convenience<span className='text-2xl font-extrabold'>&rdquo;</span></p>                            
        </div>
      </div>
    </div>
  )
}

export default Login