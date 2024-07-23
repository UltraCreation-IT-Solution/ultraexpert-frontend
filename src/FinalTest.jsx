export const MyBigCalendar = ({ showSlots }) => {
  const params = useParams();
  const navigate = useNavigate();
  const localizer = momentLocalizer(moment);
  const [notifyBefore, setNotifyBefore] = useState(false);
  const [notifyAfter, setNotifyAfter] = useState(false);
  const [notifyBeforeTime, setNotifyBeforeTime] = useState(0);
  const [notifyAfterTime, setNotifyAfterTime] = useState(0);
  const [events, setEvents] = useState([]);
  const [newEvents, setNewEvents] = useState([]); // State for new events
  const [startInputDate, setStartInputDate] = useState("");
  const [startInputTime, setStartInputTime] = useState("");
  const [endInputDate, setEndInputDate] = useState("");
  const [endInputTime, setEndInputTime] = useState("");
  const [updateData, setUpdateData] = useState({});
  const [serviceTitle, setServiceTitle] = useState("");
  const [temp, setTemp] = useState(0);

  const getServiceDetails = async () => {
    const cookie = document.cookie.split("; ");
    const jsonData = {};
    cookie.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.get(
        `/customers/services/?action=2&service_id=${params.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );
      if (!res.data || res.data.status === 400 || res.data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      const Data = res.data;
      const serviceData = Data.data;
      setUpdateData(serviceData);
      setServiceTitle(Data.data.service_name);
      setEvents(processServiceData(serviceData.availability));
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const processServiceData = (availability) => {
    const events = [];
    for (const [date, slots] of Object.entries(availability)) {
      slots.forEach((slot) => {
        const startDate = moment(
          `${date} ${slot.slot_start_time}`,
          "ddd DD MMM h:mm A"
        );
        const endDate = moment(
          `${date} ${slot.slot_end_time}`,
          "ddd DD MMM h:mm A"
        );
        events.push({
          id: slot.slot_id,
          title: serviceTitle,
          start: startDate.toDate(),
          end: endDate.toDate(),
          notifyBefore: slot.notify_before,
          notifyBeforeTime: slot.notify_before_time,
          notifyAfter: slot.notify_after,
          notifyAfterTime: slot.notify_after_time,
          slotBooked: slot.slot_booked,
          slotDisabled: slot.slot_disabled,
        });
      });
    }
    return events;
  };

  const handlePostEvent = async (e) => {
    e.preventDefault();
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });

    const formattedEvents = convertEventsToAPIFormat(events);
    console.log(notifyAfter, notifyAfterTime, notifyBefore, notifyBeforeTime);
    try {
      const res = await axios.post(
        "/experts/services/",
        {
          action: 6,
          service_id: updateData?.id,
          notify_before: notifyBefore,
          notify_before_time: notifyBeforeTime.toString(),
          notify_after: notifyAfter,
          notify_after_time: notifyAfterTime.toString(),
          time_slots: formattedEvents,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );

      const data = res.data;
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      setServiceTitle("");
      navigate("/expertdashboard/myservices");
    } catch (error) {
      console.log(error);
    }
  };

  const generateUniqueId = () => {
    const timestamp = new Date().getTime();
    return parseInt(`${timestamp}${Math.floor(Math.random() * 1000)}`);
  };

  const handleCreateEvent = () => {
    const startDate = moment(startInputDate, "YYYY-MM-DD");
    const endDate = moment(endInputDate, "YYYY-MM-DD");
    const startTime = moment(startInputTime, "HH:mm");
    const endTime = moment(endInputTime, "HH:mm");

    if (
      startDate.isValid() &&
      endDate.isValid() &&
      endTime.isValid() &&
      endTime.isSameOrAfter(startTime) &&
      serviceTitle.trim() !== ""
    ) {
      if (startTime.isSame(endTime)) {
        alert("Start time and end time for an event should not be the same.");
        return;
      }
      const newEventsArray = [];
      let currentDate = startDate.clone();
      while (currentDate.isSameOrBefore(endDate, "day")) {
        const newEvent = {
          id: generateUniqueId(),
          title: serviceTitle.trim(),
          start: currentDate
            .clone()
            .hour(startTime.hour())
            .minute(startTime.minute())
            .toDate(),
          end: currentDate
            .clone()
            .hour(endTime.hour())
            .minute(endTime.minute())
            .toDate(),
        };
        newEventsArray.push(newEvent);
        currentDate.add(1, "day");
      }
      setNewEvents([...newEvents, ...newEventsArray]);
      console.log("New Events Array:", newEventsArray); // Log the new events array
      setStartInputDate("");
      setStartInputTime("");
      setEndInputDate("");
      setEndInputTime("");
    } else {
      alert(
        "Please enter valid start and end dates, time, and a non-empty title."
      );
    }
  };

  const convertEventToAPIFormat = (event) => {
    const startDate = moment(event.start);
    const endDate = moment(event.end);

    return {
      time_slot_id: event.id,
      day: `${startDate.format("ddd DD MMM YYYY")}`,
      start_time: startDate.format("h:mm A"),
      end_time: endDate.format("h:mm A"),
      timezone: "IST",
      duration: endDate.diff(startDate, "seconds"),
    };
  };

  const convertEventsToAPIFormat = (events) => {
    return events.map((event) => convertEventToAPIFormat(event));
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [updatedStartInputTime, setUpdatedStartInputTime] = useState("");
  const [updatedEndInputTime, setUpdatedEndInputTime] = useState("");
  const [isBooked, setIsBooked] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
    setUpdatedStartInputTime(moment(event.start).format("HH:mm"));
    setUpdatedEndInputTime(moment(event.end).format("HH:mm"));
    setShowModal(true);
    setIsBooked(event?.slotBooked);
  };

  const handleUpdateEvent = () => {
    setEvents(
      events.map((event) => {
        if (event.id === selectedEvent.id) {
          return {
            ...event,
            start: moment(event.start)
              .hour(moment(updatedStartInputTime, "HH:mm").hour())
              .minute(moment(updatedStartInputTime, "HH:mm").minute())
              .toDate(),
            end: moment(event.end)
              .hour(moment(updatedEndInputTime, "HH:mm").hour())
              .minute(moment(updatedEndInputTime, "HH:mm").minute())
              .toDate(),
          };
        }
        return event;
      })
    );
    setShowModal(false);
  };

  const handleDeleteEvent = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const res = await axios.post(
        "/experts/services/",
        {
          action: 7,
          time_slot_id: selectedEvent.id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );

      const data = res.data;
      console.log(data);
      if (!data || data.status === 400 || data.status === 401) {
        console.log("Something went wrong");
        return;
      }
      setEvents(events.filter((event) => event.id !== selectedEvent.id));
      setSelectedEvent(null);
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveAndLogEvents = async () => {
    const cookies = document.cookie.split("; ");
    const jsonData = {};
    cookies.forEach((item) => {
      const [key, value] = item.split("=");
      jsonData[key] = value;
    });
    try {
      const allEvents = [...newEvents];
      console.log("All Events:", allEvents);

      // Make API call to save events
      const res = await axios.post(
        "/experts/services/",
        {
          action: 5,
          service_id: updateData?.id,
          notify_before: notifyBefore,
          notify_before_time: notifyBeforeTime.toString(),
          notify_after: notifyAfter,
          notify_after_time: notifyAfterTime.toString(),
          time_slots: convertEventsToAPIFormat(newEvents), // Convert events to API format
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jsonData.access_token}`,
          },
        }
      );

      console.log(res);
      if (res.status === 200) {
        // Update events state to re-render the calendar
        setEvents(allEvents);
        setNewEvents([]);
        setTemp(temp + 1);
        alert("Events saved successfully");
        setTemp(temp + 1);
        getServiceDetails();
      }
    } catch (error) {
      console.log("Error saving events:", error);
    }
  };
  useEffect(() => {
    getServiceDetails();
  }, [showSlots, temp]);
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[...events, ...newEvents]} // Combine old and new events
        startAccessor="start"
        endAccessor="end"
        onSelectEvent={handleEventClick}
        style={{ height: 500 }}
      />
      <div>
        <form onSubmit={handlePostEvent}>
          <label>
            Notify Before:
            <input
              type="checkbox"
              checked={notifyBefore}
              onChange={(e) => setNotifyBefore(e.target.checked)}
            />
          </label>
          {notifyBefore && (
            <label>
              Notify Before Time (minutes):
              <input
                type="number"
                value={notifyBeforeTime}
                onChange={(e) => setNotifyBeforeTime(e.target.value)}
              />
            </label>
          )}
          <label>
            Notify After:
            <input
              type="checkbox"
              checked={notifyAfter}
              onChange={(e) => setNotifyAfter(e.target.checked)}
            />
          </label>
          {notifyAfter && (
            <label>
              Notify After Time (minutes):
              <input
                type="number"
                value={notifyAfterTime}
                onChange={(e) => setNotifyAfterTime(e.target.value)}
              />
            </label>
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        <h3>Create New Slot</h3>
        <label>
          Start Date:
          <input
            type="date"
            value={startInputDate}
            onChange={(e) => setStartInputDate(e.target.value)}
          />
        </label>
        <label>
          Start Time:
          <input
            type="time"
            value={startInputTime}
            onChange={(e) => setStartInputTime(e.target.value)}
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            value={endInputDate}
            onChange={(e) => setEndInputDate(e.target.value)}
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            value={endInputTime}
            onChange={(e) => setEndInputTime(e.target.value)}
          />
        </label>
        <button onClick={handleCreateEvent}>Create Event</button>
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button className="close" onClick={() => setShowModal(false)}>
              <RxCross2 />
            </button>
            <h3>Edit Event</h3>
            <p>{moment(selectedEvent?.start).format("ddd DD MMM YYYY")}</p>
            <label>
              Start Time:
              <input
                type="time"
                value={updatedStartInputTime}
                onChange={(e) => setUpdatedStartInputTime(e.target.value)}
                disabled={isBooked}
              />
            </label>
            <label>
              End Time:
              <input
                type="time"
                value={updatedEndInputTime}
                onChange={(e) => setUpdatedEndInputTime(e.target.value)}
                disabled={isBooked}
              />
            </label>
            {!isBooked && (
              <>
                <button onClick={handleUpdateEvent}>Update</button>
                <button onClick={handleDeleteEvent}>Delete</button>
              </>
            )}
            {isBooked && (
              <p>
                Slot is already booked and cannot be updated or deleted. Please
                contact admin to proceed.
              </p>
            )}
          </div>
        </div>
      )}
      <button onClick={handleSaveAndLogEvents}>Save and Log Events</button>
    </div>
  );
};
