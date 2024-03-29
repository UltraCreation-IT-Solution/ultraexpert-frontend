import React, { useState } from "react";
import userImage from "../../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const LoginWithOTP = () => {

  const [step,setStep] = useState(1);

  const [userEmail, setUserEmail] = useState({
    email: "",
  });

  const [userOtp, setUserOtp] = useState({
    email: "",
    otp: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const navigate = useNavigate();

  const handleGoogleLink = () => {
    console.log("User want to login with google");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const otpRegex = /^\d{6}$/;

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (!userEmail.email.trim() || !emailRegex.test(userEmail.email)) {
      newErrors.email = "Invalid email";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const validateForm2 = () => {
    let isValid = true;
    const newErrors = {};
    if (!userOtp.otp.trim() || !otpRegex.test(userOtp.otp)) {
      newErrors.otp = "Invalid OTP";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSentOTP = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.get(`/login/?email=${userEmail.email}`);
        const data = response.data;
        if (
          data.status === 404 ||
          data.status === 500 ||
          data.status === 400 ||
          !data
        ) {
          window.alert("Invalid OTP");
          return;
        }
        console.log(data);
        alert("OTP sent successfully to your mobile number");
        nextStep();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleOTPVerification = async (e) => {
    e.preventDefault();
    setUserOtp({ ...userOtp, email: userEmail.email });
    if (validateForm2()) {
      try {
        const response = await axios.post("/login/", {email:userEmail.email,otp:userOtp.otp}, {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = response.data;
        if (data.status === 404 || data.status === 500 || data.status === 400) {
          window.alert("Invalid OTP");
          return;
        }
        console.log(data);
        alert("Login Successfull!");
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <div className="md:min-h-screen mt-[40px] bg-white flex justify-center items-center">
      <div className="lg:max-w-[50vw] md:w-[75%] w-[90%] flex md:flex-row flex-col bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        {step === 1 && (
          <form
            onSubmit={handleSentOTP}
            className="flex flex-col md:w-[50%] w-full"
          >
            <h1 className="text-4xl font-bold mb-8 text-[#3E5676]">Login With OTP</h1>

              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-1"
              >
                Enter your email address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="border rounded-sm p-2 w-full"
                value={userEmail.email}
                onChange={(e) =>
                  setUserEmail({ ...userEmail, email: e.target.value })
                }
              />
            
            <p className="text-red-500">{errors.email}</p>
            <div className="flex justify-between">
              <p
                onClick={handleLogin}
                className="text-xs cursor-pointer text-[#272727] underline hover:text-blue-500 cursor pointer"
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
              type="submit"
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
        )}
        {step === 2 && (
          <form
            onSubmit={handleOTPVerification}
            className="flex flex-col md:w-[50%] w-full"
          >
            <h1 className="text-4xl font-bold mb-8">Login With OTP</h1>
            
              <label
                htmlFor="email"
                className="block text-lg font-semibold mb-1"
              >
                Enter your email address:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="border rounded-md p-2 w-full"
                defaultValue={userEmail.email}
              />
            
            <p className="text-red-500">{errors.email}</p>
            
              <label
                htmlFor="otp"
                className="text-lg font-semibold mb-2"
              >
                Enter OTP:
              </label>
              <input
                type="number"
                id="otp"
                name="otp"
                placeholder="Enter OTP"
                className="border rounded-md p-2 w-full"
                value={userOtp.otp}
                onChange={(e) => setUserOtp({...userOtp, otp: e.target.value })}
              />
              <p className="text-red-500">{errors.otp}</p>
            
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
              onClick={prevStep}
              className="bg-gray-500 text-lg text-white cursor-pointer font-semibold py-2 px-4 mb-2 rounded-md w-full"
            >
              Previous
            </button>
            <button
              type="submit"
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
          </form>
        )}
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
