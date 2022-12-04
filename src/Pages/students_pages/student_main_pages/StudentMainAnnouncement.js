import React from 'react'

function StudentMainAnnouncement() {
  return (
    <div className='px-10 py-11 h-full flex flex-col gap-10'>
        <div className='min-h-[50vh] w-full p-6 bg-white rounded-md shadow-sm flex flex-col gap-4 justify-between'>
            <h1 className='text-lg font-bold text-custom-green-two'>Announcements</h1>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two text-sm font-bold'>5 Nov, 2022</p>
                        <p>Assignment</p>
                        <p className='font-bold'>Introduction to Computer</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two text-sm font-bold'>5 Nov, 2022</p>
                        <p>Assignment</p>
                        <p className='font-bold'>Introduction to Computer</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two text-sm font-bold'>5 Nov, 2022</p>
                        <p>Assignment</p>
                        <p className='font-bold'>Introduction to Computer</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4 hover:brightness-75 cursor-pointer'>
                    <div className='p-4 bg-custom-off-white rounded-md'>
                        <p className='text-custom-green-two text-sm font-bold'>5 Nov, 2022</p>
                        <p>Assignment</p>
                        <p className='font-bold'>Introduction to Computer</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-end'>
                <p className='mt-4 py-2 w-fit text-base font-bold text-custom-green-two cursor-pointer hover:text-custom-brown'>
                    See More
                </p>
            </div>
        </div>
    </div>
  )
}

export default StudentMainAnnouncement