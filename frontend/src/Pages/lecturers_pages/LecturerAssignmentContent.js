import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Hll from '../../../src/assets/images/Hll.png'
// import HllVideo from '../../../src/assets/videos/Higher_level_and_lower_level_languages_Computer_Science_Wiki.mkv'
// import HllAudio from '../../../src/assets/audio/file_example_MP3_700KB.mp3'
import { HiHome } from 'react-icons/hi2'
import { Link, useParams } from 'react-router-dom'
// import PdfImage from '../../../src/assets/images/pdf.png'
import useAuth from '../../hooks/UseAuth';
const baseUrl = 'http://localhost:8000'

function LecturerAssignmentContent() {
    let {course_id} = useParams();
    
    const [AssignmentDetails, setAssignmentDetails] = useState([]);
    const [courseDetails, setCourseDetails] = useState({});
    const [AssignmentContent, setAssignmentContent] = useState([]);
    

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

    useEffect(() => {
        try {
            axios.get(baseUrl+"/assignment/"+10+"/")
            .then((response) => {
                // setAssignmentDetails(response.data.assignments)
                // setCourseDetails(response.data)
            });
        } catch (error) {
            console.log(error)
        }
    }, [])
    console.log("here")


    console.log(courseDetails)
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-bold '>Assignment:{courseDetails.name}</h1>
                            <p className='text-sm text-black font-bold'>Course Code: {courseDetails.session}</p>
                            <p className='text-sm font-bold text-custom-green-two'>Assignments: {AssignmentDetails?.length}</p>
                        </div>
                        <Link to={'/lecturer/courses/'+courseDetails.id} className='py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                          <p className='text-base font-medium text-white group-hover:text-custom-off-white'>Course Home</p>
                          <HiHome className='text-base text-white'/>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Assignment Container */}
            <div className='min-h-screen'>
                <div className='flex flex-col gap-10'>
                        <div className='flex flex-col gap-4'>
                            <div className='relative mb-10'>
                                <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Assignment 1</h3>
                            </div>
                            <div className='flex flex-col gap-1.5'>
                                <p className='text-black text-sm'>
                                    Perform a research on the types of Machine learning and thoroughly explaining each type and give one example. Also provide real life applicable examples for each type.
                                </p> 
                            </div>
                        </div>
                        <div className='flex flex-row justify-end'>
                            <Link to={'/lecturer/assignments/courseid/submission'} className='  w-fit mb-6'>
                            <p className='text-sm py-3 px-5 font-medium bg-custom-green-two cursor-pointer hover:bg-custom-brown rounded-md text-white group-hover:text-custom-off-white'>View Submissions</p>
                            </Link>
                        </div>
                </div>
            </div>
            {/* {
                AssignmentDetails ? AssignmentDetails?.map((assignment, id) => (
                <div key={id} className='flex flex-col gap-10'>
                    <div className='flex flex-col gap-4'>
                        <div className='relative mb-10'>
                            <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Assignment {id+1}</h3>
                        </div>
                        <div className='flex flex-col gap-1.5'>
                            <p className='text-black text-sm'>
                            </p> 
                        </div>
                    </div>
                    <Link to={'/lecturer/assignments/'+courseDetails.id+'/submission'} className=' flex flex-row justify-end mb-6'>
                    <p className='text-sm py-3 px-5 font-medium bg-custom-green-two cursor-pointer hover:bg-custom-brown rounded-md text-white group-hover:text-custom-off-white'>View Submissions</p>
                    </Link>
                </div>)): null
            } */}
            
        </div>
    </div>
  )
}

export default LecturerAssignmentContent