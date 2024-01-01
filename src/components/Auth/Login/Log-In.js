import { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { signUpSchema } from "../../../Validations/SignUpValidations";

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
  const onFrameContainer3Click = useCallback(() => {
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
    signUpSchema
      .validate(data, { abortEarly: false })
      .then((responseData) => {
        // console.log("no validation errors");
        // console.log(responseData);    // responseData is the data after validation
      })
      .catch((err) => {
        setError(err.errors[0]);
        // console.log(err.errors);
      });
  };

  const onLoginWithMobileClick = () => {
    setLoginWithOtp(!loginWithOtp);
    if (loginWithOtp) setLoginText("Login with OTP");
    else setLoginText("Login with Email");
  };

  return (
    <div className="relative bg-white w-[100vw] h-[100vh] overflow-hidden text-left text-lg text-gray-100 font-montserrat">
      <div
        className="absolute top-[calc(50%_-_332px)] left-[calc(50%_-_506px)] bg-white shadow-[1px_1px_4px_rgba(0,_0,_0,_0.15)] box-border w-[1012px] h-[665px] overflow-hidden border-[0.3px]
       border-solid border-black scale-[0.8]"
      >
        <img
          className="absolute top-[calc(50%_-_332.5px)] left-[0px] w-[506px] h-[665px] overflow-hidden object-cover"
          alt=""
          src="/frame-19@2x.png"
        />
        <form onSubmit={loginverify}>
          <div className="absolute top-[86px] left-[584px] text-[48px] font-semibold text-slategray">
            Log in
          </div>
          {loginWithOtp ? (
            <input
              placeholder={mobileNo}
              name="mobileNo"
              onChange={(e) => setMobileNo(e.target.value)}
              type="number"
              className="absolute top-[175.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3"
            ></input>
          ) : (
            <input
              placeholder={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              name="email"
              className="absolute top-[175.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3"
            ></input>
          )}
          {!loginWithOtp ? (
            <>
              <input
                type="password"
                name="password"
                placeholder={password}
                onChange={(e) => setPassword(e.target.value)}
                className="absolute top-[250.3px] left-[583.3px] rounded-sm box-border w-[371.4px] h-[53.4px] overflow-hidden border-[0.7px] border-solid border-darkslategray text-lg text-gray-400 pl-3 pr-3"
              ></input>
              {error.length > 0 ? (
                <div className="absolute top-[320.3px] left-[583.3px] text-red-700 font-semibold text-lg">
                  {error + "!"}
                </div>
              ) : null}
            </>
          ) : null}
          {/* <Link to={"/"}> */}
          <input
            type="submit"
            value="Login"
            className="absolute top-[360px] left-[584px] rounded-8xs bg-lightslategray shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[229px] h-[63px] overflow-hidden text-5xl text-white font-semibold "
          />
          {/* </Link> */}
        </form>
        <Link
          to={"/register"}
          className="absolute top-[560px] left-[584px] rounded-8xs bg-red-500 shadow-[0px_1px_4px_rgba(0,_0,_0,_0.25)] w-[229px] h-[63px] overflow-hidden cursor-pointer text-5xl text-white"
          onClick={onFrameContainer3Click}
        >
          <b className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_47.5px)]">
            Sign up
          </b>
        </Link>
        <div
          className="absolute top-[445px] left-[584px] font-medium text-gray-200 cursor-pointer"
          onClick={onLoginWithMobileClick}
        >
          {loginText}
        </div>
        <div className="absolute top-[525px] left-[584px] font-medium text-gray-200">
          Don’t have an account?
        </div>
      </div>
    </div>
  );
};

export default LogIn;
