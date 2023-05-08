import React from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import styled from "styled-components";
import useResetMenu from "../hooks/useResetMenu";
import saveCalenderImage from "../utils/captureCalendar";

type CalendarHeaderPropsType = {
  currentMonth: Date;
  movePreviousMonth: () => void;
  moveNextMonth: () => void;
};

export default function CalendarHeader({
  currentMonth,
  movePreviousMonth,
  moveNextMonth,
}: CalendarHeaderPropsType) {
  const { resetMenu } = useResetMenu();

  function handleResetButton() {
    const answer = window.confirm(
      "현재 달의 메뉴를 모두 초기화합니다\n초기화 시 복구가 어려울 수 있습니다"
    );
    if (answer) {
      resetMenu(currentMonth);
    }
  }

  return (
    <S.Container className="header row">
      <S.HeaderDateBox className="col col-start">
        <S.HeaderMonth className="text month">
          {format(currentMonth, "M")}월
        </S.HeaderMonth>
        {format(currentMonth, "yyyy")}
      </S.HeaderDateBox>

      <S.HeaderButtonWrapper
        className="col col-end"
        data-html2canvas-ignore="true"
      >
        <button type="button" onClick={handleResetButton}>
          초기화
        </button>
        <button
          onClick={() =>
            saveCalenderImage(
              "captureSection",
              format(currentMonth, "M"),
              format(currentMonth, "yyyy")
            )
          }
        >
          이미지 저장
        </button>
        <Icon icon="bi:arrow-left-circle-fill" onClick={movePreviousMonth} />
        <Icon icon="bi:arrow-right-circle-fill" onClick={moveNextMonth} />
      </S.HeaderButtonWrapper>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: baseline;

    margin: 10px 0;
    width: 100%;
    height: 7%;
  `,
  HeaderDateBox: styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: baseline;
    margin-left: 1%;
    font-size: 1em;
    font-weight: 500;
  `,
  HeaderMonth: styled.span`
    margin-right: 5px;
    font-size: 2em;
    font-weight: 600;
  `,

  HeaderButtonWrapper: styled.div`
    height: 100%;

    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;

    button {
      width: 50px;
      margin-left: 5%;
      padding: 5px 5px;

      font-size: 10px;
      background-color: transparent;
      border: 1px solid #bebebe;
      border-radius: 5px;
      :hover {
        transition: 0.1s ease-in-out;
        cursor: pointer;
        background-color: #dddddd;
      }
    }

    svg {
      width: 20px;
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
  `,
};
