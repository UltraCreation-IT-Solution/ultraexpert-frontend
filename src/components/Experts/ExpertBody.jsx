import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";

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
      <ExpertList items={20} />
    </>
  );
};

export default ExpertBody;
