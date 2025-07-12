import React, { useState } from "react";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

const CalendarWidget = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="calendar-wrapper">
      <h2>Interactive Calendar</h2>
      <Calendar
        onChange={setValue}
        value={value}
        locale="en-US"
        calendarType="ISO 8601"
      />
      <p>Selected date: {value.toDateString()}</p>
    </div>
  );
};

export default CalendarWidget;
