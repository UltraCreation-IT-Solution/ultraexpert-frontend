import { PiCaretLeftLight } from "react-icons/pi";
import { PiCaretRightLight } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

export const CommentCard = () => {

  return (
    <div className="my-[3vw] md:my-[2vw] pb-[2vw] border-b-[1px] border-slate-400 border-solid">
      <div className="flex gap-[2.5vw] sm:gap-[2vw]">
        <img
          className="h-[9vw] w-[9vw] sm:h-[8vh] sm:w-[8vw] md:h-[3.7vw] md:w-[3.7vw] shrink-0 object-cover rounded-full"
          src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <div className="flex items-center justify-between">
            <div className="text-[3.2vw] sm:text-[2.8vw] md:text-xl font-semibold">
              Antony Squash
            </div>
            <div className="text-[2.5vw] text-gray-600 sm:text-[2.3vw] md:text-sm font-semibold">
              1 month ago
            </div>
          </div>
          
          <p className="text-[2.6vw] sm:text-[1.8vw] md:text-sm text-justify font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            beatae omnis, enim nesciunt vel id tempore veritatis ut ad, ipsum
            reprehenderit facilis sapiente ea voluptatibus, inventore eum non
            aspernatur labore quaerat similique assumenda at placeat. At
            voluptas dolorum quibusdam harum!
          </p>
          <div className="flex items-center gap-[2.5vw]">
            <div className="flex items-center gap-[0.5vw] text-[3vw] sm:text-[2vw] md:text-[1.2vw]">
              <AiOutlineLike/>
              <div>10</div>
            </div>
            <div className="flex items-center gap-[0.5vw] text-[3vw] sm:text-[2vw] md:text-[1.2vw]">
              <AiOutlineDislike/>
              <div>4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const BlogDetails = () => {
  const array = ["Internship", "Communication skills", "Internship", "Growth"];
  return (
    <>
      <div className="px-[6vw] md:px-[10vw] mt-[110px] md:mt-[12vw]">
        <div className="text-center">
          <div className="text-xs md:text-sm text-gray-500">January 26, 2024</div>
          <div className="text-4xl lg:text-5xl font-bold md:px-[7vw] my-5 md:my-4 tracking-wide">
            How to get more clients as a freelancer on UltraXpert
          </div>
          <div className="text-xs md:text-sm text-gray-500">
            Blog - By AntonySquash9@gmail.com
          </div>
        </div>

        <div className="my-[3vw]">
          <div>
            <img
              className="w-[100%] h-[45vw] object-cover"
              src="https://plus.unsplash.com/premium_photo-1661604346220-5208d18cb34e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3Jvd3RoJTIwYnVzaW5lc3N8ZW58MHwwfDB8fHww"
              alt=""
            />
            <div className="mt-4 md:mt-6 text-base md:text-lg text-[#2e2e2e]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
              amet dolorum, alias dolor enim dolore, explicabo, dolorem fuga
              quod magni id culpa dignissimos. Quasi ipsam, assumenda, dolorem
              nesciunt voluptatibus sunt accusamus esse illum excepturi id
              accusantium, pariatur culpa exercitationem ratione eius expedita!
              Debitis, doloribus sed eaque quod commodi cumque error, incidunt
              quaerat temporibus sint facilis expedita. Nulla nihil blanditiis
              porro debitis architecto amet sit harum, natus ducimus quae?
              Deleniti natus molestias doloribus velit perspiciatis harum omnis
              numquam cum quo. Ratione natus ipsam maiores blanditiis. Alias
              commodi provident ipsum excepturi ex quaerat delectus, natus iste
              optio id. Ab nemo at totam! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Numquam amet dolorum, alias dolor
              enim dolore, explicabo, dolorem fuga quod magni id culpa
              dignissimos. Quasi ipsam, assumenda, dolorem nesciunt voluptatibus
              sunt accusamus esse illum excepturi id accusantium, pariatur culpa
              exercitationem ratione eius expedita! Debitis, doloribus sed eaque
              quod commodi cumque error, incidunt quaerat temporibus sint
              facilis expedita.
            </div>
          </div>
          <div className="mt-10 md:mt-8">
            <div className="text-3xl md:text-4xl font-medium">
              How will these platforms help you?
            </div>
            <div className="mt-3 md:mt-4 text-base md:text-lg text-[#2e2e2e]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.laborum
              mollitia quis aperiam eum, dignissimos illum animi, doloribus
              blanditiis laudantium? Delectus, omnis commodi consequatur soluta
              saepe, quisquam, mollitia sunt placeat dolores sapiente odit
              officia laborum. Veniam illum rerum ratione laboriosam ut dicta
              omnis harum eos.illum animi, doloribus blanditiis laudantium?
              Delectus, omnis commodi consequatur soluta saepe, quisquam,
              mollitia sunt placeat dolores sapiente odit officia laborum.
              Veniam illum rerum ratione laboriosam ut dicta omnis harum
              eosillum animi, doloribus blanditiis laudantium? Delectus, omnis
              commodi consequatur soluta saepe, quisquam, mollitia sunt placeat
              dolores sapiente odit officia laborum. Veniam illum rerum ratione
              laboriosam ut dicta omnis harum eosillum animi, doloribus
              blanditiis laudantium? Delectus, omnis commodi consequatur soluta
              saepe, quisquam, mollitia sunt placeat dolores sapiente odit
              officia laborum. Veniam illum rerum ratione laboriosam ut dicta
              omnis harum eos
            </div>
          </div>
          <div className="mt-10 md:mt-8">
            <div className="text-3xl md:text-4xl font-medium">
              How to increase your business?
            </div>
            <div className="mt-3 md:mt-4 text-base md:text-lg text-[#2e2e2e]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.laborum
              mollitia quis aperiam eum, dignissimos illum animi, doloribus
              blanditiis laudantium? Delectus, omnis commodi consequatur soluta
              saepe, quisquam, mollitia sunt placeat dolores sapiente odit
              officia laborum. Veniam illum rerum ratione laboriosam ut dicta
              omnis harum eos.illum animi, doloribus blanditiis laudantium?
              Delectus, omnis commodi consequatur soluta saepe, quisquam,
              mollitia sunt placeat dolores sapiente odit officia laborum.
              Veniam illum rerum ratione laboriosam ut dicta omnis harum
              eosillum animi, doloribus blanditiis laudantium? Delectus, omnis
              commodi consequatur soluta saepe, quisquam, mollitia sunt placeat
              dolores sapiente odit officia laborum. Veniam illum rerum ratione
              laboriosam ut dicta omnis harum eosillum animi, doloribus
              blanditiis laudantium? Delectus, omnis commodi consequatur soluta
              saepe, quisquam, mollitia sunt placeat dolores sapiente odit
              officia laborum. Veniam illum rerum ratione laboriosam ut dicta
              omnis harum eos
            </div>
          </div>
          
          {/* <div className="flex items-center gap-3">
            <div className="text-sm mt-8 text-gray-700">Tags : </div>
            <div className="flex gap-[1vw] flex-wrap ">
              {array.map((temp, idx) => (
                <div
                  key={idx}
                  className="text-sm px-1 py-1 bg-gray-100/10 text-gray-700 rounded-sm md:rounded-md cursor-pointer"
                >
                  {temp}
                </div>
              ))}
            </div>
          </div> */}
        </div>

        <div className="flex justify-between border-t border-b border-solid border-slate-300 py-[2.5vw] mt-[10vw] md:mt-0 text-[2.2vw] md:text-base">
          <div className="flex items-center gap-[1.5vw] md:gap-[1vw] cursor-pointer">
            <div className="text-xs md:text-[2vw] xl:text-[1.5vw]">
              <PiCaretLeftLight />
            </div>
            <div className="">
              <div>Previous Post</div>
              <div>How to Clean Stainess Steel</div>
            </div>
          </div>
          <div className="flex items-center gap-[1.5vw] md:gap-[1vw] cursor-pointer">
            <div className="">
              <div className="text-right">Next Post</div>
              <div>How to Clean Stainess Steel</div>
            </div>
            <div className="text-xs md:text-[2vw] xl:text-[1.5vw]">
              <PiCaretRightLight />
            </div>
          </div>
        </div>

        <div className="mt-10 md:mt-20">
          <div>
            <div className="text-[2.5vw] md:text-[1.8vw] ">Leave a comment</div>
            <input
              type="text"
              placeholder="Comment here"
              className="w-[100%] bg-[#ECECEC] outline-none px-[1.5vw] py-[0.7vw] mt-[1.5vw] text-[2.1vw] md:text-[1vw] rounded-sm"
            />
            <button className="mt-[3vw] md:mt-[1.5vw] bg-[#2A2A2A] px-[3vw] py-[1.5vw] md:py-[0.7vw] text-[2.3vw] md:text-[1vw] text-white border rounded-sm cursor-pointer">
              Post Comment
            </button>
          </div>
          <div className="mt-[10vw] md:mt-[4vw]">
            {[...Array(10)].map((temp, idx) => (
              <CommentCard />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogDetails;