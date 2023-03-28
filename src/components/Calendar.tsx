import React from "react";
import styled from "styled-components";
import RenderCells from "./RenderCells";
import RenderDays from "./RenderDays";
import RenderHeader from "./RenderHeader";
import useMakeCalenderFunction from "../hooks/useMakeCalendarFunction";


export const Calendar = () => {
  const {currentMonth, selectedDate, prevMonth, nextMonth, onDateClick} = useMakeCalenderFunction()
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
  
  flex: auto;
`;