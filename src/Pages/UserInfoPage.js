import React from 'react'
import userImage from '../../src/assets/images/alhikmah_logo.png'

function UserInfoPage() {
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full min-h-screen p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col w-fit gap-3 items-start'>
                {/* <HiUserCircle className='text-custom-green-two text-[150px] p-0 m-0 hover:text-[#81a591] border'/> */}
                <img className='w-40' src={userImage} />
                <input className='p-0 m-0 border' type='file' accept='image/*' name='user_profile' id='user_profile'/>
            </div>
            <div className='flex flex-col w-full mb-6'>
                <p className='text-xl py-4 border-y-2'>Surname: Amujoyegbe</p>
                <p className='text-xl py-4 border-b-2'>First Names: Feyisayo Bamidele</p>
                <p className='text-xl py-4 border-b-2'>Middle Name: Amujoyegbe</p>
                <p className='text-xl py-4 border-b-2'>Role: Student/Lecturer</p>
                <p className='text-xl py-4 border-b-2'>Number of courses: 5</p>
                <p className='text-xl py-4 border-b-2'>Courses: 
                    <span className='text-custom-brown'>
                        Introduction to Computer(CMP101), Introduction to Computer(CMP101), Introduction to Computer(CMP101), Introduction to Computer(CMP101),
                        Introduction to Computer(CMP101), Introduction to Computer(CMP101),
                        Introduction to Computer(CMP101)
                    </span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default UserInfoPage