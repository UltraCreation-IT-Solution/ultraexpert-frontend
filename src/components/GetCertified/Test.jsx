import React from "react";
import { FcClock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Test = () => {
    const Nevigate= useNavigate();
    const goToDashboard = () => {
        Nevigate("/expertdashboard");
    }
  return (
    <div className="mt-[85px] flex justify-center">
      <div className="flex  border border-solid border-slate-400 w-[70%] rounded-lg">
        <div className="w-[20%] border-r border-solid border-slate-400 text-base text-gray-600 text-center py-10">
          <div className="px-3 py-2 transition-all hover:bg-slate-300 my-2">
            Thought process
          </div>
          <div className="px-3 py-2 transition-all hover:bg-slate-300 my-2">
            Python
          </div>
          <div className="px-3 py-2 transition-all hover:bg-slate-300 my-2">
            Java
          </div>
          <div className="px-3 py-2 transition-all hover:bg-slate-300 my-2">
            Ruby
          </div>
          <div className="px-3 py-2 transition-all hover:bg-slate-300 my-2">
            C++
          </div>
        </div>
        <div className="w-[80%] px-20 py-5">
          <div className=" bg-black/10 rounded-full h-3 mt-5">
            <div className="bg-[#2A2A2A] w-[25%]">f</div>
          </div>
          <div className="border border-solid border-slate-300 drop-shadow-lg p-2 mt-5 ml-auto w-fit text-base flex items-center gap-2 rounded-md">
            <FcClock className="text-2xl" />
           {setTimeout(()=>{ <span> 2 min</span>}, 6000)}
          </div>
          <div className="mt-6">
            <div className="flex items-start gap-4 my-7">
              <div className="border border-solid border-slate-300 rounded-full h-10 w-10 text-center p-2 shrink-0">
                1
              </div>
              <div className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam officiis explicabo et accusamus in.</div>
            </div>
            <div className="flex items-start gap-4 my-7">
              <div className="border border-solid border-slate-300 rounded-full h-10 w-10 text-center p-2 shrink-0">
                2
              </div>
              <div className="text-base ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, et hic nostrum aliquam exercitationem alias. Dolorum laudantium doloremque eveniet animi.</div>
            </div>
            <div className="flex items-start gap-4 my-7">
              <div className="border border-solid border-slate-300 rounded-full h-10 w-10 text-center p-2 shrink-0">
                3
              </div>
              <div className="text-base ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, et hic nostrum aliquam exercitationem alias. Dolorum laudantium doloremque eveniet animi.</div>
            </div>
            <div className="flex items-start gap-4 my-7">
              <div className="border border-solid border-slate-300 rounded-full h-10 w-10 text-center p-2 shrink-0">
                4
              </div>
              <div className="text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, et hic nostrum aliquam exercitationem alias. Dolorum laudantium doloremque eveniet animi.</div>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="px-11 py-2 text-base rounded-md text-white bg-gray-400 hover:bg-gray-500 transition-all" onClick={goToDashboard}>Exit</div>
            <div className="px-8 py-2 text-base rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all">Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
