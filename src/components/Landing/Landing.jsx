import React from "react";
import Marquee from "react-fast-marquee";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/images/logo.jpg";
import { GrFormNextLink } from "react-icons/gr";
import { CiStar } from "react-icons/ci";
import { topExpertsBar, landingImgRow } from "../../constant";
import { Link } from "react-router-dom";

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
    </div>
  );
};
export const TopExperts = () => {
  return (
    <div className="absolute top-[1440px] -mt-20 left-[-1px] bg-[#F5E1DA] w-full h-[480px] overflow-hidden">
      <div className="absolute top-[44px] w-[1120px] left-[160px] flex flex-row items-end justify-between">
        <h3 className="relative font-semibold text-[28px]">Top experts</h3>
        <div className="flex flex-row items-center justify-center gap-[5px] mb-[2.5%] text-base text-gray-400">
          <div className="relative font-medium text-[20px]">
            see all our experts
          </div>
          <GrFormNextLink className="relative w-6 h-6 overflow-hidden shrink-0 object-cover" />
        </div>
      </div>

      <div className="absolute top-[150px] left-[160px] rounded-3xs flex items-center justify-around gap-8 w-[1120px] h-[320px] -mt-16">
        {topExpertsBar.map((item, index) => {
          return (
            <div
              key={index}
              className="mt-28 rounded-3xl bg-white w-[320px] h-[180px]"
            >
              <div className=" flex flex-col">
                <img
                  className="absolute bg-blue-400 w-44 ml-[72px] rounded-3xl  mt-[-60px] h-32"
                  src={item.image}
                />
                <h4 className="text-center mt-20 tracking-wide font-montserrat  font-semibold text-lg">
                  {item.name}
                </h4>
                <h5 className="text-center -mt-3 tracking-wide font-montserrat text-gray-500  font-semibold text-sm">
                  {item.designation}
                </h5>
                <div className="flex flex-row items-center justify-center -ml-3 gap-1 -mt-4">
                  <CiStar className="relative w-6 h-6 overflow-hidden shrink-0 object-cover" />
                  <div className=" font-medium mt-1  text-gray-400">
                    {item.rating}/5
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export const AboutUs = () => {
  return (
    <div className="absolute top-[1840px] w-full h-[150vh]  pt-24">
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
    <div className="absolute top-[3750px] left-[calc(50%-718px)] rounded-t-xl rounded-b-none w-[1435px] h-[681px] overflow-hidden flex flex-col items-center justify-start  box-border bg-[url('https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-no-repeat bg-[top] text-[36px] text-white ">
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
const Landing = () => {
  return (
    <>
      <div className=" bg-white w-[100vw] h-[60px] overflow-hidden flex flex-row items-center justify-between py-0 px-[20px] box-border  text-[30px]">
        <div className="flex ml-[-20px]">
          <img
            src={logo}
            className="w-[100px] h-[70px] mt-2"
            alt="logo hai bhai
          "
          />
          <h2 className="ml-[-10px] mt-6 relative text-inherit font-extrabold font-inherit">
            ultraXpert
          </h2>
        </div>
        <div className="flex flex-row items-center justify-center gap-[3.5vw] text-[20px] mr-6">
          <div className="relative font-medium">Services</div>
          <div className="relative font-medium">Experts</div>
          <div className="relative font-medium">Blog</div>
          <div className="relative font-medium">Contact Us</div>
          <Link
            to={"/register"}
            className="relative font-medium no-underline text-black"
          >
            Sign Up
          </Link>
          <Link
            to={"/login"}
            className="relative font-medium no-underline text-black"
          >
            Log In
          </Link>
        </div>
      </div>
      <div className=" absolute w-[60vw] h-[67.8vh] mt-[8px] bg-gradient-to-r from-black to-transparent z-10 text-white blend">
        <h1 className="w-[340px] text-start text-[50px] font-bold mt-[20vh] ml-12 break-words">
          Think creative, Do effective
        </h1>
        <div>
          <input
            className="w-[35vw] h-[40px]  ml-12 rounded-md pl-4"
            type="text"
            placeholder="Search for services"
          />
          <FaSearch className="absolute text-black mt-[12px] ml-[-3vw] text-[20px]" />
        </div>
      </div>
      <div className="w-[100vw] h-auto overflow-hidden">
        <Marquee className="m-2" speed={60}>
          {landingImgRow.map((item, index) => (
            <img
              className="w-40 h-40 mr-[10px] rounded-2xl"
              key={index}
              src={item}
              alt="image"
            />
          ))}
        </Marquee>

        <Marquee className="m-2" speed={60} direction="right">
          {landingImgRow.map((item, index) => (
            <img
              className="w-40 h-40 mr-[10px] rounded-2xl"
              key={index}
              src={item}
              alt="image"
            />
          ))}
        </Marquee>
        <Marquee className="m-2" speed={60}>
          {landingImgRow.map((item, index) => (
            <img
              className="w-40 h-40 mr-[10px] rounded-2xl"
              key={index}
              src={item}
              alt="image"
            />
          ))}
        </Marquee>
      </div>
      <ServiceCategory />
      <TopExperts />
      <AboutUs />
      <Testimonial />
    </>
  );
};

export default Landing;
