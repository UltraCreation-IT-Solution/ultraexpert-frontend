import React, { useState } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import axios from "../../axios";
const ServiceBooking = () => {
  const location = useLocation();
  console.log(location);
  const serviceData = location.state;
  const params = useParams();

  // const handleBookService = async () => {

  //   try {
  //     const res = await axios.post(
  //       "/booking/",
  //       {
  //         action:1,
  //         expert_id: serviceData?.servDesc?.expert_data?.id,
  //         service_id: serviceData?.servDesc?.id,
  //         slot_id: serviceData?.slotData?.slotId
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${jsonData.access_token}`,
  //         },
  //       }
  //     );
  //     const json = res.data;
  //     if (!json) {
  //       console.log("no data")
  //       return;
  //     }
  //     console.log(json)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  const cookie = document.cookie.split(";");
  const jsonData = {};

  cookie.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key.trim()] = value;
  });

  const [amount, setAmount] = useState(500);
  const [serviceId, setServiceId] = useState("");
  const [slotId, setSlotId] = useState("");
  const [expertId, setExpertId] = useState("");

  // complete order
  const complete_order = (paymentID, orderID, signature) => {
    console.log(signature);
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${jsonData.access_token}`,
      },
      url: "https://api.ultraxpert.in/booking/",
      data: {
        action: 2,
        payment_id: paymentID,
        order_id: orderID,
        payment_signature: signature,
        expert_id: serviceData?.servDesc?.expert_data?.id,
        service_id: serviceData?.servDesc?.id,
        slot_id: serviceData?.slotData?.slotId,
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const razorPay = () => {
    // create order
    axios({
      method: "post",
      headers: {
        Authorization: `Bearer ${jsonData.access_token}`,
      },
      url: "https://api.ultraxpert.in/booking/",
      data: {
        action: 1,
        expert_id: serviceData?.servDesc?.expert_data?.id,
        service_id: serviceData?.servDesc?.id,
        slot_id: serviceData?.slotData?.slotId,
      },
    })
      .then((response) => {
        // get order id
        const order_id = response.data.data.order_id;

        // handle payment
        const options = {
          key: "rzp_test_ykgbM4br3OsYRL", // Enter the Key ID generated from the Dashboard
          name: "Ultraxpert",
          description: "Test Transaction",
          image: "https://example.com/your_logo",
          order_id: order_id, // This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
          handler: function (response) {
            console.log(response);
            // complete order
            complete_order(
              response.razorpay_payment_id,
              response.razorpay_order_id,
              response.razorpay_signature
            );
          },
          prefill: {
            name: "Piyush Garg",
            email: "youremail@example.com",
            contact: "9999999999",
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp1 = new window.Razorpay(options);
        rzp1.on("payment.failed", function (response) {
          alert(response.error.code);
          alert(response.error.description);
          alert(response.error.source);
          alert(response.error.step);
          alert(response.error.reason);
          alert(response.error.metadata.order_id);
          alert(response.error.metadata.payment_id);
        });
        rzp1.open();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="px-[5vw] py-[2vw]">
      <div className="lg:flex items-center justify-around mt-[80px]">
        <div className="w-full lg:w-[45%] py-5 mt-[4vw] lg:mt-0 flex flex-col items-center">
          <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center overflow-hidden pb-3">
            Confirm Your Booking!
          </div>
          <p className="text-gray-700 my-6 text-center text-sm md:text-base">
            {serviceData?.servDesc?.description}
          </p>
          <div className="flex gap-[1vw] md:gap-2">
            <Link to={`/experts/service/${serviceData?.servDesc?.id}`}>
              <button className="px-4 py-[2vw] md:px-[2vw] md:py-[0.6vw] text-white  bg-[#2A2A2A] rounded-sm md:rounded-md text-xs md:text-base">
                View service
              </button>
            </Link>
            <Link to="/services">
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
              <span className="text-right">
                {" "}
                {serviceData?.servDesc?.service_name}
              </span>
            </div>
            <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg mt-2">
              <span>Expert Name</span>
              <span className="text-right">
                {serviceData?.servDesc?.expert_data?.first_name}{" "}
                {serviceData?.servDesc?.expert_data?.last_name}{" "}
              </span>
            </div>
            <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg mt-2">
              <span>Service Duration</span>
              <span>{serviceData?.slotData?.slotDuration} </span>
            </div>
            <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg mt-2">
              <span>Date</span>
              <span>{serviceData?.slotData?.date} </span>
            </div>
            <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg mt-2">
              <span>Start Time</span>
              <span>{serviceData?.slotData?.slotStartTime} </span>
            </div>
            <div className="flex justify-between gap-3 text-xs sm:text-base md:text-lg mt-2">
              <span>End Time</span>
              <span>{serviceData?.slotData?.slotEndTime} </span>
            </div>
          </div>

          <div className="mt-[2vw] border-b border-gray-300 border-solid text-gray-600">
            <div className="flex justify-between text-xs sm:text-base md:text-lg mt-2">
              <span>Expert Charge</span>
              <span>₹{serviceData?.servDesc?.price} </span>
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

            <div className="mt-[2vw] border-b border-gray-300 border-solid text-gray-600">
                <div className="flex justify-between text-xs sm:text-base md:text-lg my-2">
                  <span>Expert Charge</span>
                  <span>₹{serviceData?.servDesc?.price} </span>
                </div>
                {/* <div className="flex justify-between text-xs sm:text-base md:text-lg mt-2">
                  <span>Platform Charge</span>
                  <span>100/-</span>
                </div>
                <div className="flex justify-between text-xs sm:text-base md:text-lg mt-2">
                  <span>Tax</span>
                  <span>10/- </span>
                </div> */}
              </div>
            
            <div className="flex justify-between mt-[1.5vw] text-xs sm:text-base md:text-lg font-semibold">
              <span>Total:</span>
              <span>₹{serviceData?.servDesc?.price}</span>
            </div>
            <div className="flex justify-center">
              <button 
              onClick={()=> razorPay()}
              className="text-white text-sm md:text-base bg-[#2A2A2A] mt-[2.5vw] px-[2.7vw] py-[1.5vw] md:px-[2vw] md:py-[0.6vw] rounded-sm md:rounded-md w-[50%]">
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
