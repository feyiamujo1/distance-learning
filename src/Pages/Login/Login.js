import React, { useState } from 'react'
import {BiUserCircle} from 'react-icons/bi'
// import {TfiEmail} from 'react-icons/tfi'
// import {} from 'react-icons/bs'
import {BiLock} from 'react-icons/bi'
import Logo from '../../assets/images/logo.png'
// import Logo_two from '../../assets/images/alhikmah_logo.jpg'
// import login_image from '../../../src/assets/images/pexels-monstera-6281893.jpg'

function Login() {
  const [userDetails, setUserDetails] = useState({email:"", password:""});

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails, [e.target.name] : e.target.value
    })
  }

  const submitHandler = (e) =>{
    e.preventDefault()
    sessionStorage.setItem('userDetails', JSON.stringify({userDetails}))
    console.log(userDetails)
    // window.location = "/"
  }

  return (
    <div className='h-screen bg-[#dedede] w-full flex items-center justify-center md:justify-between relative'>
      <nav className='absolute w-full px-3.5 lg:px-6 py-2 top-0 bg-white flex items-center shadow-nav-shadow cursor-pointer'>
        <span>
          <img className='h-14 lg:h-16' src={Logo} alt='Logo'/>
        </span>
      </nav>
      <div className='h-full w-full lg:w-7/12 flex items-center justify-center'>
            <div className='flex flex-col gap-4 justify-center h-[410px] w-11/12 sm:w-8/12 lg:w-9/12  bg-[#111820] shadow-custom p-10 rounded-md'>
                <div>
                  <h1 className='text-4xl text-white font-medium mb-1'>Login</h1>
                  <h3 className='text-base text-custombrown font-medium'>Enter your login credentials</h3>
                </div>
                <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                    <div className='group relative flex flex-row items-center rounded-md px-4 border-2 border-custombrown hover:border-customgreen'>
                      <BiUserCircle className='mr-2 text-2xl text-custombrown group-hover:text-customgreen'/>
                      <input className='w-full text-base py-4 text-white border-none bg-transparent autofill:bg-[#111820] outline-none' type="email" placeholder='Email' required name="email" id="email" onChange={handleChange}/>
                    </div>
                    <div className='group relative flex flex-row items-center rounded-md px-4 border-2 border-custombrown hover:border-customgreen'>
                      <BiLock className='mr-2.5 text-2xl text-custombrown group-hover:text-customgreen'/>
                      <input className='w-full text-base py-4 text-white caret-white border-none bg-transparent outline-none' type="password" placeholder='Password' required id="password" name="password" onChange={handleChange}/>
                    </div>
                    <div>
                      <div className='group cursor-pointer w-fit'>
                        <input className='text-4xl checked:bg-customgreen accent-customgreen' id='checkbox' type='checkbox'/>
                        <label className='ml-2.5 text-custombrown cursor-pointer font-medium group-hover:text-customgreen' for='checkbox'>Remember me</label>
                      </div>
                      <button className='bg-customgreen w-full mt-4 text-lg text-bold text-white py-2.5 rounded-md'>LOGIN</button>
                    </div>
                </form>
            </div>
          </div>
          <div className='hidden h-full bg-login-image bg-cover bg-no-repeat bg-top lg:flex lg:w-[500px] lg:justify-center lg:items-end'>
            <div className='w-full px-5 flex flex-col text-right py-3 backdrop-blur-md'>
              <p className='text-white text-xl italic font-bold'><span className='text-2xl font-extrabold'>&ldquo;</span>Learning at your convenience<span className='text-2xl font-extrabold'>&rdquo;</span></p>                            
            </div>
          </div>
    </div>
  )
}

export default Login