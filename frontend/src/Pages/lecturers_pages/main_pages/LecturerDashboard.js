import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CourseBgImage from '../../../../src/assets/images/undraw_learning_sketching.svg'
import useAuth from '../../../hooks/UseAuth';
const baseUrl = 'http://localhost:8000'


function LecturerDashboard() {
    const { auth } = useAuth();
    const lecturer_id = auth.user_id;
    const [lecturerDetails, setLecturerDetails] = useState({});

    // Fetch All Lecturer Details
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
        <div className='min-h-screen w-full p-6 bg-white rounded-md flex flex-col gap-4'>
        <h1 className='text-lg font-bold text-custom-green-two'>Recent Activity</h1>
        <div className='flex flex-wrap justify-between gap-3'>
        {
            lecturerDetails.courses ? lecturerDetails.courses.map((course, id, arr) => 
                id >= arr.length-4 ? 
                <Link to={'/lecturer/courses/' + course.id} className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
                </Link> : null
            ) : null
            
        }
        </div>
        <div className='w-full flex justify-end'>
            <Link to='/lecturer/courses' className='mt-4 py-2 w-fit text-base font-bold text-custom-green-two cursor-pointer hover:text-custom-brown'>
                View More
            </Link>
        </div>
        
        </div>
    </div>
  )
}

export default LecturerDashboard