import React from 'react'
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
// import LecturerCreateTestContent from '../lecturers_pages/LecturerCreateTestContent'

function MainStudentDashboard() {
  return (
    <div className='w-full flex flex-row bg-[#f0f0f0]'>
      <StudentSidebar />
      <div className='flex flex-col grow ml-60'>
        <StudentHeader />
        <div className=''>
          <Routes>
            <Route path="/" element={<Navigate to="/student/dashboard"/>}/>
            <Route path='/student/dashboard' element={<StudentDashboard />} />
            <Route path='/student/courses' element={<StudentMainCourse />} />
            <Route path='/student/courses/cmp321' element={<StudentCourseContent />} />
            <Route path='/student/announcements' element={<StudentMainAnnouncement />} />
            <Route path='/student/assignments' element={<StudentMainAssignment />} />
            <Route path='/student/assignments/cmp321' element={<StudentAssignmentContent />} />
            <Route path='/student/tests' element={<StudentMainTests />} />
            <Route path='/student/tests/cmp321' element={<StudentTestContent />} />
            <Route path='/student/details' element={<UserInfoPage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default MainStudentDashboard