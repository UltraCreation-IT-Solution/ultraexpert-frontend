import React, { useState } from "react";
import userImage from "../../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const Login = () => {

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/;

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
    if (
      !emailRegex.test(userData.email) ||
      !userData.email.trim() ||
      !userData.email
    ) {
      newErrors.email = "Invalid email";
      isValid = false;
    }
    if (
      !userData.password ||
      !passwordRegex.test(userData.password)
    ) {
      newErrors.password = "Invalid password";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const res = await axios.post(
          "/login/",
          {
            email: userData.email,
            password: userData.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          console.log("Login successful");
          console.log(res.data);
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleOTP = () => {
    navigate("/loginiwthotp");
  };

  const handleGoogleLink = () => {
    console.log("User want to login with google");
  };

  const handleSignUp = () => {
    navigate("/signUp");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleForgotPassword = () => {
    navigate("/forgotPassword");
  };

  return (
    <div className="md:min-h-screen mt-[40px] bg-white flex justify-center items-center">
      <div className="lg:max-w-[50vw] md:w-[75%] w-[90%] flex md:flex-row flex-col bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <div className="flex flex-col md:w-[50%] w-full ">
          <h1 className="text-4xl font-bold mb-8 text-[#3E5676]">Login</h1>
          <form className="mb-2" onSubmit={handleSubmit}>

              <label
                htmlFor="email"
                className="block mb-1 font-semibold text-lg"
              >
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="border rounded-sm p-2 w-full"
                value={userData.email}
                onChange={handleChange}
              />
              <p className="text-red-500">{errors.email}</p>

              <label
                htmlFor="password"
                className="block mb-1 font-semibold text-lg"
              >
                Password:
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="border rounded-sm p-2 w-full"
                value={userData.password}
                onChange={handleChange}
              />
              <p className="text-red-500">{errors.password}</p>
            <div className="flex justify-between">
              <p
                onClick={handleOTP}
                className="cursor-pointer text-xs text-[#272727] underline hover:text-blue-500 cursor pointer"
              >
                Login with OTP ?
              </p>
              <p
                onClick={handleGoogleLink}
                className="text-xs text-[#272727] hover:text-blue-500 cursor pointer underline"
              >
                Login with Google ?
              </p>
            </div>
            <button
              type="submit"
              className="bg-[#272727] text-lg text-white cursor-pointer font-semibold py-2 px-4 rounded-md w-full"
            >
              Login
            </button>
            <p onClick={handleForgotPassword} className="cursor-pointer text-xs underline">Forgot Password?</p>
          </form>

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

export default Login;
