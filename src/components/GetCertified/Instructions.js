import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SkillList = () => {
  const [mandatorySkillPassed, setMandatorySkillPassed] = useState(false);

  // Function to handle passing the mandatory skill
  const handlePassMandatorySkill = () => {
    setMandatorySkillPassed(true);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      {/* Mandatory Skill Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Mandatory Skill</h2>
        {!mandatorySkillPassed ? (
          <div>
            <p className="text-red-600 font-semibold">
              You need to pass this skill before proceeding.
            </p>
            {/* Button to pass the skill */}
            <button
              onClick={handlePassMandatorySkill}
              className="bg-green-500 text-white px-4 py-2 rounded-md mt-2"
            >
              Pass Mandatory Skill
            </button>
          </div>
        ) : (
          <p className="text-green-600 font-semibold">
            Mandatory Skill Passed!
          </p>
        )}
      </div>

      {/* Verified Skills Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Verified Skills</h2>
        {/* Placeholder for verified skills */}
        <ul className="list-disc pl-6">
          <li className="text-gray-800">Verified Skill 1</li>
          <li className="text-gray-800">Verified Skill 2</li>
          {/* Add more verified skills here */}
        </ul>
      </div>

      {/* Non-Verified Skills Section */}
      <div>
        <h2 className="text-lg font-semibold mb-2">Non-Verified Skills</h2>
        {/* Placeholder for non-verified skills */}
        <ul className="list-disc pl-6">
          <li className="text-gray-800">Non-Verified Skill 1</li>
          <li className="text-gray-800">Non-Verified Skill 2</li>
          {/* Add more non-verified skills here */}
        </ul>
      </div>
    </div>
  );
};
const Instructions = ({ handleShowInstructions }) => {
  const Nevigate = useNavigate();
  const goToTest = () => {
    Nevigate("/test");
  };
  return (
    <>
      <SkillList />
      {/* <div className="h-auto  w-[68%] rounded-lg bg-white shadow-xl p-10">
        <div className="flex items-center justify-between text-xl font-bold">
          <div>Instructions</div>
        </div>
        <div className="text-sm text-gray-500 my-3 ">
          Read the instructions carefully before starting the test
        </div>
        <div>
          <div className="text-base my-3">
            1. There is no next option available. You cannot skip to the next
            question without solving the current problem.
          </div>
          <div className="text-base my-3">
            2. Each question/problem has a time limit and the next question will
            appear automatically once it's over.
          </div>
          <div className="text-base my-3">
            3. No skip or back/previous option is available.
          </div>
          <div className="text-base my-3">
            4. You must only attempt this exam once. Any additional attempts
            should only be used in the event where a serious technical issue has
            occurred and supporting evidence supporting this will be required.
          </div>
          <div className="text-base my-3">
            5. Do not shift to other tabs during the test. If done so, the test
            will get submitted automatically even if it is not completed.
          </div>
          <div className="text-base my-3">
            6. Lorem ipsum dolor sit amet consectetur. Sed diam pharetra
            elementum tincidunt fringilla in. Nulla arcu sagittis nec nulla et
            sapien gravida.
          </div>
          <div className="text-base my-3">
            7. Lorem ipsum dolor sit amet consectetur. Sed diam pharetra
            elementum tincidunt fringilla in. Nulla arcu sagittis nec nulla et
            sapien gravida.
          </div>
          <div className="text-base my-3">
            8. Lorem ipsum dolor sit amet consectetur. Sed diam pharetra
            elementum tincidunt fringilla in. Nulla arcu sagittis nec nulla et
            sapien gravida.
          </div>
          <div className="text-base my-3">
            9. Lorem ipsum dolor sit amet consectetur. Sed diam pharetra
            elementum tincidunt fringilla in. Nulla arcu sagittis nec nulla et
            sapien gravida.
          </div>
        </div>
        <div
          className="mt-5 bg-blue-500 hover:bg-blue-600 transition-all text-base text-white px-5 py-2 rounded-lg ml-auto cursor-pointers w-fit cursor-pointer"
          onClick={goToTest}
        >
          Agree and Continue
        </div>
      </div> */}
    </>
  );
};

export default Instructions;
