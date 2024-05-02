import React from "react";
import { expertDetailsObj } from "../constant";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { FaPlus, FaEdit, FaRegTrashAlt, FaTags } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation, Link, useNavigate } from "react-router-dom";
import axios from "../axios";

export const BlogCardHorizontal = ({
  index,
  id,
  title,
  date,
  tags,
  views,
  likes,
  image,
  getExpertAllBlogs,
  HandleTestimonials,
  HandleBlogs,
}) => {
  const navigate = useNavigate();
  const handleupdates = () => {
    HandleTestimonials();
    HandleBlogs();
    getExpertAllBlogs();
  };
  const handleDeleteBlogs = async (id) => {
    console.log(id);
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const response = await axios.post(
        "/blogs/",
        {
          action: 4,
          blog_id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(response);
      handleupdates();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className={`w-full px-3 py-4 my-6 rounded-md  ${
        index % 2 === 0
          ? `bg-[#ececec]`
          : `border border-[#c7c7c7] border-solid `
      }`}
    >
      <div className="flex items-center gap-3">
        <FaEdit
          className="text-xl shrink-0"
          onClick={() => navigate(`/blog/editblog/${id}`)}
        />

        <FaRegTrashAlt
          onClick={() => handleDeleteBlogs(id)}
          className="text-xl shrink-0"
        />
      </div>
      <div className="sm:flex justify-between gap-5">

      
      <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-5">
        <img
          className=" w-full h-48 object-cover sm:h-36 sm:w-40 rounded-md shrink-0 self-start"
          src={image}
          alt=""
        />
        <div className="text-[#575757]">
          <div className="text-base font-semibold line-clamp-2 text-ellipsis">
            {title}
          </div>
          <div className="text-sm text-[#898888]">{date}</div>
          <div className="mt-3 text-xs flex items-center gap-2">
            <FaTags />
            <div className="flex items-center flex-nowrap gap-2 shrink-0">
              {tags?.map((item) => (
                <div className="text-[10px] w-fit shrink-0 border border-solid border-slate-300 px-2 py-1 rounded-lg cursor-pointer">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </div>
              ))}
            </div>
          </div>
          <div className="flex gap-[3vw] sm:gap-0 sm:flex-col">
            <div className="mt-3 text-xs flex items-center gap-2">
              <IoEyeSharp /> {views}
            </div>
            <div className="mt-3 flex items-center gap-4">
              <div className=" text-xs flex items-center gap-1 sm:gap-2">
                <BiSolidLike /> {likes} likes{" "}
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
    </div>
  );
};

const ShowBlogs = ({
  HandleBlogs,
  HandleTestimonials,
  getExpertAllBlogs,
  blogArray,
}) => {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const location = useLocation().pathname;
  return (
    <div
      className={
        location === "/customerdashboard/showblogs" ? "w-full md:w-[68%]" : null
      }
    >
      {location === "/customerdashboard/showblogs" && (
        <div className="text-xl font-bold border-b border-solid border-slate-200 pb-3">
          My Blogs
        </div>
      )}
      {blogArray?.map((item, idx) => (
        <BlogCardHorizontal
          key={item?.id}
          index={idx}
          items={item}
          likes={item?.reaction_count}
          views={item?.blog_view_count}
          title={item?.title}
          tags={item?.tags}
          image={item?.images[0]}
          id={item?.id}
          date={formatDate(item.date_created.split("T")[0])}
          getExpertAllBlogs={getExpertAllBlogs}
          HandleBlogs={HandleBlogs}
          HandleTestimonials={HandleTestimonials}
        />
      ))}
    </div>
  );
};
export default ShowBlogs;
