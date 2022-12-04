import React from 'react'
import {ImHome} from 'react-icons/im'
import {MdMenuBook, MdNoteAlt, MdScore} from 'react-icons/md'
import { MdAnnouncement } from 'react-icons/md'
import {IoLogOut} from 'react-icons/io5'
import SideBarLogo from '../../assets/images/alhikmah_logo.png'

function StudentSidebar() {
  return (
    <div className='fixed bg-[#034a23] w-60 h-screen pt-5 flex flex-col justify-between'>
      <div className='flex flex-col gap-16 w-11/12 mx-auto'>
        <div className=' flex justify-center px-4 py-1'>
          <img className='w-18 h-16' src={SideBarLogo} alt='logo' />
        </div>
        <div className='flex flex-col gap-3'>
          <div className='px-4 py-1 rounded text-base font-medium text-white hover:bg-[#235335] flex flex-row gap-3 items-center cursor-pointer'>
            <ImHome  className='text-lg'/>
            <p>Dashboard</p>
          </div>
          <div className='px-4 py-1 rounded text-base font-medium text-white hover:bg-[#235335] flex flex-row gap-3 items-center cursor-pointer'>
            <MdMenuBook className='text-xl' />
            Courses
          </div>
          <div className='px-4 py-1 rounded text-base font-medium text-white hover:bg-[#235335] flex flex-row gap-3 items-center cursor-pointer'>
            <MdNoteAlt className='text-xl' />
            Assignments
          </div>
          <div className='px-4 py-1 rounded text-base font-medium text-white hover:bg-[#235335] flex flex-row gap-3 items-center cursor-pointer'>
            <MdScore className='text-xl'/>
            Tests
          </div>
          <div className='px-4 py-1 rounded text-base font-medium text-white hover:bg-[#235335] flex flex-row gap-3 items-center cursor-pointer'>
            <MdAnnouncement  className='text-lg'/>
            <p>Announcements</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-11/12 mb-6 mx-auto'>
        <div className='px-4 py-1 rounded text-base font-medium text-white hover:bg-[#235335] flex flex-row gap-3 items-center cursor-pointer'>
          <IoLogOut className='text-xl'/>
          Log Out
        </div>
      </div>
    </div>
  )
}

export default StudentSidebar