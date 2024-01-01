import React from "react";
import Marquee from "react-fast-marquee";
import { FaSearch } from "react-icons/fa";

const Landing = () => {
  const row1 = [
    "https://images.unsplash.com/photo-1662837088181-e721d3db52bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2huaWNhbCUyMHNlcnZpY2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1662837088181-e721d3db52bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2huaWNhbCUyMHNlcnZpY2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1662837088181-e721d3db52bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2huaWNhbCUyMHNlcnZpY2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1662837088181-e721d3db52bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2huaWNhbCUyMHNlcnZpY2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
  ];
  const row2 = [
    "https://images.unsplash.com/photo-1662837088181-e721d3db52bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2huaWNhbCUyMHNlcnZpY2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1662837088181-e721d3db52bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2huaWNhbCUyMHNlcnZpY2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1662837088181-e721d3db52bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2huaWNhbCUyMHNlcnZpY2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1662837088181-e721d3db52bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlY2huaWNhbCUyMHNlcnZpY2VzfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1523655223303-4e9ef5234587?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5pY2FsJTIwc2VydmljZXN8ZW58MHx8MHx8fDA%3D",
  ];

  return (
    <>
      <div className=" bg-white w-[100vw] h-[60px] overflow-hidden flex flex-row items-center justify-between py-0 px-[20px] box-border  text-[30px]">
        <h2 className="m-0 relative text-inherit font-extrabold font-inherit">
          ultraXpert
        </h2>
        <div className="flex flex-row items-center justify-center gap-[3.5vw] text-base text-[20px] mr-6">
          <div className="relative font-medium">Services</div>
          <div className="relative font-medium">Experts</div>
          <div className="relative font-medium">Blog</div>
          <div className="relative font-medium">Contact Us</div>
        </div>
      </div>
      <div className=" absolute w-[70vw] h-[67.8vh] mt-[8px] bg-gradient-to-r from-black to-transparent z-10 text-white">
        <h1 className="w-[340px] text-start text-[50px] font-bold mt-[20vh] ml-12 break-words">
          Think creative, Do effective
        </h1>
        <div>
          <input
            className="w-[35vw] h-[40px]  ml-12 rounded-md pl-4"
            type="text"
            placeholder="Search for services"
          />
          <FaSearch className="absolute text-black mt-[12px] ml-[-3vw] text-[20px]" />
        </div>
      </div>
      <div className="w-[100vw] h-auto overflow-hidden">
        <Marquee className="m-2" speed={100}>
          {row1.map((item, index) => (
            <img
              className="w-40 h-40 mr-[10px] rounded-md"
              key={index}
              src={item}
              alt="image"
            />
          ))}
        </Marquee>

        <Marquee className="m-2" speed={100} direction="right">
          {row2.map((item, index) => (
            <img
              className="w-40 h-40 mr-[10px]"
              key={index}
              src={item}
              alt="image"
            />
          ))}
        </Marquee>
        <Marquee className="m-2" speed={100}>
          {row1.map((item, index) => (
            <img
              className="w-40 h-40 mr-[10px] rounded-md"
              key={index}
              src={item}
              alt="image"
            />
          ))}
        </Marquee>
      </div>
    </>
  );
};

export default Landing;
