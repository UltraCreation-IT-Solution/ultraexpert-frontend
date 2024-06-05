import React, { useState } from "react";
import { expertDetailsObj } from "../constant";
import { IoEyeSharp } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { FaPlus, FaEdit, FaRegTrashAlt, FaTags, FaMinus } from "react-icons/fa";
import { RiArrowRightSLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../axios";

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
    setLoading(true);
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
      setLoading(false);
      handleupdates();
      setIsDeleting(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsDeleting(false);
    }
  };

  const [isDeleting, setIsDeleting] = useState(false);
  const [loading, setLoading] = useState(false);

  return isDeleting ? (
    <div className="absolute">
      <div className="fixed z-50 bg-gray-300 bg-opacity-75 px-4 md:px-8 w-full inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-md shadow-lg rounded-sm bg-white p-6 md:p-8">
          <div className="text-center text-xl font-bold mb-6">
            Are you sure?
          </div>
          <div className="text-gray-600 mb-6 text-center">
            Do you want to delete this blog?
          </div>
          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              className="inline-flex items-center px-4 py-2 bg-white text-black rounded-sm border border-solid border-black"
              onClick={() => setIsDeleting(false)}
            >
              No
            </button>
            <button
              type="button"
              className={
                loading
                  ? `inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-sm`
                  : `inline-flex items-center px-4 py-2 btnBlack text-white rounded-sm`
              }
              onClick={() => handleDeleteBlogs(id)}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`w-full px-3 py-4 my-6 rounded-md  ${
        index % 2 === 0
          ? `bg-[#ececec]`
          : `border border-[#c7c7c7] border-solid `
      }`}
    >
      <div className="flex items-center gap-3">
        <FaEdit
          title="Edit"
          className="text-xl shrink-0 text-black"
          onClick={() => navigate(`/blog/editblog/${id}`)}
        />

        <FaRegTrashAlt
          title="Delete"
          onClick={() => setIsDeleting(true)}
          className="text-xl shrink-0 text-black"
        />
      </div>
      <div className="sm:flex justify-between gap-5">
        <div className="mt-3 flex flex-col sm:flex-row sm:items-center gap-5">
          <img
            className=" w-full h-48 object-cover sm:h-36 sm:w-40 rounded-md shrink-0 self-start"
            src={items.images}
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
                {localStorage.getItem("isExpert") ? (
                  <></>
                ) : items.is_favorite ? (
                  <div className="border border-solid border-slate-400 text-[10px] rounded-full px-3 py-0.5 flex items-center cursor-pointer gap-1">
                    <FaMinus /> Added to Fav
                  </div>
                ) : (
                  <div className="border border-solid border-slate-400 text-[10px] rounded-full px-3 py-0.5 flex items-center cursor-pointer gap-1">
                    <FaPlus /> Add to Fav
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden border border-solid border-slate-300 h-fit sm:flex items-center justify-center rounded-full text-4xl font-thin self-center shrink-0 cursor-pointer">
          <RiArrowRightSLine
            onClick={() => navigate(`/blog/blogdetail/${id}`)}
          />
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
      {blogArray?.length === 0 && (
        <div className="text-lg sm:text-2xl font-semibold sm:font-bold text-center my-10 text-gray-600 ">
          No blogs found
        </div>
      )}
      {blogArray?.length > 0 &&
        blogArray?.map((item, idx) => (
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
