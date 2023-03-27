import React, { useEffect, useState } from "react";
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
  menu: string;
};

// 날짜부분
export default function RenderCells({
  currentMonth,
  selectedDate,
  onDateClick,
}: RenderCellsProps) {
  const { rows, day } = useRenderCells({ currentMonth });
  const { mainMenu } = mainMenuStore();

  const [menuList, setMenuList] = useState<MenuType[]>([]);

  console.log(menuList);

  return (
    <Body className="body">
      {rows.map((row) => (
        <BodyCol>
          <BodyRow className="주">
            {row.map((dayObject) => (
              <BodyColCellBox
                id={String(dayObject.date)}
                onDrop={() => {
                  if (!menuList.find((menu) => menu.date === dayObject.date)) {
                    dayObject.date &&
                      setMenuList((state) => [
                        ...state,
                        { date: String(dayObject.date), menu: mainMenu },
                      ]);
                  }
                }}
                onDragOver={(event) => event.preventDefault()}
              >
                <BodyColCellNumber>{dayObject.date}</BodyColCellNumber>
                {!dayObject.date && null}
                {
                  menuList.find((menu) =>
                    row.find(() => dayObject.date === menu.date)
                  )?.menu
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
