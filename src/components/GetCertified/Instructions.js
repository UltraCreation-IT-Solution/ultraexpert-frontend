import React from "react";
import Test from "./Test"
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
const Instructions = ({handleShowInstructions}) => {
    const Nevigate = useNavigate();
    const goToTest = () => {
        Nevigate("/test");
    };
  return (
    <div className="w-full h-full absolute top-0 left-0 z-50 flex items-start justify-center backdrop-contrast-50 backdrop-blur-sm pb-10 border border-solid border-slate-300">
        <div className="h-auto  w-[80%] rounded-lg mt-[100px] bg-white shadow-xl p-10">
        <div className="flex items-center justify-between text-xl font-bold">
                <div>Instructions</div>
                <IoCloseOutline className="text-2xl" onClick={handleShowInstructions} />
            </div>
            <div className="text-sm text-gray-500 my-3 ">Read the instructions carefully before starting the test</div>
            <div>
                <div className="text-base my-3">
                    1. There is no next option available. You cannot skip to the next question without solving the current problem.
                </div>
                <div className="text-base my-3">
                2. Each question/problem has a time limit and the next question will appear automatically once it's over.
                </div>
                <div className="text-base my-3">
                3. No skip or back/previous option is available.
                </div>
                <div className="text-base my-3">
                4. You must only attempt this exam once. Any additional attempts should only be used in the event where a serious technical issue has occurred and supporting evidence supporting this will be required.
                </div>
                <div className="text-base my-3">
                5. Do not shift to other tabs during the test. If done so, the test will get submitted automatically even if it is not completed.
                </div>
                <div className="text-base my-3">
                6. Lorem ipsum dolor sit amet consectetur. Sed diam pharetra elementum tincidunt fringilla in. Nulla arcu sagittis nec nulla et sapien gravida.
                </div>
                <div className="text-base my-3">
                7. Lorem ipsum dolor sit amet consectetur. Sed diam pharetra elementum tincidunt fringilla in. Nulla arcu sagittis nec nulla et sapien gravida.
                </div>
                <div className="text-base my-3">
                8. Lorem ipsum dolor sit amet consectetur. Sed diam pharetra elementum tincidunt fringilla in. Nulla arcu sagittis nec nulla et sapien gravida.
                </div>
                <div className="text-base my-3">
                9. Lorem ipsum dolor sit amet consectetur. Sed diam pharetra elementum tincidunt fringilla in. Nulla arcu sagittis nec nulla et sapien gravida.
                </div>
            </div>
            <div className="mt-5 bg-blue-500 hover:bg-blue-600 transition-all text-base text-white px-5 py-2 rounded-lg ml-auto cursor-pointers w-fit cursor-pointer"
            onClick={goToTest}>
                Agree and Continue
            </div>
        </div>
    </div>
  );
};

export default Instructions;
