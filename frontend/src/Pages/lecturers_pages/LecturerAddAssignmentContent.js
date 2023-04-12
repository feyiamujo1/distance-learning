import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
const baseUrl = 'http://localhost:8000';

function LecturerAddAssignmentContent() {
    const { auth } = useAuth();
    const token = auth.token;
    let {course_id} = useParams();
    const [courseDetails, setCourseDetails] = useState({});
    const [assignmentData, setAssignmentData] = useState({given_to: null, title: "", body: "", attachment: null, deadline: null})
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

    // console.log(course_id);
    
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(assignmentData);
        setAssignment();
    }

    const setAssignment = async () => {
        await axios({
            method: "post",
            url: 'http://localhost:8000/assignments/',
            headers:{
                Authorization: `Bearer ${token}`
            },
            data: assignmentData
        }).then((res) => {
            console.log(res);
            navigate('/lecturer/assignment/'+course_id)

        }).catch((error) => {
            console.error(error)
        })
    }

    const handleTextChange = (e) =>{
        setAssignmentData(prevState => ({
            ...prevState,
            [e.target.name] : e.target.value
        }));
        setAssignmentData(prevState => ({
            ...prevState,
            'given_to' : parseInt(course_id)
        }));
    }
    const handleFileChange = (e) =>{
        setAssignmentData(prevState => ({
            ...prevState,
            'attachment': e.target.files[0]
        }));
    }

  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 pb-10 bg-white rounded-md flex flex-col gap-6'>
            <h1 className='text-xl font-bold '>Add new assignnment for {courseDetails.name}</h1>
            <form onSubmit={submitHandler} className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-base font-medium' htmlFor="course_title">Assignment Title</label>
                    <input type='text' className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' id='title' name='title' placeholder='Assignment on xxxxxxxxxx' onChange={handleTextChange} required /> {/*ref={assignmentResourceRef}*/}
                </div>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-base font-medium' htmlFor="course_title">Assignment Instruction</label>
                    <textarea className='p-3 rounded-md text-base outline-none border-2 hover:border-custom-green-two' rows='6' id='body' name='body'  onChange={handleTextChange} required ></textarea> {/*ref={assignmentQuestionRef}*/}
                </div>
                <div className='flex flex-col gap-2.5'>
                    <label className='text-base font-medium' htmlFor="course_title">Assignment Resource</label>
                    <input type='file' className='p-3 cursor-pointer rounded-md text-base outline-none border-2 hover:border-custom-green-two' id='attachment' name='attachment' onChange={handleFileChange}  /> {/*ref={assignmentResourceRef}*/}
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