import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HiHome } from 'react-icons/hi2'
const baseUrl = 'http://localhost:8000'

const LecturersTestList = () => {
    let {course_id} = useParams();
    
    const [testDetails, setTestDetails] = useState([]);
    const [courseDetails, setCourseDetails] = useState({});
    const [testContent, setTestContent] = useState([]);
    

    useEffect(() => {
        try {
            axios.get(baseUrl+"/classes/"+course_id+"/")
            .then((response) => {
                setTestDetails(response.data.quizzes)
                setCourseDetails(response.data)
                // console.log(response.data)
            });
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        // console.log(course_id);
        try {
            axios.get(baseUrl+"/classes/course_quizzes/"+course_id+"/")
            .then((response) => {
                setTestContent(response.data)
                console.log(response.data);
            });
        } catch (error) {
            console.log(error)
        }
    }, [])
    console.log("here")

    // NOTE TO SELF - ADD A SNACK BAR NOTIFICATION TO ENSURE LECTURERS CONFIRM NUMBER OF QUESTIONS BEFORE CLICKING THE PUBLISH BUTTON

    // console.log(courseDetails)
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2 pb-6 border-b'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-bold '>Test: {courseDetails.name}</h1>
                            <p className='text-sm text-black font-bold'>Course Code: {courseDetails.session}</p>
                            <p className='text-sm font-bold text-custom-green-two'>Test: {testDetails?.length}</p>
                        </div>
                        <Link to={'/lecturer/courses/'+courseDetails.id} className='py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                          <p className='text-base font-medium text-white group-hover:text-custom-off-white'>Course Home</p>
                          <HiHome className='text-base text-white'/>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Test List Container */}
            <div className='min-h-screen space-y-6 '>
                {   
                    testContent ? testContent.map((content, id) => (
                        <div key={id} className='flex flex-col gap-6 border-b'>
                            <div className='flex flex-col gap-4'>
                                <div className='relative mb-10'>
                                    <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Test {id + 1}</h3>
                                </div>
                                <div className='flex flex-col gap-1.5'>
                                    <p className='text-black text-sm'>
                                        Number of questions: {content.questions_count}
                                    </p> 
                                </div>
                            </div>
                            <div className='flex flex-row w-full justify-between'>
                                <Link to={'/lecturer/tests/'+course_id+'/'+content.id} className='w-fit mb-6'>
                                    <p className='text-sm py-3 px-5 font-medium bg-custom-green-two cursor-pointer hover:bg-custom-brown rounded-md text-white group-hover:text-custom-off-white'>View Questions</p>
                                </Link>
                                <Link to={'/lecturer/tests/'+course_id+'/scores'} className='w-fit mb-6'>
                                    <p className='text-sm py-3 px-5 font-medium bg-custom-green-two cursor-pointer hover:bg-custom-brown rounded-md text-white group-hover:text-custom-off-white'>View Results</p>
                                </Link>
                            </div>
                        </div>
                    )) : null
                }
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

export default LecturersTestList