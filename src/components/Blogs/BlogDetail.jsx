import { PiCaretLeftLight } from "react-icons/pi";
import { PiCaretRightLight } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { ExpertRatings } from "../Experts/ExpertProfile";

const BlogDetails = () => {
  const array = ["Internship", "Communication skills", "Internship", "Growth"];
  return (
    <>
      <div className="px-[6vw] md:px-[10vw] mt-[110px] md:mt-[12vw]">
        <div className="text-center">
          <div className="text-xs md:text-sm text-gray-500">
            January 26, 2024
          </div>
          <div className=" text-3xl overflow-hidden xs:text-4xl lg:text-5xl font-bold md:px-[7vw] my-5 md:my-4 tracking-wide">
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

          <ExpertRatings/>
          </div>
        
      </div>
    </>
  );
};
export default BlogDetails;
