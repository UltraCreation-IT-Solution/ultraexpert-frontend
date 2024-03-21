import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userImage from "../../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  });

  const handleSubmit = async (e) => {
    try {
      const res = await axios.post(
        "/login/",
        {
          email: e.email,
          password: e.password,
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

  return (
    <div className="h-full mt-[100px] bg-white m-auto flex justify-center items-center">
      <div className="lg:max-w-[50vw] md:w-[75%] w-[90%] flex md:flex-row flex-col bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <div className="flex flex-col md:w-[50%] w-full">
          <h1 className="text-4xl font-bold mb-8">Login</h1>
          <Formik
            method="POST"
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-1 font-semibold text-lg"
                >
                  Email:
                </label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="border rounded-md p-2 w-full"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block mb-1 font-semibold text-lg"
                >
                  Password:
                </label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  className="border rounded-md p-2 w-full"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
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
                className="bg-[#272727] text-lg text-white cursor-pointer font-semibold mb-[1vw] py-2 px-4 rounded-md w-full"
              >
                Login
              </button>
            </Form>
          </Formik>
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
