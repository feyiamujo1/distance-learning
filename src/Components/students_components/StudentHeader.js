import React from 'react'
import {HiUserCircle} from 'react-icons/hi2'

function StudentHeader() {
  return (
    <div className='w-full shadow-md py-5 px-11 bg-white'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-bold text-[#034a23]'>Student Dashboard</h1>
          <div className='flex gap-2 items-center relative cursor-pointer group overflow-none'>
            <p className='font-medium text-custom-green-two'>Hi, Feyisayo</p>
            <HiUserCircle className='text-[#034a23] text-5xl hover:text-[#81a591]'/>
            <div className='absolute hidden group-hover:block bg-white w-full shadow-md top-10 right-10 p-4'>
              <p className='border-b'>Amujoyegbe Feyisayo</p>
              <p  className='border-b'>22/03CMP001</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default StudentHeader