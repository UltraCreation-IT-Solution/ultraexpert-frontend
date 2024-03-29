import React from "react";
import { Link, useParams } from "react-router-dom";
const ServiceBooking = () => {
  const params= useParams();
  const {id} = params;
  {console.log(id);}
  return (
    <div className="px-[5vw] py-[2vw]">

      <div className="lg:flex items-center justify-around mt-[80px]">
        <div className="w-full lg:w-[45%] py-5 mt-[4vw] lg:mt-0 flex flex-col items-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center overflow-hidden pb-3">
            Confirm Your Booking!
          </div>
          <p className="text-gray-700 my-6 text-center text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            laborum dolores nulla, iste perferendis accusantium, fugiat
            architecto molestiae itaque fugit, voluptatibus officia doloribus.
          </p>
          <div className="flex gap-[1vw] md:gap-2">
            <Link to="">
              <button className="px-4 py-[2vw] md:px-[2vw] md:py-[0.6vw] text-white  bg-[#2A2A2A] rounded-sm md:rounded-md text-xs md:text-base">
                View service
              </button>
            </Link>
            <Link to="/experts/expertprofile">
              <button className="px-4 py-[2vw] md:px-[2vw] md:py-[0.6vw] text-black bg-white border font-semibold rounded-sm md:rounded-md text-xs md:text-base cursor-pointer">
                Back to services
              </button>
            </Link>
          </div>
        </div>

        <div className="w-full lg:w-[40%] bg-[#F2F2F2] px-2 py-4 mt-8 lg:mt-0">

            <div className="text-sm sm:text-lg md:text-lg font-bold">
              Review Details
            </div>

            <div className="mt-[2.5vw] border-b border-gray-300 border-solid text-gray-600">
              <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg">
                <span>Service Name</span>
                <span className="text-right">Website Development using MERN</span>
              </div>
              <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg mt-2">
                <span>Expert Name</span>
                <span className="text-right">Antony joe singh kushwah</span>
              </div>
              <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg mt-2">
                <span>Service Duration</span>
                <span>1 hour</span>
              </div>
              <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg mt-2">
                <span>Date</span>
                <span>Jan 25, 2023 </span>
              </div>
              <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg mt-2">
                <span>Time</span>
                <span>05:35 PM </span>
              </div>
            </div>

            <div className="mt-[2vw] border-b border-gray-300 border-solid text-gray-600">
                <div className="flex justify-between text-xs sm:text-base md:text-lg mt-2">
                  <span>Expert Charge</span>
                  <span>1500/-</span>
                </div>
                <div className="flex justify-between text-xs sm:text-base md:text-lg mt-2">
                  <span>Platform Charge</span>
                  <span>100/-</span>
                </div>
                <div className="flex justify-between text-xs sm:text-base md:text-lg mt-2">
                  <span>Tax</span>
                  <span>10/- </span>
                </div>
              </div>
            
            <div className="flex justify-between mt-[1.5vw] text-xs sm:text-base md:text-lg font-semibold">
              <span>Total:</span>
              <span>1610/-</span>
            </div>
            <div className="flex justify-center">
              <button className="text-white text-sm md:text-base bg-[#2A2A2A] mt-[2.5vw] px-[2.7vw] py-[1.5vw] md:px-[2vw] md:py-[0.6vw] rounded-sm md:rounded-md w-[50%]">
                Proceed to Pay
              </button>
            </div>
          
        </div>

      </div>
    </div>
  );
};

export default ServiceBooking;



// import React from "react";
// import { Link } from "react-router-dom";
// const ServiceBooking = () => {
//   return (
//     <div className=" w-[85%] lg:w-[85%] md:w-[100%] h-[100vh] mx-auto my-[7vw] md:m-auto md:flex md:justify-center md:items-center">
//       <div className="md:flex items-center justify-around mt-[80px] py-[2vw]">
//         <div className="w-full md:w-[35%] flex flex-col items-center mb-10">
//           <div className="text-4xl md:text-6xl font-extrabold text-center mb-5">
//             Confirm Your Booking!
//           </div>
//           <p className="text-gray-700 my-[2.3vw] text-justify text-sm md:text-lg">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
//             laborum dolores nulla, iste perferendis accusantium, fugiat
//             architecto molestiae itaque fugit, voluptatibus officia doloribus.
//           </p>
//           <div className="flex mt-4 md:mt-0 gap-[2vw] md:gap-[0.8vw]">
//             <Link to="">
//               <button className="px-[2.7vw] py-[1vw] md:px-[1vw] md:py-[0.6vw] lg:px-[2vw] lg:py-[0.6vw] text-white bg-black border font-semibold rounded-sm sm:rounded-lg text-sm text-nowrap lg:text-base cursor-pointer">
//                 View service
//               </button>
//             </Link>
//             <Link to="">
//               <button className="px-[2.7vw] py-[1vw] md:px-[2vw] md:py-[0.6vw] lg:px-[1vw] text-black bg-white border font-semibold rounded-sm sm:rounded-lg text-nowrap text-sm lg:text-base cursor-pointer">
//                 Back to services
//               </button>
//             </Link>
//           </div>
//         </div>

//         <div className="w-full md:w-[50%] bg-[#F2F2F2] py-[1.5vw] px-[2vw]">
//           <div className="text-lg md:text-2xl font-bold">
//             Review Details
//           </div>
//           <div className="mt-[1.5vw] border-b border-gray-300 border-solid text-gray-600">
//             <div className="flex justify-between text-xs sm:text-base md:text-lg mb-[2vw] md:mb-[1vw] gap-[2vw]">
//               <span className="md:text-nowrap">Service Name</span>
//               <span className="md:text-nowrap">Website Development</span>
//             </div>
//             <div className="flex justify-between text-xs md:text-lg sm:text-base mb-[2vw] md:mb-[1vw]">
//               <span>Expert Name</span>
//               <span>Antony joe</span>
//             </div>
//             <div className="flex justify-between text-xs md:text-lg sm:text-base mb-[2vw] md:mb-[1vw]">
//               <span>Service Duration</span>
//               <span>1 hour</span>
//             </div>
//             <div className="flex justify-between text-xs md:text-lg sm:text-base mb-[2vw] md:mb-[1vw]">
//               <span>Date</span>
//               <span>Jan 25, 2023 </span>
//             </div>
//             <div className="flex justify-between text-xs md:text-lg sm:text-base mb-[2vw] md:mb-[1vw]">
//               <span>Time</span>
//               <span>05:35 PM </span>
//             </div>
//           </div>

//           <div className="mt-[2vw] border-b border-gray-300 border-solid text-gray-600">
//             <div className="flex justify-between text-xs sm:text-base md:text-lg mb-[2vw] md:mb-[1vw]">
//               <span>Expert Charge</span>
//               <span>1500/-</span>
//             </div>
//             <div className="flex justify-between text-xs sm:text-base md:text-lg mb-[2vw] md:mb-[1vw]">
//               <span>Platform Charge</span>
//               <span>100/-</span>
//             </div>
//             <div className="flex justify-between text-xs md:text-lg sm:text-base mb-[2vw] md:mb-[1vw]">
//               <span>Tax</span>
//               <span>10/- </span>
//             </div>
//           </div>

//           <div className="flex justify-between mt-[1.5vw] text-xs md:text-lg sm:text-base font-semibold">
//             <span>Total:</span>
//             <span>1610/-</span>
//           </div>
//           <div className="flex justify-center">
//             <button className="text-white text-sm md:text-base sm:text-base text-nowrap bg-black mt-[2.5vw] mb-[1vw] md:mb-0 px-[0.5vw] py-[2.5vw] sm:py-[1.5vw] sm:px-[1vw] md:px-[2vw] md:py-[0.7vw] rounded-md w-[50%] cursor-pointer">
//               Proceed to Pay
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceBooking;