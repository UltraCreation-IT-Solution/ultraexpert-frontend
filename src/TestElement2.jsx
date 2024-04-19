import React, { useState } from "react";

function ReactQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const questions = [
    {
      question:
        "What is the purpose of React's componentDidMount lifecycle method?",
      options: {
        a: "To update the component's state",
        b: "To perform side effects, such as data fetching or DOM manipulations",
        c: "To initialize the component's props",
        d: "To render the component on the screen",
      },
      question_id: "b03cc186-fdbe-11ee-aec7-0242ac140004",
      correct_answer: "b",
    },
    {
      question:
        "Which React hook is used to conditionally run effects in a functional component?",
      options: {
        a: "useEffect",
        b: "useLayoutEffect",
        c: "useContext",
        d: "useReducer",
      },
      question_id: "b03cc26c-fdbe-11ee-aec7-0242ac140004",
      correct_answer: "a",
    },
    {
      question: "What will be the output of the following React code?",
      question_id: "b03cc302-fdbe-11ee-aec7-0242ac140004",
      code: "function MyComponent() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    document.title = `You clicked ${count} times`;\n  });\n\n  return (\n    <button onClick={() => setCount(count + 1)}>\n      Click me\n    </button>\n  );\n}",
      options: {
        a: "This component will not render anything",
        b: "The document title will not update when the button is clicked",
        c: "The component will update the document title with the count of button clicks",
        d: "The count of button clicks will not update",
      },
      correct_answer: "c",
    },
    {
      question: "What is the purpose of React's PureComponent?",
      options: {
        a: "To optimize performance by preventing unnecessary re-renders",
        b: "To handle user input events",
        c: "To manage state in functional components",
        d: "To create reusable components",
      },
      question_id: "b03cc3b6-fdbe-11ee-aec7-0242ac140004",
      correct_answer: "a",
    },
    {
      question:
        "Which of the following is NOT a valid way to pass data from a parent component to a child component in React?",
      options: {
        a: "Using props",
        b: "Using context",
        c: "Using refs",
        d: "Using state",
      },
      question_id: "b03cc44c-fdbe-11ee-aec7-0242ac140004",
      correct_answer: "d",
    },
  ];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuiz = () => {
    // Handle finish quiz action, e.g., submit score to server
    console.log("Quiz finished. Score:", score);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md mb-8 border border-blue-500">
        <h2 className="text-2xl font-semibold mb-4">React Quiz</h2>
        <p className="text-gray-800 mb-4">
          {questions[currentQuestion].question}
        </p>
        {questions[currentQuestion].code && (
          <div className="bg-gray-100 px-4 py-2 rounded-md mb-4">
            <code>{questions[currentQuestion].code}</code>
          </div>
        )}
        <div className="grid grid-cols-1 gap-4">
          {Object.entries(questions[currentQuestion].options).map(
            ([option, text]) => (
              <button
                key={option}
                className={`bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-md hover:bg-blue-100 focus:outline-none ${
                  selectedOption === option ? "bg-blue-200" : ""
                }`}
                onClick={() => handleOptionSelect(option)}
              >
                {text}
              </button>
            )
          )}
        </div>
      </div>
      <div>
        {currentQuestion < questions.length - 1 ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mr-4"
            onClick={handleNextQuestion}
          >
            Next Question
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 mr-4"
            onClick={handleFinishQuiz}
          >
            Finish Quiz
          </button>
        )}
      </div>
    </div>
  );
}

export default ReactQuiz;
