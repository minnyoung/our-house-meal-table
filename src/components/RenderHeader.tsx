import React from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import styled from "styled-components";

type RenderHeaderProps = {
    currentMonth: Date;
    prevMonth: () => void;
    nextMonth: () => void;
  };

export default function RenderHeader  ({
    currentMonth,
    prevMonth,
    nextMonth,
  }: RenderHeaderProps) {
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
        <HeaderColEnd className="col col-end">
          <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
          <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
        </HeaderColEnd>
      </Header>
    );
  };

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

const HeaderColEnd = styled.div`
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