import React, { useEffect, useState } from 'react'

function LecturerCreateTestContent() {
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [showQuestionInput, setShowQuestionInput] = useState(false)

    useEffect(() => {
      console.log(numberOfQuestions)
      console.log(showQuestionInput)
    }, [showQuestionInput])
    

    const displayQuestionInput = (e) =>{
        e.preventDefault()
        numberOfQuestions>0 ? setShowQuestionInput(true) : setShowQuestionInput(false)
    }
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full min-h-screen p-6 bg-white rounded-md flex flex-col gap-10'>
            <div>
                <h1 className='text-xl font-bold mb-2'>Create Test Questions for Introduction to Programming</h1>
                <form onSubmit={displayQuestionInput} className='flex flex-col gap-2'>
                    <label>Enter Number of Question here</label> 
                    <div>
                        <input className='w-24 rounded-md outline-none border-2 border-custom-brown hover:border-custom-green-two px-4 py-1.5 mr-2' onChange={e => setNumberOfQuestions(e.target.value)} type='number' min='0' max='100'/>
                        <button className='w-fit px-4 py-2 bg-custom-green-two hover:bg-custom-brown text-white rounded-md font-medium' type='submit'>Confirm</button>
                    </div>
                </form>
            </div>
            {showQuestionInput && numberOfQuestions}
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2.5'>
                    <div>
                        <div className='relative mb-10'>
                            <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Question 1</h3>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2.5'>
                        <label className='text-base font-medium' for="Question_one">Enter Question below</label>
                        <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id='Question_one' name='Question_one' required />
                    </div>    
                    <div className='flex flex-wrap gap-2 justify-between'>
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' for="Question_one_option_one">Option 1</label>
                            <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id='Question_one_option_one' name='Question_one_option_one' required />
                        </div>    
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' for="Question_two">Option 2</label>
                            <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id='Question_two_option_two' name='Question_two_option_two' required />
                        </div>    
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' for="Question_three">Option 3</label>
                            <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id='Question_three_option_three' name='Question_three_option_three' required />
                        </div>    
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' for="Question_four">Option 4</label>
                            <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id='course_title' name='Question_four_option_four' required />
                        </div>  
                        <div className='flex flex-col gap-2.5'>
                            <label className='text-base font-medium' for="correct_answer_one">Correct Answer of the four options</label>
                            <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id='correct_answer_one' name='correct_answer_one' required />
                        </div> 
                    </div>
                </div>
                <div className='mb-4 flex justify-end'>
                    <button className='p-4 bg-custom-green-two hover:bg-custom-brown rounded-md text-white hover:text-custom-off-white cursor-pointer '>
                        Publish Content
                    </button>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default LecturerCreateTestContent