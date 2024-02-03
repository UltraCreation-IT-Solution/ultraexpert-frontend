import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { LoginSchema } from "../../../Validations/SignUpValidations";

const LogIn = () => {
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [mobileNo, setMobileNo] = useState("Enter Your Mobile No.");
  const [loginWithOtp, setLoginWithOtp] = useState(false);
  const [loginText, setLoginText] = useState("Login with OTP");
  const [error, setError] = useState("");

  if (!email) setEmail("Email");
  if (!password) setPassword("Password");
  if (!mobileNo) setMobileNo("Enter Your Mobile No.");
  const onRegisterClick = useCallback(() => {
    // Please sync "Wireframe - 4" to the project
  }, []);

  const loginverify = async (event) => {
    event.preventDefault(); // form bhrte tym refresh na ho
    if (loginWithOtp) {
      // var data = {
      //   mobileNo: event.target[0].value,
      // };
    } else {
      var data = {
        email: event.target[0].value,
        password: event.target[1].value,
      };
    }
    LoginSchema.validate(data, { abortEarly: false })
      .then((responseData) => {
        // console.log("no validation errors");
        // console.log(responseData);    // responseData is the data after validation
        setError("");
      })
      .catch((err) => {
        setError(err.errors[0]);
        // console.log(err.errors);
      });
  };

  const onLoginWithMobileClick = (e) => {
    e.preventDefault();
    setLoginWithOtp(!loginWithOtp);
    if (loginWithOtp) setLoginText("Login with OTP");
    else setLoginText("Login with Email");
  };

  return (
    <div className="h-[100vh] w-[100%] relative ">
      <div
        className="flex w-[70vw]  md:w-[50vw] md:h-[35vw] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-2xl drop-shadow-2xl box-border border-[0.3px]
         border-solid border-black"
      >
        <img
          className="w-[20%] md:w-[50%] md:h-[100%] object-cover"
          alt=""
          src="/frame-19@2x.png"
        />
        <div className="relative w-[100%] md:w-[50%] px-[3vw] py-[4vw] md:py-[2vw]">
          <form onSubmit={loginverify} className="">
            <div className="text-[6vw] md:text-[3.2vw] mt-[4vw] md:mt-[3vw] font-semibold text-slategray">
              Log in
            </div>

            <div className="mt-[6vw] md:mt-[2vw]">
              {loginWithOtp ? (
                <input
                  placeholder={mobileNo}
                  name="mobileNo"
                  onChange={(e) => {
                    setMobileNo(e.target.value);
                    setError("");
                  }}
                  type="number"
                  className=" w-[100%] outline-none px-[1.5vw] py-[1.2vw] md:px-[0.5vw] md:py-[0.6vw] text-[2vw] md:text-[1vw] rounded-sm box-border border-[0.7px] border-solid bg-transparent border-darkslategray"
                ></input>
              ) : (
                <input
                  placeholder={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  type="text"
                  name="email"
                  className="w-[100%] outline-none px-[1.5vw] py-[1.2vw] md:px-[0.5vw] md:py-[0.6vw] text-[2vw] md:text-[1vw] rounded-sm box-border border-[0.7px] border-solid bg-transparent border-darkslategray "
                ></input>
              )}
            </div>
            <div>
              {!loginWithOtp ? (
                <>
                  <input
                    type="password"
                    name="password"
                    placeholder={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError("");
                    }}
                    className="w-[100%] mt-[2vw] md:mt-[1vw] outline-none px-[1.5vw] py-[1.2vw] md:px-[0.5vw] md:py-[0.6vw] text-[2vw] md:text-[1vw] rounded-sm box-border border-[0.7px] border-solid bg-transparent border-darkslategray "
                  ></input>
                  {error.length > 0 ? (
                    <div className="text-[2.3vw] md:text-[1vw] mt-[1vw] md:mt-[0.4vw] text-red-700 font-semibold">
                      {error + "!"}
                    </div>
                  ) : null}
                </>
              ) : null}
            </div>
            {/* <Link to={"/"}> */}
            <input
              type="submit"
              value="Login"
              className="px-[4vw] py-[1.8vw] md:px-[2.5vw] md:py-[0.8vw] mt-[6vw] md:mt-[2vw] text-[2.5vw] md:text-[1.2vw] rounded-8xs bg-lightslategray shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] text-white font-semibold cursor-pointer"
            />
            {/* </Link> */}
          </form>

          <div
            className="text-[2.6vw] md:text-[1.1vw] mt-[2.5vw] md:mt-[0.5vw] font-medium text-gray-200 cursor-pointer"
            onClick={onLoginWithMobileClick}
          >
            {loginText}
          </div>

          <Link to={"/register"}>
            <button
              className="px-[4vw] py-[1.8vw] md:px-[2.5vw] md:py-[0.8vw] mt-[6vw] md:mt-[2vw] text-[2.5vw] md:text-[1.2vw] rounded-8xs bg-red-400 hover:bg-red-500 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] cursor-pointer text-white font-semibold"
              onClick={onRegisterClick}
            >
              Sign up
            </button>
          </Link>

          <div className="text-[2.6vw] md:text-[1.1vw] mt-[2.5vw] md:mt-[0.5vw] font-medium text-gray-200">
            Don’t have an account?
          </div>
        </div>
      </div>
    </div>

    // <div className="relative bg-white w-[100vw] h-[100vh] overflow-hidden text-left text-lg text-gray-100 font-montserrat">
    //   <div
    //     className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white shadow-2xl drop-shadow-2xl box-border w-[1012px] h-[665px] overflow-hidden border-[0.3px]
    //    border-solid border-black scale-[0.8]"
    //   >
    //     <img
    //       className="hidden  md:block left-[0px] w-[35vw] h-[100vh] overflow-hidden object-cover"
    //       alt=""
    //       src="/frame-19@2x.png"
    //     />
    //     <form onSubmit={loginverify}>
    //       <div className="absolute top-[86px] left-[584px] text-[48px] font-semibold text-slategray">
    //         Log in
    //       </div>
    //       {loginWithOtp ? (
    //         <input
    //           placeholder={mobileNo}
    //           name="mobileNo"
    //           onChange={(e) => {
    //             setMobileNo(e.target.value);
    //             setError("");
    //           }}
    //           type="number"
    //           className="absolute top-[175.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3"
    //         ></input>
    //       ) : (
    //         <input
    //           placeholder={email}
    //           onChange={(e) => {
    //             setEmail(e.target.value);
    //             setError("");
    //           }}
    //           type="text"
    //           name="email"
    //           className="absolute top-[175.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3"
    //         ></input>
    //       )}
    //       {!loginWithOtp ? (
    //         <>
    //           <input
    //             type="password"
    //             name="password"
    //             placeholder={password}
    //             onChange={(e) => {
    //               setPassword(e.target.value);
    //               setError("");
    //             }}
    //             className="absolute top-[250.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3 pr-3"
    //           ></input>
    //           {error.length > 0 ? (
    //             <div className="absolute top-[320.3px] left-[583.3px] text-red-700 font-semibold text-lg">
    //               {error + "!"}
    //             </div>
    //           ) : null}
    //         </>
    //       ) : null}
    //       {/* <Link to={"/"}> */}
    //       <input
    //         type="submit"
    //         value="Login"
    //         className="absolute top-[360px] left-[584px] rounded-8xs bg-lightslategray shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[229px] h-[63px] overflow-hidden text-5xl text-white font-semibold "
    //       />
    //       {/* </Link> */}
    //     </form>
    //     <Link
    //       to={"/register"}
    //       className="absolute top-[560px] left-[584px] rounded-8xs bg-red-400 hover:bg-red-500 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[229px] h-[63px] overflow-hidden cursor-pointer text-5xl text-white"
    //       onClick={onRegisterClick}
    //     >
    //       <b className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_47.5px)]">
    //         Sign up
    //       </b>
    //     </Link>
    //     <div
    //       className="absolute top-[445px] left-[584px] font-medium text-gray-200 cursor-pointer"
    //       onClick={onLoginWithMobileClick}
    //     >
    //       {loginText}
    //     </div>
    //     <div className="absolute top-[525px] left-[584px] font-medium text-gray-200">
    //       Don’t have an account?
    //     </div>
    //   </div>
    // </div>
  );
};

export default LogIn;
