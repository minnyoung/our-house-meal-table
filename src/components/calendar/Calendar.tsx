import React from "react";
import styled from "styled-components";
import CalendarBody from "./CalendarBody";
import useMakeCalenderFunction from "../../hooks/useMakeCalendarFunction";
import CalendarHeader from "./CalendarHeader";
import CalendarWeekDays from "./CalendarWeekDays";

export default function Calendar() {
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
}

const Container = styled.div`
  width: 940px;
  height: 90%;

  flex: auto;
`;
