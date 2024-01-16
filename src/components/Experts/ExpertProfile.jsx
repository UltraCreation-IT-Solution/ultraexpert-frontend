import React from "react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdStar } from "react-icons/md";
import {Link} from 'react-router-dom';

export const AboutExpert = () => {
  return (
    <div className="w-[40%] h-[100vh] bg-green-50 flex items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <img
          className=" h-[50vh]"
          src="https://images.unsplash.com/photo-1627161683077-e34782c24d81?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwd29ya2VyfGVufDB8fDB8fHww"
        />
        <div className="font-bold text-[1.3em] my-2">Antony joe</div>
        <div className="flex items-center gap-2 my-2">
          <FaLocationDot size={20} />
          <div className="text-[20px]">India</div>
        </div>
        <div className="flex my-2">
          {[...Array(5)].map((star) => (
            <MdStar size={30} />
          ))}
        </div>
        <button className="text-white text-[20px] w-[100%] bg-green-400 px-5 py-2 my-2">
          Follow
        </button>
      </div>
    </div>
  );
};

export const ExpertSummary = () => {
  return (
    <div>
      <div>
        <h1 className="text-[22px] font-semibold">About me</h1>
        <div className="my-3 text-justify text-[18px] text-gray-600">
          BE7 is a market-oriented, client-driven, and quality-focused group of
          professionals (Economist, Software Engineers, Web Developers, Graphic
          Designers, & MBAs). Our Service Areas: - E-Business (Business
          Websites, Web Applications, eCommerce Stores, Business Softwares). -
          Brand Development (Brand Concept, Identity Designs, Logo, Social Media
          Marketing, Websites, etc.) - Business Development (Business Plans,
          Marketing Plans, & Multiple Business Reports.)
        </div>
      </div>
      <div>
        <h1 className="text-[22px] font-semibold">Skills</h1>
        <div className="my-3 text-justify text-[18px] text-gray-600">
          Website Development, Keyword Research, Website Maintenance, E-Commerce
          Marketing, Logo Design, Business Cards & Stationery, Website Content,
          Business Names & Slogans, WordPress, Hosting, Help/Consultation,
          Branding, Design, Web development, Business plans, Business writing,
          HTML5, Stationery design, CSS3, JavaScript, PHP, Website design,
          Graphic design, Adobe Illustrator, jQuery, MySQL, Data analytics,
          Machine learning, Facebook ads, Google marketing
        </div>
      </div>
      <div>
        <h1 className="text-[22px] font-semibold">Education</h1>
        <div className="my-3 text-justify text-[18px] text-gray-600">
          
        </div>
      </div>
      <div>
        <h1 className="text-[22px] font-semibold">Work Experience</h1>
        <div className="my-3 text-justify text-[18px] text-gray-600">
          
        </div>
      </div>
      <div>
        <h1 className="text-[22px] font-semibold">Certifications</h1>
        <div className="my-3 text-justify text-[18px] text-gray-600">
          
        </div>
      </div>
      <div>
        <h1 className="text-[22px] font-semibold">Achievements</h1>
        <div className="my-3 text-justify text-[18px] text-gray-600">
          
        </div>
      </div>
      <div>
        <h1 className="text-[22px] font-semibold">Connect with me</h1>
        <div className="my-3 text-justify text-[18px] text-gray-600">
          
        </div>
      </div>

    </div>
  );
};

export const ExpertServices = () => {
  return (
    <>
      <h1 className="text-[40px] text-center font-extrabold">Popular Services</h1>
      <div>
        {[...Array(15)].map((temp)=> 
          <div className="flex items-center justify-between p-3">
            <h1 className="text-[20px] font-semibold">Web & App development</h1>
            <div>
              <Link to="service"><button className="bg-blue-100 px-4 py-2 text-[15px] rounded-md hover:bg-blue-200 mx-1">View</button></Link>
              <Link to="booking"><button className="bg-blue-100 px-4 py-2 text-[15px] rounded-md hover:bg-blue-200 mx-1">Book</button></Link>
            </div>
          </div>
          )}
      </div>
    </>
  )
}

export const ExpertRatings = () => {
  return (
    <>
      <h1 className="text-[40px] text-center font-extrabold">Rating & Reviews</h1>
      <div>
        <div className="flex items-center gap-2 my-2">
          <div className="text-[25px]">50 reviews</div>
          {[...Array(5)].map(()=> <MdStar size={25} />)}
        </div>
        <div>
          <pre className="text-[15px]">5 Stars                       (30)</pre>
          <pre className="text-[15px]">4 Stars                       (15)</pre>
          <pre className="text-[15px]">3 Stars                       (3)</pre>
          <pre className="text-[15px]">2 Stars                       (2)</pre>
          <pre className="text-[15px]">1 Stars                       (0)</pre>
        </div>
        <div className="flex gap-2 my-3">
          <input type="text" placeholder="Write a review" className=" text-[15px] px-2 py-2 outline-none bg-blue-50 w-[100%] rounded-md" />
          <button className="bg-blue-100 px-4 py-2 text-[15px] rounded-md hover:bg-blue-200 mx-1">Submit</button>
        </div>
        <div>
          {[...Array(15)].map((temp)=> 
            <div className="flex items-center justify-between my-10 gap-10">
              <div>
                <img className="h-24 rounded-md" src="https://images.unsplash.com/photo-1554774853-b3d587d95440?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBjYXJkc3xlbnwwfDB8MHx8fDA%3D" alt="" />
                <div className="font-semibold">Antony Joe</div>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum ducimus voluptatum quaerat sint illo laborum, corporis ab facere aliquam tempore, deleniti ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              </div>

            </div>
            )}
        </div>



      </div>
            
          
      
    </>
  )
}

export const ExpertInfo = () => {
  const [summary, setSummary] = useState(true);
  const [services, setServices] = useState(false);
  const [ratings, setRatings] = useState(false);
  const MakeSummaryTrue = () =>{
    setSummary(true);
    setServices(false);
    setRatings(false)
  }
  const MakeServicesTrue = () =>{
    setSummary(false);
    setServices(true);
    setRatings(false)
  }
  const MakeRatingsTrue = () =>{
    setSummary(false);
    setServices(false);
    setRatings(true);
  }

  return (
    <div className="w-[60%] h-[100vh] bg-red-100">
      <div className="flex gap-3 justify-evenly mt-5">
        <button className="bg-blue-100 px-4 py-2 text-[20px] rounded-md  hover:bg-blue-200 mx-1"
        onClick={()=> MakeSummaryTrue()}>
          Summary
        </button>
        <button className="bg-blue-100 px-4 py-2 text-[20px] rounded-md  hover:bg-blue-200 mx-1"
        onClick={()=> MakeServicesTrue()}>
          Services
        </button>
        <button className="bg-blue-100 px-4 py-2 text-[20px] rounded-md  hover:bg-blue-200 mx-1"
        onClick={()=> MakeRatingsTrue()}>
          Ratings
        </button>
      </div>
      <div className="w-[90%] h-[85%] bg-white rounded-3xl p-5 m-auto mt-5">
        {summary && <ExpertSummary />}
        {services && <ExpertServices />}
        {ratings && <ExpertRatings />}
      </div>
    </div>
  );
};

const ExpertProfile = () => {
  return (
    <div className="flex">
      <AboutExpert />
      <ExpertInfo />
    </div>
  );
};

export default ExpertProfile;
