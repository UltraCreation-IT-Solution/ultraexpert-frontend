import React, { useEffect, useState } from "react";
import { allServiceObject, serviceObjects } from "../../constant";
import { GrStar } from "react-icons/gr";
import { FaHeart, FaRegHeart, FaForward, FaBackward,FaPlus, FaMinus } from "react-icons/fa";
import { ServiceCategory } from "../Landing/Landing";
import Subheader from "../../utilities/Subheader";
import SearchByCategoriesSlider from "../../utilities/SearchByCategoriesSlider";
import axios from "../../axios";
import { useNavigate } from "react-router-dom";
import Pagination from "../../subsitutes/Pagination";

export const ServiceCard = ({ item }) => {
  const [FavService, setFavService] = useState(false);
  console.log(item);
  const navigate = useNavigate();
  const handleAddToFavorites = async (id) => {
    const cookie = document.cookie.split("; ");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/customers/connect/",
        {
          action: 5,
          service_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const json = res.data;
      if (!json) {
        console.log("no data found");
        return;
      }
      console.log(json);
      setFavService(true);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGotoService = (serviceId) => {
    navigate(`/experts/service/${serviceId}`);
  };
  // console.log(item);
  // const cookie = document.cookie.split(";");
  // const jsonData = {};

  // cookie.forEach((item) => {
  //   const [key, value] = item.split("=");
  //   jsonData[key] = value;
  // });
  // const addFav = async()=>{
  //   try{
  //     const res = await axios.post("",{
  //       action:5,
  //       service_id: item.id
  //     },{
  //       headers:{
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${jsonData.access_token}`
  //       }
  //     });

  //     const json = res.data;
  //     if(!json){
  //       console.log("no data found");
  //       return;
  //     }
  //     console.log(json);
  //     setFavService(true);
  //   }catch(error){
  //     console.log(error)
  //   }
  // }
  const handleRemoveFromFavorites = async (id) => {
    const cookie = document.cookie.split("; ");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/customers/connect/",
        {
          action: 6,
          service_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const json = res.data;
      if (!json) {
        console.log("no data found");
        return;
      }
      console.log(json);
      setFavService(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative min-w-[300px] max-w-[300px] md:min-w-[350px] md:max-w-[350px] rounded-xl bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0 pb-4">
      <div className="absolute top-2 right-2 z-10 text-white text-3xl py-[0.4vw] px-[0.4vw] drop-shadow-md flex items-center border-solid cursor-pointer">
        {localStorage.getItem("isAuthor") === "true" ? (
          <></>
        ) : item?.is_fav ? (
          <FaHeart onClick={() => handleRemoveFromFavorites(item.id)} />
        ) : (
          <FaRegHeart onClick={() => handleAddToFavorites(item?.id)} />
        )}
      </div>
      <img
        src={item?.img}
        className="w-full h-[200px] object-cover shrink-0 md:mb-[0.7vw]"
        alt=""
      />
      <div
        onClick={() => handleGotoService(item?.id)}
        className="px-2 md:px-[0.8vw] pt-2 md:pt-0"
      >
        <div className="flex items-center gap-4 font-semibold text-lg text-[#808080]">
          <img
            src={item?.profile_img}
            className="h-9 w-9 rounded-full "
            alt=""
          />
          <div>
            {item?.first_name} {item?.last_name}
          </div>
        </div>
        {/* <div className="font-bold text-xl line-clamp-2 text-ellipsis my-2 mb-[0.2vw]">
          {item?.category}
        </div> */}
        <div className="text-base md:text-lg my-2">{item?.price}</div>
        <div className="text-sm text-gray-500 line-clamp-3 md:mb-[1vw]">
          {item?.title}
        </div>
        <div className="flex items-center gap-6 text-sm mt-2">
          <div className="flex items-center gap-1">
            <GrStar />
            {item?.ratings}
          </div>
          <div>Reviews: {item?.score}</div>
        </div>
      </div>
    </div>
  );
};
export const allServiceData = [];

const Service = () => {
  const navigate = useNavigate();
  const [serviceObjects, setServiceObjects] = useState([]);
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [lastPage, setLastPage] = useState(0);
  // for pagination

  const fetchData = async () => {
    const cookie = document.cookie.split(";");

    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get("/customers/services/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const data = res.data.data;

      const categorizedServices = {};

      // Group services by category
      for (const category in data) {
        categorizedServices[category] = data[category].map((service) => ({
          id: service.id,
          first_name: service.expert_data.first_name,
          last_name: service.expert_data.last_name,
          title: service.service_name,
          img: service.service_img,
          is_fav: service.is_favorite,
          profile_img: service.expert_data.profile_img,
          category: service.category.name,
          price: service.price,
          ratings: service.expert_data.avg_rating,
          score: service.expert_data.avg_score,
        }));
      }

      // Set state with categorized services
      setServiceObjects(categorizedServices);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(serviceObjects);

  const [allService, setAllService] = useState([]);
  const getAllServices = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};

    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(
        `/customers/services/?action=1&page=${currentPage}&records_number=${itemsPerPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(res);
      setLastPage(res.data.total_pages);
      const data = res.data.data.all;
      console.log(data);
      setAllService(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllServices();
  }, [currentPage]);
  console.log(allService);

  const addFav = async (id) => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/customers/connect/",
        {
          action: 5,
          service_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const json = res.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      getAllServices();
    } catch (error) {
      console.log(error);
    }
  }
  const remFav = async(id)=>{
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/customers/connect/",
        {
          action: 6,
          service_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const json = res.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      getAllServices();
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="mt-[90px] px-[7vw] md:px-[10vw]">
        <Subheader heading={"Services"} />
      </div>
      <SearchByCategoriesSlider />
      <div className="mb-10 lg:mb-5">
        <ServiceCategory />
      </div>
      <div className="w-full px-[7vw] md:px-[10vw] mt-[-1vw]">
        {Object.entries(serviceObjects)
          .filter(([category]) => category !== "all")
          .map(([category, services]) => (
            <div key={category} className="mb-4 py-3 xs:py-2 md:py-0">
              <div className="font-bold text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-1">
                <span>Explore into {category}</span>
              </div>
              <div className="serviceContainer min-w-[100%] max-w-[100%] flex gap-[3.5vw] sm:gap-[1.6vw] md:gap-[1.2vw] py-[2vw] mb-[2vw] overflow-x-auto">
                {services.map((service) => (
                  <div
                    key={service?.id}
                    className="cursor-pointer  min-w-[300px] max-w-[300px] md:min-w-[350px] md:max-w-[350px]"
                  >
                    <ServiceCard item={service} />
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
      <div className="px-[7vw] md:px-[10vw] lg:px-0 ">
        <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-5 mt-10 lg:px-[10vw]">
          All Services
        </div>
        <div className="flex flex-col lg:flex-row lg:flex-wrap items-center justify-center gap-x-[2.5vw] gap-y-8">
          {allService.map((item) => (
            <div
              className="flex flex-col xs:flex-row xs:items-center gap-5 w-full lg:w-[40vw] rounded-xl bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0 p-2"
              
            >
              <img
                className="w-full h-48 xs:min-h-32 xs:min-w-36 xs:h-[10vw] xs:w-[12vw] object-fill object-center shrink-0 rounded-lg"
                src={item?.service_img}
                alt=""
                onClick={() => navigate(`/experts/service/${item?.id}`)}
              />
              <div>
                <div className="flex items-center gap-2 font-semibold text-base text-[#808080]" onClick={() => navigate(`/experts/service/${item?.id}`)}>
                  <img
                    src={item?.expert_data?.profile_img}
                    className="h-7 w-7 rounded-full object-cover shrink-0"
                    alt=""
                  />
                  <div className="line-clamp-1">
                    {item?.expert_data?.first_name}{" "}
                    {item?.expert_data?.last_name}
                  </div>
                </div>
                <div className="font-bold text-lg line-clamp-2 text-ellipsis my-2 mb-[0.2vw]" onClick={() => navigate(`/experts/service/${item?.id}`)}>
                  {item?.category?.name}
                </div>
                <div className="text-base my-1" onClick={() => navigate(`/experts/service/${item?.id}`)}>{item?.price}</div>
                <div className="text-xs text-gray-500 line-clamp-2 md:mb-[1vw]" onClick={() => navigate(`/experts/service/${item?.id}`)}>
                  {item?.service_name}
                </div>
                <div className="flex items-center gap-6 text-sm mt-2">
                  <div className="flex items-center gap-1">
                    <GrStar />
                    {item?.expert_data?.avg_rating}
                  </div>
                  <div>Reviews: {item?.service_view_count}</div>
                  {
                    localStorage.getItem("isExpert")==="true" ? (<></>):(<div className="border border-solid border-slate-400 text-[10px] rounded-full px-3 py-0.5 flex items-center cursor-pointer gap-1">
                    {item.is_favorite ? (
                      <div
                        className="flex gap-2 items-center"
                        onClick={() => remFav(item.id)}
                      >
                        <FaMinus />
                        Added to Fav
                      </div>
                    ) : (
                      <div
                        className="flex gap-2 items-center"
                        onClick={() => addFav(item.id)}
                      >
                        <FaPlus /> Add to Fav
                      </div>
                    )}
                  </div>)
                  }
                  
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="px-[8vw] md:px-[10vw]">
          <div className="mt-[3vw] flex items-center justify-between gap-[4vw] text-white">
            <div
              className={`text-sm md:text-lg justify-center items-center px-4 md:px-5 py-2 md:font-semibold rounded-sm md:rounded-md bg-[#262626] flex gap-3 cursor-pointer ${
                currentPage < 2 && "opacity-80"
              } `}
              onClick={() => {
                currentPage > 1 && setCurrentPage(currentPage - 1);
              }}
            >
              <FaBackward />
              <span className="hidden sm:block">Prev</span>
            </div>
            <Pagination
              lastPage={lastPage}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            <div
              className={`text-sm md:text-lg justify-center items-center px-4 md:px-5 py-2 md:font-semibold rounded-sm md:rounded-md bg-[#262626] flex gap-3 cursor-pointer ${
                currentPage === lastPage && "opacity-80"
              } `}
              onClick={() => {
                currentPage < lastPage && setCurrentPage(currentPage + 1);
              }}
            >
              <span className="hidden sm:block">Next</span>
              <FaForward />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
