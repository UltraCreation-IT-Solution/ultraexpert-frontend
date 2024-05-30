import axios from "axios";
import { useState } from "react";

const Payment = () => {
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
        service_id: serviceId,
        slot_id: slotId,
        expert_id: expertId,
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
        service_id: serviceId,
        slot_id: slotId,
        expert_id: expertId,
      },
    })
      .then((response) => {
        // get order id
        const order_id = response.data.data.order_id;
        const amount = response.data.data.service_price;
        const currency = response.data.data.service_currency;

        // handle payment
        const options = {
          key: "rzp_test_ykgbM4br3OsYRL", // Enter the Key ID generated from the Dashboard
          name: "Acme Corp",
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
    <div className="container mx-auto mt-5 p-5 bg-yellow-400 rounded-lg text-center w-1/3">
      <h1 className="text-6xl font-bold mb-2">₹500</h1>
      <p className="text-xl mb-4">per year</p>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Basic</h3>
        <ul className="text-left text-sm space-y-2 mb-6">
          <li>1 custom domain e.g. img.yourdomain.com</li>
          <li>Media library backup</li>
          <li>Automated image analysis reports with Performance Center</li>
          <li>
            One-time 30 minute consultation with a media optimization expert
          </li>
          <li>Live chat & 12-hr SLA support tickets</li>
          <li>5 user accounts with role-based permissions</li>
        </ul>
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Service ID"
            value={serviceId}
            onChange={(e) => setServiceId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Slot ID"
            value={slotId}
            onChange={(e) => setSlotId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Expert ID"
            value={expertId}
            onChange={(e) => setExpertId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          type="button"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition duration-200"
          onClick={razorPay}
        >
          Upgrade now
        </button>
      </div>
    </div>
  );
};

export default Payment;
