import React from 'react'
import { Link } from 'react-router-dom'
import CourseBgImage from '../../../../src/assets/images/undraw_teacher_re_sico.svg'

function StudentDashboard() {
  return (
    <div className='px-10 py-11 h-full flex flex-col gap-10'>
        <div className='min-h-[50vh] w-full p-6 bg-white rounded-md shadow-sm flex flex-col gap-4 justify-between'>
            <h1 className='text-lg font-bold text-custom-green-two'>Latest Announcements</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two text-sm font-bold'>5 Nov, 2022</p>
                        <p>Assignment</p>
                        <p className='font-bold'>Introduction to Computer</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two text-sm font-bold'>5 Nov, 2022</p>
                        <p>Assignment</p>
                        <p className='font-bold'>Introduction to Computer</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two text-sm font-bold'>5 Nov, 2022</p>
                        <p>Assignment</p>
                        <p className='font-bold'>Introduction to Computer</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two text-sm font-bold'>5 Nov, 2022</p>
                        <p>Assignment</p>
                        <p className='font-bold'>Introduction to Computer</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <Link to='/student/announcements' className='mt-4 pl-2 py-2 w-fit text-base font-bold text-custom-green-two cursor-pointer hover:text-custom-brown'>
                    View All
                </Link>
            </div>
        
        </div>
        <div className='min-h-fit w-full p-6 bg-white rounded-md shadow-sm flex flex-col gap-4'>
            <h1 className='text-lg font-bold text-custom-green-two'>My Latest Courses</h1>
            <div className='flex flex-wrap justify-around gap-2'>
                <Link to='/student/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='w-full rounded-md pb-2'>
                            <img className='w-full h-44 rounded-md' src={CourseBgImage} alt='coursebg'/>
                        </div>
                        <div className='border-t-2 pt-2'>
                            <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>Introduction to Computer</p>
                            <p className='text-xs font-bold text-right'>Course: CMP321</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/student/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='w-full rounded-md pb-2'>
                            <img className='w-full h-44 rounded-md' src={CourseBgImage} alt='coursebg'/>
                        </div>
                        <div className='border-t-2 pt-2'>
                            <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>Introduction to Computer</p>
                            <p className='text-xs font-bold text-right'>Course: CMP321</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/student/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='w-full rounded-md pb-2'>
                            <img className='w-full h-44 rounded-md' src={CourseBgImage} alt='coursebg'/>
                        </div>
                        <div className='border-t-2 pt-2'>
                            <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>Introduction to Computer</p>
                            <p className='text-xs font-bold text-right'>Course: CMP321</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/student/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='w-full rounded-md pb-2'>
                            <img className='w-full h-44 rounded-md' src={CourseBgImage} alt='coursebg'/>
                        </div>
                        <div className='border-t-2 pt-2'>
                            <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>Introduction to Computer</p>
                            <p className='text-xs font-bold text-right'>Course: CMP321</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
            </div>
            <div className='w-full flex justify-end'>
                <Link to='/student/courses' className='mt-4 pl-2 py-2 w-fit text-base font-bold text-custom-green-two cursor-pointer hover:text-custom-brown'>
                    View More
                </Link>
            </div>
        
        </div>
    </div>
  )
}

export default StudentDashboard