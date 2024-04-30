import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdCancelPresentation } from "react-icons/md";
import axios from "../../axios";

const SkillList = () => {
  const Nevigate = useNavigate();
  const goToTest = () => {
    Nevigate(`/test/${selectedSkill}`);
  };
  const [qualifiedSkills, setQualifiedSkills] = useState(null);
  const [showInstructions, setShowInstructions] = useState(false);
  const [allVerificationData, setAllVerificationData] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState("");

  useEffect(() => {
    const getAllQualifiedSkills = async () => {
      const cookies = document.cookie.split("; ");
      const jsonData = {};
      cookies.forEach((item) => {
        const [key, value] = item.split("=");
        jsonData[key] = value;
      });
      try {
        const response = await axios.get("/inspections/test/?action=2", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        });
        if (
          !response.data ||
          response.data.status === 400 ||
          response.data.status === 401
        ) {
          console.log(response.data.message);
          return;
        }
        console.log(response.data.data);
        setAllVerificationData(response.data.data);
        setQualifiedSkills(response.data.data.qualified);
      } catch (error) {
        console.log(error);
      }
    };
    getAllQualifiedSkills();
  }, []);

  // Function to handle passing the mandatory skill
  const handlePassMandatorySkill = () => {
    setSelectedSkill("thought_process");
    setShowInstructions(true);
  };

  return (
    <div className="w-full md:w-[68%] h-fit rounded-lg bg-white shadow-xl flex">
      <div
        className={`bg-white rounded-md shadow-xl ${
          showInstructions ? "pl-6" : "px-6"
        } pt-2 w-full flex gap-4`}
      >
        <div className={`${showInstructions ? "w-2/5" : "w-full"} h-fit`}>
          {/* Mandatory Skill Section */}
          <div className="mb-6">
            <h2 className="bg-slate-200 text-lg font-semibold mb-2 p-4 border border-slate-300 border-solid container mx-auto">
              Mandatory Skill
            </h2>
            {!allVerificationData?.thought_process_passed ? (
              <div>
                <p className="text-red-600 font-semibold px-4">
                  You need to pass this skill before proceeding.
                </p>
                {/* Button to pass the skill */}
                <button
                  onClick={handlePassMandatorySkill}
                  className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 mx-4 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 "
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

          {/* Non-Verified Skills Section */}
          <div className="mb-6">
            <h2 className="bg-slate-200 text-lg font-semibold mb-2 p-4 border border-slate-300 border-solid container mx-auto ">
              Non-Verified Skills
            </h2>
            {qualifiedSkills && (
              <div className="flex flex-wrap gap-2">
                {Object.entries(qualifiedSkills).map(
                  ([skill, qualified]) =>
                    !qualified && (
                      <span
                        key={skill}
                        onClick={() => {
                          setShowInstructions(true);
                          setSelectedSkill(skill);
                        }}
                        className=" container mx-auto text-gray-800 px-4 py-2 rounded shadow-sm border border-slate-400 border-solid cursor-pointer"
                      >
                        {skill}
                      </span>
                    )
                )}
              </div>
            )}
          </div>
          {/* Verified Skills Section */}
          <div className="mb-6">
            <h2 className=" bg-slate-200 text-lg font-semibold mb-2 p-4 border border-slate-300 border-solid container mx-auto">
              Verified Skills
            </h2>
            {qualifiedSkills && (
              <div className="flex flex-wrap gap-2">
                {Object.entries(qualifiedSkills).map(
                  ([skill, qualified]) =>
                    qualified &&
                    skill !== "Thought Process" && (
                      <span
                        key={skill}
                        onClick={() => setShowInstructions(true)}
                        className=" container mx-auto text-gray-800 px-4 py-2 rounded shadow-sm border border-slate-400 border-solid cursor-pointer"
                      >
                        {skill}
                      </span>
                    )
                )}
              </div>
            )}
          </div>
        </div>
        {showInstructions && (
          <div className="w-3/5 rounded-lg bg-white shadow-xl px-10 py-6">
            <div className="flex items-center justify-between text-xl font-bold">
              <div>Instructions</div>
              <div className="flex items-center">
                <MdCancelPresentation
                  size={28}
                  className="cursor-pointer"
                  onClick={() => setShowInstructions(false)}
                />
              </div>
            </div>
            <div className="text-sm text-gray-500 my-3 ">
              Read the instructions carefully before starting the test
            </div>
            <div className="h-[460px] border-y border-solid border-slate-200 py-2">
              <div className="text-base my-3">
                1. There is no next option available. You cannot skip to the
                next question without solving the current problem.
              </div>
              <div className="text-base my-3">
                2. Each question/problem has a time limit and the next question
                will appear automatically once it's over.
              </div>
              <div className="text-base my-3">
                3. No skip or back/previous option is available.
              </div>
              <div className="text-base my-3">
                4. You must only attempt this exam once. Any additional attempts
                should only be used in the event where a serious technical issue
                has occurred and supporting evidence supporting this will be
                required.
              </div>
              <div className="text-base my-3">
                5. Do not shift to other tabs during the test. If done so, the
                test will get submitted automatically even if it is not
                completed.
              </div>
              <div className="text-base my-3">
                6. Lorem ipsum dolor sit amet consectetur. Sed diam pharetra
                elementum tincidunt fringilla in. Nulla arcu sagittis nec nulla
                et sapien gravida.
              </div>
            </div>
            <div
              className="mt-5 bg-blue-500 hover:bg-blue-600 transition-all text-base text-white px-5 py-2 rounded-lg ml-auto cursor-pointers w-fit cursor-pointer"
              onClick={goToTest}
            >
              Agree and Continue
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillList;
