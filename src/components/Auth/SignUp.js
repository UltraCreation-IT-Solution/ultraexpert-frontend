import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import userImage from "../../assets/images/image.png";
import axios from "../../axios";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [changePage, setChangePage] = useState(false);
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
    refBy: "",
  };

  const validationSchemaStep1 = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const validationSchemaStep2 = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Mobile number must be exactly 10 digits")
      .required("Mobile number is required"),
    refBy: Yup.string().required("Required"),
  });

  const handleSubmit = async (e) => {
    console.log(e);
    try {
      const response = await axios.post(
        "/register/",
        {
          first_name: e.firstName,
          last_name: e.lastName,
          email: e.email,
          password1: e.password,
          password2: e.confirmPassword,
          reffered_by: e.refBy,
          mobile: e.mobileNumber,
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
        alert("OTP sent to the registered email address");
        navigate("/verifySignUp");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleLogin = () => {
    navigate("/loginTest");
  };

  const handleGoogleLink = () => {
    console.log("User want to sign up with google!");
  };

  const handleRegisterAs = () => {
    setChangePage(true);
  };

  return (
    <>
      {!changePage ? (
        <div className="min-h-screen bg-white flex justify-center items-center">
          <div className="md:max-w-3xl w-[90%] bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
            <h1 className="text-3xl font-bold items-center justify-center flex">
              Sign Up As:
            </h1>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-full p-4 h-[100%] flex flex-col items-center justify-center">
                <p className="text-center text-2xl font-bold">
                  Sign-Up as a Customer
                </p>
                <button
                  onClick={handleRegisterAs}
                  className="bg-[#272727] cursor-pointer text-white text-lg font-semibold mt-[0.2vw] mb-[2vw] px-6 py-2 rounded-md"
                >
                  Register
                </button>
              </div>
              <div className="w-full p-4 h-[100%] flex flex-col items-center justify-center">
                <p className="text-center text-2xl font-bold">
                  Sign-Up as an Expert
                </p>
                <button
                  onClick={handleRegisterAs}
                  className="cursor-pointer bg-[#272727] text-white text-lg font-semibold mt-[0.2vw] mb-[2vw] px-6 py-2 rounded-md"
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="h-full mt-[100px] bg-white m-auto flex justify-center items-center">
          <div className="lg:max-w-[50vw] md:w-[75%] w-[90%] flex md:flex-row flex-col bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
            <div className="flex flex-col md:w-[50%] w-full">
              <h1 className="text-4xl font-bold mb-8">Sign Up</h1>
              <Formik
                method="POST"
                initialValues={initialValues}
                validationSchema={
                  step === 1 ? validationSchemaStep2 : validationSchemaStep1
                }
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, isValid, dirty }) => (
                  <Form>
                    {step === 1 && (
                      <>
                        <div className="mb-6">
                          <label
                            htmlFor="firstName"
                            className="block mb-1 font-semibold text-lg"
                          >
                            First Name:
                          </label>
                          <Field
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder="Enter your first name"
                            className="border rounded-md p-2 w-full"
                          />
                          <ErrorMessage
                            name="firstName"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="lastName"
                            className="block mb-1 font-semibold text-lg"
                          >
                            Last Name:
                          </label>
                          <Field
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder="Enter your last name"
                            className="border rounded-md p-2 w-full"
                          />
                          <ErrorMessage
                            name="lastName"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="mobileNumber"
                            className="block mb-1 font-semibold text-lg"
                          >
                            Mobile Number:
                          </label>
                          <Field
                            type="text"
                            name="mobileNumber"
                            id="mobileNumber"
                            placeholder="Enter your mobile number"
                            className="border rounded-md p-2 w-full"
                          />
                          <ErrorMessage
                            name="mobileNumber"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <div className="mb-4">
                          <label
                            htmlFor="refBy"
                            className="block mb-1 font-semibold text-lg"
                          >
                            Referred By:
                          </label>
                          <Field
                            type="text"
                            name="refBy"
                            id="refBy"
                            placeholder="Enter your referrence"
                            className="border rounded-md p-2 w-full"
                          />
                          <ErrorMessage
                            name="refBy"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <p
                          onClick={handleGoogleLink}
                          className="cursor-pointer text-xs text-[#272727] hover:text-blue-500 underline"
                        >
                          Sign Up with Google?
                        </p>

                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!isValid || !dirty}
                          className="bg-[#272727] text-lg text-white cursor-pointer font-semibold mb-[1vw] py-2 px-4 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
                        >
                          Next
                        </button>
                      </>
                    )}

                    {step === 2 && (
                      <>
                        <div className="mb-6">
                          <label
                            htmlFor="email"
                            className="block mb-1 font-semibold text-lg"
                          >
                            Email:
                          </label>
                          <Field
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            id="email"
                            className="border rounded-md p-2 w-full"
                          />
                          <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500"
                          />
                        </div>

                        <div className="mb-6">
                          <label
                            htmlFor="password"
                            className="block mb-1 font-semibold text-lg"
                          >
                            Password:
                          </label>
                          <Field
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            id="password"
                            className="border rounded-md p-2 w-full"
                          />
                          <ErrorMessage
                            name="password"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
                        <div className="mb-4">
                          <label
                            htmlFor="password"
                            className="block mb-1 font-semibold text-lg"
                          >
                            Confirm Password:
                          </label>
                          <Field
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm password"
                            id="confirmPassword"
                            className="border rounded-md p-2 w-full"
                          />
                          <ErrorMessage
                            name="confirmPassword"
                            component="div"
                            className="text-red-500"
                          />
                        </div>
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
                          disabled={!isValid || !dirty || isSubmitting}
                          className="bg-[#272727] text-lg mb-[1vw] text-white font-semibold py-2 px-4 rounded-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed w-full"
                        >
                          Verify
                        </button>
                      </>
                    )}
                  </Form>
                )}
              </Formik>
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
      )}
    </>
  );
};

export default SignUp;
