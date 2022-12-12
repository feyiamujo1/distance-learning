import React from 'react'
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

function MainLecturerDashboard() {
  return (
    <div className='w-full flex flex-row bg-[#f0f0f0]'>
      <LecturerSidebar/>
      <div className='flex flex-col grow ml-60'>
        <LecturerHeader/>
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="/lecturer/dashboard" />}/>
            <Route path='/lecturer/dashboard' element={<LecturerDashboard/>} />
            <Route path='/lecturer/courses' element={<LecturerMainCourses />} />
            <Route path='/lecturer/courses/cmp321' element={<LectuerCourseContent /> }/>
            <Route path='/lecturer/courses/cmp321/newlesson' element={<LecturerAddCourseContent /> }/>
            <Route path='/lecturer/courses/cmp321/enrolledstudents' element={<EnrolledCourseStudents />} />
            <Route path='/lecturer/assignments' element={<LecturersMainAssignments />} />
            <Route path='/lecturer/assignments/cmp321' element={<LecturerAssignmentContent />} />
            <Route path='/lecturer/assignments/cmp321/newassignment' element={<LecturerAddAssignmentContent />}/>
            <Route path='/lecturer/assignments/cmp321/submission' element={<LecturerAssignmentSubmission />}/>
            <Route path='/lecturer/tests' element={<LecturerMainTests />} />
            <Route path='/lecturer/tests/cmp321' element={<LecturerTestContent />} />
            <Route path='/lecturer/tests/cmp321/newtest' element={<LecturerCreateTestContent />} />
            <Route path='/lecturer/tests/cmp321/scores' element={<LecturerTestResult />}/>
            <Route path='/lecturer/details' element={<UserInfoPage />} />
          </Routes>
          {/* <LecturerEnrolledStudents /> */}
        </div>
      </div>
    </div>
  )
}

export default MainLecturerDashboard