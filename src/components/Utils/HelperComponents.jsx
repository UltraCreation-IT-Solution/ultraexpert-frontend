import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";
import { useState } from "react";

export const ProjectsCarousel = () => {
  const [slider, setSlider] = useState(0);
  const data = [
    {
      src: "https://images.unsplash.com/photo-1682687981922-7b55dbb30892?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
      info: "Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed?Lorem ipsum 1, dolor sit amet consectetur adipisicing elit.",
    },
    {
      src: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
      info: "Lorem ipsum 2, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Lorem ipsum 1, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1681400246385-8093434ca189?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D",
      info: "Lorem ipsum 3, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed? Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur",
    },
    {
      src: "https://images.unsplash.com/photo-1704186502060-247ad4c77626?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2NHx8fGVufDB8fHx8fA%3D%3D",
      info: "Lorem ipsum 4, dolor sit amet consectetur adipisicing elit. Aliquid itaque ipsa quos corporis, fugit nostrum dignissimos laborum provident consectetur, recusandae iusto quia? Vero ea doloribus beatae impedit nobis placeat sed?",
    },
  ];
  return (
    <div className="flex justify-center items-center my-[1.5vw]">
      
      {data.map((temp, idx) => (
        <div className="">
          <div className="relative w-[90%]">
            <IoIosArrowDropleftCircle
              className="absolute left-0 top-[12vw] w-[3vw] h-[3vw]  text-black backdrop-filter"
              onClick={() =>
              slider === 0 ? setSlider(data.length - 1) : setSlider(slider - 1)
              }
            />
            <IoIosArrowDroprightCircle
              className="absolute right-0 top-[12vw] w-[3vw] h-[3vw] text-black backdrop-filter"
              onClick={() =>
              slider === data.length - 1 ? setSlider(0) : setSlider(slider + 1)
              }
            />
            <img
              src={temp.src}
              key={idx}
              className={slider === idx ? "h-[50vw] md:h-[25vw] w-[100%] rounded-md flex" : "hidden"}
            />
            </div>
          <p className={slider === idx ? "flex w-[90%] text-justify text-[2.4vw] md:text-[1vw] font-montserrat" : "hidden"}>{temp.info}</p>
        </div>
      ))} 
      
    </div>
  );
};
