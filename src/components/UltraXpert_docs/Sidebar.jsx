import { useScroll } from "framer-motion";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const Sidebar = () => {
  const [landing, setLanding] = useState(false);
  const landingComponent = [
    "Search Bar",
    "marquee",
    "Hero Section",
    "top 5 experts ",
    "services",
    "testimonials",
  ];
  const [services, setServices] = useState(false);
  const servicesComponent = [
    "Sub Header",
    "Search Bar",
    "Service Card",
    "Service Horizontal Card",
  ];
  const [experts, setExperts] = useState(false);
  const expertsComponent = [
    "Sub Header",
    "Search Bar",
    "Expert Card",
  ];
  const [blogs, setBlogs] = useState(false);
  const blogsComponent = [
    "Sub Header",
    "Search Bar",
    "Blog Card",
    "Blog Horizontal Card",
  ];
  return (
    <div className="min-w-60 h-screen border-r border-solid border-[#000000] rounded-md">
      <div className="px-6 flex flex-col gap-4 mt-2">
        {/* Landing page */}
        <div>
          <div
            className="flex items-center justify-between text-xl mb-2 cursor-pointer"
            onClick={() => setLanding(!landing)}
          >
            <div>Landing page</div>
            <FaChevronDown /> 
          </div>
          {landing && (
            <div className="flex flex-col gap-2 pl-3">
              {landingComponent.map((item,index) => (
                <div className="cursor-pointer" key={index}>{item}</div>
              ))}
            </div>
          )}
        </div>
        {/* Experts Page */}
        <div>
          <div
            className="flex items-center justify-between text-xl mb-2"
            onClick={() => setExperts(!experts)}
          >
            <div>Experts Page</div>
            <FaChevronDown /> 
          </div>
          {experts && (
            <div className="flex flex-col gap-2 pl-3">
              {expertsComponent.map((item,index) => (
                <div className="" key={index}>{item}</div>
              ))}
            </div>
          )}
        </div>


        {/* Services Page*/}
        <div>
          <div
            className="flex items-center justify-between text-xl mb-2"
            onClick={() => setServices(!services)}
          >
            <div>Services Page</div>
            <FaChevronDown /> 
          </div>
          {services && (
            <div className="flex flex-col gap-2 pl-3">
              {servicesComponent.map((item,index) => (
                <div className="" key={index}>{item}</div>
              ))}
            </div>
          )}
        </div>
        
        {/* Blogs Page */}
        <div>
          <div
            className="flex items-center justify-between text-xl mb-2"
            onClick={() => setBlogs(!blogs)}
          >
            <div>Blogs Page</div>
            <FaChevronDown /> 
          </div>
          {blogs && (
            <div className="flex flex-col gap-2 pl-3">
              {blogsComponent.map((item,index) => (
                <div className="" key={index}>{item}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
