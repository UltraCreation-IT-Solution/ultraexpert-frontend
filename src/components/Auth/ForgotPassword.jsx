import React, { useState } from "react";
import userImage from "../../assets/images/image.png";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [userOtp, setUserOtp] = useState({
    otp: "",
    password: "",
    confirmPassword: "",
  });
  const [userEmail, setUserEmail] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const otpRegex = /^\d{6}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/;

  const handleOtp = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.get(`/reset/?email=${userEmail.email}`);
        const data = response.data;
        if (!data || data.status === 400 || data.status === 401) {
          window.alert("Invalid Email");
          return;
        }

        alert("OTP sent successfully to your email address.");
        setStep(2);
      } catch (error) {
        console.log(error.message);
      }
    }
  };

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

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (validateForm2()) {
      try {
        const response = await axios.post(
          "/reset/",
          {
            email: userEmail.email,
            otp: userOtp.otp,
            password: userOtp.password,
            password_confirm: userOtp.confirmPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.data) {
          window.alert("Invalid OTP");
          return;
        }

        console.log(response.data);
        alert("Password Reset Successfully");
        navigate("/login");
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const validateForm2 = () => {
    let isValid = true;
    const newErrors = {};
    if (!userOtp.otp.trim() || !otpRegex.test(userOtp.otp)) {
      newErrors.otp = "Invalid OTP";
      isValid = false;
    }
    if (
      !userOtp.password ||
      !userOtp.confirmPassword ||
      !passwordRegex.test(userOtp.password)
    ) {
      newErrors.password = "Invalid Password";
      isValid = false;
    }
    if (userOtp.password !== userOtp.confirmPassword) {
      newErrors.confirmPassword = "Password does not match";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  return (
    <div className="md:h-screen mt-[100px] bg-white">
      <div className="lg:w-[60%] md:w-[75%] sm:w-[85%] w-[90%] flex md:flex-row flex-col mx-auto bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <div className="flex flex-col md:w-[50%] w-full">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8">
            Forgot Password
          </h1>
          {step === 1 && (
            <>
              <form onSubmit={handleOtp}>
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
                  className="border rounded-md p-2 w-full mb-3"
                  value={userEmail.email}
                  onChange={(e) =>
                    setUserEmail({ ...userEmail, email: e.target.value })
                  }
                />
                <div className="text-red-500 text-sm mb-1">{errors.email}</div>
                <button
                  type="submit"
                  className="bg-[#272727] text-white w-full text-base md:text-lg font-semibold px-4 py-2 cursor-pointer rounded-md"
                >
                  Send OTP
                </button>
              </form>
              <p className="text-xs underline">Want to create an account?</p>
              <button
                onClick={handleSignUp}
                className="bg-white text-[#272727] w-full text-base md:text-lg font-semibold px-4 py-2 cursor-pointer rounded-md border border-solid border-[#272727]"
              >
                Sign Up
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <form onSubmit={handleResetPassword}>
                <label
                  htmlFor="otp"
                  className="block text-base md:text-lg font-semibold mb-1"
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
                  onChange={(e) =>
                    setUserOtp({ ...userOtp, otp: e.target.value })
                  }
                />
                <div className="text-red-500 text-sm mb-1">{errors.otp}</div>
                <label
                  htmlFor="password"
                  className="block text-base md:text-lg font-semibold mb-1"
                >
                  Enter Password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  className="border rounded-md p-2 w-full mb-3"
                  value={userOtp.password}
                  onChange={(e) =>
                    setUserOtp({ ...userOtp, password: e.target.value })
                  }
                />
                <div className="text-red-500 text-sm mb-1">
                  {errors.password}
                </div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-base md:text-lg font-semibold mb-1"
                >
                  Enter OTP:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className="border rounded-md p-2 w-full mb-3"
                  value={userOtp.confirmPassword}
                  onChange={(e) =>
                    setUserOtp({
                      ...userOtp,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <div className="text-red-500 text-sm mb-1">
                  {errors.confirmPassword}
                </div>
                <button
                  type="submit"
                  className="bg-[#272727] text-white w-full text-base md:text-lg font-semibold px-4 py-2 cursor-pointer rounded-md"
                >
                  Submit
                </button>
              </form>
              <p className="text-xs underline">Want to create an account?</p>
              <button
                onClick={handleSignUp}
                className="bg-white text-[#272727] w-full text-lg font-semibold px-4 py-2 cursor-pointer rounded-md border border-solid border-[#272727]"
              >
                Sign Up
              </button>
            </>
          )}
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

export default ForgotPassword;
