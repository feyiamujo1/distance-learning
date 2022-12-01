import React, { useState } from 'react'
import {BiUserCircle} from 'react-icons/bi'
import {BiLock} from 'react-icons/bi'
import Navbar from '../Components/Navbar';

function Login() {
  const [userDetails, setUserDetails] = useState({email:"", password:""});

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails, [e.target.name] : e.target.value
    })
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    // sessionStorage.setItem('userDetails', JSON.stringify({userDetails}))
    console.log(userDetails)
    // window.location = "/"
  }

  return (
    <div className='h-screen bg-[#dedede] w-full flex items-center justify-center md:justify-between relative'>
      <Navbar />
      <div className='h-full w-full lg:w-7/12 flex items-center justify-center'>
        <div className='flex flex-col gap-4 justify-center h-[410px] w-11/12 sm:w-8/12 lg:w-9/12  bg-[#111820] shadow-custom p-10 rounded-md'>
            <div>
              <h1 className='text-4xl text-white font-medium mb-1'>Login</h1>
              <h3 className='text-base text-custom-brown font-medium'>Enter your login credentials</h3>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
              <div className='group relative flex flex-row items-center rounded-md px-4 border-2 border-custom-brown hover:border-custom-green'>
                <BiUserCircle className='mr-2 text-2xl text-custom-brown group-hover:text-custom-green'/>
                <input className='w-full text-base py-4 text-white border-none bg-transparent autofill:bg-[#111820] outline-none' type="email" placeholder='Email' required name="email" id="email" onChange={handleChange}/>
              </div>
              <div className='group relative flex flex-row items-center rounded-md px-4 border-2 border-custom-brown hover:border-custom-green'>
                <BiLock className='mr-2.5 text-2xl text-custom-brown group-hover:text-custom-green'/>
                <input className='w-full text-base py-4 text-white caret-white border-none bg-transparent outline-none' type="password" placeholder='Password' required id="password" name="password" onChange={handleChange}/>
              </div>
              <div>
                <div className='group cursor-pointer w-fit'>
                  <input className='text-4xl checked:bg-custom-green accent-custom-green' id='checkbox' type='checkbox'/>
                  <label className='ml-2.5 text-custom-brown cursor-pointer font-medium group-hover:text-custom-green' for='checkbox'>Remember me</label>
                </div>
                <button className='bg-custom-green w-full mt-4 text-lg text-bold text-white py-2.5 rounded-md hover:bg-custom-brown'>LOGIN</button>
              </div>
            </form>
        </div>
      </div>
      <div className='hidden h-full bg-login-image bg-cover bg-no-repeat bg-top lg:flex lg:w-[500px] lg:justify-center lg:items-end'>
        <div className='w-full px-5 flex flex-col text-right py-3 backdrop-blur-md'>
          <p className='text-white text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-custom-green to-white'><span className='text-2xl font-sans font-extrabold'>&ldquo;</span>Learning at your convenience<span className='text-2xl font-extrabold'>&rdquo;</span></p>                            
        </div>
      </div>
    </div>
  )
}

export default Login