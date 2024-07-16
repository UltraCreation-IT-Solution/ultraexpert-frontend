import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const JoinMeeting = () => {
  const [roomId, setRoomId] = useState("");
  const [scheduledMeetings, setScheduledMeetings] = useState(
    JSON.parse(localStorage.getItem("scheduledMeetings")) || []
  );
  const navigate = useNavigate();

  useEffect(() => {
    const cleanUpOldMeetings = () => {
      const now = new Date();
      const updatedMeetings = scheduledMeetings.filter((meeting) => {
        const meetingTime = new Date(meeting.date);
        return now < new Date(meetingTime.getTime() + 30 * 60000); // Keep meetings within 30 minutes after their scheduled time
      });

      // Only update state if there are changes
      if (updatedMeetings.length !== scheduledMeetings.length) {
        setScheduledMeetings(updatedMeetings);
        localStorage.setItem(
          "scheduledMeetings",
          JSON.stringify(updatedMeetings)
        );
      }
    };

    cleanUpOldMeetings();
    const interval = setInterval(cleanUpOldMeetings, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [scheduledMeetings]);

  const handleJoin = (room) => {
    const meeting = scheduledMeetings.find((m) => m.roomId === room);
    if (meeting) {
      const now = new Date();
      const meetingTime = new Date(meeting.date);
      if (now >= meetingTime) {
        startMeeting(room, meeting.endTime);
      } else {
        alert(
          `The meeting is scheduled for ${meetingTime.toLocaleString()}. Please wait until the meeting starts.`
        );
      }
    } else {
      startMeeting(room);
    }
  };

  const startMeeting = (room, endTime) => {
    const jitsiUrl = `https://meet.ultraxpert.in/${room}`;
    const win = window.open(jitsiUrl, "_blank");

    if (win) {
      win.addEventListener("beforeunload", () => {
        // This will execute when the user closes the Jitsi Meet tab/window
        window.location.href = "https://www.ultraxpert.in"; // Redirect to your app's home route
      });
    }

    if (endTime) {
      const endTimeDate = new Date(endTime);
      const now = new Date();
      const timeUntilEnd = endTimeDate - now;
      setTimeout(() => {
        win.close(); // Close the Jitsi Meet tab/window after endTime
      }, timeUntilEnd);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="text"
        placeholder="Enter Room Number"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded"
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => handleJoin(roomId)}
      >
        Join Meeting
      </button>

      <h2 className="text-2xl font-bold my-4">Scheduled Meetings</h2>
      <div className="flex flex-col items-center">
        {scheduledMeetings.map((meeting, index) => (
          <div key={index} className="mb-4 p-2 border border-gray-300 rounded">
            <p>Room ID: {meeting.roomId}</p>
            <p>Start Time: {new Date(meeting.date).toLocaleString()}</p>
            <p>End Time: {new Date(meeting.endTime).toLocaleString()}</p>
            <button
              className="bg-blue-500 text-white px-2 py-1 rounded mt-2"
              onClick={() => handleJoin(meeting.roomId)}
            >
              Join
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinMeeting;
