import { useState } from "react";
import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
const Notification = () => {
  const [openNotifications, setOpenNotifications] = useState(false);
  const notifications = [
    "Notification",
    "Notification",
    "Notification",
    "Notification",
    "Notification",
    "Notification",
    "Notification",
  ];
  return (
    <div className="relative bg-red-50">
      <div className="">
        <div className="">
          <IoIosNotificationsOutline
            className="text-3xl"
            onClick={() => setOpenNotifications(!openNotifications)}
          />
          <div className="absolute w-5 h-5 bg-red-600 rounded-full left-5 top-2 text-center text-white text-xs ">
            {notifications.length}{" "}
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default Notification;
