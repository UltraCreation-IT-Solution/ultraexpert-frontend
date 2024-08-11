import React, { useState } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "../../axios";
const ServiceBooking = () => {
  const location = useLocation();
  console.log(location);
  const serviceData = location.state;
  const params = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const cookie = document.cookie.split(";");
  const jsonData = {};

  cookie.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key.trim()] = value;
  });

  const handleScheduleMeeting = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "/meetings/meeting/",
        {
          action: "1",
          time_slot_id: serviceData?.slotData?.slotId,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(response.data);
      setLoading(false);
      navigate("/customerdashboard/mybookings");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // complete order
  const complete_order = async (paymentID, orderID, signature) => {
    console.log(signature);
    const scheduledRoomId = Math.random().toString(36).substring(7);
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
        room_id: scheduledRoomId,
      },
    })
      .then((response) => {
        // on successful payment call
        console.log(response.data);

        // create the meeting room
        handleScheduleMeeting();
        // put everything in api for records
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
              onClick={() => razorPay()}
              className="text-white text-sm md:text-base bg-[#2A2A2A] mt-[2.5vw] px-[2.7vw] py-[1.5vw] md:px-[2vw] md:py-[0.6vw] rounded-sm md:rounded-md w-[50%]"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBooking;
