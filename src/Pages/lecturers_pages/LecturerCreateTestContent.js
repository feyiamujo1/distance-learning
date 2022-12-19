import React, { useState } from 'react'

function LecturerCreateTestContent() {
    const [testQuestion, setTestQuestion] = useState({});
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [showQuestionInput, setShowQuestionInput] = useState(false)

    const handleChange = (e) =>{
        setTestQuestion(
            {
                ...testQuestion, [e.target.name] : e.target.value
            }
        )
    }

    const displayQuestionInput = (e) =>{
        e.preventDefault();
        numberOfQuestions >= 1 ? setShowQuestionInput(true) : setShowQuestionInput(false);
    }
    
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full min-h-screen p-6 bg-white rounded-md flex flex-col gap-10'>
            <div>
                <h1 className='text-xl font-bold mb-2'>Test 1: Introduction to Programming</h1>
                <form onSubmit={displayQuestionInput} className='flex flex-col gap-2'>
                    <label>Confirm the number of question before starting</label> 
                    <div>
                        <input className='w-24 rounded-md outline-none border-2 border-custom-brown hover:border-custom-green-two px-4 py-1.5 mr-2' onChange={e => setNumberOfQuestions(e.target.value)} type='number' min='1' max='100' required/>
                        <button className='w-fit px-4 py-2 bg-custom-green-two hover:bg-custom-brown text-white rounded-md font-medium' type='submit'>Confirm</button>
                    </div>
                </form>
            </div>
            <form className='flex flex-col gap-4'>
                {showQuestionInput && Array.apply(null, {length: numberOfQuestions}).map((e, i)=>(
                    <div className='flex flex-col gap-2.5'>
                        <div>
                            <div className='relative mb-10'>
                                <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Question {i+1}</h3>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' for="Question_one">Enter Question below</label>
                            <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id={`Question${i+1}`} name={`Question${i+1}`} value={testQuestion[`Question${i+1}`]} onChange={handleChange} required />
                        </div>    
                        <div className='flex flex-wrap gap-2 justify-between'>
                            <div className='flex flex-col gap-2.5'>
                                <label className='text-base font-medium' for="Question_one_option_one">Option 1</label>
                                <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id={`Question[${i+1}][1]`} name={`Question[${i+1}][1]`} value={testQuestion[`Question[${i+1}][1]`]} onChange={handleChange} required />
                            </div>    
                            <div className='flex flex-col gap-2.5'>
                                <label className='text-base font-medium' for="Question_two">Option 2</label>
                                <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id={`Question[${i+1}][2]`} name={`Question[${i+1}][2]`} value={testQuestion[`Question[${i+1}][2]`]} onChange={handleChange} required />
                            </div>    
                            <div className='flex flex-col gap-2.5'>
                                <label className='text-base font-medium' for="Question_three">Option 3</label>
                                <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id={`Question[${i+1}][3]`} name={`Question[${i+1}][3]`} value={testQuestion[`Question[${i+1}][3]`]} onChange={handleChange} required />
                            </div>    
                            <div className='flex flex-col gap-2.5'>
                                <label className='text-base font-medium' for="Question_four">Answer</label>
                                <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id={`Answer[${i+1}][4]`} name={`Question[${i+1}][4]`} value={testQuestion[`Question[${i+1}][4]`]} onChange={handleChange} required />
                            </div>  
                        </div>
                    </div>    
                ))}
                
                {showQuestionInput && 
                    <div className='mb-4 flex justify-end'>
                        <button className='p-4 bg-custom-green-two hover:bg-custom-brown rounded-md text-white hover:text-custom-off-white cursor-pointer '>
                            Publish Content
                        </button>
                    </div>
                }
            </form>
            
        </div>
    </div>
  )
}

export default LecturerCreateTestContent