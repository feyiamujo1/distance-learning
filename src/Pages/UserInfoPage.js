import axios from 'axios';
import React, { useEffect, useState } from 'react'
import userImage from '../../src/assets/images/alhikmah_logo.png'
import useAuth from '../hooks/UseAuth';
const baseUrl = 'http://localhost:8000';

function UserInfoPage() {
    const { auth } = useAuth();
    const user_id = auth.user_id;
    const user_role = String(auth.role);
    let userUrl = "";
    const [userInfo, setUserInfo] = useState({});

    if (user_role=="STUDENT"){
        userUrl="/students/"+user_id+"/";
    }else{
        userUrl = "/teachers/"+user_id+"/";
    }

    
    // Fetch All Student Info
    useEffect(() => {
    try {
        axios.get(baseUrl+userUrl)
        .then((response) => {
            setUserInfo(response.data)
        });
    } catch (error) {
        console.log(error)
    }
  
    }, [])

    // console.log(userInfo.courses.length)
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full min-h-screen p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col w-fit gap-3 items-start'>
                {/* <HiUserCircle className='text-custom-green-two text-[150px] p-0 m-0 hover:text-[#81a591] border'/> */}
                <img className='w-40' src={userImage} alt="profile" />
                <input className='p-0 m-0 border' type='file' accept='image/*' name='user_profile' id='user_profile'/>
            </div>
            <div className='flex flex-col w-full mb-6'>
                <p className='text-xl py-4 border-y-2'>Name: {userInfo.firstname + " " + userInfo.lastname}</p>
                <p className='text-xl py-4 border-b-2'>Email: {userInfo.email}</p>
                <p className='text-xl py-4 border-b-2 capitalize'>Role: <span className='capitalize'>{user_role}</span></p>
                <p className='text-xl py-4 border-b-2'>Number of courses: {userInfo?.courses?.length}</p>
                {/* <p className='text-xl py-4 border-b-2'>Courses</p> */}
                <div className='py-4 flex flex-col gap-2'>
                    <table className='lg:w-4/6'>
                        <tr className='text-left text-xl border-b-2'>
                            <th className=''>S/N</th>
                            <th className=''>Course Code </th>
                            <th className=''>Course Title</th>
                        </tr>
                    {
                        userInfo.courses ? userInfo.courses.map((course, id) => (
                            <tr className='text-base font-medium'>
                                <td className='pl-3.5'>{id +1}</td>
                                <td>{course.session}</td>
                                <td>{course.name}</td>
                            </tr>
                        )) : null
                        
                    }
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserInfoPage