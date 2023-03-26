import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import styled from "styled-components";
import RenderCells from "./RenderCells";
import RenderDays from "./RenderDays";
import RenderHeader from "./RenderHeader";


export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };
  return (
    <Container className="calendar">
      <RenderHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <RenderDays />
      <RenderCells
        currentMonth={currentMonth}
        selectedDate={selectedDate}
        onDateClick={onDateClick}
      />
    </Container>
  );
};

const Container = styled.div`
  width: 60%;
  height: 90%;
`;