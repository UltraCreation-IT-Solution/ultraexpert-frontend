import React from "react";
import { useState } from "react";
import { MdStar } from "react-icons/md";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-router-dom";
import { ProjectsCarousel } from "../Utils/HelperComponents";
import Navbar from "../Boundary/Navbar";


export const ProfileCardHorizontal = ({width}) => {
  return (
    <div className={`w-[${width + "%"}] p-[1vw] bg-[#EDEDED] flex justify-between items-center rounded-lg`}>
      <div className="flex gap-3 items-center justify-center">
        <img
          className="h-[5vw] w-[5vw] rounded-full shrink-0 object-cover"
          src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <div className="text-[3.8vw] md:text-[1.8vw] font-semibold mb-4">
            Antony Phobes
          </div>
          <div className="text-[2vw] md:text-[1vw]">UI/UX Designer</div>
        </div>
      </div>

      <div>
        <div className="flex gap-1 mb-4 justify-end items-center">
          <div>
            <MdStar color="#FF5E18" />
          </div>
          <div>4.9/5</div>
        </div>
        <button className="px-[2vw] py-[0.5vw] text-white bg-black rounded-md text-[2.5vw] md:text-[1.2vw] font-semibold">
          Follow
        </button>
      </div>
    </div>
  );
};

export const MyProjects = () => {
  return (
    <div>
      <div className="text-[1.8vw] font-bold font-montserrat">My projects</div>
      <ProjectsCarousel />
    </div>
  );
};

export const Holder = ({ header, des }) => {
  const [hide, setHide] = useState(true);
  return (
    <div className="my-[3vw]">
          <div
            className="flex items-center justify-between text-[1.6vw] cursor-pointer font-montserrat font-semibold"
            onClick={() => (hide ? setHide(false) : setHide(true))}
          >
            <div>{header}</div>
            <div>{hide ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}</div>
          </div>
          {!hide && des==="" && <div className="py-[1vw] font-montserrat ">No information provided by the expert!</div>}
          {!hide && des!=="" && (
            <div className="py-[1vw] font-montserrat ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi natus quam nisi culpa sequi eum iure iusto, illum, modi mollitia corrupti recusandae!
            </div>
          )}
      </div>
  );
};

export const AboutExpert = () => {
  return (
    <div className="w-[100%] md:w-[48%] md:h-[100vh] scrollbar">
      <ProfileCardHorizontal width={100}/>
      <p className="text-[2.7vw] md:text-[1.2vw] my-[2vw] text-justify font-montserrat">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        expedita temporibus explicabo asperiores debitis sint aut adipisci
        aliquid quae unde quas aut adipisci aliquid quae unde qua adipisicing
        elit.
      </p>
      <MyProjects />

      {/* Accordian starts from here */}
      <div className="mt-[1vw] px-[1vw]  bg-[#F2F2F2] rounded-lg">
        <Holder header={"Education"} des={""}/>
        <Holder header={"Acheivements"} des={"All the Acheivements will be displayed here"}/>
        <Holder header={"Skillset"} des={"All the Skillset will be displayed here"}/>
        <Holder header={"Contact with me!"} des={"All the Contacts will be displayed here"}/> 
      </div>
      
    </div>
  );
};

export const ExpertServices = () => {

  // const [Array, setArray] = useState([]);
  // if(Array.length===0){
  //   return <div className="text-[2.2vw] md:text-[1.4vw] font-semibold">No services provided by the expert yet!</div>
  // }
  return (
    <div>
      {[...Array(15)].map((temp) => (
        <div className="flex items-center justify-between gap-3 p-[1.2vw] my-[1.5vw] bg-white rounded-md">
          <h1 className="text-[2.2vw] md:text-[1.4vw] font-semibold">
            Web & App development
          </h1>
          <div className="">
            <Link to="service">
              <button className="bg-white px-[1.5vw] py-[0.4vw] text-[2vw] md:text-[1.3vw] text-black font-semibold border rounded-md mx-1">
                View
              </button>
            </Link>
            <Link to="booking">
              <button className="bg-black px-[1.5vw] py-[0.5vw] text-[2vw] md:text-[1.2vw] text-white font-semibold border rounded-md mx-1">
                Book
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export const RatingCard = () => {
  return (
    <div className="my-10 pb-[1vw] border-b-[1px] border-black border-solid">
      <div className="flex gap-5">
        <img
          className="h-[3vw] w-[3vw] shrink-0 object-cover rounded-full"
          src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <div className="text-[1.4vw] font-semibold">Antony Squash</div>
          <div className="flex items-center mt-4 gap-10">
            <div className="flex gap-1 items-center text-[1.2vw]">
              <div>
                <MdStar color="#FF5E18" />
              </div>
              <div>4.9/5</div>
            </div>
            <div>1 month ago</div>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            beatae omnis, enim nesciunt vel id tempore veritatis ut ad, ipsum
            reprehenderit facilis sapiente ea voluptatibus, inventore eum non
            aspernatur labore quaerat similique assumenda at placeat. At
            voluptas dolorum quibusdam harum!
          </p>
        </div>
      </div>
    </div>
  );
};

export const ExpertRatings = () => {
  return (
    <div className="px-5">
      {[...Array(10)].map((temp, idx) => (
        <RatingCard />
      ))}
      <button className="px-8 py-2 text-[15px] text-black font-semibold border-2 rounded-md mx-1">
        See more
      </button>
    </div>
  );
};

export const ExpertInfo = () => {
  const [services, setServices] = useState(true);
  const [ratings, setRatings] = useState(false);

  const MakeServicesTrue = () => {
    setServices(true);
    setRatings(false);
  };
  const MakeRatingsTrue = () => {
    setServices(false);
    setRatings(true);
  };

  return (
    <div className="md:w-[55%] md:h-[100vh] bg-[#F2F2F2] p-[2vw]">
      <div className="w-[100%] flex justify-between items-center">
        <div
          className={`cursor-pointer text-[1.7vw] ${
            services ? "transition-all duration-500 text-[3.7vw] font-bold" : null
          }`}
          onClick={() => MakeServicesTrue()}
        >
          Services
        </div>
        <div
          className={`cursor-pointer text-[1.7vw] ${
            ratings ? "transition-all duration-500 text-[3.7vw] font-bold" : null
          }`}
          onClick={() => MakeRatingsTrue()}
        >
          Ratings
        </div>
      </div>
      <div className="h-[85%] scrollbar">
        {services && <ExpertServices />}
        {ratings && <ExpertRatings />}
        {/* Accordian starts from here */}
        <div className="mt-[1vw] px-[1vw]  bg-white rounded-lg">
          <Holder header={"Work Experience"} des={"Educational details of expert will be displayed here"}/>
          <Holder header={"Certifications"} des={"All the Acheivements will be displayed here"}/>
          <Holder header={"Meetings History"} des={"All the Skillset will be displayed here"}/>
        </div>
      </div>
    </div>
  );
};


//This is the main expert profile component.
const ExpertProfile = () => {
  return (
    <div className="">
      <Navbar />
      <div className=" md:flex gap-6 mx-2 md:px-[2.5vw] py-[2vw] mt-[80px]">
        <AboutExpert />
        <ExpertInfo />
      </div>
    </div>
  );
};

export default ExpertProfile;
