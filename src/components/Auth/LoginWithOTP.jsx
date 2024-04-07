import React, { useState } from "react";
import userImage from "../../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const LoginWithOTP = () => {
  const [step, setStep] = useState(1);

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
        // const res = await fetch(
        //   `http://localhost:8000/login/?email=${userEmail.email}`
        // );
        // const json = await res.json();
        // console.log(json);
        const response = await axios.get(`/login/?email=${userEmail.email}`);
        const data = response.data;
        if (!data || data.status === 400 || data.status === 401) {
          window.alert("Invalid OTP");
          return;
        }
        alert("OTP sent successfully to your email address");
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
        // const res = await fetch("http://localhost:8000/login/", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ email: userEmail.email, otp: userOtp.otp }),
        // });
        const response = await axios.post(
          "/login/",
          { email: userEmail.email, otp: userOtp.otp },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        const data = response.data;
        // const json = await res.json();
        // console.log(json);
        if (!data || data.status === 400 || data.status === 401) {
          window.alert("Invalid OTP");
          return;
        }
        alert("Login Successfull!");
        navigate("/");
        // console.log(data);
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
    <div className="md:h-screen mt-[100px] bg-white">
      <div className="lg:w-[60%] md:w-[75%] sm:w-[85%] w-[95%] flex md:flex-row flex-col mx-auto bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        {step === 1 && (
          <form
            onSubmit={handleSentOTP}
            className="flex flex-col md:w-[50%] w-full"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8 text-[#3E5676]">
              Login With OTP
            </h1>

            <label
              htmlFor="email"
              className="block text-base md:text-lg font-semibold mb-1"
            >
              Enter your email address:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="border rounded-sm p-2 w-full mb-3"
              value={userEmail.email}
              onChange={(e) =>
                setUserEmail({ ...userEmail, email: e.target.value })
              }
            />

            <div className="text-red-500 text-sm mb-1">{errors.email}</div>
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
              className="bg-[#272727] text-base md:text-lg text-white cursor-pointer font-semibold mb-[1vw] py-2 px-4 rounded-md w-full"
            >
              Send OTP
            </button>
            <p className="text-xs underline">Want to create an account?</p>
            <button
              onClick={handleSignUp}
              className="bg-white text-[#272727] w-full text-base md:text-lg font-semibold px-4 py-2 cursor-pointer rounded-md border border-solid border-[#272727]"
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
            <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8">
              Login With OTP
            </h1>

            <label
              htmlFor="email"
              className="block text-base md:text-lg font-semibold mb-1"
            >
              Enter your email address:
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
              className="border rounded-md p-2 w-full mb-3"
              defaultValue={userEmail.email}
            />

            <div className="text-red-500 text-sm mb-1">{errors.email}</div>

            <label
              htmlFor="otp"
              className="text-base before:md:text-lg font-semibold mb-2"
            >
              Enter OTP:
            </label>
            <input
              type="number"
              id="otp"
              name="otp"
              placeholder="Enter OTP"
              className="border rounded-md p-2 w-full mb-3"
              value={userOtp.otp}
              onChange={(e) => setUserOtp({ ...userOtp, otp: e.target.value })}
            />
            <div className="text-red-500 text-sm mb-1">{errors.otp}</div>

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
              className="bg-gray-500 text-base md:text-lg text-white cursor-pointer font-semibold py-2 px-4 mb-2 rounded-md w-full"
            >
              Previous
            </button>
            <button
              type="submit"
              className="bg-[#272727] text-base md:text-lg text-white cursor-pointer font-semibold mb-[1vw] py-2 px-4 rounded-md w-full"
            >
              Verify OTP
            </button>
            <p className="text-xs underline">Want to create an account?</p>
            <button
              onClick={handleSignUp}
              className="bg-white text-[#272727] w-full text-base md:text-lg font-semibold px-4 py-2 cursor-pointer rounded-md border border-solid border-[#272727]"
            >
              Sign Up
            </button>
          </form>
        )}
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <img src={userImage} alt="userImage" />
        </div>
      </div>
    </div>
  );
};

export default LoginWithOTP;
