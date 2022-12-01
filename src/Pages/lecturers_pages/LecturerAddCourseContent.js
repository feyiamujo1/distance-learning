import React, { useState } from 'react'

function LecturerAddCourseContent() {
    const [newCourseTextContent, setNewCourseTextContent] = useState({course_title:'', course_description:''});
    const [newCourseResource, setNewCourseResource] = useState();
    
    const handleChange = (e) =>{
        setNewCourseTextContent({
            ...newCourseTextContent, [e.target.name] : e.target.value
        })
    }
    const handleFileChange = (e) =>{
        setNewCourseResource(e.target.files[0])
    
    }
    const submitHandler = (e) => {
        e.preventDefault()
        console.log(newCourseTextContent)
        console.log(newCourseResource)
    }
    
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-6'>
            <h1 className='text-xl font-bold '>Lesson 3 for Introduction to Programming</h1>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-base font-medium' for="course_title">Lesson Title</label>
                    <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id='course_title' name='course_title' required onChange={handleChange}/>
                </div>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-base font-medium' for="course_title">Lesson Description</label>
                    <textarea className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' rows='6' id='course_description' name='course_description' required onChange={handleChange}></textarea>
                </div>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-base font-medium' for="course_title">Resource</label>
                    <input className='p-3 rounded-md text-base border-2 hover:border-custom-green-two' type='file' id='resource_file' name='resource_file' onChange={handleFileChange}/>
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

export default LecturerAddCourseContent