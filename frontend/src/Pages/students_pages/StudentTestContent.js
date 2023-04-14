import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import { BsPeopleFill } from 'react-icons/bs'
// import { MdScore } from 'react-icons/md'
import { Link, useParams } from 'react-router-dom'
import StudentSubmissionDialogBox from '../../Components/students_components/StudentSubmissionDialogBox';
import useAuth from '../../hooks/UseAuth';
const baseUrl = 'http://localhost:8000'

function StudentTestContent() {
    const { auth } = useAuth();
    const token = auth.token;
    let {course_id, quiz_id} = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    const [testContent, setTestContent] = useState([]);
    const [testResponse, setTestResponse] = useState({});
    const [openDialog, setOpenDialog] = useState(false);

    
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

    const onOptionChange = (e) =>{
        setTestResponse({
            ...testResponse, [e.target.name] : parseInt(e.target.value)
        })
    }

    const submitTest = (e) =>{
        e.preventDefault();
        setOpenDialog(true);
        
    }

    console.log(testResponse);
    console.log(courseDetails)
    console.log(testContent)

  return (
    <div className='px-10 py-11 h-full'>
        {openDialog && <StudentSubmissionDialogBox setOpenDialog={setOpenDialog} testResponse={testResponse} token={token} openDialog={openDialog} />}
        <div className='w-full min-h-screen p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-bold '>{testContent?.name} - {courseDetails.name}</h1>
                            <p className='text-sm text-black font-bold'>Course Code: {courseDetails.session}</p>
                            <p className='text-sm font-bold text-custom-green-two mb-2'>Questions: {testContent?.questions?.length}</p>
                            <p className='text-custom-brown text-sm'>Instructions: <br/>
                                1. Please select on one option <br/>2. Ensure to click on submit after you select your answer 
                                <br/>3. Once you submit your answer it can't be undone                          
                            </p>
                        </div>
                        <div className='py-3 px-5 flex flex-row rounded-md items-center gap-2 bg-custom-brown'>
                            <p className='text-base font-medium text-custom-off-white'>Score: 0/20</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Test question container*/}
            <div className='flex flex-col gap-10 pb-6'>
                <form onSubmit={submitTest} className='flex flex-col gap-6'>
                    {
                        testContent?.questions ? testContent?.questions?.map((content, id) => (
                            <div key={id} className='flex flex-col gap-4 border-t pt-6'>
                                <div className='relative mb-10'>
                                    <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Question {id+1}</h3>
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <p>{content.body} </p>
                                    <form onSubmit={submitTest} className='flex flex-col gap-2'>
                                        <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit'>
                                            <input className='text-4xl cursor-pointer checked:bg-custom-green-two checked:accent-custom-green-two' type='radio' name={content.id} id={`correct_answer${id+1}`} value={content.correct_answer.id} onChange={onOptionChange} checked={testResponse[content.id] === content.correct_answer.id} />
                                            <label className='cursor-pointer peer-checked:text-custom-green-two' htmlFor={`correct_answer${id+1}`}>{content.correct_answer.body}</label>
                                        </div>
                                        <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit  '>
                                            <input className='text-4xl cursor-pointer  checked:bg-custom-green-two checked:accent-custom-green-two' type='radio' name={content.id} id={`incorrect_answers0${id+1}`} value={content.incorrect_answers[0].id} onChange={onOptionChange} checked={testResponse[content.id] === content.incorrect_answers[0].id} />
                                            <label className='cursor-pointer peer-checked:text-custom-green-two' htmlFor={`incorrect_answers0${id+1}`}>{content.incorrect_answers[0].body}</label>
                                        </div>
                                        <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit '>
                                            <input className='text-4xl cursor-pointer checked:bg-custom-green-two checked:accent-custom-green-two' type='radio' name={content.id} id={`incorrect_answers1${id+1}`} value={content.incorrect_answers[1].id} onChange={onOptionChange} checked={testResponse[content.id] === content.incorrect_answers[1].id} />
                                            <label className='cursor-pointer peer-checked:text-custom-green-two' htmlFor={`incorrect_answers1${id+1}`}>{content.incorrect_answers[1].body}</label>
                                        </div>
                                        <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit '>
                                            <input className='text-4xl cursor-pointer checked:bg-custom-green-two checked:accent-custom-green-two' type='radio' name={content.id} id={`incorrect_answers2${id+1}`} value={content.incorrect_answers[2].id} onChange={onOptionChange} checked={testResponse[content.id] === content.incorrect_answers[2].id} />
                                            <label className='cursor-pointer peer-checked:text-custom-green-two' htmlFor={`incorrect_answers2${id+1}`}>{content.incorrect_answers[2].body}</label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )) : null
                    }
                    <div className='flex flex-row justify-end w-full'>
                        <button className='text-base w-fit font-medium text-white group-hover:text-custom-off-white py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                            Submit 
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default StudentTestContent