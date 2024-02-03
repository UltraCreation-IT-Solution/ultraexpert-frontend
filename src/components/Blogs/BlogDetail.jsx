import { PiCaretLeftLight } from "react-icons/pi";
import { PiCaretRightLight } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
export const CommentCard = () => {
  return (
    <div className="my-[3vw] md:my-[2vw] pb-[2vw] border-b-[1px] border-slate-400 border-solid">
      <div className="flex gap-[2.5vw] sm:gap-[2vw]">
        <img
          className="h-[9vw] w-[9vw] sm:h-[8vh] sm:w-[8vw] md:h-[3.5vw] md:w-[3.5vw] shrink-0 object-cover rounded-full"
          src="https://plus.unsplash.com/premium_photo-1661664742981-6691f002a466?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div>
          <div className="flex items-center justify-between">
            <div className="text-[3.2vw] sm:text-[2.8vw] md:text-[1.5vw] font-semibold">
              Antony Squash
            </div>
            <div className="text-[2.5vw] text-gray-600 sm:text-[2.3vw] md:text-[1vw] font-semibold">
              1 month ago
            </div>
          </div>

          <p className="text-[2.4vw] sm:text-[1.8vw] md:text-[1.1vw] text-justify font-montserrat">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            beatae omnis, enim nesciunt vel id tempore veritatis ut ad, ipsum
            reprehenderit facilis sapiente ea voluptatibus, inventore eum non
            aspernatur labore quaerat similique assumenda at placeat. At
            voluptas dolorum quibusdam harum!
          </p>
          <div className="flex items-center gap-[2.5vw]">
            <div className="flex items-center gap-[0.5vw] text-[3vw] sm:text-[2vw] md:text-[1.2vw]">
              <AiOutlineLike />
              <div>10</div>
            </div>
            <div className="flex items-center gap-[0.5vw] text-[3vw] sm:text-[2vw] md:text-[1.2vw]">
              <AiOutlineDislike />
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
      <div className="px-[6vw] md:px-[10vw] mt-[100px] md:mt-[12vw]">
        <div className="text-center">
          <div className="text-[2.1vw] md:text-[1vw] text-gray-500">
            January 26, 2024
          </div>
          <div className="text-[7.5vw] md:text-[3vw] font-bold md:px-[7vw] my-[1.8vw] tracking-wide">
            How to get more clients as a freelancer on UltraXpert
          </div>
          <div className="text-[2.1vw] md:text-[1vw] text-gray-500">
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
            <div className="mt-[1.5vw] text-[2.1vw] leading-[3.5vw] md:text-[1vw] md:leading-[1.8vw] text-gray-700">
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
              facilis expedita. Nulla nihil blanditiis porro debitis architecto
              amet sit harum, natus ducimus quae? Deleniti natus molestias
              doloribus velit perspiciatis harum omnis numquam cum quo. Ratione
              natus ipsam maiores blanditiis. Alias commodi provident ipsum
              excepturi ex quaerat delectus, natus iste optio id. Ab nemo at
              totam!
            </div>
          </div>
          <div className="mt-[2vw]">
            <div className="text-[5.5vw] md:text-[2.3vw] font-medium">
              How will these platforms help you?
            </div>
            <div className="mt-[1vw] text-[2.1vw] leading-[3.5vw] md:leading-[1.8vw] md:text-[1vw] text-gray-700">
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
          <div className="mt-[2vw]">
            <div className="text-[5.5vw] md:text-[2.3vw] font-medium">
              How to improve your skills?
            </div>
            <div className="mt-[1vw] text-[2.1vw] leading-[3.5vw] md:leading-[1.8vw] md:text-[1vw] text-gray-700">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum
              dolorem voluptas in quos. Eos hic deleniti rerum cum quaerat ut
              sed, alias nulla, quibusdam iure quam corporis, distinctio
              reiciendis minus quasi? At cumque velit sed eaque architecto
              tenetur porro. Unde veniam voluptates, quos vero similique
              repellat dolores, quisquam aperiam tenetur quibusdam laborum totam
              labore impedit dolorem, debitis nemo ad eius.
            </div>
          </div>
          <div className="mt-[2vw]">
            <div className="text-[5.5vw] md:text-[2.3vw] font-medium">
              Showcase your work and post it on socials
            </div>
            <div className="mt-[1vw] text-[2.1vw] leading-[3.5vw] md:leading-[1.8vw] md:text-[1vw] text-gray-700">
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
          <div className="mt-[2vw]">
            <div className="text-[5.5vw] md:text-[2.3vw] font-medium">
              How will these platform help you?
            </div>
            <div className="mt-[1vw] text-[2.1vw] leading-[3.5vw] md:leading-[1.8vw] md:text-[1vw] text-gray-700">
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
          <div className="mt-[2vw]">
            <div className="text-[5.5vw] md:text-[2.3vw] font-medium">
              Focus on improving your communication sills
            </div>
            <div className="mt-[1vw] text-[2.1vw] leading-[3.5vw] md:leading-[1.8vw] md:text-[1vw] text-gray-700">
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
          <div className="mt-[2vw]">
            <div className="text-[5.5vw] md:text-[2.3vw] font-medium">
              Do's and Dont's
            </div>
            <div className="mt-[1vw] text-[2.1vw] leading-[3.5vw] md:leading-[1.8vw] md:text-[1vw] text-gray-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.laborum
              mollitia quis aperiam eum, dignissimos illum animi, doloribus
              blanditimollitia sunt placeat dolores sapiente odit officia
              laborum. Veniam illum rerum ratione laboriosam ut dicta omnis
              harum eosillum animi, doloribus blanditiis laudantium? Delectus,
              omnis commodi consequatur soluta saepe, quisquam, mollitia sunt
              placeat dolores sapiente odit officia laborum. Veniam illum rerum
              ratione laboriosam ut dicta omnis harum eosillum animi, doloribus
              blanditiis laudantium? Delectus, omnis commodi consequatur soluta
              saepe, quisquam, mollitia sunt placeat dolores sapiente odit
              officia laborum. Veniam illum rerum ratione laboriosam ut dicta
              omnis harum eos
            </div>
          </div>
          <div className="flex items-center gap-[1.2vw] mt-[1.5vw]">
            <div className="text-[2.1vw] md:text-[1vw] text-gray-700">
              Tags :{" "}
            </div>
            <div className="flex gap-[1vw] flex-wrap ">
              {array.map((temp, idx) => (
                <div
                  key={idx}
                  className="bg-gray-100/10 text-gray-700 text-[2vw] md:text-[0.9vw] px-[1.2vw] py-[0.8vw] md:px-[0.7vw] md:py-[0.3vw] rounded-sm md:rounded-md cursor-pointer"
                >
                  {temp}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between border-t border-b border-solid border-slate-300 py-[2.5vw] mt-[10vw] md:mt-0 text-[2.2vw] md:text-[1.4vw] xl:text-[1vw]">
          <div className="flex items-center gap-[1.5vw] md:gap-[1vw] cursor-pointer">
            <div className="text-[2.5vw] md:text-[2vw] xl:text-[1.5vw]">
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
            <div className="text-[2.5vw] md:text-[2vw] xl:text-[1.5vw]">
              <PiCaretRightLight />
            </div>
          </div>
        </div>

        <div className="mt-[10vw] md:mt-[4vw]">
          <div>
            <div className="text-[2.5vw] md:text-[1.8vw] ">Leave a comment</div>
            <input
              type="text"
              placeholder="Comment here"
              className="w-[100%] bg-[#ECECEC] outline-none px-[1.5vw] py-[0.7vw] mt-[1.5vw] text-[2.1vw] md:text-[1vw] rounded-sm"
            />
            <button className="mt-[3vw] md:mt-[1.5vw] bg-[#2A2A2A] px-[1.5vw] py-[0.5vw] text-[2.2vw] md:text-[1vw] text-white border rounded-sm cursor-pointer">
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
