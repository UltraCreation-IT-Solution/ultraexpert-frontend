import React, { useEffect, useState } from "react";
import {
  featuredBlogs,
  recentBlog,
  hotTopics,
  allBlogs,
  BlogCardHorizontal,
} from "../../../constant";
import { CiBookmark } from "react-icons/ci";
import { Link } from "react-router-dom";
import axios from "../../../axios";

export const BlogBody = () => {
  return (
    <>
      {/* Recent Blogs */}
      <div className="px-[8vw] md:px-[10vw] mt-[8vw] md:mt-[4vw]">
        <div className="text-xl lg:text-3xl font-extrabold ">Recent Blogs</div>
        <div className="mt-4 w-full h-auto flex gap-[2vw] overflow-scroll pb-4">
          {recentBlog.map((item, index) => {
            return (
              <div
                key={index}
                className="shrink-0 w-[300px] md:w-[350px] rounded-md bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0"
              >
                <img
                  src={item.img}
                  className="w-full h-[200px] object-cover shrink-0 md:mb-[0.7vw]"
                  alt=""
                />
                <div className="px-[0.8vw] pt-2 md:pt-0">
                  <div className="flex justify-between font-semibold text-sm text-[#808080]">
                    <div>{item.name}</div>
                    <div>{item.date}</div>
                  </div>
                  <div className="font-bold text-base line-clamp-2 text-ellipsis my-2 mb-[0.2vw]">
                    {item.title}
                  </div>
                  <div className="text-sm line-clamp-3 md:mb-[1vw]">
                    {item.detail}
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
          })}
        </div>
      </div>

      {/* Related to tech */}
      <div className="px-[8vw] md:px-[10vw] mt-[8vw] md:mt-[4vw]">
        <div className="text-xl lg:text-3xl font-extrabold ">
          Related to tech
        </div>
        <div className="mt-4 w-full h-auto flex gap-[1.5vw] overflow-scroll pb-4">
          {recentBlog.map((item, index) => {
            return (
              <div
                key={index}
                className="shrink-0 w-[300px] md:w-[350px] rounded-md bg-white border-[0.6px] border-[#bebebe] border-solid shadow-lg md:mb-0"
              >
                <img
                  src={item.img}
                  className="w-full h-[200px] object-cover  shrink-0 md:mb-[0.7vw]"
                  alt=""
                />
                <div className="px-[0.8vw] pt-2 md:pt-0">
                  <div className="flex justify-between font-semibold text-sm text-[#808080]">
                    <div>{item.name}</div>
                    <div>{item.date}</div>
                  </div>
                  <div className="font-bold text-base line-clamp-2 text-ellipsis my-2 mb-[0.2vw]">
                    {item.title}
                  </div>
                  <div className="text-sm line-clamp-3 md:mb-[1vw]">
                    {item.detail}
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
          })}
        </div>
      </div>
      {/* Hot topics */}
      <div className="bg-[#F2F2F2] px-[2vw] py-[3vw] mt-20">
        <div className="text-xl lg:text-3xl font-bold mt-4 text-center ">
          Hot Topics
        </div>
        <div className="mt-6 md:mt-[3vw] flex items-center gap-[2vw] overflow-x-scroll">
          {hotTopics.map((temp) => (
            <div className="relative flex items-center justify-center w-[150px] h-[200px] md:w-[280px] md:h-[300px] shrink-0 object-cover rounded-md ">
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
          {allBlogs.map((item, idx) => (
            <BlogCardHorizontal key={idx} index={idx} items={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export const SearchedBlog = ({ array }) => {
  console.log(array);
  return (
    <div className="mt-6 lg:mt-10 px-[8vw] md:px-[10vw] flex flex-wrap justify-center gap-[2vw]">
      {array.map((item, idx) => (
        <BlogCardHorizontal key={idx} index={idx} items={item} />
      ))}
    </div>
  );
};

const Blogs = () => {
  const [searchText, setSearchText] = useState("");
  const [blogArray, setBlogArray] = useState(allBlogs);
  const SearchBlogs = (e) => {
    setSearchText(e.target.value);
    // console.log(searchText)
    // setBlogArray(allBlogs.filter((item)=>item.tags.map((item2)=>console.log(item2))));
    setBlogArray(
      allBlogs.filter((item) =>
        item?.tags?.some((item2) =>
          item2?.toLowerCase()?.includes(searchText.toLowerCase())
        )
      )
    );
    console.log(blogArray);
  };

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
    if(localStorage.getItem("isExpert") === "true"){
      try{
        const res = await axios.get("/experts/?action=1",{
          headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`
          }
        });
        const allData = res.data.data;
        setAuthor({
          ...author,
          first_name: allData.first_name,
          last_name: allData.last_name,
          gender: allData.gender,
          profession: allData.profession,
          about_me: allData.about_me}
        )
      }catch(error){
        console.log(error);
      }
    }else{
      try{
        const res = await axios.get("/customers/?action=1",{
          headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`
          }
        });
        const allData = res.data.data;
        setAuthor({
          ...author,
          first_name: allData.first_name,
          last_name: allData.last_name,
          gender: allData.gender,
          profession: allData.profession,
          about_me: allData.about_me
        });        
      }catch(error){
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if(localStorage.getItem("isAuthor") === "true"){
      setIsAuthor(true);
    }
    getData();
  }, []);

  const [isAuthor,setIsAuthor] = useState(false);

  const createAuthor = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/blogs/author/",{
        action: 1,
        first_name: author.first_name,
        last_name: author.last_name,
        gender: author.gender,
        profession: author.profession,
        about_me: author.about_me
      },{
        headers:{
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`
        }
      })
      const data = response.data;
      console.log(data); 
      setIsAuthor(true);
      localStorage.setItem("isAuthor",true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-[90px]">
      <div className="px-[8vw] text-center">
        <input
          type="text"
          placeholder="Search for the blog...."
          value={searchText}
          onChange={(e) => SearchBlogs(e)}
          className="bg-[#ECECEC] w-[70%] p-3 outline-none rounded-md text-base"
        />
      </div>
      {/* Featured Blogs */}
      <div className="mt-8 flex overflow-x-auto bg-slate-100">
        {featuredBlogs.map((temp) => (
          <div
            className={`px-3 relative text-white w-[250px] h-[300px] md:w-[450px] md:h-[500px] shrink-0 flex flex-col items-center justify-center border-[0.1vw] border-solid border-[#bbbbbb]`}
          >
            <img
              className="absolute left-0 top-0 w-full h-full object-cover brightness-75"
              src={temp.img}
              alt=""
            />
            <div className="text-xs md:text-base absolute top-2 left-2">
              Featured
            </div>
            <div className="z-30 text-center">
              <div className="text-base md:text-2xl font-bold text-balance">
                {temp?.title}
              </div>
              <div className="my-2 md:my-4 text-xs md:text-base">
                {temp?.name} | {temp?.date}
              </div>
              <button className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs md:text-base font-semibold cursor-pointer">
                Read more
              </button>
            </div>
          </div>
        ))}
      </div>
        {
          isAuthor ? (<div className="w-[75%] h-auto flex justify-between bg-[#ECECEC] mx-auto mt-10 py-5 items-center">
            <div className="text-xl lg:text-3xl font-bold text-center px-5">Write a Blog</div>
            <button className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] mx-5 text-xs md:text-base font-semibold rounded-sm cursor-pointer">Write a Blog</button>
          </div>) : (<div className="w-[75%] h-auto flex justify-between bg-[#ECECEC] mx-auto mt-10 py-5 items-center">
          <div className="flex flex-col px-5">
            <div className="text-xl lg:text-3xl font-bold text-center">
              Become an Author
            </div>
            <div className="text-center text-sm">
              (If you want to write a blog)
            </div>
          </div>
          <button onClick={(e)=>createAuthor(e)} className="px-[3vw] py-[1vw] md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] mx-5 text-xs md:text-base font-semibold rounded-sm cursor-pointer">
            Become an Author
          </button>
        </div>)
        }
      
      {searchText.length === 0 ? (
        <BlogBody />
      ) : (
        <SearchedBlog array={blogArray} />
      )}
    </div>
  );
};
export default Blogs;
