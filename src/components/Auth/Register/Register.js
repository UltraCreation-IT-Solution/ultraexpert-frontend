import React, { useState } from "react";
import SignUpInfo from "./Sdetail";
import Pdetail from "./Pdetail";
import OtherInfo from "./Odetail";
import { Link } from "react-router-dom";
import backpng from "../../../assets/images/back_icon.png";
import { loginSchema } from "../../../Validations/SignUpValidations";

function Demo() {
  const [page, setPage] = useState(0);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    referedBy: "",
    mobileNo: "",
  });
  const signUpVerify = async () => {
    loginSchema
      .validate(formData, { abortEarly: false })
      .then((responseData) => {
        console.log("no validation errors");
        console.log(responseData); // responseData is the data after validation
        setError("");
      })
      .catch((err) => {
        setError(err.errors[0]);
        console.log(err.errors);
      });
  };
  const NextBtnHandler = () => {
    setPage(page + 1);
  };
  const SubmitBtnHandler = () => {
    alert("FORM SUBMITTED");
    signUpVerify();
  };

  const PageDisplay = () => {
    if (page === 0) {
      return <Pdetail formData={formData} setFormData={setFormData} />;
    } else if (page === 1) {
      return <SignUpInfo formData={formData} setFormData={setFormData} />;
    } else {
      return <OtherInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <>
      <div className="relative bg-white w-[100vw] h-[100vh] overflow-hidden text-left text-lg text-gray-100 font-montserrat">
        <div className="absolute top-[calc(50%_-_332px)] left-[calc(50%_-_506px)] bg-white shadow-[1px_1px_4px_rgba(0,_0,_0,_0.15)] box-border w-[1012px] h-[665px] overflow-hidden border-[0.3px] border-solid border-black scale-[0.8]">
          <img
            className="absolute top-[calc(50%_-_332.5px)] left-[0px] w-[506px] h-[665px] overflow-hidden object-cover"
            alt=""
            src="/frame-19@2x.png"
          />

          <div className="absolute top-[66px] left-[584px] text-[48px] font-semibold text-slategray">
            Sign up
          </div>
          <div className="body">{PageDisplay()}</div>
          <div className="absolute top-[385px] left-[584px] text-4xl text-red-700 font-semibold">
            {error}
          </div>
          {page !== 2 ? (
            <div
              className="absolute top-[420px] left-[584px] rounded-8xs bg-red-500 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[229px] h-[63px] overflow-hidden text-5xl text-white"
              onClick={NextBtnHandler}
            >
              <b className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_29.5px)]">
                Next
              </b>
            </div>
          ) : (
            <input
              type="submit"
              value={"Submit"}
              className="absolute top-[410px] left-[584px] rounded-8xs bg-red-500 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[229px] h-[63px] overflow-hidden text-5xl text-white"
              onClick={SubmitBtnHandler}
            ></input>
          )}
          <Link
            to={"/login"}
            className="absolute top-[541px] left-[584px] rounded-8xs
          bg-lightslategray shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[229px]
          h-[63px] overflow-hidden cursor-pointer text-5xl text-white"
          >
            <b className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_35.5px)]">
              Login
            </b>
          </Link>
          <div className="absolute top-[506px] left-[584px] font-medium text-gray-200">
            Already have an account?
          </div>
          {page !== 0 ? (
            <img
              className="absolute top-[13px] left-[562px] w-[43px] h-[43px] overflow-hidden object-cover cursor-pointer"
              alt=""
              src={backpng}
              onClick={() => setPage((currPage) => currPage - 1)}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Demo;
