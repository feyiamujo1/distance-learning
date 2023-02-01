import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CourseBgImage from '../../../../src/assets/images/undraw_teacher_re_sico.svg'
import axios from 'axios'
import useAuth from '../../../hooks/UseAuth'
const baseUrl = 'http://localhost:8000'

function StudentMainCourse() {
    const { auth } = useAuth();
    const student_id = auth.user_id;
    const [studentDetails, setStudentDetails] = useState({});
    
    // Fetch All Student Details
    useEffect(() => {
        try {
            axios.get(baseUrl+"/students/"+student_id+"/")
            .then((response) => {
                setStudentDetails(response.data)
            });
        } catch (error) {
            console.log(error)
        }
        
    }, [])
    console.log(studentDetails)

  return (
    <div className='px-10 py-11 h-full'>
        <div className='min-h-screen w-full p-6 bg-white rounded-md flex flex-col gap-4'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-lg font-bold text-custom-green-two'>Enrolled Courses</h1>
                <p className='font-bold text-custom-green-two'>Total: 4</p>
            </div>
            <div className='flex flex-wrap justify-around gap-2'>
                {   
                    studentDetails.courses ? studentDetails.courses.map((course, id) => (
                        <Link key={id} to={'/student/courses/'+course.id} className='w-[230px] flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
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
            </div>
        </div>
    </div>
  )
}

export default StudentMainCourse