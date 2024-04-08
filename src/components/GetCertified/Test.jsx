import React ,{useState} from "react";
import { FcClock } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export const ThoughtProcess = () => {
  const Nevigate= useNavigate();
    const goToDashboard = () => {
        Nevigate("/expertdashboard");
    }
    let a="";
    const thoughtProcess = [
      {
        a:"",
        isVisited: false,
        option:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nam officiis explicabo et accusamus in."
      },
      {
        a:"",
        isVisited: false,
        option:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, et hic nostrum aliquam exercitationem alias. Dolorum laudantium doloremque eveniet animi.",
      },
      {
        a:"",
        isVisited: false,
        option:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, et hic nostrum aliquam exercitationem alias. Dolorum laudantium doloremque eveniet animi."
      },
      {
        a:"",
        isVisited: false,
        option:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, et hic nostrum aliquam exercitationem alias. Dolorum laudantium doloremque eveniet animi."
      },
    ];
    const allotValue = (index) => {
      
      if(thoughtProcess[index].isVisited === false){
        thoughtProcess[index].isVisited = true;
        let x=a++;
        thoughtProcess[index].a=x;
        console.log(thoughtProcess);
      }
      
      console.log(a);
    }
    const clearSelections = () => {
      for(let i=0;i<thoughtProcess.length;i++){
        thoughtProcess[i].isVisited=false;
        thoughtProcess[i].a="";
      }
      a="";
    }
  return(
    <>
    <div className=" bg-black/10 rounded-full h-3 mt-5">
            <div className="bg-[#2A2A2A] w-[25%]">f</div>
          </div>
          <div className="flex items-center justify-between">

          <div className="border border-solid border-slate-300 drop-shadow-lg p-2 mt-5 w-fit text-base rounded-md cursor-pointer hover:bg-slate-100"
          onClick={()=>clearSelections()}
          >
           Clear selections
          </div>
          <div className="border border-solid border-slate-300 drop-shadow-lg p-2 mt-5 w-fit text-base flex items-center gap-2 rounded-md">
            <FcClock className="text-2xl" />
           02:00
          </div>
          </div>
          <div className="mt-6">
            {thoughtProcess.map((item,index)=> 
            <div className="flex items-start gap-4 my-7 cursor-default"
            key={index}
            onClick={()=>allotValue(index)}>
              <div className="border border-solid border-slate-300 rounded-full h-10 w-10 text-center p-2 shrink-0">
                {item.a}
              </div>
              <div className="text-base">{item?.option}</div>
            </div>
            )}
          </div>
          <div className="mt-8 flex items-center justify-between">
            <div className="px-11 py-2 text-base rounded-md text-white bg-gray-400 hover:bg-gray-500 transition-all" onClick={goToDashboard}>Exit</div>
            <div className="px-8 py-2 text-base rounded-md text-white bg-blue-500 hover:bg-blue-600 transition-all">Submit</div>
          </div>
    </>
  )
};
const Test = () => {
    
    
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
          <ThoughtProcess/>
        </div>
      </div>
    </div>
  );
};

export default Test;
