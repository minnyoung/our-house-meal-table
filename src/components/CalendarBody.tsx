import React, { useState } from "react";
import styled from "styled-components";
import useCalendarDays from "../hooks/useCalendarDays";
import { mainMenuStore } from "../store/MainStore";
import { firestore } from "../firebase-config";

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
    mainMenu,
    soup,
    sideMenu,
    menuList,
    setMainMenu,
    setSoup,
    setSideMenu,
    setMenuList,
  } = mainMenuStore();

  const [menuDate, setMenuDate] = useState("");

  const makeMenuList = () => {
    // 메뉴 존재하지 않는 경우
    if (
      !menuList.find((menuListElement) => menuListElement.date === menuDate)
    ) {
      !menuDate.includes("undefined") &&
        setMenuList([
          ...menuList,
          {
            date: menuDate,
            mainMenu: mainMenu,
            soup: soup,
            sideMenu: sideMenu,
          },
        ]);

      // 메뉴가 존재하는 경우
    } else {
      let copyMenuList = [...menuList];

      copyMenuList.map((menu) => {
        if (menu === copyMenuList.find((menu) => menu.date === menuDate)) {
          mainMenu !== "" && (menu.mainMenu = mainMenu);
          soup !== "" && (menu.soup = soup);
          sideMenu !== "" && (menu.sideMenu = sideMenu);
        }
      });

      setMenuList(copyMenuList);
    }

    // state 초기화
    setMainMenu("");
    setSoup("");
    setSideMenu("");
  };

  console.log("최종메뉴: ", menuList);

  return (
    <Body className="body">
      {weeks.map((week) => (
        <BodyCol>
          <BodyRow className="">
            {week.map((day, index) => (
              <BodyColCellBox
                calendarDate={`${day.year}${day.month}${day.day}`}
                todayDate={todayDate}
                onDropCapture={() =>
                  setMenuDate(`${day.year}-${day.month}-${day.day}`)
                }
                onDrop={makeMenuList}
                onDragOver={(event) => event.preventDefault()}
              >
                <BodyColCellNumber color={String(index)}>
                  {day.day}
                </BodyColCellNumber>
                <BodyColCellMenuContainer>
                  {!day.day && null}
                  <BodyColCellMenu color="#9ee4e87c">
                    {
                      menuList.find((menu) =>
                        week.find(
                          () =>
                            `${day.year}-${day.month}-${day.day}` === menu.date
                        )
                      )?.mainMenu
                    }
                  </BodyColCellMenu>
                  <BodyColCellMenu color="#ef9fbc76">
                    {
                      menuList.find((menu) =>
                        week.find(
                          () =>
                            `${day.year}-${day.month}-${day.day}` === menu.date
                        )
                      )?.soup
                    }
                  </BodyColCellMenu>
                  <BodyColCellMenu color="#edae3a6f">
                    {
                      menuList.find((menu) =>
                        week.find(
                          () =>
                            `${day.year}-${day.month}-${day.day}` === menu.date
                        )
                      )?.sideMenu
                    }
                  </BodyColCellMenu>
                </BodyColCellMenuContainer>
              </BodyColCellBox>
            ))}
          </BodyRow>
        </BodyCol>
      ))}
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  height: 89%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-top: 1px solid rgb(170, 170, 170);
  border-left: 1px solid rgb(170, 170, 170);
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

const BodyColCellBox = styled.div<{
  calendarDate: string;
  todayDate: string;
}>`
  width: 100%;
  height: 100%;

  border-right: 1px solid rgb(170, 170, 170);
  border-bottom: 1px solid rgb(170, 170, 170);
  background-color: ${({ calendarDate, todayDate }) =>
    calendarDate === todayDate ? "#ffc8f12e" : "null"};
`;

const BodyColCellNumber = styled.span`
  display: flex;
  padding: 5px;
  font-size: 1em;
  font-weight: 500;
  color: ${({ color }) =>
    color === "0" ? "#ff5151" : color === "6" ? "#2631ff" : "#181818"};
`;

const BodyColCellMenuContainer = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BodyColCellMenu = styled.span`
  margin-bottom: 2px;
  border-radius: 7px;

  /* background-color: ${({ color }) => color}; */
  font-size: 0.9em;
`;
