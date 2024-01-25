import React from "react";
import Navbar from "../Boundary/Navbar";
import { Link } from "react-router-dom";
const ServiceBooking = () => {
  return (
    <div>
      <Navbar />

      <div className="flex items-center justify-around m-auto w-[85%] mt-[80px] py-[2vw]">
        <div className="w-[35%] flex flex-col items-center">
          <div className="text-[3vw] font-extrabold text-center">
            Confirm Your Booking!
          </div>
          <p className="text-gray-700 my-[2.3vw] text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            laborum dolores nulla, iste perferendis accusantium, fugiat
            architecto molestiae itaque fugit, voluptatibus officia doloribus.
          </p>
          <div className="flex gap-[.5vw]">
            <Link to="">
              <button className="px-[2vw] py-[0.5vw] text-white bg-black rounded-lg text-[2.4vw] md:text-[1.2vw]">
                View service
              </button>
            </Link>
            <Link to="">
              <button className="px-[2vw] py-[0.5vw] text-black bg-white border font-semibold rounded-lg text-[2.4vw] md:text-[1.2vw]">
                Back to services
              </button>
            </Link>
          </div>
        </div>

        <div className="w-[40%] bg-[#F2F2F2] py-[1.5vw] px-[2vw]">

            <div className="text-[1.5vw] font-bold ">
              Review Details
            </div>

            <div className="mt-[2.5vw] border-b border-gray-300 border-solid text-gray-600">
              <div className="flex justify-between text-[1.1vw] mb-[1vw]">
                <span>Service Name</span>
                <span>Website Development</span>
              </div>
              <div className="flex justify-between text-[1.1vw] mb-[1vw]">
                <span>Expert Name</span>
                <span>Antony joe</span>
              </div>
              <div className="flex justify-between text-[1.1vw] mb-[1vw]">
                <span>Service Duration</span>
                <span>1 hour</span>
              </div>
              <div className="flex justify-between text-[1.1vw] mb-[1vw]">
                <span>Date</span>
                <span>Jan 25, 2023 </span>
              </div>
              <div className="flex justify-between text-[1.1vw] mb-[1vw]">
                <span>Time</span>
                <span>05:35 PM </span>
              </div>
            </div>

            <div className="mt-[2vw] border-b border-gray-300 border-solid text-gray-600">
                <div className="flex justify-between text-[1.1vw] mb-[1vw]">
                  <span>Expert Charge</span>
                  <span>1500/-</span>
                </div>
                <div className="flex justify-between text-[1.1vw] mb-[1vw]">
                  <span>Platform Charge</span>
                  <span>100/-</span>
                </div>
                <div className="flex justify-between text-[1.1vw] mb-[1vw]">
                  <span>Tax</span>
                  <span>10/- </span>
                </div>
              </div>
            
            <div className="flex justify-between mt-[1.5vw] text-[1.2vw] font-semibold">
              <span>Total:</span>
              <span>1610/-</span>
            </div>
            <div className="flex justify-center">
              <button className="text-white text-[1.1vw] bg-black mt-[2.5vw] px-[2vw] py-[0.7vw] rounded-md w-[50%]">
                Proceed to Pay
              </button>
            </div>
          
        </div>

      </div>
    </div>
  );
};

export default ServiceBooking;
