import React from 'react'
import StudentHeader from '../../Components/students_components/StudentHeader'
import StudentSidebar from '../../Components/students_components/StudentSidebar'
import UserInfoPage from '../UserInfoPage'
import StudentCourseContent from './StudentCourseContent'
import StudentAssignmentContent from './StudentAssignmentContent'
import StudentMainAnnouncement from './student_main_pages/StudentMainAnnouncement'
import StudentMainAssignment from './student_main_pages/StudentMainAssignment'
import StudentMainCourse from './student_main_pages/StudentMainCourse'
import StudentDashboard from './student_main_pages/StudentMainDashboard'
import StudentMainTests from './student_main_pages/StudentMainTests'
import StudentTestContent from './StudentTestContent'
import LecturerCreateTestContent from '../lecturers_pages/LecturerCreateTestContent'

function StudentMainDashboard() {
  return (
    <div className='w-full flex flex-row bg-[#f0f0f0]'>
      <StudentSidebar />
      <div className='flex flex-col grow ml-60'>
        <StudentHeader />
        <div className=''>
          {/* <StudentDashboard /> */}
          {/* <StudentMainCourse /> */}
          {/* <StudentCourseContent /> */}
          {/* <StudentMainAnnouncement /> */}
          {/* <StudentMainAssignment /> */}
          {/* <StudentAssignmentContent /> */}
          {/* <StudentTestContent /> */}
          <LecturerCreateTestContent />
        </div>
      </div>

    </div>
  )
}

export default StudentMainDashboard