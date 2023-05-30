import React from "react";
import { Icon } from "@iconify/react";
import { format, addMonths, subMonths } from "date-fns";
import styled from "styled-components";
import useResetMenu from "../../hooks/useResetMenu";
import { userMenuStore } from "../../store/userMenuStore";
import { getUid } from "../../utils/uid";
import CalendarHeaderButton from "../element/CalaendarHeaderButton";
import { setUserMenuList } from "../../apis/menuListApis";
import saveCalenderImage from "../../utils/captureCalendar";
import ClearIcon from "../icons/ClearIcon";
import SaveImageIcon from "../icons/SaveImageIcon";
import SaveMenuListIcon from "../icons/SaveMenuListIcon";

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
  const { userMenuList } = userMenuStore();
  const uid = getUid();

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
      <S.HeaderButtonWrapper data-html2canvas-ignore="true">
        <CalendarHeaderButton
          buttonText="초기화"
          menuIcon={<ClearIcon />}
          onClickEvent={handleResetButton}
        />
      </S.HeaderButtonWrapper>
      <S.HeaderDateBox className="col col-start">
        <S.ArrowIconContainer data-html2canvas-ignore="true">
          <Icon icon="bi:arrow-left-circle-fill" onClick={movePreviousMonth} />
        </S.ArrowIconContainer>
        <div>
          {format(currentMonth, "yyyy")}
          <S.HeaderMonth className="text month">
            {format(currentMonth, "M")}월
          </S.HeaderMonth>
        </div>
        <S.ArrowIconContainer data-html2canvas-ignore="true">
          <Icon icon="bi:arrow-right-circle-fill" onClick={moveNextMonth} />
        </S.ArrowIconContainer>
      </S.HeaderDateBox>
      <S.HeaderButtonWrapper data-html2canvas-ignore="true">
        <CalendarHeaderButton
          buttonText="이미지 저장"
          menuIcon={<SaveImageIcon />}
          onClickEvent={() =>
            saveCalenderImage(
              "captureSection",
              format(currentMonth, "M"),
              format(currentMonth, "yyyy")
            )
          }
        />
        <CalendarHeaderButton
          buttonText="메뉴 저장"
          menuIcon={<SaveMenuListIcon />}
          onClickEvent={() => setUserMenuList(userMenuList, uid!)}
        />
      </S.HeaderButtonWrapper>
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px;
    height: 7%;
  `,
  HeaderDateBox: styled.div`
    height: 100%;
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    font-weight: 500;
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 10px;
    }
  `,
  HeaderMonth: styled.span`
    font-size: 2em;
    font-weight: 600;
  `,
  HeaderButtonWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  `,
  ArrowIconContainer: styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
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
