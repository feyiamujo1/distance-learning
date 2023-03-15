import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
const baseUrl = 'http://localhost:8000'

function EnrolledCourseStudents() {
    // const [enrolledStudents, setEnrolledStudents] = useState();
    const [courseDetails, setCourseDetails] = useState({});
    const [statusNote, setStatusNote] = useState("");
    let {course_id} = useParams();

    useEffect(() => {
        axios.get(baseUrl+"/classes/"+course_id+"/")
          .then(response => {
            if (response.status === 200) {
              setStatusNote("")
              setCourseDetails(response.data);
            //   setEnrolledStudents(courseDetails?.students);
            } else {
              setStatusNote("Error while loading data, please Kindly refresh the page!")
            }
          })
        //   setEnrolledStudents(courseDetails?.students);
      }, [course_id]);
    
        // setEnrolledStudents(courseDetails?.students);   
    //   console.log(courseDetails?.students);

  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 min-h-screen bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold '>{courseDetails?.name}</h1>
                <p className='text-sm text-black font-bold'>Course Code: {courseDetails?.session}</p>
                <p className='text-sm font-bold text-custom-green-two'>Enrolled Students: {courseDetails?.students?.length}</p>
            </div>
            <div>
                <p className=''>
                    {statusNote}
                </p>
                <div className='w-full box-border'>
                    <table className='w-full flex flex-col gap-6'>
                        <tr className='w-full flex flex-row gap-6 py-2 text-base text-white text-left items-center bg-custom-green-two'>
                            <th className='w-6 text-center '>S/N</th>
                            <th className='w-44'>Full name</th>
                            <th className='w-36'>Matric Number</th>
                            <th className=''>Email</th>
                        </tr>
                        {
                            courseDetails && courseDetails["students"]?.map((student, index) =>
                            <tr className='w-full flex flex-row text-left gap-6 items-center'>
                                <td className='w-6 text-center'>{index + 1}</td>
                                <td className='w-44'>{/*<img className='w-14 h-14 rounded-full' src={student.image} alt="team"/>*/}<span>{student.firstname + " " + student.lastname}</span></td> 
                                <td className='w-36'>22/03CMP0{student.id+10}</td>
                                <td className=''>{student.email}</td>                
                            </tr>
                        )
                        }
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default EnrolledCourseStudents