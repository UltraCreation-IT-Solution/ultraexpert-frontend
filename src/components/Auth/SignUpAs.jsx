import React from 'react'
import expertImg from "../../assets/images/expertRep.png";
import customerImg from "../../assets/images/customerRep.png";
import { useNavigate } from 'react-router-dom';

const SignUpAs = () => {

  const navigate = useNavigate();

  const handleCustomerSignUp = () =>{
    navigate("/signUpAs/customer");
  }
  const handleExpertSignUp = () =>{
    navigate("/signUpAs/expert");
  }

  return (
    <div className='md:min-h-screen mt-[100px] md:mt-[40px] bg-white flex justify-center items-center'>
      <div className='lg:max-w-[75%] md:w-[75%] w-[90%] flex items-center justify-center md:flex-row flex-col bg-white px-8 py-12 rounded-xl shadow-md border border-solid border-[#000000]'>
        <div className='flex flex-col'>
          <img className='h-64 md:h-full' src={expertImg} alt="Expert" />
          <button onClick={()=>handleExpertSignUp()} className='cursor-pointer mx-auto px-5 py-2 text-base md:text-lg bg-[#272727] text-white rounded-lg'>SignUp as Expert</button>
        </div>
        <u className='border border-[#aeaeae] border-solid md:rotate-90 w-[90%] md:w-[60%] mt-10 md:my-0'></u>
        <div className='flex flex-col'>
          <img className='h-64 md:h-full' src={customerImg} alt="Customer" />
          <button onClick={()=>handleCustomerSignUp()} className='cursor-pointer mx-auto px-5 py-2 text-base md:text-lg bg-[#272727] text-white rounded-lg'>SignUp as Expert</button>
        </div>
      </div>
    </div>
  )
}

export default SignUpAs
