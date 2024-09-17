import React, { useState } from "react";
import userImage from "../../assets/images/image.png";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";
import { auth, provider } from "../Firebase/config";
import { signInWithPopup } from "firebase/auth";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const passwordRegex = /^(?=.[a-z])(?=.[!@#$%^&*]).{8,}$/;

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
    // if (!userData.password || !passwordRegex.test(userData.password)) {
    //   newErrors.password = "Invalid password";
    //   isValid = false;
    // }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    if (e) e?.preventDefault();

    if (validateForm()) {
      setLoading(true);
      try {
        const res = await axios.post("/login/", {
          email: userData.email,
          password: userData.password,
        });
        // const json = await res.json();
        if (res.status === 200) {
          console.log("Login successful");
          console.log(res);
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
          localStorage.setItem("expert_id", `${res.data.expert_id}`);
          localStorage.setItem("customer_id", `${res.data.customer_id}`);
          if (localStorage.getItem("isExpert") === "true") {
            window.location.href = "/expertdashboard";
          } else {
            window.location.href = "/";
          }
        }
      } catch (error) {
        console.error(error);
        alert("Invalid email or password");
        setLoading(false);
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

  const generatePassword = (firstName, lastName, email) => {
    const firstThreeFirstName = firstName.slice(0, 3).toLowerCase();
    const lastThreeLastName = lastName.slice(-3).toLowerCase();
    const firstThreeEmail = email.slice(0, 3).toLowerCase();

    // Combine the segments into a password (you can add a number or constant suffix for complexity)
    const password = `884${firstThreeFirstName}@${lastThreeLastName}$${firstThreeEmail}#185`; // Example: johnsmithjoh123
    return password;
  };
  const handleLogininWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      console.log("signin with google", result);
      const nameParts = result.user.displayName.split(" ");

      const email = result.user.email;

      // Call the function to generate a password based on the user info
      const password = generatePassword(
        nameParts[0],
        nameParts.length > 1 ? nameParts.slice(1).join(" ") : "xyz",
        email
      );
      setUserData({
        ...userData,
        email: email,
        password: password,
      });
      //login call
      handleSubmit();
    });
  };
  return (
    <div className="md:h-screen mt-[100px] bg-white">
      <div className="lg:w-[60%] md:w-[75%] sm:w-[85%] w-[95%] flex md:flex-row flex-col mx-auto bg-white px-8 pb-8 rounded-xl shadow-md border border-solid border-[#a3a3a3]">
        <div className="flex flex-col md:w-[50%] w-full ">
          <h1 className="text-3xl md:text-4xl font-bold mb-5 md:mb-8 text-[#3E5676]">
            Login
          </h1>
          <form className="mb-2" onSubmit={handleSubmit}>
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
              value={userData.email}
              onChange={handleChange}
            />
            <div className="text-red-500 text-sm mb-1">{errors.email}</div>

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
              value={userData.password}
              onChange={handleChange}
            />
            <div className="text-red-500 text-sm mb-1">{errors.password}</div>
            <div className="flex justify-between">
              <p
                onClick={handleOTP}
                className="cursor-pointer text-xs text-[#272727] underline hover:text-blue-500 cursor pointer"
              >
                Login with OTP ?
              </p>
              <p
                onClick={handleLogininWithGoogle}
                className="text-xs text-[#272727] hover:text-blue-500 cursor pointer underline"
              >
                Login with Google ?
              </p>
            </div>
            <button
              disabled={loading}
              type="submit"
              className={`${
                loading ? "bg-gray-300" : "bg-[#272727]"
              } text-base md:text-lg text-white cursor-pointer font-semibold py-2 px-4 rounded-md w-full`}
            >
              Login
            </button>
            <p
              onClick={handleForgotPassword}
              className="cursor-pointer text-xs underline"
            >
              Forgot Password?
            </p>
          </form>

          <p className="text-xs underline">Want to create an account?</p>
          <button
            onClick={handleSignUp}
            className="bg-white text-[#272727] w-full text-base md:text-lg font-semibold px-4 py-2 cursor-pointer rounded-md border border-solid border-[#272727]"
          >
            Sign Up
          </button>
        </div>

        <div className="md:w-[50%] w-full flex items-center justify-center">
          <img src={userImage} alt="userImage" />
        </div>
      </div>
    </div>
  );
};

export default Login;
