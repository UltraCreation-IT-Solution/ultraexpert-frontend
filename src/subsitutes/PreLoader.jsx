import React from "react";
const PreLoader = () => {
  return (
    <div className=" h-[100vh]  w-[100%] flex flex-col items-center justify-center ">
      <h1 className="text-5xl md:text-6xl font-sans tracking-wide font-extrabold -mb-[4vw] z-40">
        Ultra<span className="text-[#629CF0]">Xpert</span>
      </h1>
      <img
        className="h-[150px] md:h-[200px] w-[300px] object-cover"
        src="https://i.pinimg.com/originals/07/24/88/0724884440e8ddd0896ff557b75a222a.gif "
        alt=""
      />
    </div>
  );
};

export default PreLoader;
