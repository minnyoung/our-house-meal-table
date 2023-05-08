import React from "react";
import styled from "styled-components";

export default function CalendarWeekDays() {
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <S.Container>
      {weekDays.map((weekDay, index) => (
        <S.WeekDayWrapper key={`weekDay-${index}`} weekDay={weekDay}>
          {weekDay}
        </S.WeekDayWrapper>
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 6px 0;
    width: 100%;
    height: fit-content;
    font-weight: 600;
    font-size: 0.75em;
  `,
  WeekDayWrapper: styled.div<{ weekDay: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12.9%;
    height: 100%;
    color: ${({ weekDay }) =>
      weekDay === "일" ? "#ff5151" : weekDay === "토" ? "#2631ff" : "#686868"};
  `,
};
