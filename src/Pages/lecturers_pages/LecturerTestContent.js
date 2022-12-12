import React from 'react'
import { BsPeopleFill } from 'react-icons/bs'
import { MdScore } from 'react-icons/md'
import { Link } from 'react-router-dom'


function LecturerTestContent() {
  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-row justify-between items-end'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold'>Artficial Intelligence</h1>
                    <p className='text-sm text-black font-bold'>Test: CMP321</p>
                    <p className='text-sm font-bold text-custom-green-two'>Questions: 20</p>
                </div>
                <Link to='/lecturer/tests/cmp321/scores' className='py-3 px-5 flex flex-row bg-custom-green-two rounded-md items-center gap-2 cursor-pointer group hover:bg-custom-brown'>
                    <p className='text-base font-medium text-white group-hover:text-custom-off-white'>Show Result</p>
                    <MdScore className='text-lg text-white'/>
                </Link>
            </div>
            {/* Test question container*/}
            <div className='flex flex-col gap-10 pb-6'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-4'>
                        <div className='relative mb-10'>
                            <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Question 1</h3>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>Which of the following is not a type of Machine Learning </p>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit opacity-70'>
                                    <input className='text-4xl cursor-pointer' type='checkbox' id='option1' name='question1' value='Supervised Learning'/>
                                    <label className='cursor-pointer' for='option1'>Supervised Learning</label>
                                </div>
                                <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit opacity-70'>
                                    <input className='text-4xl cursor-pointer' type='checkbox' id='option2' name='question1' value='Unsupervised learning'/>
                                    <label className='cursor-pointer' for='option2'>Unsupervised Learning</label>
                                </div>
                                <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit opacity-70'>
                                    <input className='text-4xl cursor-pointer' type='checkbox' id='option3' name='question1' value='Reinforcement Learning'/>
                                    <label className='cursor-pointer' for='option3'>Reinforcement Learning</label>
                                </div>
                                <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit text-custom-green-two group'>
                                    <input className='text-4xl cursor-pointer checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option4' name='question1' value='Mathematical learning' checked/>
                                    <label className='cursor-pointer peer-checked:text-custom-green-two' for='option4'>Mathematical Learning</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <div className='relative mb-10'>
                            <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Question 2</h3>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <p>Which of the following is used in Deep Learning</p>
                            <div className='flex flex-col gap-2'>
                                <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit hover:text-custom-green-two group'>
                                    <input className='text-4xl cursor-pointer group-hover: checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option1' name='question1' value='supervised learning' checked/>
                                    <label className='cursor-pointer peer-checked:text-custom-green-two' for='option1'>Convolutional Neural Network</label>
                                </div>
                                <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit opacity-70'>
                                    <input className='text-4xl cursor-pointer' type='checkbox' id='option2' name='question1' value='Mathematical learning'/>
                                    <label className='cursor-pointer' for='option2'>Support Vector Machine</label>
                                </div>
                                <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit opacity-70'>
                                    <input className='text-4xl cursor-pointer' type='checkbox' id='option3' name='question1' value='Mathematical learning'/>
                                    <label className='cursor-pointer' for='option3'>K-Nearest Neighbour</label>
                                </div>
                                <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit opacity-70'>
                                    <input className='text-4xl cursor-pointer' type='checkbox' id='option4' name='question1' value='Mathematical learning'/>
                                    <label className='cursor-pointer' for='option4'>Random Forest</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LecturerTestContent