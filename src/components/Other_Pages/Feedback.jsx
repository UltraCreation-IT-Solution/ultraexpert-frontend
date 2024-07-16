import React, { useState, useEffect } from "react";
import { MdStar } from "react-icons/md";

const Feedback = () => {
  const [availabilityRating, setAvailabilityRating] = useState(-1);
  const [skillsRating, setSkillsRating] = useState(-1);
  const [cooperationRating, setCooperationRating] = useState(-1);
  const [deadlineRating, setDeadlineRating] = useState(-1);
  const [qualityRating, setQualityRating] = useState(-1);
  const [communicationRating, setCommunicationRating] = useState(-1);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const feedback = {
      availability: availabilityRating,
      skills: skillsRating,
      cooperation: cooperationRating,
      deadline: deadlineRating,
      quality: qualityRating,
      communication: communicationRating,
      feedback: comment,
    };
    // Send the feedback to your backend API
    console.log("Feedback submitted:", feedback);

    // Example: axios.post('/api/feedback', feedback)
  };
  const reset = () => {
    setAvailabilityRating(-1);
    setSkillsRating(-1);
    setCooperationRating(-1);
    setDeadlineRating(-1);
    setQualityRating(-1);
    setCommunicationRating(-1);
    setComment("");
    console.log(
      "Feedback submitted:",
      availabilityRating,
      skillsRating,
      cooperationRating,
      deadlineRating,
      qualityRating,
      communicationRating,
      comment
    );
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
        <div className="flex flex-col xs:flex-row gap-4 mt-10">
          <button
            onClick={reset}
            className="text-sm md:text-base px-4 py-2 rounded-sm text-black bg-white border border-solid border-slate-400 hover:bg-slate-100"
          >
            Reset
          </button>
          <button
            onClick={handleSubmit}
            className="text-sm md:text-base px-4 py-2 btnBlack rounded-sm text-white"
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
