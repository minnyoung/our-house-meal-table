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
    <Days className="days row weekends">
      {dates.map((date, index) => (
        <DaysCol key={index}>{date}</DaysCol>
      ))}
    </Days>
  );
};

// 날짜 부분
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
      //   해당 달의 날짜가 아니면 date에 null, 맞다면 날짜 그대로 객체에 들어감
      format(currentMonth, "M") !== format(day, "M")
        ? days.push({ date: null, menu: "" })
        : days.push({ date: formattedDate, menu: "" });
      day = addDays(day, 1);
    }
    rows.push(
      <BodyCol>
        <BodyRow className="주" id={String(day)}>
          {days.map((dayObject) => (
            <BodyColCellBox>
              <HeaderColFirstText>{dayObject.date}</HeaderColFirstText>
            </BodyColCellBox>
          ))}
        </BodyRow>
      </BodyCol>
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
  font-size: 1em;
  font-weight: 500;
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
  align-items: center;
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
`;
