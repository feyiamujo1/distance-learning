import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CourseBgImage from '../../../../src/assets/images/undraw_teacher_re_sico.svg'
import useAuth from '../../../hooks/UseAuth';
const baseUrl = 'http://localhost:8000'

function LecturerMainCourses() {
    const { auth } = useAuth();
    const lecturer_id = auth.user_id;
    const [lecturerDetails, setLecturerDetails] = useState({});

    // Fetch All Student Details
    useEffect(() => {
        try {
            axios.get(baseUrl+"/teachers/"+lecturer_id+"/")
            .then((response) => {
                setLecturerDetails(response.data)
            });
        } catch (error) {
            console.log(error)
        }
        
    }, [])
    console.log(lecturerDetails)

  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-4'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-lg font-bold text-custom-green-two'>My Courses</h1>
                <p className='font-bold text-custom-green-two'>Total: {lecturerDetails?.courses?.length}</p>
            </div>
            <div className='flex flex-wrap justify-around gap-2'>
                {
                    lecturerDetails.courses ? lecturerDetails.courses.map((course, id) => (
                        <Link to={'/lecturer/courses/'+course.id} className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                            <div className='flex flex-col justify-between gap-4'>
                                <div className='w-full rounded-md pb-2'>
                                    <img className='w-full h-44 rounded-md' src={CourseBgImage} alt='coursebg'/>
                                </div>
                                <div className='border-t-2 pt-2'>
                                    <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>{course.name}</p>
                                    <p className='text-xs font-bold text-right'>Course: {course.session}</p>
                                </div>
                            </div>
                            <div className='flex justify-start'>
                                <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                                    View
                                </p>
                            </div>
                        </Link>
                    )) : null
                    
                }
                {/* <Link to='/lecturer/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
                        <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                 <Link to='/lecturer/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
                        <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/lecturer/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
                        <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/lecturer/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
                        <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/lecturer/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
                        <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/lecturer/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
                        <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/lecturer/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
                        <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link>
                <Link to='/lecturer/courses/cmp321' className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
                        <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                            View
                        </p>
                    </div>
                </Link> */}
            </div>
        </div>
    </div>
  )
}

export default LecturerMainCourses