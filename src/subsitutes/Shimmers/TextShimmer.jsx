import React from "react";

const TextShimmer = () => {
  return (
    <div role="status" class=" animate-pulse w-full ">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
      <span class="sr-only">Loading...</span>
    </div>
  );
};

export default TextShimmer;
