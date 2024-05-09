// import { PiCaretLeftLight } from "react-icons/pi";
// import { PiCaretRightLight } from "react-icons/pi";
// import { AiOutlineLike } from "react-icons/ai";
// import { AiOutlineDislike } from "react-icons/ai";
// import { ExpertRatings } from "../Experts/ExpertProfile";
// import { RatingCard } from "../Experts/ExpertProfile";
// import { expertDetailsObj } from "../../constant";
// import { useEffect, useState } from "react";
// import axios from "../../axios";
// import { useParams } from "react-router-dom";

// const BlogDetails = () => {
//   const params = useParams();
//   console.log(params);
//   const [currBlogData, setCurrBlogData] = useState({});
//   const getData = async () => {
//     const cookies = document.cookie.split("; ");
//     const jsonData = {};

//     cookies.forEach((item) => {
//       const [key, value] = item.split("=");
//       jsonData[key] = value;
//     });
//     try {
//       const res = await axios.get(`/blogs/?action=3&blog_id=${params.id}`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${jsonData.access_token}`,
//         },
//       });
//       const allData = res.data.data;
//       setCurrBlogData(allData);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <>
//       <div className="px-[6vw] md:px-[10vw] mt-[110px] md:mt-[12vw]">
//         <div className="text-center">
//           <div className="text-xs md:text-sm text-gray-500 font-semibold">
//             {currBlogData?.publish_date}
//           </div>
//           <div className=" text-3xl overflow-hidden xs:text-4xl lg:text-5xl font-bold md:px-[7vw] my-5 md:my-4 tracking-wide">
//             {currBlogData?.title}
//           </div>
//           <div className="flex items-center justify-center gap-3">
//             <img
//               src={currBlogData?.author_data?.profile_img}
//               alt="profile"
//               className="h-10 w-10 rounded-full shrink-0 object-cover "
//             />
//             <div className="text-sm md:text-base text-gray-500">
//               Blog - By{" "}
//               {currBlogData?.author_data?.first_name +
//                 " " +
//                 currBlogData?.author_data?.last_name}
//             </div>
//           </div>
//         </div>

//         <div className="my-[3vw]">
//           <div>
//             {currBlogData?.images_list?.length && (
//               <img
//                 className="w-[100%] h-[45vw] object-cover shrink-0"
//                 src={currBlogData?.images_list[0]}
//                 alt=""
//               />
//             )}
//           </div>
//           <div dangerouslySetInnerHTML={{ __html: currBlogData?.content }} />
//         </div>
//         {currBlogData?.tags_list?.length > 0 && (
//           <div className="flex items-center gap-2 flex-wrap my-2">
//             {currBlogData?.tags_list.map((tag, index) => (
//               <div
//                 key={index}
//                 className="text-[10px] sm:text-sm shrink-0 bg-[#D9D9D9] text-gray-500 border border-solid border-slate-300 rounded-sm px-3 py-1 "
//               >
//                 {tag}{" "}
//               </div>
//             ))}
//           </div>
//         )}
//         <div className="flex justify-between border-t border-b border-solid border-slate-300 py-[2.5vw] mt-[10vw] md:mt-0 text-[2.2vw] md:text-base">
//           <div className="flex items-center gap-[1.5vw] md:gap-[1vw] cursor-pointer">
//             <div className="text-xs md:text-[2vw] xl:text-[1.5vw]">
//               <PiCaretLeftLight />
//             </div>
//             <div className="">
//               <div>Previous Post</div>
//               <div>How to Clean Stainess Steel</div>
//             </div>
//           </div>
//           <div className="flex items-center gap-[1.5vw] md:gap-[1vw] cursor-pointer">
//             <div className="">
//               <div className="text-right">Next Post</div>
//               <div>How to Clean Stainess Steel</div>
//             </div>
//             <div className="text-xs md:text-[2vw] xl:text-[1.5vw]">
//               <PiCaretRightLight />
//             </div>
//           </div>
//         </div>

//         {/* Ratings of particular blog */}
//         <div className="mt-10 md:mt-20">
//           {/* <ExpertRatings /> */}
//           <div className="px-1 xs:px-5 mb-10 lg:mb-0">
//             <div className="border-b border-solid border-slate-300 pb-10">
//               <div className="text-xl md:text-2xl font-semibold mt-6 md:mt-0">
//                 50 reviews
//               </div>
//               {/* <div className="mt-6 text-base md:text-lg">Rating Breakdown</div>
//               <div className="flex items-center gap-[4vw]">
//                 <div className="w-80 text-base">
//                   <div className="my-4 flex flex-col">
//                     <div className="flex justify-between text-xs xs:text-sm md:text-base">
//                       <div>Availability</div>
//                       <div>
//                         <MdStar /> {expert?.expert?.avg_availability}
//                       </div>
//                     </div>
//                     <div className=" bg-red-100 rounded-full">
//                       <div
//                         className="border-[3px] border-solid border-red-500 rounded-full"
//                         style={{
//                           width: `${
//                             (expert?.expert?.avg_availability / 5) * 100
//                           }%`,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="my-4 flex flex-col">
//                     <div className="flex justify-between text-xs xs:text-sm md:text-base">
//                       <div>Skills</div>
//                       <div>
//                         <MdStar /> {expert?.expert?.avg_skills}
//                       </div>
//                     </div>
//                     <div className=" bg-blue-100 rounded-full">
//                       <div
//                         className="border-[3px] border-solid border-blue-500 rounded-full"
//                         style={{
//                           width: `${(expert?.expert?.avg_skills / 5) * 100}%`,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="my-4 flex flex-col ">
//                     <div className="flex justify-between text-xs xs:text-sm md:text-base">
//                       <div>Coorporation</div>
//                       <div>
//                         <MdStar /> {expert?.expert?.avg_cooperation}
//                       </div>
//                     </div>
//                     <div className=" bg-purple-100 rounded-full">
//                       <div
//                         className="border-[3px] border-solid border-purple-500 rounded-full"
//                         style={{
//                           width: `${
//                             (expert?.expert?.avg_cooperation / 5) * 100
//                           }%`,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="w-80 text-base">
//                   <div className="my-4 flex flex-col">
//                     <div className="flex justify-between text-xs xs:text-sm md:text-base">
//                       <div>Deadline</div>
//                       <div>
//                         <MdStar /> {expert?.expert?.avg_deadline}
//                       </div>
//                     </div>
//                     <div className=" bg-red-100 rounded-full">
//                       <div
//                         className="border-[3px] border-solid border-red-500 rounded-full"
//                         style={{
//                           width: `${(expert?.expert?.avg_deadline / 5) * 100}%`,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="my-4 flex flex-col">
//                     <div className="flex justify-between text-xs xs:text-sm md:text-base">
//                       <div>Quality</div>
//                       <div>
//                         <MdStar /> {expert?.expert?.avg_quality}
//                       </div>
//                     </div>
//                     <div className=" bg-blue-100 rounded-full">
//                       <div
//                         className="border-[3px] border-solid border-blue-500 rounded-full"
//                         style={{
//                           width: `${(expert?.expert?.avg_quality / 5) * 100}%`,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="my-4 flex flex-col ">
//                     <div className="flex justify-between text-xs xs:text-sm md:text-base">
//                       <div>Communication</div>
//                       <div>
//                         <MdStar /> {expert?.expert?.avg_communication}
//                       </div>
//                     </div>
//                     <div className=" bg-purple-100 rounded-full">
//                       <div
//                         className="border-[3px] border-solid border-purple-500 rounded-full"
//                         style={{
//                           width: `${
//                             (expert?.expert?.avg_communication / 5) * 100
//                           }%`,
//                         }}
//                       ></div>
//                     </div>
//                   </div>
//                 </div>
//               </div> */}
//               <div className=" mt-6">
//                 <input
//                   type="text"
//                   placeholder="Write a comment"
//                   className="w-full bg-[#F4F4F4] py-2 px-2 md:py-[0.7vw] rounded-sm text-xs xs:text-sm outline-none"
//                 />
//                 <button className="mt-2 md:mt-4 px-[3vw] py-2 md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-base font-semibold cursor-pointer shrink-0">
//                   Comment
//                 </button>
//               </div>
//             </div>
//             <div>
//               <div className="mt-8 mb-12 flex items-center justify-between">
//                 <div className="text-xl md:text-2xl font-semibold ">
//                   Top Reviews
//                 </div>
//                 <select
//                   name="Sort by"
//                   id=""
//                   className="px-4 py-2 text-sm md:text-lg border border-solid border-slate-300 outline-none"
//                 >
//                   <option
//                     value="newest"
//                     className="text-xs md:text-sm px-4 py-2"
//                   >
//                     Newest
//                   </option>
//                   <option
//                     value="oldest"
//                     className="text-xs md:text-sm px-4 py-2"
//                   >
//                     Oldest
//                   </option>
//                 </select>
//               </div>
//               {expertDetailsObj.ratings.map((temp, idx) => (
//                 <RatingCard key={idx} {...temp} />
//               ))}
//             </div>
//             <button className="bg-white px-[1.5vw] py-[0.2vw] text-sm md:text-base text-black font-semibold border rounded-sm sm:rounded-md">
//               Show more
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
// export default BlogDetails;

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
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

const CommentCard = ({ temp }) => {
  console.log(temp);

  const date = temp?.timestamp.split("T")[0];
  const commentDate = date;

  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(temp?.content);

  const deleteComment = async () => {
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
          action: 9,
          comment_id: temp?.id,
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

  const handleEdit = () => {
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedComment(temp?.content);
  };

  const saveEdit = async () => {
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
          action: 12,
          comment_id: temp?.id,
          new_content: editedComment,
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
      setIsEditing(false);
    } catch (error) {
      console.log(error);
    }
  };

  const likeComment = async () => {
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
          action: 10,
          comment_id: temp?.id,
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

  const dislikeComment = async () => {
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
          action: 11,
          comment_id: temp?.id,
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

  return (
    <div className="my-[5vw] md:my-[2vw] pb-[1vw] border-b-[1px] border-slate-400 border-solid">
      <div className="flex gap-[2.5vw] sm:gap-[2vw]">
        <img
          className="h-12 w-12 sm:h-14 sm:w-14 xl:h-14 xl:w-14 shrink-0 object-cover rounded-full"
          src={temp?.user_profile_img}
          alt=""
        />
        <div>
          <div className="text-lg sm:text-xl font-semibold">
            {temp?.user_first_name} {temp?.user_last_name}
          </div>
          <div className="mt-[2vw] md:mt-[0.9vw] text-xs sm:text-base text-slate-400">
            {commentDate}
          </div>
          {isEditing ? (
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              className="text-xs sm:text-base font-montserrat w-full h-20 border border-gray-300 rounded-md p-2"
            />
          ) : (
            <p className="text-xs sm:text-base font-montserrat">
              {editedComment}
            </p>
          )}
          <div className="mb-2 flex items-center gap-5 text-xs sm:text-base md:text-lg">
            <div className="flex items-center gap-1" onClick={likeComment}>
              <BiLike />
              <div>{temp?.like_count}</div>
            </div>
            <div className="flex items-center gap-1" onClick={dislikeComment}>
              <BiDislike />
              <div>{temp?.dislike_count}</div>
            </div>
          </div>
          {!isEditing && (
            <div>
              <button
                onClick={handleEdit}
                className="text-blue-500 p-2 border border-solid border-blue-500 rounded-lg"
              >
                Edit
              </button>
              <button
                onClick={deleteComment}
                className="text-red-500 p-2 border border-solid border-red-500 rounded-lg ml-2"
              >
                Delete
              </button>
            </div>
          )}

          {isEditing && (
            <div>
              <button
                onClick={saveEdit}
                className="text-green-500 p-2 border border-solid border-green-500 rounded-lg"
              >
                Save
              </button>
              <button
                onClick={cancelEdit}
                className="text-gray-500 p-2 border border-solid border-gray-500 rounded-lg ml-2"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

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
  const postNewComment = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/blogs/",
        {
          action: 8,
          blog_id: params.id,
          content: comments.comment,
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
      getAllBlogComments();
    } catch (error) {
      console.log(error);
    }
  };

  const [blogComments, setBlogComments] = useState([]);

  const getAllBlogComments = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(`/blogs/?action=6&blog_id=${params.id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jsonData.access_token}`,
        },
      });
      const json = res.data;
      if (!json) {
        console.log("no data");
        return;
      }
      console.log(json);
      setBlogComments(json.data);
    } catch (error) {
      console.log(error);
    }
  };

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
                  onChange={(e) =>
                    setComments({ ...comments, comment: e.target.value })
                  }
                  placeholder="Write a comment"
                  className="w-full bg-[#F4F4F4] py-2 px-2 md:py-[0.7vw] rounded-sm text-xs xs:text-sm outline-none"
                />
                <button
                  onClick={postNewComment}
                  className="mt-2 md:mt-4 px-[3vw] py-2 md:px-[2vw] md:py-[0.5vw] text-white bg-[#2A2A2A] rounded-sm text-xs xs:text-base font-semibold cursor-pointer shrink-0"
                >
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
              {console.log(blogComments)}
              {blogComments?.map((temp, idx) => (
                <CommentCard key={idx} temp={temp} />
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
