import React from 'react'
import LecturerHeader from '../../Components/lecturers_components/LecturerHeader'
import LecturerSidebar from '../../Components/lecturers_components/LecturerSidebar'
import LecturerDashboard from './main_pages/LecturerMainDashboard'
import LecturerMainCourses from './main_pages/LecturerMainCourses'
import LecturerMainTests from './main_pages/LecturerMainTests'
import LecturersMainAssignments from './main_pages/LecturersMainAssignments'
import LectuerCourseContent from './LectuerCourseContent'
import LecturerAddCourseContent from './LecturerAddCourseContent'
import LecturerAssignmentContent from './LecturerAssignmentContent'
import LecturerEnrolledStudents from './LecturerEnrolledStudents'
import LecturerTestContent from './LecturerTestContent'

function LecturerMainDashboard() {
  return (
    <div className='w-full flex flex-row bg-[#f0f0f0]'>
      <LecturerSidebar/>
      <div className='flex flex-col grow ml-60'>
        <LecturerHeader/>
        <div className=''>
          {/* <LecturerDashboard /> */}
          {/* <LecturerMainCourses /> */}
          {/* <LectuerCourseContent /> */}
          {/* <LecturerAddCourseContent /> */}
          {/* <LecturerEnrolledStudents /> */}
          {/* <LecturersMainAssignments /> */}
          {/* <LecturerAssignmentContent /> */}
          <LecturerMainTests />
          {/* <LecturerTestContent /> */}
        </div>
      </div>
    </div>
  )
}

export default LecturerMainDashboard