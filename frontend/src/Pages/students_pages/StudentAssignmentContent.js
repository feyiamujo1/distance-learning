import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { HiHome } from 'react-icons/hi2'
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
const baseUrl = 'http://localhost:8000'

function StudentAssignmentContent() {
    let {course_id} = useParams();
    
    const [AssignmentDetails, setAssignmentDetails] = useState([]);
    const [courseDetails, setCourseDetails] = useState({});

    useEffect(() => {
        try {
            axios.get(baseUrl+"/classes/"+course_id+"/")
            .then((response) => {
                setAssignmentDetails(response.data.assignments)
                setCourseDetails(response.data)
            });
        } catch (error) {
            console.log(error)
        }
    }, [])
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full min-h-[50vh] p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-bold '>Assignment: {courseDetails.name}</h1>
                            <p className='text-sm text-black'>Session: {courseDetails.session}</p>
                            <p className='text-sm font-bold text-custom-green-two'>Assignments: {AssignmentDetails?.length}</p>
                        </div>
                        <Link to={'/student/courses/'+courseDetails.id} className='py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                          <HiHome className='text-base text-white'/>
                          <p className='text-base font-medium text-white group-hover:text-custom-off-white'>Course Home</p>
                        </Link>
                    </div>
                    {/* <div className='flex flex-col items-end'>
                        <p className='w-fit border-y-2 px-1.5 py-3 text-base cursor-pointer border-custom-green-two hover:text-red-600 hover:border-red-600'>View Submissions: 4</p>
                    </div> */}
                </div>
            </div>
            {/* Assignment Container */}
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-10 border-t pt-6'>
                    <div className='flex flex-col gap-4 '>
                        <div className='relative mb-10'>
                            <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Assignment 1</h3>
                        </div>
                        {/* <h2 className='text-xl font-bold'>Low Level Language</h2> */}
                        <div className='flex flex-col gap-1.5'>
                            {/* <p className='text-xs font-bold border-b-2'>Question/Descriptions</p> */}
                            <p className='text-black text-sm'>
                                Perform a research on the types of Machine learning and thoroughly explaining each type and give one example. Also provide real life applicable examples for each type.
                            </p> 
                        </div>
                        <div className=' flex flex-col gap-2'>
                            <p className='text-xs font-medium text-custom-brown'>Make Submissions here</p>
                            <input type='file' className='w-fit cursor-pointer hover:text-custom-green-two'/>
                        </div>
                    </div>
                    <div className=' flex flex-row justify-end mb-6'>
                    <p className='text-sm py-3 px-5 font-medium bg-custom-green-two cursor-pointer hover:bg-custom-brown rounded-md text-white group-hover:text-custom-off-white'>Submit</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentAssignmentContent