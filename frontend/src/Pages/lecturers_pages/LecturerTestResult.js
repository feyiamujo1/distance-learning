import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../hooks/UseAuth';
import { HiHome } from 'react-icons/hi2'
const baseUrl = 'http://localhost:8000'

function LecturerTestResult() {
    const [testScoreList, setTestScoreList] = useState([]);
    // const { auth } = useAuth();
    // const token = auth.token;
    let {course_id, quiz_id} = useParams();
    const [courseDetails, setCourseDetails] = useState({});

    useEffect(() => {
        try {
            axios.get(baseUrl+"/classes/"+course_id+"/")
            .then((response) => {
                setCourseDetails(response.data)
                console.log(courseDetails)
            });
        } catch (error) {
            console.log(error)
        }
    }, [])

    useEffect(() => {
        try {
            axios.get(baseUrl+"/quizzes/detail/"+quiz_id+"/")
            .then((response) => {
                setTestScoreList(response.data);
            });
        } catch (error) {
            console.log(error)
        }
    }, [])

  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 min-h-screen bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-row justify-between items-end'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold '>Test: {courseDetails.name}</h1>
                    <p className='text-sm text-black font-bold'>Course Code: {courseDetails.session}</p>
                    <p className='text-sm font-bold text-custom-green-two'>Number of Submissions: {testScoreList?.length}</p>
                </div>
                <Link to={'/lecturer/tests/'+course_id+'/list/'} className='py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                    <p className='text-base font-medium text-white group-hover:text-custom-off-white'>Test Home</p>
                    <HiHome className='text-lg text-white'/>
                </Link>
            </div>
            <div>
                <div className='w-full box-border'>
                    <table className='w-full flex flex-col'>
                        <tr className='w-full flex flex-row  text-base text-white text-left items-center bg-custom-green-two border-b border-x border-custom-green-two'>
                            <th className='w-14 text-center p-2'>S/N</th>
                            <th className='w-44 border-l py-2 px-4'>Full name</th>
                            <th className='w-36 border-l py-2 px-4'>Matric No.</th>
                            <th className='border-l py-2 px-4'>Email</th>
                        </tr>
                        {
                            testScoreList.length > 0 ? testScoreList.map((student, index) =>
                            <tr className='w-full flex flex-row text-left gap-6 items-center'>
                                <td className='w-6 text-center'>{index + 1}</td>
                                <td className='w-44'><span>{student.firstname + " " + student.lastname}</span></td> 
                                <td className='w-36'>22/03CMP001</td>
                                <td className='text-custom-green-two font-bold'>15/20</td>                

                            </tr>
                        )
                            : <p className='text-red-700 font-medium text-center py-2'>No student result found</p>
                        }
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LecturerTestResult