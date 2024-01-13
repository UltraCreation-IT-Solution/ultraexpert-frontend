import React, { useState } from "react";
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

export const ServiceCategory1 = () => {
  return (
    <div className="relative flex flex-row gap-4 overflow-hidden mt-[3vh] px-36 py-[10vh] w-full h-[100vh] ">
      <div className="w-2/4 flex flex-col gap-4 h-full ">
        <div className="w-full h-[40%]  flex flex-row gap-4">
          <div className="w-1/2 h-full  flex flex-col overflow-hidden">
            <img src={browseicon} className="w-2/5 h-2/5 object-fill" />
            <h1 className="shrink-0">Browse services by category</h1>
          </div>
          <div className="w-1/2 h-full  overflow-hidden">
            <img src={photography} className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="w-full h-[40%]  flex flex-row gap-4">
          <div className="w-1/4 h-full  overflow-hidden">
            <img src={ai} className="w-full h-full object-fill" />
          </div>
          <div className="w-3/4 h-full  overflow-hidden">
            <img src={design} className="w-full h-full object-fill" />
          </div>
        </div>
        <div className="w-full h-[20%]  flex flex-row gap-4">
          <div className="w-1/2 h-full  py-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque,
            harum
          </div>
          <div className="w-1/2 h-full  overflow-hidden">
            <img src={seo} className="w-full h-full object-fill" />
          </div>
        </div>
      </div>
      <div className="w-1/4 h-full  flex flex-col gap-4">
        <div className="w-full h-2/5  overflow-hidden">
          <img src={businesss} className="w-full h-full object-fill" />
        </div>
        <div className="w-full h-2/5  overflow-hidden">
          <img src={videoAnim} className="w-full h-full object-fill" />
        </div>
        <div className="w-full h-1/5  overflow-hidden">
          <img src={Writting} className="w-full h-full object-fill" />
        </div>
      </div>
      <div className="w-1/4 h-full  flex flex-col gap-4">
        <div className="w-full h-1/5  overflow-hidden pl-[9vw]">
          <Link to="/services" className="decoration-transparent">
            <div className=" py-2 px-4 bg-black w-36 items-center text-center  text-white font-semibold rounded-md flex ">
              See More
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

export const ServiceCategory = () => {
  return (
    <div className="overflow-hidden mt-[3vh]">
      <div className="ml-[160px] w-[1100px] mb-[-40px] flex flex-row items-end justify-between">
        <h3 className="relative font-semibold text-[28px]">
          Browse service by Category
        </h3>
        <div className="flex flex-row items-center justify-center gap-[5px] mb-[2.5%] text-base text-gray-400">
          <div className="relative font-medium text-[20px]">
            see all services
          </div>
          <GrFormNextLink className="relative w-6 h-6 overflow-hidden shrink-0 object-cover" />
        </div>
      </div>
      <div className="flex ml-[160px] gap-4">
        <div className="relative  mt-[58px] w-[540px] h-[548px] flex flex-row gap-4 text-5xl">
          <div className="flex flex-col gap-4">
            <div className="relative w-[262px] h-[262px] overflow-hidden  bg-cover bg-no-repeat bg-[top] bg-[url('https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww')] rounded-md ">
              <h3 className="absolute text-white backdrop-brightness-[50%] pt-[50%] w-full h-[262px] mt-[0px] text-center">
                Development & IT
              </h3>
            </div>
            <div className="relative w-[262px] h-[262px] overflow-hidden shrink-0 bg-[url('https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3JhcGhpYyUyMGFuZCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-no-repeat bg-[top] rounded-md">
              <h3 className="absolute text-white backdrop-brightness-[50%] pt-[50%] w-full h-[262px] mt-[0px] text-center">
                Graphics & Design
              </h3>
            </div>
          </div>
          <div>
            <div className="relative w-[262px] h-[540px] overflow-hidden shrink-0 bg-[url('https://images.unsplash.com/photo-1575089976121-8ed7b2a54265?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRldmVsb3BlcnxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-no-repeat bg-[top] rounded-md">
              <h3 className="absolute text-white backdrop-brightness-[50%] pt-[100%] w-full h-full mt-[0px] text-center">
                Business
              </h3>
            </div>
          </div>
        </div>
        <div className="relative gap-4  mt-[58px] w-[540px] h-[548px] flex flex-col text-5xl">
          <div className="flex flex-row gap-4">
            <div className="relative w-[262px] h-[262px] overflow-hidden shrink-0 bg-[url('https://plus.unsplash.com/premium_photo-1661281211902-b43da36ba1f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGFuZCUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-no-repeat bg-[top] rounded-md">
              <h3 className="absolute text-white backdrop-brightness-[50%] pt-[50%] w-full h-[262px] mt-[0px] text-center">
                Marketing
              </h3>
            </div>
            <div className="relative w-[262px] h-[262px] overflow-hidden shrink-0 bg-[url('https://plus.unsplash.com/premium_photo-1664301808897-96e1732dfafe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWklMjBzZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-no-repeat bg-[top] rounded-md">
              <h3 className="absolute text-white backdrop-brightness-[50%] pt-[50%] w-full h-[262px] mt-[0px] text-center">
                AI Services
              </h3>
            </div>
          </div>
          <div>
            <div className="relative w-[540px] h-[262px] overflow-hidden shrink-0 bg-[url('https://images.unsplash.com/photo-1589901507248-a8fb564e3641?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d3JpdHRpbmclMjBhbmQlMjB0cmFuc2xhdGlvbnN8ZW58MHx8MHx8fDA%3D')] bg-cover bg-no-repeat bg-[top] rounded-md">
              <h3 className="absolute text-white backdrop-brightness-[50%] pt-[30%] w-full h-full mt-[0px] text-center">
                Writting & Translation
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        id="Line1"
        className="border-solid w-full mt-12 border-t border-black/70"
      />
    </div>
  );
};

export const TopExperts1 = () => {
  const [activeNo, setActiveNo] = useState(0);
  return (
    <div className="absolute top-[1480px] flex flex-col gap-16 w-full items-start mx-0">
      <div
        id="Line"
        className="border-solid w-full h-0 border-t-0 border-black/70"
      />
      <div className="shadow-[0px_2px_10px_0px_rgba(0,_0,_0,_0.15)] bg-[#f5e1da] flex flex-row justify-between w-full items-start mb-1  pt-20 px-40">
        <div className="text-[64px] font-extrabold mt-32 w-[20%]">
          Meet our experts.
        </div>
        <div className="flex flex-row mb-20 gap-5 w-2/3 items-start">
          <div
            onMouseOver={() => setActiveNo(0)}
            onMouseLeave={() => setActiveNo(0)}
            className={`${
              activeNo === 0 ? "active" : ""
            } expertDiv relative flex flex-col gap-4 w-1/2 h-96 items-start bg-[url('https://images.unsplash.com/photo-1618641986557-1ecd230959aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D')] bg-center`}
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
            } expertDiv w-1/2 h-96 bg-[url('https://images.unsplash.com/photo-1615109398623-88346a601842?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D')] bg-center`}
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
            } expertDiv relative flex flex-col gap-4 w-1/2 h-96 items-start bg-[url('https://plus.unsplash.com/premium_photo-1677553953986-a78e31a192f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fHww')] bg-center`}
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

          {console.log(activeNo)}
        </div>
      </div>
      <div
        id="Line1"
        className="border-solid w-full h-0 border-t border-black/70"
      />
    </div>
  );
};
export const AboutUs = () => {
  return (
    <div className="absolute top-[2040px] w-full h-[150vh]  pt-24">
      <div className="absolute   w-full h-[480px] flex flex-row items-center justify-between">
        <div className="absolute left-[160px] top-1/4">
          <h3 className="relative w-[60%] text-gray-700 font-bold text-[48px]">
            Helping millions grow better.
          </h3>
        </div>
        <div className="aboutintro absolute top-[0px] right-[120px] bg-[url('https://th.bing.com/th/id/OIP.6e2phQdWp54u2-ropKJNyAHaE2?w=228&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7')] bg-cover bg-no-repeat w-[640px] h-[440px]"></div>
      </div>
      <div className="absolute top-[540px] left-[160px] w-full h-[40%] flex flex-row items-center gap-24 overflow-hidden">
        <div className="aboutMsg mt-24 w-[30%] bg-[url('https://images.unsplash.com/photo-1521316730702-829a8e30dfd0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b3VyJTIwbWlzc2lvbnxlbnwwfHwwfHx8MA%3D%3D')] bg-center bg-cover h-[65%] "></div>
        <div className="w-[65%] h-[110%] flex flex-col  ">
          <h3 className="relative w-[65%] text-gray-700 font-bold text-[48px] text-center ">
            Our mission
          </h3>
          <p className="relative -mt-2 w-2/3 text-gray-700 font-normal text-justify text-[20px]">
            At UltraCreation, our mission is to transcend conventional
            boundaries and empower businesses with cutting-edge technological
            solutions. We are dedicated to being the catalyst for our clients'
            digital transformation, facilitating seamless connectivity, and
            maximizing their potential in the ever-evolving digital landscape.
            We have an unwavering commitment to excellence in every aspect of
            our work.
            <br />
            <br /> From conceptualization to deployment, we strive for
            perfection, ensuring our clients receive the highest quality
            products and services. Building trust is paramount. We maintain
            transparency in our processes, fostering open communication and
            ensuring our clients are well-informed at every stage of their
            project.
          </p>
          <div className="flex flex-row items-center ml-20 justify-center gap-[5px] text-base text-gray-400">
            <div className="relative font-medium text-[20px]">
              see all our experts
            </div>
            <GrFormNextLink className="relative w-6 h-6 overflow-hidden shrink-0 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const Testimonial = () => {
  return (
    <div className="absolute top-[3720px] left-[calc(50%-718px)] rounded-t-xl rounded-b-none w-[1435px] h-[680px] overflow-hidden flex flex-col items-center justify-start  box-border bg-[url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-[top] text-[36px] text-white ">
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
  );
};
export const Story = () => {
  return (
    <>
      <div className="absolute top-[3120px] overflow-hidden bg-[#f5f5f5] flex flex-row justify-between ml-1 pl-32 w-full items-start">
        <div className="flex flex-col mt-24 gap-6 w-2/5 items-start">
          <div className="text-[60px] font-extrabold  mb-0">
            Think creative,
            <br />
            Do effective
          </div>
          <div className="text-[20px] text-justify w-full">
            UltraCreation, setting new standards in the digital landscape. As
            their journey unfolded, challenges were met with expertise, and each
            project became a testament to the relentless pursuit of excellence.
          </div>
          <div className="text-5xl font-bold">Read the full story</div>
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
    </>
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
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServiceCategory1 />
      {/* <ServiceCategory /> */}
      <TopExperts1 />
      <AboutUs />
      <Story />
      <Testimonial />
      <Blogs />
      <Footer />
    </>
  );
};

export default Landing;
