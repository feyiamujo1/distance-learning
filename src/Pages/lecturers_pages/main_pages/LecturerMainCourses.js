import React from 'react'
import CourseBgImage from '../../../../src/assets/images/undraw_teacher_re_sico.svg'
// import CourseBgImage from '../../../src/assets/images/undraw_developer_activity.svg'

function LecturerMainCourses() {
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-4'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-lg font-bold text-custom-green-two'>All My Courses</h1>
                <p>Total: 4</p>
            </div>
            <div className='flex flex-wrap justify-around gap-2'>
                <div className='w-58 flex flex-col gap-4 p-6 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:opacity-70 ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='w-full rounded-md pb-2'>
                        <img className='w-full h-44 rounded-md' src={CourseBgImage} alt='coursebg'/>
                    </div>
                    <div className='border-t-2 pt-2'>
                        <p className='text-sm font-medium text-right'>Introduction to Computer</p>
                        {/* <p className='text-xs font-medium text-right'>2022/2023</p> */}
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold text-custom-green-two rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </div>
                <div className=' w-58 flex flex-col gap-4 p-6 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:opacity-70 ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='w-full rounded-md pb-2'>
                        <img className='w-full h-44 rounded-md' src={CourseBgImage} alt='coursebg'/>
                    </div>
                    <div className='border-t-2 pt-2'>
                        <p className='text-sm font-medium text-right'>Introduction to Computer</p>
                        {/* <p className='text-xs font-medium text-right'>2022/2023</p> */}
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold text-custom-green-two rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </div>
                <div className=' w-58 flex flex-col gap-4 p-6 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:opacity-70 ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='w-full rounded-md pb-2'>
                        <img className='w-full h-44 rounded-md' src={CourseBgImage} alt='coursebg'/>
                    </div>
                    <div className='border-t-2 pt-2'>
                        <p className='text-sm font-medium text-right'>Introduction to Computer</p>
                        {/* <p className='text-xs font-medium text-right'>2022/2023</p> */}
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold text-custom-green-two rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </div>
                <div className=' w-58 flex flex-col gap-4 p-6 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:opacity-70 ease-in-out duration-500 hover:-translate-y-3.5'>
                    <div className='w-full rounded-md pb-2'>
                        <img className='w-full h-44 rounded-md' src={CourseBgImage} alt='coursebg'/>
                    </div>
                    <div className='border-t-2 pt-2'>
                        <p className='text-sm font-medium text-right'>Introduction to Computer</p>
                        {/* <p className='text-xs font-medium text-right'>2022/2023</p> */}
                    </div>
                    <div className='flex justify-start'>
                        <p className=' py-1 text-sm font-bold text-custom-green-two rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LecturerMainCourses