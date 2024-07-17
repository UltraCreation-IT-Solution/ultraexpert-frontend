import React, { useState, useEffect } from "react";
import { MdStar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import axios from "../../axios";

const Feedback = () => {
  const navigate = useNavigate();
  const [availabilityRating, setAvailabilityRating] = useState(-1);
  const [skillsRating, setSkillsRating] = useState(-1);
  const [cooperationRating, setCooperationRating] = useState(-1);
  const [deadlineRating, setDeadlineRating] = useState(-1);
  const [qualityRating, setQualityRating] = useState(-1);
  const [communicationRating, setCommunicationRating] = useState(-1);
  const [comment, setComment] = useState("");
  const cookie = document.cookie.split(";");
  const jsonData = {};

  cookie.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key.trim()] = value;
  });
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "/customers/rating/",
        {
          action: 1,
          expert_id: 44,
          availability: availabilityRating,
          deadline: deadlineRating,
          skills: skillsRating,
          quality: qualityRating,
          cooperation: cooperationRating,
          communication: communicationRating,
          review: comment,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      navigate("/customerdashboard")
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-[90px] flex justify-center items-center  p-10 pb-20">
      <div className="border border-solid border-slate-400 rounded-lg px-10 md:px-24 py-10 shadow-2xl">
        <div className="text-2xl md:text-3xl font-bold text-gray-600 text-center">
          Rate the expert for the following:
        </div>
        <div className="flex flex-col text-center sm:text-left sm:flex-row sm:justify-between sm:gap-24 my-6">
          <div>
            <RatingCategory
              label="Availability"
              rating={availabilityRating}
              setRating={setAvailabilityRating}
            />
            <RatingCategory
              label="Skills"
              rating={skillsRating}
              setRating={setSkillsRating}
            />
            <RatingCategory
              label="Cooperation"
              rating={cooperationRating}
              setRating={setCooperationRating}
            />
          </div>
          <div>
            <RatingCategory
              label="Deadline"
              rating={deadlineRating}
              setRating={setDeadlineRating}
            />
            <RatingCategory
              label="Quality"
              rating={qualityRating}
              setRating={setQualityRating}
            />
            <RatingCategory
              label="Communication"
              rating={communicationRating}
              setRating={setCommunicationRating}
            />
          </div>
        </div>
        <textarea
          name="feedback"
          id="feedback"
          placeholder="Enter your feedback"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="min-w-full min-h-[150px] border border-solid border-slate-400 p-3 text-base outline-none text-gray-600 rounded-md"
        ></textarea>
        <div className="mt-3">
          <button className="text-sm md:text-base px-4 py-2 rounded-sm border border-solid border-slate-400 bg-white cursor-pointer"
          onClick={() => navigate("/customerdashboard")}
          >
            Skip
          </button>
          <button
            onClick={handleSubmit}
            disabled={
              availabilityRating === -1 ||
              skillsRating === -1 ||
              cooperationRating === -1 ||
              deadlineRating === -1 ||
              qualityRating === -1 ||
              communicationRating === -1 ||
              comment === ""
            }
            className={`${availabilityRating === -1 || skillsRating === -1 || cooperationRating === -1 || deadlineRating === -1 || qualityRating === -1 || communicationRating === -1 || comment === "" ? "cursor-not-allowed bg-black/60" : "btnBlack cursor-pointer"} ml-3 text-sm md:text-base px-4 py-2 rounded-sm text-white`}
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

const RatingCategory = ({ label, rating, setRating }) => {
  const [hover, setHover] = useState(-1);

  return (
    <div className="my-4 shrink-0">
      <div className="text-xl font-semibold text-gray-700">{label}</div>
      <div className="stars">
        {[...Array(5)].map((_, index) => {
          index += 1;
          return (
            <MdStar
              className={`text-[35px] sm:text-[25px] md:text-[40px]  
                ${
                  index <= (hover || rating)
                    ? " text-yellow-400"
                    : " text-black/60"
                }`}
              key={index}
              onClick={() => setRating(index)}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
            />
          );
        })}
      </div>
    </div>
  );
};
