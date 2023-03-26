import React from "react";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { format, addMonths, subMonths } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import styled from "styled-components";


type RenderCellsProps = {
    currentMonth: Date;
    selectedDate: Date;
    onDateClick: (day: Date) => void;
  };

// 날짜부분
export default function RenderCells ({
    currentMonth,
    selectedDate,
    onDateClick,
  }: RenderCellsProps) {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
  
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
  
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, "d");
        //   해당 달의 날짜가 아니면 date에 null, 맞다면 날짜 그대로 객체에 들어감
        format(currentMonth, "M") !== format(day, "M")
          ? days.push({ date: null, menu: "" })
          : days.push({ date: formattedDate, mainMenu: "", soup: "", side: "" });
        day = addDays(day, 1);
      }
  
      rows.push(days);
      days = [];
    }
  
    return (
    <Body className="body">      
      {rows.map((row) => (
          <BodyCol>
          <BodyRow className="주" id={String(day)}>
            {
        row.map((dayObject) => (
          
        <BodyColCellBox>
          <BodyColCellNumber>{dayObject.date}</BodyColCellNumber>
          {!dayObject.date ? null : 
          (<div>
          메인메뉴 : {dayObject.mainMenu}
          국거리 : {dayObject.mainMenu}
          반찬류 : {dayObject.mainMenu}
          </div>)}
        </BodyColCellBox>))}  
        </BodyRow>
  </BodyCol>
      ))}
  
  </Body>);
  };
  

  const Body = styled.div`
  width: 100%;
  height: 89%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BodyRow = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BodyCol = styled.div`
  width: 100%;
  height: 93%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  border: 0.4px solid transparentize(gray, 0.4);
  border-radius: 3px;
  font-size: 0.8em;
`;

const BodyColNotValid = styled.span`
  color: #c4c4c4;
`;

const BodyColCellBox = styled.div`
  width: 100%;
  height: 100%;

  border: 1px solid gray;
`;

const BodyColCellNumber = styled.span`
  font-size: 1em;
  font-weight: 500;

  margin: 4px;
`;
