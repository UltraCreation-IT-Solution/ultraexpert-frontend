import React from "react";
import { Link } from "react-router-dom";
const ServiceBooking = () => {
  return (
    <div className="w-[85%] m-auto md:flex md:justify-center md:items-center py-[2vw]">

      <div className="md:flex items-center justify-around mt-[80px]">
        <div className="w-full md:w-[35%] mt-[4vw] md:mt-0 flex flex-col items-center">
          <div className="text-[8vw] md:text-[3vw] font-extrabold text-center">
            Confirm Your Booking!
          </div>
          <p className="text-gray-700 my-[2.3vw] text-center text-[2.6vw] md:text-[1.5vw]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            laborum dolores nulla, iste perferendis accusantium, fugiat
            architecto molestiae itaque fugit, voluptatibus officia doloribus.
          </p>
          <div className="flex gap-[2vw] md:gap-[.5vw]">
            <Link to="">
              <button className="px-[2.7vw] py-[1vw] md:px-[2vw] md:py-[0.6vw] text-white  bg-[#2A2A2A] rounded-sm md:rounded-md text-[2.1vw] md:text-[1.2vw]">
                View service
              </button>
            </Link>
            <Link to="">
              <button className="px-[2.7vw] py-[1vw] md:px-[2vw] md:py-[0.6vw] text-black bg-white border font-semibold rounded-sm md:rounded-md text-[2.1vw] md:text-[1.2vw]">
                Back to services
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full md:w-[40%] bg-[#F2F2F2] pb-[4vw] md:pb-[1.5vw] py-[1.5vw] px-[2vw] mt-[10vw] md:mt-0">

            <div className="text-[2.8vw] md:text-[1.7vw] font-bold">
              Review Details
            </div>

            <div className="mt-[2.5vw] border-b border-gray-300 border-solid text-gray-600">
              <div className="flex justify-between text-[2.3vw] md:text-[1.3vw] mb-[1.5vw] md:mb-[1vw]">
                <span>Service Name</span>
                <span>Website Development</span>
              </div>
              <div className="flex justify-between text-[2.3vw] md:text-[1.3vw] mb-[1.5vw] md:mb-[1vw]">
                <span>Expert Name</span>
                <span>Antony joe</span>
              </div>
              <div className="flex justify-between text-[2.3vw] md:text-[1.3vw] mb-[1.5vw] md:mb-[1vw]">
                <span>Service Duration</span>
                <span>1 hour</span>
              </div>
              <div className="flex justify-between text-[2.3vw] md:text-[1.3vw] mb-[1.5vw] md:mb-[1vw]">
                <span>Date</span>
                <span>Jan 25, 2023 </span>
              </div>
              <div className="flex justify-between text-[2.3vw] md:text-[1.3vw] mb-[1.5vw] md:mb-[1vw]">
                <span>Time</span>
                <span>05:35 PM </span>
              </div>
            </div>

            <div className="mt-[2vw] border-b border-gray-300 border-solid text-gray-600">
                <div className="flex justify-between text-[2.3vw] md:text-[1.3vw] mb-[1.5vw] md:mb-[1vw]">
                  <span>Expert Charge</span>
                  <span>1500/-</span>
                </div>
                <div className="flex justify-between text-[2.3vw] md:text-[1.3vw] mb-[1.5vw] md:mb-[1vw]">
                  <span>Platform Charge</span>
                  <span>100/-</span>
                </div>
                <div className="flex justify-between text-[2.3vw] md:text-[1.3vw] mb-[1.5vw] md:mb-[1vw]">
                  <span>Tax</span>
                  <span>10/- </span>
                </div>
              </div>
            
            <div className="flex justify-between mt-[1.5vw] text-[2.5vw] md:text-[1.4vw] font-semibold">
              <span>Total:</span>
              <span>1610/-</span>
            </div>
            <div className="flex justify-center">
              <button className="text-white text-[2.2vw] md:text-[1.2vw] bg-[#2A2A2A] mt-[2.5vw] px-[2.7vw] py-[1.5vw] md:px-[2vw] md:py-[0.6vw] rounded-sm md:rounded-md w-[50%]">
                Proceed to Pay
              </button>
            </div>
          
        </div>

      </div>
    </div>
  );
};

export default ServiceBooking;