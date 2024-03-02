import React, { useState } from "react";
import { featuredBlogs, recentBlog, hotTopics, allBlogs } from "../../../constant";
import { searchCategories } from "../../../constant";
import { FaSearch } from "react-icons/fa";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";


export const BlogBody = () => {
  return(
    <>
    {/* Recent Blogs */}
      <div className="px-[8vw] md:px-[10vw] pt-[4vw]">
        <div className="text-3xl font-extrabold ">Recent Blogs</div>
        <div className="mt-4 w-full h-auto flex gap-[1.5vw] overflow-scroll">
          {recentBlog.map((item, index) => {
            return (
              <div
                key={index}
                className=" shrink-0 w-full h-[68vw] xs:w-[40vw] xs:h-[52vw] md:w-[24vw] md:h-[30vw] rounded-sm bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg mb-[4.5vw] xs:mb-[3vw] md:mb-0"
              >
                <img
                  src={item.image}
                  className="w-full h-[65%] xs:h-1/2 mb-[1vw] md:mb-[0.7vw]"
                  alt=""
                />
                <div className="px-[0.8vw]">
                  <div className="flex mb-[1.5vw] justify-between font-semibold text-[2.4vw] xs:text-[2vw] md:text-[1.15vw] text-[#808080]">
                    <div>{item.name}</div>
                    <div>{item.date}</div>
                  </div>
                  <div className="font-bold text-[2.15vw]  xs:text-[1.85vw] md:text-[1.05vw] mb-[0.2vw]">
                    {item.head}
                  </div>
                  <div className="text-[2vw] xs:text-[1.75vw] md:text-[0.9vw] mb-[1.6vw] md:mb-[1vw]">
                    {item.detail}
                  </div>
                  <div className="w-full flex  text-white justify-between items-center">
                    <Link
                      to={"blogdetail"}
                      className="w-[92%] xs:w-[90%] flex justify-center items-center text-white bg-black text-center py-[1.2vw] xs:py-[1vw] md:py-[0.5vw] font-semibold rounded-sm text-[2.25vw] xs:text-[2vw] md:text-[1.12vw] decoration-transparent"
                    >
                      Read More
                    </Link>
                    <CiBookmark className="w-[5vw] h-[4.5vw] xs:w-[4.5vw] xs:h-[4vw] md:w-[3.5vw] md:h-[3vw] text-black" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    {/* Related to tech */}
    <div className="px-[8vw] md:px-[10vw] pt-[4vw]">
        <div className="text-3xl font-extrabold ">Related to tech</div>
        <div className="mt-4 w-full h-auto flex gap-[1.5vw] overflow-scroll">
          {recentBlog.map((item, index) => {
            return (
              <div
                key={index}
                className=" shrink-0 w-full h-[68vw] xs:w-[40vw] xs:h-[52vw] md:w-[24vw] md:h-[30vw] rounded-sm bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg mb-[4.5vw] xs:mb-[3vw] md:mb-0"
              >
                <img
                  src={item.image}
                  className="w-full h-[65%] xs:h-1/2 mb-[1vw] md:mb-[0.7vw]"
                  alt=""
                />
                <div className="px-[0.8vw]">
                  <div className="flex mb-[1.5vw] justify-between font-semibold text-[2.4vw] xs:text-[2vw] md:text-[1.15vw] text-[#808080]">
                    <div>{item.name}</div>
                    <div>{item.date}</div>
                  </div>
                  <div className="font-bold text-[2.15vw]  xs:text-[1.85vw] md:text-[1.05vw] mb-[0.2vw]">
                    {item.head}
                  </div>
                  <div className="text-[2vw] xs:text-[1.75vw] md:text-[0.9vw] mb-[1.6vw] md:mb-[1vw]">
                    {item.detail}
                  </div>
                  <div className="w-full flex  text-white justify-between items-center">
                    <Link
                      to={"blogdetail"}
                      className="w-[92%] xs:w-[90%] flex justify-center items-center text-white bg-black text-center py-[1.2vw] xs:py-[1vw] md:py-[0.5vw] font-semibold rounded-sm text-[2.25vw] xs:text-[2vw] md:text-[1.12vw] decoration-transparent"
                    >
                      Read More
                    </Link>
                    <CiBookmark className="w-[5vw] h-[4.5vw] xs:w-[4.5vw] xs:h-[4vw] md:w-[3.5vw] md:h-[3vw] text-black" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Hot topics */}
      <div className="bg-[#F2F2F2] px-[2vw] py-[3vw] mt-20">
        <div className="text-4xl font-bold mt-4 text-center">Hot Topics</div>
        <div className="mt-[3vw] flex items-center gap-[2vw] overflow-x-scroll">
          {hotTopics.map((temp) => (
            <div className="relative flex items-center justify-center w-[20vw] h-[25vw] shrink-0 object-cover rounded-md ">
              <img
                src={temp.img}
                className="absolute top-0 left-0 w-full h-full brightness-[65%] "
              />
              <div className="text-white text-2xl font-semibold z-20">{temp?.topicName}</div>
            </div>
          ))}
        </div>
      </div>
      {/* All blogs */}
      <div>
      <div className="text-4xl font-bold mt-16 text-center ">All Blogs</div>
      <div className="mt-10 flex px-[6vw] flex-wrap justify-center gap-[2vw]">
        {allBlogs.map((temp,index) => 
          <div
          key={index}
          className=" shrink-0 w-full h-[68vw] xs:w-[40vw] xs:h-[52vw] md:w-[24vw] md:h-[30vw] rounded-sm bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg mb-[4.5vw] xs:mb-[3vw] md:mb-0"
        >
          <img
            src={temp?.image}
            className="w-full h-[65%] xs:h-1/2 mb-[1vw] md:mb-[0.7vw]"
            alt=""
          />
          <div className="px-[0.8vw]">
            <div className="flex mb-[1.5vw] justify-between font-semibold text-[2.4vw] xs:text-[2vw] md:text-[1.15vw] text-[#808080]">
              <div>{temp?.name}</div>
              <div>{temp?.date}</div>
            </div>
            <div className="font-bold text-[2.15vw]  xs:text-[1.85vw] md:text-[1.05vw] mb-[0.2vw]">
              {temp?.head}
            </div>
            <div className="text-[2vw] xs:text-[1.75vw] md:text-[0.9vw] mb-[1.6vw] md:mb-[1vw]">
              {temp?.detail}
            </div>
            <div className="w-full flex  text-white justify-between items-center">
              <Link
                to={"blogdetail"}
                className="w-[92%] xs:w-[90%] flex justify-center items-center text-white bg-black text-center py-[1.2vw] xs:py-[1vw] md:py-[0.5vw] font-semibold rounded-sm text-[2.25vw] xs:text-[2vw] md:text-[1.12vw] decoration-transparent"
              >
                Read More
              </Link>
              <CiBookmark className="w-[5vw] h-[4.5vw] xs:w-[4.5vw] xs:h-[4vw] md:w-[3.5vw] md:h-[3vw] text-black" />
            </div>
          </div>
        </div>
        )}
      </div>
      </div>

    </>
  )
};
export const SearchedBlog = ({array}) => {
  console.log(array)
  return(
    <div className="mt-10 flex flex-wrap justify-center gap-[2vw]">
      {array.map((temp,index)=>{return <div
        key={index}
        className=" shrink-0 w-full h-[68vw] xs:w-[40vw] xs:h-[52vw] md:w-[24vw] md:h-[30vw] rounded-sm bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg mb-[4.5vw] xs:mb-[3vw] md:mb-0"
      >
        <img
          src={temp.image}
          className="w-full h-[65%] xs:h-1/2 mb-[1vw] md:mb-[0.7vw]"
          alt=""
        />
        <div className="px-[0.8vw]">
          <div className="flex mb-[1.5vw] justify-between font-semibold text-[2.4vw] xs:text-[2vw] md:text-[1.15vw] text-[#808080]">
            <div>{temp.name}</div>
            <div>{temp.date}</div>
          </div>
          <div className="font-bold text-[2.15vw]  xs:text-[1.85vw] md:text-[1.05vw] mb-[0.2vw]">
            {temp.head}
          </div>
          <div className="text-[2vw] xs:text-[1.75vw] md:text-[0.9vw] mb-[1.6vw] md:mb-[1vw]">
            {temp.detail}
          </div>
          <div className="w-full flex  text-white justify-between items-center">
            <Link
              to={"blogdetail"}
              className="w-[92%] xs:w-[90%] flex justify-center items-center text-white bg-black text-center py-[1.2vw] xs:py-[1vw] md:py-[0.5vw] font-semibold rounded-sm text-[2.25vw] xs:text-[2vw] md:text-[1.12vw] decoration-transparent"
            >
              Read More
            </Link>
            <CiBookmark className="w-[5vw] h-[4.5vw] xs:w-[4.5vw] xs:h-[4vw] md:w-[3.5vw] md:h-[3vw] text-black" />
          </div>
        </div>
      </div>
      })}
      
    </div>
  )
};

const Blogs = () => {
  const [searchText,setSearchText]= useState("");
  const [blogArray,setBlogArray]= useState(allBlogs);
  const SearchBlogs=(e)=>{
    setSearchText(e.target.value);
    // console.log(searchText)
    // setBlogArray(allBlogs.filter((item)=>item.tags.map((item2)=>console.log(item2))));
    setBlogArray(allBlogs.map((item)=> item?.tags?.filter((item2)=>item2?.toLowerCase()?.includes(searchText.toLowerCase()))));
    console.log(blogArray)
  }
  return (
    <div className="mt-[90px]">
      <div className="px-[8vw] text-center">
        <input type="text" placeholder="Search for the blog...." value={searchText} onChange={(e)=>SearchBlogs(e)} className="bg-[#ECECEC] w-[70%] p-3 outline-none rounded-md text-base" />
      </div>
      {/* Featured Blogs */}
      <div className="mt-8 flex overflow-x-auto bg-slate-100">
        {featuredBlogs.map((temp) => (
          <div
            className={`relative text-white w-[30vw] h-[35vw] shrink-0 flex flex-col items-center justify-center border-[0.1vw] border-solid border-[#bbbbbb]`}
          >
            <img
              className="absolute left-0 top-0 w-full h-full object-cover brightness-75"
              src={temp.img}
              alt=""
            />
            <div className="text-base absolute top-2 left-2">Featured</div>
            <div className="z-30 text-center">
              <div className=" text-3xl font-bold text-balance">{temp?.title}</div>
              <div className="my-5 text-base">
                {temp?.author} | {temp?.date}
              </div>
              <button className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-base font-semibold cursor-pointer">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
      {searchText.length===0 ? <BlogBody/> : <SearchedBlog array={blogArray}/>}
    </div>
  );
};
export default Blogs;
