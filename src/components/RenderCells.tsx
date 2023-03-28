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
};

// 날짜부분
export default function RenderCells({
  currentMonth,
  selectedDate,
  onDateClick,
}: RenderCellsProps) {
  const { rows, day } = useRenderCells({ currentMonth });
  const { mainMenu, soup, setMainMenu, setSoup } = mainMenuStore();

  const [menuList, setMenuList] = useState<MenuType[]>([]);
  const [menuDate, setMenuDate] = useState("");

  const makeMenuList = () => {
    // 메뉴 존재하지 않는 경우
    if (
      !menuList.find((menuListElement) => menuListElement.date === menuDate)
    ) {
      menuDate &&
        setMenuList((state) => [
          ...state,
          { date: menuDate, mainMenu: mainMenu, soup: soup },
        ]);

      // 메뉴가 존재하는 경우
    } else {
      let copyMenuList = [...menuList];

      copyMenuList.map((menu) => {
        if (menu === copyMenuList.find((menu) => menu.date === menuDate)) {
          mainMenu !== "" && (menu.mainMenu = mainMenu);
          soup !== "" && (menu.soup = soup);
        }
      });

      setMenuList(copyMenuList);
    }

    // state 초기화
    setMainMenu("");
    setSoup("");
  };

  console.log("최종메뉴리스트: ", menuList);

  return (
    <Body className="body">
      {rows.map((row) => (
        <BodyCol>
          <BodyRow className="">
            {row.map((dayObject) => (
              <BodyColCellBox
                id={String(dayObject.date)}
                onDropCapture={() => setMenuDate(String(dayObject.date))}
                onDrop={makeMenuList}
                onDragOver={(event) => event.preventDefault()}
              >
                <BodyColCellNumber>{dayObject.date}</BodyColCellNumber>
                {!dayObject.date && null}
                {
                  menuList.find((menu) =>
                    row.find(() => dayObject.date === menu.date)
                  )?.mainMenu
                }
                {
                  menuList.find((menu) =>
                    row.find(() => dayObject.date === menu.date)
                  )?.soup
                }
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
