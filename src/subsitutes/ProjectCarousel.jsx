import React, { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
const ProjectsCarousel = ({ projectsArray }) => {
  const [slider, setSlider] = useState(0);
  return (
    <>
      <div className="">
        <div className="flex justify-center items-center ">
          {projectsArray?.length > 0 &&
            projectsArray?.map((item, idx) => (
              <div key={idx}>
                <div className="relative w-[95%] m-auto">
                  <div
                    className={
                      slider === idx
                        ? "absolute top-1 left-1 w-fit px-4 sm:px-8 py-1 sm:py-2 btnBlack text-white rounded-sm rounded-r-full border border-solid border-white "
                        : "hidden"
                    }
                  >
                    <div className="text-center text-xs sm:text-sm">
                      {item?.type} Project
                    </div>
                    <div className="text-center text-xs text-gray-300">
                      {item?.role}{" "}
                    </div>
                  </div>
                  <div
                    className={
                      slider === idx
                        ? "absolute bottom-0 w-full flex items-center justify-center h-[8vw] md:h-[5.5vw] bg-black/45 tracking-wider text-[2.5vw] md:text-[1.5vw] text-white font-bold"
                        : "hidden"
                    }
                  >
                    {item?.title}
                  </div>
                  <MdOutlineKeyboardArrowLeft
                    className={`absolute left-2 top-[24vw] md:top-[14vw] w-8 h-8 sm:w-[5vw] sm:h-[5vw] md:w-[3vw] md:h-[3vw] border-[1.5px] md:border-[3px] rounded-full ${
                      slider === 0
                        ? ` border-slate-400 border-solid text-slate-400`
                        : `border-white border-solid text-white`
                    } bg-black/50 `}
                    onClick={() =>
                      slider === 0 ? setSlider(0) : setSlider(slider - 1)
                    }
                  />
                  <MdOutlineKeyboardArrowRight
                    className={`absolute right-2 top-[24vw] md:top-[14vw] w-8 h-8 sm:w-[5vw] sm:h-[5vw] md:w-[3vw] md:h-[3vw] border-[1.5px] md:border-[3px] ${
                      slider === projectsArray?.length - 1
                        ? ` border-slate-400 border-solid text-slate-400`
                        : `border-white border-solid text-white`
                    } bg-black/50 rounded-full`}
                    onClick={() =>
                      slider === projectsArray?.length - 1
                        ? setSlider(projectsArray?.length - 1)
                        : setSlider(slider + 1)
                    }
                  />
                  <img
                    src={item?.image}
                    key={idx}
                    className={
                      slider === idx
                        ? "h-[50vw] md:h-[30vw] w-[100%] object-cover shrink-0 flex"
                        : "hidden"
                    }
                  />
                </div>

                <div
                  className={
                    slider === idx
                      ? "mt-3 flex items-center gap-1 flex-wrap pl-3 sm:pl-5"
                      : "hidden"
                  }
                >
                  {item?.tags?.map((item, index) => (
                    <div
                      key={index}
                      className="border border-solid border-slate-300 rounded-sm px-3 py-[6px] text-xs"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p
                  className={
                    slider === idx
                      ? "flex w-[95%] m-auto mt-4 text-sm md:text-base font-montserrat"
                      : "hidden"
                  }
                >
                  {item?.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default ProjectsCarousel;
