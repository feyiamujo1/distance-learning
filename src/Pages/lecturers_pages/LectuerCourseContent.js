import React from 'react'
import Hll from '../../../src/assets/images/Hll.png'
import HllVideo from '../../../src/assets/videos/Higher_level_and_lower_level_languages_Computer_Science_Wiki.mkv'
import HllAudio from '../../../src/assets/audio/file_example_MP3_700KB.mp3'
import { BsPencilSquare } from 'react-icons/bs'

function LectuerCourseContent() {
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-bold '>Introduction to Programming</h1>
                            <p className='text-sm text-black'>Session: 2022/2023</p>
                        </div>
                        <div className='py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                            <p className='text-base font-medium text-white group-hover:text-custom-off-white'>Add Lesson</p>
                            <BsPencilSquare className='text-base text-white'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row gap-2 box-border items-center justify-between '>
                    <div className='w-8/12 flex grow flex-col gap-1'>
                        <p className='text-sm font-bold'>
                            Description
                        </p>
                        <p className='text-black text-sm'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit posuere elementum. Fusce et ligula id libero pretium blandit. 
                            Proin ullamcorper aliquam massa sit amet bibendum. Nullam vitae mauris id velit venenatis vulputate quis non purus. {/*Nullam blandit 
                            mattis posuere. Etiam suscipit, massa quis elementum pulvinar, mauris orci tincidunt ipsum, sit amet volutpat massa diam vel lacus. 
                            Suspendisse ac turpis quis ligula euismod consectetur. Aenean sollicitudin risus pellentesque mi porttitor gravida. */}
                        </p>    
                    </div>
                    <div className=' flex flex-col gap-0.5'>
                        <p className='border-b-2 py-3 text-base cursor-pointer border-custom-green-two hover:text-red-600 hover:border-red-600'>Enrolled Students: 4</p>
                        <p className='border-b-2 py-3 text-base cursor-pointer border-custom-green-two hover:text-red-600 hover:border-red-600'>Add Assignments</p>
                        <p className='border-b-2 py-3 text-base cursor-pointer border-custom-green-two hover:text-red-600 hover:border-red-600'>Create Test</p>
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
                            <img className='h-fit' src={Hll} alt="Course Resource" />
                            <video controls width="250px">
                                <source src={HllVideo} />
                                Sorry your browser doesn't support videos
                            </video>
                            <audio controls width="250px">
                                <source src={HllAudio} />
                            </audio>
                            
                            {/* <img className='h-fit' src={Hll} alt="Course Resource" />
                            <video controls width="250px">
                                <source src={HllVideo} />
                                Sorry your browser doesn't support videos
                            </video>
                            <audio controls width="250px">
                                <source src={HllAudio} />
                            </audio> */}
                            
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
                            
                            {/* <img className='h-fit' src={Hll} alt="Course Resource" />
                            <video controls width="250px">
                                <source src={HllVideo} />
                                Sorry your browser doesn't support videos
                            </video>
                            <audio controls width="250px">
                                <source src={HllAudio} />
                            </audio> */}
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LectuerCourseContent