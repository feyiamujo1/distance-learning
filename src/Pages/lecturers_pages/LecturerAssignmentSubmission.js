import React, { useEffect, useState } from 'react'
import axios from 'axios'

function LecturerAssignmentSubmission() {
    const [assignmentSubmissionList, setAssignmentSubmissionList] = useState();
    const [statusNote, setStatusNote] = useState("")
    const url = 'https://fakerapi.it/api/v1/persons?_quantity=10' 

    useEffect(() => {
        axios.get(url)
          .then(response => {
            if (response.status === 200) {
              setStatusNote("")
              setAssignmentSubmissionList(response.data.data)
            } else {
              setStatusNote("Error while loading data, please Kindly refresh the page!")
            }
          })
      }, [])

  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 min-h-screen bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col'>
                <h1 className='text-3xl font-bold '>Introduction to Programming</h1>
                <p className='text-sm text-black font-bold'>Course Code: CMP321</p>
                <p className='text-sm font-bold text-custom-green-two'>Total Assignment Submission: 10</p>
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
                            {/* <th className=''>Email</th> */}
                            <th>Submission</th>
                        </tr>
                        {
                            assignmentSubmissionList ? assignmentSubmissionList.map((student, index) =>
                            <tr className='w-full flex flex-row text-left gap-6 items-center'>
                                <td className='w-6 text-center'>{index + 1}</td>
                                <td className='w-44'>{/*<img className='w-14 h-14 rounded-full' src={student.image} alt="team"/>*/}<span>{student.firstname + " " + student.lastname}</span></td> 
                                <td className='w-36'>22/03CMP001</td>
                                <td className='text-custom-green-two underline cursor-pointer hover:text-custom-brown'>Click to Download</td>                

                            </tr>
                        )
                            : null
                        }
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LecturerAssignmentSubmission