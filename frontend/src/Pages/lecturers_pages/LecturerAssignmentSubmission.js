import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import { HiHome } from 'react-icons/hi2';
const baseUrl = 'http://localhost:8000'

function LecturerAssignmentSubmission() {
    const [assignmentSubmissionList, setAssignmentSubmissionList] = useState([]);
    const [courseDetails, setCourseDetails] = useState({});
    let {course_id, assignment_id} = useParams();

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

    const list = [];

    useEffect(() => {
        try {
          axios.get(baseUrl+"/assignments/solutions/assignment/")
          .then((response) => {
            setAssignmentSubmissionList(response.data);
          });
          } catch (error) {
              console.log(error)
          }
      }, [assignment_id]);

  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 min-h-screen bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-bold '>{courseDetails?.name}</h1>
                            <p className='text-sm text-black font-bold'>Course Code: {courseDetails?.session}</p>
                            <p className='text-sm font-bold text-custom-green-two'>Submissions: {courseDetails?.students?.length}</p>
                        </div>
                        <Link to={'/lecturer/courses/'+courseDetails.id} className='py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                            <p className='text-base font-medium text-white group-hover:text-custom-off-white'>Test Home</p>
                            <HiHome className='text-base text-white'/>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full box-border'>
                <table className='w-full flex flex-col'>
                    <tr className='w-full flex flex-row  text-base text-white text-left items-center bg-custom-green-two border-b border-x border-custom-green-two'>
                        <th className='w-14 text-center p-2'>S/N</th>
                        <th className='w-44 border-l py-2 px-4'>Full name</th>
                        <th className='w-36 border-l py-2 px-4'>Matric No.</th>
                        <th className='border-l py-2 px-4'>Email</th>
                    </tr>
                    <p className='text-red-700 font-medium text-center py-2'>{list + "Hhere"} Reminder to work on the the endpoint is returning error</p>
                    <div>
                        {assignmentSubmissionList?.map((submissions) => 
                            submissions.id === parseInt(assignment_id) ?
                            <div>
                                <h2>{submissions.id}</h2>
                                <p>Given by: {submissions.given_by}</p>
                            </div>
                            : 
                            null
                        )}
                    </div>
                    {/* {courseDetails["students"]?.length < 1 ? 
                        <p className='w-full text-center py-2'>
                            No enrolled student!
                        </p> 
                    : 
                    courseDetails["students"]?.map((student, index) =>
                        <tr className='w-full flex flex-row text-left items-center border-b border-x'>
                            <td className='w-14 text-center p-2'>{index + 1}</td>
                            <td className='w-44 border-l py-2 px-4'><span>{student.firstname + " " + student.lastname}</span></td> 
                            <td className='w-36 border-l py-2 px-4'>22/03CMP0{student.id+10}</td>
                            <td className='border-l py-2 px-4'>{student.email}</td>                
                        </tr>
                    )} */}
                </table>
            </div>
        </div>
    </div>
  )
}

export default LecturerAssignmentSubmission