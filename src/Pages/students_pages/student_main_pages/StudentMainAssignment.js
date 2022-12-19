import React from 'react'
import { Link } from 'react-router-dom'
import AssignmentBgImage from '../../../../src/assets/images/undraw_developer_activity.svg'

function StudentMainAssignment() {
  return (
    <div className='px-10 py-11 h-full'>
        <div className='min-h-screen w-full p-6 bg-white rounded-md flex flex-col gap-4'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-lg font-bold text-custom-green-two'>My Assignments</h1>
                <p className='font-bold text-custom-green-two'>Total: 4</p>
            </div>
            <div className='flex flex-wrap justify-around gap-2'>
            <Link to='/student/assignments/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='w-full rounded-md pb-2'>
                            <img className='w-full h-44 rounded-md' src={AssignmentBgImage} alt=''/>
                        </div>
                        <div className='border-t-2 pt-2'>
                            <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>Introduction to Computer</p>
                            <p className='text-xs font-bold text-right'>Assignment: CMP321</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold group-hover:text-custom-green-two rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/student/assignments/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='w-full rounded-md pb-2'>
                            <img className='w-full h-44 rounded-md' src={AssignmentBgImage} alt=''/>
                        </div>
                        <div className='border-t-2 pt-2'>
                            <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>Introduction to Computer</p>
                            <p className='text-xs font-bold text-right'>Assignment: CMP321</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold group-hover:text-custom-green-two rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/student/assignments/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='w-full rounded-md pb-2'>
                            <img className='w-full h-44 rounded-md' src={AssignmentBgImage} alt=''/>
                        </div>
                        <div className='border-t-2 pt-2'>
                            <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>Introduction to Computer</p>
                            <p className='text-xs font-bold text-right'>Assignment: CMP321</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold group-hover:text-custom-green-two rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/student/assignments/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='flex flex-col justify-between gap-4'>
                        <div className='w-full rounded-md pb-2'>
                            <img className='w-full h-44 rounded-md' src={AssignmentBgImage} alt=''/>
                        </div>
                        <div className='border-t-2 pt-2'>
                            <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>Introduction to Computer</p>
                            <p className='text-xs font-bold text-right'>Assignment: CMP321</p>
                        </div>
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold group-hover:text-custom-green-two rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default StudentMainAssignment