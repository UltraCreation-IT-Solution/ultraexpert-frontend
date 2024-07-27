import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaStar, FaHeart, FaRegHeart, FaBookmark } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import axios from "../../axios";

const getCookieData = () => {
  const cookie = document.cookie.split(";");
  const jsonData = {};
  cookie.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key.trim()] = value;
  });
  return jsonData;
};

export const FavExpertCard = ({ item, handleRemoveFav }) => {
  const [isFav, setIsFav] = useState(true);
  const jsonData = getCookieData();

  const addFav = async () => {
    try {
      const res = await axios.post(
        "/customers/connect/",
        { action: 3, expert_id: item.id },
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
      setIsFav(true);
    } catch (error) {
      console.log(error);
    }
  };

  const remFav = async () => {
    try {
      const res = await axios.post(
        "/customers/connect/",
        { action: 4, expert_id: item.id },
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
      // setIsFav(false);
      handleRemoveFav(item.id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative min-w-[250px] h-[250px] md:min-w-[310px] md:h-[300px] flex flex-col shadow-lg border border-[#dbdbdb] border-solid rounded-lg">
      <img
        src={item?.user?.profile_img}
        className="h-16 w-16 md:h-20 md:w-20 object-cover shrink-0 rounded-full absolute top-11 left-24 md:top-14 md:left-28 border-2 border-solid border-white"
        alt=""
      />
      <div className="absolute top-1 right-2 z-10 text-white text-2xl md:text-3xl py-[0.4vw] px-[0.4vw] drop-shadow-md flex items-center border-solid  ">
        {isFav ? <FaHeart onClick={remFav} /> : <FaRegHeart onClick={addFav} />}
      </div>
      <img
        src={item?.user?.banner_img}
        className="h-[5rem] md:h-[6rem] object-cover shrink-0"
        alt=""
      />
      <div className="text-center mt-9 md:mt-12 px-2">
        <div className="text-lg md:text-xl font-bold">
          {item?.user?.first_name} {item?.user?.last_name}
        </div>
        <div className="text-gray-500 text-sm md:text-base">
          {item?.profession}
        </div>
        <div className="mt-2 text-sm md:text-base flex items-center justify-center gap-1 ">
          <FaStar />
          <div>{item?.expert_rating}</div>
        </div>
        <Link
          to={`/experts/expertprofile/${item?.id}`}
          className="no-underline"
        >
          <div className="mt-2 w-full bg-[#2A2A2A] text-sm md:text-base py-2 md:py-3 text-white rounded-md sm:rounded no-underline text-center ">
            Visit Profile
          </div>
        </Link>
      </div>
    </div>
  );
};

export const FavServiceCard = ({ item, getFavServ }) => {
  const [FavExpert, setFavExpert] = useState(true);
  const remFav = async (id) => {
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
      setFavExpert(false);
      getFavServ();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative shrink-0 w-[250px] md:w-[310px] rounded-lg bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0 pb-4">
      <div className="absolute top-1 right-2 z-10 text-white text-2xl md:text-3xl py-[0.4vw] px-[0.4vw] drop-shadow-md flex items-center border-solid  ">
        {FavExpert ? (
          <FaHeart onClick={() => remFav(item.id)} />
        ) : (
          <FaRegHeart />
        )}
      </div>
      <img
        src={item?.service_img}
        className="h-[100px] w-full md:h-[150px] object-cover shrink-0 md:mb-[0.7vw]"
        alt=""
      />
      <Link
        className="no-underline text-black"
        to={`/experts/service/${item?.id}`}
      >
        <div className="px-2 md:px-[0.8vw] pt-2 md:pt-0">
          <div className="flex items-center gap-4 font-semibold text-lg ">
            {/* <img
            src={item?.profile_img}
            className="h-7 w-7 md:h-9 md:w-9 rounded-full "
            alt=""
          /> */}
            <div className="text-base md:text-lg line-clamp-1 text-ellipsis">
              {item?.service_name}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 my-2 mb-[0.2vw]">
            {item?.tags?.slice(0, 2)?.map((tag, ind) => {
              return (
                <div
                  className="border border-solid border-slate-500 text-gray-500 px-2 py-1 text-sm rounded-lg"
                  key={ind}
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <div className="line-clamp-2 mt-2">
            <div className="text-sm md:text-base line-clamp-2 text-gray-500">
              {item?.description}
            </div>
          </div>
          <div className="text-base md:text-lg my-2">₹ {item?.price}</div>
          {/* <div className="flex items-center gap-6 text-sm md:text-base mt-2">
          <div className="flex items-center gap-1">
            <GrStar />
            {item?.ratings}
          </div>
          <div>Reviews: {item?.score}</div>
        </div> */}
        </div>
      </Link>
    </div>
  );
};
export const FavBlogsCard = ({ item, getFavBlog }) => {
  console.log(item);
  const handleRemFav = async (id) => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/blogs/",
        {
          action: 7,
          blog_id: id,
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
      getFavBlog();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" relative shrink-0 w-[250px] md:w-[310px] rounded-md bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0">
      <img
        src={item.images}
        className="w-full h-[150px] md:h-[180px] object-cover  shrink-0 md:mb-[0.7vw]"
        alt=""
      />
      <div className="px-[0.8vw] pt-2 md:pt-0">
        <div className="flex justify-between font-semibold text-sm text-[#808080]">
          <div>{item.author_name}</div>
          <div>
            {item.date_created.split("T")[0].split("-").reverse().join("-")}
          </div>
        </div>
        <div className="font-bold text-sm md:text-base line-clamp-1 text-ellipsis my-2 mb-[0.2vw]">
          {item.title}
        </div>
        {/* <div className="line-clamp-2 text-sm">{item.content}</div> */}
        <div className="w-full flex text-white justify-between items-center my-2">
          <Link
            to={`/blog/blogdetail/${item.id}`}
            className="w-full flex justify-center items-center px-[3vw] py-2  text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-sm font-semibold cursor-pointer decoration-transparent"
          >
            Read More
          </Link>
          <FaBookmark
            onClick={() => handleRemFav(item.id)}
            className="text-[#2A2A2A] mx-2"
            size={35}
          />
        </div>
      </div>
    </div>
  );
};

export const AllFav = () => {
  const [allFavExp, setAllFavExp] = useState([]);
  const [allFavBlog, setAllFavBlog] = useState([]);
  const [allFavServ, setAllFavServ] = useState([]);

  const getCookieData = () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key.trim()] = value;
    });
    return jsonData;
  };

  const getFavServ = async () => {
    const jsonData = getCookieData();
    try {
      const res = await axios.get("/customers/connect/?action=3", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      setAllFavServ(json);
    } catch (error) {
      console.log(error);
    }
  };

  const getFavBlog = async () => {
    const jsonData = getCookieData();
    try {
      const res = await axios.get("/blogs/?action=5", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      setAllFavBlog(json);
    } catch (error) {
      console.log(error);
    }
  };

  const getFavExp = async () => {
    const jsonData = getCookieData();
    try {
      const res = await axios.get("/customers/connect/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      setAllFavExp(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavExp();
    getFavBlog();
    getFavServ();
  }, []);

  return (
    <div>
      {/* Favorite Experts */}
      <FavExperts />
      {/* Favorite Services */}
      <FavServices />
      {/* Favorite Blogs */}
      <FavBlogs />
    </div>
  );
};

export const FavExperts = () => {
  const [allFavExp, setAllFavExp] = useState([]);
  const getFavExp = async () => {
    const jsonData = getCookieData();
    try {
      const res = await axios.get("/customers/connect/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      setAllFavExp(json);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveFav = (id) => {
    setAllFavExp(allFavExp.filter((item) => item.id !== id));
  };
  useEffect(() => {
    getFavExp();
  }, []);

  return (
    <div className="mt-10">
      <div className="font-bold text-xl md:text-3xl">Experts</div>
      <div className="flex items-center overflow-x-scroll gap-5 mt-5">
        {allFavExp &&
          allFavExp?.map((item, index) => (
            <FavExpertCard
              key={index}
              item={item}
              handleRemoveFav={handleRemoveFav}
            />
          ))}
      </div>
      <Link to="/experts">
        <div className="text-center font-semibold text-gray-600 text-sm md:text-xl mt-10 flex gap-2 items-center justify-center">
          Go to experts <FaArrowRightLong />
        </div>
      </Link>
    </div>
  );
};

export const FavServices = () => {
  const [favServicesData, setFavServicesData] = useState([]);
  const getFavServData = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get("/customers/connect/?action=3", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      setFavServicesData(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFavServData();
  }, []);
  console.log(favServicesData);
  return (
    <div className="mt-10">
      <div className="font-bold text-xl md:text-3xl ">Services</div>
      <div className="flex items-center overflow-x-scroll gap-5 mt-5">
        {favServicesData.map((item, index) => (
          <FavServiceCard key={index} item={item} getFavServ={getFavServData} />
        ))}
      </div>
      <Link to="/services">
        <div className="text-center font-semibold text-gray-600 text-sm md:text-xl mt-10 flex gap-2 items-center justify-center">
          Go to services <FaArrowRightLong />
        </div>
      </Link>
    </div>
  );
};

export const FavBlogs = () => {
  const [favBlogs, setFavBlogs] = useState([]);
  const getFavBlogData = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get("/blogs/?action=5", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      setFavBlogs(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFavBlogData();
  }, []);
  console.log(favBlogs);
  return (
    <div className="mt-10">
      <div className="font-bold text-xl md:text-3xl ">Blogs</div>
      <div className="flex items-center overflow-x-scroll gap-5 mt-5">
        {favBlogs.map((item, index) => (
          <FavBlogsCard key={index} item={item} getFavBlog={getFavBlogData} />
        ))}
      </div>
      <Link to="/blog">
        <div className="text-center font-semibold text-gray-600 text-sm md:text-xl mt-10 flex gap-2 items-center justify-center">
          Go to blogs <FaArrowRightLong />
        </div>
      </Link>
    </div>
  );
};

const Favourites = () => {
  const [allFavExp, setAllFavExp] = useState([]);
  const getFavExp = async () => {
    const jsonData = getCookieData();
    try {
      const res = await axios.get("/customers/connect/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      setAllFavExp(json);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFavExp();
  }, []);
  const location = useLocation().pathname;
  console.log(location);
  return (
    <div className="mt-[90px] px-[7vw]">
      <div className="flex items-center justify-between">
        <div className="w-fit">
          <div className="text-3xl font-bold">Favourites</div>
          <div className="w-[70%] border border-solid border-slate-400"></div>
        </div>
      </div>
      <div className="mt-14 flex items-center overflow-x-scroll gap-10 md:gap-16 border-b border-solid border-slate-300 pb-8 drop-shadow-lg ">
        <div
          className={`${
            location === "/favourites" ? "text-black underline" : ""
          } text-xl md:text-2xl font-bold shrink-0`}
        >
          <Link className="text-gray-500 no-underline" to="/favourites">
            All
          </Link>
        </div>

        <div
          className={`${
            location === "/favourites/favexperts" ? "text-black underline" : ""
          } text-xl md:text-2xl font-bold shrink-0`}
        >
          <Link
            className="text-gray-500 no-underline"
            to="/favourites/favexperts"
          >
            Experts
          </Link>
        </div>

        <div
          className={`${
            location === "/favourites/favservices" ? "text-black underline" : ""
          } text-xl md:text-2xl font-bold shrink-0`}
        >
          <Link
            className="text-gray-500 no-underline"
            to="/favourites/favservices"
          >
            Services
          </Link>
        </div>

        <div
          className={`${
            location === "/favourites/favblogs" ? "text-black underline" : ""
          } text-xl md:text-2xl font-bold shrink-0`}
        >
          <Link
            className="text-gray-500 no-underline"
            to="/favourites/favblogs"
          >
            Blogs
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
