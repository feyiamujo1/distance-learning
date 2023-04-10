import React from 'react'

function StudentMainAnnouncement() {
  return (
    <div className='px-10 py-11 h-full flex flex-col gap-10'>
        <div className='min-h-[50vh] w-full p-6 bg-white rounded-md shadow-sm flex flex-col gap-4 justify-between'>
            <h1 className='text-lg font-bold text-custom-green-two'>Announcements</h1>
            <div className='flex flex-col gap-4 pb-6'>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two '>New Assignment</p>
                        <p className='font-bold'>Web design</p>
                        <p className='text-sm font-light'>23 January, 2022</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two '>New Test</p>
                        <p className='font-bold'>Machine Learning</p>
                        <p className='text-sm font-light'>20 January, 2022</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two '>New Course Content</p>
                        <p className='font-bold'>Compiler Construction</p>
                        <p className='text-sm font-light'>23 January, 2022</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two '>New Assignment</p>
                        <p className='font-bold'>Web design</p>
                        <p className='text-sm font-light'>23 January, 2022</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentMainAnnouncement