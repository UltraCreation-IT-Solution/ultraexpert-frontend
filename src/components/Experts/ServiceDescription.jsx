import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import { GiDuration } from "react-icons/gi";
const ServiceDescription = () => {
  return (
    <>
      <div className='w-[85%] m-auto'>
        
        <h1 className='font-extrabold text-[40px] text-center'>Service Details</h1>
        <div className='flex gap-5 items-center'>
          <div>
            <img className='rounded-full h-40 w-44 ' src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
            <div className='text-[20px] font-semibold text-center'>Antony Joe</div>
          </div>
          <div>
            <div className='flex gap-2 items-center'>
              <FaLocationDot size={25}/>
              <div className='text-[20px]'>United Kindom</div>
            </div>
            <div className='flex gap-2 items-center my-2'>
              <MdStar size={25}/>
              <div className='text-[20px]'>4.9 (Ratings)</div>
            </div>
            <button className="text-white text-[15px]  bg-green-400 px-5 py-2 my-2">Follow</button>
          </div>
        </div>

        <div className='bg-slate-50 rounded-xl p-3 mt-4'>
          <h1 className='text-[25px] font-extrabol mb-4 '>Website & Application development</h1>
          <div className='flex items-center gap-2'>
            <GiDuration />
            <div className='text-[20px] my-2'>Duration : 1 Hour</div>
          </div>
          <div className='text-gray-500'>
            Popular tags: Frontend, Backend, Full-stack, Technologies 
          </div>
        </div>

        <div className='bg-slate-50 rounded-xl p-3 mt-4 '>
          <p className='text-gray-800'><span className='text-[25px]'>Description</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quidem explicabo id eius delectus ipsum ratione dolore quae deleniti. Sit velit quos laudantium sapiente quaerat quam ad, maxime doloribus maiores voluptatibus facere pariatur enim sed odit molestiae modi magni nesciunt. Sit velit quos laudantium sapiente quaerat quam ad, maxime doloribus maiores voluptatibus facere pariatur enim sed odit molestiae modi magni nesciunt. Sit velit quos laudantium sapiente quaerat quam ad, maxime doloribus maiores voluptatibus facere pariatur enim sed odit molestiae modi magni nesciunt. Sit velit quos laudantium sapiente quaerat quam ad, maxime doloribus maiores voluptatibus facere pariatur enim sed odit molestiae modi magni nesciunt.</p>
        </div>

        <div className='flex items-center gap-5 p-3 mt-4'>
          <div>
            <h1 className='text-[25px] font-extrabol'>Service Price : <span className=''>1500/-</span></h1>
          </div>
          <button className="text-white text-[20px] bg-green-400 px-5 py-2">Book Now</button>
        </div>

      </div>
    </>

  )
}

export default ServiceDescription;