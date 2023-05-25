import React, { useState } from "react";
import styled from "styled-components";
import { userMenuStore } from "../../store/userMenuStore";
import useCalendarDays from "../../hooks/useCalendarDays";
import UserMenuText from "../UserMenuText";

type CalendarCellsProps = {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
};

// 날짜부분
// TODO: selectedDate 이용해서 오늘 날짜 표시 변경하기
export default function CalendarBody({
  currentMonth,
  selectedDate,
  onDateClick,
}: CalendarCellsProps) {
  const { weeks, todayDate } = useCalendarDays({
    currentMonth,
  });
  const {
    userMainMenu,
    userSoup,
    userSideMenu,
    userMenuList,
    setUserMainMenu,
    setUserSoup,
    setUserSideMenu,
    setUserMenuList,
  } = userMenuStore();

  const [menuDate, setMenuDate] = useState("");

  const makeMenuList = () => {
    // 메뉴 존재하지 않는 경우
    if (
      !userMenuList.find((menuListElement) => menuListElement.date === menuDate)
    ) {
      !menuDate.includes("undefined") &&
        setUserMenuList([
          ...userMenuList,
          {
            date: menuDate,
            userMainMenu: userMainMenu,
            userSoup: userSoup,
            userSideMenu: userSideMenu,
          },
        ]);

      // 메뉴가 존재하는 경우
    } else {
      let copyMenuList = [...userMenuList];

      copyMenuList.map((menu) => {
        if (menu === copyMenuList.find((menu) => menu.date === menuDate)) {
          userMainMenu !== "" && (menu.userMainMenu = userMainMenu);
          userSoup !== "" && (menu.userSoup = userSoup);
          userSideMenu.length !== 0 &&
            menu.userSideMenu.length < 3 &&
            !menu.userSideMenu.includes(userSideMenu[0]) &&
            (menu.userSideMenu = [...menu.userSideMenu, ...userSideMenu]);
        }
      });

      setUserMenuList(copyMenuList);
    }

    // state 초기화
    setUserMainMenu("");
    setUserSoup("");
    setUserSideMenu([]);
  };

  // console.log("최종메뉴: ", userMenuList);

  return (
    <S.Container className="body">
      {weeks.map((week, index) => (
        <S.WeeksWrapper key={`weeks-${index}`}>
          <S.DaysWrapper>
            {week.map((day, index) => (
              <S.DayBox
                key={`week-${index}`}
                calendarDate={`${day.year}${day.month}${day.day}`}
                todayDate={todayDate}
                onDropCapture={() => {
                  setMenuDate(`${day.year}-${day.month}-${day.day}`);
                }}
                onDrop={makeMenuList}
                onDragOver={(event) => event.preventDefault()}
              >
                <S.DayNumber weekdayNumber={String(index)}>
                  {day.day}
                </S.DayNumber>
                <S.MenuListWrapper>
                  {!day.day ? null : (
                    <>
                      <UserMenuText date={day} menuType="userMainMenu" />
                      <UserMenuText date={day} menuType="userSoup" />
                      <UserMenuText date={day} menuType="userSideMenu" />
                    </>
                  )}
                </S.MenuListWrapper>
              </S.DayBox>
            ))}
          </S.DaysWrapper>
        </S.WeeksWrapper>
      ))}
    </S.Container>
  );
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 89%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-top: 1px solid rgb(170, 170, 170);
    border-left: 1px solid rgb(170, 170, 170);
  `,
  WeeksWrapper: styled.div`
    width: 100%;
    height: 93%;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    border: 0.4px solid transparentize(gray, 0.4);
    border-radius: 3px;
    font-size: 0.8em;
  `,
  DaysWrapper: styled.div`
    width: 100%;
    height: 130px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,

  DayBox: styled.div<{
    calendarDate: string;
    todayDate: string;
  }>`
    width: 100%;
    height: 100%;

    border-right: 1px solid rgb(170, 170, 170);
    border-bottom: 1px solid rgb(170, 170, 170);
    background-color: ${({ calendarDate, todayDate }) =>
      calendarDate === todayDate ? "#ffc8f12e" : "null"};
    :drag {
      background-color: red;
    }
  `,
  DayNumber: styled.span<{ weekdayNumber: string }>`
    display: flex;
    padding: 5px;
    font-size: 1em;
    font-weight: 500;
    color: ${({ weekdayNumber }) =>
      weekdayNumber === "0"
        ? "#ff5151"
        : weekdayNumber === "6"
        ? "#2631ff"
        : "#181818"};
  `,
  MenuListWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
};
