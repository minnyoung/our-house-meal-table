import React from "react";
import styled from "styled-components";
import useRenderCells from "../hooks/useRenderCells";
import { mainMenuStore } from "../store/MainStore";



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

const {rows, day} = useRenderCells({currentMonth})
const {mainMenu, date, setDate } = mainMenuStore()

console.log(rows[0])
    return (
    <Body className="body">      
      {rows.map((row, rowsIndex) => (
          <BodyCol>
          <BodyRow className="주" id={String(day)}>
            {
        row.map((dayObject, rowIndex) => (
          
        // <BodyColCellBox onDrop={(event) => event.dataTransfer.setData('text/plain', event.currentTarget.id) } id={String(dayObject.date)}>
        <BodyColCellBox onDrop={(event) => {console.log("달력드롭", event.currentTarget.id); setDate(event.currentTarget.id) }}
        // onDragEnter={(event) => {event.preventDefault(); console.log('달력 dragenter');}}
        onDragOver={(event) => event.preventDefault()}
        id={String(dayObject.date)}>

          <BodyColCellNumber>{dayObject.date}</BodyColCellNumber>
          {!dayObject.date ? null : ( dayObject.date === date ? (rows[rowsIndex][rowIndex]['mainMenu'] = mainMenu): rows[rowsIndex][rowIndex]['mainMenu'])
          
          // (<div>
          // 메인메뉴 : {dayObject.mainMenu}
          // 국거리 : {dayObject.mainMenu}
          // 반찬류 : {dayObject.mainMenu}
          // </div>)
        }{dayObject.mainMenu}
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
