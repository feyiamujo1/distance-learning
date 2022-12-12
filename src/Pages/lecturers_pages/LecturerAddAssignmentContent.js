import React, { useRef } from 'react'

function LecturerAddAssignmentContent() {
    // const [assignmentQuestion, setAssignmentQuestion] = useState("");
    const assignmentQuestionRef = useRef()
    let assignmentQuestion = ''
    const submitHandler = (e) => {
        e.preventDefault()
        assignmentQuestion = assignmentQuestionRef.current.value;
        console.log(assignmentQuestion)
    }


  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 pb-10 bg-white rounded-md flex flex-col gap-6'>
            <h1 className='text-xl font-bold '>Assignment 3 for Introduction to Programming</h1>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-base font-medium' for="course_title">Assignment Question</label>
                    <textarea className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' rows='10' id='assignment_question' name='assignment_question' ref={assignmentQuestionRef} required ></textarea> {/*onChange={handleChange}*/}
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

export default LecturerAddAssignmentContent