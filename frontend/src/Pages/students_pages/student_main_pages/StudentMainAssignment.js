import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AssignmentBgImage from '../../../../src/assets/images/undraw_developer_activity.svg'
import useAuth from '../../../hooks/UseAuth';
const baseUrl = 'http://localhost:8000'

function StudentMainAssignment() {
    const { auth } = useAuth();
    const token  = auth.token;
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    
    const [studentAssignmentDetails, setStudentAssignmentDetails] = useState([]);
    
    async function fetchData() {
        let response = await axios.get(baseUrl+"/classes/courses_with_assignments/", config);
        // let user = response.data;// Don't need await here
        // setProduct(user);
        console.log(response.data.data);
        setStudentAssignmentDetails(response.data.data);
    }
    useEffect(() => {
        fetchData();
    }, [])
    console.log(typeof studentAssignmentDetails)
  return (
    <div className='px-10 py-11 h-full'>
        <div className='min-h-screen w-full p-6 bg-white rounded-md flex flex-col gap-4'>
            <div className='flex flex-row justify-between'>
                <h1 className='text-lg font-bold text-custom-green-two'>My Assignments</h1>
                <p className='font-bold text-custom-green-two'>Total: {studentAssignmentDetails.length}</p>
            </div>
            <div className='flex flex-wrap justify-around gap-2'>
                {
                    studentAssignmentDetails?.map((assignment, id) => (
                    <Link key={id} to={'/student/assignments/'+assignment.id} className='w-[230px] h-fit flex flex-col justify-between gap-4 py-6 px-5 pb-4 mb-5 box-border shadow-nav-shadow rounded-md group cursor-pointer hover:bg-custom-off-white ease-in-out duration-500 hover:-translate-y-3.5'>
                        <div className='flex flex-col justify-between gap-4'>
                            <div className='w-full rounded-md pb-2'>
                                <img className='w-full h-44 rounded-md' src={AssignmentBgImage} alt='coursebg'/>
                            </div>
                            <div className='border-t-2 pt-2'>
                                <p className='text-sm font-bold text-right group-hover:text-custom-green-two'>{assignment.name}</p>
                                <p className='text-xs font-bold text-right'>Course: {assignment.session}</p>
                            </div>
                        </div>
                        <div className='flex justify-start'>
                            <p className=' py-1 text-sm font-bold rounded-md group-hover:text-custom-brown'>
                                View
                            </p>
                        </div>
                    </Link>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default StudentMainAssignment