import React,{useState} from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const BookingCard = ({ item }) => {
    const [open, setOpen] = useState(false);
    function formatDate(dateString) {
      const date = new Date(dateString);
      const options = { day: "numeric", month: "short", year: "numeric" };
      return date.toLocaleDateString("en-US", options);
    }
    return (
      <>
        <div className="text-sm flex items-center justify-between  border-t border-solid border-slate-300 my-5 py-3 overflow-x-scroll">
          <div className="flex items-center xs:gap-[4vw] text-sm">
            <div className="flex items-center gap-2 w-[200px] ">
              <img
                src={localStorage.getItem("isExpert")==="true"? item?.customer_profile_img:item?.expert_profile_img}
                className="h-9 w-9 rounded-full shrink-0 object-cover"
                alt=""
              />
              <div>{localStorage.getItem("isExpert")==="true"? item?.customer_first_name :item?.expert_first_name  } {localStorage.getItem("isExpert")==="true"? item?.customer_last_name :item?.expert_last_name}</div>
            </div>
            <div className="hidden sm:block w-[120px]">
              {item?.time_slot_day}{" "} 
            </div>
            <div className="w-[60px] flex items-center justify-center shrink-0">
              <FaRegTrashAlt className="shrink-0" />
            </div>
          </div>
          {open ? (
            <IoIosArrowUp
              className="shrink-0 text-xl "
              onClick={() => (open ? setOpen(false) : setOpen(true))}
            />
          ) : (
            <IoIosArrowDown
              className="shrink-0 text-xl "
              onClick={() => (open ? setOpen(false) : setOpen(true))}
            />
          )}
        </div>
        {open && (
          <div>
            <div className="text-sm line-clamp-2">
              Service Title: {localStorage.getItem("isExpert")==="true"? item?.service_name :item?.service_name }{" "}
            </div>
            <div className="text-sm mt-2">Booking Date: {localStorage.getItem("isExpert")==="true"?formatDate(item?.updated_on):formatDate(item?.updated_on)} </div>
            <div className="text-sm mt-2">Start Time: {localStorage.getItem("isExpert")==="true"?  item?.time_slot_start:item?.time_slot_start   } </div>
            <div className="text-sm mt-2">End Time: {localStorage.getItem("isExpert")==="true"?  item?.time_slot_end:item?.time_slot_end   }</div>
            <div className="flex items-center gap-3">
            <button className="text-sm mt-2 btnBlack text-white cursor-pointer px-3 py-1">Disable service</button>
            <button className="text-sm mt-2 text-black bg-white border border-solid border-black cursor-pointer px-3 py-1">Join meeting</button>
  
            </div>
          </div>
        )}
      </>
    );
  };
  export default BookingCard;