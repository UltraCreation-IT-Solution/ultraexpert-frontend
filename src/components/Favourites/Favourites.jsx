import React,{useState} from "react";
import { favServices, favExperts, favBlogs } from "../../constant";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { GrStar } from "react-icons/gr";

export const FavExpertCard = ({ item }) => {
  const [FavExpert, setFavExpert] = useState(true);
  return (
    <div className="relative min-w-[250px] h-[250px] md:min-w-[310px] md:h-[300px] flex flex-col shadow-lg border border-[#dbdbdb] border-solid rounded-lg">
      <img
        src={item?.profile}
        className="h-16 w-16 md:h-20 md:w-20 object-cover shrink-0 rounded-full absolute top-11 left-24 md:top-14 md:left-28 border-2 border-solid border-white"
        alt=""
      />
      <div className="absolute top-1 right-2 z-10 text-white text-2xl md:text-3xl py-[0.4vw] px-[0.4vw] drop-shadow-md flex items-center border-solid  ">
        {FavExpert ? (
          <FaHeart onClick={() => setFavExpert(false)} />
        ) : (
          <FaRegHeart onClick={() => setFavExpert(true)} />
        )}
      </div>
      <div className="absolute top-[0.6vw] right-[0.3vw] z-10 text-white text-[6vw] xs:text-[4.5vw] sm:text-[2.4vw] md:text-[2.2vw] lg:text-[2vw] py-[0.4vw] px-[0.4vw] drop-shadow-md flex items-center border-solid  "></div>
      <img
        src={item?.banner}
        className="h-[5rem] md:h-[6rem] object-cover shrink-0"
        alt=""
      />
      <div className="text-center mt-9 md:mt-12 px-2">
        <div className="text-lg md:text-xl font-bold">{item?.name} </div>
        <div className="text-gray-500 text-sm md:text-base">
          {item?.designation}{" "}
        </div>
        <div className="mt-2 text-sm md:text-base flex items-center justify-center gap-1 ">
          <FaStar />
          <div>{item?.ratings} </div>
        </div>
        <Link to={"expertprofile"}>
          <div className="mt-2 w-full bg-[#2A2A2A] text-sm md:text-base py-2 md:py-3 text-white rounded-md sm:rounded no-underline text-center ">
            Visit Profile
          </div>
        </Link>
      </div>
    </div>
  );
};
export const FavServiceCard = ({ item }) => {

  const [FavExpert, setFavExpert] = useState(true);
  return (
    <div className="relative shrink-0 w-[250px] md:w-[310px] rounded-lg bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0 pb-4">
      <div className="absolute top-1 right-2 z-10 text-white text-2xl md:text-3xl py-[0.4vw] px-[0.4vw] drop-shadow-md flex items-center border-solid  ">
        {FavExpert ? (
          <FaHeart onClick={() => setFavExpert(false)} />
        ) : (
          <FaRegHeart onClick={() => setFavExpert(true)} />
        )}
      </div>
      <img
        src={item?.banner}
        className="h-[100px] w-full md:h-[150px] object-cover shrink-0 md:mb-[0.7vw]"
        alt=""
      />
      <div className="px-2 md:px-[0.8vw] pt-2 md:pt-0">
        <div className="flex items-center gap-4 font-semibold text-lg text-[#808080]">
          <img
            src={item?.logo}
            className="h-7 w-7 md:h-9 md:w-9 rounded-full "
            alt=""
          />
          <div className="text-base md:text-lg">{item?.expertName}</div>
        </div>
        <div className="font-bold text-lg md:text-xl line-clamp-2 text-ellipsis my-2 mb-[0.2vw]">
          {item?.category}
        </div>
        <div className="text-base md:text-lg my-2">{item?.price}</div>
        <div className="flex items-center gap-6 text-sm md:text-base mt-2">
          <div className="flex items-center gap-1">
            <GrStar />
            {item?.rating}
          </div>
          <div>Reviews: {item?.reviews}</div>
        </div>
      </div>
    </div>
  );
};
export const FavBlogsCard = ({ item }) => {
  return (
    <div className=" relative shrink-0 w-[250px] md:w-[310px] rounded-md bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0">
      <img
        src={item.img}
        className="w-full h-[150px] md:h-[180px] object-cover  shrink-0 md:mb-[0.7vw]"
        alt=""
      />
      <div className="px-[0.8vw] pt-2 md:pt-0">
        <div className="flex justify-between font-semibold text-sm text-[#808080]">
          <div>{item.name}</div>
          <div>{item.date}</div>
        </div>
        <div className="font-bold text-sm md:text-base line-clamp-2 text-ellipsis my-2 mb-[0.2vw]">
          {item.title}
        </div>
        <div className="w-full flex text-white justify-between items-center my-2">
          <Link
            to={"blogdetail"}
            className="w-full flex justify-center items-center px-[3vw] py-2  text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-sm font-semibold cursor-pointer decoration-transparent"
          >
            Read More
          </Link>
          <CiBookmark className="text-4xl xs:text-5xl text-black" />
        </div>
      </div>
    </div>
  );
};

export const AllFav = () => {
  
  return (
    <div>
      <div className="mt-10">
        <div className="font-bold text-2xl md:text-3xl ">Experts</div>
        {/* Favourate Experts */}
        <div className="flex overflow-x-scroll gap-5 mt-5">
          {favExperts.map((item, index) => (
            <FavExpertCard key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Favourate services */}
      <div className="mt-10">
        <div className="font-bold text-2xl md:text-3xl ">Services</div>
        <div className="flex items-center overflow-x-scroll gap-5 mt-5">
          {favServices.map((item, index) => (
            <FavServiceCard key={index} item={item} />
          ))}
        </div>
      </div>
      {/* Favourate Blogs */}
      <div className="mt-10">
        <div className="font-bold text-2xl md:text-3xl ">Blogs</div>
        <div className="flex items-center overflow-x-scroll gap-5 mt-5">
          {favBlogs.map((item, index) => (
            <FavBlogsCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const FavExperts = () => {
  return (
    <div className="mt-10">
      <div className="font-bold text-xl md:text-3xl ">Experts</div>
      <div className="flex items-center overflow-x-scroll gap-5 mt-5">
        {favExperts.map((item, index) => (
          <FavExpertCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export const FavServices = () => {
  return (
    <div className="mt-10">
      <div className="font-bold text-xl md:text-3xl ">Services</div>
      <div className="flex items-center overflow-x-scroll gap-5 mt-5">
        {favServices.map((item, index) => (
          <FavServiceCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export const FavBlogs = () => {
  return (
    <div className="mt-10">
      <div className="font-bold text-xl md:text-3xl ">Blogs</div>
      <div className="flex items-center overflow-x-scroll gap-5 mt-5">
        {favBlogs.map((item, index) => (
          <FavBlogsCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const Favourites = () => {
  const location = useLocation().pathname;
  console.log(location)
  return (
    <div className="mt-[90px] px-[7vw]">
      <div className="flex items-center justify-between">
        <div className="w-fit">
          <div className="text-3xl font-bold">Favourites</div>
          <div className="w-[70%] border border-solid border-slate-400"></div>
        </div>
        <div className="border border-solid border-slate-300 px-3 py-1 text-sm">
          Sort by
        </div>
      </div>
      <div className="mt-14 flex justify-center items-center overflow-x-scroll gap-10 md:gap-20 border-b border-solid border-slate-300 pb-8 drop-shadow-lg ">
        <div className={`${location === "/favourites" ? "text-black":null} text-xl md:text-2xl font-bold shrink-0`}>
          <Link className="text-gray-500 no-underline" to="/favourites">
            All{" "}
          </Link>
        </div>

        <div className={`text-xl md:text-2xl font-bold shrink-0`}>
          <Link className={`text-gray-500 no-underline ${location == "/favourites/favexperts" ? "text-black":"text-gray-500"} `} to="favexperts">
            Experts{" "}
          </Link>
        </div>

        <div className="text-xl md:text-2xl font-bold shrink-0">
          <Link className="text-gray-500 no-underline" to="favservices">
            Services{" "}
          </Link>
        </div>

        <div className="text-xl md:text-2xl font-bold shrink-0">
          <Link className="text-gray-500 no-underline " to="favblogs">
            Blogs{" "}
          </Link>
        </div>
      </div>

      <Outlet>
        <AllFav />
        <FavExperts />
        <FavServices />
        <FavBlogs />
      </Outlet>
    </div>
  );
};

export default Favourites;
