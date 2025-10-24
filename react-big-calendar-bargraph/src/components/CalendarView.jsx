import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import sampleData from "../data/sampleData.json";
import { loadData, selectDate } from "../store/action";
import BarGraphModal from "./BarGraphModal";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const CalendarView = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.app);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(loadData(sampleData));
  }, [dispatch]);

  const events = Object.keys(data || {}).map((date) => ({
    title: `Data for ${date}`,
    start: new Date(moment(date, "DD-MM-YYYY")),
    end: new Date(moment(date, "DD-MM-YYYY").add(1, "days")),
    allDay: true,
    dateKey: date,
  }));

  const handleSelectEvent = (event) => {
    const selected = event.dateKey;
    setSelectedDate(selected);
    dispatch(selectDate(selected));

    if (data[selected]) {
      setShowModal(true);
    } else {
      alert("No data found for the selected date.");
    }
  };

  const handleSelectSlot = (slotInfo) => {
    const selected = moment(slotInfo.start).format("DD-MM-YYYY");
    setSelectedDate(selected);
    dispatch(selectDate(selected));

    if (data[selected]) {
      setShowModal(true);
    } else {
      alert("No data found for the selected date.");
    }
  };

  return (
    <div style={{ height: "550px", margin: "20px" }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day"]}
        selectable
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot} // handle empty date clicks
        dayPropGetter={(date) => {
          if (
            selectedDate &&
            moment(date).format("DD-MM-YYYY") === selectedDate
          ) {
            return {
              style: {
                backgroundColor: "#ffeb3b", // highlight color
              },
            };
          }
          return {};
        }}
        style={{ height: "100%" }}
      />

      {showModal && selectedDate && data[selectedDate] && (
        <BarGraphModal
          date={selectedDate}
          data={data[selectedDate]}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CalendarView;
