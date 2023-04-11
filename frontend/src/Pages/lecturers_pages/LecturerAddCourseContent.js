import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import useAuth from '../../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';
const baseUrl = 'http://localhost:8000'


function LecturerAddCourseContent() {
    const { auth } = useAuth();
    const token = auth.token;
    let {course_id} = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    const [newCourseContent, setNewCourseContent] = useState({content_title:'', content_description:'', attachment:''});
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
        
    }, [course_id]);
    console.log(courseDetails);
    
    // const handleChange = (e) =>{
    //     setNewCourseTextContent({
    //         ...newCourseTextContent, [e.target.name] : e.target.value
    //     })
    // }

    const handleTextChange = (e) =>{
        setNewCourseContent(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
        setNewCourseContent(prevState => ({
            ...prevState,
            'given_to' : parseInt(course_id)
        }));
    }
    const handleFileChange = (e) =>{
        setNewCourseContent(prevState => ({
            ...prevState,
            'attachment': e.target.files[0]
        }));
    }

    const setCourseContent = async () => {
        await axios({
            method: "post",
            url: 'http://localhost:8000/classes/'+course_id+'/lessons/',
            headers:{
                Authorization: `Bearer ${token}`
            },
            data: newCourseContent
        }).then((res) => {
            console.log(res);
            navigate('/lecturer/courses/'+course_id);

        }).catch((error) => {
            console.error(error)
        })
    }

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(newCourseContent)
        setCourseContent();
        // console.log(newCourseResource)
    }
    
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-6'>
            <div>
                <h1 className='text-xl font-bold '>New Lesson Content for {courseDetails?.name}</h1>
                <p className='text-sm text-black font-bold'>Course Code: {courseDetails?.session}</p>
            </div>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-base font-medium' for="course_title">Lesson Title</label>
                    <input className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' type='text' id='course_title' name='course_title' required onChange={handleTextChange}/>
                </div>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-base font-medium' for="course_title">Lesson Description</label>
                    <textarea className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' rows='6' id='course_description' name='course_description' required onChange={handleTextChange}></textarea>
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