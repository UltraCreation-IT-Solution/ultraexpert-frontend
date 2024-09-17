import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import userImage from "../../assets/images/image.png";
import axios from "../../axios";
import { auth, provider } from "../Firebase/config";
import { signInWithPopup } from "firebase/auth";
const SignUp = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

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
      refCode: "",
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
      newErrors.mobileNumber = "Please enter a valid mobile number";
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

  const onVerifyEmailHandler = async () => {
    // e.preventDefault();
    if (validateEmail()) {
      setLoading(true);
      try {
        console.log(secondStep.email);
        const response = await axios.get(`/login/?email=${secondStep.email}`);
        const data = response.data;
        if (!data || data.status === 400 || data.status === 401) {
          window.alert("Invalid Email");
          setLoading(false);
          return;
        }
        setLoading(false);
        nextStep();
      } catch (error) {
        console.log(error.message);

        setLoading(false);
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
    e.preventDefault();
    const { name, value } = e.target;
    setSecondStep({
      ...secondStep,
      [name]: value,
    });
  };

  const handleOTPVerification = async (e) => {
    e.preventDefault();
    if (validateOTP()) {
      setLoading(true);
      try {
        const response = await axios.post(`/login/`, {
          email: secondStep.email,
          password: forthStep.password,
          otp: thirdStep.otp,
        });
        const data = response.data;
        console.log(response);
        if (!data || data.status === 400 || data.status === 401) {
          window.alert("Invalid OTP");
          setLoading(false);
          return;
        }
        setLoading(false);
        navigate("/signUpAs");
      } catch (error) {
        console.log(error.message);
        alert("Invalid OTP");
        setLoading(false);
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
      setLoading(true);
      try {
        const response = await axios.post("/register/", {
          first_name: firstStep.firstName,
          last_name: firstStep.lastName,
          mobile: firstStep.mobileNumber,
          reffered_by: firstStep.refCode,
          email: secondStep.email,
          password1: forthStep.password,
          password2: forthStep.confirmPassword,
        });
        const data = response.data;
        if (!data || data.status === 400 || data.status === 401) {
          window.alert("Invalid Registration");
          console.log("Invalid Registration");
          setLoading(false);
          return;
        } else {
          console.log(response);
          try {
            const res = await axios.post("/login/", {
              email: secondStep.email,
              password: forthStep.password,
            });
            // const json = await res.json();
            const data = res.data;
            const expirationDateforAccess = new Date();
            const expirationDateforRefresh = new Date();
            expirationDateforAccess.setDate(
              expirationDateforAccess.getDate() + 7
            );
            expirationDateforRefresh.setDate(
              expirationDateforRefresh.getDate() + 8
            );
            document.cookie = `access_token=${
              res.data.access_token
            };expires=${expirationDateforAccess.toUTCString()};  SameSite=Lax;`;
            document.cookie = `refresh_token=${
              res.data.refresh_token
            };expires=${expirationDateforRefresh.toUTCString()};  SameSite=Lax;`;

            // localStorage.setItem("userId", `${res.data.id}`);
            localStorage.setItem("username", `${res.data.first_name}`);
            localStorage.setItem("profile", `${res.data.profile_img}`);
            localStorage.setItem("isExpert", `${res.data.is_expert}`);
            localStorage.setItem("isAuthor", `${res.data.is_author}`);
            localStorage.setItem("isCustomer", `${res.data.is_customer}`);
            if (!data || data.status === 400 || data.status === 401) {
              window.alert("Invalid Credentials");
              setLoading(false);
              return;
            }
            setLoading(false);
            window.alert("Registration Successful");
            localStorage.setItem("token", res.data.access_token);
            onVerifyEmailHandler();
            nextStep();
          } catch (error) {
            console.error(error);
            alert(error.message);
            setLoading(false);
          }
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
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
      !forthStep.password ||
      !forthStep.confirmPassword ||
      !passwordRegex.test(forthStep.password)
    ) {
      newErrors.password = "Please enter a valid password";
      isValid = false;
    }
    if (forthStep.password !== forthStep.confirmPassword) {
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
    if (step != 5) {
      setStep(step + 1);
    } else {
      setStep(4);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const generatePassword = (firstName, lastName, email) => {
    const firstThreeFirstName = firstName.slice(0, 3).toLowerCase();
    const lastThreeLastName = lastName.slice(-3).toLowerCase();
    const firstThreeEmail = email.slice(0, 3).toLowerCase();

    // Combine the segments into a password (you can add a number or constant suffix for complexity)
    const password = `884${firstThreeFirstName}@${lastThreeLastName}$${firstThreeEmail}#185`; // Example: johnsmithjoh123
    return password;
  };
  const handleSigninWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log("signin with google", result);
      const nameParts = result.user.displayName.split(" ");
      setFirstStep({
        ...firstStep,
        firstName: nameParts[0],
        lastName: nameParts.length > 1 ? nameParts.slice(1).join(" ") : "xyz",
      });
      const email = result.user.email;

      // Call the function to generate a password based on the user info
      const password = generatePassword(
        firstStep.firstName,
        firstStep.lastName,
        email
      );
      const confirmPassword = password;

      setSecondStep({
        ...secondStep,
        email: email,
      });
      setForthStep({
        ...forthStep,
        password: password,
        confirmPassword: confirmPassword,
      });

      // get the mobile no from google
      setFirstStep({
        ...firstStep,
        mobileNumber: result.user.phoneNumber,
      });
      //if mobile no of user not present or null then ask it from user
      if (
        !result.user.phoneNumber ||
        result.user.phoneNumber === null ||
        result.user.phoneNumber.length === 0
      ) {
        setStep(5);
      }
      // window.location.href = "/";
    });
  };

  const nameRegex = /^[a-zA-Z]+$/;
  const mobileRegex = /^\+?\d{10,13}$/;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const otpRegex = /^\d{6}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[!@#$%^&*]).{8,}$/;

  const [checked, setChecked] = useState({
    checkbox1: false,
    checkbox2: false,
  });

  const handleChange = (checkbox) => {
    if (checkbox === "checkbox1") {
      setChecked({ checkbox1: true, checkbox2: false });
    } else {
      setChecked({ checkbox1: false, checkbox2: true });
    }
  };

  return (
    <div className="md:h-screen mt-[80px] bg-white">
      <div className="lg:w-[60%] md:w-[75%] sm:w-[85%] w-[95%] flex md:flex-row flex-col mx-auto bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <div className="flex flex-col md:w-[50%] w-full">
          {step === 1 && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8 text-[#3E5676]">
                Sign Up
              </h1>
              <form className="h-auto" onSubmit={handleFirstSubmit}>
                <label
                  htmlFor="firstName"
                  className="block mb-1 font-semibold text-base md:text-lg"
                >
                  First Name:
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  className="border rounded-sm p-2 w-full mb-3"
                  value={firstStep.firstName}
                  onChange={handleChange1}
                />
                <div className="text-red-500 mb-1 text-sm">
                  {errors.firstName}
                </div>

                <label
                  htmlFor="lastName"
                  className="block mb-1 font-semibold text-base md:text-lg"
                >
                  Last Name:
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  className="border rounded-sm p-2 w-full mb-3"
                  value={firstStep.lastName}
                  onChange={handleChange1}
                />
                <div className="text-red-500 mb-1 text-sm">
                  {errors.lastName}
                </div>

                <label
                  htmlFor="mobileNumber"
                  className="block mb-1 font-semibold text-base md:text-lg"
                >
                  Mobile Number:
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  className="border rounded-sm p-2 w-full mb-3"
                  value={firstStep.mobileNumber}
                  onChange={handleChange1}
                />
                <div className="text-red-500 mb-1 text-sm">
                  {errors.mobileNumber}
                </div>

                <div className="text-base md:text-lg font-semibold mb-1">
                  Do you have a refferal code?
                </div>
                <input
                  className="mb-3"
                  type="checkbox"
                  id="yes"
                  name="yes"
                  value="Yes"
                  checked={checked.checkbox1}
                  onClick={() => handleChange("checkbox1")}
                />
                <label className="mr-2 font-medium text-lg" htmlFor="yes">
                  Yes
                </label>
                <input
                  type="checkbox"
                  id="no"
                  name="no"
                  value="No"
                  checked={checked.checkbox2}
                  onChange={() => handleChange("checkbox2")}
                />
                <label htmlFor="no" className="mr-2 font-medium text-lg">
                  No
                </label>
                {checked.checkbox1 && (
                  <>
                    <label
                      htmlFor="refBy"
                      className="block mb-1 font-semibold text-base md:text-lg"
                    >
                      Refferal Code:
                    </label>
                    <input
                      type="text"
                      name="refBy"
                      id="refBy"
                      placeholder="Enter Refferal Code"
                      className="border rounded-sm p-2 w-full mb-3"
                      value={firstStep.refBy}
                      onChange={handleChange1}
                    />
                    <div className="text-red-500 mb-1 text-sm">
                      {errors.refBy}
                    </div>
                  </>
                )}

                <p
                  onClick={handleSigninWithGoogle}
                  className="cursor-pointer text-xs text-[#272727] hover:text-blue-500 underline"
                >
                  Sign Up with Google?
                </p>

                <button
                  disabled={loading}
                  type="submit"
                  className={`${
                    loading ? "bg-gray-300 cursor-not-allowed" : "bg-[#272727]"
                  } text-base md:text-lg text-white cursor-pointer font-semibold mb-[1vw] py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed w-full`}
                >
                  Next
                </button>
              </form>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8 text-[#3E5676]">
                Sign Up
              </h1>
              <form className="h-auto">
                <label
                  htmlFor="email"
                  className="block mb-1 font-semibold text-base md:text-lg"
                >
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border rounded-sm p-2 w-full mb-3"
                  value={secondStep.email}
                  onChange={handleChange2}
                />
                <div className="text-red-500 mb-1 text-sm">{errors.email}</div>

                <p
                  onClick={handleSigninWithGoogle}
                  className="cursor-pointer text-xs text-[#272727] hover:text-blue-500 underline"
                >
                  Sign Up with Google?
                </p>

                <button
                  disabled={loading}
                  onClick={() => nextStep()}
                  className={`${
                    loading ? "bg-gray-300 cursor-not-allowed" : "bg-[#272727]"
                  } text-base md:text-lg mb-[1vw] text-white font-semibold py-2 px-4 rounded-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed w-full`}
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 text-base md:text-lg text-white cursor-pointer font-semibold py-2 px-4 mb-2 rounded-md w-full"
                >
                  Previous
                </button>
              </form>
            </>
          )}
          {step === 3 && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8 text-[#3E5676]">
                Complete Successful
              </h1>
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="password"
                  className="block mb-1 font-semibold text-base md:text-lg"
                >
                  Password:
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="border rounded-sm p-2 w-full mb-3"
                  value={forthStep.password}
                  onChange={handleChange4}
                />
                <div className="text-red-500 text-sm mb-1">
                  {errors.password}
                </div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-1 font-semibold md:text-lg text-base"
                >
                  Confirm Password:
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Enter your password"
                  className="border rounded-sm p-2 w-full mb-3"
                  value={forthStep.confirmPassword}
                  onChange={handleChange4}
                />
                <div className="text-red-500 text-sm mb-1">
                  {errors.confirmPassword}
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`${
                    loading ? "bg-gray-300 cursor-not-allowed" : "bg-[#272727]"
                  } text-base md:text-lg mb-[1vw] text-white font-semibold py-2 px-4 rounded-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed w-full`}
                >
                  Complete SignUp
                </button>
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 text-base md:text-lg text-white cursor-pointer font-semibold py-2 px-4 mb-2 rounded-md w-full"
                >
                  Previous
                </button>
              </form>
            </>
          )}
          {step === 4 && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8 text-[#3E5676]">
                Verify Email
              </h1>
              <form onSubmit={handleOTPVerification}>
                <label
                  htmlFor="otp"
                  className="block mb-1 font-semibold text-base md:text-lg"
                >
                  OTP:
                </label>
                <input
                  type="text"
                  name="otp"
                  id="otp"
                  placeholder="Enter OTP"
                  className="border rounded-sm p-2 w-full mb-3"
                  value={thirdStep.otp}
                  onChange={handleChange3}
                />
                <div className="text-red-500 text-sm mb-1">{errors.otp}</div>
                <div className="flex justify-between">
                  <p className="cursor-pointer text-xs text-[#272727] hover:text-blue-500 underline">
                    Resend OTP?
                  </p>
                </div>
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 text-base md:text-lg text-white cursor-pointer font-semibold py-2 px-4 mb-2 rounded-md w-full"
                >
                  Previous
                </button>
                <button
                  disabled={loading}
                  type="submit"
                  className={`${
                    loading ? "bg-gray-300 cursor-not-allowed" : "bg-[#272727]"
                  } text-base md:text-lg mb-[1vw] text-white font-semibold py-2 px-4 rounded-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed w-full`}
                >
                  Verify OTP
                </button>
              </form>
            </>
          )}
          {step === 5 && (
            <>
              <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8 text-[#3E5676]">
                Contact Details
              </h1>
              <form onSubmit={handleSubmit}>
                <label
                  htmlFor="mobileNumber"
                  className="block mb-1 font-semibold text-base md:text-lg"
                >
                  Mobile Number:
                </label>
                <input
                  type="text"
                  name="mobileNumber"
                  id="mobileNumber"
                  placeholder="Enter your mobile number"
                  className="border rounded-sm p-2 w-full mb-3"
                  value={firstStep.mobileNumber}
                  onChange={handleChange1}
                />
                <div className="text-red-500 mb-1 text-sm">
                  {errors.mobileNumber}
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setStep(1);
                    setFirstStep({
                      ...firstStep,
                      firstName: "",
                      lastName: "",
                      mobileNumber: "",
                    });
                  }}
                  className="bg-gray-500 text-base md:text-lg text-white cursor-pointer font-semibold py-2 px-4 mb-2 rounded-md w-full"
                >
                  Previous
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  // onClick={() => setStep(4)}
                  className={`${
                    loading ? "bg-gray-300 cursor-not-allowed" : "bg-[#272727]"
                  } text-base md:text-lg mb-[1vw] text-white font-semibold py-2 px-4 rounded-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed w-full`}
                >
                  Next
                </button>
              </form>
            </>
          )}
          <p className="text-xs underline">Already have an account?</p>
          <button
            onClick={handleLogin}
            className="bg-white text-[#272727] w-full text-base md:text-lg font-semibold px-4 py-2 cursor-pointer rounded-md border border-solid border-[#272727]"
          >
            Login
          </button>
        </div>
        <div className="md:w-[50%] w-full flex items-center justify-center">
          <img src={userImage} alt="userImage" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
