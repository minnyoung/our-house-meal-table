import React from "react";
import styled from "styled-components";
import CalendarCells from "./CalendarCells";
import CalendarWeekDays from "./CalendarWeekDays";
import CalendarHeader from "./CalendarHeader";
import useMakeCalenderFunction from "../hooks/useMakeCalendarFunction";

export const Calendar = () => {
  const { currentMonth, selectedDate, prevMonth, nextMonth, onDateClick } =
    useMakeCalenderFunction();
  return (
    <Container className="calendar" id="captureSection">
      <CalendarHeader
        currentMonth={currentMonth}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarWeekDays />
      <CalendarCells
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

  flex: auto;
`;
