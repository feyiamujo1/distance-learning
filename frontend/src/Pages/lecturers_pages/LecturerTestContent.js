import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { BsPeopleFill } from 'react-icons/bs'
import { MdScore } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import useAuth from '../../hooks/UseAuth';
const baseUrl = 'http://localhost:8000'

function LecturerTestContent() {
    const { auth } = useAuth();
    const token = auth.token;
    let {course_id, quiz_id} = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    const [testContent, setTestContent] = useState([])
    

    // Fetch Course Content
    useEffect(() => {
        try {
            axios.get(baseUrl+"/classes/"+course_id+"/")
            .then((response) => {
                setCourseDetails(response.data)
                
            });
        } catch (error) {
            console.log(error)
        }
        
        try {
            axios.get(baseUrl+"/quizzes/"+quiz_id+"/")
            .then((response) => {
                setTestContent(response.data)
                
            });
        } catch (error) {
            console.log(error)
        }
        
    }, []);

    // Get Test ID
    // useEffect(() => {
        
    // }, [quiz_id]);
    console.log(courseDetails)
    console.log(testContent)

  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-row justify-between items-end'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold '>{testContent?.name} - {courseDetails.name}</h1>
                    <p className='text-sm text-black font-bold'>Course Code: {courseDetails.session}</p>
                    <p className='text-sm font-bold text-custom-green-two'>Questions: {testContent?.questions?.length}</p>
                </div>
                <Link to={'/lecturer/tests/'+course_id+'/scores'} className='py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                    <p className='text-base font-medium text-white group-hover:text-custom-off-white'>Show Result</p>
                    <MdScore className='text-lg text-white'/>
                </Link>
            </div>
            {/* Test question container*/}
            <div className='flex flex-col gap-10 pb-6'>
                <div className='flex flex-col gap-6'>
                    {
                        testContent?.questions ? testContent?.questions?.map((content, id) => (
                            <div key={id} className='flex flex-col gap-4'>
                                <div className='relative mb-10'>
                                    <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Question 1</h3>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <p>{content.body} </p>
                                    <div className='flex flex-col gap-2'>
                                        <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit text-custom-green-two group'>
                                            <input className='text-4xl cursor-pointer checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option1' name='question1' value={content.correct_answer.body} checked readOnly/>
                                            <label className='cursor-pointer' for='option1'>{content.correct_answer.body}</label>
                                        </div>
                                        <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit opacity-70'>
                                            <input className='text-4xl cursor-pointer' type='checkbox' id='option2' name='question1' value={content.incorrect_answers[0].body} readOnly/>
                                            <label className='cursor-pointer' for='option2'>{content.incorrect_answers[0].body}</label>
                                        </div>
                                        <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit opacity-70'>
                                            <input className='text-4xl cursor-pointer' type='checkbox' id='option3' name='question1' value={content.incorrect_answers[1].body} readOnly/>
                                            <label className='cursor-pointer' for='option3'>{content.incorrect_answers[1].body}</label>
                                        </div>
                                        <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit opacity-70'>
                                            <input className='text-4xl cursor-pointer' type='checkbox' id='option4' name='question1' value={content.incorrect_answers[2].body} readOnly/>
                                            <label className='cursor-pointer peer-checked:text-custom-green-two' for='option4'>{content.incorrect_answers[2].body}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : null
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default LecturerTestContent