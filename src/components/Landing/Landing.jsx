import React, { useState, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import HeroSection from "../Boundary/HeroSection";
import photography from "../../assets/images/photography.png";
import ai from "../../assets/images/ai.png";
import design from "../../assets/images/design.png";
import seo from "../../assets/images/seoService.png";
import browseicon from "../../assets/images/icon.png";
import businesss from "../../assets/images/business.png";
import videoAnim from "../../assets/images/videoAnimation.png";
import Writting from "../../assets/images/writingTranslation.png";
import webdesignservice from "../../assets/images/webDesignService.png";
import musicAudio from "../../assets/images/musicAudio.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import PreLoader from "../../subsitutes/PreLoader";
import axios from "../../axios";

const TestimonialCard = ({ expert_id, id, user, content, date_created }) => {
  const navigate = useNavigate();
  const val = id % 5;
  return (
    <motion.div className="w-[58vw] h-[55vw] sm:w-[34vw] sm:h-[28vw] md:w-[32vw] md:h-[25vw]  text-white flex flex-col justify-center">
      <div
        className={`relative w-full h-full object-cover ${
          val == 4
            ? "bg-[#EA7794]"
            : val == 3
            ? "bg-[#78A7EE]"
            : val == 2
            ? "bg-[#F66B3A]"
            : val == 1
            ? "bg-[#804EDA]"
            : val == 0
            ? "bg-[#78A7EE]"
            : "bg-[#EA7794]"
        }   rounded-xl  border-white border flex flex-col`}
      >
        <div
          className="w-full h-1/3 flex flex-row items-center justify-start gap-[1.4vw] sm:gap-[0.8vw] px-[1.15vw] cursor-pointer"
          onClick={() => navigate(`/experts/expertprofile/${expert_id}`)}
        >
          <img
            className="shrink-0 w-[10vw] h-[10vw] xs:w-[9.5vw] xs:h-[9.5vw] sm:h-[4.5vw] sm:w-[4.5vw] rounded-full object-top object-cover border-white border-solid border-[0.15vw] sm:border-[0.2vw]"
            src={user?.profile_img}
            alt=""
          />
          <div>
            <h2 className="shrink-0 text-[4vw] sm:text-[2vw] tracking-wide sm:tracking-normal mb-0">
              {user?.first_name} {user?.last_name}
            </h2>
            <h4 className="mt-[0.25vw] font-medium text-[2.8vw] xs:text-[2vw] sm:text-[1.15vw]">
              {date_created.split("T")[0]}
            </h4>
          </div>
        </div>
        <div className="w-full h-2/3 text-[2.98vw] sm:text-[1.55vw] md:text-[1.45vw] flex items-start justify-start px-[2vw]">
          {content}
        </div>
      </div>
    </motion.div>
  );
};
export const ServiceCategory = () => {
  const location = useLocation();
  return (
    <div
      className={`relative flex flex-col md:flex-row gap-4 overflow-hidden  ${
        location.pathname === "/services"
          ? "px-[2vw]"
          : " px-[6vw] md:px-[11vw]"
      } pt-[8.5vw] sm:pt-[10vh] w-full min-h-[88vh] md:min-h-[55vw] mb-[3vw] md:mb-[1vw] lg:mb-[5vw]`}
    >
      <div className="w-full md:w-2/4 flex flex-row md:flex-col gap-4 h-full flex-wrap ">
        <div className="w-full h-2/5  flex flex-row gap-4 ">
          <div className="w-full md:w-1/2 h-full  flex flex-row md:flex-col gap-6 md:gap-2 overflow-hidden">
            <img
              src={browseicon}
              className="w-2/5 md:w-2/6 h-1/4 object-fill"
            />
            <h1 className="shrink-0 w-[16vw] md:w-[13vw] text-[3.4vw] mt-0 md:mt-5 md:text-[2.2vw] font-extrabold underline md:no-underline">
              Browse services by category
            </h1>
          </div>
          <div className="w-1/2 h-full  overflow-hidden">
            <img src={photography} className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="w-full h-2/5  flex flex-row gap-4">
          <div className="w-2/5 h-full  overflow-hidden">
            <img src={ai} className="w-full h-full object-fill" />
          </div>
          <div className="w-3/4 h-full  overflow-hidden">
            <img src={design} className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="w-full h-[20%]  flex flex-row gap-4">
          <div className="w-1/2 h-full  py-2 text-[2.2vw] md:text-[1.2vw]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
            harum
          </div>
          <div className="w-1/2 h-full  overflow-hidden">
            <img src={seo} className="w-full h-full object-fill" />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/4  h-full  flex flex-row md:flex-col gap-4">
        <div className="w-full h-2/5  overflow-hidden">
          <img src={businesss} className="w-full h-full object-fill" />
        </div>
        <div className="w-full h-2/5  overflow-hidden">
          <img src={videoAnim} className="w-full h-full object-fill" />
        </div>
        <div className="w-full md:h-1/5  overflow-hidden">
          <img src={Writting} className="w-full h-full object-fill" />
        </div>
      </div>
      <div className="w-full md:w-1/4 h-full  flex flex-row md:flex-col gap-4">
        <div className="w-full h-1/5  overflow-hidden flex justify-start md:justify-end">
          <Link to="/services" className="decoration-transparent">
            <div className="my-[10vw] md:my-0 py-2 px-2 sm:px-4 bg-black w-[18vw] md:w-[12vw] items-center  text-center text-white font-semibold rounded-md flex justify-center text-[1.8vw] md:text-[1.2vw]">
              <span className="md:no-underline underline text-center shrink-0">
                See More
              </span>
              <GrFormNextLink className="text-center w-[3vw] h-[3vw] md:w-[1.7vw]  md:h-[1.7vw]" />
            </div>
          </Link>
        </div>
        <div className="w-full h-2/5  overflow-hidden">
          <img src={webdesignservice} className="w-full h-full object-fill" />
        </div>
        <div className="w-full h-2/5  overflow-hidden">
          <img src={musicAudio} className="w-full h-full object-fill" />
        </div>
      </div>
    </div>
  );
};
export const TopExperts = () => {
  const [top5ExpertList, setTop5ExpertList] = useState([]);
  const location = useLocation().pathname;
  const [activeNo, setActiveNo] = useState(0);
  const navigate = useNavigate();
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const getTop5Experts = async () => {
    try {
      const response = await axios.get("/topfive/?action=1", {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      if (
        !response.data ||
        response.data.status === 400 ||
        response.data.status === 401
      ) {
        console.log(response.data.message);
        return;
      }
      // set respective data
      setTop5ExpertList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getTop5Experts();
  }, []);
  return (
    <div className="relative w-full h-auto py-[5vw] md:py-[3vw] bg-[#F2F2F2] px-[6vw] md:px-[10vw] overflow-hidden mb-[3vw]">
      <Link
        to={"/experts"}
        className={`${
          location === "/experts" ? "hidden" : "block"
        } text-[#C5C3C3] text-4xl xs:text-5xl md:text-7xl lg:text-[84px]  font-bold flex justify-start md:justify-end decoration-transparent`}
      >
        EXPERTS
      </Link>
      <div className="flex flex-col sm:flex-row mb-[12.5vw] sm:mb-[10vw] md:mb-[5vw] gap-5 md:gap-8 w-full  mt-[3vw] md:mt-[2vw]">
        {top5ExpertList.map((expert, index) => (
          <div
            key={expert?.expert_id}
            onMouseOver={() => setActiveNo(index)}
            onMouseLeave={() => setActiveNo(index)}
            className={`${
              activeNo === index
                ? "activeExpert"
                : "w-full sm:w-3/5 h-[36vh] md:h-[56vh] lg:h-[65vh]"
            } expertDiv relative flex flex-col gap-4  items-start rounded`}
          >
            <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[60%] ">
              <img
                src={expert?.profile_img}
                alt="expert profile"
                className={`absolute left-0 right-0 brightness-[60%] w-full h-full shrink-0 ${
                  activeNo === index
                    ? "object-center"
                    : "object-center  object-cover"
                }`}
              />
              <h2>{expert?.profession}</h2>
              {activeNo === index ? (
                <div className=" absolute right-4 justify-start  bottom-0">
                  <h3 className=" justify-end text-[4vw] sm:text-[2vw] md:text-[1.5vw]">
                    {expert?.expert_name}
                  </h3>
                  <h3 className=" justify-end text-[2.8vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                    <CiStar className="text-[3.4vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                    {expert?.avg_rating} /5
                  </h3>
                  <div
                    className="flex items-center justify-end mt-2 md:mt-4 text-white mb-3 cursor-pointer"
                    onClick={() =>
                      navigate(`/experts/expertprofile/${expert?.expert_id}`)
                    }
                  >
                    <span className="underline  text-[2.8vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                      See More
                    </span>
                    <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.1vw]" />
                  </div>
                </div>
              ) : (
                <div className="sm:invisible absolute right-4 justify-start  bottom-0">
                  <h3 className=" justify-end text-[4vw] sm:text-[2vw] md:text-[1.5vw]">
                    {expert?.expert_name}
                  </h3>
                  <h3 className=" justify-end text-[2.8vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                    <CiStar className="text-[3.4vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                    {expert?.rating_count} /5
                  </h3>
                  <div
                    className="flex items-center justify-end mt-2 md:mt-4 text-white mb-3 cursor-pointer"
                    onClick={() =>
                      navigate(`/experts/expertprofile/${expert?.expert_id}`)
                    }
                  >
                    <span className="underline text-[2.8vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                      See More
                    </span>{" "}
                    <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.4vw] sm:mt-[0.7vw]" />
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <Link
        to={"/experts"}
        className={`${
          location === "/experts" ? "hidden" : "block"
        } text-[2.4vw] md:text-[1.6vw] text-black flex items-cemter justify-end no-underline mt-[-10vw] sm:mt-[-8vw] md:mt-[-3vw]`}
      >
        See More Experts
        <GrFormNextLink className="mt-[0.5vw] text-[2vw] md:text-[1.4vw]" />
      </Link>
    </div>
  );
};

export const Story = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-[#f5f5f5] flex flex-row justify-between pl-[8vw] md:pl-[12vw] w-full items-center flex-nowrap py-[5vw]">
        <div className="flex flex-col gap-[1.8vw] sm:gap-[1.2vw] w-[130%] xs:w-full sm:w-[50%] items-start">
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl  font-extrabold  mb-0">
            Think creative,
            <br />
            Do effective
          </div>
          <div className="text-[8.8px] leading-3 xs:text-[11px] xs:leading-4 sm:text-xs md:text-sm lg:text-base text-left sm:text-justify w-full overflow-hidden">
            UltraCreation, setting new standards in the digital landscape. As
            their journey unfolded, challenges were met with expertise, and each
            project became a testament to the relentless pursuit of excellence.
          </div>
          <div className="text-[10px] xs:text-xs md:text-sm lg:text-lg font-bold">
            Read the full story
          </div>
        </div>
        <div className="relative flex flex-row pt-10 w-[42%] items-start">
          <div className=" w-4/6 sm:w-2/3  h-full bg-[#ffbbbb] absolute top-0 left-[10vw] xs:left-[20vw] sm:left-[15vw]" />
          <img
            src="https://file.rendit.io/n/f6PZQtoglij80koDqTim.png"
            alt="Frame11"
            className="relative mb-10 w-[32vw] invisible sm:visible sm:w-[25vw]"
          />
        </div>
      </div>
    </>
  );
};
export const Testimonial = () => {
  const [allTestimonials, setAllTestimonials] = useState([]);
  const cookies = document.cookie.split("; ");
  const jsonData = {};

  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const getallTestimonials = async () => {
    try {
      const response = await axios.get(`/testimonial/?action=1`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      if (
        !response.data ||
        response.data.status === 400 ||
        response.data.status === 401
      ) {
        console.log(response.data.message);
        return;
      }
      console.log(response.data.data);
      setAllTestimonials(response.data.data);
      // setTestimonialList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getallTestimonials();
  }, []);
  return (
    <div className="relative w-full h-auto flex flex-col border-y my-[5vw] sm:my-[3vw] border-solid  md:px-[12vw] px-[8vw] items-center pt-[3vw] sm:pt-[2vw] pb-[6vw] sm:pb-[4vw] ">
      <div className="w-full h-full text-start  justify-between  flex flex-row">
        <div className="">
          <h3 className="text-2xl xs:text-4xl md:text-5xl lg:text-6xl font-extralight mb-[-3.6vw]">
            what our user <br /> thinks of
          </h3>
          <h1 className="text-3xl xs:text-5xl  md:text-6xl lg:text-7xl font-sans font-extrabold tracking-wide">
            UltraXperts
          </h1>
        </div>
        <span className="flex items-center justify-center no-underline text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl">
          See More <GrFormNextLink />
        </span>
      </div>
      <motion.div className=" overflow-scroll w-full h-full flex flex-row">
        <motion.div className="flex gap-[4vw] md:gap-[1.4vw] overflow-visible ">
          {allTestimonials.map((item) => (
            <TestimonialCard key={item.id} {...item} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
export const Blog = () => {
  return (
    <div className=" xs:my-[4vw] sm:my-[3vw]">
      <div className="relative w-full h-auto pb-[7vw] xs:pb-[5vw] bg-[#F2F2F2] pl-[5vw] pr-[8vw]">
        <div className="flex flex-row justify-between items-center w-full h-full">
          <h1 className="text-[8.5vw] sm:text-[10vw] sm:leading-none font-thin font-sans text-[#C5C3C3] uppercase">
            Blog
          </h1>
          <Link
            to={"blog"}
            className="flex items-center no-underline text-black text-sm xs:text-base md:text-xl lg:text-2xl"
          >
            See More <GrFormNextLink />
          </Link>
        </div>
        <div className="flex flex-col xs:flex-row w-full gap-[2.4vw] items-start">
          <img
            className=" w-full h-[35vw] xs:w-[40vw] xs:h-[50vw] sm:w-[28vw] sm:h-[36.5vw] md:h-[38vw] lg:h-[35vw] rounded-sm object-cover"
            src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="flex w-full xs:w-2/3 flex-col items-center xs:items-start justify-start py-2  overflow-hidden">
            <div className="w-full sm:w-[80%] text-[4.85vw] sm:text-[4.4vw] font-sans  font-extrabold tracking-wide text-center xs:text-left ">
              A DESIGNER’S GUIDE TO BATTLE IMPOSTER SYNDROME
            </div>
            <p className="w-full md:w-11/12 text-[9px] leading-[14px]  xs:text-[9.5px] xs:leading-[14px] md:text-xs lg:text-sm mb-[-0.8vw] text-center xs:text-left">
              You’ve always dreamt of being a designer and suddenly you find
              yourself actually doing it. Answering briefs, building your
              portfolio, even working in a studio. But yet, something does not
              feel quite right. You can not help but feel incredulous—waiting
              for someone to catch you out and bring you back to reality.
              {"  "}
              <Link
                to={"blog/blogdetail"}
                className="underline text-black mt-[1.8vw] text-[10px] xs:text-[11px] sm:text-xs md:text-base font-medium shrink-0"
              >
                Read More
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* <div className="relative w-full h-auto pb-[5vw] bg-[#F2F2F2] pl-[5vw] pr-[8vw]">
        <div className="flex flex-row-reverse justify-between items-center w-full h-full">
          <h1 className="text-[8.5vw] sm:text-[6vw] font-thin font-sans text-[#C5C3C3] uppercase">
            Blog
          </h1>
        </div>
        <div className="flex flex-row-reverse w-full gap-[2.4vw] items-start">
          <img
            className="w-[38vw] h-[60vw] xs:w-[40vw] xs:h-[50vw] sm:w-[28vw] sm:h-[36.5vw] md:h-[38vw] lg:h-[35vw] rounded-sm"
            src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="flex w-2/3 flex-col items-center xs:items-start justify-start">
            <div className="text-[4.85vw] sm:text-[4.4vw] font-sans  font-extrabold tracking-wide text-center xs:text-left ">
              A DESIGNER’S <br /> GUIDE TO BATTLE <br /> IMPOSTER <br />
              SYNDROME
            </div>
            <p className="w-full md:w-11/12 text-[9px] leading-[14px]  xs:text-[9.5px] xs:leading-[14px] md:text-xs lg:text-sm mb-[-0.8vw] text-center xs:text-left">
              You’ve always dreamt of being a designer and suddenly you find
              yourself actually doing it. Answering briefs, building your
              portfolio, even working in a studio. But yet, something doesn’t
              feel quite right. You can’t help but feel incredulous—waiting for
              someone to catch you out and bring you back to reality.
            </p>
            <Link
              to={"blog/blogdetail"}
              className="underline text-black mt-[1.8vw] text-[10px] xs:text-[11px] sm:text-xs md:text-base font-medium"
            >
              Read More
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};
const Landing = () => {
  const navigate = useNavigate();
  const changeAuth = async () => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(";").shift();
    };
    const refresh_token = getCookie("refresh_token");
    if (!refresh_token) {
      //clear local storage and go back to login
      localStorage.clear();
      window.location.reload();
      document.cookie =
        "access_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
      document.cookie =
        "refresh_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/;";
    } else {
      try {
        const res = await axios.post(
          "/refresh/",
          {
            refresh: `${refresh_token}`,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(res);
        const expirationDateforAccess = new Date();
        const expirationDateforRefresh = new Date();
        expirationDateforAccess.setDate(expirationDateforAccess.getDate() + 7);
        expirationDateforRefresh.setDate(
          expirationDateforRefresh.getDate() + 8
        );
        document.cookie = `access_token=${
          res.data.access
        };expires=${expirationDateforAccess.toUTCString()};  SameSite=Lax;`;
        document.cookie = `refresh_token=${
          res.data.refresh
        };expires=${expirationDateforRefresh.toUTCString()};  SameSite=Lax;`;
        // localStorage.setItem("userId", `${res.data.id}`);
        localStorage.setItem("username", `${res.data.user.first_name}`);
        localStorage.setItem("profile", `${res.data.user.profile_img}`);
        localStorage.setItem("isExpert", `${res.data.user.is_expert}`);
        localStorage.setItem("isAuthor", `${res.data.user.is_author}`);
        localStorage.setItem("isCustomer", `${res.data.user.is_customer}`);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const [preLoader, setPreLoder] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoder(false);
    }, 2500);
    const isAuthChecked = sessionStorage.getItem("isAuthChecked");
    if (!isAuthChecked) {
      // If not, call the function and set the flag in sessionStorage
      changeAuth();
      sessionStorage.setItem("isAuthChecked", "true");
    }
  }, []);
  if (preLoader) {
    return <PreLoader />;
  }
  return (
    <>
      <HeroSection />
      <TopExperts />
      <ServiceCategory />
      <Testimonial />
      <Blog />
      <Story />
    </>
  );
};

export default Landing;
