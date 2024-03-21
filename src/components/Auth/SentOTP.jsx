import React from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../../assets/images/image.png";

const SentOTP = () => {
  const navigate = useNavigate();

  const handleGoogleLink = () => {
    console.log("User want to login with google");
  };

  const handleLogin = () => {
    navigate("/loginTest");
  };

  const handleSentOTP = () => {
    navigate("/sentOTP");
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };
  return (
    <div className="h-full mt-[100px] bg-white m-auto flex justify-center items-center">
      <div className="lg:max-w-[50vw] md:w-[75%] w-[90%] flex md:flex-row flex-col bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <div className="flex flex-col md:w-[50%] w-full">
          <h1 className="text-4xl font-bold mb-8">Login With OTP</h1>
          <label htmlFor="mobileNumber" className="text-lg font-semibold mb-2">
            Enter OTP:
          </label>
          <input
            type="number"
            id="mobileNumber"
            placeholder="Enter OTP"
            className="border rounded-md mb-4 p-2 w-full"
          />
          <div className="flex justify-between">
            <p
              onClick={handleLogin}
              className="text-xs text-[#272727] underline hover:text-blue-500 cursor pointer"
            >
              Login with Email?
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
            Verify OTP
          </button>
          <p className="text-xs underline">Want to create an account?</p>
          <button
            onClick={handleSignUp}
            className="bg-white text-[#272727] w-full text-lg font-semibold px-4 py-2 cursor-pointer rounded-md border border-solid border-[#272727]"
          >
            Sign Up
          </button>
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

export default SentOTP;
