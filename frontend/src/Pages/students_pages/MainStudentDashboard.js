import React, { useEffect, useState } from 'react'
import StudentHeader from '../../Components/students_components/StudentHeader'
import StudentSidebar from '../../Components/students_components/StudentSidebar'
// import UserInfoPage from '../UserInfoPage'
import StudentCourseContent from './StudentCourseContent'
import StudentAssignmentContent from './StudentAssignmentContent'
import StudentMainAnnouncement from './student_main_pages/StudentMainAnnouncement'
import StudentMainAssignment from './student_main_pages/StudentMainAssignment'
import StudentMainCourse from './student_main_pages/StudentMainCourse'
import StudentDashboard from './student_main_pages/StudentMainDashboard'
import StudentMainTests from './student_main_pages/StudentMainTests'
import StudentTestContent from './StudentTestContent'
import { Navigate, Route, Routes } from 'react-router-dom'
import UserInfoPage from '../UserInfoPage'
import axios from 'axios'
import useAuth from '../../hooks/UseAuth'
import StudentTestList from './StudentTestList'
const baseUrl = 'http://localhost:8000'

function MainStudentDashboard() {
  const { auth } = useAuth();
  const student_id = auth.user_id;
  const token = auth.token;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  const [studentDetails, setStudentDetails] = useState({});

  // Fetch All Student Details
  useEffect(() => {
      try {
          axios.get(baseUrl+"/students/"+student_id+"/")
          .then((response) => {
              setStudentDetails(response.data)
          });
      } catch (error) {
          console.log(error)
      }
    
  }, [student_id])
    
  console.log(studentDetails);
  const student_firstname = studentDetails.firstname;

  return (
    <div className='w-full flex flex-row bg-[#f0f0f0]'>
      <StudentSidebar />
      <div className='flex flex-col grow ml-60'>
        <StudentHeader student_firstname={student_firstname} />
        <div className=''>
          <Routes>
            <Route path="/" element={<Navigate to="/student/dashboard"/>}/>
            <Route path='/student/dashboard' element={<StudentDashboard />} />
            <Route path='/student/courses' element={<StudentMainCourse />} />
            <Route path='/student/courses/:course_id' element={<StudentCourseContent />} />
            <Route path='/student/announcements' element={<StudentMainAnnouncement />} />
            <Route path='/student/assignments' element={<StudentMainAssignment />} />
            <Route path='/student/assignments/:course_id' element={<StudentAssignmentContent />} />
            <Route path='/student/tests' element={<StudentMainTests />} />
            <Route path='/student/tests/:course_id/list' element={<StudentTestList />} />
            <Route path='/student/tests/:course_id/:quiz_id' element={<StudentTestContent />} />
            <Route path='/student/details' element={<UserInfoPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainStudentDashboard