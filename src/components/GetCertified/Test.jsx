import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios";
import ReactQuiz from "./ReactQuiz";

const ThoughtProcess = () => {
  const [test_id, setTest_id] = useState("");
  const [thoughtProcess, setThoughtProcess] = useState([]);
  const [report_id, setReport_id] = useState("");
  const [questionsFetched, setQuestionsFetched] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes timer
  const [isTimeOver, setIsTimeOver] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const cookies = document.cookie.split("; ");
      const jsonData = {};

      cookies.forEach((item) => {
        const [key, value] = item.split("=");
        jsonData[key] = value;
      });
      try {
        const response = await axios.get(
          "/inspections/test/?action=1&skill_name=thought_process",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jsonData.access_token}`,
            },
          }
        );
        console.log(
          "fetched",
          response.data.data.test_id,
          response.data.data.report_id
        );
        setTest_id(response.data.data.test_id);
        setThoughtProcess(response.data.data.thought_process);
        setReport_id(response.data.data.report_id);
        setQuestionsFetched(true);

        // Start the timer after questions are fetched
        timerRef.current = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime === 0) {
              clearInterval(timerRef.current);
              setIsTimeOver(true);
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
      } catch (error) {
        console.log(error);
      }
    };
    fetchQuestions();

    // Clear interval on component unmount
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (isTimeOver) {
      // Handle time over action, e.g., show popup
      console.log("Time is over");
    }
  }, [isTimeOver]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("index", index);
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
  };

  const handleDrop = (e, newIndex) => {
    const droppedIndex = parseInt(e.dataTransfer.getData("index"));
    const newThoughtProcess = [...thoughtProcess];
    const movedItem = newThoughtProcess.splice(droppedIndex, 1)[0];
    newThoughtProcess.splice(newIndex, 0, movedItem);
    setThoughtProcess(newThoughtProcess);
  };

  const handleSubmit = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};

    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });

    if (!questionsFetched) {
      console.log("Questions not fetched yet.");
      return;
    }

    const arrayString =
      "[" + thoughtProcess.map((item) => "'" + item + "'").join(", ") + "]";
    console.log(arrayString);
    try {
      const response = await axios.post(
        "/inspections/test/",
        {
          action: 1,
          answer: arrayString,
          report_id: Number(report_id),
          test_id: test_id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      console.log(response);
      try {
        const res = await axios.get(
          `/inspections/test/?action=2&skill_name=thought_process&test_id=${test_id}&report=${report_id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jsonData.access_token}`,
            },
          }
        );
        console.log(res);
        navigate("/expertdashboard");
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    clearInterval(timerRef.current);
    navigate("/expertdashboard/getcertified");
    console.log("Cancelled the test");
  };

  // Format the time left to mm:ss
  const formattedTimeLeft = new Date(timeLeft * 1000)
    .toISOString()
    .substr(14, 5);

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-8 border border-blue-500">
        <h2 className="text-2xl font-semibold mb-4">
          Thought Process Reordering Quiz
        </h2>
        <div className="flex items-center justify-center bg-blue-300 text-white px-6 py-3 rounded-full shadow-md mb-4">
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
          <span className="text-xl">{formattedTimeLeft}</span>
        </div>
        <p className="mb-4">
          Drag and drop the components to reorder them in the correct order:
        </p>
        <ul className="flex flex-wrap gap-2 py-4">
          {thoughtProcess.map((step, index) => (
            <li
              key={index}
              className="bg-white text-gray-800 border border-blue-500 px-4 py-2 rounded-md cursor-move shadow-md flex-grow"
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e, index)}
            >
              {step}
            </li>
          ))}
        </ul>
      </div>
      {isTimeOver && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-2xl font-semibold text-gray-800 mb-4">
              Time's Up!
            </p>
            <p className="text-gray-600">
              Your time is over. Please submit your answers.
            </p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mt-4"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      )}
      <div className="bg-white py-4 w-full border-t border-blue-500">
        <div className="container mx-auto flex justify-between">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="bg-white text-blue-500 px-4 py-2 rounded-full border border-blue-500 hover:text-white hover:bg-blue-500 hover:border-transparent"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="fixed top-4 right-4 bg-white p-4 rounded-md shadow-md border border-blue-500 text-blue-500">
        {formattedTimeLeft}
      </div>
    </div>
  );
};

function TestElement() {
  const params = useParams();
  console.log(params);
  return params.skill_Name === "thought_process" ? (
    <ThoughtProcess />
  ) : (
    <ReactQuiz skill_Name={params.skill_Name} />
  );
}

export default TestElement;
