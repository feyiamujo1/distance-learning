import React, { useEffect, useState } from 'react'
import Hll from '../../../src/assets/images/Hll.png'
import HllVideo from '../../../src/assets/videos/Higher_level_and_lower_level_languages_Computer_Science_Wiki.mkv'
import HllAudio from '../../../src/assets/audio/file_example_MP3_700KB.mp3'
// import { BsPencilSquare } from 'react-icons/bs'
import PdfImage from '../../../src/assets/images/pdf.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
const baseUrl = 'http://localhost:8000'

function StudentCourseContent() {
    let {course_id} = useParams();
    const [courseDetails, setCourseDetails] = useState({});
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
    console.log(courseDetails);

  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-bold '>{courseDetails?.name}</h1>
                            <p className='text-sm text-black font-bold'>Course Code: {courseDetails?.session}</p>
                            <p className='text-sm font-bold text-custom-green-two'>Lessons: 2</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2 box-border items-center justify-between '>
                    <div className='w-8/12 flex grow flex-col gap-1'>
                        <p className='text-sm font-bold'>
                            Description
                        </p>
                        <p className='text-black text-sm'>
                            {courseDetails?.description}
                        </p>    
                    </div>
                    <div className=' flex flex-col gap-0.5'>
                        <Link to={'/student/assignments/'+course_id+''} className='border-b-2 py-3 text-base cursor-pointer border-custom-green-two hover:text-red-600 hover:border-red-600'>Check Assignments</Link>
                        <Link to={'/student/tests/'+course_id+''} className='border-b-2 py-3 text-base cursor-pointer border-custom-green-two hover:text-red-600 hover:border-red-600'>Check Tests</Link>
                    </div>
                </div>
            </div>
            {/* Lesson Container */}
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-4'>
                    <div className='relative mb-10'>
                        <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Lesson 1</h3>
                    </div>
                    <h2 className='text-xl font-bold'>Low Level Language</h2>
                    <div className='flex flex-col gap-1.5'>
                        <p className='text-xs font-bold border-b-2'>Intro</p>
                        <p className='text-black text-sm'>
                            Programming is writing computer code to create a program, to solve a problem. Programs are created to implement algorithms . 
                            Algorithms can be represented as pseudocode or a flowchart , and programming is the translation of these into a computer program.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit posuere elementum. Fusce et ligula id libero pretium blandit. 
                            Proin ullamcorper aliquam massa sit amet bibendum. Nullam vitae mauris id velit venenatis vulputate quis non purus. {/*Nullam blandit 
                                mattis posuere. Etiam suscipit, massa quis elementum pulvinar, mauris orci tincidunt ipsum, sit amet volutpat massa diam vel lacus. 
                            Suspendisse ac turpis quis ligula euismod consectetur. Aenean sollicitudin risus pellentesque mi porttitor gravida. */}
                        </p> 
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <p className='text-xs font-bold border-b-2'>Resources</p>
                        <p className='text-black text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin hendrerit posuere elementum   {/*. Fusce et ligula id libero pretium blandit. 
                            Proin ullamcorper aliquam massa sit amet bibendum. Nullam vitae mauris id velit venenatis vulputate quis non purus.Nullam blandit 
                                mattis posuere. Etiam suscipit, massa quis elementum pulvinar, mauris orci tincidunt ipsum, sit amet volutpat massa diam vel lacus. 
                            Suspendisse ac turpis quis ligula euismod consectetur. Aenean sollicitudin risus pellentesque mi porttitor gravida. */}
                        </p> 
                        {/* Place Course Resources here */}
                        <div className='flex gap-2 h-fit flex-wrap items-center justify-center'>
                            <img className='h-fit cursor-pointer' src={Hll} alt="Course Resource" />
                            <video controls width="250px">
                                <source src={HllVideo} />
                                Sorry your browser doesn't support videos
                            </video>
                            <audio controls width="250px">
                                <source src={HllAudio} />
                            </audio>
                            <div className='cursor-pointer flex flex-row justify-center items-center hover:text-red-700'><img className='w-10 h-10' src={PdfImage} alt=""/>Click to download document</div> 
                            
                            
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='relative mb-10'>
                        <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Lesson 2</h3>
                    </div>
                    <h2 className='text-xl font-bold'>High Level Language</h2>
                    <div className='flex flex-col gap-1.5'>
                        <p className='text-xs font-bold border-b-2'>Intro</p>
                        <p className='text-black text-sm'>
                            Programming is writing computer code to create a program, to solve a problem. Programs are created to implement algorithms . 
                            Algorithms can be represented as pseudocode or a flowchart , and programming is the translation of these into a computer program.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit posuere elementum. Fusce et ligula id libero pretium blandit. 
                            Proin ullamcorper aliquam massa sit amet bibendum. Nullam vitae mauris id velit venenatis vulputate quis non purus. {/*Nullam blandit 
                                mattis posuere. Etiam suscipit, massa quis elementum pulvinar, mauris orci tincidunt ipsum, sit amet volutpat massa diam vel lacus. 
                            Suspendisse ac turpis quis ligula euismod consectetur. Aenean sollicitudin risus pellentesque mi porttitor gravida. */}
                        </p> 
                    </div>
                    <div className='flex flex-col gap-1.5'>
                        <p className='text-xs font-bold border-b-2'>Resources</p>
                        <p className='text-black text-sm'>
                            Attached below are the resources for this lesson. {/*. Fusce et ligula id libero pretium blandit. 
                            Proin ullamcorper aliquam massa sit amet bibendum. Nullam vitae mauris id velit venenatis vulputate quis non purus.Nullam blandit 
                                mattis posuere. Etiam suscipit, massa quis elementum pulvinar, mauris orci tincidunt ipsum, sit amet volutpat massa diam vel lacus. 
                            Suspendisse ac turpis quis ligula euismod consectetur. Aenean sollicitudin risus pellentesque mi porttitor gravida. */}
                        </p> 
                        {/* Place Course Resources here */}
                        <div className='flex gap-2 h-fit flex-wrap items-center justify-center'>
                            <img className='h-fit' src={Hll} alt="Course Resource" />
                            <video controls width="250px">
                                <source src={HllVideo} />
                                Sorry your browser doesn't support videos
                            </video>
                            <audio controls width="250px">
                                <source src={HllAudio} />
                            </audio>
                            <div className='cursor-pointer flex flex-row justify-center items-center hover:text-red-700'><img className='w-10 h-10' src={PdfImage} alt=""/>Click to download document</div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentCourseContent