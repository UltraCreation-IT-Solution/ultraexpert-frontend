import React, { useEffect, useState } from "react";
import { CiBookmark } from "react-icons/ci";
import {
  FaTags,
  FaForward,
  FaBackward,
  FaRegComment,
  FaMinus,
  FaSearch,
} from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../../../subsitutes/Pagination";
import { FaBookmark } from "react-icons/fa6";
import axios from "../../../axios";
import HorizontalCardShimmer from "../../../subsitutes/Shimmers/HorizontalCardShimmer";

export const BlogCard = ({ item }) => {
  const [favBlog, setFavBlog] = useState(item.is_favorite || false);
  const navigate = useNavigate();
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const handleAddFavBlog = async (id) => {
    console.log(id);
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
          action: 6,
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
      setFavBlog(true);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  const handleRemoveFavBlog = async (id) => {
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
      setFavBlog(false);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="shrink-0 w-[300px] md:w-[350px] rounded-md bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0">
      <img
        src={item?.images[0]}
        className="w-full h-[200px] object-cover shrink-0 md:mb-[0.7vw]"
        alt=""
      />
      <div className="px-[0.8vw] pt-2 md:pt-0">
        <div className="flex justify-between font-semibold text-sm text-[#808080]">
          <div>{item?.author_name}</div>
          <div>{formatDate(item?.updated_on)}</div>
        </div>
        <div className="font-bold text-base line-clamp-2 text-ellipsis my-2 mb-[0.2vw]">
          {item?.title}
        </div>
        <div className="text-sm line-clamp-3 md:mb-[1vw]">{item?.content}</div>
        <div className="w-full flex text-white justify-between items-center my-2">
          <Link
            to={"blogdetail/" + item?.id}
            className="w-full flex justify-center items-center px-[3vw] py-2  text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-sm font-semibold cursor-pointer decoration-transparent"
          >
            Read More
          </Link>
          {localStorage.getItem("isExpert") === "true" ? (
            <></>
          ) : favBlog ? (
            <FaBookmark
              onClick={() => handleRemoveFavBlog(item.id)}
              className="text-black mx-2"
              size={35}
            />
          ) : (
            <CiBookmark
              onClick={() =>
                localStorage.getItem("username")
                  ? handleAddFavBlog(item.id)
                  : navigate("/login")
              }
              className="text-4xl xs:text-5xl text-black"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export const BlogBody = ({ allBlogsArray, shimmer, itemsPerPage }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const [blogsCategory, setBlogsCategory] = useState([]);
  const fetchBlogs = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get("/blogs/?action=1", {
        headers: {
          "Content-Type": "application/json",
          // Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data.data;
      const categorizedBlogs = {};
      for (const category in json) {
        categorizedBlogs[category] = json[category].map((blog) => ({
          id: blog.id,
          title: blog.title,
          author_name: blog.author_name,
          content: blog.content,
          images: blog.images,
          is_favorite: blog.is_favorite,
          views: blog.blog_view_count,
          comments: blog.comment_count,
          reactions: blog.reaction_count,
          date: blog.date_created,
        }));
      }
      setBlogsCategory(Object.entries(categorizedBlogs));
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBlogsByToken = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get("/blogs/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data.data;
      console.log(json);
      const categorizedBlogs = {};
      for (const category in json) {
        categorizedBlogs[category] = json[category].map((blog) => ({
          id: blog.id,
          title: blog.title,
          author_name: blog.author_name,
          content: blog.content,
          images: blog.images,
          is_favorite: blog.is_favorite,
          views: blog.blog_view_count,
          comments: blog.comment_count,
          reactions: blog.reaction_count,
          updated_on: blog.updated_on,
        }));
      }
      setBlogsCategory(Object.entries(categorizedBlogs));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.getItem("username") ? fetchBlogsByToken() : fetchBlogs();
  }, []);

  console.log(blogsCategory);
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);
  return (
    <>
      {/* Recent Blogs */}
      {!shimmer && (
        <div className="px-[8vw] md:px-[10vw] mt-[8vw] md:mt-[4vw]">
          <div className="text-xl lg:text-3xl font-extrabold ">
            Recent Blogs
          </div>
          <div className="mt-4 w-full h-auto flex gap-[2vw] overflow-scroll pb-4">
            {allBlogsArray.map((item) => {
              return <BlogCard key={item.id} item={item} />;
            })}
          </div>
        </div>
      )}

      {/* blogs category wise */}
      <div className="px-[8vw] md:px-[10vw] mt-[8vw] md:mt-[4vw]">
        {blogsCategory
          .filter(([category]) => category !== "all")
          .map(([category, item]) => (
            <>
              <div className="text-xl lg:text-3xl font-extrabold ">
                Related to {category}
              </div>
              <div className="mt-4 w-full h-auto flex gap-[1.5vw] overflow-scroll pb-4">
                <div className="mt-4 w-full h-auto flex gap-[1.5vw] overflow-scroll pb-4">
                  {item.map((item) => (
                    <BlogCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            </>
          ))}
      </div>
      {/* blogs category wise */}

      {/* Hot topics */}
      <div className="bg-[#F2F2F2] px-[2vw] py-[3vw] mt-20">
        {/* <div className="text-xl lg:text-3xl font-bold mt-4 text-center ">
          Hot Topics
        </div> */}
        <div className="mt-6 md:mt-[3vw] flex items-center gap-[2vw] overflow-x-scroll">
          {/* {hotTopics.map((temp, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center w-[150px] h-[200px] md:w-[280px] md:h-[300px] shrink-0 object-cover rounded-md cursor-pointer"
              onClick={() => getBlogsBySearch(temp?.topicName)}
            >
              <img
                src={temp.img}
                className="absolute top-0 left-0 w-full h-full brightness-[65%] "
              />
              <div className="text-white text-base md:text-2xl font-semibold z-20 break-words px-2">
                {temp?.topicName}
              </div>
            </div>
          ))} */}
        </div>
      </div>
      {/* All blogs */}

      <div>
        <div className="text-xl lg:text-3xl font-bold mt-16 text-center ">
          All Blogs
        </div>
        {shimmer === true ? (
          <div className="mt-6 lg:mt-10 px-[8vw] md:px-[10vw] flex flex-wrap justify-center gap-[2vw]">
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <HorizontalCardShimmer key={index} />
            ))}
          </div>
        ) : (
          <div className="mt-6 px-[8vw] md:px-[10vw] flex flex-wrap justify-center gap-[2vw]">
            {allBlogsArray.length === 0 ? (
              <div className="text-center font-bold text-lg md:text-2xl text-gray-600 my-10 md:my-15">
                Currently no blogs available
              </div>
            ) : (
              allBlogsArray?.map((item, index) => (
                <BlogCardHorizontal
                  key={item.id}
                  index={index}
                  id={item.id}
                  items={item}
                  title={item.title}
                  tags={item.tags}
                  image={item.images[0]}
                  date={formatDate(item.date_created.split("T")[0])}
                />
              ))
            )}
          </div>
        )}
      </div>
    </>
  );
};
export const SearchedBlog = ({ searchedBlogs }) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="mt-6 lg:mt-10 px-[8vw] md:px-[10vw] flex flex-wrap justify-center gap-[2vw]">
      {searchedBlogs.length === 0 ? (
        <div className="text-center font-bold text-lg md:text-2xl text-gray-600 my-10 md:my-15">
          No blogs found
        </div>
      ) : (
        searchedBlogs?.map((item, index) => (
          <BlogCardHorizontal
            key={item.id}
            index={index}
            id={item.id}
            items={item}
            title={item.title}
            tags={item.tags}
            image={item.images[0]}
            date={formatDate(item.date_created.split("T")[0])}
          />
        ))
      )}
    </div>
  );
};
const Author = ({ createAuthor }) => {
  useEffect(() => {
    console.log("author");
  }, [localStorage.getItem("isAuthor")]);
  return localStorage.getItem("isAuthor") === "true" ? (
    <div className=" shrink-0 px-5 py-2 text-white bg-[#2A2A2A] text-xs sm:text-sm md:text-base font-semibold rounded-sm cursor-pointer w-fit">
      <Link to="createblog" className="text-white">
        Write a Blog
      </Link>
    </div>
  ) : (
    <div
      className="shrink-0 px-5 py-2 bg-[#2A2A2A] text-white text-xs sm:text-sm md:text-base font-semibold rounded-sm cursor-pointer w-fit"
      onClick={(e) => createAuthor(e)}
    >
      Become an Author
    </div>
  );
};
export const BlogCardHorizontal = ({
  items,
  index,
  id,
  title,
  date,
  tags,
  views,
  likes,
  image,
}) => {
  const [favBlog, setFavBlog] = useState(items?.is_favorite || false);
  const navigate = useNavigate();
  const addFav = async (id) => {
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
          action: 6,
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
      console.log(json);
      setFavBlog(true);
    } catch (error) {
      console.log(error);
    }
  };
  const remFav = async (id) => {
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
      console.log(json);
      setFavBlog(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`w-full px-3 py-4 my-6 rounded-md sm:flex justify-between gap-5  ${
        index % 2 === 0
          ? `bg-[#ececec]`
          : `border border-[#c7c7c7] border-solid `
      }`}
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <img
          className=" w-full h-48 object-cover sm:h-36 sm:w-40 rounded-md shrink-0 self-start"
          src={image}
          alt=""
        />
        <div className="text-[#575757]">
          <div
            className="text-base font-semibold line-clamp-2 text-ellipsis cursor-pointer"
            onClick={() => navigate(`/blog/blogdetail/${id}`)}
          >
            {title}
          </div>
          <div className="text-sm text-[#898888]">{date}</div>
          <div className="mt-3 text-xs flex items-center gap-2">
            <FaTags />
            <div className="flex items-center flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <div
                  key={index}
                  className="text-[10px] shrink-0 border border-solid border-slate-300 px-2 py-1 rounded-xl cursor-pointer"
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-[3vw] sm:gap-0 sm:flex-col">
            <div className="mt-3 text-xs flex items-center gap-2">
              <IoEyeSharp />{" "}
              {items?.blog_view_count > 0 ? items?.blog_view_count : "no views"}
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div className=" text-xs flex items-center gap-1 sm:gap-2">
                <FaRegComment />{" "}
                {items?.comment_count > 0
                  ? items?.comment_count + " comments"
                  : "no comments"}
              </div>
              {localStorage.getItem("isExpert") === "true" ? (
                <></>
              ) : (
                <div className="border border-solid border-slate-400 text-[10px] rounded-full px-3 py-0.5 flex items-center cursor-pointer gap-1">
                  {favBlog ? (
                    <div
                      className="flex gap-2 items-center"
                      onClick={() => remFav(id)}
                    >
                      <FaMinus />
                      Remove from Fav
                    </div>
                  ) : (
                    <div
                      className="flex gap-2 items-center"
                      onClick={() =>
                        localStorage.getItem("username")
                          ? addFav(id)
                          : navigate("/login")
                      }
                    >
                      <FaPlus /> Add to Fav
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden border border-solid border-slate-300 h-fit sm:flex items-center justify-center rounded-full text-4xl font-thin self-center shrink-0 cursor-pointer">
        <RiArrowRightSLine onClick={() => navigate(`/blog/blogdetail/${id}`)} />
      </div>
    </div>
  );
};

const Blogs = () => {
  const [shimmer, setShimmer] = useState(false);
  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [lastPage, setLastPage] = useState(0);
  // for pagination

  const [allBlogsArray, setAllBlogsArray] = useState([]);
  const [featuredBlogsArray, setFeaturedBlogsArray] = useState([]);

  //search for blogs
  const [searchedBlogs, setSearchedBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchedBlogs, setShowSearchedBlogs] = useState(false);

  //api call for all Featured blogs
  const getFeaturedBlogs = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get("/topfive/?action=4", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const allData = res.data.data;
      setFeaturedBlogsArray(allData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getFeaturedBlogs();
  }, []);
  //api call for all Featured blogs

  const cookies = document.cookie.split("; ");
  const jsonData = {};
  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });

  const [author, setAuthor] = useState({
    first_name: "",
    last_name: "",
    gender: "",
    profession: "",
    about_me: "",
  });

  const getData = async () => {
    console.log(localStorage.getItem("isExpert"));
    if (localStorage.getItem("isExpert") === "true") {
      try {
        const res = await axios.get("/experts/?action=1", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        });
        const allData = res.data.data;
        setAuthor({
          ...author,
          first_name: allData.first_name,
          last_name: allData.last_name,
          gender: allData.gender,
          profession: allData.profession,
          about_me: allData.about_me,
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.get("/customers/?action=1", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        });
        const allData = res.data.data;
        setAuthor({
          ...author,
          first_name: allData.first_name,
          last_name: allData.last_name,
          gender: allData.gender,
          profession: allData.profession,
          about_me: allData.about_me,
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (localStorage.getItem("isAuthor") === "true") {
      setIsAuthor(true);
    }
    getData();
  }, []);

  const [isAuthor, setIsAuthor] = useState(false);
  const [categoryBlogs, setCategoryBlogs] = useState({});

  const createAuthor = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "/blogs/author/",
        {
          action: 1,
          first_name: author.first_name,
          last_name: author.last_name,
          gender: author.gender,
          profession: author.profession,
          about_me: author.about_me,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      const data = response.data;
      console.log(data);
      setIsAuthor(true);
      localStorage.setItem("isAuthor", true);
    } catch (error) {
      console.log(error);
    }
  };
  //api call for all blogs
  const getBlogArray = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    setSearchedBlogs([]);
    setShimmer(true);
    try {
      const res = await axios.get(
        `/blogs/?action=1&page=${currentPage}&records_number=${itemsPerPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );

      if (
        !res.data ||
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 404
      ) {
        setShimmer(false);
        return;
      }
      setLastPage(res.data.total_pages);
      const allData = res.data.data.all;
      console.log(res.data);
      setAllBlogsArray(allData);
      setShimmer(false);
    } catch (error) {
      console.log(error);
      setShimmer(false);
    }
  };

  const getBlogArrayByToken = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    setSearchedBlogs([]);
    setShimmer(true);
    try {
      const res = await axios.get(
        `/blogs/?action=1&page=${currentPage}&records_number=${itemsPerPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );

      if (
        !res.data ||
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 404
      ) {
        setShimmer(false);
        return;
      }
      setLastPage(res.data.total_pages);
      const allData = res.data.data.all;
      console.log(res.data.data);
      setAllBlogsArray(allData);
      setShimmer(false);
    } catch (error) {
      console.log(error);
      setShimmer(false);
    }
  };
  useEffect(() => {
    !showSearchedBlogs
      ? localStorage.getItem("username")
        ? getBlogArrayByToken()
        : getBlogArray()
      : getBlogsBySearch(searchQuery);
  }, [currentPage]);

  //api call for all blogs
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  const getBlogsBySearch = async (searchQuery) => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    setSearchedBlogs([]);
    setShimmer(true);
    if (searchQuery === "") {
      setShimmer(false);
      setShowSearchedBlogs(false);
      return;
    }
    try {
      const res = await axios.get(
        `/blogs/?action=8&query=${searchQuery}&page=${currentPage}&page_size=${itemsPerPage} `,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (
        !res.data ||
        res.data.status === 400 ||
        res.data.status === 401 ||
        res.data.status === 404
      ) {
        return;
      }
      console.log(res);
      const data = res.data;
      setShowSearchedBlogs(true);
      setSearchedBlogs(data.data);
      setLastPage(data.pagination.total_pages);
    } catch (error) {
      console.log(error);
    }
    setShimmer(false);
    setShowSearchedBlogs(true);
  };
  return (
    <div className="mt-[90px]">
      {/* Featured Blogs */}
      <div className=" flex overflow-x-auto bg-slate-100">
        {featuredBlogsArray.map((item) => (
          <div
            key={item?.blog_id}
            className={`px-3 relative text-white w-[250px] h-[300px] md:w-[450px] md:h-[500px] shrink-0 flex flex-col items-center justify-center border-[0.1vw] border-solid border-[#bbbbbb]`}
          >
            <img
              className="absolute left-0 top-0 w-full h-full object-cover object-center brightness-50"
              src={item?.blog_images[0]}
              alt=""
            />
            <div className="text-xs md:text-base absolute top-2 left-2">
              Featured
            </div>
            <div className="z-30 text-center">
              <div className="text-base md:text-2xl font-bold text-balance line-clamp-2">
                {item?.title}
              </div>
              <div className="my-2 md:my-4 text-xs md:text-base">
                {item?.author?.name} | {formatDate(item?.updated_on)}
              </div>
              <Link to={`blogdetail/${item?.blog_id}`}>
                <button className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs md:text-base font-semibold cursor-pointer">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="my-10 flex flex-col sm:flex-row justify-center sm:justify-between sm:items-center gap-5 sm:gap-10 sm:h-14 px-[8vw] md:px-[10vw]">
        {localStorage.getItem("isExpert") === "true" ? (
          <Author createAuthor={createAuthor} />
        ) : null}
        <div className="flex items-center w-[50rem] h-full">
          <input
            className="h-full w-[80vw] sm:w-[66vw] md:w-[60vw] bg-[#ECECEC] rounded-r-none rounded-md pl-3 sm:pl-6 py-2 xs:text-sm sm:text-base md:text-lg outline-none"
            type="text"
            placeholder="Search for any blog"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              (getBlogsBySearch(searchQuery), setCurrentPage(1))
            }
          />
          <div
            className="h-full w-[6vw] py-2 bg-[#ECECEC] hover:bg-[#e4e1e1] transition-all xs:text-sm sm:text-base md:text-lg rounded-l-none rounded-md flex justify-center items-center"
            onClick={() => (getBlogsBySearch(searchQuery), setCurrentPage(1))}
          >
            <FaSearch />
          </div>
        </div>
      </div>
      {showSearchedBlogs === true ? (
        shimmer ? (
          <div className="w-full space-y-4 px-[8vw] md:px-[10vw]">
            {Array.from({ length: itemsPerPage }).map((_, index) => (
              <HorizontalCardShimmer key={index} />
            ))}
          </div>
        ) : (
          <>
            <div
              className="text-lg sm:text-xl font-semibold text-red-500 mt-10 md:mt-15 cursor-pointer flex gap-2 items-center px-[7vw] md:px-[10vw] no-underline ml-2 hover:ml-0 hover:gap-3 hover:underline transition-all w-fit"
              onClick={() => (
                setShowSearchedBlogs(false),
                setSearchedBlogs([]),
                getBlogArray(),
                setSearchQuery(""),
                setCurrentPage(1)
              )}
            >
              <IoMdArrowRoundBack />
              Back
            </div>
            <SearchedBlog searchedBlogs={searchedBlogs}  />
          </>
        )
      ) : (
        <BlogBody
          allBlogsArray={allBlogsArray}
          shimmer={shimmer}
          itemsPerPage={itemsPerPage}
        />
      )}
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
  );
};
export default Blogs;
