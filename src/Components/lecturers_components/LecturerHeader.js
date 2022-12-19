import React from 'react'
import {HiUserCircle} from 'react-icons/hi2'
import { Link } from 'react-router-dom'

function LecturerHeader() {
  return (
    <div className='w-full shadow-md py-5 px-11 bg-white'>
        <div className='flex justify-between items-center'>
          <h1 className='text-lg font-bold text-[#034a23]'>Lecturer's Dashboard</h1>
          <div>
            <Link to='/lecturer/details' className='flex gap-2 items-center relative cursor-pointer group overflow-none'>
              <p className='font-medium text-custom-green-two group-hover:text-custom-brown'>Hi, Feyisayo</p>
              <HiUserCircle className='text-[#034a23] text-5xl group-hover:text-custom-brown'/>
            </Link>
          </div>
        </div>
    </div>
  )
}

export default LecturerHeader