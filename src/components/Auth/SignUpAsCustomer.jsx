import React from 'react'

const SignUpAsCustomer = () => {
  return (
    <div className="md:min-h-screen mt-[100px] md:mt-[80px] bg-white flex justify-center items-center">
      <form className="flex justify-center flex-col w-[90%] md:w-[70%] bg-white rounded-xl shadow-md border border-solid border-[#000000]">
        <h1 className="text-3xl md:text-4xl font-bold text-[#3E5676] px-2 md:px-6">
          Sign Up of Customer
        </h1>
        <u className="border border-solid border-[#a3a3a3] w-[95%] mx-auto mb-2"></u>
        <div className="flex md:flex-row flex-col my-2 ">
          <div className="md:w-1/3 font-bold text-lg px-4 md:px-10 mb-2 md:mb-0">Account</div>
          <div className="md:w-2/3 flex flex-col px-4 md:px-0">
            <label htmlFor="name" className="text-base mb-1">
              Name
            </label>
            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              className="w-full md:w-[70%] border border-[#3E506D] px-3 py-2 rounded-sm mb-3"
            />
            <label htmlFor="email" className="text-base mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full md:w-[70%] border border-[#3E506D] px-3 py-2 rounded-sm mb-3"
            />
            <label htmlFor="number" className="text-base mb-1">
              Phone Number
            </label>
            <input
              id="number"
              name="number"
              placeholder="Enter your number"
              className="w-full md:w-[70%] border border-[#3E506D] px-3 py-2 rounded-sm mb-3"
            />
          </div>
        </div>
        <u className="border border-solid border-[#a3a3a3] w-[95%] mx-auto mb-2"></u>
        <div className="flex md:flex-row flex-col my-2 ">
          <div className="md:w-1/3 font-bold text-lg px-4 md:px-10 mb-2 md:mb-0">Details</div>
          <div className="md:w-2/3 flex flex-col px-4 md:px-0">
            <label htmlFor="status" className="text-base mb-1">
              Marital Status
            </label>
            <input
              id="status"
              name="status"
              placeholder="Enter your Marital Status"
              className="w-full md:w-[70%] border border-[#3E506D] px-3 py-2 rounded-sm mb-3"
            />
            <label htmlFor="level" className="text-base mb-1">
              Profession
            </label>
            <input
              id="profession"
              name="profession"
              placeholder="Enter your Profession"
              className="w-full md:w-[70%] border border-[#3E506D] px-3 py-2 rounded-sm mb-3"
            />
            <label htmlFor="isExpert" className="text-base mb-1">
              Is Expert
            </label>
            <select className="w-full md:w-[70%] border border-[#3E506D] px-3 py-2 rounded-sm mb-3" name="isExpert" id="isExpert">
              <option value="basic">True</option>
              <option value="basic">False</option>
            </select>
            <label htmlFor="about" className="text-base mb-1">
              About Me
            </label>
            <input
              id="text"
              name="about"
              placeholder="New Account"
              className="w-full md:w-[70%] border border-[#3E506D] px-3 py-2 rounded-sm mb-3"
            />
            <label htmlFor="interest" className="text-base mb-1">
              Interest
            </label>
            <div className='flex gap-1 w-full md:w-[70%] border border-solid border-[#3E506D] px-3 py-2 rounded-sm'>
              <button className='px-3 py-1 bg-inherit border border-[#000000] rounded-full'>Python</button>
              <button className='px-3 py-1 bg-inherit border border-[#000000] rounded-full'>C++</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <button type="submit" className="my-3 w-24 md:w-28 py-3 text-base md:text-lg font-semibold bg-[#3E5676] text-white rounded-md">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SignUpAsCustomer
