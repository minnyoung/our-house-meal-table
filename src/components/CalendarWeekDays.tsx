import React from "react";
import styled from "styled-components";

// 요일
export default function CalendarWeekDays() {
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <Days className="days row weekends">
      {weekDays.map((weekDay, index) => (
        <DaysCol key={`weekDay-${index}`} weekDay={weekDay}>
          {weekDay}
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

const DaysCol = styled.div<{ weekDay: string }>`
  width: 12.9%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ weekDay }) =>
    weekDay === "일" ? "#ff5151" : weekDay === "토" ? "#2631ff" : "#686868"};
`;
