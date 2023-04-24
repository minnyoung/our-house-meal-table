import React from "react";
import styled from "styled-components";

// 요일
export default function CalendarWeekDays() {
  const dates = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <Days className="days row weekends">
      {dates.map((date, index) => (
        <DaysCol key={index} color={date}>
          {date}
        </DaysCol>
      ))}
    </Days>
  );
}

const Days = styled.div`
  width: 100%;
  height: fit-content;
  padding: 6px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 0.75em;
`;

const DaysCol = styled.div`
  width: 12.9%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ color }) =>
    color === "일" ? "#ff5151" : color === "토" ? "#2631ff" : "#686868"};
`;
