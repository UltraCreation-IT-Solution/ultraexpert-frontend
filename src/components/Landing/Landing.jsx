import React, { useEffect, useState } from "react";
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
import PreLoader from "../../substitutes/PreLoader";

export const ServiceCategory = () => {
  return (
    <div className="relative flex flex-col md:flex-row gap-4 overflow-hidden mt-[3vh] px-[12vw] py-[10vh] w-full min-h-[100vh]">
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
            <div className="my-[10vw] md:my-0 py-2 px-4 bg-black w-[18vw] md:w-[10vw] items-center text-center  text-white font-semibold rounded-md flex text-[1.8vw] md:text-[1.2vw]">
              <span className="md:no-underline underline">See More</span>
              <GrFormNextLink className=" w-6 h-6" />
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
    <div className="relative w-full h-[90vh] bg-[#F2F2F2] px-[12vw] overflow-hidden">
      <Link
        to={"/experts"}
        className="text-[#C5C3C3] text-[6.5vw] font-bold flex justify-end decoration-transparent"
      >
        <span className="text-[18px] text-black flex items-end py-[1.5vw] px-4 underline">
          see more
        </span>
        EXPERTS
      </Link>
      <div className="flex flex-row mb-20 gap-8 w-full items-start mt-4">
        <div
          onMouseOver={() => setActiveNo(0)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 0 ? "active" : ""
          } expertDiv relative flex flex-col gap-4 w-1/2 h-[65vh] items-start bg-[url('https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D')] bg-center`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[65%] ">
            <h2>Web Developer</h2>
            {activeNo === 0 ? (
              <div>
                <h3 className="absolute right-4 text-[20px] bottom-6">
                  Bhavesh Bhanusali
                </h3>
                <h3 className="absolute right-4 text-[16px] bottom-0">
                  <CiStar className="-mb-[2px]" /> 4.9 /5
                </h3>
              </div>
            ) : null}
          </div>
        </div>
        <div
          onMouseOver={() => setActiveNo(1)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 1 ? "active" : ""
          } expertDiv w-1/2 h-[65vh] bg-[url('https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D')] bg-center`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[65%] ">
            <h2>Web Developer</h2>
            {activeNo === 1 ? (
              <div>
                <h3 className="absolute right-4 text-[20px] bottom-6">
                  Bhavesh Bhanusali
                </h3>
                <h3 className="absolute right-4 text-[16px] bottom-0">
                  <CiStar className="-mb-[2px]" /> 4.9 /5
                </h3>
              </div>
            ) : null}
          </div>
        </div>
        <div
          onMouseOver={() => setActiveNo(2)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 2 ? "active" : ""
          } expertDiv relative flex flex-col gap-4 w-1/2 h-[65vh] items-start bg-[url('https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww')] bg-center`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[65%] ">
            <h2>Web Developer</h2>
            {activeNo === 2 ? (
              <div>
                <h3 className="absolute right-4 text-[20px] bottom-6">
                  Bhavesh Bhanusali
                </h3>
                <h3 className="absolute right-4 text-[16px] bottom-0">
                  <CiStar className="-mb-[2px]" /> 4.9 /5
                </h3>
              </div>
            ) : null}
          </div>
        </div>
        <div
          onMouseOver={() => setActiveNo(3)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 3 ? "active" : ""
          } expertDiv relative flex flex-col gap-4 w-1/2 h-[65vh] items-start bg-[url('https://images.unsplash.com/photo-1540569014015-19a7be504e3a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[65%] ">
            <h2>Web Developer</h2>
            {activeNo === 3 ? (
              <div>
                <h3 className="absolute right-4 text-[20px] bottom-6">
                  Bhavesh Bhanusali
                </h3>
                <h3 className="absolute right-4 text-[16px] bottom-0">
                  <CiStar className="-mb-[2px]" /> 4.9 /5
                </h3>
              </div>
            ) : null}
          </div>
        </div>
        <div
          onMouseOver={() => setActiveNo(4)}
          onMouseLeave={() => setActiveNo(0)}
          className={`${
            activeNo === 4 ? "active" : ""
          } expertDiv relative flex flex-col gap-4 w-1/2 h-[65vh] items-start bg-[url('https://images.unsplash.com/photo-1599032909736-0155c1d43a6c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D')] bg-center bg-cover`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[65%] ">
            <h2>Web Developer</h2>
            {activeNo === 4 ? (
              <div>
                <h3 className="absolute right-4 text-[20px] bottom-6">
                  Bhavesh Bhanusali
                </h3>
                <h3 className="absolute right-4 text-[16px] bottom-0">
                  <CiStar className="-mb-[2px]" /> 4.9 /5
                </h3>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export const AboutUX = () => {
  return (
    <div className="relative w-full min-h-auto py-[4vw] ">
      <div className="flex w-full h-auto py-18 px-32 gap-8 items-center sm:flex-wrap md:flex-nowrap">
        <h3 className="relative w-1/3 text-gray-700 font-extrabold text-[3.2vw]">
          Helping millions grow better.
        </h3>
        <div className="aboutMsg mt-24 w-1/3 h-[25vw] bg-[url('https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3VyJTIwbWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover z-20 "></div>
        <div className="w-1/3 h-auto flex flex-col  ">
          <h3 className="relative w-full text-gray-700 font-bold text-[2vw] text-center ">
            Our mission
          </h3>
          <p className="relative  w-full text-gray-700 font-normal text-justify text-[1.25vw]">
            At UltraCreation, our mission is to transcend conventional
            boundaries and empower businesses with cutting-edge technological
            solutions. We are dedicated to being the catalyst for our clients'
            digital transformation, facilitating seamless connectivity, and
            maximizing their potential in the ever-evolving digital landscape.
          </p>
          <div className="flex flex-row items-center ml-20 justify-end gap-[5px] text-base text-gray-400">
            <div className="relative font-medium text-[1.25vw] underline">
              Visit for more
            </div>
            <GrFormNextLink className="relative w-6 h-6 overflow-hidden shrink-0 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Story = () => {
  return (
    <>
      <div className="relative overflow-hidden bg-[#f5f5f5] flex flex-row justify-between pl-32 w-full items-start flex-wrap">
        <div className="flex flex-col mt-24 gap-6 w-2/5 items-start">
          <div className="text-[3.6vw] font-extrabold  mb-0">
            Think creative,
            <br />
            Do effective
          </div>
          <div className="text-[1.25vw] text-justify w-full">
            UltraCreation, setting new standards in the digital landscape. As
            their journey unfolded, challenges were met with expertise, and each
            project became a testament to the relentless pursuit of excellence.
          </div>
          <div className="text-[1.5vw] font-bold">Read the full story</div>
        </div>
        <div className="relative flex flex-row pt-10 w-1/2 items-start">
          <div className="w-2/3 h-full bg-[#ffbbbb] absolute top-0 left-[15vw]" />
          <img
            src="https://file.rendit.io/n/f6PZQtoglij80koDqTim.png"
            alt="Frame11"
            className="relative mb-10 w-[25vw]"
          />
        </div>
      </div>
    </>
  );
};
export const Testimonial = () => {
  return (
    <div className="w-full h-full px-1">
      <div className="mt-[5vw] relative rounded-t-xl rounded-b-none w-full h-[680px] overflow-hidden flex flex-col items-center justify-start  box-border bg-[url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-[top] text-[36px] text-white ">
        <div className="w-full h-full backdrop-brightness-[60%] py-14 px-6 rounded-t-xl rounded-b-none overflow-hidden flex flex-col items-center justify-start  box-border">
          <div className="flex flex-col items-center -mt-8 h-40 justify-start gap-6">
            <div className="relative font-semibold">Testimonials</div>
            <div className="rounded-xl w-full h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center py-6 px-6 box-border text-base bg-[#F06292] ">
              <div>See all testimonials</div>
              <GrFormNextLink className="ml-2 mt-1" />
            </div>
          </div>
          <div className="relative w-full h-full flex flex-row items-center justify-between gap-8">
            <div className="absolute w-full h-full flex flex-row items-center justify-center overflow-hidden">
              <div className="relative w-1/2  h-[500px] rounded-xl overflow-hidden flex flex-col items-start justify-start gap-6 py-8 px-6 box-border">
                <div className="relative w-full h-[65%]  flex flex-row items-start justify-start gap-8">
                  <div className="relative w-1/2 h-full bg-white text-black flex flex-col items-start justify-start rounded-md">
                    <div className="relative w-full h-[calc(34%+10px)]  flex flex-row items-start justify-start gap-4 overflow-hidden px-4 py-1 border-b border-black border-solid">
                      <img
                        className="w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div className="relative text-[28px] font-normal py-3">
                        John Doe
                      </div>
                    </div>
                    <div className="relative w-full h-[60%] text-[14px] items-start justify-start overflow-hidden px-4 py-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium nam alias blanditiis. Saepe aperiam voluptatum
                      fugiat facere voluptatibus quaerat.
                    </div>
                  </div>
                  <div className="relative w-1/2 h-full bg-[#D9D9D9] text-black flex flex-col items-start justify-start rounded-md">
                    <div className="relative w-full h-[calc(34%+10px)]  flex flex-row items-start justify-start gap-4 overflow-hidden px-4 py-1 border-b border-black border-solid">
                      <img
                        className="w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div className="relative text-[28px] font-normal py-3">
                        John Doe
                      </div>
                    </div>
                    <div className="relative w-full h-[60%] text-[14px] items-start justify-start overflow-hidden px-4 py-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium nam alias blanditiis. Saepe aperiam voluptatum
                      fugiat facere voluptatibus quaerat.
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-[80%] flex flex-col items-start justify-start gap-8">
                  <div className="relative w-full h-1/2 bg-[#F5E1DA] text-black flex flex-row items-start justify-start rounded-md">
                    <div className="relative w-[40%] h-full border-r border-black border-solid flex flex-row items-start justify-start gap-4 overflow-hidden">
                      <img
                        className="w-16 h-16 rounded-full mt-3 ml-3 shrink-0"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div className="relative text-[24px] font-normal py-[12%]">
                        John Doe
                      </div>
                    </div>
                    <div className="relative w-[60%] h-full text-[14px] items-start justify-start overflow-hidden px-4 py-4 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium nam alias blanditiis. Saepe aperiam voluptatum
                      fugiat facere voluptatibus quaerat.
                    </div>
                  </div>
                  <div className="relative w-full h-1/2 bg-[#D9D9D9] text-black flex flex-row items-start justify-start rounded-md">
                    <div className="relative w-[40%] h-full border-r border-black border-solid flex flex-row items-start justify-start gap-4 overflow-hidden">
                      <img
                        className="w-16 h-16 rounded-full mt-3 ml-3 shrink-0"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div className="relative text-[24px] font-normal py-[12%]">
                        John Doe
                      </div>
                    </div>
                    <div className="relative w-[60%] h-full text-[14px] items-start justify-start overflow-hidden px-4 py-4 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium nam alias blanditiis. Saepe aperiam voluptatum
                      fugiat facere voluptatibus quaerat.
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative w-1/2  h-[500px] rounded-xl overflow-hidden flex flex-col items-start justify-start gap-6 py-8 px-6 box-border">
                <div className="relative w-full h-[65%]  flex flex-row items-start justify-start gap-8">
                  <div className="relative w-1/2 h-full bg-white text-black flex flex-col items-start justify-start rounded-md">
                    <div className="relative w-full h-[calc(34%+10px)]  flex flex-row items-start justify-start gap-4 overflow-hidden px-4 py-1 border-b border-black border-solid">
                      <img
                        className="w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div className="relative text-[28px] font-normal py-3">
                        John Doe
                      </div>
                    </div>
                    <div className="relative w-full h-[60%] text-[14px] items-start justify-start overflow-hidden px-4 py-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium nam alias blanditiis. Saepe aperiam voluptatum
                      fugiat facere voluptatibus quaerat.
                    </div>
                  </div>
                  <div className="relative w-1/2 h-full bg-[#D9D9D9] text-black flex flex-col items-start justify-start rounded-md">
                    <div className="relative w-full h-[calc(34%+10px)]  flex flex-row items-start justify-start gap-4 overflow-hidden px-4 py-1 border-b border-black border-solid">
                      <img
                        className="w-14 h-14 rounded-full"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div className="relative text-[28px] font-normal py-3">
                        John Doe
                      </div>
                    </div>
                    <div className="relative w-full h-[60%] text-[14px] items-start justify-start overflow-hidden px-4 py-2 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium nam alias blanditiis. Saepe aperiam voluptatum
                      fugiat facere voluptatibus quaerat.
                    </div>
                  </div>
                </div>
                <div className="relative w-full h-[80%] flex flex-col items-start justify-start gap-8">
                  <div className="relative w-full h-1/2 bg-[#F5E1DA] text-black flex flex-row items-start justify-start rounded-md">
                    <div className="relative w-[40%] h-full border-r border-black border-solid flex flex-row items-start justify-start gap-4 overflow-hidden">
                      <img
                        className="w-16 h-16 rounded-full mt-3 ml-3 shrink-0"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div className="relative text-[24px] font-normal py-[12%]">
                        John Doe
                      </div>
                    </div>
                    <div className="relative w-[60%] h-full text-[14px] items-start justify-start overflow-hidden px-4 py-4 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium nam alias blanditiis. Saepe aperiam voluptatum
                      fugiat facere voluptatibus quaerat.
                    </div>
                  </div>
                  <div className="relative w-full h-1/2 bg-[#D9D9D9] text-black flex flex-row items-start justify-start rounded-md">
                    <div className="relative w-[40%] h-full border-r border-black border-solid flex flex-row items-start justify-start gap-4 overflow-hidden">
                      <img
                        className="w-16 h-16 rounded-full mt-3 ml-3 shrink-0"
                        src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                        alt=""
                      />
                      <div className="relative text-[24px] font-normal py-[12%]">
                        John Doe
                      </div>
                    </div>
                    <div className="relative w-[60%] h-full text-[14px] items-start justify-start overflow-hidden px-4 py-4 text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Accusantium nam alias blanditiis. Saepe aperiam voluptatum
                      fugiat facere voluptatibus quaerat.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Blogs = () => {
  return (
    <div className="absolute top-[4450px] flex flex-col gap-16 w-full items-start">
      <div
        id="Line2"
        className="border-solid w-full h-0 border-t-0 border-black/70"
      />
      <div className="relative flex flex-row justify-end w-full items-start pt-16 px-20">
        <div className="w-full h-[651px] bg-[#0b3846] absolute top-0 left-0 flex flex-row justify-between items-start pt-12 pl-12 pr-20">
          <div className="flex flex-row mt-12 gap-12 w-3/5 items-start">
            <img
              src="https://file.rendit.io/n/3aqu3HTEbAu8CzxemORT.png"
              alt="Frame5"
            />
            <div className="flex flex-col mt-2 gap-8 w-1/2 font-['Montserrat'] items-start">
              <div className="text-5xl font-bold text-white ml-1 w-full">
                Lorem ipsum dolor sit amet consectetur.
              </div>
              <div className="text-[15px] text-justify font-extralight text-white w-full font-['Montserrat']">
                Lorem ipsum dolor sit amet consectetur. Maecenas imperdiet amet
                ultricies orci vestibulum nullam tellus ullamcorper. Eget donec
                consectetur amet potenti magna erat. Sit sed ipsum libero sem
                dolor risus orci non...
                <span className="text-xs font-light text-white/80">
                  read more
                </span>
              </div>
            </div>
          </div>
          <div className=" right-24 flex flex-col gap-4 w-1/4 font-['Montserrat'] items-start">
            <div className="text-right text-[40px] shrink-0 w-full font-bold text-white">
              From our blog
            </div>
            <div className="flex flex-row ml-56 gap-1 w-3/5 items-start">
              <div className="font-medium text-white/80 ">see more</div>
              <img
                src="https://file.rendit.io/n/Eyml8Mtxt0BOAgUerx6m.svg"
                alt="Basilarrowrightoutline"
                className="w-6"
              />
            </div>
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/uWIMmUHfgiT0Prk9JCwO.png"
          alt="Frame6"
          className="w-[830px] h-[494px] absolute top-64 left-64 border-0"
        />
        <div
          id="Line3"
          className="border-solid border-r border-white w-px h-48 absolute top-24 left-[407px]"
        />
        <div className="bg-[#f06292] relative flex flex-row justify-end gap-5 w-2/5 items-start mt-[382px] mb-16 pt-6 px-6">
          <div
            id="Line4"
            className="border-solid border-r border-white w-px h-48 mt-2 mb-6"
          />
          <div className="flex flex-col mt-6 gap-4 w-5/6 font-['Montserrat'] items-start">
            <div className="text-5xl font-semibold text-white  w-full">
              Lorem ipsum dolor sit amet consectetur.
            </div>
            <div className="text-[14px] text-justify text-white w-full font-['Montserrat']">
              Lorem ipsum dolor sit amet consectetur. Maecenas imperdiet amet
              ultricies orci vestibulum nullam tellus ullamcorper. Eget donec
              consectetur amet potenti magna erat. Sit sed ipsum libero sem
              dolor risus orci non...{" "}
              <span className="text-xs font-light text-white/80">
                read more
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Try = () => {
  return (
    <div
      id="LandingPageRoot"
      className="bg-white flex flex-col justify-between pt-[1526px] w-full h-[5329px] font-['Montserrat'] items-start"
    >
      <div className="flex flex-col gap-16 w-full items-start mx-0">
        <div
          id="Line"
          className="border-solid ml-px w-full h-0 border-t-0 border-black/70"
        />
        <div className="shadow-[0px_2px_10px_0px_rgba(0,_0,_0,_0.15)] bg-[#f5e1da] flex flex-row justify-between w-full items-start mb-1 ml-px pt-20 px-40">
          <div className="text-6xl font-semibold mt-32 w-1/4">
            Meet our experts.
          </div>
          <div className="flex flex-row mb-20 gap-5 w-2/3 items-start">
            <img
              src="https://file.rendit.io/n/bAE1mgXEBHROxG3Lrgcu.png"
              alt="Frame1"
            />
            <img
              src="https://file.rendit.io/n/Ny0jLS85Yhvtdsp0P4Wz.png"
              alt="Frame2"
            />
            <img
              src="https://file.rendit.io/n/CjFIOlTlIKhtswmEjYBA.png"
              alt="Frame3"
            />
          </div>
        </div>
        <div
          id="Line1"
          className="border-solid w-full h-0 border-t-0 border-black/70"
        />
      </div>
      <div className="flex flex-col ml-0 gap-[147px] w-full items-start">
        <div className="flex flex-col mb-px gap-16 w-full items-start">
          <div
            id="Line2"
            className="border-solid w-full h-0 border-t-0 border-black/70"
          />
          <div className="relative flex flex-row justify-end ml-1 w-full items-start pt-16 px-20">
            <div className="w-full h-[651px] bg-[#0b3846] absolute top-0 left-0 flex flex-row justify-between items-start pt-12 pl-12 pr-20">
              <div className="flex flex-row mt-12 gap-12 w-3/5 items-start">
                <img
                  src="https://file.rendit.io/n/3aqu3HTEbAu8CzxemORT.png"
                  alt="Frame5"
                />
                <div className="flex flex-col mt-2 gap-6 w-1/2 font-['Montserrat'] items-start">
                  <div className="text-2xl font-semibold text-white ml-1 w-full">
                    Lorem ipsum dolor sit amet consectetur.
                  </div>
                  <div className="text-sm text-white w-full font-['Montserrat']">
                    Lorem ipsum dolor sit amet consectetur. Maecenas imperdiet
                    amet ultricies orci vestibulum nullam tellus ullamcorper.
                    Eget donec consectetur amet potenti magna erat. Sit sed
                    ipsum libero sem dolor risus orci non...{" "}
                    <span className="text-xs font-light text-white/80">
                      read more
                    </span>
                    <div> </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4 w-1/5 font-['Montserrat'] items-start">
                <div className="text-right text-4xl font-bold text-white">
                  From our blog
                </div>
                <div className="flex flex-row ml-40 gap-1 w-2/5 items-start">
                  <div className="font-medium text-white/80 mt-px">
                    see more
                  </div>
                  <img
                    src="https://file.rendit.io/n/Eyml8Mtxt0BOAgUerx6m.svg"
                    alt="Basilarrowrightoutline"
                    className="w-6"
                  />
                </div>
              </div>
            </div>
            <img
              src="https://file.rendit.io/n/uWIMmUHfgiT0Prk9JCwO.png"
              alt="Frame6"
              className="w-[830px] h-[494px] absolute top-64 left-64 border-0"
            />
            <div
              id="Line3"
              className="border-solid border-r border-white w-px h-48 absolute top-24 left-[407px]"
            />
            <div className="bg-[#f06292] relative flex flex-row justify-end gap-5 w-2/5 items-start mt-[382px] mb-16 pt-6 px-6">
              <div
                id="Line4"
                className="border-solid border-r border-white w-px h-48 mt-2 mb-6"
              />
              <div className="flex flex-col mt-6 gap-4 w-5/6 font-['Montserrat'] items-start">
                <div className="text-2xl font-semibold text-white ml-1 w-full">
                  Lorem ipsum dolor sit amet consectetur.
                </div>
                <div className="text-sm text-white w-full font-['Montserrat']">
                  Lorem ipsum dolor sit amet consectetur. Maecenas imperdiet
                  amet ultricies orci vestibulum nullam tellus ullamcorper. Eget
                  donec consectetur amet potenti magna erat. Sit sed ipsum
                  libero sem dolor risus orci non...{" "}
                  <span className="text-xs font-light text-white/80">
                    read more
                  </span>
                  <div> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden bg-[#f5f5f5] flex flex-row justify-between ml-1 pl-32 w-full items-start">
          <div className="flex flex-col mt-24 gap-6 w-2/5 items-start">
            <div className="text-6xl font-black mb-0">
              Think creative,
              <br />
              Do effective
            </div>
            <div className="text-xl w-full">
              Lorem ipsum dolor sit amet consectetur. Lobortis suspendisse
              ornare facilisis morbi. Tempor donec non pretium eleifend neque.
            </div>
            <div className="text-2xl font-medium">Read the full story</div>
          </div>
          <div className="relative flex flex-row pt-10 w-1/2 items-start">
            <div className="w-2/3 h-[491px] bg-[#ffbbbb] absolute top-0 left-[204.42578125px]" />
            <img
              src="https://file.rendit.io/n/f6PZQtoglij80koDqTim.png"
              alt="Frame11"
              className="relative mb-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Landing = () => {
  const [preLoader, setPreLoder] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setPreLoder(false)
    },2500)
  },[])
  if(preLoader){
    return <PreLoader/>
  }
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceCategory />
      <TopExperts />
      <AboutUX />
      <Story />
      <Testimonial />
      <Blogs />
      <Footer />
    </>
  );
};

export default Landing;
