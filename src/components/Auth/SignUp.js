import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../../assets/images/image.png";
import axios from "../../axios";
const SignUp = () => {
  const [step, setStep] = useState(1);

  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    refBy: "",
    email: "",
    otp: "",
    password: "",
    confirmPassword: "",
  });

  const [firstStep, setFirstStep] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    refBy: "",
  });
  const [secondStep, setSecondStep] = useState({
    email: "",
  });

  const [thirdStep, setThirdStep] = useState({
    email: "",
    otp: "",
  });
  const [forthStep, setForthStep] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleFirstSubmit = (e) => {
    e.preventDefault();
    if (validateForm1()) {
      console.log(firstStep);
      nextStep();
    }
  };

  const validateForm1 = () => {
    let isValid = true;
    const newErrors = {
      firstName: "",
      lastName: "",
      mobileNumber: "",
      refBy: "",
    };

    if (!firstStep.firstName.trim() || !nameRegex.test(firstStep.firstName)) {
      newErrors.firstName = "Please enter a valid first name";
      isValid = false;
    }

    if (!firstStep.lastName.trim() || !nameRegex.test(firstStep.lastName)) {
      newErrors.lastName = "Please enter a valid last name";
      isValid = false;
    }

    if (
      !firstStep.mobileNumber.trim() ||
      !mobileRegex.test(firstStep.mobileNumber)
    ) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setFirstStep({
      ...firstStep,
      [name]: value,
    });
  };

  const onVerifyEmailHandler = async (e) => {
    e.preventDefault();
    if (validateEmail()) {
      try {
        const response = await axios.get(
          `/verify/?action=1&email=${secondStep.email}`
        );
        if (
          response.data.status === 404 ||
          response.data.status === 500 ||
          response.data.status === 400 ||
          !response.data
        ) {
          window.alert("Invalid Email");
          return;
        }
        console.log(response.data);
        nextStep();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const validateEmail = () => {
    let isValid = true;
    const newErrors = {
      email: "",
    };
    if (!secondStep.email.trim() || !emailRegex.test(secondStep.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setSecondStep({
      ...secondStep,
      [name]: value,
    });
  };

  const handleOTPVerification = async (e) => {
    // console.log(initialValues3);
    e.preventDefault();
    if (validateOTP()) {
      try {
        const response = await axios.get(
          `/verify/?action=2&email=${secondStep.email}&otp=${thirdStep.otp}`
        );
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
        nextStep();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const validateOTP = () => {
    let isValid = true;
    const newErrors = {
      otp: "",
    };

    if (!thirdStep.otp.trim() || !otpRegex.test(thirdStep.otp)) {
      newErrors.otp = "Please enter a valid OTP";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setThirdStep({
      ...thirdStep,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e);
    if (validatePassword()) {
      try {
        const response = await axios.post(
          "/register/",
          {
            first_name: firstStep.firstName,
            last_name: firstStep.lastName,
            mobile_number: firstStep.mobileNumber,
            reffered_by: firstStep.refBy,
            email: secondStep.email,
            password1: forthStep.password,
            password2: forthStep.confirmPassword,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = response.data;
        if (data.status === 404 || data.status === 400 || !data) {
          window.alert("Invalid Registration");
          console.log("Invalid Registration");
        } else {
          console.log(data);
          window.alert("Registration Successful");
          navigate("/signUpAs");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const validatePassword = () => {
    let isValid = true;
    const newErrors = {
      password: "",
      confirmPassword: "",
    };
    if (
      !userData.password ||
      !userData.confirmPassword ||
      !passwordRegex.test(userData.password)
    ) {
      newErrors.password = "Please enter a valid password";
      isValid = false;
    }
    if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleChange4 = (e) => {
    const { name, value } = e.target;
    setForthStep({
      ...forthStep,
      [name]: value,
    });
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleGoogleLink = () => {
    console.log("User want to sign up with google!");
  };

  const nameRegex = /^[a-zA-Z]+$/;
  const mobileRegex = /^\d{10}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const otpRegex = /^\d{6}$/;
  const passwordRegex = /^(?=.[a-z])(?=.[!@#$%^&*]).{8,}$/;

  return (
    <div className="md:min-h-screen mt-[40px] bg-white flex justify-center items-center">
      <div className="lg:max-w-[50vw] md:w-[75%] w-[90%] flex md:flex-row flex-col bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <div className="flex flex-col md:w-[50%] w-full">
          {step === 1 && (
            <>
              <h1 className="text-4xl font-bold mb-8 text-[#3E5676]">
                Sign Up
              </h1>
              <form className="h-auto" onSubmit={handleFirstSubmit}>
                <label
                  htmlFor="firstName"
                  className="block mb-1 font-semibold text-lg"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="border rounded-sm p-2 w-full"
                  value={firstStep.firstName}
                  onChange={handleChange1}
                />
                <p className="text-red-500">{errors.firstName}</p>

                <label
                  htmlFor="lastName"
                  className="block mb-1 font-semibold text-lg"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="border rounded-sm p-2 w-full"
                  value={firstStep.lastName}
                  onChange={handleChange1}
                />
                <p className="text-red-500">{errors.lastName}</p>

                <label
                  htmlFor="mobileNumber"
                  className="block mb-1 font-semibold text-lg"
                >
                  Mobile Number:
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  className="border rounded-sm p-2 w-full"
                  value={firstStep.mobileNumber}
                  onChange={handleChange1}
                />
                <p className="text-red-500">{errors.mobileNumber}</p>

                <label
                  htmlFor="refBy"
                  className="block mb-1 font-semibold text-lg"
                >
                  Reffered By:
                </label>
                <input
                  type="text"
                  name="refBy"
                  id="refBy"
                  placeholder="Enter refference"
                  className="border rounded-sm p-2 w-full"
                  value={firstStep.refBy}
                  onChange={handleChange1}
                />
                <p className="text-red-500">{errors.refBy}</p>

                <p
                  onClick={handleGoogleLink}
                  className="cursor-pointer text-xs text-[#272727] hover:text-blue-500 underline"
                >
                  Sign Up with Google?
                </p>

                <button
                  type="submit"
                  className="bg-[#272727] text-lg text-white cursor-pointer font-semibold mb-[1vw] py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
                >
                  Next
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-4xl font-bold mb-8 text-[#3E5676]">
                Sign Up
              </h1>
              <form className="h-auto" onSubmit={onVerifyEmailHandler}>
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
                  value={secondStep.email}
                  onChange={handleChange2}
                />
                <p className="text-red-500">{errors.email}</p>

                <p
                  onClick={handleGoogleLink}
                  className="cursor-pointer text-xs text-[#272727] hover:text-blue-500 underline"
                >
                  Sign Up with Google?
                </p>
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 text-lg text-white cursor-pointer font-semibold py-2 px-4 mb-2 rounded-md w-full"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  className="bg-[#272727] text-lg mb-[1vw] text-white font-semibold py-2 px-4 rounded-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
                >
                  Verify Email
                </button>
              </form>
            </>
          )}
          {step === 3 && (
            <>
              <h1 className="text-4xl font-bold mb-8 text-[#3E5676]">
                Verify Email
              </h1>
              <form onSubmit={handleOTPVerification}>
                <div className="mb-2">
                  <label
                    htmlFor="otp"
                    className="block mb-1 font-semibold text-lg"
                  >
                    OTP:
                  </label>
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    placeholder="Enter OTP"
                    className="border rounded-sm p-2 w-full"
                    value={thirdStep.otp}
                    onChange={handleChange3}
                  />
                  <p className="text-red-500">{errors.otp}</p>
                </div>
                <div className="flex justify-between">
                  <p
                    onClick={handleGoogleLink}
                    className="cursor-pointer text-xs text-[#272727] hover:text-blue-500 underline"
                  >
                    Sign Up with Google?
                  </p>
                  <p className="cursor-pointer text-xs text-[#272727] hover:text-blue-500 underline">
                    Resend OTP?
                  </p>
                </div>
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 text-lg text-white cursor-pointer font-semibold py-2 px-4 mb-2 rounded-md w-full"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={!isValid || !dirty || isSubmitting}
                  className="bg-[#272727] text-lg mb-[1vw] text-white font-semibold py-2 px-4 rounded-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
                >
                  Verify OTP
                </button>
              </form>
            </>
          )}
          {step === 4 && (
            <>
              <h1 className="text-4xl font-bold mb-8 text-[#3E5676]">
                Complete Successful
              </h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
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
                    value={forthStep.password}
                    onChange={handleChange4}
                  />
                  <p className="text-red-500">{errors.password}</p>
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-1 font-semibold text-lg"
                  >
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Enter your password"
                    className="border rounded-sm p-2 w-full"
                    value={forthStep.confirmPassword}
                    onChange={handleChange4}
                  />
                  <p className="text-red-500">{errors.confirmPassword}</p>
                </div>
                <button
                  type="submit"
                  className="bg-[#272727] text-lg mb-[1vw] text-white font-semibold py-2 px-4 rounded-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
                >
                  Complete SignUp
                </button>
              </form>
            </>
          )}
          <p className="text-xs underline">Already have an account?</p>
          <button
            onClick={handleLogin}
            className="bg-white text-[#272727] w-full text-lg font-semibold px-4 py-2 cursor-pointer rounded-md border border-solid border-[#272727]"
          >
            Login
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

export default SignUp;
