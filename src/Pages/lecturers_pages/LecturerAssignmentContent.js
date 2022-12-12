import React from 'react'
// import Hll from '../../../src/assets/images/Hll.png'
// import HllVideo from '../../../src/assets/videos/Higher_level_and_lower_level_languages_Computer_Science_Wiki.mkv'
// import HllAudio from '../../../src/assets/audio/file_example_MP3_700KB.mp3'
import { HiHome } from 'react-icons/hi2'
import { Link } from 'react-router-dom'
// import PdfImage from '../../../src/assets/images/pdf.png'

function LecturerAssignmentContent() {
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-bold '>Introduction to Programming</h1>
                            <p className='text-sm text-black font-bold'>Course Code: CMP321</p>
                            <p className='text-sm font-bold text-custom-green-two'>Assignments: 2</p>
                        </div>
                        <div className='py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                          <p className='text-base font-medium text-white group-hover:text-custom-off-white'>Course Home</p>
                          <HiHome className='text-base text-white'/>
                        </div>
                    </div>
                    {/* <div className='flex flex-col items-end'>
                        <p className='w-fit border-y-2 px-1.5 py-3 text-base cursor-pointer border-custom-green-two hover:text-red-600 hover:border-red-600'>View Submissions: 4</p>
                    </div> */}
                </div>
            </div>
            {/* Assignment Container */}
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-4'>
                    <div className='relative mb-10'>
                        <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Assignment 1</h3>
                    </div>
                    {/* <h2 className='text-xl font-bold'>Low Level Language</h2> */}
                    <div className='flex flex-col gap-1.5'>
                        {/* <p className='text-xs font-bold border-b-2'>Question/Descriptions</p> */}
                        <p className='text-black text-sm'>
                            Programming is writing computer code to create a program, to solve a problem. Programs are created to implement algorithms . 
                            Algorithms can be represented as pseudocode or a flowchart , and programming is the translation of these into a computer program.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit posuere elementum. Fusce et ligula id libero pretium blandit. 
                            Proin ullamcorper aliquam massa sit amet bibendum. Nullam vitae mauris id velit venenatis vulputate quis non purus. {/*Nullam blandit 
                                mattis posuere. Etiam suscipit, massa quis elementum pulvinar, mauris orci tincidunt ipsum, sit amet volutpat massa diam vel lacus. 
                            Suspendisse ac turpis quis ligula euismod consectetur. Aenean sollicitudin risus pellentesque mi porttitor gravida. */}
                        </p> 
                    </div>
                </div>
                <Link to='/lecturer/assignments/cmp321/submission' className=' flex flex-row justify-end mb-6'>
                  <p className='text-sm py-3 px-5 font-medium bg-custom-green-two cursor-pointer hover:bg-custom-brown rounded-md text-white group-hover:text-custom-off-white'>View Submissions</p>
                </Link>
            </div>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-4'>
                    <div className='relative mb-10'>
                        <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Assignment 2</h3>
                    </div>
                    {/* <h2 className='text-xl font-bold'>High Level Language</h2> */}
                    <div className='flex flex-col gap-1.5'>
                        {/* <p className='text-xs font-bold border-b-2'>Question/Descriptions</p> */}
                        <p className='text-black text-sm'>
                            Programming is writing computer code to create a program, to solve a problem. Programs are created to implement algorithms . 
                            Algorithms can be represented as pseudocode or a flowchart , and programming is the translation of these into a computer program.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit posuere elementum. Fusce et ligula id libero pretium blandit. 
                            Proin ullamcorper aliquam massa sit amet bibendum. Nullam vitae mauris id velit venenatis vulputate quis non purus. {/*Nullam blandit 
                                mattis posuere. Etiam suscipit, massa quis elementum pulvinar, mauris orci tincidunt ipsum, sit amet volutpat massa diam vel lacus. 
                            Suspendisse ac turpis quis ligula euismod consectetur. Aenean sollicitudin risus pellentesque mi porttitor gravida. */}
                        </p> 
                    </div>
                    <Link to='/lecturer/assignments/cmp321/submission' className=' flex flex-row justify-end mb-6'>
                        <p className='text-sm py-3 px-5 font-medium bg-custom-green-two cursor-pointer hover:bg-custom-brown rounded-md text-white group-hover:text-custom-off-white'>View Submissions</p>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LecturerAssignmentContent