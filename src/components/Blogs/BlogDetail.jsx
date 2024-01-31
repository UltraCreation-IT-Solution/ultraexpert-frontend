import Footer from "../Boundary/Footer";
import Navbar from "../Boundary/Navbar";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export const CommentCard = () => {
  return (
    <div className="mt-[5vw] my-10 pb-[1vw] border-b-[1px] border-black border-solid">
      <div className="flex gap-5">
        <img
          className="h-[3vw] w-[3vw] shrink-0 object-cover rounded-full"
          src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <div className="md:text-[1.8vw] sm:text-[2vw] lg:text-[1.6vw] text-[2.5vw] font-semibold">
            Antony Squash
          </div>
          <div className="flex items-center my-4 gap-10 text-gray-400">
            <div className="md:text-[1vw] sm:text-[1.5vw] lg:text-[1vw] text-[2vw]">
              1 month ago
            </div>
          </div>
          <p className="md:text-[1.3vw] sm:text-[1.5vw] lg:text-[1vw] text-[2.5vw] font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            beatae omnis, enim nesciunt vel id tempore veritatis ut ad, ipsum
            reprehenderit facilis sapiente ea voluptatibus, inventore eum non
            aspernatur labore quaerat similique assumenda at placeat. At
            voluptas dolorum quibusdam harum!
          </p>
        </div>
      </div>
    </div>
  );
};

const BlogDetails = () => {
  return (
    <div className="w-[100%] h-100vh">
      <Navbar />
      <div className="flex items-center justify-center">
        <div className="md:flex-col gap-6 mx-0 md:px-[2.5vw] py-[1vw] mt-[100px]">
          <p className="mt-[2vw] text-[2.2vw] sm:text-[1.7vw] md:text-[1.5vw] lg:text-[0.8vw] flex items-center justify-center text-[#a7a6a6] font-montserrat">
            October 04,2023
          </p>
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[4vw] mx-[0.5vw] shrink-0 text-center">
            Upgrade your skills with the help of our experts!
          </h1>
          <p className="flex text-[2vw] sm:text-[1.5vw] md:text-[1vw] lg:text-[0.9vw] items-center justify-center text-[#a7a6a6] font-montserrat">
            Blog - By Bhavesh@bhanushali - 0 comments
          </p>
        </div>
        <div className="border-l-2 border-solid border-slate-600"></div>
      </div>
      <div className="border-b border-gray-300 border-solid mb-10 mx-[45vw]"></div>
      <div className="flex items-center justify-center">
        <img
          className="w-[85vw] h-[50vw]"
          src="https://mummaslife.com/wp-content/uploads/2022/10/Thermosteel-Lunch-Box.jpeg"
          alt=""
        />
      </div>
      <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] mx-[6.8vw] text-justify font-montserrat">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam amet
        dolorum, alias dolor enim dolore, explicabo, dolorem fuga quod magni id
        culpa dignissimos. Quasi ipsam, assumenda, dolorem nesciunt voluptatibus
        sunt accusamus esse illum excepturi id accusantium, pariatur culpa
        exercitationem ratione eius expedita! Debitis, doloribus sed eaque quod
        commodi cumque error, incidunt quaerat temporibus sint facilis expedita.
        Nulla nihil blanditiis porro debitis architecto amet sit harum, natus
        ducimus quae? Deleniti natus molestias doloribus velit perspiciatis
        harum omnis numquam cum quo. Ratione natus ipsam maiores blanditiis.
        Alias commodi provident ipsum excepturi ex quaerat delectus, natus iste
        optio id. Ab nemo at totam!
      </p>
      <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] mx-[6.8vw] text-justify font-montserrat">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam amet
        dolorum, alias dolor enim dolore, explicabo, dolorem fuga quod magni id
        culpa dignissimos. Quasi ipsam, assumenda, dolorem nesciunt voluptatibus
        sunt accusamus esse illum excepturi id accusantium, pariatur culpa
        exercitationem ratione eius expedita! Debitis, doloribus sed eaque quod
        commodi cumque error, incidunt quaerat temporibus sint facilis expedita.
        Nulla nihil blanditiis porro debitis architecto amet sit harum, natus
        ducimus quae? Deleniti natus molestias doloribus velit perspiciatis
        harum omnis numquam cum quo. Ratione natus ipsam maiores blanditiis.
        Alias commodi provident ipsum excepturi ex quaerat delectus, natus iste
        optio id. Ab nemo at totam!
      </p>
      <div className="flex-col justify-center items-center mx-[6.8vw]">
        <h2 className="font-bold text-[4.5vw] sm:text-[3vw] md:text-[3vw] lg:text-[2vw]">
          How will these platform help you?
        </h2>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify font-montserrat">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro
          error, tenetur quia exercitationem eveniet sed voluptas nulla quaerat,
          non alias! Dolorem sapiente rem veniam facere? Optio corporis, eveniet
          modi ratione quasi enim, rem ut, eius mollitia ducimus expedita velit
          officiis in corrupti dignissimos maxime odit illum voluptatem
          aspernatur repudiandae.
        </p>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero
          fugiat, consectetur corrupti voluptates accusantium aliquid officiis,
          hic iste dignissimos voluptas quidem incidunt sequi! Delectus, cumque
          voluptas debitis velit perspiciatis, ut iure earum repudiandae unde,
          impedit ad atque enim doloremque possimus alias? Libero illum laborum
          mollitia quas et, voluptate magni?
        </p>
        <h2 className="font-bold text-[4.5vw] sm:text-[3vw] md:text-[3vw] lg:text-[2vw] font-montserrat">
          How will these platform help you?
        </h2>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro
          error, tenetur quia exercitationem eveniet sed voluptas nulla quaerat,
          non alias! Dolorem sapiente rem veniam facere? Optio corporis, eveniet
          modi ratione quasi enim, rem ut, eius mollitia ducimus expedita velit
          officiis in corrupti dignissimos maxime odit illum voluptatem
          aspernatur repudiandae.
        </p>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero
          fugiat, consectetur corrupti voluptates accusantium aliquid officiis,
          hic iste dignissimos voluptas quidem incidunt sequi! Delectus, cumque
          voluptas debitis velit perspiciatis, ut iure earum repudiandae unde,
          impedit ad atque enim doloremque possimus alias? Libero illum laborum
          mollitia quas et, voluptate magni?
        </p>
        <h2 className="font-bold text-[4.5vw] sm:text-[3vw] md:text-[3vw] lg:text-[2vw]">
          How will these platform help you?
        </h2>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify font-montserrat">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro
          error, tenetur quia exercitationem eveniet sed voluptas nulla quaerat,
          non alias! Dolorem sapiente rem veniam facere? Optio corporis, eveniet
          modi ratione quasi enim, rem ut, eius mollitia ducimus expedita velit
          officiis in corrupti dignissimos maxime odit illum voluptatem
          aspernatur repudiandae.
        </p>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero
          fugiat, consectetur corrupti voluptates accusantium aliquid officiis,
          hic iste dignissimos voluptas quidem incidunt sequi! Delectus, cumque
          voluptas debitis velit perspiciatis, ut iure earum repudiandae unde,
          impedit ad atque enim doloremque possimus alias? Libero illum laborum
          mollitia quas et, voluptate magni?
        </p>
        <h2 className="font-bold text-[4.5vw] sm:text-[3vw] md:text-[3vw] lg:text-[2vw]">
          How will these platform help you?
        </h2>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify font-montserrat">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro
          error, tenetur quia exercitationem eveniet sed voluptas nulla quaerat,
          non alias! Dolorem sapiente rem veniam facere? Optio corporis, eveniet
          modi ratione quasi enim, rem ut, eius mollitia ducimus expedita velit
          officiis in corrupti dignissimos maxime odit illum voluptatem
          aspernatur repudiandae.
        </p>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero
          fugiat, consectetur corrupti voluptates accusantium aliquid officiis,
          hic iste dignissimos voluptas quidem incidunt sequi! Delectus, cumque
          voluptas debitis velit perspiciatis, ut iure earum repudiandae unde,
          impedit ad atque enim doloremque possimus alias? Libero illum laborum
          mollitia quas et, voluptate magni?
        </p>
        <h2 className="font-bold text-[4.5vw] sm:text-[3vw] md:text-[3vw] lg:text-[2vw]">
          How will these platform help you?
        </h2>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify font-montserrat">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos porro
          error, tenetur quia exercitationem eveniet sed voluptas nulla quaerat,
          non alias! Dolorem sapiente rem veniam facere? Optio corporis, eveniet
          modi ratione quasi enim, rem ut, eius mollitia ducimus expedita velit
          officiis in corrupti dignissimos maxime odit illum voluptatem
          aspernatur repudiandae.
        </p>
        <p className="text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw] text-justify font-montserrat">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero
          fugiat, consectetur corrupti voluptates accusantium aliquid officiis,
          hic iste dignissimos voluptas quidem incidunt sequi! Delectus, cumque
          voluptas debitis velit perspiciatis, ut iure earum repudiandae unde,
          impedit ad atque enim doloremque possimus alias? Libero illum laborum
          mollitia quas et, voluptate magni?
        </p>
        <p className="flex gap-2 text-[3vw] sm:text-[2vw] md:text-[1.2vw] lg:text-[1vw]">
          Tags:{" "}
          <button className="rounded-md cursor-pointer duration-200">
            Lorem
          </button>
          <button className="rounded-md cursor-pointer">Lorem</button>
          <button className="rounded-md cursor-pointer">Lorem</button>
        </p>
      </div>
      <br />
      <br />
      <div className="border-b border-gray-300 border-solid mt-[2vw] pt-4 mx-[6.8vw]"></div>
      <div className="flex justify-between mt-[2vw] scrollbar">
        <div className="flex-row mx-[6.8vw] scrollbar">
          <button className="flex bg-white hover:scale-105 duration-200">
            <IoIosArrowBack size={30} className="" />
            <div>
              <div className="flex">Previous Post</div>
              <div className="flex">How to book an expert</div>
            </div>
          </button>
        </div>
        <div className="flex-row mx-[6.8vw] scrollbar">
          <button className="flex bg-white hover:scale-105 duration-200">
            <div>
              <div className="flex">Next Post</div>
              <div className="flex">Use the platform effectively</div>
            </div>
            <IoIosArrowForward size={30} className="" />
          </button>
        </div>
      </div>
      <div className="border-b border-gray-300 border-solid mt-[2vw] pt-4 mx-[6.8vw]"></div>
      <div className="  h-[100vh] mx-[6.8vw] mt-[4vw]">
        <div className="font-bold text-[1.5vw]">
          <p className="text-[4vw] sm:text-[3vw] md:text-[2vw]">
            Leave a comment
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Write a comment here"
              className=" peer h-full w-full border-b border-gray-300 bg-transparent pt-4 pb-1.5 font-montserrat text-lg font-normal text-gray-300 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
            <button className="mx-2 p-[0.9vw] text-center rounded-xl bg-black text-white text-[0.8vw] cursor-pointer">
              Comment
            </button>
          </div>
        </div>
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
      <button className="mx-[6.8vw] sm:p-[1.5vw] md:p-[1.2vw] lg:p-[1vw] p-[2vw] text-center rounded-xl bg-black text-white sm:text-[1.5vw] md:text[1.5vw] lg:text-[1vw] text-[2vw] cursor-pointer">
        See More
      </button>
      <Footer />
    </div>
  );
};
export default BlogDetails;
