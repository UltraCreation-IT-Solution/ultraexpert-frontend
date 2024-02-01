import React, { useState, useRef, useEffect } from "react";
import { GrFormNextLink } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import Footer from "../Boundary/Footer";
import Navbar from "../Boundary/Navbar";
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
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PreLoader from "../../subsitutes/PreLoader";

export const ServiceCategory = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-4 overflow-hidden  px-[6vw] md:px-[11vw] pt-[7.5vw] sm:pt-[10vh] w-full min-h-[88vh] sm:min-h-[100vh] mb-[3vw] md:mb-[1vw] lg:mb-[5vw]">
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
      <div className="w-full md:w-1/4 h-full  flex flex-row md:flex-col gap-4">
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
  const [activeNo, setActiveNo] = useState(0);
  return (
    <div className="relative w-full h-auto py-[3vw] bg-[#F2F2F2] px-[6vw] md:px-[12vw] overflow-hidden">
      <Link
        to={"/experts"}
        className="text-[#C5C3C3] text-[7.5vw] md:text-[6.5vw] font-bold flex justify-end decoration-transparent"
      >
        EXPERTS
      </Link>
      <div className="flex flex-col sm:flex-row mb-[12.5vw] sm:mb-[10vw] md:mb-[5vw] gap-5 md:gap-8 w-full  mt-4 ">
        <div
          onMouseOver={() => setActiveNo(0)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 0 ? "active" : "w-full sm:w-1/2 h-[36vh] md:h-[65vh]"
          } expertDiv relative flex flex-col gap-4  items-start bg-[url('https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D')] bg-center`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[60%] ">
            <h2>Web Developer</h2>
            {activeNo === 0 ? (
              <div className=" absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[3.8vw] sm:text-[2vw] md:text-[1.5vw]">
                  Bhavesh Bhanusali
                </h3>
                <h3 className=" justify-end text-[2.6vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                  <CiStar className="text-[3.2vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                  4.9 /5
                </h3>
                <h3 className="flex items-center justify-end mt-2 md:mt-4">
                  <span className="underline text-[2.4vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                    See More
                  </span>{" "}
                  <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.4vw] sm:mt-[0.7vw]" />
                </h3>
              </div>
            ) : (
              <div className="sm:invisible absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[3.8vw] sm:text-[2vw] md:text-[1.5vw]">
                  Bhavesh Bhanusali
                </h3>
                <h3 className=" justify-end text-[2.6vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                  <CiStar className="text-[3.2vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                  4.9 /5
                </h3>
                <h3 className="flex items-center justify-end mt-2 md:mt-4">
                  <span className="underline text-[2.4vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                    See More
                  </span>{" "}
                  <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.4vw] sm:mt-[0.7vw]" />
                </h3>
              </div>
            )}
          </div>
        </div>
        <div
          onMouseOver={() => setActiveNo(1)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 1 ? "active" : "w-full sm:w-1/2 h-[36vh] md:h-[65vh]"
          } expertDiv bg-[url('https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D')] bg-center`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[65%] ">
            <h2>Web Developer</h2>
            {activeNo === 1 ? (
              <div className=" absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[3.8vw] sm:text-[2vw] md:text-[1.5vw]">
                  Bhavesh Bhanusali
                </h3>
                <h3 className=" justify-end text-[2.6vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                  <CiStar className="text-[3.2vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                  4.9 /5
                </h3>
                <h3 className="flex items-center justify-end mt-2 md:mt-4">
                  <span className="underline text-[2.4vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                    See More
                  </span>{" "}
                  <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.4vw] sm:mt-[0.7vw]" />
                </h3>
              </div>
            ) : (
              <div className="sm:invisible absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[3.8vw] sm:text-[2vw] md:text-[1.5vw]">
                  Bhavesh Bhanusali
                </h3>
                <h3 className=" justify-end text-[2.6vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                  <CiStar className="text-[3.2vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                  4.9 /5
                </h3>
                <h3 className="flex items-center justify-end mt-2 md:mt-4">
                  <span className="underline text-[2.4vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                    See More
                  </span>{" "}
                  <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.4vw] sm:mt-[0.7vw]" />
                </h3>
              </div>
            )}
          </div>
        </div>
        <div
          onMouseOver={() => setActiveNo(2)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 2 ? "active" : "w-full sm:w-1/2 h-[36vh] md:h-[65vh]"
          } expertDiv relative flex flex-col gap-4  items-start bg-[url('https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww')] bg-center`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[65%] ">
            <h2>Web Developer</h2>
            {activeNo === 2 ? (
              <div className=" absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[3.8vw] sm:text-[2vw] md:text-[1.5vw]">
                  Bhavesh Bhanusali
                </h3>
                <h3 className=" justify-end text-[2.6vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                  <CiStar className="text-[3.2vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                  4.9 /5
                </h3>
                <h3 className="flex items-center justify-end mt-2 md:mt-4">
                  <span className="underline text-[2.4vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                    See More
                  </span>{" "}
                  <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.4vw] sm:mt-[0.7vw]" />
                </h3>
              </div>
            ) : (
              <div className="sm:invisible absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[3.8vw] sm:text-[2vw] md:text-[1.5vw]">
                  Bhavesh Bhanusali
                </h3>
                <h3 className=" justify-end text-[2.6vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                  <CiStar className="text-[3.2vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                  4.9 /5
                </h3>
                <h3 className="flex items-center justify-end mt-2 md:mt-4">
                  <span className="underline text-[2.4vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                    See More
                  </span>{" "}
                  <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.4vw] sm:mt-[0.7vw]" />
                </h3>
              </div>
            )}
          </div>
        </div>
        <div
          onMouseOver={() => setActiveNo(3)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 3 ? "active" : "w-full sm:w-1/2 h-[36vh] md:h-[65vh]"
          } expertDiv relative  flex-col gap-4 items-start bg-[url('https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover hidden md:flex`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[65%] ">
            <h2>Web Developer</h2>
            {activeNo === 3 ? (
              <div className=" absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[1.5vw]">Bhavesh Bhanusali</h3>
                <h3 className=" justify-end text-[1.2vw] flex gap-1 items-center -my-3">
                  <CiStar className="text-[1.4vw]" /> 4.9 /5
                </h3>
                <h3 className="flex items-center justify-end">
                  <span className="underline  text-[1.1vw]">See More</span>{" "}
                  <GrFormNextLink className="text-[1.4vw] mt-1" />
                </h3>
              </div>
            ) : null}
          </div>
        </div>
        <div
          onMouseOver={() => setActiveNo(4)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 4 ? "active" : "w-full sm:w-1/2 h-[36vh] md:h-[65vh] "
          } expertDiv relative  flex-col gap-4 items-start bg-[url('https://images.unsplash.com/photo-1599032909736-0155c1d43a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')] bg-center bg-cover hidden md:flex`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[65%] ">
            <h2>Web Developer</h2>
            {activeNo === 4 ? (
              <div className=" absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[1.5vw]">Bhavesh Bhanusali</h3>
                <h3 className=" justify-end text-[1.2vw] flex gap-1 items-center -my-3">
                  <CiStar className="text-[1.4vw]" /> 4.9 /5
                </h3>
                <h3 className="flex items-center justify-end">
                  <span className="underline  text-[1.1vw]">See More</span>{" "}
                  <GrFormNextLink className="text-[1.4vw] mt-1" />
                </h3>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="text-[2.4vw] md:text-[1.6vw] text-black flex items-cemter justify-end underline mt-[-10vw] sm:mt-[-8vw] md:mt-[-3vw]">
        See More Experts
        <GrFormNextLink className="mt-[0.5vw] text-[2vw] md:text-[1.4vw]" />
      </div>
    </div>
  );
};
export const AboutUX = () => {
  return (
    <div className="relative w-full min-h-auto py-[3vw] md:py-[5vw]">
      <div className="mt-0 sm:-mt-10 flex py-[2vw] flex-col sm:flex-row  w-full h-auto px-[8vw] sm:px-[12vw] gap-0 sm:gap-8 items-center flex-nowrap">
        <h3 className="relative w-full text-center sm:text-left sm:w-1/3 text-gray-700 font-extrabold text-[4.2vw] sm:text-[3vw]">
          Helping millions grow better
        </h3>
        <div className="aboutMsg mt-0 sm:mt-24 w-[34vw] sm:w-[30vw] h-[28vw] bg-[url('https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3VyJTIwbWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover z-20 "></div>
        <div className="w-3/4 sm:w-1/3 h-auto flex flex-col ">
          <h3 className="relative w-full text-gray-700 font-bold text-[4vw] sm:text-[2vw] text-center ">
            Our mission
          </h3>
          <p className="relative  w-full text-gray-700 font-normal text-justify text-[2.2vw] sm:text-[1.25vw]">
            At UltraCreation, our mission is to transcend conventional
            boundaries and empower businesses with cutting-edge technological
            solutions. We are dedicated to being the catalyst for our clients'
            digital transformation, facilitating seamless connectivity, and
            maximizing their potential in the ever-evolving digital landscape.
          </p>
          <div className="flex flex-row items-center ml-20 justify-end gap-[5px] text-base text-gray-400">
            <div className="relative font-medium text-[2.2vw] sm:text-[1.25vw] underline">
              Visit for more
            </div>
            <GrFormNextLink className="relative w-[3.6vw] h-[3.6vw] sm:w-[1.8vw] sm:h-[1.8vw] overflow-hidden shrink-0 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Story = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-[#f5f5f5] flex flex-row justify-between pl-[8vw] md:pl-[12vw] w-full items-center flex-wrap">
        <div className="flex flex-col gap-[1.8vw] sm:gap-[1.2vw] w-2/5 items-start">
          <div className="text-[4.75vw] sm:text-[3.6vw] font-extrabold  mb-0">
            Think creative,
            <br />
            Do effective
          </div>
          <div className="text-[1.95vw] sm:text-[1.4vw] md:text-[1.25vw] text-left sm:text-justify w-full">
            UltraCreation, setting new standards in the digital landscape. As
            their journey unfolded, challenges were met with expertise, and each
            project became a testament to the relentless pursuit of excellence.
          </div>
          <div className="text-[2vw] sm:text-[1.75vw] md:text-[1.5vw] font-bold">
            Read the full story
          </div>
        </div>
        <div className="relative flex flex-row pt-10 w-1/2 items-start">
          <div className="w-2/3 h-full bg-[#ffbbbb] absolute top-0 left-[20vw] sm:left-[15vw]" />
          <img
            src="https://file.rendit.io/n/f6PZQtoglij80koDqTim.png"
            alt="Frame11"
            className="relative mb-10 w-[32vw] sm:w-[25vw]"
          />
        </div>
      </div>
    </>
  );
};
export const Testimonial = () => {
  const [width, setWidth] = useState(0);
  const carosel = useRef();
  useEffect(() => {
    setWidth(carosel.current.scrollWidth - carosel.current.offsetWidth);
  }, []);
  return (
    <div className="relative w-full h-auto flex flex-col border-y my-[5vw] sm:my-[3vw] border-solid  md:px-[12vw] px-[8vw] items-center pt-[3vw] sm:pt-[2vw] pb-[6vw] sm:pb-[4vw] ">
      <div className="w-full h-full text-start  justify-between  flex flex-row">
        <div className="">
          <h3 className="text-[5vw] md:text-[3.5vw] font-extralight mb-[-3.6vw]">
            what our user <br /> thinks of
          </h3>
          <h1 className="text-[6vw] md:text-[4.4vw] font-sans font-extrabold tracking-wide">
            UltraXperts
          </h1>
        </div>
        <span className="flex items-center justify-center underline text-[2.5vw] sm:text-[2vw] md:text-[1.2vw]">
          See More <GrFormNextLink />
        </span>
      </div>
      <motion.div
        ref={carosel}
        whileTap={{ cursor: "grabbing" }}
        className="cursor-grab overflow-hidden w-full h-full flex flex-row"
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-[1.6vw] md:gap-[1.4vw] overflow-visible "
        >
          <motion.div className="w-[39vw] h-[42vw] sm:w-[25vw] md:w-[23vw] sm:h-[28vw] md:h-[25vw]  text-white flex flex-col justify-center">
            <div
              className={`w-full h-full object-cover bg-[#EA7794]   rounded-xl pointer-events-none border-white border flex flex-col`}
            >
              <div className="w-full h-1/3 flex flex-row items-center justify-start gap-[0.8vw] px-[1.15vw]">
                <img
                  className="shrink-0 w-[8.5vw] h-[8.5vw] sm:h-[5vw] sm:w-[5vw] rounded-full object-cover border-white border-solid border-[0.15vw] sm:border-[0.2vw]"
                  src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <h2 className="shrink-0 text-[2.6vw] sm:text-[1.4vw] tracking-wide sm:tracking-normal">
                  Bhavesh Bhanusali
                </h2>
              </div>
              <div className="w-full h-2/3 text-[2.15vw] sm:text-[1.35vw] md:text-[1.2vw] flex items-start justify-start px-[2vw]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                nemo eos ea unde, provident magni enim ducimus dicta reiciendis.
                Omnis sit harum accusamus. Recusandae?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, sed.
              </div>
            </div>
          </motion.div>
          <motion.div className="w-[39vw] h-[42vw] sm:w-[25vw] md:w-[23vw] sm:h-[28vw] md:h-[25vw]  text-white flex flex-col justify-center">
            <div
              className={`w-full h-full object-cover bg-[#78A7EE]  rounded-xl pointer-events-none border-white border flex flex-col`}
            >
              <div className="w-full h-1/3 flex flex-row items-center justify-start gap-[0.8vw] px-[1.15vw]">
                <img
                  className="shrink-0 w-[8.5vw] h-[8.5vw] sm:h-[5vw] sm:w-[5vw] rounded-full object-cover border-white border-solid border-[0.15vw] sm:border-[0.2vw]"
                  src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <h2 className="shrink-0 text-[2.6vw] sm:text-[1.4vw] tracking-wide sm:tracking-normal">
                  Bhavesh Bhanusali
                </h2>
              </div>
              <div className="w-full h-2/3 text-[2.15vw] sm:text-[1.35vw] md:text-[1.2vw] flex items-start justify-start px-[2vw]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                nemo eos ea unde, provident magni enim ducimus dicta reiciendis.
                Omnis sit harum accusamus. Recusandae?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, sed.
              </div>
            </div>
          </motion.div>
          <motion.div className="w-[39vw] h-[42vw] sm:w-[25vw] md:w-[23vw] sm:h-[28vw] md:h-[25vw]  text-white flex flex-col justify-center">
            <div
              className={`w-full h-full object-cover bg-[#F66B3A]   rounded-xl pointer-events-none border-white border flex flex-col`}
            >
              <div className="w-full h-1/3 flex flex-row items-center justify-start gap-[0.8vw] px-[1.15vw]">
                <img
                  className="shrink-0 w-[8.5vw] h-[8.5vw] sm:h-[5vw] sm:w-[5vw] rounded-full object-cover border-white border-solid border-[0.15vw] sm:border-[0.2vw]"
                  src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <h2 className="shrink-0 text-[2.6vw] sm:text-[1.4vw] tracking-wide sm:tracking-normal">
                  Bhavesh Bhanusali
                </h2>
              </div>
              <div className="w-full h-2/3 text-[2.15vw] sm:text-[1.35vw] md:text-[1.2vw] flex items-start justify-start px-[2vw]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                nemo eos ea unde, provident magni enim ducimus dicta reiciendis.
                Omnis sit harum accusamus. Recusandae?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, sed.
              </div>
            </div>
          </motion.div>
          <motion.div className="w-[39vw] h-[42vw] sm:w-[25vw] md:w-[23vw] sm:h-[28vw] md:h-[25vw]  text-white flex flex-col justify-center">
            <div
              className={`w-full h-full object-cover bg-[#F1BE60]   rounded-xl pointer-events-none border-white border flex flex-col`}
            >
              <div className="w-full h-1/3 flex flex-row items-center justify-start gap-[0.8vw] px-[1.15vw]">
                <img
                  className="shrink-0 w-[8.5vw] h-[8.5vw] sm:h-[5vw] sm:w-[5vw] rounded-full object-cover border-white border-solid border-[0.15vw] sm:border-[0.2vw]"
                  src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <h2 className="shrink-0 text-[2.6vw] sm:text-[1.4vw] tracking-wide sm:tracking-normal">
                  Bhavesh Bhanusali
                </h2>
              </div>
              <div className="w-full h-2/3 text-[2.15vw] sm:text-[1.35vw] md:text-[1.2vw] flex items-start justify-start px-[2vw]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                nemo eos ea unde, provident magni enim ducimus dicta reiciendis.
                Omnis sit harum accusamus. Recusandae?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, sed.
              </div>
            </div>
          </motion.div>
          <motion.div className="w-[39vw] h-[42vw] sm:w-[25vw] md:w-[23vw] sm:h-[28vw] md:h-[25vw]  text-white flex flex-col justify-center">
            <div
              className={`w-full h-full object-cover bg-[#804EDA]    rounded-xl pointer-events-none border-white border flex flex-col`}
            >
              <div className="w-full h-1/3 flex flex-row items-center justify-start gap-[0.8vw] px-[1.15vw]">
                <img
                  className="shrink-0 w-[8.5vw] h-[8.5vw] sm:h-[5vw] sm:w-[5vw] rounded-full object-cover border-white border-solid border-[0.15vw] sm:border-[0.2vw]"
                  src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <h2 className="shrink-0 text-[2.6vw] sm:text-[1.4vw] tracking-wide sm:tracking-normal">
                  Bhavesh Bhanusali
                </h2>
              </div>
              <div className="w-full h-2/3 text-[2.15vw] sm:text-[1.35vw] md:text-[1.2vw] flex items-start justify-start px-[2vw]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                nemo eos ea unde, provident magni enim ducimus dicta reiciendis.
                Omnis sit harum accusamus. Recusandae?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, sed.
              </div>
            </div>
          </motion.div>
          <motion.div className="w-[39vw] h-[42vw] sm:w-[25vw] md:w-[23vw] sm:h-[28vw] md:h-[25vw]  text-white flex flex-col justify-center">
            <div
              className={`w-full h-full object-cover bg-[#78A7EE]   rounded-xl pointer-events-none border-white border flex flex-col`}
            >
              <div className="w-full h-1/3 flex flex-row items-center justify-start gap-[0.8vw] px-[1.15vw]">
                <img
                  className="shrink-0 w-[8.5vw] h-[8.5vw] sm:h-[5vw] sm:w-[5vw] rounded-full object-cover border-white border-solid border-[0.15vw] sm:border-[0.2vw]"
                  src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <h2 className="shrink-0 text-[2.6vw] sm:text-[1.4vw] tracking-wide sm:tracking-normal">
                  Bhavesh Bhanusali
                </h2>
              </div>
              <div className="w-full h-2/3 text-[2.15vw] sm:text-[1.35vw] md:text-[1.2vw] flex items-start justify-start px-[2vw]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                nemo eos ea unde, provident magni enim ducimus dicta reiciendis.
                Omnis sit harum accusamus. Recusandae?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, sed.
              </div>
            </div>
          </motion.div>
          <motion.div className="w-[39vw] h-[42vw] sm:w-[25vw] md:w-[23vw] sm:h-[28vw] md:h-[25vw]  text-white flex flex-col justify-center">
            <div
              className={`w-full h-full object-cover bg-[#F66B3A]   rounded-xl pointer-events-none border-white border flex flex-col`}
            >
              <div className="w-full h-1/3 flex flex-row items-center justify-start gap-[0.8vw] px-[1.15vw]">
                <img
                  className="shrink-0 w-[8.5vw] h-[8.5vw] sm:h-[5vw] sm:w-[5vw] rounded-full object-cover border-white border-solid border-[0.15vw] sm:border-[0.2vw]"
                  src="https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
                <h2 className="shrink-0 text-[2.6vw] sm:text-[1.4vw] tracking-wide sm:tracking-normal">
                  Bhavesh Bhanusali
                </h2>
              </div>
              <div className="w-full h-2/3 text-[2.15vw] sm:text-[1.35vw] md:text-[1.2vw] flex items-start justify-start px-[2vw]">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                nemo eos ea unde, provident magni enim ducimus dicta reiciendis.
                Omnis sit harum accusamus. Recusandae?Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ducimus, sed.
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export const Blog = () => {
  return (
    <div className="my-[4vw] sm:my-[3vw]">
      <div className="relative w-full h-auto pb-[3vw] bg-[#F2F2F2] pl-[5vw] pr-[8vw]">
        <div className="flex flex-row justify-between items-center w-full h-full">
          <h1 className="text-[8.5vw] sm:text-[6vw] font-thin font-sans text-[#C5C3C3] uppercase">
            Blog
          </h1>
          <span className="flex items-center underline text-[2.8vw] sm:text-[2vw]">
            See More <GrFormNextLink />
          </span>
        </div>
        <div className="flex w-full gap-[2.4vw] items-start">
          <img
            className="w-[34vw] h-[48vw] sm:w-[28vw] sm:h-[36vw]"
            src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="flex w-2/3 flex-col items-start justify-start">
            <div className="text-[4.85vw] sm:text-[4.4vw] font-sans  font-extrabold tracking-wide ">
              A DESIGNER’S <br /> GUIDE TO BATTLE <br /> IMPOSTER <br />{" "}
              SYNDROME
            </div>
            <p className="w-full md:w-11/12 text-[2.15vw] sm:text-[1.6vw] md:text-[1.2vw] mb-[-0.8vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quis nostrum dignissimos eum, aliquid non nam, odit quidem
              voluptate velit facilis quisquam corporis numquam fugit est
              deleniti debitis qui id? Necessitatibus earum explicabo rem
              obcaecati.
            </p>
            <p className="underline text-[2.15vw] sm:text-[1.8vw] md:text-[1.5vw] font-medium">
              Read More
            </p>
          </div>
        </div>
      </div>
      <div className="relative w-full h-auto pb-[3vw] bg-[#F2F2F2] pl-[5vw] pr-[8vw]">
        <div className="flex flex-row-reverse justify-between items-center w-full h-full">
          <h1 className="text-[8.5vw] sm:text-[6vw] font-thin font-sans text-[#C5C3C3] uppercase">
            Blog
          </h1>
        </div>
        <div className="flex flex-row-reverse w-full gap-[2.4vw] items-start">
          <img
            className="w-[34vw] h-[48vw] sm:w-[28vw] sm:h-[36vw]"
            src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
          <div className="flex w-2/3 flex-col items-start justify-start">
            <div className="text-[4.85vw] sm:text-[4.4vw] font-sans  font-extrabold tracking-wide ">
              A DESIGNER’S <br /> GUIDE TO BATTLE <br /> IMPOSTER <br />{" "}
              SYNDROME
            </div>
            <p className="w-full md:w-11/12 text-[2.15vw] sm:text-[1.6vw] md:text-[1.2vw] mb-[-0.8vw]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              quis nostrum dignissimos eum, aliquid non nam, odit quidem
              voluptate velit facilis quisquam corporis numquam fugit est
              deleniti debitis qui id? Necessitatibus earum explicabo rem
              obcaecati.
            </p>
            <p className="underline text-[2.15vw] sm:text-[1.8vw] md:text-[1.5vw] font-medium">
              Read More
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
const Landing = () => {
  const [preLoader, setPreLoder] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPreLoder(false);
    }, 2500);
  }, []);
  if (preLoader) {
    return <PreLoader />;
  }
  return (
    <>
      <Navbar />
      <HeroSection />
      <TopExperts />
      <ServiceCategory />
      <AboutUX />
      <Story />
      <Blog />
      <Testimonial />
      <Footer />
    </>
  );
};

export default Landing;
