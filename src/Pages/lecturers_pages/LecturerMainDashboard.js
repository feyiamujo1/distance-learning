import React from 'react'
import LecturerHeader from '../../Components/lecturers_components/LecturerHeader'
import LecturerSidebar from '../../Components/lecturers_components/LecturerSidebar'
import LecturerDashboard from './components/LecturerDashboard'
import LecturerMainCourses from './components/LecturerMainCourses'
import LectuerCourseContent from './LectuerCourseContent'
import LecturerAddCourseContent from './LecturerAddCourseContent'
import LecturerEnrolledStudents from './LecturerEnrolledStudents'

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
          <LecturerEnrolledStudents />
        </div>
      </div>
    </div>
  )
}

export default LecturerMainDashboard