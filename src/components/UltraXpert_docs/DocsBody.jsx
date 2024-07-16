import React, { useState } from "react";
import { TopExperts } from "../Landing/Landing";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { landingComponents } from "../../constant";
import CodeMirror from "@uiw/react-codemirror";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { IoCopyOutline } from "react-icons/io5"

const DocsBody = () => {

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };
  return (
    <div className="w-full h-screen ml-[3vw] mr-[6vw] ">
      <div>
        {landingComponents.map((item, index) => {
          return (
            <>
              <div className="mb-24">
                <div className="text-4xl font-extrabold mb-4"># {item.name}</div>
                <div className="border border-solid">
                  <div className="flex items-center justify-between bg-slate-600 px-2 text-sm">
                    <div className="text-white">JSX</div>
                    <div
                      onClick={() => handleCopy(item.code)}
                      className="text-white p-2 flex items-center gap-2 cursor-pointer"
                    >
                      <IoCopyOutline />
                      Copy Code
                    </div>
                  </div>
                  {/* <SyntaxHighlighter language="jsx">{item.code}</SyntaxHighlighter> */}
                  <CodeMirror
                    value={item.code}
                    theme={sublime}
                    extensions={[]}
                    onChange={(value) => handleCodeChange(value)}
                    className="min-h-fit max-h-[500px]"
                  />
                </div>
                <div>{item?.preview} </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default DocsBody;
