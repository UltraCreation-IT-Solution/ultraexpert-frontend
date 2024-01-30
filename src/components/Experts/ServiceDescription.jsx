import React from "react";
import { GiDuration } from "react-icons/gi";
import { ProfileCardHorizontal } from "./ExpertProfile";
import Navbar from "../Boundary/Navbar";
import { Link } from "react-router-dom";
const ServiceDescription = () => {
  return (
    <div className="">
      <Navbar />
      <div className="w-[85%] m-auto mt-[80px] py-[2vw]">
        <div className="w-2/4">
          <ProfileCardHorizontal />
        </div>

        <div className="p-[1vw] mt-[1vw]">
          <h1 className="text-[1.5vw] font-extrabol mb-[1.5vw]">
            Web & Application development
          </h1>
          <div className="flex items-center gap-[.5vw] text-[1.4vw]">
            <GiDuration />
            <div className=" my-2">Duration: 1 Hour</div>
          </div>
          <div className="text-[1vw]">
            Popular tags: Frontend, Backend, Full-stack, Technologies
          </div>
        </div>

        <div className=" p-[1vw] mt-[1vw] w-2/4">
          <div className="text-[1.4vw] font-semibold">Description:</div>
          <p className="text-[1vw] text-[#615f5f]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempore officiis omnis nam possimus voluptatibus sit dolores eveniet
            atque nemo mollitia nobis quisquam delectus, minus nesciunt quos
            itaque earum doloremque eius in? Accusantium aspernatur dicta illo,
            doloremque enim fugit ipsa.
          </p>
        </div>

        <div className="flex items-center gap-[1vw] p-[1vw]">
          <h1 className="text-[1.4vw] font-semibold">Service Price:</h1>
          <div className="text-[1.4vw] font-bold">1500/-</div>
        </div>
        <div className="p-[1vw] flex gap-[.5vw]">
          <Link to="">
            <button className="px-[2vw] py-[0.5vw] text-white bg-black rounded-lg text-[2.4vw] md:text-[1.2vw]">
              Book Service
            </button>
          </Link>
          <Link to="">
            <button className="px-[2vw] py-[0.5vw] text-black bg-white border font-semibold rounded-lg text-[2.4vw] md:text-[1.2vw]">
              Back to services
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDescription;
