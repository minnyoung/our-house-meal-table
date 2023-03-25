import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import { startOfMonth, endOfMonth, startOfWeek, endOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import styled from "styled-components";

type RenderHeaderProps = {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
};

type RenderCellsProps = {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
};

const RenderHeader = ({
  currentMonth,
  prevMonth,
  nextMonth,
}: RenderHeaderProps) => {
  return (
    <Header className="header row">
      <HeaderColFirst className="col col-start">
        <HeaderColFirstText className="text">
          <HeaderColFirstTextMonth className="text month">
            {format(currentMonth, "M")}월
          </HeaderColFirstTextMonth>
          {format(currentMonth, "yyyy")}
        </HeaderColFirstText>
      </HeaderColFirst>
      <ColEnd className="col col-end">
        <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
        <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
      </ColEnd>
    </Header>
  );
};

// 요일
const RenderDays = () => {
  const dates = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <Days className="days row">
      {dates.map((date, index) => (
        <DaysCol key={index}>{date}</DaysCol>
      ))}
    </Days>
  );
};

// body
const RenderCells = ({
  currentMonth,
  selectedDate,
  onDateClick,
}: RenderCellsProps) => {
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
      const cloneDay = day;
      days.push(
        <BodyCol>
          {!isSameMonth(day, monthStart) ? (
            <HeaderColFirstText>
              {format(currentMonth, "M") !== format(day, "M") ? (
                <BodyColNotValid>{formattedDate}</BodyColNotValid>
              ) : (
                formattedDate
              )}
            </HeaderColFirstText>
          ) : isSameDay(day, selectedDate) ? (
            <BodyColCellSelected
              id={String(day)}
              onClick={() => onDateClick(cloneDay)}
            >
              <HeaderColFirstText>
                {format(currentMonth, "M") !== format(day, "M") ? (
                  <BodyColNotValid>{formattedDate}</BodyColNotValid>
                ) : (
                  formattedDate
                )}
              </HeaderColFirstText>
            </BodyColCellSelected>
          ) : format(currentMonth, "M") !== format(day, "M") ? (
            <BodyColNotValid
              id={String(day)}
              onClick={() => onDateClick(cloneDay)}
            >
              <HeaderColFirstText>
                {format(currentMonth, "M") !== format(day, "M") ? (
                  <BodyColNotValid>{formattedDate}</BodyColNotValid>
                ) : (
                  formattedDate
                )}
              </HeaderColFirstText>
            </BodyColNotValid>
          ) : (
            <BodyColCellValid
              id={String(day)}
              onClick={() => onDateClick(cloneDay)}
            >
              <HeaderColFirstText>
                {format(currentMonth, "M") !== format(day, "M") ? (
                  <BodyColNotValid>{formattedDate}</BodyColNotValid>
                ) : (
                  formattedDate
                )}
              </HeaderColFirstText>
            </BodyColCellValid>
          )}
        </BodyCol>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <BodyRow className="row" id={String(day)}>
        {days}
      </BodyRow>
    );
    days = [];
  }
  return <Body className="body">{rows}</Body>;
};

export const MadeCal = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };
  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };
  const onDateClick = (day: Date) => {
    setSelectedDate(day);
  };
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
`;

const Header = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const HeaderColFirst = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 1%;
`;

const HeaderColFirstText = styled.span`
  font-size: 0.8em;
`;

const HeaderColFirstTextMonth = styled.span`
  margin-right: 5px;
  font-size: 1.6em;
  font-weight: 600;
`;

const ColEnd = styled.div`
  width: 20%;
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;

  svg {
    width: 11%;
    height: fit-content;
    margin-left: 5%;
    color: transparentize(gray, 0.2);

    &:hover {
      cursor: pointer;
      transition: 0.2s ease-in-out;
      transform: scale(1.15);
      color: #686868;
    }
  }
`;

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
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 1%;
  background: transparentize(#ebcfc6, 0.6);
  border-radius: 10px;
`;

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
  height: 100%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BodyCol = styled.div`
  width: 13.5%;
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

const BodyColCellValid = styled.div`
  :hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    box-shadow: 1.5px 1.5px 0px 0px transparentize(#686868, 0.1);
    transform: scale(1.01);
    border: none;
    background: transparentize(#686868, 0.5);
  }
`;

const BodyColCellSelected = styled.div`
  box-shadow: 1.5px 1.5px 0px 0px transparentize(#aa5b42, 0.1);
  transform: scale(1.02);
  border: none;
  background: #f3c5b6;
  color: #aa5b42;
  font-weight: 600;
`;
