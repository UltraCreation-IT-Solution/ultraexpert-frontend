import social from "../src/assets/images/socialmedia.png";
import webD from "../src/assets/images/webdesign.png";
import voice from "../src/assets/images/voiceover.png";
import book from "../src/assets/images/Bookcovers.png";
import logoD from "../src/assets/images/logodesign.png";
import dataEntry from "../src/assets/images/dataEntry.png";
import interior from "../src/assets/images/interiordesign.png";
import seo from "../src/assets/images/seo.png";
import axios from "./axios";
import { TopExperts } from "./components/Landing/Landing";
import { WhatWeDo } from "./components/Boundary/HeroSection";

export const handleUploadImage = async (file, filename) => {
  const cookies = document.cookie.split("; ");
  const jsonData = {};
  cookies.forEach((item) => {
    const [key, value] = item.split("=");
    jsonData[key] = value;
  });
  const formData = new FormData();
  formData.append("file", file);
  formData.append("filename", filename);

  try {
    const res = await axios.post("/file_upload/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${jsonData.access_token}`,
      },
    });
    return res.data.data.url;
  } catch (err) {
    return err;
  }
};
export const landingImgRow1 = [
  "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  webD,
  "https://images.unsplash.com/photo-1696429175928-793a1cdef1d3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  voice,
  "https://images.unsplash.com/photo-1506241537529-eefea1fbe44d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  book,
  "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1507332194683-0ce90ffa318a?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  social,
  "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export const landingImgRow2 = [
  logoD,
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  dataEntry,
  "https://images.unsplash.com/photo-1565728744382-61accd4aa148?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=1665&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

  interior,
  "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1559854036-2409f22a918a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  seo,
  "https://images.unsplash.com/photo-1612548403247-aa2873e9422d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1525362081669-2b476bb628c3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
export const categories = [
  "App",
  "Web Development",
  "Development",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "Angular",
  "Vue",
  "Flutter",
  "React Native",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Firebase",
  "Typescript",
  "App",
  "Web Development",
  "Development",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "Angular",
  "Vue",
  "Flutter",
  "React Native",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Firebase",
  "Typescript",
  "Development",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "Angular",
  "Vue",
  "Flutter",
  "React Native",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Firebase",
  "Typescript",
];
export const searchCategories = [
  "App",
  "HTML",
  "CSS",
  "JavaScript",
  "ReactJS",
  "Redux",
  "Web Development",
  "Angular",
  "Vue",
  "Flutter",
  "React Native",
  "NextJS",
  "NodeJS",
  "ExpressJS",
  "MongoDB",
  "Firebase",
  "Typescript",
  "DSA",
  "c++",
  "Java",
  "Python",
  "Cookie",
  "Mongoose",
  "Development",
  "Product Photography",
  "Video Editing",
  "Creative Design",
  "Figma",
  "Canva",
  "Designing",
];

export const landingComponents = [
  {
    name: "Search Bar",
    code: `<div className="md:-mt-5 flex justify-center items-center">
  <input
    className="w-[84vw] sm:w-[66vw] md:w-[60vw] bg-[#ECECEC] rounded-md pl-3 sm:pl-6 py-[0.8rem] xs:text-sm sm:text-base md:text-lg outline-none focus:border-blue-200 border-solid focus:border-[0.8px]"
    type="text"
    placeholder="Search for any services"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
  />
</div>`,
  },
  {
    name: "Marquee",
    code: `<div className="w-[100vw] mt-8 md:mt-12 h-auto overflow-hidden">
  <Marquee className="my-2" speed={40}>
    {landingImgRow1.map((item, index) => (
      <div
        className="w-[24vw] h-[24vw] xs:w-[16vw] xs:h-[16vw] md:w-[10.5vw] md:h-[10.5vw] mr-[8px] md:mr-[10px] rounded-[18px] items-center justify-center overflow-hidden"
        key={index}
      >
        <img className="w-full h-full object-fill" src={item} />
      </div>
    ))}
  </Marquee>
  <Marquee className="my-4" speed={30} direction="right">
    {landingImgRow2.map((item, index) => (
      <div
        className="w-[24vw] h-[24vw] xs:w-[16vw] xs:h-[16vw] md:w-[10.5vw] md:h-[10.5vw] mr-[8px] md:mr-[10px] rounded-[18px] items-center justify-center overflow-hidden"
        key={index}
      >
        <img className="w-full h-full object-fill" src={item} />
      </div>
    ))}
  </Marquee>
</div>`,
  },
  {
    name: "Hero Section 1",
    code: `<div className="relative px-[5vw] md:px-[11vw] py-[6vw] mt-20 sm:mt-[6vw] xl:mt-0">
  <div className="bg-[#E0C8FF] h-12 w-12 sm:h-[7.1rem] sm:w-[7.1rem] lg:h-32 lg:w-32 absolute top-20 md:top-24 left-1 sm:left-5 lg:left-20 rounded-full"></div>
  <div className="bg-[#FC9D9D] h-6 w-6 xs:h-11 xs:w-11 md:h-14 md:w-14 absolute top-32 sm:top-[11rem] md:top-48 left-12 sm:left-28 md:left-32 lg:left-48 rounded-full"></div>
  <div className="bg-[#FFF500] h-10 w-10 sm:h-20 sm:w-20 absolute top-24 sm:top-[8vw] right-1 sm:right-[4vw] lg:right-[9vw] rounded-full"></div>
  <div className="text-2xl xs:text-3xl md:text-5xl font-bold text-center overflow-hidden py-1">
    We are creating a<br />
    Consulting platform
  </div>
  <div className="text-center text-base xs:text-xl md:text-2xl mt-3 md:mt-5">
    Consult & get mentored <br />
    by our experts
  </div>
  <div className="flex items-center justify-center flex-wrap gap-7 my-10">
    <div className="w-full sm:max-w-[260px] lg:min-w-[22vw] lg:max-w-[24vw] rounded-2xl bg-[#DAE9FF] p-5">
      <div className="text-xl mb-2 font-bold">01</div>
      <div className="line-clamp-5 text-ellipsis">
        Our innovative consulting and mentorship program connects you with seasoned professionals in various fields to elevate your skills and achieve your goals. Whether you're a budding entrepreneur, a seasoned professional seeking a career shift, or an individual aiming to master a specific skill, we have the perfect mentor waiting to guide you.
      </div>
    </div>
    <div className="w-full sm:max-w-[260px] lg:min-w-[22vw] lg:max-w-[24vw] rounded-2xl bg-[#DAE9FF] p-5">
      <div className="text-xl mb-2 font-bold">02</div>
      <div className="line-clamp-5 text-ellipsis">
        Receive tailored advice and support from an industry expert aligned with your specific needs and goals. Build connections with experienced professionals who can offer valuable mentorship and open doors to new opportunities. Choose from various service models, including single consultations, ongoing mentorship packages, or project-based engagements, to fit your specific needs and budget.
      </div>
    </div>
    <div className="w-full sm:max-w-[260px] lg:min-w-[22vw] lg:max-w-[24vw] rounded-2xl bg-[#DAE9FF] p-5">
      <div className="text-xl mb-2 font-bold">03</div>
      <div className="line-clamp-5 text-ellipsis">
        Make a positive impact by guiding and empowering individuals seeking your knowledge and experience. Showcase your expertise and expand your network, establishing yourself as a leader in your field. Monetize your knowledge by offering consulting and mentorship services on a flexible schedule.
      </div>
    </div>
  </div>
  <div className="bg-[#FDE1D8] rounded-2xl p-5 lg:p-10">
    <div className="font-bold text-lg md:text-2xl line-clamp-3 text-ellipsis">
      Ashi Pandey is a phenomenal creative strategist and designer.... an absolute joy to work with - and the results are spectacular. Bhavesh Bhanusali President of AIC
    </div>
    <div className="flex items-center gap-5 mt-5">
      <img
        className="h-9 w-9 rounded-full shrink-0 object-cover border-2 border-solid border-white"
        src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHx3b3JrfGVufDB8MHwwfHx8MA%3D%3D"
        alt=""
      />
      <div className="text-base">Bhavesh Bhanusali President of AIC</div>
    </div>
  </div>
</div>`,
  },
  {
    name: "Hero Section 2",
    code: `export const WhatWeDo = () => {
  const navigate = useNavigate();
  return (
    <div className="relative px-[5vw] md:px-[10vw] pb-[20vw] py-[10vw] lg:py-[6vw] my-20 lg:my-0">
      <div className="bg-[#E9F2FF] h-36 w-36 md:h-44 md:w-44 absolute top-0 lg:top-24 -left-28 sm:-left-20 rounded-full"></div>
      <div className="bg-[#DFC7FF] h-20 w-20 absolute top-6 lg:top-32 -right-14 sm:-right-5 rounded-full"></div>
      <div className="bg-[#FFE1D3] h-32 w-32 md:h-40 md:w-40 absolute bottom-0 -right-24 sm:-right-20 rounded-full"></div>
      <div className="text-[1.8rem] xs:text-4xl md:text-5xl font-bold text-center overflow-hidden">
        What is it we do?
      </div>

      <div className="flex flex-wrap gap-[2vw] lg:gap-[1vw] mt-10">
        <div className="relative rounded-3xl bg-[#DAE9FF] pl-14 pr-5 py-10 w-full lg:w-[39vw]">
          <div className="absolute top-9 left-4 sm:top-8 sm:left-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#B276FF]"></div>
          <div className="text-xl md:text-2xl font-bold shrink-0">
            Web Design
          </div>
          <div className="mt-5 line-clamp-5 text-ellipsis text-base">
            Master the art of crafting user-friendly websites with guidance on
            best practices for HTML, CSS, and JavaScript.Gain a strong
            foundation in server-side development with consultations on
            languages like Python, Java, or PHP. Learn best practices for
            building scalable and secure web applications, database management,
            and API integration.
          </div>
        </div>

        <div className="relative rounded-3xl bg-[#DAE9FF] pl-14 pr-5 py-10 w-full lg:w-[39vw]">
          <div className="absolute top-9 left-4 sm:top-8 sm:left-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#75ACFF]"></div>
          <div className="text-xl md:text-2xl font-bold shrink-0">
            Web Development
          </div>
          <div className="mt-5 line-clamp-5 text-ellipsis text-base shrink-0">
            Create user-centric experiences with expert guidance on UI/UX design
            principles. Learn about user research, information architecture,
            interaction design, and prototyping techniques to craft websites
            that are both beautiful and functional.
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-[2vw] lg:gap-[1vw] my-5">
        <div className="relative rounded-3xl bg-[#DAE9FF] pl-14 pr-5 py-10 w-full lg:w-[39vw]">
          <div className="absolute top-9 left-4 sm:top-8 sm:left-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#FFA37B]"></div>
          <div className="text-xl md:text-2xl font-bold shrink-0">
            Product Design
          </div>
          <div className="mt-5 line-clamp-5 text-ellipsis text-base shrink-0">
            Bring your product ideas to life with expert mentorship on product
            strategy development. Learn about market research techniques, user
            journey mapping, and customer validation to create a winning product
            roadmap.Enhance your problem-solving skills, user empathy, and
            collaborative brainstorming techniques.
          </div>
        </div>

        <div className="relative rounded-3xl bg-[#DAE9FF] pl-14 pr-5 py-10 w-full lg:w-[39vw]">
          <div className="absolute top-9 left-4 sm:top-8 sm:left-3 h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-[#FFA6A6]"></div>
          <div className="text-xl md:text-2xl font-bold shrink-0">Branding</div>
          <div className="mt-5 line-clamp-5 text-ellipsis text-base shrink-0">
            Craft a powerful brand identity that resonates with your target
            audience. Receive mentorship on defining your brand story, core
            values, and unique selling proposition (USP). Learn how to develop a
            consistent brand voice and messaging across all touchpoints.
          </div>
        </div>
      </div>
      <div className="bg-[#DAE9FF] rounded-3xl pl-5 sm:pl-8 pr-5 py-10 flex gap-2 sm:gap-5 items-center justify-between ">
        <div className="shrink-0 h-8 w-8 sm:h-10 sm:w-10 bg-[#795CFF] rounded-full"></div>
        <div className="text-xl md:text-2xl font-bold">
          Extended design services
        </div>
        <div
          className="ml-auto text-2xl md:text-3xl cursor-pointer shrink-0"
          onClick={() => navigate("/services")}
        >
          <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
}`,
    
  },
  {
    name: "Top 5 Experts",
    code: `export const TopExperts = () => {
const [top5ExpertList, setTop5ExpertList] = useState([]);
const location = useLocation().pathname;
const [activeNo, setActiveNo] = useState(0);
const navigate = useNavigate();
const cookies = document.cookie.split("; ");
const jsonData = {};

cookies.forEach((item) => {
  const [key, value] = item.split("=");
  jsonData[key] = value;
});

const getTop5Experts = async () => {
  try {
    const response = await axios.get("/topfive/?action=1", {
      headers: {
        "Content-Type": "application/json",
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
    setTop5ExpertList(response.data.data);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  getTop5Experts();
}, []);

return (
  <div className="relative w-full h-auto py-[5vw] md:py-[3vw] bg-[#F2F2F2] px-[6vw] md:px-[10vw] overflow-hidden mb-[3vw]">
    <Link
      to={"/experts"}
      className={\`\${location === "/experts" ? "hidden" : "block"} text-[#C5C3C3] text-4xl xs:text-5xl md:text-7xl lg:text-[84px]  font-bold flex justify-start md:justify-end decoration-transparent\`}
    >
      EXPERTS
    </Link>
    <div className="flex flex-col sm:flex-row mb-[12.5vw] sm:mb-[10vw] md:mb-[5vw] gap-5 md:gap-8 w-full  mt-[3vw] md:mt-[2vw]">
      {top5ExpertList.map((expert, index) => (
        <div
          key={expert?.expert_id}
          onMouseOver={() => setActiveNo(index)}
          onMouseLeave={() => setActiveNo(index)}
          className={\`\${activeNo === index ? "activeExpert" : "w-full sm:w-3/5 h-[36vh] md:h-[56vh] lg:h-[65vh]"} expertDiv relative flex flex-col gap-4  items-start rounded\`}
        >
          <div className="relative flex flex-col text-white justify-between w-full h-full backdrop-brightness-[60%] ">
            <img
              src={expert?.profile_img}
              alt="expert profile"
              className={\`absolute left-0 right-0 brightness-[60%] w-full h-full shrink-0 \${activeNo === index ? "object-center" : "object-center  object-cover"}\`}
            />
            <h2>{expert?.profession}</h2>
            {activeNo === index ? (
              <div className=" absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[4vw] sm:text-[2vw] md:text-[1.5vw]">
                  {expert?.expert_name}
                </h3>
                <h3 className=" justify-end text-[2.8vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                  <CiStar className="text-[3.4vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                  {expert?.avg_rating} /5
                </h3>
                <div
                  className="flex items-center justify-end mt-2 md:mt-4 text-white mb-3 cursor-pointer"
                  onClick={() =>
                    navigate(\`/experts/expertprofile/\${expert?.expert_id}\`)
                  }
                >
                  <span className="underline  text-[2.8vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                    See More
                  </span>
                  <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.1vw]" />
                </div>
              </div>
            ) : (
              <div className="sm:invisible absolute right-4 justify-start  bottom-0">
                <h3 className=" justify-end text-[4vw] sm:text-[2vw] md:text-[1.5vw]">
                  {expert?.expert_name}
                </h3>
                <h3 className=" justify-end text-[2.8vw] sm:text-[1.5vw] md:text-[1.2vw] flex gap-1 items-center -my-[8px] md:-my-[14px]">
                  <CiStar className="text-[3.4vw] sm:text-[2vw] md:text-[1.4vw]" />{" "}
                  {expert?.rating_count} /5
                </h3>
                <div
                  className="flex items-center justify-end mt-2 md:mt-4 text-white mb-3 cursor-pointer"
                  onClick={() =>
                    navigate(\`/experts/expertprofile/\${expert?.expert_id}\`)
                  }
                >
                  <span className="underline text-[2.8vw] sm:text-[1.4vw]  md:text-[1.1vw]">
                    See More
                  </span>{" "}
                  <GrFormNextLink className="text-[3.2vw] sm:text-[1.8vw] md:text-[1.4vw] mt-[0.4vw] sm:mt-[0.7vw]" />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
    <Link
      to={"/experts"}
      className={\`\${location === "/experts" ? "hidden" : "block"} text-[2.4vw] md:text-[1.6vw] text-black flex items-center justify-end no-underline mt-[-10vw] sm:mt-[-8vw] md:mt-[-3vw]\`}
    >
      See More Experts
      <GrFormNextLink className="mt-[0.5vw] text-[2vw] md:text-[1.4vw]" />
    </Link>
  </div>
);
};

`,
  },
];
