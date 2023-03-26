import React from "react";
import styled from "styled-components";

// 요일
export default function RenderDays () {
    const dates = ["일", "월", "화", "수", "목", "금", "토"];
  
    return (
      <Days className="days row weekends">
        {dates.map((date, index) => (
          <DaysCol key={index}>{date}</DaysCol>
        ))}
      </Days>
    );
  };
  
  const Days = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-weight: 600;
  font-size: 0.65em;
  padding: 2px;
  color: #686868;
`;

const DaysCol = styled.div`
  width: 12.9%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;