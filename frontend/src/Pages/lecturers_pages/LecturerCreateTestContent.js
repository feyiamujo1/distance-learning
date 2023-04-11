import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
const baseUrl = 'http://localhost:8000';

function LecturerCreateTestContent() {
    const [testQuestion, setTestQuestion] = useState({});

    const [testBody, setTestBody] = useState({}); 
    const [testAnswer, setTestAnswer] = useState({});
    const [wrongAnswerOne, setWrongAnswerOne] = useState({});
    const [wrongAnswerTwo, setWrongAnswerTwo] = useState({});
    const [wrongAnswerThree, setWrongAnswerThree] = useState({});
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [questionCount, setQuestionCount] = useState(1);
    const [showQuestionInput, setShowQuestionInput] = useState(false);
    // const [quizIdGotten, setQuizIdGotten] = useState(false);

    // useRef
    

    const { auth } = useAuth();
    const token = auth.token;
    let {course_id} = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    const [quizId, setQuizId] = useState();
    const [quizReqInfo, setQuizReqInfo] = useState({name: "", created_for:""});
    const navigate = useNavigate();

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
        
        setQuizReqInfo(prevState => ({
            ...prevState,
            created_for : course_id
        }));
        
    }, [course_id]);


    useEffect(() => {
    
      setQuizReqInfo(prevState => ({
        ...prevState,
        name : `Test ${courseDetails?.quizzes?.length + 1}`
        }));

    }, [courseDetails?.quizzes])
    

    const getTestId = async () => {
        await axios({
            method: "post",
            url: 'http://localhost:8000/quizzes/create/',
            headers:{
                Authorization: `Bearer ${token}`
            },
            data: quizReqInfo
        }).then((res) => {
            setQuizId(res.data['id']);

        }).catch((error) => {
            console.error(error)
        })
    }
    
    useEffect(() => {
        console.log(quizId)
    }, [quizId])
    

    const handleBodyChange = (e) =>{
        setTestBody(
            {
                ...testBody, [e.target.name] : e.target.value
            }
        )
    }
    
    const handleAnswerChange =(e) =>{
        setTestAnswer({
            ...testAnswer, [e.target.name] : e.target.value
          })
    }
    const handleIncorrectAnswerOneChange =(e) =>{
        setWrongAnswerOne({
            ...wrongAnswerOne, [e.target.name] : e.target.value
          })
    }
    const handleIncorrectAnswerTwoChange =(e) =>{
        setWrongAnswerTwo({
            ...wrongAnswerTwo, [e.target.name] : e.target.value
          })
    }
    const handleIncorrectAnswerThreeChange =(e) =>{
        setWrongAnswerThree({
            ...wrongAnswerThree, [e.target.name] : e.target.value
        })
    }

    let questions = [];

    const SubmitTest = (e) => {
        e.preventDefault();
        for (let i=0; i<questionCount; i++){
            questions.push(
                {
                    body: testBody[`body${i}`],
                    answer: testAnswer[`answer${i}`],
                    incorrect_answers: [wrongAnswerOne[`wrong_answer${i}0`], wrongAnswerTwo[`wrong_answer${i}1`], wrongAnswerThree[`wrong_answer${i}2`]]
                }
            );
        }
        sendTestQuestion(questions);
    }

    const sendTestQuestion = async (question_list) =>{
        console.log(question_list);
        await axios({
            method: "post",
            url: 'http://localhost:8000/quizzes/create_with_questions/',
            headers:{
                Authorization: `Bearer ${token}`
            },
            data: { 
                quiz_id: quizId,
                questions: question_list
            }
        }).then((res) => {
            console.log(res);
            navigate("/lecturer/courses/"+course_id)
            // document.getElementById('myform').reset();
            // document.getElementById('myform').reset();
            // Add snack bar here for success

            
        }).catch((error) => {
            console.error(error);
            // Add snack bar here for failure
        })
    }

    const displayQuestionInput = (e) =>{
        e.preventDefault();
        getTestId();
        // numberOfQuestions >= 1 ? setShowQuestionInput(true) : setShowQuestionInput(false);
    }
    
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full min-h-screen p-6 bg-white rounded-md flex flex-col gap-10'>
            <div>
                <h1 className='text-xl font-bold mb-2'>{courseDetails.name} : Test {courseDetails?.quizzes?.length + 1} </h1>
                <form id="numberOfQuestionsForm" onSubmit={displayQuestionInput} className='flex flex-col gap-2'>
                    <label>Confirm the number of question before starting</label> 
                    <div>
                        <input className='w-24 rounded-md outline-none border-2 border-custom-brown hover:border-custom-green-two px-4 py-1.5 mr-2' onChange={e => setNumberOfQuestions(e.target.value)} type='number' min='1' max='100' required/>
                        <button className='w-fit px-4 py-2 bg-custom-green-two hover:bg-custom-brown text-white rounded-md font-medium' type='submit'>Confirm</button>
                    </div>
                </form>
            </div>
            <form onSubmit={SubmitTest} className='flex flex-col gap-10'>
                {Array.apply(null, {length: questionCount}).map((e, i)=>(
                <div className='flex flex-col gap-5'>
                    <div>
                        <div className='relative mb-10'>
                            <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Question {i+1}</h3>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2.5'>
                        <label className='text-base font-medium' htmlFor="body0">Enter Question below</label>
                        <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two test_input' type='text' id={`body${i}`} name={`body${i}`} onChange={handleBodyChange} value={testBody[`body${i}`]} required />
                    </div>    
                    <div className='flex flex-wrap gap-2 justify-between'>
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' htmlFor="answer1">Answer</label>
                            <input autoComplete='off' className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two test_input' type='text' id={`answer${i}`} name={`answer${i}`} onChange={handleAnswerChange} value={testAnswer[`answer${i}`]} required />
                        </div>    
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' htmlFor="wrong_answer0">Option 1</label>
                            <input autoComplete="off" className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two test_input' type='text' id={`wrong_answer${i}0`} name={`wrong_answer${i}0`} onChange={handleIncorrectAnswerOneChange} value={wrongAnswerOne[`wrong_answer${i}0`]} required />
                        </div>    
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' htmlFor="wrong_answer1">Option 2</label>
                            <input autoComplete="off" className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two test_input' type='text' id={`wrong_answer${i}1`} name={`wrong_answer${i}1`} onChange={handleIncorrectAnswerTwoChange} value={wrongAnswerTwo[`wrong_answer${i}1`]} required />
                        </div>    
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' htmlFor="wrong_answer2">Option 3</label>
                            <input autoComplete="off" className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two test_input' type='text' id={`wrong_answer${i}2`} name={`wrong_answer${i}2`} onChange={handleIncorrectAnswerThreeChange} value={wrongAnswerThree[`wrong_answer${i}2`]} required />
                        </div>  
                    </div>
                </div> 
                ))}   
                 <div className='flex justify-end'>
                    {
                        questionCount >= numberOfQuestions ? (
                            <div className='mb-4 flex justify-end'>
                                <button type='submit' className='p-4 bg-custom-green-two hover:bg-custom-brown rounded-md text-white hover:text-custom-off-white cursor-pointer'>
                                    Publish Content
                                </button>
                             </div>
                        ) : (
                            <button type='button' className='p-4 bg-custom-green-two hover:bg-custom-brown rounded-md text-white hover:text-custom-off-white cursor-pointer' onClick={()=>setQuestionCount(questionCount+1)}>
                                Add More
                            </button>
                        )
                    }     
                </div> 
            </form>
            
        </div>
    </div>
  )
}

export default LecturerCreateTestContent