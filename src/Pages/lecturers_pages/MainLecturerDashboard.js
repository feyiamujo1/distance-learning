import React, { useEffect, useState } from 'react'
import LecturerHeader from '../../Components/lecturers_components/LecturerHeader'
import LecturerSidebar from '../../Components/lecturers_components/LecturerSidebar'
import LecturerDashboard from './main_pages/LecturerDashboard'
import LecturerMainCourses from './main_pages/LecturerMainCourses'
import LecturerMainTests from './main_pages/LecturerMainTests'
import LecturersMainAssignments from './main_pages/LecturersMainAssignments'
import LectuerCourseContent from './LectuerCourseContent'
import LecturerAddCourseContent from './LecturerAddCourseContent'
import LecturerAssignmentContent from './LecturerAssignmentContent'
// import LecturerEnrolledStudents from './LecturerEnrolledStudents'
import LecturerTestContent from './LecturerTestContent'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserInfoPage from '../UserInfoPage'
import LecturerCreateTestContent from './LecturerCreateTestContent'
import LecturerAddAssignmentContent from './LecturerAddAssignmentContent'
import EnrolledCourseStudents from './EnrolledCourseStudents'
import LecturerAssignmentSubmission from './LecturerAssignmentSubmission'
import LecturerTestResult from './LecturerTestResult'
import axios from 'axios'
import useAuth from '../../hooks/UseAuth'
const baseUrl = 'http://localhost:8000'

function MainLecturerDashboard() {
  const { auth } = useAuth();
  const lecturer_id = auth.user_id;
  const token = auth.token
  // const config = {
  //   headers: {Authorization: `Bearer ${token}`}
  // }
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const [lecturerDetails, setLecturerDetails] = useState({});

  // Fetch All Student Details
  useEffect(() => {
      try {
          axios.get(baseUrl+"/teachers/"+lecturer_id+"/")
          .then((response) => {
            setLecturerDetails(response.data)
          });
      } catch (error) {
          console.log(error)
      }
    
  }, [])
    
    console.log(lecturerDetails);
  const lecturer_firstname = lecturerDetails.firstname;

  return (
    <div className='w-full flex flex-row bg-[#f0f0f0]'>
      <LecturerSidebar/>
      <div className='flex flex-col grow ml-60'>
        <LecturerHeader lecturer_firstname={lecturer_firstname}/>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/lecturer/dashboard" />}/>
            <Route path='/lecturer/dashboard' element={<LecturerDashboard/>} />
            <Route path='/lecturer/courses' element={<LecturerMainCourses />} />
            <Route path='/lecturer/courses/:course_id' element={<LectuerCourseContent /> }/>
            <Route path='/lecturer/courses/:course_id/newlesson' element={<LecturerAddCourseContent /> }/>
            <Route path='/lecturer/courses/:course_id/enrolledstudents' element={<EnrolledCourseStudents />} />
            <Route path='/lecturer/assignments' element={<LecturersMainAssignments />} />
            <Route path='/lecturer/assignments/:course_id' element={<LecturerAssignmentContent />} />
            <Route path='/lecturer/assignments/:course_id/newassignment' element={<LecturerAddAssignmentContent />}/>
            <Route path='/lecturer/assignments/:course_id/submission' element={<LecturerAssignmentSubmission />}/>
            <Route path='/lecturer/tests' element={<LecturerMainTests />} />
            <Route path='/lecturer/tests/:course_id' element={<LecturerTestContent />} />
            <Route path='/lecturer/tests/:course_id/newtest' element={<LecturerCreateTestContent />} />
            <Route path='/lecturer/tests/:course_id/scores' element={<LecturerTestResult />}/>
            <Route path='/lecturer/details' element={<UserInfoPage />} />
          </Routes>
          {/* <LecturerEnrolledStudents /> */}
        </div>
      </div>
    </div>
  )
}

export default MainLecturerDashboard