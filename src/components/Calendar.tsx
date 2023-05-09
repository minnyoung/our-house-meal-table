import React from "react";
import styled from "styled-components";
import CalendarBody from "./CalendarBody";
import CalendarWeekDays from "./CalendarWeekDays";
import CalendarHeader from "./CalendarHeader";
import useMakeCalenderFunction from "../hooks/useMakeCalendarFunction";

export const Calendar = () => {
  const {
    currentMonth,
    selectedDate,
    movePreviousMonth,
    moveNextMonth,
    onDateClick,
  } = useMakeCalenderFunction();
  return (
    <Container className="calendar" id="captureSection">
      <CalendarHeader
        currentMonth={currentMonth}
        movePreviousMonth={movePreviousMonth}
        moveNextMonth={moveNextMonth}
      />
      <CalendarWeekDays />
      <CalendarBody
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
