import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useState } from "react";

export const ProjectsCarousel = () => {
  const [slider, setSlider] = useState(0);
  const data = [
    {
      src: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      info: "Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.",
      title: "Cloud Portal",
    },
    {
      src: "https://images.unsplash.com/photo-1541018939203-36eeab6d5721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2plY3RzfGVufDB8MHwwfHx8MA%3D%3D ",
      info: "Lorem ipsum 2, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.",
      title: "UltraXpert",
    },
    {
      src: "https://images.unsplash.com/photo-1619506147448-b56ba8ee11d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHByb2plY3RzfGVufDB8MHwwfHx8MA%3D%3D",
      info: "Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Aliquid itaque ipsa quos corporis"
    },
    {
      src: "https://images.unsplash.com/photo-1518185104790-b1d745526575?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxwcm9qZWN0c3xlbnwwfDB8MHx8fDA%3D",
      info: "Lorem ipsum 4, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed?",
      title: "My Project 4",
    },
  ];
  return (
    <div className="flex justify-center items-center my-[1.5vw]">
      {data.map((temp, idx) => (
        <div className="">
          <div className="relative w-[95%] m-auto">
            <div
              className={
                slider === idx
                  ? "absolute bottom-0 w-full flex items-center justify-center h-[8vw] md:h-[5.5vw] bg-black/45 tracking-wider  text-[2.5vw] md:text-[1.5vw] text-white font-bold"
                  : "hidden"
              }
            >
              {temp.title}
            </div>
            <MdOutlineKeyboardArrowLeft
              className="absolute left-2 top-[24vw] md:top-[14vw] w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw] border-[1.5px] md:border-[3px] border-white border-solid text-white bg-black/50 rounded-full"
              onClick={() =>
                slider === 0
                  ? setSlider(data.length - 1)
                  : setSlider(slider - 1)
              }
            />
            <MdOutlineKeyboardArrowRight
              className="absolute right-2 top-[24vw] md:top-[14vw] w-[5vw] h-[5vw] md:w-[3vw] md:h-[3vw] border-[1.5px] md:border-[3px] border-white border-solid text-white bg-black/50 rounded-full"
              onClick={() =>
                slider === data.length - 1
                  ? setSlider(0)
                  : setSlider(slider + 1)
              }
            />
            <img
              src={temp.src}
              key={idx}
              className={
                slider === idx
                  ? "h-[50vw] md:h-[30vw] w-[100%] object-cover shrink-0 flex"
                  : "hidden"
              }
            />
          </div>
          <p
            className={
              slider === idx
                ? "flex w-[95%] m-auto mt-[1.5vw] text-sm md:text-base font-montserrat"
                : "hidden"
            }
          >
            {temp.info}
          </p>
        </div>
      ))}
    </div>
  );
};
