import React from "react";

const ServiceBooking = () => {
  return (
    <>
    <h1 className="font-extrabold text-[40px] text-center">Booking Page</h1>

    <div className="flex items-center justify-around m-auto w-[85%]">

      <div className="w-[35%]">
        <h1 className="text-[50px] font-extrabold">Confirm Your Booking!</h1>
        <p className="text-gray-800 my-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          laborum dolores nulla, iste perferendis accusantium, fugiat architecto
          molestiae itaque fugit, voluptatibus officia doloribus.
        </p>
        <div className="">
          <button className="text-white text-[20px] bg-green-400 px-5 py-2 rounded-md m-2">
            View Service
          </button>
          <button className="text-white text-[20px] bg-blue-400 px-5 py-2 rounded-md m-2">
            Go to home
          </button>
        </div>
      </div>

      <div className="  w-[40%] ">
        <div className="bg-gray-50 rounded-3xl p-3">
          <h1 className="text-[30px] font-semibold text-slate-700 ">
            Review Details
          </h1>
          <div className="flex justify-between mt-4 text-[20px]">
            <span>Service Name</span>
            <span>Website Development</span>
          </div>
          <div className="flex justify-between mt-4 text-[20px]">
            <span>Expert Name</span>
            <span>Antony joe</span>
          </div>
          <div className="flex justify-between mt-4 text-[20px]">
            <span>Service Duration</span>
            <span>1 hour</span>
          </div>
          <div className="flex justify-between mt-4 text-[20px]">
            <span>Date</span>
            <span>Jan 25, 2023 </span>
          </div>
          <div className="flex justify-between mt-4 text-[20px]">
            <span>Time</span>
            <span>05:35 PM </span>
          </div>
          <div className="flex justify-between text-[20px] mt-10">
            <span>Expert Charge</span>
            <span>1500/- </span>
          </div>
          <div className="flex justify-between mt-4 text-[20px]">
            <span>Platform Charge</span>
            <span>100/- </span>
          </div>
          <div className="flex justify-between mt-4 text-[20px]">
            <span>Tax</span>
            <span>10/- </span>
          </div>
          <div className="flex justify-between mt-4 text-[25px] font-semibold">
            <span>Total</span>
            <span>1610/-</span>
          </div>
        </div>
        <button className="text-white text-[20px] bg-green-400 px-5 py-2 rounded-md m-2 w-[100%]">
            Proceed to Payment
        </button>
      </div>

    </div>
    </>
  );
};

export default ServiceBooking;
