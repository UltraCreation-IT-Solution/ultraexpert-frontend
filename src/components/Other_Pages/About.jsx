import React,{useState} from "react";
import { Testimonial } from "../Landing/Landing";
import { PiCheckCircleLight } from "react-icons/pi";
import about_us_1 from "../../assets/images/about_us _1.png";
import about_us_mission_2 from "../../assets/images/about_us_mission_2.png"
import about_us_vision_3 from "../../assets/images/about_us_vision_3.png";
import axios from "../../axios";
const About = () => {
  const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
  const [writeTestimonial, setWriteTestimonial] = useState("");
  console.log(writeTestimonial)
  const handleTestimonialSubmit = async () => {
    try {
      const response= await axios.post("/testimonial/",{
        "action":1,
    "content_json":`${writeTestimonial}`
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      })
      const data = response.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      console.log(response.data)
      setWriteTestimonial("");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="mt-[70px]">
      <div className="text-center bg-[#FBFBFB] py-16 sm:py-24 px-5 ">
        <div className="text-3xl md:text-4xl font-bold text-[#2A2A2A]">
          About Us
        </div>
        <div className="mt-3 mx-auto text-sm sm:text-base text-balance md:w-[60%] ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia itaque
          illum praesentium tempore facilis repellendus voluptatem eius
          blanditiis autem quibusdam.
        </div>
      </div>

      <div className=" flex-wrap-reverse sm:flex-nowrap flex items-center justify-center sm:justify-between mx-[7vw] md:mx-[10vw] mt-10">
        <div>
          <div className="text-xl sm:text-2xl font-bold ">What do we do?</div>
          <div className="text-sm sm:text-[1.7vw] md:text-[1.5vw] lg:text-[1.1vw] mt-3 text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            numquam. Suscipit, ipsum velit. Nostrum repudiandae veniam qui
            alias, commodi voluptatibus doloremque hic consequuntur aperiam rem
            illo totam quisquam asperiores perspiciatis recusandae a. Quidem eos
            sit libero aperiam repellendus, repudiandae sapiente incidunt
            eligendi, culpa quae laudantium officia iste saepe soluta unde.
          </div>
        </div>
        <img
          src={about_us_1}
          alt=""
          className="h-[80vw] xs:h-[70vw] xs:w-[100vw] sm:h-[35vw] sm:w-[45vw] shrink-0 object-cover "
        />
      </div>
      <div className="flex-wrap sm:flex-nowrap flex items-center justify-center sm:justify-between px-[7vw] md:px-[10vw] py-5 my-10 bg-blue-50">
      <img
          src={about_us_mission_2}
          alt=""
          className="h-[80vw] xs:h-[70vw] xs:w-[80vw] sm:h-[30vw] sm:w-[35vw]  shrink-0 "
        />
        <div>
          <div className="text-base sm:text-lg font-bold text-sky-800 ">OUR MISSION</div>
          <div className="text-xl sm:text-2xl font-bold ">What do we do?</div>
          <div className="text-sm sm:text-[1.7vw] md:text-[1.5vw] lg:text-[1.1vw] mt-3 text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            numquam. Suscipit, ipsum velit. Nostrum repudiandae veniam qui
            alias, commodi voluptatibus doloremque hic consequuntur aperiam rem
            illo totam quisquam asperiores perspiciatis recusandae a. Quidem eos
            sit libero aperiam repellendus, repudiandae sapiente incidunt
            eligendi, culpa quae laudantium officia iste saepe soluta unde.
          </div>
        </div>
      </div>
      <div className="flex-wrap-reverse sm:flex-nowrap flex items-center justify-center sm:justify-between mx-[7vw] md:mx-[10vw]">
        <div>
          <div className="text-base sm:text-lg font-bold text-sky-800 ">OUR VISION</div>
          <div className="text-xl sm:text-2xl font-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, eveniet?</div>
          <div className="text-sm sm:text-[1.7vw] md:text-[1.5vw] lg:text-[1.1vw] mt-3 text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
            numquam. Suscipit, ipsum velit. Nostrum repudiandae veniam qui
            alias, commodi voluptatibus doloremque hic consequuntur aperiam rem
            illo totam quisquam asperiores perspiciatis recusandae a. Quidem eos
            sit libero aperiam repellendus, repudiandae sapiente incidunt
            eligendi, culpa quae laudantium officia iste saepe soluta unde.
          </div>
        </div>
        <img
          src={about_us_vision_3}
          alt=""
          className="h-[80vw] xs:h-[70vw] xs:w-[100vw] sm:h-[35vw] sm:w-[45vw] shrink-0 "
        />
      </div>

      <div className="border border-solid border-slate-300 flex gap-[3vw] md:gap-0 flex-col md:flex-row items-center rounded-lg py-8 mx-[7vw] md:mx-[10vw] my-20">
        <div className="md:w-[45%] px-4 md:px-[1.5vw]">
          <div className="text-xl md:text-2xl font-bold text-center">
            Special features of our website
          </div>
          <div className="text-sm md:text-base mt-2 md:mt-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam rem
            unde iure quidem corrupti totam laboriosam dignissimos aut!
            Voluptatum, quae.
          </div>
        </div>
        <div className="md:w-[55%] px-3 md:px-[1.5vw]">
          <div className="">
            <div className="flex items-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">One-on-One Sessions</div>
                <div className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugiat perspiciatis ex minima. Laudantium, inventore.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">
                  Live mentoring by experts
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugiat perspiciatis ex minima. Laudantium, inventore.
                </div>
              </div>
            </div>
            <div className="flex item-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold textlgl">One-on-One Sessions</div>
                <div className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugiat perspiciatis ex minima. Laudantium, inventore.
                </div>
              </div>
            </div>
            <div className="flex items-start gap-4 my-4">
              <PiCheckCircleLight className="text-4xl shrink-0" />
              <div>
                <div className="font-bold text-lg">One-on-One Sessions</div>
                <div className="text-sm text-gray-500 mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  fugiat perspiciatis ex minima. Laudantium, inventore.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
      <div className="md:flex items-center justify-around gap-10 mx-[7vw] md:mx-[10vw] my-20">
        <div className="md:w-[40%] text-center md:text-left">
          <div className=" text-2xl font-bold">
            Want to add your testimonial ?
          </div>
          <div className="mt-3 text-sm text-gray-600 text-balance">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dicta
            pariatur recusandae non nisi ipsam et molestiae, ipsa quas optio a
            quibusdam necessitatibus tenetur!
          </div>
        </div>
        <div className="md:w-[60%] mt-10 md:mt-0">
          <textarea
            name=""
            id=""
            rows="10"
            value={writeTestimonial}
            onChange={(e) => setWriteTestimonial(e.target.value)}
            placeholder="Add your testimonial here"
            className="min-w-full max-w-full border border-solid border-slate-400 text-base rounded-md p-2"
          ></textarea>
          <div className="px-6 py-2 mt-3 text-white bg-[#2A2A2A] rounded-sm w-fit ml-auto cursor-pointer"
          onClick={()=>handleTestimonialSubmit()}>
            Submit
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
