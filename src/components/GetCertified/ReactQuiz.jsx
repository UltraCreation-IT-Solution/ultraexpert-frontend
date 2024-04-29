import React, { useEffect, useState } from "react";
import axios from "../../axios";
import PropTypes from "prop-types";
import { FcAlarmClock } from "react-icons/fc";
import { useParams } from "react-router-dom";

function Question({
  question,
  options,
  selectedOption,
  onOptionSelect,
  skill_Name,
}) {
  return (
    <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-8 border border-blue-500">
      <h2 className="text-2xl font-semibold mb-4">{skill_Name} Quiz</h2>
      {typeof question === "object" ? (
        <div className="bg-gray-100 px-4 py-2 rounded-md mb-4">
          <code>{question.code}</code>
        </div>
      ) : (
        <p className="text-gray-800 mb-4">{question}</p>
      )}
      <div className="grid grid-cols-1 gap-4">
        {options.map(({ option, text }) => (
          <button
            key={option}
            className={`bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none ${
              selectedOption === option ? "bg-slate-500" : "bg-white"
            }`}
            onClick={() => onOptionSelect(option)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      code: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedOption: PropTypes.string,
  onOptionSelect: PropTypes.func.isRequired,
};

function ReactQuiz() {
  const params = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timer, setTimer] = useState(60); // Initial timer value in seconds

  const cookies = document.cookie.split(";");
  const jsonData = {};
  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/inspections/test/?action=1&skill_name=${params.skill_Name}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jsonData.access_token}`,
            },
          }
        );
        console.log(response);
        setQuestions(response.data?.data?.questions || []);
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 0) {
          setCurrentQuestion((prevQuestion) => prevQuestion + 1);
          return 60; // Reset timer for the next question
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000);

    // Cleanup function
    return () => clearInterval(timerId);
  }, [currentQuestion]);

  useEffect(() => {
    // Reset timer when current question changes
    setTimer(60);
  }, [currentQuestion]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = async () => {
    try {
      const response = axios.post(
        "/inspections/test/",
        {
          action: 1,
          question_id: "8bb7ca00-e62f-11ee-9ff0-0242ac120004",
          report_id: 3,
          answer: "To interact with databases using Python objects",
          test_id: "8bb7c6c2-e62f-11ee-9ff0-0242ac120004",
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
    } catch (error) {}
    const selectedOptionText =
      questions[currentQuestion].options[selectedOption];
    console.log(`Selected Option: ${selectedOptionText}`);
    setSelectedOption(null);
    setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handleFinishQuiz = () => {
    // Handle finish quiz action, e.g., submit score to server
    console.log("Quiz finished. Score:");
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (currentQuestion >= questions.length) {
    return (
      <div>
        <h2>Quiz completed</h2>
        <button onClick={handleFinishQuiz}>Finish Quiz</button>
      </div>
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="mx-auto container">
        <div className="flex justify-between items-center w-full p-4  bg-slate-300 rounded">
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            // onClick={handleCancelTest}
          >
            Cancel Test
          </button>
          <div className="flex items-center border-slate-400 border border-solid p-2 rounded">
            <FcAlarmClock />
            <span className="font-bold ml-2"> Time Left: </span>
            <span className=" ml-2">{timer} seconds</span>
          </div>
        </div>
      </div>
      <Question
        question={currentQuestionData.question}
        options={Object.entries(currentQuestionData.options).map(
          ([option, text]) => ({
            option,
            text,
          })
        )}
        selectedOption={selectedOption}
        onOptionSelect={handleOptionSelect}
        skill_Name={params.skill_Name}
      />
      <button
        className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mr-4 ${
          timer <= 0 ? "pointer-events-none" : ""
        }`}
        onClick={handleNextQuestion}
        disabled={timer <= 0}
      >
        Next Question
      </button>
    </div>
  );
}

export default ReactQuiz;
