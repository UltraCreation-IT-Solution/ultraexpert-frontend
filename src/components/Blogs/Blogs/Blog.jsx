import React, { useEffect, useState } from "react";
import {
  featuredBlogs,
  recentBlog,
  hotTopics,
  allBlogs,
} from "../../../constant";
import { BlogCardHorizontal } from "../../../subsitutes/ShowBlogs";
import { CiBookmark } from "react-icons/ci";
import { FaTags } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { RiArrowRightSLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { FaBookmark } from "react-icons/fa6";

import axios from "../../../axios";

export const BlogBody = ({ allBlogsArray }) => {
  console.log(allBlogsArray)
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const [favBlog, setFavBlog] = useState(false);
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
          Authorization: `Bearer ${jsonData.access_token}`,
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
          is_fav: blog.is_favorite,
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

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(blogsCategory);
  const [favoriteBlogs, setFavoriteBlogs] = useState([]);
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
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {/* Recent Blogs */}
      <div className="px-[8vw] md:px-[10vw] mt-[8vw] md:mt-[4vw]">
        <div className="text-xl lg:text-3xl font-extrabold ">Recent Blogs</div>
        <div className="mt-4 w-full h-auto flex gap-[2vw] overflow-scroll pb-4">
          {allBlogsArray.map((item) => {
            return (
              <div
                key={item?.id}
                className="shrink-0 w-[300px] md:w-[350px] rounded-md bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0"
              >
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
                  <div className="text-sm line-clamp-3 md:mb-[1vw]">
                    {item?.content}
                  </div>
                  <div className="w-full flex text-white justify-between items-center my-2">
                    <Link
                      to={"blogdetail/" + item?.id}
                      className="w-full flex justify-center items-center px-[3vw] py-2  text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-sm font-semibold cursor-pointer decoration-transparent"
                    >
                      Read More
                    </Link>
                    {localStorage.getItem("isExpert") === "true" ? (
                      <></>
                    ) : item?.is_favorite ? (
                      <FaBookmark onClick={()=>handleRemoveFavBlog(item.id)} className="text-black mx-2" size={35} />
                    ) : (
                      <CiBookmark
                        onClick={() => handleAddFavBlog(item.id)}
                        className="text-4xl xs:text-5xl text-black"
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Related to tech */}
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
                  {item.map((blog) => (
                    <div
                      key={blog.id}
                      className="shrink-0 w-[300px] md:w-[350px] rounded-md bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0"
                    >
                      <img
                        src={blog.images[0]} // Assuming images is an array and you want the first image
                        className="w-full h-[200px] object-cover  shrink-0 md:mb-[0.7vw]"
                        alt=""
                      />
                      <div className="px-[0.8vw] pt-2 md:pt-0">
                        <div className="flex justify-between font-semibold text-sm text-[#808080]">
                          <div>{blog.author_name}</div>
                          <div>{blog.date}</div>
                        </div>
                        <div className="font-bold text-base line-clamp-2 text-ellipsis my-2 mb-[0.2vw]">
                          {blog.title}
                        </div>
                        <div className="text-sm line-clamp-3 md:mb-[1vw]">
                          {blog.content}
                        </div>
                        <div className="w-full flex text-white justify-between items-center my-2">
                          {/* Link should point to the specific blog detail page */}
                          <Link
                            to={`/blogdetail/${blog.id}`}
                            className="w-full flex justify-center items-center px-[3vw] py-2  text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-sm font-semibold cursor-pointer decoration-transparent"
                          >
                            Read More
                          </Link>
                          {localStorage.getItem("isExpert") === "true" ? (
                            <></>
                          ) : blog.is_fav ? (
                            <FaBookmark  onClick={()=>handleRemoveFavBlog(blog.id)} className="text-black mx-2" size={35} />
                          ) : (
                            <CiBookmark
                              onClick={() => handleAddFavBlog(blog.id)}
                              className="text-4xl xs:text-5xl text-black"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
      </div>
      {/* Hot topics */}
      <div className="bg-[#F2F2F2] px-[2vw] py-[3vw] mt-20">
        <div className="text-xl lg:text-3xl font-bold mt-4 text-center ">
          Hot Topics
        </div>
        <div className="mt-6 md:mt-[3vw] flex items-center gap-[2vw] overflow-x-scroll">
          {hotTopics.map((temp, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center w-[150px] h-[200px] md:w-[280px] md:h-[300px] shrink-0 object-cover rounded-md "
            >
              <img
                src={temp.img}
                className="absolute top-0 left-0 w-full h-full brightness-[65%] "
              />
              <div className="text-white text-base md:text-2xl font-semibold z-20 break-words px-2">
                {temp?.topicName}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* All blogs */}
      <div>
        <div className="text-xl lg:text-3xl font-bold mt-16 text-center ">
          All Blogs
        </div>
        <div className="mt-6 lg:mt-10 px-[8vw] md:px-[10vw] flex flex-wrap justify-center gap-[2vw]">
          {allBlogsArray.length === 0 ? (
            <div>no blogs</div>
          ) : (
            allBlogsArray?.map((item, index) => (
              <BlogCard
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
      </div>
    </>
  );
};
export const SearchedBlog = ({ allBlogsArray }) => {
  console.log(allBlogsArray);

  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="mt-6 lg:mt-10 px-[8vw] md:px-[10vw] flex flex-wrap justify-center gap-[2vw]">
      {allBlogsArray?.map((item, index) => (
        <BlogCard
          key={item.id}
          index={index}
          id={item.id}
          items={item}
          title={item.title}
          tags={item.tags}
          image={item.images[0]}
          date={formatDate(item.date_created.split("T")[0])}
        />
      ))}
    </div>
  );
};
const Author = ({ createAuthor }) => {
  useEffect(() => {
    console.log("author");
  }, [localStorage.getItem("isAuthor")]);
  return localStorage.getItem("isAuthor") === "true" ? (
    <div className="w-[75%] h-auto flex justify-between bg-[#ECECEC] mx-auto mt-10 py-5 items-center">
      <div className="text-xl lg:text-3xl font-bold text-center px-5">
        Write a Blog
      </div>
      <Link
        to="createblog"
        className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] mx-5 text-xs md:text-base font-semibold rounded-sm cursor-pointer"
      >
        Write a Blog
      </Link>
    </div>
  ) : (
    <div className="w-[75%] h-auto flex justify-between bg-[#ECECEC] mx-auto mt-10 py-5 items-center">
      <div className="flex flex-col px-5">
        <div className="text-xl lg:text-3xl font-bold text-center">
          Become an Author
        </div>
        <div className="text-center text-sm">(If you want to write a blog)</div>
      </div>
      <button
        onClick={(e) => createAuthor(e)}
        className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] mx-5 text-xs md:text-base font-semibold rounded-sm cursor-pointer"
      >
        Become an Author
      </button>
    </div>
  );
};
export const BlogCard = ({
  index,
  id,
  title,
  date,
  tags,
  views,
  likes,
  image,
}) => {
  const navigate = useNavigate();
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
            className="text-base font-semibold line-clamp-2 text-ellipsis "
            onClick={() => navigate(`/blog/blogdetail/${id}`)}
          >
            {title}
          </div>
          <div className="text-sm text-[#898888]">{date}</div>
          <div className="mt-3 text-xs flex items-center gap-2">
            <FaTags />
            <div className="flex items-center flex-wrap gap-2">
              {tags?.map((item, index) => (
                <div
                  key={index}
                  className="text-[10px] shrink-0 border border-solid border-slate-300 px-2 py-1 rounded-xl cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-[3vw] sm:gap-0 sm:flex-col">
            <div className="mt-3 text-xs flex items-center gap-2">
              <IoEyeSharp /> {views > 0 ? views : "no views"}
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div className=" text-xs flex items-center gap-1 sm:gap-2">
                <BiSolidLike /> {likes > 0 ? likes + "likes" : "no likes"}
              </div>
              <div className="border border-solid border-slate-400 text-[10px] rounded-full px-3 py-0.5 flex items-center cursor-pointer gap-1">
                <FaPlus /> Add to Fav
              </div>
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
  const [searchText, setSearchText] = useState("");
  const [allBlogsArray, setAllBlogsArray] = useState([]);
  const [filterAllBlogsArray, setFilterAllBlogsArray] = useState([]);
  const [featuredBlogsArray, setFeaturedBlogsArray] = useState([]);
  const SearchBlogs = (e) => {
    setSearchText(e.target.value);
    setFilterAllBlogsArray(
      allBlogsArray.filter((item) =>
        item?.tags?.some((item2) =>
          item2?.toLowerCase()?.includes(searchText.toLowerCase())
        )
      )
    );
    console.log(allBlogsArray);
  };

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
          Authorization: `Bearer ${jsonData.access_token}`,
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
    try {
      const res = await axios.get("/blogs/?action=1", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const allData = res.data.data.all;
      console.log(res.data);
      setAllBlogsArray(allData);
      console.log(allBlogsArray);
      setFilterAllBlogsArray(allData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getBlogArray();
  }, []);
  //api call for all blogs
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
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
      <div className="mt-8 px-[8vw] text-center">
        <input
          type="text"
          placeholder="Search for the blog...."
          value={searchText}
          onChange={(e) => SearchBlogs(e)}
          className="bg-[#ECECEC] w-[70%] p-3 outline-none rounded-md text-base"
        />
      </div>
      {localStorage.getItem("isExpert") === "true" ? (
        <Author createAuthor={createAuthor} />
      ) : null}

      {searchText.length === 0 ? (
        <BlogBody allBlogsArray={allBlogsArray} />
      ) : (
        <SearchedBlog allBlogsArray={filterAllBlogsArray} />
      )}
    </div>
  );
};
export default Blogs;
