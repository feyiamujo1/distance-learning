import React from 'react'
import {HiUserCircle} from 'react-icons/hi2'

function LecturerHeader() {
  return (
    <div className='w-full shadow-md py-5 px-11 bg-white'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-bold text-[#034a23]'>Dashboard</h1>
          <div className='flex gap-2 items-center'>
            <p className='font-medium text-custom-green-two'>Hi, Feyisayo</p>
            <HiUserCircle className='text-[#034a23] text-5xl cursor-pointer hover:text-[#81a591]'/>
          </div>
        </div>
    </div>
  )
}

export default LecturerHeader