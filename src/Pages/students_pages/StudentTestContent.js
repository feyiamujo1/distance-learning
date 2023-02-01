import React from 'react'

function StudentTestContent() {
    

  return (
    <div className='px-10 py-11 h-full'>
        <div className='w-full min-h-screen p-6 bg-white rounded-md flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
                <div className='flex flex-col gap-2'>
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-col'>
                            <h1 className='text-3xl font-bold '>Introduction to Programming</h1>
                            {/* <p className='text-sm text-black'>Session: 2022/2023</p> */}
                            <p className='text-sm text-black font-bold'>Test: CMP321</p>
                            <p className='text-sm font-bold text-custom-green-two mb-4'>Questions: 20</p>
                            <p className='text-custom-brown text-sm'>Instructions: <br/>
                                1. Please select on one option <br/>2. Ensure to click on submit after you select your answer 
                                <br/>3. Once you submit your answer it can't be undone                          
                            </p>
                        </div>
                        <div className='py-3 px-5 flex flex-row rounded-md items-center gap-2 bg-custom-brown'>
                            <p className='text-base font-medium text-white text-custom-off-white'>Score: 0/20</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Test question container*/}
            <div className='flex flex-col gap-10 w-fit'>
                <div className='flex flex-col gap-4'>
                    <div className='relative mb-10'>
                        <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Question 1</h3>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Which of the following is not a type of Machine Learning </p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit hover:text-custom-green-two group'>
                                <input className='text-4xl cursor-pointer group-hover: checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option1' name='question1' value='supervised learning'/>
                                <label className='cursor-pointer peer-checked:text-custom-green-two' for='option1'>Supervised Learning</label>
                            </div>
                            <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit hover:text-custom-green-two group'>
                                <input className='text-4xl cursor-pointer group-hover: checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option2' name='question1' value='unsupervised learning'/>
                                <label className='cursor-pointer peer-checked:text-custom-green-two' for='option2'>Unsupervised Learning</label>
                            </div>
                            <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit hover:text-custom-green-two group'>
                                <input className='text-4xl cursor-pointer group-hover: checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option3' name='question1' value='reinforcement learning'/>
                                <label className='cursor-pointer peer-checked:text-custom-green-two' for='option3'>Reinforcement Learning</label>
                            </div>
                            <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit hover:text-custom-green-two group'>
                                <input className='text-4xl cursor-pointer group-hover: checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option4' name='question1' value='Mathematical learning'/>
                                <label className='cursor-pointer peer-checked:text-custom-green-two' for='option4'>Mathematical Learning</label>
                            </div>
                        </div>
                        <div className='flex flex-col items-end w-full'>
                            <button className='px-4 py-2 bg-custom-green-two text-white font-medium rounded-md w-fit hover:bg-custom-brown hover:text-custom-off-white'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-10 w-fit'>
                <div className='flex flex-col gap-4'>
                    <div className='relative mb-10'>
                        <h3 className='absolute -left-6 px-6 py-2.5 bg-custom-green-two text-white font-bold'>Question 2</h3>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <p>Which of the following is not a type of Machine Learning </p>
                        <div className='flex flex-col gap-2'>
                            <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit hover:text-custom-green-two group'>
                                <input className='text-4xl cursor-pointer group-hover: checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option1' name='question1' value='supervised learning'/>
                                <label className='cursor-pointer peer-checked:text-custom-green-two' for='option1'>Supervised Learning</label>
                            </div>
                            <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit hover:text-custom-green-two group'>
                                <input className='text-4xl cursor-pointer group-hover: checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option2' name='question1' value='unsupervised learning'/>
                                <label className='cursor-pointer peer-checked:text-custom-green-two' for='option2'>Unsupervised Learning</label>
                            </div>
                            <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit hover:text-custom-green-two group'>
                                <input className='text-4xl cursor-pointer group-hover: checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option3' name='question1' value='reinforcement learning'/>
                                <label className='cursor-pointer peer-checked:text-custom-green-two' for='option3'>Reinforcement Learning</label>
                            </div>
                            <div className='flex flex-row gap-2 justify-center cursor-pointer w-fit hover:text-custom-green-two group'>
                                <input className='text-4xl cursor-pointer group-hover: checked:bg-custom-green-two accent-custom-green-two' type='checkbox' id='option4' name='question1' value='Mathematical learning'/>
                                <label className='cursor-pointer peer-checked:text-custom-green-two' for='option4'>Mathematical Learning</label>
                            </div>
                        </div>
                        <div className='flex flex-col items-end w-full'>
                            <button className='px-4 py-2 bg-custom-green-two text-white font-medium rounded-md w-fit hover:bg-custom-brown hover:text-custom-off-white'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentTestContent