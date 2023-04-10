import React, { useEffect, useState } from 'react'
import {ImHome} from 'react-icons/im'
import {MdMenuBook, MdNoteAlt, MdScore} from 'react-icons/md'
import {IoLogOut} from 'react-icons/io5'
import SideBarLogo from '../../../src/assets/images/alhikmah_logo.png'
import { Link, NavLink, useLocation } from 'react-router-dom'

function LecturerSidebar() {
  const location = useLocation().pathname;
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(location);
    window.scrollTo({top:0, left:0, behavior: 'smooth'});
  }, [location])
  

  // Class properties for the navlinks
  const normalNavLink = 'px-4 py-1 rounded text-base font-medium text-white hover:bg-[#235345] hover:text-custom-off-white flex flex-row gap-3 items-center cursor-pointer'
  const ActiveNavLink = 'px-4 py-1 rounded text-base font-medium text-custom-off-white bg-[#235335] hover:bg-[#235345] hover:text-white flex flex-row gap-3 items-center cursor-pointer'

  return (
    <div className='fixed bg-[#034a23] w-60 h-screen pt-5 flex flex-col justify-between'>
      <div className='flex flex-col gap-16 w-11/12 mx-auto'>
        <div className=' flex justify-center px-4 py-1'>
          <img className='w-18 h-16' src={SideBarLogo} alt='logo' />
        </div>
        <div className='flex flex-col gap-3'>
          <NavLink to='/' className= {path.includes("dashboard") || path === "dashboard"
                ? ActiveNavLink
                : normalNavLink}>
            <ImHome  className='text-lg'/>
            <p>Dashboard</p>
          </NavLink>
          <NavLink to='/lecturer/courses' className= {path.includes("courses") || path === "courses" 
                ? ActiveNavLink
                : normalNavLink}>
            <MdMenuBook className='text-xl' />
            Courses
          </NavLink>
          <NavLink to='/lecturer/assignments' className= {path.includes("assignments") || path === "assignments" 
                ? ActiveNavLink
                : normalNavLink}>
            <MdNoteAlt className='text-xl' />
            Assignments
          </NavLink>
          <NavLink to='/lecturer/tests' className= {path.includes("tests") || path === "tests" 
                ? ActiveNavLink
                : normalNavLink}>
            <MdScore className='text-xl'/>
            Tests
          </NavLink>
        </div>
      </div>
      <div className='flex flex-col w-11/12 mb-6 mx-auto'>
        <Link to='/login' className='px-4 py-1 rounded text-base font-medium text-white hover:bg-[#235345] flex flex-row gap-3 items-center cursor-pointer'>
          <IoLogOut className='text-xl'/>
          Log Out
        </Link>
      </div>
    </div>
  )
}

export default LecturerSidebar