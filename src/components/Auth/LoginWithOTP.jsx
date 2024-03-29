import React, { useState } from "react";
import userImage from "../../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const LoginWithOTP = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const handleGoogleLink = () => {
    console.log("User want to login with google");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleSentOTP = async (e) => {
    e.preventDefault();
    setShowOtp(true);
    const response = await axios.get(
      `/verify/?action=2&email=${email}&otp=${otp}`
    );
    console.log(response);
    alert("OTP sent successfully to your email address");
    // navigate("/sentOTP");
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <div className="h-full mt-[100px] bg-white m-auto flex justify-center items-center">
      <div className="lg:max-w-[50vw] md:w-[75%] w-[90%] flex md:flex-row flex-col bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <div className="flex flex-col md:w-[50%] w-full">
          <form method="post">
            <h1 className="text-4xl font-bold mb-8">Login With OTP</h1>
            <label htmlFor="email" className="text-lg font-semibold mb-2">
              Enter your email address:
            </label>
            <input
              type="text"
              id="email"
              value={email}
              placeholder="Enter your email address"
              className="border rounded-md mb-4 p-2 w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            {showOtp && (
              <input
                type="number"
                value={otp}
                id="OTP"
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter your OTP here"
                className="border rounded-md mb-4 p-2 w-full"
              />
            )}
            <div className="flex justify-between">
              <p
                onClick={handleLogin}
                className="text-xs cursor-pointer text-[#272727] underline hover:text-blue-500 cursor pointer"
              >
                Login with Email & Password?
              </p>
              <p
                onClick={handleGoogleLink}
                className="text-xs text-[#272727] hover:text-blue-500 cursor pointer underline"
              >
                Login with Google?
              </p>
            </div>
            <button
              onClick={handleSentOTP}
              className="bg-[#272727] text-lg text-white cursor-pointer font-semibold mb-[1vw] py-2 px-4 rounded-md w-full"
            >
              Send OTP
            </button>
            <p className="text-xs underline">Want to create an account?</p>
            <button
              onClick={handleSignUp}
              className="bg-white text-[#272727] w-full text-lg font-semibold px-4 py-2 cursor-pointer rounded-md border border-solid border-[#272727]"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="md:w-[50%] flex items-center justify-center">
          <img
            src={userImage}
            alt="userImage"
            className="lg:w-[385px] lg:h-[300px] md:w-[300px] md:h-[220px] sm:w-[370px] sm:h-[250px] w-[300px] h-[220px]"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginWithOTP;
