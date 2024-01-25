import React from "react";
import { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { MdOutlineStar } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import { categories } from "../../constant";
import { Link } from "react-router-dom";
import { TopExperts } from "../Landing/Landing";

let items = 20;
const ExpertCategories = () => {
  const [allCategories, setAllCategories] = useState(false);
  return (
    <>
      <div className="px-4 py-2">
        <h1
          className="text-gray-600 cursor-pointer hover:underline flex items-center"
          onClick={() =>
            allCategories ? setAllCategories(false) : setAllCategories(true)
          }
        >
          Browse all categories <IoIosArrowRoundForward size={40} />
        </h1>
        <div className="mt-5 flex flex-wrap gap-6">
          {allCategories
            ? categories.map((category, index) => (
                <div className="bg-slate-100 px-3 py-2 rounded-2xl cursor-pointer">
                  {category}
                </div>
              ))
            : categories.map(
                (category, index) =>
                  index < items && (
                    <div className="bg-slate-100 px-3 py-2 rounded-2xl cursor-pointer">
                      {category}
                    </div>
                  )
              )}
        </div>
      </div>
    </>
  );
};

export const TopThreeExperts = () => {
  const [activeNo, setActiveNo] = useState(0);
  return (
    <div className="flex flex-col gap-16 w-full items-start mx-0 my-10">
      {/* <div
        id="Line"
        className="border-solid w-full h-0 border-t-0 border-black/70"
      /> */}
      <div className="shadow-[0px_2px_10px_0px_rgba(0,_0,_0,_0.15)] bg-[#f5e1da] flex flex-row justify-between w-full items-start mb-1  pt-20 px-40">
        <div className="text-[64px] font-extrabold mt-32 w-[20%]">
          Our Top experts.
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
        </div>
      </div>
      {/* <div
        id="Line1"
        className="border-solid w-full h-0 border-t border-black/70"
      /> */}
    </div>
  );
};

export const ProfileCard = () => {
  return (
    <>
      <div className="w-[300px] my-4 text-center">
        <Link to="expertProfile">
          <img
            className="h-40 w-44 rounded-full translate-y-16"
            src="https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"
            alt=""
          />
        </Link>
        <div className="bg-slate-100 rounded-xl p-5 pt-20">
          <div className="text-[25px] font-semibold">Austin Distel</div>
          <div className="flex items-center justify-center gap-2 text-[20px] my-3">
            <MdOutlineStar color={"green"} />
            4.5 (Ratings)
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
            quidem.
          </div>
        </div>
      </div>
    </>
  );
};

export const ExpertList = ({ items = 10 }) => {
  return (
    <>
      <h1 className="text-[50px] text-center">List of our experts</h1>
      <div className="flex flex-wrap justify-around gap-5 mx-5">
        {[...Array(items)].map((expert) => (
          <ProfileCard />
        ))}
      </div>
    </>
  );
};

const ExpertBody = () => {
  return (
    <>
      <ExpertCategories />
      <TopExperts />
      <ExpertList items={20} />
    </>
  );
};

export default ExpertBody;
