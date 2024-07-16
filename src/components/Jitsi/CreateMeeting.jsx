import React, { useState } from "react";

const CreateMeeting = () => {
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingEndDate, setMeetingEndDate] = useState("");
  const [roomId, setRoomId] = useState("");

  const handleScheduleMeeting = () => {
    const scheduledRoomId = roomId || Math.random().toString(36).substring(7);
    const meeting = {
      roomId: scheduledRoomId,
      date: meetingDate,
      endTime: meetingEndDate,
    };
    const scheduledMeetings =
      JSON.parse(localStorage.getItem("scheduledMeetings")) || [];
    scheduledMeetings.push(meeting);
    localStorage.setItem(
      "scheduledMeetings",
      JSON.stringify(scheduledMeetings)
    );
    alert(`Meeting scheduled with ID: ${scheduledRoomId}`);
    setMeetingDate("");
    setMeetingEndDate("");
    setRoomId("");
  };
  console.log(meetingDate, meetingEndDate, roomId);
  return (
    <div className="flex flex-col items-center">
      <div className="space-x-4">
        <button className="bg-yellow-500 text-white px-4 py-2 rounded">
          Schedule Meeting
        </button>
      </div>

      <div className="flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter Room ID (optional)"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="datetime-local"
          value={meetingDate}
          onChange={(e) => setMeetingDate(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="datetime-local"
          value={meetingEndDate}
          onChange={(e) => setMeetingEndDate(e.target.value)}
          className="mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={handleScheduleMeeting}
        >
          Schedule Meeting
        </button>
      </div>
    </div>
  );
};

export default CreateMeeting;
