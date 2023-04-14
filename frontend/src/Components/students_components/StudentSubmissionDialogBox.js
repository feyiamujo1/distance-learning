import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const StudentSubmissionDialogBox = ({ setOpenDialog, openDialog, testResponse, token }) => {

    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }, 0);
        if (openDialog) {
          document.body.style.overflowY = 'hidden'
        }
      }, [openDialog])

    const handleClose = () => {
        setOpenDialog(!openDialog);
        // console.log(setOpenDialog);
        document.body.style.overflowY = 'scroll';
    };

    const nextPage = () =>{
        handleClose();
        navigate('/');
    }

    // const Submit testQuestions = async () =>{
    //     let response a
    // }

    const handleSubmit = () => {
        const answers = [];
        console.log(testResponse)

        for (const key in testResponse) {
            // console.log(`${key}: ${testResponse[key]}`);
            answers.push(
                {
                    question_id: parseInt(key),
                    answer_choice_id: testResponse[key]
                }
            )
        }
        console.log(answers)

        // Send answers to backend here

        handleClose();

        // nextPage();
    }

  return (
    <div className='h-screen w-full absolute left-0 right-0 top-0 bottom-0 bg-slate-300/30 flex justify-center items-center z-20'>
        <div className='bg-white p-5 w-[92%] sm:w-[550px] md:w-[700px] rounded-md shadow-xl space-y-4'>
            <p className='text-custo text-custom-green font-semibold border-b-2 pb-4 text-lg'>Are you sure you want to submit form?</p>
            <p className='text-custom-brown text-base md:text-lg'>
                By clicking submit, you agree that the information provided is correct and can be used to generate
                Your CV.
            </p>
            <div className='flex justify-end gap-4'>
                <p onClick={handleClose} className='py-3 px-4 text-custom-blue font-medium text-base md:text-lg rounded-md hover:bg-custom-yellow hover:text-custom-green cursor-pointer'>
                    Cancel
                </p>
                <p onClick={handleSubmit} className='py-3 px-4 w-fit text-white font-medium text-base md:text-lg rounded-md hover:bg-custom-blue bg-custom-green hover:text-slate-400  cursor-pointer'>
                    Submit
                </p>
            </div>
        </div>
    </div>
  )
}

export default StudentSubmissionDialogBox