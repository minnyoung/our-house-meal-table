import React, { useState } from "react";
import styled from "styled-components";
import useRenderCells from "../hooks/useRenderCells";
import { mainMenuStore } from "../store/MainStore";

type RenderCellsProps = {
  currentMonth: Date;
  selectedDate: Date;
  onDateClick: (day: Date) => void;
};

type MenuType = {
  date: string;
  mainMenu: string;
  soup: string;
  sideMenu: string;
};

// 날짜부분
export default function RenderCells({
  currentMonth,
  selectedDate,
  onDateClick,
}: RenderCellsProps) {
  const { rows, day, todayDate } = useRenderCells({ currentMonth });
  const { mainMenu, soup, sideMenu, setMainMenu, setSoup, setSideMenu } =
    mainMenuStore();

  const [menuList, setMenuList] = useState<MenuType[]>([]);
  const [menuDate, setMenuDate] = useState("");
  console.log(rows[0][6]);
  const makeMenuList = () => {
    // 메뉴 존재하지 않는 경우
    if (
      !menuList.find((menuListElement) => menuListElement.date === menuDate)
    ) {
      menuDate &&
        setMenuList((state) => [
          ...state,
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

  console.log("최종메뉴리스트: ", menuList);

  return (
    <Body className="body">
      {rows.map((row) => (
        <BodyCol>
          <BodyRow className="">
            {row.map((dayObject, index) => (
              <BodyColCellBox
                calendarDate={`${dayObject.year}${dayObject.month}${dayObject.date}`}
                todayDate={todayDate}
                onDropCapture={() => setMenuDate(String(dayObject.date))}
                onDrop={makeMenuList}
                onDragOver={(event) => event.preventDefault()}
              >
                <BodyColCellNumber color={String(index)}>
                  {dayObject.date}
                </BodyColCellNumber>
                <BodyColCellMenuContainer>
                  {!dayObject.date && null}
                  <BodyColCellMenu color="#9ee4e87c">
                    {
                      menuList.find((menu) =>
                        row.find(() => dayObject.date === menu.date)
                      )?.mainMenu
                    }
                  </BodyColCellMenu>
                  <BodyColCellMenu color="#ef9fbc76">
                    {
                      menuList.find((menu) =>
                        row.find(() => dayObject.date === menu.date)
                      )?.soup
                    }
                  </BodyColCellMenu>
                  <BodyColCellMenu color="#edae3a6f">
                    {
                      menuList.find((menu) =>
                        row.find(() => dayObject.date === menu.date)
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
