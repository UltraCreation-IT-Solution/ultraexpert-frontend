import { FaLinkedin, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { Link } from "react-router-dom";
// export const Footer = () => {
//   return (
//     <div className="relative w-full h-auto bg-[#2A2A2A] mt-[3vw] px-[8vw] py-[3vw] sm:py-[2vw] text-white">
//       <div className="flex text-white text-[9vw] sm:text-[8vw] w-full font-bold text-center justify-between items-center ">
//         UltraXpert
//         <span className="text-white text-xs xs:text-sm sm:text-base md:text-xl mt-[1vw] text-right">
//           Think Creative, <br /> Do Effective
//         </span>
//       </div>
//       <div className="flex flex-col  md:flex-row mt-[1.8vw] md:justify-between">
//         <div className="w-full md:w-[55%] mb-[2vw] md:mb-0  md:px-4 font-medium text-[9px] leading-3 xs:text-xs md:text-[13px] md:leading-5 lg:text-sm lg:leading-6 text-justify mt-[2vw] md:mt-[0]">
//           At UltraCreation, our mission is to transcend conventional boundaries
//           and empower businesses with cutting-edge technological solutions. We
//           are dedicated to being the catalyst for our clients' digital
//           transformation, facilitating seamless connectivity, and maximizing
//           their potential in the ever-evolving digital landscape.
//           <div className="mt-[1.65vw] sm:mt-[1.4vw] font-bold text-xs xs:text-base md:text-xl py-[1vw]">
//             Helping Millions, Grow Better
//           </div>
//         </div>
//         <div className=" w-full md:w-1/2 flex justify-between md:justify-normal md:gap-8 mt-[1.2vw] sm:mt-[0vw]">
//           <div className="w-1/3 list-none flex flex-col gap-[2.4vw] sm:gap-[1.4vw] font-semibold text-[10px] leading-4 xs:text-xs md:text-[13px] md:leading-5 lg:text-sm ml-[-4vw] xs:ml-[-2.5vw] md:ml-[0.5vw] overflow-hidden">
//             <li className="underline underline-offset-[3px]  pl-5 hover:scale-105">
//               Home
//             </li>
//             <li className="underline underline-offset-[3px] pl-5 hover:scale-105">
//               Experts
//             </li>
//             <li className="underline underline-offset-[3px] pl-5 hover:scale-105">
//               Blog
//             </li>
//             <li className="underline underline-offset-[3px] pl-5 hover:scale-105">
//               About
//             </li>
//             <li className="underline underline-offset-[3px] pl-5 hover:scale-105">
//               Service
//             </li>
//           </div>
//           <div className="w-3/4 md:w-2/3 ml-[-6vw] gap-[1.85vw] sm:gap-[1.05vw] flex flex-col justify-start text-[11px] leading-4 xs:text-xs md:text-[13px] md:leading-5 lg:text-sm">
//             <div className="w-full border-t-2 border-[#d4d4d4] border-solid pt-[0.6vw]">
//               <b>Email:</b> <br /> Bhaveshbhanusali1@gmail.com
//             </div>
//             <div className="w-full border-t-2 border-[#d4d4d4] border-solid pt-[0.6vw]">
//               <b>Contact:</b> <br /> 1234567890
//             </div>
//             <div className="w-full border-t-2 border-[#d4d4d4] border-solid pt-[0.6vw]">
//               <b>Follow:</b> <br /> <FaLinkedin /> <FaFacebook />{" "}
//               <FaInstagram /> <FaTwitter />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("subscribedEmail");
    if (storedEmail) {
      setEmail(storedEmail);
      setSubscribed(true);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/subscription/",
        {
          action: 1,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Invalid Email");
        return;
      }
      console.log(data);
      alert("Subscription Added!");
      setSubscribed(true);
      localStorage.setItem("subscribedEmail", email);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUnsubscribe = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "/subscription/",
        {
          action: 2,
          email: email,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = res.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Invalid Email");
        return;
      }
      console.log(data);
      alert("Subscription Removed!");
      setSubscribed(false);
      localStorage.removeItem("subscribedEmail");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="px-[4vw] pt-[15vw] md:pt-24 pb-6 mt-10 text-[#E4E4E4] bg-[#2A2A2A]">
      <div className="flex-col md:flex md:flex-row md:gap-[5vw] xl:gap-[10vw]">
        <div className="w-full ">
          <div className="text-4xl xs:text-5xl md:text-[5vw] text-[#F0F0F0] font-[900] font-sans overflow-hidden">
            Think Creative
            <br />
            Do Effective.
          </div>
          {subscribed ? (
            <div className="my-4">
              <div>
                You are subscribed with email:{" "}
                <div className="font-bold text-xl mt-2">{email}</div>
              </div>
              <button
                onClick={handleUnsubscribe}
                className="my-2 px-4 py-3 xs:px-4 xs:py-4 text-sm rounded-lg xs:rounded-sm bg-[#F0F0F0]"
              >
                Unsubscribe
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 my-[6vw] md:my-[3vw]"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-2 py-3 xs:px-4 xs:py-5 text-md rounded-md w-[80%] bg-[#F0F0F0] outline-none"
              />
              <button
                type="submit"
                className="px-4 py-3 xs:px-4 xs:py-4 text-sm rounded-lg xs:rounded-sm bg-[#F0F0F0]"
              >
                Go
              </button>
            </form>
          )}

          <div className=" text-sm xs:text-base md:text-sm xl:text-base ">
            UltraCreation, setting new standards in the digital landscape. As
            their journey unfolded, challenges were met with expertise, and each
            project became a testament to the relentless pursuit of excellence.
          </div>
        </div>

        <div className="w-full mt-[10vw] md:mt-0 flex justify-between md:justify-between gap-5 ">
          <div className="flex flex-col ml-0 pl-0">
            <div>
              <div className="text-[3.2vw] xs:text-base md:text-sm xl:text-lg text-[#F0F0F0] font-bold">
                NAVIGATE TO THE TOP
              </div>
              <div className="flex flex-col text-[3.2vw] xs:text-sm sm:text-base md:text-sm xl:text-base">
                <Link
                  to={"/"}
                  className="font-medium duration-200 mt-5 relative no-underline text-white"
                >
                  Home
                </Link>
                <Link
                  to={"/experts"}
                  className="font-medium duration-200 mt-2 relative no-underline text-white"
                >
                  Experts
                </Link>
                <Link
                  to={"/services"}
                  className="font-medium duration-200 mt-2 relative no-underline text-white"
                >
                  Services
                </Link>
                <Link
                  to={"/blog"}
                  className="font-medium duration-200 mt-2 relative no-underline text-white"
                >
                  Blogs
                </Link>
                <Link
                  to={"/about"}
                  className="font-medium duration-200 mt-2 relative no-underline text-white"
                >
                  About
                </Link>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-[3.2vw] xs:text-base md:text-sm xl:text-lg text-[#F0F0F0] font-bold">
                YOU CAN FIND US
              </div>
              <div className="text-[3.2vw] xs:text-sm sm:text-base md:text-sm xl:text-base">
                <div className=" mt-5">Instagram</div>
                <div className="mt-2">Linkedin</div>
                <div className="mt-2">Twitter</div>
                <div className="mt-2">Phone</div>
                <div className="mt-2 text-wrap break-words">Email</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <div className="text-[3.2vw] xs:text-base md:text-sm xl:text-lg text-[#F0F0F0] font-bold">
                SERVICES WE PROVIDE
              </div>
              <div className="text-[3.2vw] xs:text-sm sm:text-base md:text-sm xl:text-base">
                <div className="mt-5">UI/UX design</div>
                <div className="mt-2">Web Development</div>
                <div className="mt-2">SEO</div>
                <div className="mt-2">Logo design</div>
                <div className="mt-2">Graphic design</div>
              </div>
            </div>
            <div className="mt-10">
              <div className="text-[3.2vw] xs:text-base md:text-sm xl:text-lg text-[#F0F0F0] font-bold">
                WE WILL ALWAYS HELP
              </div>
              <div className="text-[3.2vw] xs:text-sm sm:text-base md:text-sm xl:text-base ">
                <div className="mt-5">Terms & Conditions</div>
                <div className="mt-2">Privacy Policies</div>
                <div className="mt-2">Cookies</div>
                <div className="mt-2">Payment and Return</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border border-solid border-white my-10"></div>
      <div className="lg:flex items-center justify-between shrink-0">
        <div className="pb-3 text-5xl md:text-[8vw] font-[900] font-sans tracking-normal text-[#F0F0F0] overflow-hidden">
          ultraXpert
        </div>
        <div className="my-4 lg:my-0 text-base sm:text-lg">
          © Copyright 2024 ultraXpert Inc. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
