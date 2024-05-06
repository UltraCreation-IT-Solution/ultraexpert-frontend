import { PiCaretLeftLight } from "react-icons/pi";
import { PiCaretRightLight } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { ExpertRatings } from "../Experts/ExpertProfile";
import { RatingCard } from "../Experts/ExpertProfile";
import { expertDetailsObj } from "../../constant";
import { useEffect, useState } from "react";
import axios from "../../axios";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const params = useParams();
  console.log(params);
  const [currBlogData, setCurrBlogData] = useState({});
  const getData = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(`/blogs/?action=3&blog_id=${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const allData = res.data.data;
      setCurrBlogData(allData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const [comments, setComments] = useState({
    comment: "",
  });
  const postNewComment = async() =>{
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try{
      const res = await axios.post("/blogs/",{
        action: 8,
        blog_id: params.id,
        content: comments.comment
      },{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      })
      const json = res.data;
      if(!json){
        console.log("no data");
        return;
      }
      console.log(json);
    }catch(error){
      console.log(error);
    }
  }

  const [blogComments, setBlogComments] = useState([]);

  const getAllBlogComments = async() =>{
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try{
      const res = await axios.get(`/blogs/?action=6&blog_id=${params.id}`,{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      })
      const json = res.data;
      if(!json){
        console.log("no data");
        return;
      }
      console.log(json);
      setBlogComments(json.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getAllBlogComments();
  }, []);

  return (
    <>
      <div className="px-[6vw] md:px-[10vw] mt-[110px] md:mt-[12vw]">
        <div className="text-center">
          <div className="text-xs md:text-sm text-gray-500 font-semibold">
            {currBlogData?.publish_date}
          </div>
          <div className=" text-3xl overflow-hidden xs:text-4xl lg:text-5xl font-bold md:px-[7vw] my-5 md:my-4 tracking-wide">
            {currBlogData?.title}
          </div>
          <div className="flex items-center justify-center gap-3">
            <img
              src={currBlogData?.author_data?.profile_img}
              alt="profile"
              className="h-10 w-10 rounded-full shrink-0 object-cover "
            />
            <div className="text-sm md:text-base text-gray-500">
              Blog - By{" "}
              {currBlogData?.author_data?.first_name +
                " " +
                currBlogData?.author_data?.last_name}
            </div>
          </div>
        </div>

        <div className="my-[3vw]">
          <div>
            {currBlogData?.images_list?.length && (
              <img
                className="w-[100%] h-[45vw] object-cover shrink-0"
                src={currBlogData?.images_list[0]}
                alt=""
              />
            )}
          </div>
          <div dangerouslySetInnerHTML={{ __html: currBlogData?.content }} />
        </div>
        {currBlogData?.tags_list?.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap my-2">
            {currBlogData?.tags_list.map((tag, index) => (
              <div
                key={index}
                className="text-[10px] sm:text-sm shrink-0 bg-[#D9D9D9] text-gray-500 border border-solid border-slate-300 rounded-sm px-3 py-1 "
              >
                {tag}{" "}
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between border-t border-b border-solid border-slate-300 py-[2.5vw] mt-[10vw] md:mt-0 text-[2.2vw] md:text-base">
          <div className="flex items-center gap-[1.5vw] md:gap-[1vw] cursor-pointer">
            <div className="text-xs md:text-[2vw] xl:text-[1.5vw]">
              <PiCaretLeftLight />
            </div>
            <div className="">
              <div>Previous Post</div>
              <div>How to Clean Stainess Steel</div>
            </div>
          </div>
          <div className="flex items-center gap-[1.5vw] md:gap-[1vw] cursor-pointer">
            <div className="">
              <div className="text-right">Next Post</div>
              <div>How to Clean Stainess Steel</div>
            </div>
            <div className="text-xs md:text-[2vw] xl:text-[1.5vw]">
              <PiCaretRightLight />
            </div>
          </div>
        </div>

        {/* Ratings of particular blog */}
        <div className="mt-10 md:mt-20">
          {/* <ExpertRatings /> */}
          <div className="px-1 xs:px-5 mb-10 lg:mb-0">
            <div className="border-b border-solid border-slate-300 pb-10">
              <div className="text-xl md:text-2xl font-semibold mt-6 md:mt-0">
                50 reviews
              </div>
              <div className=" mt-6">
                <input
                  type="text"
                  name="comment"
                  id="comment"
                  value={comments.comment}
                  onChange={(e) => setComments({ ...comments, comment: e.target.value })}
                  placeholder="Write a comment"
                  className="w-full bg-[#F4F4F4] py-2 px-2 md:py-[0.7vw] rounded-sm text-xs xs:text-sm outline-none"
                />
                <button onClick={postNewComment} className="mt-2 md:mt-4 px-[3vw] py-2 md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-base font-semibold cursor-pointer shrink-0">
                  Comment
                </button>
              </div>
            </div>
            <div>
              <div className="mt-8 mb-12 flex items-center justify-between">
                <div className="text-xl md:text-2xl font-semibold ">
                  Top Reviews
                </div>
                <select
                  name="Sort by"
                  id=""
                  className="px-4 py-2 text-sm md:text-lg border border-solid border-slate-300 outline-none"
                >
                  <option
                    value="newest"
                    className="text-xs md:text-sm px-4 py-2"
                  >
                    Newest
                  </option>
                  <option
                    value="oldest"
                    className="text-xs md:text-sm px-4 py-2"
                  >
                    Oldest
                  </option>
                </select>
              </div>
              {blogComments?.map((temp, idx) => (
                <RatingCard key={idx} temp={temp} />
              ))}
            </div>
            <button className="bg-white px-[1.5vw] py-[0.2vw] text-sm md:text-base text-black font-semibold border rounded-sm sm:rounded-md">
              Show more
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogDetails;
