import React, { useEffect, useState } from "react";
import { TopExperts } from "../Landing/Landing";
import Subheader from "../../utilities/Subheader";
import SearchByCategoriesSlider from "../../utilities/SearchByCategoriesSlider";
import { Link } from "react-router-dom";
import { profileObj } from "../../constant";
import axios from "../../axios";
import Pagination from "../../subsitutes/Pagination";
import {
  FaStar,
  FaTags,
  FaVideo,
  FaRegHeart,
  FaHeart,
  FaBackward,
  FaForward,
} from "react-icons/fa";
import ExpertCardShimmer from "../../subsitutes/Shimmers/ExpertCardShimmer";

export const ExpertCard = ({ item }) => {
  const [FavExpert, setFavExpert] = useState(false);
  return (
    <div className="relative w-[90vw] h-[81vw] xs:w-[84vw] xs:h-[66vw] sm:w-[42vw] sm:h-[46vw] md:w-[38vw]  lg:w-[25vw] lg:h-[33vw] rounded-md md:rounded-lg shadow-lg my-[2vw] md:my-[0.65vw] border-[0.001vw] border-[#dbdbdb] border-solid overflow-hidden">
      <div className="absolute top-[0.6vw] right-[0.3vw] z-10 text-white text-[6vw] xs:text-[4.5vw] sm:text-[2.4vw] md:text-[2.2vw] lg:text-[2vw] py-[0.4vw] px-[0.4vw] drop-shadow-md flex items-center border-solid  ">
        {FavExpert ? (
          <FaHeart onClick={() => setFavExpert(false)} />
        ) : (
          <FaRegHeart onClick={() => setFavExpert(true)} />
        )}
      </div>
      <img
        className="absolute top-0 w-full h-[36%] sm:h-[30%] lg:h-1/4 object-cover opacity-80"
        src={item?.expert?.user?.banner_img}
        alt="banner"
      />
      <img
        className="absolute top-[19%] lg:top-[12%] left-[2%] z-10 w-[20vw] h-[20vw] xs:w-[15vw] xs:h-[15vw] sm:w-[8vw] sm:h-[8vw] lg:w-[7vw] lg:h-[7vw] border-white border-solid border-[0.15vw] rounded-full object-cover"
        src={item?.expert?.user?.profile_img}
        alt="profile"
      />
      <div className="absolute bottom-0 w-full h-[56%] sm:h-[65%] lg:h-4/6 px-[1.8vw] xs:px-[1.4vw] sm:px-[0.8vw]">
        <div className=" font-semibold flex gap-[0.4vw] justify-end items-center text-[3vw] xs:text-[2.2vw] sm:text-[1.65vw] lg:text-[1.2vw] w-full text-[#434343]">
          <FaStar className="text-yellow-400" /> {item?.avg_rating}/5
        </div>
        <div className="text-left flex flex-col gap-[0.75vw]">
          <div className="w-full flex justify-between">
            <div className="font-bold text-[3.8vw] xs:text-[3.2vw] sm:text-[1.85vw] lg:text-[1.45vw]">
              {item?.expert?.user?.first_name} {item?.expert?.user?.last_name}
            </div>
          </div>
          <div className="font-md text-[3.2vw] xs:text-[2.5vw] sm:text-[1.6vw] lg:text-[1.12vw] text-[#434343]">
            {item?.expert?.profession}
          </div>
        </div>

        <div className="w-full text-[#434343] text-[2.85vw] xs:text-[2.45vw] sm:text-[1.6vw] lg:text-[1vw] mt-[2vw] sm:mt-[1.45vw] lg:mt-[1vw] line-clamp-3">
          {item?.expert?.about_me}
        </div>
        <div className="w-full mt-[2.8vw] sm:mt-[1.6vw] lg:mt-[1vw] flex flex-row sm:flex-col  justify-between gap-[1.6vw] lg:gap-[1vw] ">
          <div className=" flex gap-[1vw] text-[3.2vw] xs:text-[2.5vw] sm:text-[1.65vw] lg:text-[1.12vw] items-center font-semibold">
            <FaVideo className="text-[3.6vw] xs:text-[2.8vw] sm:text-[1.85vw] lg:text-[1.25vw]" />
            {"60 meetings"}
          </div>
          <div className="flex gap-[1vw] items-center">
            <FaTags className="text-[4.2vw] xs:text-[3vw] sm:text-[2vw] md:text-[1.8vw] lg:text-[1.25vw]" />{" "}
            <span className="flex">
              {item?.skills?.slice(0,3)?.map((skill, idx) => {
                return (
                  <div
                    key={idx}
                    className="px-[2.65vw] xs:px-[2.2vw] sm:px-[1.8vw] lg:px-[1vw] py-[0.8vw] xs:py-[0.4vw] sm:py-[0.2vw] text-[2.85vw] xs:text-[2.25vw] sm:text-[1.45vw] lg:text-[1vw] border border-[#e2e2e2] border-solid line-clamp-1"
                  >
                    {skill?.technology_name}
                  </div>
                );
              })}
            </span>
          </div>
        </div>
        <div className="w-full text-[3.25vw] xs:text-[2.6vw] sm:text-[1.6vw] lg:text-[1.1vw]  py-[1vw] flex justify-between mt-[2.4vw] xs:mt-[1.6vw] lg:mt-[1vw] font-bold">
          <Link
            to={"expertprofile" + "/" + item?.expert?.id}
            className="bg-black px-[4vw] xs:px-[3vw] sm:px-[2vw] py-[2.2vw] xs:py-[1.6vw] sm:py-[1vw]  text-white rounded-sm sm:rounded no-underline"
          >
            Visit Profile
          </Link>
          <div className="px-[4vw] xs:px-[3vw] sm:px-[2vw] py-[2vw] xs:py-[1.4vw] sm:py-[0.8vw] border-[0.02vw] border-[#a9a9a9] border-solid text-black rounded-sm sm:rounded lg:underline underline-offset-2">
            Follow Expert
          </div>
        </div>
      </div>
    </div>
  );
};
const AllExperts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPage] = useState(6);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const cookies = document.cookie.split("; ");
  const jsonData = {};
  const lastPage = Math.ceil(profileObj.length / itemsPerPage);
  const [allExpertsList, setAllExpertsList] = useState([]);
  const slicedArray = allExpertsList.slice(firstIndex, lastIndex);
  console.log(slicedArray)
  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const getAllExperts = async () => {
    try {
      const res = await axios.get("/customers/experts?action=1", {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      console.log(res.data.data);
      setAllExpertsList(res.data.data);
      console.log(allExpertsList)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllExperts();
  },[]);

  if(!allExpertsList.length) return (
    <div className=" px-[3vw] xs:px-[6vw] md:px-[10vw] w-full flex flex-wrap gap-[3vw] md:gap-[2vw] pb-[2vw]  justify-center sm:justify-normal  items-center ">
      <ExpertCardShimmer/>
    </div>
  )
  
  return (
    <div className="mt-[40px] md:mt-[100px] relative w-full h-auto py-[5vw] sm:py-[3vw] px-[3vw] xs:px-[6vw] md:px-[10vw] flex flex-col">
      <div className="flex w-full justify-center sm:justify-between">
        <div className="text-3xl md:text-4xl font-bold mb-[3vw] md:mb-[1.5vw]">
          Experts
        </div>
      </div>
      <div className="w-full flex flex-wrap gap-[3vw] md:gap-[2vw] pb-[2vw]  justify-center sm:justify-normal  items-center">
        {slicedArray.map((item) => {
          return <ExpertCard key={item?.expert?.id} item={item} />;
        })}
      </div>
      <div className="mt-[3vw] flex items-center justify-center xs:justify-between gap-[4vw] text-white">
        <div
          className={`text-base md:text-lg lg:text-xl justify-center items-center px-[2vw] py-[1vw] font-bold rounded-sm md:rounded-md bg-[#262626] flex gap-2 sm:gap-3 lg:gap-4 cursor-pointer ${
            currentPage < 2 && "opacity-80"
          } `}
          onClick={() => {
            currentPage > 1 && setCurrentPage(currentPage - 1);
          }}
        >
          <FaBackward />
          Prev
        </div>
        <Pagination
          totalItems={allExpertsList.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <div
          className={`text-base md:text-lg lg:text-xl justify-center items-center px-[2vw] py-[1vw] font-bold rounded-sm md:rounded-lg bg-[#262626] flex gap-2 sm:gap-3 lg:gap-4 cursor-pointer ${
            currentPage === lastPage && "opacity-80"
          } `}
          onClick={() => {
            currentPage < lastPage && setCurrentPage(currentPage + 1);
          }}
        >
          Next
          <FaForward />
        </div>
      </div>
    </div>
  );
};

const Expert = () => {
  return (
    <>
      <div className="mt-[80px] px-[7vw] md:px-[10vw]">
        <Subheader heading={"Experts"} />
      </div>
      <SearchByCategoriesSlider />
      <TopExperts />
      <AllExperts />
    </>
  );
};

export default Expert;
