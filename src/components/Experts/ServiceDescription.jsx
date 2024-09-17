import React, { useEffect } from "react";
import { RiFlowChart } from "react-icons/ri";
import { PiDotsThreeCircleVertical } from "react-icons/pi";
import ProjectsCarousel from "../../subsitutes/ProjectCarousel";
import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "../../axios";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import ShowSchedule from "../../subsitutes/Schedule";
import ExpertProfileShimmer from "../../subsitutes/Shimmers/ExpertProfileShimmer";

export const ServiceProfileCard = ({ item }) => {
  const navigate = useNavigate();
  const [isFollowing, setIsFollowing] = useState(
    item?.expert_data?.is_following_expert || false
  );
  const cookie = document.cookie.split(";");
  const jsonData = {};
  cookie.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const followExpert = async (id) => {
    try {
      const res = await axios.post(
        "/customers/connect/",
        {
          action: 1,
          expert_id: id,
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
      setIsFollowing(true);
    } catch (error) {
      console.log(error);
    }
  };
  const unfollowExpert = async (id) => {
    console.log(id);
    try {
      const res = await axios.post(
        "/customers/connect/",
        {
          action: 2,
          expert_id: id,
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
      setIsFollowing(false);
    } catch (error) {
      console.log(error);
    }
  };
  const shareService = () => {
    console.log("share service");
    // copy the ulr
    navigator.clipboard.writeText(window.location.href);
    console.log(window.location.href);
    alert("Link copied to clipboard");
  };
  return (
    <div
      className={`w-full px-3 py-5 bg-[#EDEDED] flex flex-col md:flex-row justify-between md:items-center shadow-sm drop-shadow-md rounded-md`}
    >
      <div className="flex justify-between items-center">
        <Link
          to={`/experts/expertprofile/${item?.expert_data?.id}`}
          className="flex gap-2 sm:gap-3 items-center decoration-transparent text-black"
        >
          <img
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full shrink-0 object-cover"
            src={item?.expert_data?.profile_img}
            alt=""
          />
          <div className="flex flex-col">
            <div className="text-sm sm:text-lg font-semibold">
              {item?.expert_data?.first_name} {item?.expert_data?.last_name}
            </div>
          </div>
        </Link>
        <div className="block md:hidden">
          {localStorage.getItem("isExpert") === "false" &&
            (isFollowing ? (
              <button
                className="bg-white px-4 sm:px-6 py-1 md:px-[1.5vw] md:py-[0.2vw] text-xs sm:text-sm text-black font-semibold border rounded-sm sm:rounded-md"
                onClick={() => unfollowExpert(item?.expert_data?.id)}
              >
                unfollow
              </button>
            ) : (
              <button
                className="bg-white px-4 sm:px-6 py-1 md:px-[1.5vw] md:py-[0.2vw] text-xs sm:text-sm text-black font-semibold border rounded-sm sm:rounded-md"
                onClick={() => followExpert(item?.expert_data?.id)}
              >
                Follow
              </button>
            ))}
        </div>
      </div>

      <div className="flex items-center gap-8 lg:gap-10 mt-5 md:mt-0">
        <div
          className="text-sm md:text-base text-gray-600 cursor-pointer shrink-0"
          onClick={() =>
            navigate(`/experts/expertprofile/${item?.expert_data?.id}`, {
              state: { check: true },
            })
          }
        >
          Services
        </div>
        <a href="#projects" className="decoration-transparent">
          <div className="text-sm md:text-base text-gray-600 cursor-pointer shrink-0">
            Projects
          </div>
        </a>
        <a href="#ratings" className="decoration-transparent">
          <div className="text-sm md:text-base text-gray-600 cursor-pointer shrink-0">
            {" "}
            Reviews
          </div>
        </a>
        <div
          onClick={() => shareService()}
          className="text-sm md:text-base text-gray-600 cursor-pointer shrink-0"
        >
          Share
        </div>
        <div className="hidden md:block">
          {localStorage.getItem("isExpert") === "false" &&
            (isFollowing ? (
              <button
                className="bg-white px-6 py-1 md:px-[1.5vw] md:py-[0.2vw] text-sm text-black font-semibold border rounded-sm sm:rounded-md"
                onClick={() => unfollowExpert(item?.expert_data?.id)}
              >
                Unfollow
              </button>
            ) : (
              <button
                className="bg-white px-6 py-1 md:px-[1.5vw] md:py-[0.2vw] text-sm text-black font-semibold border rounded-sm sm:rounded-md"
                onClick={() => followExpert(item?.expert_data?.id)}
              >
                Follow
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

const CommentCard = ({ servId, temp, getAllComments }) => {
  console.log(temp);
  const [options, setOptions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedComment, setEditedComment] = useState(temp?.content);
  const [replies, setReplies] = useState([]);
  const [showOptions, setShowOptions] = useState(false);

  const date = temp?.timestamp.split("T")[0];
  const commentDate = date;

  useEffect(() => {
    fetchReplies();
  }, [temp?.id]);

  const fetchReplies = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key.trim()] = value;
    });
    try {
      const res = await axios.get(
        `/customers/connect/?action=7&comment_id=${temp?.id}`,
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
      setReplies(json.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (commentId) => {
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
          action: 9,
          comment_id: commentId,
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
      getAllComments();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (content) => {
    setIsEditing(true);
    setEditedComment(content);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedComment("");
  };

  const saveEdit = async (commentId) => {
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
          action: 12,
          comment_id: commentId,
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
      setEditedComment("");
      getAllComments();
    } catch (error) {
      console.log(error);
    }
  };

  const likeComment = async (commentId) => {
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
          action: 10,
          comment_id: commentId,
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
      getAllComments();
    } catch (error) {
      console.log(error);
    }
  };

  const dislikeComment = async (commentId) => {
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
          action: 11,
          comment_id: commentId,
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
      getAllComments();
    } catch (error) {
      console.log(error);
    }
  };

  const [replyComm, setReplyComm] = useState(false);
  const [replyComment, setReplyComment] = useState("");

  const handleReplyComment = async (commentId) => {
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
          action: 8,
          service_id: servId,
          content: replyComment,
          reply_to: commentId,
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
      setReplyComm(false);
      setReplyComment("");
      fetchReplies();
    } catch (error) {
      console.log(error);
    }
  };

  const [replyEdit, setReplyEdit] = useState(false);
  const [editedReply, setEditedReply] = useState("");
  const [activeReply, setActiveReply] = useState({});

  const saveEdit2 = async (commentId) => {
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
          action: 12,
          comment_id: commentId,
          new_content: editedReply,
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
      setActiveReply({ ...activeReply, [commentId]: false });
      setEditedReply("");
      fetchReplies();
    } catch (error) {
      console.log(error);
    }
  };

  const dislikeComment2 = async (commentId) => {
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
          action: 11,
          comment_id: commentId,
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
      fetchReplies();
    } catch (error) {
      console.log(error);
    }
  };

  const likeComment2 = async (commentId) => {
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
          action: 10,
          comment_id: commentId,
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
      fetchReplies();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment2 = async (commentId) => {
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
          action: 9,
          comment_id: commentId,
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
      fetchReplies();
    } catch (error) {
      console.log(error);
    }
  };

  const [activeReplyMenu, setActiveReplyMenu] = useState({});

  return (
    <div className="my-[5vw] md:my-[2vw] pb-[1vw] border-b-[1px] border-slate-400 border-solid">
      <div className="flex gap-[2.5vw] sm:gap-[2vw]">
        <img
          className="h-12 w-12 sm:h-14 sm:w-14 xl:h-14 xl:w-14 shrink-0 object-cover rounded-full"
          src={temp?.user_profile_img}
          alt=""
        />
        <div className="w-full">
          <div className="text-lg sm:text-xl font-semibold">
            {temp?.user_first_name} {temp?.user_last_name}
          </div>
          <div className="mt-[2vw] md:mt-[0.9vw] text-xs sm:text-base text-slate-400">
            {temp?.timestamp.split("T")[0]}
          </div>
          {isEditing ? (
            <textarea
              value={editedComment}
              onChange={(e) => setEditedComment(e.target.value)}
              className="text-xs sm:text-base font-montserrat w-full h-20 border border-gray-300 rounded-md p-2"
            />
          ) : (
            <p className="text-xs sm:text-base font-montserrat">
              {temp?.content}
            </p>
          )}
          {temp?.is_authenticated_user && isEditing && (
            <div className="mb-2">
              <button
                onClick={() => saveEdit(temp?.id)}
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
          <div className="mb-2 flex items-center gap-5 text-xs sm:text-base md:text-lg">
            <div
              className="flex items-center gap-1"
              onClick={() => likeComment(temp?.id)}
            >
              <BiLike />
              <div>{temp?.likes}</div>
            </div>
            <div
              className="flex items-center gap-1"
              onClick={() => dislikeComment(temp?.id)}
            >
              <BiDislike />
              <div>{temp?.dislikes}</div>
            </div>
            {!replyComm && ( // Render reply button if replyComm is false
              <button
                className="text-xs sm:text-base cursor-pointer px-2 py-1 rounded-sm sm:rounded-md"
                onClick={() => setReplyComm(true)}
              >
                Reply
              </button>
            )}
          </div>
          {replyComm && ( // Render reply input and save button if replyComm is true
            <div className="w-full">
              <input
                type="text"
                value={replyComment}
                onChange={(e) => setReplyComment(e.target.value)}
                className="text-xs sm:text-base font-montserrat w-full border border-gray-300 rounded-md p-2"
              />
              <div className="mt-3">
                <button
                  className="text-xs sm:text-base cursor-pointer px-4 py-1 rounded-sm sm:rounded-md"
                  onClick={() => handleReplyComment(temp?.id)}
                >
                  Save
                </button>
                <button
                  className="text-xs sm:text-base cursor-pointer px-4 py-1 ml-2 rounded-sm sm:rounded-md"
                  onClick={() => (setReplyComm(false), setReplyComment(""))}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
          {replies.map((reply) => (
            <div key={reply.id} className="ml-2 sm:ml-4 md:ml-8 my-5">
              <div className="flex gap-2">
                <img
                  className="h-10 w-10 object-cover rounded-full"
                  src={reply.user_profile_img}
                  alt=""
                />
                <div>
                  <div className="text-sm font-semibold">
                    {reply.user_first_name} {reply.user_last_name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {reply.timestamp.split("T")[0]}
                  </div>
                  {reply?.is_authenticated_user && activeReply[reply?.id] ? (
                    <textarea
                      value={editedReply}
                      onChange={(e) => setEditedReply(e.target.value)}
                      className="text-xs sm:text-base font-montserrat w-full h-20 border border-gray-300 rounded-md p-2 outline-none"
                    />
                  ) : (
                    <p className="text-xs">{reply.content}</p>
                  )}
                  {reply?.is_authenticated_user && activeReply[reply?.id] && (
                    <div className="mb-2">
                      <button
                        onClick={() => saveEdit2(reply?.id)}
                        className="text-green-500 px-3 py-1 border border-solid border-green-500 rounded-md"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditedReply(""),
                            setActiveReply({
                              ...activeReply,
                              [reply?.id]: false,
                            });
                        }}
                        className="text-gray-500 px-3 py-1 border border-solid border-gray-500 rounded-md ml-2"
                      >
                        Cancel
                      </button>
                    </div>
                  )}
                  <div className="text-xs mt-1 flex gap-2">
                    <div className="mb-2 flex items-center gap-5 text-xs sm:text-base md:text-lg">
                      <div
                        className="flex items-center gap-1"
                        onClick={() => likeComment2(reply?.id)}
                      >
                        <BiLike />
                        <div>{reply?.likes}</div>
                      </div>
                      <div
                        className="flex items-center gap-1"
                        onClick={() => dislikeComment2(reply?.id)}
                      >
                        <BiDislike />
                        <div>{reply?.dislikes}</div>
                      </div>

                      {!replyComm && (
                        <button
                          className="text-xs sm:text-base cursor-pointer px-2 py-1 rounded-sm sm:rounded-md"
                          onClick={() => setReplyComm(true)}
                        >
                          Reply
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                {reply?.is_authenticated_user && !activeReply[reply?.id] && (
                  <div className="relative overflow-visible flex flex-col ml-auto text-xl sm:text-3xl cursor-pointer">
                    <PiDotsThreeCircleVertical
                      onClick={() =>
                        setActiveReplyMenu({
                          ...activeReplyMenu,
                          [reply?.id]: !activeReplyMenu[reply?.id],
                        })
                      }
                    />

                    {activeReplyMenu[reply?.id] && (
                      <div className="bg-white shadow-md absolute top-5 sm:top-9 right-0 border border-solid border-slate-300 rounded-md py-1 space-y-1 text-sm sm:text-base text-center">
                        <div
                          className="px-3 hover:bg-[#ECECEC] transition-all"
                          onClick={() => {
                            setEditedReply(reply.content),
                              setActiveReply({
                                ...activeReply,
                                [reply?.id]: true,
                              });
                          }}
                        >
                          Edit
                        </div>
                        <div
                          className="px-3 hover:bg-[#ECECEC] transition-all"
                          onClick={() => deleteComment2(reply.id)}
                        >
                          Delete
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {temp?.is_authenticated_user && !isEditing && (
          <div className="relative overflow-visible flex flex-col ml-auto text-xl sm:text-3xl cursor-pointer">
            <PiDotsThreeCircleVertical onClick={() => setOptions(!options)} />
            {options && (
              <div className="bg-white shadow-md absolute top-5 sm:top-9 right-0 border border-solid border-slate-300 rounded-md py-1 space-y-1 text-sm sm:text-base text-center">
                <div
                  className="px-3 hover:bg-[#ECECEC] transition-all "
                  onClick={handleEdit}
                >
                  Edit
                </div>
                <div
                  className="px-3 hover:bg-[#ECECEC] transition-all"
                  onClick={deleteComment}
                >
                  Delete
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const ServiceDescription = () => {
  const [shimmer, setShimmer] = useState(false);
  const params = useParams();
  const { id } = params;

  const [servDesc, setServDesc] = useState(null);
  const [scheduleData, setScheduleData] = useState({});

  const getServiceDesc = async () => {
    const cookie = document.cookie.split(";");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    setShimmer(true);
    try {
      const res = await axios.get(
        `/customers/services/?action=2&service_id=${id}`,
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
        console.log(res.data.message);
        setShimmer(false);
        return;
      }
      const json = res.data;
      setServDesc(json.data);
      setScheduleData(json.data);
      setShimmer(false);
    } catch (error) {
      console.log(error);
    }
    setShimmer(false);
  };

  useEffect(() => {
    getAllServiceComments();
    getServiceDesc();
  }, []);
  // const service = services.find(service => service.id === id);

  // if (!service) return null;
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
        "/customers/connect/",
        {
          action: 8,
          service_id: id,
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
      getAllServiceComments();
      setComments({ comment: "" });
    } catch (error) {
      console.log(error);
    }
  };

  const [serviceComments, setServiceComments] = useState([]);

  const getAllServiceComments = async () => {
    const organizeComments = (comments) => {
      const commentMap = {};
      const nestedComments = [];

      // Create a map of comments by their IDs
      comments.forEach((comment) => {
        comment.replies = [];
        commentMap[comment.id] = comment;
      });

      // Populate the replies array for each comment
      comments.forEach((comment) => {
        if (comment.reply_to) {
          if (commentMap[comment.reply_to]) {
            commentMap[comment.reply_to].replies.push(comment);
          }
        } else {
          nestedComments.push(comment);
        }
      });

      return nestedComments;
    };
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(
        `/customers/connect/?action=5&service_id=${id}`,
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
      const organizedComments = organizeComments(json.data);
      setServiceComments(organizedComments);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllServiceComments();
  }, []);
  if (shimmer === true) {
    return <ExpertProfileShimmer />;
  }
  if (servDesc === null)
    return (
      <div className="text-center font-bold text-lg md:text-2xl text-gray-600 mt-[100px]">
        Service description not found
      </div>
    );

  return (
    <>
      <div className="lg:flex mt-[100px] ">
        <div className="w-full lg:w-[70%] px-[2.5vw] border-r border-solid border-slate-300">
          <ServiceProfileCard item={servDesc} />
          <div className="h-auto mt-5 md:mt-10">
            <div className="text-xl md:text-3xl gap-4 font-semibold flex items-start my-5">
              <RiFlowChart className="mt-1" />
              <div>{servDesc?.service_name}</div>
            </div>
            <div className="flex items-center gap-6 overflow-x-scroll mt-[2vw] shadow-sm drop-shadow-md">
              <img
                className="h-[12rem] w-[17rem] lg:h-[17vw] lg:w-[24vw] shrink-0 object-cover"
                src={servDesc?.service_img}
                alt=""
              />
            </div>
            <div className="mt-[3vw] text-base xl:text-lg text-gray-500">
              <b className="text-black">Description: </b>
              {servDesc?.description}
            </div>
            <div>
              <div className="text-base md:text-lg lg:text-xl font-semibold mt-[2vw]">
                Skills
              </div>
              {console.log(servDesc)}
              <div className="flex flex-wrap gap-[1vw] mt-[3vw] md:mt-[0.7vw]">
                {servDesc?.tags?.map((temp, idx) => (
                  <div
                    key={idx}
                    className="px-2 py-1 text-xs md:text-sm border md:border-2 border-solid border-slate-200 font-semibold rounded-sm cursor-pointer"
                  >
                    {temp}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-[2vw]">
              <div className="text-base md:text-2xl font-semibold font-montserrat">
                My projects
              </div>
              <div id="projects">
                <ProjectsCarousel projectsArray={servDesc?.expert_projects} />
              </div>
            </div>
            <div className="lg:hidden w-full">
              <div className="my-8">
                <ShowSchedule id={servDesc?.id} />
              </div>
            </div>
            <div id="ratings" className="mt-10">
              <div className="px-1 xs:px-5 mb-10 lg:mb-0">
                {localStorage.getItem("isExpert") === "false" && (
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
                )}

                <div>
                  {serviceComments?.map((temp, idx) => (
                    <CommentCard
                      servId={servDesc?.id}
                      key={idx}
                      temp={temp}
                      getAllComments={getAllServiceComments}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:w-[30%] px-[2.5vw] lg:flex flex-col items-center">
          {/* <div className="mt-[2vw] flex flex-col ">
            <div className="text-3xl font-semibold">
              Service Price: ₹{services[params?.id - 1]?.price}
            </div>
            <button className=" w-full mt-5 cursor-pointer bg-[#2A2A2A] px-6 py-1 md:px-[1.5vw] md:py-[0.5vw] text-lg text-white font-semibold border rounded-sm sm:rounded-md">
              Book Now
            </button>
          </div> */}
          <div className="mx-[2.5vw] w-full">
            <ShowSchedule price={servDesc?.price} id={servDesc?.id} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDescription;
